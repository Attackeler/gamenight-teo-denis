# Gamenight — Dragos's roadmap

Welcome aboard. This is your personal task queue at ~15 h/week — a **derived view** of [`ROADMAP.md`](./ROADMAP.md), which stays the source of truth for _why_, learn-first links, design decisions, and gotchas. If the two disagree, `ROADMAP.md` wins. Day-to-day ticking: **`gamenight-roadmap.html`** → click **Dragos**.

**Read first, in order:** [`ONBOARDING.md`](./ONBOARDING.md) (setup + your learning path, section 3A) → `ROADMAP.md` intro, "The goal everything else serves", and "Team workflow" → the [git recipe](./playbook/git-pr-flow.md) → this file.

**Your role:** you're the middle of the team — learning from Teo's code and recipes, and **teaching Marcian through your reviews**. Reviewing his PRs first isn't a chore on top of your work; explaining something is the fastest way to really understand it.

---

## Standing duties (every week, not tickable)

- **Review every Teo PR.** You won't understand everything at first — that's expected and useful. Don't approve until you could explain the diff; every "why is this like this?" gets answered in writing and becomes documentation.
- **Review every Marcian PR first** (Teo approves after you). Explain, don't just request changes; point him to the recipe step he missed.
- **Replicas:** do them from the recipe first, ask second, and fix the recipe in the same PR wherever it wasn't enough.
- **Weekly sync (~45 min):** show what you built, do any due teach-back, update your skills-matrix row, pick next week's tasks.
- **Blocked > 30 min after honestly trying?** Write down what you tried → ask in the team chat.
- **File a GitHub issue** for every bug and idea, even one-liners.

---

## Right now — Phase O, your on-ramp (~3 weeks)

Full links and details: `ONBOARDING.md` section 3A.

- [ ] **Setup** (ONBOARDING §2): app on your phone **and** in the browser, `make check-files` green — tell Teo every problem you hit (it goes in the local-env recipe)
- [ ] **Week 1 — JavaScript from Python + git** · 🔁 practice PR from the git recipe: remove the stray `supabase/snippets/` SQL file
- [ ] **Week 2 — TypeScript + React** · checkpoint: explain `src/theme/ThemeProvider.tsx` to Teo, line by line
- [ ] **Week 3 — React Native + Expo Router** · checkpoint: how a file in `app/` becomes a screen, what `_layout.tsx` does
- [ ] Review Marcian's practice PR (team table) — your first review of his work

## Phase 2 — design system

- [ ] 🔁 **`Input` from Teo's base-component recipe** — your first real PR 🎉
- [ ] 📖 **Component gallery screen + the new-screen recipe** (Marcian replicates it in Phase 4 — write it for him)
- [ ] Review Teo's provider fix + base components
- [ ] Review Marcian's `Avatar` first (Teo approves after you)
- [ ] Verify themes together (phone + web)
- [ ] 🧠 Teach-back you owe: token file → provider → `useContext` → styled component, no notes

## Phase 3 — backend schema (your first SQL)

- [ ] **Before touching it:** [SQLBolt](https://sqlbolt.com/) lessons 1–12 (~4 h)
- [ ] 👥 Data-model session (all three)
- [ ] 🔁 **`profiles` table + RLS** from Teo's table recipe
- [ ] 📖 **Generate TypeScript types + the regenerate-types recipe**
- [ ] Review Teo's migrations + RLS — one "why?" per policy, minimum
- [ ] Review Marcian's `avatar_color` column first
- [ ] 🧠 Teach-back you owe: what RLS is + walk through one of Teo's policies

## Phase 4 — auth screens → tag v0.1.0

- [ ] 📖 **Sign-up + login screens** (`DESIGN.md` §7) with React Hook Form + Zod — **plus the form recipe** (Marcian replicates it three times later — make it good)
- [ ] Review Teo's provider/guards + signup trigger · Marcian's Settings screen first
- [ ] Verify with the team: phone + web, session survives restart
- [ ] 🧠 Teach-back you owe: the session lifecycle — login → storage → restart → restore → guard

## Phase 5 — parties & the roster lock

- [ ] 👥 Roster-lock design session
- [ ] Add players at creation (≥ 2 players)
- [ ] 🔁 **The roster lock trigger** from Teo's trigger recipe — the heart of the app; Teo proves it with a test
- [ ] 🔁 **Party detail screen** from Teo's load-data recipe
- [ ] Review Marcian's create-party form first
- [ ] 🧠 Teach-back you owe: your trigger, line by line

## Phase 6 — game nights & scoring → tag v0.2.0

- [ ] 👥 Scoring rules session
- [ ] 🔁 **New-game-night form** from your own form recipe
- [ ] 🔁 **Generic score entry + winner** as a tested pure function, from Teo's unit-test recipe
- [ ] 🔁 **Game-night leaderboard** from the load-data recipe
- [ ] Review Teo's Jest setup + schema engine · Marcian's played-game step + tests first
- [ ] 🧠 Teach-back you owe: archetype → rendered inputs → winner (Teo's half)

## Phase 7 — stats + your first SQL view

- [ ] 📖 **Global win-rate view + the SQL view recipe** (your first `CREATE VIEW`)
- [ ] 🔁 **Stats screens** from the load-data recipe
- [ ] Review Teo's seed + breakdowns + head-to-head · Marcian's seed scenarios + view first
- [ ] 🧠 Teach-back you owe: Teo's head-to-head SQL

## Phase 8 — catalog → tag v0.3.0 (your Python moment)

- [ ] 📖 **Games migration + run `import_bgg_games.py` + the import recipe** — Marcian re-runs it from your recipe alone, so write every step
- [ ] Catalog list UI: FlatList + debounced search + filters
- [ ] Wire the picker with Teo
- [ ] Review Teo's BGG search/caching + archetypes · Marcian's custom-game form first
- [ ] 🧠 Teach-back you owe: the caching + rate-limit strategy (Teo's)

## Phase 9 — polish & release → tag v1.0.0

- [ ] Test top-up on code you didn't write
- [ ] 📖 **Loading / empty / error states** on screens you didn't build + the UI-states recipe
- [ ] 🔁 **Second E2E flow** (sign up → log out → log in) from Teo's recipe
- [ ] 🔁 **Finale: solo release dry-run** from the release recipe — you ship, narrating every step; Teo only watches
- [ ] 🧠 Whole-app teach-back: one screen, one table, one test you didn't write

## Track B (post-v1) — you own whole features now

- [ ] P10: 🔁 friendships schema + RLS + the "non-friend sees nothing" database test
- [ ] P11: conversation screen · 🔁 live leaderboard from Teo's realtime recipe
- [ ] P12: 📖 the push Edge Function + its recipe · deep links
- [ ] P13: 🔁 web deploy on merge + PR previews · Dependabot + secret scanning + CodeQL

---

## Your growth arc, explicitly

Phase O–4: guided, UI-first, small scopes, your first recipes → Phase 5–7: you write the app's core guarantee (the roster lock) and the first SQL view → Phase 8–9: you own the import pipeline and ship a release alone → Track B: full features and the backend pieces. By `v1.0.0`, every row of the skills matrix has at least a **U** in your column and most have an **R** — and Marcian learned half of his from your recipes and reviews.
