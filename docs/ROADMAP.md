# Gamenight — Solo Build Roadmap

A phased, learn-by-doing plan for building **Gamenight** solo: an Expo (React Native + web) app where friends create _parties_, lock in a fixed player roster, run _game nights_, record scores, track win rates, browse a board-game catalog, chat, and manage friends.

> **This is v2 of the roadmap**, reworked for one developer (~40 h/week). The old team plan (`TEAM.md`, the per-person task lists) is gone. Progress below reflects the **actual git history** as of 2026-07-05 — done items are already ticked. The clickable tracker is `gamenight-roadmap.html` (progress now survives between sessions — see its Export/Import buttons too).

> **How this roadmap teaches.** It tells you _what_ to build, in _what order_, _why_, and _when to commit_ — but not _how_. Every phase starts with **Learn first** links. **Design decision** boxes are where the real learning is. Ask for code only when genuinely stuck.

---

## Where the project actually stands (audited from git)

| Evidence                                                                                                                                | Status                                        |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `d48c46e` scaffold, `.gitignore`, ESLint + Prettier, TS strict                                                                          | Phase 0 **done**                              |
| PR #3 merged: Supabase local (CLI + Docker), migrations plumbing, `.env.example`, Husky + lint-staged + commitlint, CI on PRs, Makefile | Phase 1 **mostly done**                       |
| `supabase/migrations/` contains only the two **dummy** tables                                                                           | Real schema **not started** (Phase 3)         |
| `app/` has only `index.tsx` + `_layout.tsx`                                                                                             | No design system, no features yet             |
| `docs/scripts/` has `games_schema.sql` + BGG import script                                                                              | Phase 8 **pre-work done**                     |
| No git tags yet                                                                                                                         | First tag `v0.1.0` comes after Phase 4 (auth) |

**Versions pinned in the repo:** Expo SDK 54 (`~54.0.34`), Expo Router 6, React Native 0.81.5, React 19.1, TypeScript 5.9. Repo: `Attackeler/gamenight-teo-denis` on GitHub.

**Overall: roughly 1/5 of the checkboxes are done.** The tracker computes the exact % live.

**Old → new phase numbers** (branch names like `chore/phase-0.7-devops` used the old ones): old 0 → **0** · old 0.7 → **1** · old 0.5 → **2** · old 1 → **3** · old 2 → **4** · old 3 → **5** · old 4 → **6** · old 5 → **7** · old 6 → **8** · old 10 → **9** · old 7 → **10** · old 8 → **11** · old 9 → **12** · old 11 → **13**.

---

## How to use this document

- Work **top to bottom**. Each phase is a shippable slice. Don't jump ahead.
- Tick checkboxes as you go (here or in the HTML tracker — the tracker is the day-to-day one).
- Read the **Learn first** links _before_ writing anything in that phase.
- Blockquoted **Commit:** lines tell you when to commit and give you a ready-made message.

---

## Solo git workflow (read once, apply every phase)

Working alone changes _who reviews_, not _the discipline_:

- **Branch per phase** (`feat/phase-4-auth` off `main`), open a PR, **review your own diff on GitHub before merging**. Reading your diff cold catches real bugs. [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- **Conventional Commits** — already enforced by commitlint, so this is automatic now. [Spec](https://www.conventionalcommits.org/en/v1.0.0/) · [Why](https://cbea.ms/git-commit/)
- **Commit small** (≈ one checkbox), **push every session**, **tag milestones** (`v0.1.0`…) — [Pro Git: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- **GitHub Issues replace the team board.** Solo, a full Project board is overhead: file an issue for every bug and idea so nothing lives in your head, and use the HTML tracker as the sprint list. (Optional: a minimal one-column board later.)
- **Self-review checklist before every merge:** lint + typecheck + tests green (CI already gates this) · web still runs · no secrets in the diff.
- **Friday habit:** 15 minutes — what shipped, what's stuck, what's next week. Solo projects die from losing the thread, not from hard bugs.

---

## Cost — still $0

Unchanged from before; the whole stack is free-tier: [Expo](https://expo.dev/pricing) · [Supabase](https://supabase.com/pricing) (free project **pauses after ~1 week idle** — one click to restore) · [Expo Push](https://docs.expo.dev/push-notifications/overview/) · [EAS Build](https://docs.expo.dev/build/introduction/) (~15+15 builds/mo, or [local builds](https://docs.expo.dev/build-reference/local-builds/)) · [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) · GitHub Actions (2,000 min/mo private) · [Sentry](https://sentry.io/pricing/) 5k errors/mo · free web hosting ([EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/) / Vercel / Netlify / Cloudflare Pages). Maps: skip Google (billing) — free-text locations first, OpenStreetMap later.

---

## Tech stack & why

- **Expo SDK 54 + Expo Router + TypeScript** — file-based routing on iOS, Android **and web** from one codebase. [Expo Router](https://docs.expo.dev/router/introduction/) · [Expo + TS](https://docs.expo.dev/guides/typescript/)
- **Supabase** — Postgres + auth + realtime + storage + edge functions, one free tier. Relational fits: the app is all relationships and aggregates. [Docs](https://supabase.com/docs)
- **TanStack Query (server state) + Zustand (UI state)** — don't make one tool do both. [TanStack Query](https://tanstack.com/query/latest) · [in React Native](https://tanstack.com/query/latest/docs/framework/react/react-native) · [Zustand](https://zustand.docs.pmnd.rs/)

---

## Data model overview (think it through before Phase 3)

Shapes you'll need: **Profile** (per user) · **Friendship** (pending/accepted link) · **Party** (host + name + fixed roster — _no_ when/where/what) · **Party roster** (the hard one) · **Game night** (one evening: date/time, location, games played) · **Game** (BGG or custom + scoring schema) · **Game result** (night + game + structured per-player data + winner) · **Scoring schema** (win-condition archetype + fields; drives the dynamic score screen) · **Message**.

**Decision (locked in) — the immutable roster:** a party's players are fixed once set so scores stay comparable, **enforced in the database**: a `locked` state + a **Postgres trigger** (backed by RLS) rejecting roster inserts/deletes/identity changes once locked. Recommended lock moment: when the first game night is created. Write the rule down; decide what the UI shows once locked.

Learn: [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html) · sketch it in [dbdiagram.io](https://dbdiagram.io)

---

# Track A — the lean v1

Milestones: **v0.1.0** auth · **v0.2.0** parties + scoring · **v0.3.0** stats + catalog · **v1.0.0** polished release. Friends, chat, push, and full CI/CD move to Track B so you get a _usable app_ fastest.

---

## Phase 0 — Foundations & project setup ✅ DONE

Scaffolded Expo + TS + Expo Router (`d48c46e`), `.gitignore`, ESLint + Prettier, repo on GitHub, runs on device and web.

- [x] Toolchain (Node LTS, editor, Git)
- [x] Scaffold Expo app with TypeScript + Expo Router; runs in Expo Go
- [x] Runs in the browser (keep re-checking web every phase)
- [x] Git init, `.gitignore`, first commit, GitHub repo
- [x] ESLint + Prettier + folder structure

**Still open (carry-over):** pin the toolchain — add `.nvmrc` (or Volta) + `.editorconfig` so machine and CI build identically.

> **Commit:** `chore: pin node version and add editorconfig`

---

## Phase 1 — DevOps foundations ✅ MOSTLY DONE (was 0.7)

Done in PR #3: local Supabase via CLI + Docker, migrations plumbing, `.env.example` with `EXPO_PUBLIC_*` split, Husky pre-commit (lint-staged), commitlint, CI (lint + typecheck + test on PRs), Makefile task scripts.

- [x] Supabase local stack (Docker + CLI)
- [x] Versioned migrations workflow (plumbing only — real schema is Phase 3)
- [x] Env management (`.env` git-ignored, `.env.example` committed)
- [x] Husky + lint-staged pre-commit hooks
- [x] commitlint (Conventional Commits enforced)
- [x] CI on PRs (lint, typecheck, test)
- [x] Task scripts (Makefile)

**Leftovers to finish now (small):**

- [ ] Turn on **branch protection** for `main` requiring the CI check. [Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [ ] Add **issue + PR templates** (bug / feature / chore) — replaces the old "team board" step. [Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [ ] Delete the two **dummy migrations** in a cleanup commit before Phase 3 writes real ones.

> **Commit:** `chore(devops): add issue and pr templates` · `chore(db): remove dummy migrations`

---

## Phase 2 — Design system & theming (was 0.5) ⟵ **START HERE**

**Goal:** One reusable design system — tokens, light/dark/system themes, base components — _before_ feature screens, so every later phase reuses instead of reinventing.

**Learn first:** [Expo color themes](https://docs.expo.dev/develop/user-interface/color-themes/) · [`useColorScheme`](https://reactnative.dev/docs/usecolorscheme) · [React Navigation theming](https://reactnavigation.org/docs/themes/) · [why tokens beat hex values](https://m3.material.io/styles/color/system/overview)

- [ ] Turn `DESIGN.md` into **design tokens**: light + dark palettes, spacing scale, type scale, radii. Named tokens only — never a raw hex in a screen.

> **Commit:** `feat(theme): add light and dark design tokens`

- [ ] **Theme provider** reading device scheme; modes: light / dark / system.

> **Commit:** `feat(theme): add theme provider with system, light, and dark modes`

- [ ] **Persist** the choice (default: system).

> **Commit:** `feat(theme): persist user theme preference`

- [ ] Base components from tokens — `Screen`, `Text`, `Button`, `Card`, `Input` — plus a theme toggle.

> **Commit:** `feat(ui): add themed base components and theme toggle`

- [ ] Verify both themes on device **and web**; flipping the OS theme updates live.

> **Push & merge** to `main`.

**Gotchas:** check contrast in _both_ themes; set status-bar style per theme. **Pro practice:** a component-gallery screen so styles can't silently drift.

---

## Phase 3 — Backend schema (Supabase) (was 1)

**Goal:** Real schema as **migrations**, RLS on everything, app talking to Supabase securely.

**Learn first:** [Supabase with Expo](https://docs.expo.dev/guides/using-supabase/) · [Expo quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native) · [Tables & relationships](https://supabase.com/docs/guides/database/tables) · [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

- [ ] Create the free **hosted** Supabase project; save URL + **publishable key** (`sb_publishable_…`, never the secret one client-side).
- [ ] Sketch the full model in dbdiagram.io, then write it as **migration files** (you have the workflow from Phase 1): profiles, parties, party roster, game nights, games, game results. Friendships + messages come in their own phases.

> **Commit:** `feat(db): add core schema for profiles, parties, and game nights`

- [ ] **RLS on every table** + policies. Not optional — the publishable key would otherwise expose everything.

> **Commit:** `feat(db): enable row level security and access policies`

- [ ] Wire the Supabase client into the app via `EXPO_PUBLIC_*` env vars; secure session storage on device.

> **Commit:** `feat(api): add supabase client with secure session storage`

- [ ] Generate **TypeScript types** from the schema so code and DB can't drift.

> **Commit:** `chore(db): generate typescript types from schema`

> **Push & merge** to `main`.

**Gotchas:** develop against the **local** stack, apply migrations to hosted when a phase merges. Delete the dummy tables first (Phase 1 leftover).

---

## Phase 4 — Authentication (was 2)

**Goal:** Sign up / log in / log out; profile row auto-created; inner screens gated.

**Learn first:** [Supabase Auth in RN](https://supabase.com/docs/guides/auth/quickstarts/react-native) · [full Expo tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native) · [Expo Router protected routes](https://docs.expo.dev/router/advanced/authentication/)

- [ ] Email + password sign-up, login, logout (using your Phase 2 components).

> **Commit:** `feat(auth): add email/password sign up and login`

- [ ] Profile row on signup — **database trigger** (more robust than an app call).

> **Commit:** `feat(auth): create profile on sign up`

- [ ] Auth-state provider + **route guards**; handle the session-restore loading state (no login-screen flash).

> **Commit:** `feat(auth): guard app routes by session state`

- [ ] Verify on device **and web**; session survives restart.

> **Push, merge, tag `v0.1.0`** — first milestone.

---

## Phase 5 — Parties & the immutable roster (was 3)

**Goal:** Create a party (name + locked roster), list parties, view details.

**Learn first:** revisit the roster decision above · [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · a form/validation lib (React Hook Form + Zod)

- [ ] "Create party" flow: **just a name** (when/where/games belong to game nights).

> **Commit:** `feat(party): add create-party form`

- [ ] Add players at creation (pick from existing users; friend invites upgrade later).

> **Commit:** `feat(party): add players to a new party`

- [ ] **Enforce immutability in the database**: `locked` + trigger + RLS. Prove it — a direct API insert must be rejected _by Postgres_, not the UI.

> **Commit:** `feat(db): add trigger to lock party roster after creation`

- [ ] "My parties" list + party detail screen.

> **Commit:** `feat(party): list parties and show party details`

> **Push & merge.**

**Gotchas:** this is _why the app exists_ — make the lock a real guarantee, and turn that direct-API test into a CI test. UTC timestamps; validate inputs (≥ 2 players).

---

## Phase 6 — Game nights & scoring (was 4)

**Goal:** Run a game night inside a party, record per-player scores, see who's winning.

**Learn first:** [TanStack Query basics](https://tanstack.com/query/latest/docs/framework/react/overview) · [Supabase joins & nesting](https://supabase.com/docs/guides/database/joins-and-nesting)

- [ ] "New game night": date/time, location (free text for now), planned games.

> **Commit:** `feat(gamenight): create a game night within a party`

- [ ] Add a played game to the night (typed name for now; catalog picker lands in Phase 8).

> **Commit:** `feat(gamenight): add a played game to a night`

- [ ] **Generic score entry first** (one number per player) + winner. Whole flow end-to-end before going schema-driven.

> **Commit:** `feat(scoring): record per-player scores for a game`

- [ ] **Schema-driven entry**: render inputs from the game's scoring schema; compute winner from its archetype; store structured results.

> **Commit:** `feat(scoring): render score entry from the game's schema`

- [ ] Live **game-night leaderboard**.

> **Commit:** `feat(scoring): show game-night leaderboard`

> **Push, merge, tag `v0.2.0`** — playable MVP.

**Design decision:** define "win" per archetype and what the _night_ winner means (most game-wins vs most points). Write it down — every Phase 7 stat depends on it. Extract scoring logic into **pure functions and unit-test them** (your highest-risk code). Only the host enters scores (RLS).

---

## Phase 7 — Stats & win rates (was 5)

**Goal:** Win rates overall, per party, per game, head-to-head.

**Learn first:** [Postgres aggregates](https://www.postgresql.org/docs/current/functions-aggregate.html) · [DB functions (RPC) & views](https://supabase.com/docs/guides/database/functions) — do the math in the database.

- [ ] Global win rate.

> **Commit:** `feat(stats): compute global win rate`

- [ ] Per-game and per-party breakdowns.

> **Commit:** `feat(stats): add per-game and per-party win rates`

- [ ] Head-to-head vs any player (surfaces on friend profiles in Track B).

> **Commit:** `feat(stats): add head-to-head stats between players`

> **Push & merge.**

**Gotchas:** one source of truth (a view/RPC) so every screen agrees. Decide tie/missing-score handling _before_ computing. Verify the math against a **committed seed dataset** with known answers.

---

## Phase 8 — Board-game catalog (was 6) — pre-work exists

**Goal:** Searchable, filterable catalog: BGG + custom games, with scoring schemas.

**Already in the repo:** `docs/scripts/games_schema.sql` (games table, indexes, RLS, `search_games_by_players`) and `docs/scripts/import_bgg_games.py` (top ~5000 BGG games importer). Fold the SQL into a proper **migration** and run the import.

**Learn first:** [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) — XML not JSON, rate-limited, search + thing endpoints.

- [ ] Convert `games_schema.sql` into a migration; run the BGG import into your table.

> **Commit:** `feat(catalog): add games schema migration and bgg import`

- [ ] Live BGG search for games not yet cached; cache fetched games (respect rate limits).

> **Commit:** `feat(catalog): integrate boardgamegeek search with caching`

- [ ] Custom (non-BGG) games, same fields.

> **Commit:** `feat(catalog): add custom user-created games`

- [ ] Search bar + filters (type, player count, difficulty). Player-count rule (already server-side): query `qmin–qmax` matches when `min ≥ qmin − 1`, `min ≤ qmin`, `max ≥ qmax`; single `n` = `n–n`.

> **Commit:** `feat(catalog): add catalog search bar and filters`

- [ ] Wire the catalog into Phase 6's game picker.

> **Commit:** `feat(catalog): select catalog games when scoring`

- [ ] Game detail screen + **scoring schemas**: ~10 win-condition archetypes + a deterministic mechanic-based default classifier for the long tail.

> **Commit:** `feat(catalog): add scoring archetypes and mechanic-based defaults`

- [ ] Enrich popular games via an **offline batch LLM script**, cached as JSON in the DB; hand-curate the top ~100; hosts can override.

> **Commit:** `feat(catalog): generate detailed scoring schemas (cached)`

> **Push, merge, tag `v0.3.0`**.

**Gotchas:** debounce search; never block the UI on BGG being slow; score entry only ever reads a _stored_ schema, never calls the AI. Mock BGG in tests.

---

## Phase 9 — Testing, polish, web & release (was 10)

**Goal:** Tested, polished, deployed. **v1.0.0.**

**Learn first:** [Jest in Expo](https://docs.expo.dev/develop/unit-testing/) · [RN Testing Library](https://callstack.github.io/react-native-testing-library/) · [Maestro E2E](https://docs.maestro.dev/) · [EAS Build](https://docs.expo.dev/build/introduction/) · [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)

- [ ] Unit/component tests for core logic (scoring, win-rate math, roster lock) — top up whatever you wrote along the way.

> **Commit:** `test: cover scoring and win-rate logic`

- [ ] One Maestro happy-path E2E (sign in → create party → record a score).

> **Commit:** `test(e2e): add core user-journey flow`

- [ ] Loading/empty/error states everywhere; web layout; basic accessibility.

> **Commit:** `fix(ui): add loading, empty, and error states`

- [ ] Mobile build (EAS or local) + web deploy to a free host.

> **Commit:** `chore: configure builds and web deploy`

> **Push, merge, tag `v1.0.0`** — shipped. 🎉

---

# Track B — after v1.0.0

Same discipline, one phase per branch, tag each.

## Phase 10 — Friends system (was 7) → v1.1.0

[Many-to-many modeling](https://supabase.com/docs/guides/database/joins-and-nesting). Requests (send/accept/decline) → friends list → friend profile with Phase 7 head-to-head → upgrade party invites to friends-list picks. Store a friendship **once**, query both directions; RLS so only accepted friends see data — and write an RLS test proving a non-friend _can't_.

> **Commits:** `feat(friends): send and respond to friend requests` · `feat(friends): add friends list` · `feat(friends): show friend profile with stats` · `feat(party): invite players from friends list`

## Phase 11 — Realtime chat (was 8) → v1.2.0

[Supabase Realtime](https://supabase.com/docs/guides/realtime) · [Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes). Messages table + RLS → 1:1 conversation screen → realtime inserts. Unsubscribe on unmount (leaks hit limits); optimistic send. Group chats: later, decide then.

> **Commits:** `feat(chat): add messages schema and policies` · `feat(chat): add direct message conversation screen` · `feat(chat): stream new messages in realtime`

## Phase 12 — Push notifications (was 9) → v1.3.0

[Expo push](https://docs.expo.dev/push-notifications/overview/) · [setup](https://docs.expo.dev/push-notifications/push-notifications-setup/) · [sending](https://docs.expo.dev/push-notifications/sending-notifications/) · [Edge Functions](https://supabase.com/docs/guides/functions). **Expo Go can't receive Android push since SDK 53** — you need a [development build](https://docs.expo.dev/develop/development-builds/introduction/). Dev build → store push tokens → Edge Function sends on party invite (server-side only, never from the client) → deep-link taps. Web push: out of scope, note it.

> **Commits:** `chore: add development build configuration` · `feat(notifications): register and store push tokens` · `feat(notifications): send push on party invite` · `feat(notifications): deep-link from notification taps`

## Phase 13 — CI/CD & automation (was 11) → v1.4.0

[Actions quickstart](https://docs.github.com/en/actions/quickstart) · [Expo on CI](https://docs.expo.dev/build-reference/build-on-ci/) · [EAS + Actions](https://docs.expo.dev/eas-update/github-actions/) · [Supabase environments](https://supabase.com/docs/guides/deployment/managing-environments) · [Dependabot](https://docs.github.com/en/code-security/dependabot) · [Sentry RN](https://docs.sentry.io/platforms/react-native/). Migrations against disposable Postgres in CI → web deploy on merge + PR previews → EAS builds on tags → auto-apply migrations to prod (token in Actions secrets) → Dependabot + secret scanning + CodeQL → Sentry with sourcemaps → badges + auto-changelog from your Conventional Commits.

> **Commits:** `ci: run database migrations against disposable postgres in ci` · `ci: build and deploy web on merge to main` · `ci: trigger eas build on release tags` · `ci: apply supabase migrations to production on release` · `chore(security): enable dependabot, secret scanning, and code scanning` · `feat(observability): add sentry error monitoring with sourcemaps` · `docs: add ci badges and automated changelog`

---

## Timeline (solo, ~40 h/week — ranges, not promises)

| Milestone                                       | Phases          | Roughly when (from now)      |
| ----------------------------------------------- | --------------- | ---------------------------- |
| Design system + schema + login (**v0.1.0**)     | 1-leftovers → 4 | **~3–4 weeks**               |
| Playable MVP: party + game night (**v0.2.0**)   | 5 → 6           | **~6–8 weeks**               |
| Stats + catalog (**v0.3.0**)                    | 7 → 8           | **~9–11 weeks**              |
| Polished release (**v1.0.0**)                   | 9               | **~11–13 weeks (~3 months)** |
| Friends + chat + push + automation (**v1.4.0**) | 10 → 13         | **~4–4.5 months**            |

Faster: small tickets, don't gold-plate v1, test tricky logic as you write it. Slower: big unscoped tasks, skipping tests, long gaps between sessions.

---

## Quick reference — commit cadence

| When                                                   | Do                                                      |
| ------------------------------------------------------ | ------------------------------------------------------- |
| Finished one logical change (≈ a checkbox)             | **Commit** (Conventional Commit — commitlint checks it) |
| End of a work session                                  | **Push** your branch                                    |
| End of a phase                                         | PR → self-review the diff → merge → **push**            |
| Milestone phases (4, 6, 8, 9, then each Track B phase) | **Tag** `v0.1.0` …                                      |
| Before any merge to `main`                             | Lint + tests green; web still works                     |

One phase at a time, keep `main` always working, and let the history tell the story.
