# Gamenight — BoardGameGeek import

Imports the top ~5000 BGG games into your Supabase `games` table. **Cost: free.**

## Why it's free

- **BoardGameGeek XML API2** is free to use (no key). It is rate-limited, so the script is polite (batches of 20, a short pause between calls, and it retries on `202`/`429`).
- **Supabase free tier** (500 MB database) is plenty — ~5000 games is only a few MB of text.
- Running the script on your own machine is free.

## One-time setup

1. **Create the table.** Open the Supabase SQL editor and run [`games_schema.sql`](games_schema.sql). It creates the `games` table, indexes, Row Level Security (read-only for signed-in users), and the `search_games_by_players` function.

2. **Get the list of top games.** BGG offers a free CSV of every game with its rank: download `boardgames_ranks.csv` from <https://boardgamegeek.com/data_dumps/bg_ranks> (you just need a free BGG account). Put it next to the script. *(The script only needs the `id` and `rank` columns, so any source with those works.)*

3. **Install dependencies.**

   ```
   pip install requests supabase
   ```

4. **Set your Supabase credentials** (find them in Project Settings → API). Use the **service_role** key — it bypasses RLS to write, so keep it on your machine and never put it in the app.

   ```
   export SUPABASE_URL="https://YOURPROJECT.supabase.co"
   export SUPABASE_SERVICE_KEY="your-service_role-key"
   ```

## Run it

```
python import_bgg_games.py --ranks boardgames_ranks.csv --limit 5000
```

Takes ~12–15 minutes (it's rate-limited on purpose). Safe to re-run — it upserts on `bgg_id`, so you can top it up or refresh later (e.g. as a monthly scheduled job).

## What it stores per game

Name, year, description, cover image + thumbnail, min/max players, play time, BGG weight → a `difficulty` label, overall rank, categories, mechanics, and a default `scoring_archetype` (derived from mechanics — `last_standing`, `cooperative`, else `highest_total`). That archetype is the starting point for the schema-driven scoring in `DESIGN.md` §8; enrich popular games with AI later (roadmap Phase 6).

## Player-count search

`search_games_by_players(qmin, qmax)` implements your rule: a game matches when `min ≥ qmin − 1`, `min ≤ qmin`, and `max ≥ qmax` — covers your whole range without starting more than one player below your minimum. Example:

```sql
select name, min_players, max_players
from search_games_by_players(3, 5);
```
