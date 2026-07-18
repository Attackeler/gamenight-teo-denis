# Gamenight — Dragos's roadmap

Welcome aboard. This is your personal task queue at ~15 h/week — a **derived view** of [`ROADMAP.md`](./ROADMAP.md), which stays the source of truth for _why_, learn-first links, design decisions, and gotchas. If the two disagree, `ROADMAP.md` wins. Day-to-day ticking: `gamenight-roadmap.html` → **Dragos** filter.

**Read first, in order:** [`ONBOARDING.md`](./ONBOARDING.md) (your guide: setup, Python→JS map, learning path) → `ROADMAP.md` intro + "Two-person workflow" → this file.

**How to use it:** find the current phase, take the top unticked item, branch, build, open a PR, tag Teo. Commit messages are pre-written in `ROADMAP.md`. One meaty task or two small ones per week is the honest pace at 15 h — including the learning.

---

## Standing duties (every week, not tickable)

- **Review every Teo PR.** You will not understand everything at first — that's expected and useful. Don't approve until you could explain the diff; every "why is this like this?" you ask gets answered in writing and becomes documentation. Reviewing his code is half your education.
- **Friday sync (~30 min):** show what you built, do any due teach-back, pick next week's tasks together.
- **Blocked >30 min after honestly trying?** Write down what you tried → ask Teo. Asking with notes is a skill.
- **File a GitHub issue** for every bug and idea, even one-liners.

---

## Right now — Phase D: your on-ramp (~3 weeks)

Full links and details: `ONBOARDING.md`. Checkpoints, not tutorials-forever:

- [ ] **Setup** (§3): Node 26 + npm 11, VS Code + extensions, Docker, clone, `npm install`, `.env.local`, Supabase up — app running on your phone **and** in the browser, `make check-files` green
- [ ] **Week 1 — JS from Python + git:** functions, objects/arrays, `map`/`filter`, destructuring, `async`/`await` · practice branch + PR opened and merged
- [ ] **Week 2 — TypeScript + React:** checkpoint = explain `src/theme/ThemeProvider.tsx` to Teo, line by line
- [ ] **Week 3 — React Native + Expo Router:** checkpoint = you know how a file in `app/` becomes a screen and what `_layout.tsx` does
- [ ] **First real PR:** the `Input` component from `DESIGN.md` §5 tokens — iterate on Teo's review until merged 🎉

## Phase 2 — design system (lands during your on-ramp)

- [ ] `Input` (your Phase D finale — it counts here too)
- [ ] Component gallery screen: every base component, both themes, one page
- [ ] Review Teo's base-components PR — ask about anything unclear; that's the job
- [ ] Verify themes together (you take web or phone, he takes the other)
- [ ] **Teach-back you owe:** token file → provider → `useContext` → styled component, no notes

## Phase 3 — backend schema (your first SQL)

- [ ] **Before touching it:** [SQLBolt](https://sqlbolt.com/) lessons 1–12 (~4 h)
- [ ] dbdiagram sketch **with Teo** (~1 h call)
- [ ] **Your first backend work:** the `profiles` table migration + its RLS policies
- [ ] Generate TypeScript types from the schema
- [ ] Review Teo's migrations + RLS — one "why?" per policy, minimum
- [ ] **Teach-back you owe:** what RLS is + walk through one of _Teo's_ policies

## Phase 4 — auth screens → tag v0.1.0

- [ ] Sign-up, login, logout screens from your Phase 2 components (design is in `DESIGN.md` §7 — sign-in layout is specified exactly)
- [ ] Verify with Teo: device + web, session survives restart
- [ ] Review his provider/guards PR and the signup trigger
- [ ] **Teach-back you owe:** the session lifecycle — login → storage → restart → restore → guard

## Phase 5 — parties UI (your lane now)

- [ ] Create-party form (learn: React Hook Form + Zod — links in `ROADMAP.md`)
- [ ] Add-players flow (≥ 2 players validation)
- [ ] "My parties" list + party detail screen
- [ ] Review Teo's roster-lock trigger — this is the app's core guarantee; understand what it rejects
- [ ] **Teach-back you owe:** why the lock lives in Postgres, not in the UI

## Phase 6 — game nights & scoring → tag v0.2.0

- [ ] New-game-night form (date/time, location, planned games)
- [ ] Add-a-played-game flow
- [ ] Generic score entry (one number per player) + winner — whole flow end-to-end
- [ ] Game-night leaderboard
- [ ] Write unit tests for Teo's scoring functions (he tests yours)
- [ ] **Teach-back you owe:** how archetype → rendered inputs → computed winner works (his half!)

## Phase 7 — stats screens + your first SQL view

- [ ] Global win-rate view (your first `CREATE VIEW`; Teo reviews)
- [ ] Stats screens for the per-game / per-party / head-to-head data
- [ ] Verify every number by hand against the seed dataset — tedious on purpose; it teaches the aggregates
- [ ] **Teach-back you owe:** one aggregate query, line by line

## Phase 8 — catalog → tag v0.3.0 (your Python moment)

- [ ] Fold `docs/scripts/games_schema.sql` into a migration; run `import_bgg_games.py` — the importer is Python, so you own it
- [ ] Catalog list UI: FlatList + debounced search + filters
- [ ] Custom (non-BGG) games form
- [ ] Wire the picker with Teo
- [ ] Review his BGG search/caching + archetypes
- [ ] **Teach-back you owe:** the caching + rate-limit strategy (his half)

## Phase 9 — polish & release → tag v1.0.0

- [ ] Loading / empty / error states on every screen (mostly your screens — you'll feel every missing one)
- [ ] Test top-up with Teo
- [ ] Shadow his build + deploy setup
- [ ] **Finale: solo release dry-run** — you ship, narrating every step; Teo only watches. When this works, the "both understand everything" goal is real

## Track B (post-v1) — you own whole features now

- [ ] P10: friends screens + requests flow
- [ ] P11: chat conversation UI + the messages schema (your first solo schema)
- [ ] P12: push-token registration + deep links
- [ ] P13: alternate CI pipelines with Teo; final teach-back — each explains the other's pipelines

---

## Your growth arc, explicitly

Phase D–4: guided, UI-first, small scopes → Phase 5–7: you own the whole UI lane + first backend pieces → Phase 8–9: you own pipelines and ship a release → Track B: full features, solo schemas. By `v1.0.0` you can explain every screen, table, policy, and pipeline in this repo — that's the deal, and the teach-backs prove it as you go.
