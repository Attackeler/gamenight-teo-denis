#!/usr/bin/env python3
"""
Import the top ~5000 BoardGameGeek games into the Gamenight Supabase database.

Everything here is FREE:
  - BoardGameGeek's XML API2 is free (just be polite: it is rate-limited).
  - Supabase's free tier (500 MB DB) easily holds ~5000 games (a few MB of text).

How it works
  1. Read the top-ranked game IDs from BGG's free ranks CSV export
     (https://boardgamegeek.com/data_dumps/bg_ranks — needs a free BGG login).
  2. Fetch full details from the XML API2 in batches, with retry/backoff.
  3. Upsert into the `games` table (run games_schema.sql first).

Setup
  pip install requests supabase
  export SUPABASE_URL="https://YOURPROJECT.supabase.co"
  export SUPABASE_SERVICE_KEY="your-service_role-key"   # server-side only, never ship in the app!

Run
  python import_bgg_games.py --ranks boardgames_ranks.csv --limit 5000

Tip: this takes a while (5000 games / 20 per call / ~3s per call ≈ 12–15 min).
You can re-run it safely — it upserts on bgg_id.
"""
import os
import sys
import time
import html
import csv
import argparse
import xml.etree.ElementTree as ET

import requests
from supabase import create_client

API = "https://boardgamegeek.com/xmlapi2/thing"
BATCH = 20          # game IDs per API request (BGG allows many)
SLEEP = 3           # seconds between requests (be polite; avoids throttling)
UPSERT_CHUNK = 500  # rows per Supabase upsert


def top_ids_from_csv(path, limit):
    """Take the lowest 'rank' numbers (rank 1 = best game) from the BGG ranks CSV."""
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            try:
                rank = int(r.get("rank") or r.get("Rank") or 0)
                gid = int(r.get("id") or r.get("ID"))
            except (TypeError, ValueError):
                continue
            if rank > 0:
                rows.append((rank, gid))
    rows.sort()
    return [gid for _, gid in rows[:limit]]


def fetch_batch(ids, tries=6):
    """Fetch one batch of items. BGG returns 202 while it builds the response."""
    url = f"{API}?id={','.join(map(str, ids))}&stats=1"
    resp = None
    for _ in range(tries):
        resp = requests.get(url, timeout=30)
        if resp.status_code == 200:
            return ET.fromstring(resp.content)
        if resp.status_code == 202:        # queued — wait and retry
            time.sleep(SLEEP * 2)
            continue
        if resp.status_code == 429:        # throttled — back off harder
            time.sleep(SLEEP * 4)
            continue
        time.sleep(SLEEP)
    raise RuntimeError(f"BGG request failed for {ids[:3]}... (last status {resp.status_code if resp else '?'})")


def attr(item, tag):
    el = item.find(tag)
    return el.get("value") if el is not None else None


def attr_int(item, tag):
    try:
        return int(attr(item, tag))
    except (TypeError, ValueError):
        return None


def links(item, link_type):
    return [l.get("value") for l in item.findall("link") if l.get("type") == link_type]


def difficulty(weight):
    if weight is None:
        return None
    if weight < 2.0:
        return "Light"
    if weight <= 3.0:
        return "Medium"
    return "Hard"


def archetype(mechanics):
    """A free, deterministic default. Refine with AI later for popular games."""
    m = set(mechanics)
    if "Player Elimination" in m:
        return "last_standing"
    if "Cooperative Game" in m:
        return "cooperative"
    return "highest_total"


def parse_item(item):
    name = None
    for n in item.findall("name"):
        if n.get("type") == "primary":
            name = n.get("value")
            break

    desc_el = item.find("description")
    desc = html.unescape(desc_el.text).strip() if (desc_el is not None and desc_el.text) else None

    weight = rank = None
    ratings = item.find("statistics/ratings")
    if ratings is not None:
        aw = ratings.find("averageweight")
        if aw is not None:
            try:
                weight = round(float(aw.get("value")), 2)
            except (TypeError, ValueError):
                pass
        for rk in ratings.findall("ranks/rank"):
            if rk.get("name") == "boardgame":
                try:
                    rank = int(rk.get("value"))
                except (TypeError, ValueError):
                    rank = None

    mechanics = links(item, "boardgamemechanic")
    return {
        "bgg_id": int(item.get("id")),
        "name": name,
        "year": attr_int(item, "yearpublished"),
        "description": desc,
        "image_url": item.findtext("image") or None,
        "thumbnail_url": item.findtext("thumbnail") or None,
        "min_players": attr_int(item, "minplayers"),
        "max_players": attr_int(item, "maxplayers"),
        "min_time": attr_int(item, "minplaytime"),
        "max_time": attr_int(item, "maxplaytime"),
        "playing_time": attr_int(item, "playingtime"),
        "weight": weight,
        "difficulty": difficulty(weight),
        "rank": rank,
        "categories": links(item, "boardgamecategory"),
        "mechanics": mechanics,
        "scoring_archetype": archetype(mechanics),
        "source": "bgg",
    }


def main():
    ap = argparse.ArgumentParser(description="Import top BGG games into Supabase.")
    ap.add_argument("--ranks", required=True, help="Path to BGG ranks CSV (boardgames_ranks.csv)")
    ap.add_argument("--limit", type=int, default=5000, help="How many top games to import")
    args = ap.parse_args()

    try:
        url = os.environ["SUPABASE_URL"]
        key = os.environ["SUPABASE_SERVICE_KEY"]
    except KeyError as e:
        sys.exit(f"Missing env var: {e}. See the header of this file.")

    sb = create_client(url, key)

    ids = top_ids_from_csv(args.ranks, args.limit)
    print(f"Loaded {len(ids)} top game IDs.")

    buffer = []
    done = 0
    for i in range(0, len(ids), BATCH):
        chunk = ids[i:i + BATCH]
        root = fetch_batch(chunk)
        for item in root.findall("item"):
            buffer.append(parse_item(item))
        done = min(i + BATCH, len(ids))
        print(f"  fetched {done}/{len(ids)}")
        if len(buffer) >= UPSERT_CHUNK:
            sb.table("games").upsert(buffer, on_conflict="bgg_id").execute()
            print(f"  -> upserted {len(buffer)} rows")
            buffer = []
        time.sleep(SLEEP)

    if buffer:
        sb.table("games").upsert(buffer, on_conflict="bgg_id").execute()
        print(f"  -> upserted {len(buffer)} rows")

    print("Done.")


if __name__ == "__main__":
    main()
