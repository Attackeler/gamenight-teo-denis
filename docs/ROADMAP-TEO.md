# Gamenight — Teo's roadmap

Your personal task queue at ~40 h/week. This is a **derived view** of [`ROADMAP.md`](./ROADMAP.md) — that file is the source of truth for _why_, learn-first links, design decisions, and gotchas. If the two ever disagree, `ROADMAP.md` wins; when you re-plan, update both in the same PR. Day-to-day ticking: `gamenight-roadmap.html` → **Teo** filter.

**How to use it:** find the current phase, take the top unticked item, branch, build, PR, tag Dragos for review. Full commit messages live in `ROADMAP.md` — only the queue lives here.

---

## Standing duties (every week, not tickable)

- **Review every Dragos PR within ~a day** — his momentum at 15 h/week dies waiting. Apply the explain-back rule; answer his "why" questions in the thread, not in DMs. Budget ~3–5 h/week for review + mentoring while he ramps (roughly through Phase 4) — it's in the timeline.
- **Mentor by questions first.** When he's stuck, ask what he tried before showing code — you're building his debugging muscle, not his dependency on yours.
- **Friday sync (~30 min):** demos, due teach-backs, split next week's tasks.
- **Keep `main` releasable.** You're the safety net until branch protection + his ramp make it structural.

---

## Right now (week of 2026-07-20)

1. **GitHub admin (15 min):** add Dragos as collaborator · turn on branch protection for `main` (require CI + 1 approving review).
2. **Finish Phase 2 components** — your WIP: `Button`, `Card`, plus `Screen` and the theme toggle. Watch for: `Button` currently hardcodes `toggleTheme`, `Card` has hardcoded content — make them generic before the PR.
3. **Be reachable during his setup week.** Fastest unblocks: `.env.local` values, Docker weirdness, Expo Go connection issues (tunnel mode helps: `make start-app`).

---

## Phase 2 — finish the design system 🔨 now

- [ ] `Screen`, `Text`/`AppText`, `Button`, `Card` finalized from tokens + theme toggle (one PR, Dragos reviews — expect and welcome basic questions)
- [ ] Review Dragos's `Input` PR (his first — review generously: explain, don't just request changes)
- [ ] Review his component-gallery PR
- [ ] Verify themes together (you: one platform, him: the other)
- [ ] Receive his teach-back (token → provider → useContext → component)

## Phase 3 — backend schema

- [ ] Create hosted Supabase project; save URL + publishable key
- [ ] dbdiagram sketch **with Dragos** (~1 h call — design decision, do not delegate or rush)
- [ ] Migrations: parties, party roster, game nights, games, game results
- [ ] RLS policies for your tables
- [ ] Supabase client wiring + secure session storage
- [ ] Review his `profiles` migration + RLS
- [ ] Teach-back you owe: the migration → local → hosted flow, end to end

## Phase 4 — auth → tag v0.1.0

- [ ] Auth-state provider + route guards (session-restore without login flash)
- [ ] Profile-on-signup database trigger
- [ ] Review his sign-up/login screens; wire together
- [ ] Teach-back you owe: the signup trigger

## Phase 5 — parties & the roster lock

- [ ] The heart of the app: `locked` + Postgres trigger + RLS — prove a direct API insert is rejected by the database, then make that proof a CI test
- [ ] Review his create-party form, players flow, list + detail screens
- [ ] Teach-back you owe: explain one of _his_ form-validation choices back to him (yes, reversed — it checks you're reading his code too)

## Phase 6 — scoring engine → tag v0.2.0

- [ ] Schema-driven score entry: render from scoring schema, compute winner per archetype, store structured results
- [ ] Decide "win" semantics per archetype **with Dragos**, write it down
- [ ] Write unit tests for _his_ pure functions; he tests yours
- [ ] Review his night flow, generic entry, leaderboard

## Phase 7 — stats

- [ ] Per-game + per-party breakdown SQL (views/RPCs)
- [ ] Head-to-head SQL
- [ ] Review his global-win-rate view and his screens
- [ ] Teach-back you owe: why views/RPCs beat app-side math

## Phase 8 — catalog → tag v0.3.0

- [ ] Live BGG search + caching (XML, rate limits)
- [ ] Scoring archetypes + mechanic-based default classifier
- [ ] Offline LLM enrichment script (cached JSON, top-100 hand-curation)
- [ ] Wire catalog into the game picker (together)
- [ ] Review his import migration, catalog UI, custom-games form
- [ ] Teach-back you owe: player-count SQL rule + import pipeline

## Phase 9 — release → tag v1.0.0

- [ ] Maestro happy-path E2E
- [ ] EAS/local mobile build + web deploy (Dragos shadows every step)
- [ ] Top up tests with him
- [ ] Watch his solo release dry-run — resist helping; notes only

## Track B (post-v1) — your side

- [ ] P10: friendship schema (store once, query both ways) + the RLS test proving non-friends see nothing
- [ ] P11: realtime subscription lifecycle (unsubscribe on unmount, optimistic send)
- [ ] P12: development build + the push-sending Edge Function
- [ ] P13: pair on the first workflow, then alternate; explain his pipelines back in the final teach-back

---

## Timeline you're steering toward

v0.1.0 ~3–4 wks · v0.2.0 ~6–8 wks · v0.3.0 ~9–11 wks · v1.0.0 ~11–12 wks · v1.4.0 ~4 months (from 2026-07-18). Your biggest schedule risks: slow reviews (blocks him), and gold-plating v1.
