# Gamenight — docs

A free **mobile + web app** for friend groups to track board-game-night scores and win rates — a learn-by-doing project built by **Teo** (~40 h/week) and **Dragos** (~15 h/week). Shared goal, written into the roadmap: by `v1.0.0` **both** of us can explain every part of the app.

---

## Start here

**Dragos:** start with **`ONBOARDING.md`** — machine setup, a Python-to-JS/TS mental map, your 3-week learning path, and how we work. Then skim the rest of this list.

**Both:**

1. **`ROADMAP.md`** — the full two-person build plan: phase order, what's already done (audited from git history), who does what per phase (**Split** lines), teach-backs, learning links, ready-made commit messages, and the timeline. **The source of truth.**
2. **`ROADMAP-TEO.md`** / **`ROADMAP-DRAGOS.md`** — personal task queues derived from it: your own tasks, review duties, and teach-backs per phase.
3. **`gamenight-roadmap.html`** — the same plan as a **clickable tracker** with an **All / Teo / Dragos** filter. Keep it open while you work; it's the sprint list.
4. **`DESIGN.md`** — the design spec (feeds Phase 2, the design system).
5. **`ONBOARDING.md`** — Dragos's on-ramp guide (Phase D in the roadmap).
6. **`EXTENSIONS.md`** — recommended editor extensions, phase by phase.
7. **`gamenight-mockups.html`** / **`gamenight-web.html`** — visual mockups.
8. **`scripts/`** — SQL schema + BoardGameGeek import helpers (used in Phase 8; see its README).

---

## The tracker — and how progress is saved

**Double-click `gamenight-roadmap.html`** — it opens in your browser, nothing to install.

- Click the **squares** to tick off tasks. Progress auto-saves in that browser (localStorage).
- Everything already completed in the repo comes **pre-ticked**, so even a fresh browser starts from reality, not zero.
- Tasks wear a **T** / **D** / **T+D** chip — the suggested owner from the roadmap's Split lines (rebalance in the Friday sync, not mid-task).
- **Export progress** downloads a tiny `.json` backup; **Import progress** restores it — use it to move ticks between browsers/computers (you each track your own copy).
- **Expand / Collapse all** folds phases; **Reset** returns to the baked-in baseline.

---

## The build order (milestones)

Track A (lean v1): `v0.1.0` auth → `v0.2.0` parties + scoring → `v0.3.0` stats + catalog → `v1.0.0` polished release.
Track B (after v1): `v1.1.0` friends → `v1.2.0` chat → `v1.3.0` push → `v1.4.0` CI/CD.

Phase D (Dragos's on-ramp) runs in parallel with Phase 2.

**Rough timeline at ~40 + ~15 h/week:** playable MVP in ~6–8 weeks, polished `v1.0` in ~3 months. Full breakdown in `ROADMAP.md`.

---

## Tech stack (all free)

**Expo SDK 54 (React Native + web)** · **TypeScript** · **Supabase** (Postgres, auth, realtime, storage) · **GitHub** (code, Issues, Actions CI) · **Docker** (backend locally). Total cost: **$0**.

---

## Project history

Started as a Teo + Denis team project (v1 roadmap), went solo when Denis left (v2), and became a team again when **Dragos joined in 2026-07** (v3, current). The old team files (`TEAM.md`, `gamenight-team.html`, the per-person trackers) were deleted in the solo rework — anything still useful was folded into `ROADMAP.md`. They live on in git history.
