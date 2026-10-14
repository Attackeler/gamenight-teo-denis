# Gamenight — Teo's roadmap

Your personal task queue at ~40 h/week. This is a **derived view** of [`ROADMAP.md`](./ROADMAP.md) — that file is the source of truth for _why_, learn-first links, design decisions, and gotchas. If the two ever disagree, `ROADMAP.md` wins; when you re-plan, update both (and `gamenight-roadmap-data.js`) in the same PR. Day-to-day ticking: **`gamenight-roadmap.html`** → click **Teo**.

**Your role now:** lead builder, first author of most recipes, and mentor to two people at very different stages. The most valuable thing you produce in the next two months isn't code — it's **recipes good enough that Dragos and Marcian can replicate your work without you.**

---

## Standing duties (every week, not tickable)

- **Review every Dragos PR within ~a day**, and Marcian's after Dragos has reviewed it. Momentum at 15 h and 7 h a week dies waiting. Apply the explain-back rule; answer "why" in the thread, not in DMs.
- **Budget ~6–8 h/week for reviews + mentoring** through Phase 5. It's in the timeline.
- **Mentor by questions first.** When someone's stuck, ask what they tried before showing code — you're building their debugging muscle, not their dependency on you.
- **Write recipes while the work is fresh** — in the same PR, never "later".
- **Run the weekly sync** (~45 min): demos, teach-backs, skills matrix, split next week.
- **Keep `main` releasable.** You're the safety net until branch protection + their ramp make it structural.

---

## Right now (week of 2026-10-19)

1. **Merge this docs PR** (`docs/team-roadmap`) — it replaces `docs/two-person-roadmap`; delete that branch afterwards.
2. **GitHub admin (15 min):** add Dragos and Marcian as collaborators · branch protection on `main` (require CI + 1 approving review).
3. **Rescue the July WIP:** commit and push `src/components/` + `app/index.tsx` on `feat/phase-2-design-system`, then merge `main` into it. The only conflicts will be in `docs/` — take `main`'s version there.
4. **Phase 2, in this order:** fix the theme provider → finish `Screen` / `AppText` / `Button` / `Card` → **write the base-component recipe**. Dragos needs that recipe in his week 3 (~early November) for `Input`.
5. **Setup week:** Marcian's setup call (~2–3 h) · be reachable for Dragos · write `docs/playbook/local-env.md` from every problem they hit.
6. **Pick the weekly sync slot** with both of them.

---

## Phase O — on-ramps

- [ ] Pick the weekly sync slot + team chat (with D + M)
- [ ] 👥 Marcian's machine setup, on a call
- [ ] 📖 `local-env` recipe — from the problems they actually hit

## Phase 1 — leftovers

- [ ] Add Dragos and Marcian as collaborators
- [ ] Branch protection on `main` (CI + 1 approving review)
- [ ] Fix the hooks and npm scripts (`.husky/pre-commit` rewrites `commit-msg` and skips lint-staged; `format` and `reset-project` scripts are broken)
- [ ] Review Dragos's practice PR (stray SQL snippet) and Marcian's (team table, after Dragos)

## Phase 2 — finish the design system 🔨 now

- [ ] Commit + push the July WIP
- [ ] Fix the provider: `null` on first launch → system · toggle from the _shown_ theme · three-way System / Light / Dark · no startup flash
- [ ] `Screen`, `AppText`, `Button` (primary / tinted / plain), `Card` — generic, typed, tokens only
- [ ] 📖 Base-component recipe
- [ ] Theme toggle (segmented control) + themed header and status bar
- [ ] Review Dragos's `Input` (his first real PR — review generously: explain, don't just request changes) and his gallery + new-screen recipe
- [ ] Approve Marcian's `Avatar` after Dragos reviews it
- [ ] Verify themes with them (phone + web)
- [ ] 🧠 Receive the teach-backs (Dragos: token → provider → `useContext` → component · Marcian: one color, file to screen)

## Phase 3 — backend schema

- [ ] Hosted Supabase project; share keys via a password manager
- [ ] 👥 Data-model session (~1.5 h, driver rotates — let Marcian drive a stretch)
- [ ] 📖 `parties` + `party_members` + RLS, and the table-migration-RLS recipe
- [ ] `game_nights`, `games`, `game_results` + RLS
- [ ] Supabase client + secure session storage + "how the app talks to Supabase" note
- [ ] Review Dragos's `profiles` + types recipe, and Marcian's `avatar_color` column
- [ ] 🧠 Your teach-back: the migration → local → hosted flow

## Phase 4 — auth → tag v0.1.0

- [ ] Auth-state provider + route guards (no login flash)
- [ ] 📖 Profile-on-signup trigger + the trigger recipe (Dragos replicates it for the roster lock — write it for him)
- [ ] Review Dragos's sign-up / login + form recipe, Marcian's Settings screen
- [ ] 🧠 Your teach-back: the signup trigger
- [ ] Bus-factor check, then tag

## Phase 5 — parties & the roster lock

- [ ] 👥 Roster-lock design session
- [ ] 📖 "My parties" list + the load-data recipe
- [ ] 📖 Prove the lock with a database test in CI + the db-test recipe — **Dragos writes the trigger; you prove it**
- [ ] Review Dragos's players flow, lock trigger, detail screen · Marcian's create-party form
- [ ] 🧠 Your teach-back: how TanStack Query caches and refreshes

## Phase 6 — scoring → tag v0.2.0

- [ ] 👥 Scoring rules session → `docs/SCORING.md`
- [ ] 📖 Jest setup + `test` in CI + the unit-test recipe
- [ ] Schema-driven score entry (Marcian writes the tests for your archetype functions — both-touch)
- [ ] Review Dragos's night flow, generic entry, leaderboard · Marcian's played-game step + tests
- [ ] 🧠 Your teach-back: Dragos's leaderboard query
- [ ] Bus-factor check, then tag

## Phase 7 — stats

- [ ] 📖 Seed dataset with hand-computed answers + the seed recipe
- [ ] 🔁 Per-game + per-party win rates from Dragos's view recipe (yes, you replicate too)
- [ ] Head-to-head SQL
- [ ] Review Dragos's view + screens · Marcian's seed scenarios + view
- [ ] 🧠 Your teach-back: Dragos's view

## Phase 8 — catalog → tag v0.3.0

- [ ] 📖 Live BGG search + caching + the external-API recipe
- [ ] Scoring archetypes + mechanic-based default classifier
- [ ] Offline LLM enrichment script (cached JSON, top-100 hand-curation)
- [ ] Wire catalog into the game picker (with Dragos)
- [ ] Review Dragos's import + list UI · Marcian's import re-run + custom-game form
- [ ] 🧠 Your teach-back: the player-count SQL rule
- [ ] Bus-factor check, then tag

## Phase 9 — release → tag v1.0.0

- [ ] Test top-up — on code you didn't write
- [ ] 📖 Maestro happy path + the E2E recipe
- [ ] 📖 Mobile build + web deploy + the release recipe
- [ ] Watch Dragos's release dry-run and Marcian's web-deploy dry-run — **resist helping; notes only**
- [ ] 🧠 Whole-app teach-back: one screen, one table, one test you didn't write
- [ ] Bus-factor check + skills matrix review, then tag

## Track B (post-v1) — your side

- [ ] P10: friend requests flow · invite from friends list
- [ ] P11: 📖 realtime messages + the realtime recipe
- [ ] P12: development build · 🔁 game-night notification Edge Function from Dragos's recipe
- [ ] P13: 👥 pair with Marcian on the first CI workflow (he drives) · production migrations · Sentry

---

## Timeline you're steering toward

From 2026-10-19: v0.1.0 ~5–6 weeks (late November) · v0.2.0 ~10–12 weeks (mid-January) · v0.3.0 ~15–17 weeks · v1.0.0 ~18–21 weeks (March 2027) · v1.4.0 ~7–8 months. Your biggest schedule risks: slow reviews (they block two people now), recipes written late or not at all, and gold-plating v1.
