# Gamenight — docs

A free **mobile + web app** for friend groups to track board-game-night scores and win rates — a solo learn-by-doing project by **Teo**.

---

## Start here

1. **`ROADMAP.md`** — the full solo build plan: phase order, what's already done (audited from git history), learning links, ready-made commit messages, and the timeline.
2. **`gamenight-roadmap.html`** — the same plan as a **clickable tracker**. Keep it open while you work.
3. **`DESIGN.md`** — the design spec (feeds Phase 2, the design system).
4. **`EXTENSIONS.md`** — recommended editor extensions, phase by phase.
5. **`gamenight-mockups.html`** / **`gamenight-web.html`** — visual mockups.
6. **`scripts/`** — SQL schema + BoardGameGeek import helpers (used in Phase 8; see its README).

---

## The tracker — and how progress is saved now

**Double-click `gamenight-roadmap.html`** — it opens in your browser, nothing to install.

- Click the **squares** to tick off tasks. Progress auto-saves in that browser (localStorage).
- Everything already completed in the repo comes **pre-ticked**, so even a fresh browser starts from reality, not zero.
- **Export progress** downloads a tiny `.json` backup; **Import progress** restores it. Use this if you switch browsers/computers, or if the browser ever clears local file data (the reason progress used to vanish between sessions).
- **Expand / Collapse all** folds phases; **Reset** returns to the baked-in baseline.

---

## The build order (milestones)

Track A (lean v1): `v0.1.0` auth → `v0.2.0` parties + scoring → `v0.3.0` stats + catalog → `v1.0.0` polished release.
Track B (after v1): `v1.1.0` friends → `v1.2.0` chat → `v1.3.0` push → `v1.4.0` CI/CD.

**Rough timeline at ~40 h/week:** playable MVP in ~6–8 weeks, polished `v1.0` in ~3 months. Full breakdown in `ROADMAP.md`.

---

## Tech stack (all free)

**Expo SDK 54 (React Native + web)** · **TypeScript** · **Supabase** (Postgres, auth, realtime, storage) · **GitHub** (code, Issues, Actions CI) · **Docker** (backend locally). Total cost: **$0**.

---

## Removed team files

`TEAM.md`, `gamenight-team.html`, `gamenight-roadmap-denis.html`, and `gamenight-roadmap-teo-tasks.html` were deleted when the project went solo — anything still useful was folded into `ROADMAP.md`. They live on in git history.
