# Gamenight — docs

A free **mobile + web app** for friend groups to track board-game-night scores and win rates — a learn-by-doing project built by a team of three. Shared goal, written into the roadmap: **anyone on the team can do any kind of task in this repo** — if one of us did it once, the others can do it again from the recipe.

## The team

| Who     | Time         | Role right now                                                | Favorite board game |
| ------- | ------------ | ------------------------------------------------------------- | ------------------- |
| Teo     | ~40 h/week   | Started the project · writes most first recipes · mentors     | —                   |
| Dragos  | ~15 h/week   | Coming from Python · on-ramp, then UI + backend replicas      | —                   |
| Marcian | ~5–10 h/week | Learning programming from zero · on-ramp, then small replicas | —                   |

_Fill in your favorite game — Marcian's practice PR does exactly that (see `playbook/git-pr-flow.md`)._

---

## Start here

**Dragos and Marcian:** start with **`ONBOARDING.md`** — machine setup, your learning path (3A Dragos, 3B Marcian), and how we work. Then your personal roadmap.

**Everyone:**

1. **`ROADMAP.md`** — the full team plan: the replication system, what's already done (audited from git), who does what per phase, recipes and replicas, teach-backs, learning links, ready-made commit messages, the timeline. **The source of truth.**
2. **`ROADMAP-TEO.md`** / **`ROADMAP-DRAGOS.md`** / **`ROADMAP-MARCIAN.md`** — personal task queues derived from it: your tasks, review duties, and teach-backs per phase.
3. **`gamenight-roadmap.html`** — the clickable tracker: an **All / Teo / Dragos / Marcian** view, per-person progress, and the **skills matrix**. Bookmark your view: `gamenight-roadmap.html#marcian` (or `#teo`, `#dragos`).
4. **`playbook/`** — **recipes**: how to do each kind of task, written by whoever did it first. Start with [`playbook/README.md`](./playbook/README.md) and [`playbook/git-pr-flow.md`](./playbook/git-pr-flow.md).
5. **`DESIGN.md`** — the design spec (feeds Phase 2, the design system).
6. **`EXTENSIONS.md`** — recommended editor extensions, phase by phase.
7. **`gamenight-mockups.html`** / **`gamenight-web.html`** — visual mockups.
8. **`scripts/`** — SQL schema + BoardGameGeek import helpers (used in Phase 8; see its README).

---

## The tracker — and how progress is saved

**Double-click `gamenight-roadmap.html`** — it opens in your browser, nothing to install. Click your name to see only your tasks.

- Click the **squares** to tick off tasks. Progress auto-saves in that browser (localStorage).
- Everything already completed in the repo comes **pre-ticked**, so even a fresh browser starts from reality, not zero.
- Tasks wear owner chips (**T** / **D** / **M** / **All**) and kind chips: **📖 recipe** (first of its kind — write the recipe) · **🔁 replica** (do it from a recipe, then fix the recipe) · **👥 together** · **🧠 teach-back**.
- The **skills matrix** at the top: click a cell to cycle **–** → **U** (understand) → **R** (replicated) → **O** (own it). Update it together in the weekly sync.
- **Export progress** downloads a small `.json` backup (ticks + matrix); **Import progress** restores it — use it to move between browsers or computers.
- **Maintenance rule:** the task list lives in **`gamenight-roadmap-data.js`** — edit tasks there and mirror the change in `ROADMAP.md` (and the personal roadmaps); never edit tasks inside the HTML file.

---

## The build order (milestones)

Track A (lean v1): `v0.1.0` auth → `v0.2.0` parties + scoring → `v0.3.0` stats + catalog → `v1.0.0` polished release.
Track B (after v1): `v1.1.0` friends → `v1.2.0` chat → `v1.3.0` push → `v1.4.0` CI/CD.

Phase O (Dragos's and Marcian's on-ramps) runs in parallel with Phase 2.

**Rough timeline from 2026-10-19:** login (`v0.1.0`) in ~5–6 weeks, playable MVP in ~10–12 weeks, polished `v1.0` around March 2027. Full breakdown in `ROADMAP.md`.

---

## Tech stack (all free)

**Expo SDK 54 (React Native + web)** · **TypeScript** · **Supabase** (Postgres, auth, realtime, storage) · **GitHub** (code, Issues, Actions CI) · **Docker** (backend locally). Total cost: **$0**.

---

## Project history

Started as a Teo + Denis team project (v1 roadmap), went solo when Denis left (v2), was replanned for Teo + Dragos in 2026-07 (v3 — never merged; the project paused from mid-July to mid-October), and became a team of three when **Marcian joined in 2026-10** (v4, current — built around recipes and replication so knowledge never sits in one head). Older files and per-person trackers live on in git history.
