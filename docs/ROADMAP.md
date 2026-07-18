# Gamenight — Two-Person Build Roadmap

A phased, learn-by-doing plan for building **Gamenight** as a team of two: an Expo (React Native + web) app where friends create _parties_, lock in a fixed player roster, run _game nights_, record scores, track win rates, browse a board-game catalog, chat, and manage friends.

**The team:**

- **Teo** — ~40 h/week. Started the project, knows the codebase and the stack so far.
- **Dragos** — ~15 h/week. Coming from a bit of Python (and less Java); **new to JavaScript, TypeScript, React, and git workflows**. His on-ramp is **Phase D** below plus `ONBOARDING.md`.

> **This is v3 of the roadmap** — reworked when **Dragos joined** (2026-07). v2 was the solo plan; v1 was the old Teo + Denis team plan (Denis left the project — those files live on in git history). Progress below reflects the **actual git history** as of 2026-07-18. The clickable tracker is `gamenight-roadmap.html`.

> **How this roadmap teaches.** It tells you _what_ to build, in _what order_, _why_, and _when to commit_ — but not _how_. Every phase starts with **Learn first** links. **Design decision** boxes are where the real learning is. Ask for code only when genuinely stuck.

> **The one non-negotiable goal:** by `v1.0.0`, **both of you can explain every part of the app** — every screen, every table, every RLS policy, the scoring engine, the CI pipeline. The workflow below is designed to force that; don't route around it to go faster. Speed gained by siloing gets paid back with interest the first time the other person has to debug your code.

---

## Where the project actually stands (audited from git)

| Evidence                                                                                                                          | Status                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `d48c46e` scaffold, `.gitignore`, ESLint + Prettier, TS strict                                                                    | Phase 0 **done**                                             |
| PRs #3–#9 merged: Supabase local (CLI + Docker), migrations plumbing, `.env.example`, Husky + commitlint, CI, Makefile, templates | Phase 1 **done** (branch protection still off — see Phase 1) |
| `feat/phase-2-design-system` branch: design tokens, theme provider (system/light/dark), persisted preference, Inter fonts         | Phase 2 **in progress** (Teo, not yet merged)                |
| Base components (`AppText`, `Button`, `Card`) exist as WIP on that branch                                                         | Phase 2 remainder — see the split below                      |
| `supabase/migrations/` is empty (dummies deleted)                                                                                 | Real schema **not started** (Phase 3)                        |
| `docs/scripts/` has `games_schema.sql` + BGG import script                                                                        | Phase 8 **pre-work done**                                    |
| No git tags yet                                                                                                                   | First tag `v0.1.0` comes after Phase 4 (auth)                |

**Versions pinned in the repo:** Expo SDK 54 (`~54.0.34`), Expo Router 6, React Native 0.81.5, React 19.1, TypeScript 5.9, Node 26.4 (`engines` + `engine-strict`). Repo: `Attackeler/gamenight-teo-denis` on GitHub.

**Old → new phase numbers** (branch names like `chore/phase-0.7-devops` used the old ones): old 0 → **0** · old 0.7 → **1** · old 0.5 → **2** · old 1 → **3** · old 2 → **4** · old 3 → **5** · old 4 → **6** · old 5 → **7** · old 6 → **8** · old 10 → **9** · old 7 → **10** · old 8 → **11** · old 9 → **12** · old 11 → **13**. **Phase D** (Dragos's on-ramp) is new in v3.

---

## How to use this document

- Work **top to bottom**. Each phase is a shippable slice. Don't jump ahead.
- **Phase D runs in parallel** with Teo finishing Phase 2 — Dragos starts there, not at Phase 2.
- Tick checkboxes as you go (here or in the HTML tracker — the tracker is the day-to-day one; it now shows **who** a task is suggested for).
- Read the **Learn first** links _before_ writing anything in that phase.
- Blockquoted **Commit:** lines tell you when to commit and give you a ready-made message.
- Each phase has a **Split** line (who does what) and ends with a **Teach-back** checkbox. Splits are suggestions sized to ~40 h vs ~15 h a week — rebalance in the weekly sync, never mid-task. **T** = Teo, **D** = Dragos.

---

## Two-person workflow (read once, apply every phase)

The discipline from the solo plan stays; _who reviews_ changes — and review is now the main teaching tool.

- **Branch per task** (`feat/phase-4-auth`, `feat/phase-4-login-screen`), open a PR, **the other person reviews**. No self-merges, no rubber stamps. [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- **The review rule that makes knowledge shared:** the reviewer must be able to **explain the diff back** in their own words before approving. "I don't understand this part" is a review comment, not a failure — for Dragos especially, _that's the mechanism doing its job_. Authors answer "why" questions in the PR thread so the reasoning is written down.
- **Rotate ownership.** Whoever built a system does **not** build the next feature on top of it — the other person does, as its first real consumer. (Teo built the theme system → Dragos builds the next screens with it.)
- **Both-touch rule for the scary parts.** Schema migrations, RLS policies, and the scoring engine are the heart of the app: one person writes, the other extends it or writes its tests — never one person end-to-end.
- **Conventional Commits** — enforced by commitlint, so this is automatic. [Spec](https://www.conventionalcommits.org/en/v1.0.0/) · [Why](https://cbea.ms/git-commit/)
- **Commit small** (≈ one checkbox), **push every session**, **tag milestones** (`v0.1.0`…) — [Pro Git: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- **GitHub Issues are the shared brain.** File one for every bug, idea, and question so nothing lives in one person's head. The HTML tracker is the sprint list.
- **Weekly sync (Friday, ~30 min):** each person demos what shipped, does the phase's **teach-back** if one is due, and you split next week's tasks together. Solo projects die from losing the thread; team projects die from two people holding half a thread each.
- **Before every merge:** CI green (lint + typecheck + prettier) · the other person approved · web still runs · no secrets in the diff.
- **Sizing Dragos's tickets:** ~15 h/week is roughly one meaty task or two small ones, _including_ the learning linked from the phase. Prefer self-contained, UI-first tasks early; grow the scope as the on-ramp checkpoints pass. Blocked >30 min after honestly trying? Write down what you tried, ask Teo. That's not cheating — that's the job.

---

## Cost — still $0

Unchanged; the whole stack is free-tier: [Expo](https://expo.dev/pricing) · [Supabase](https://supabase.com/pricing) (free project **pauses after ~1 week idle** — one click to restore) · [Expo Push](https://docs.expo.dev/push-notifications/overview/) · [EAS Build](https://docs.expo.dev/build/introduction/) (~15+15 builds/mo, or [local builds](https://docs.expo.dev/build-reference/local-builds/)) · [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) · GitHub Actions (2,000 min/mo private) · [Sentry](https://sentry.io/pricing/) 5k errors/mo · free web hosting ([EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/) / Vercel / Netlify / Cloudflare Pages). Maps: skip Google (billing) — free-text locations first, OpenStreetMap later.

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

## Phase D — Dragos's on-ramp (parallel with Phase 2) ⟵ **DRAGOS STARTS HERE**

**Goal:** From "a bit of Python" to shipping reviewed PRs in this repo. Full detail, links, and checkpoints live in **[`ONBOARDING.md`](./ONBOARDING.md)** — this is the tracker-level summary. At ~15 h/week this is **about three weeks**; it front-loads exactly what Phases 2–4 need, nothing more. SQL/Supabase learning comes later, attached to Phase 3.

**Learn first:** everything here _is_ learning — see [`ONBOARDING.md`](./ONBOARDING.md).

- [ ] **Machine setup** end-to-end: Node 26 + npm 11, VS Code + workspace extensions, Docker, clone, `npm install`, `.env.local`, local Supabase up, app running on your phone **and** in the browser. (ONBOARDING §3)
- [ ] **Week 1 — JavaScript, coming from Python** + git basics. Checkpoint: comfortable with functions, objects/arrays, `map`/`filter`, `async`/`await`; opened and merged a practice branch/PR.
- [ ] **Week 2 — TypeScript + React.** Checkpoint: you can read `src/theme/ThemeProvider.tsx` and explain to Teo what every line does — context, state, the `system` mode resolution, AsyncStorage persistence.
- [ ] **Week 3 — React Native + Expo Router.** Checkpoint: you know why the repo has no HTML tags, what `app/_layout.tsx` does, and how a file in `app/` becomes a screen.
- [ ] **First real PR:** build the `Input` base component from `DESIGN.md` tokens (Phase 2 work!) and add it to the component gallery. Teo reviews; iterate until merged.

> **Commit:** `feat(ui): add themed input component`

**Gotchas:** don't read tutorials for weeks — the checkpoints are deliberately small. Type every example out; never paste. When (not if) `npm install` or Docker fights you, that pain _is_ the DevOps learning.

---

# Track A — the lean v1

Milestones: **v0.1.0** auth · **v0.2.0** parties + scoring · **v0.3.0** stats + catalog · **v1.0.0** polished release. Friends, chat, push, and full CI/CD move to Track B so you get a _usable app_ fastest.

---

## Phase 0 — Foundations & project setup ✅ DONE

Scaffolded Expo + TS + Expo Router (`d48c46e`), `.gitignore`, ESLint + Prettier, repo on GitHub, runs on device and web. Toolchain pinned (`engines` + `engine-strict` + `.editorconfig`).

- [x] Toolchain (Node LTS, editor, Git)
- [x] Scaffold Expo app with TypeScript + Expo Router; runs in Expo Go
- [x] Runs in the browser (keep re-checking web every phase)
- [x] Git init, `.gitignore`, first commit, GitHub repo
- [x] ESLint + Prettier + folder structure
- [x] Pin the toolchain (`engines`, `engine-strict`, `.editorconfig`)

---

## Phase 1 — DevOps foundations ✅ DONE (was 0.7)

Done across PRs #3–#9: local Supabase via CLI + Docker, migrations plumbing, `.env.example` with `EXPO_PUBLIC_*` split, Husky pre-commit (lint-staged), commitlint, CI (lint + typecheck + prettier on pushes and PRs), Makefile, issue + PR templates, dummy migrations deleted.

- [x] Supabase local stack (Docker + CLI)
- [x] Versioned migrations workflow (plumbing only — real schema is Phase 3)
- [x] Env management (`.env` git-ignored, `.env.example` committed)
- [x] Husky + lint-staged pre-commit hooks
- [x] commitlint (Conventional Commits enforced)
- [x] CI on PRs (lint, typecheck, prettier)
- [x] Task scripts (Makefile)
- [x] Issue + PR templates
- [x] Dummy migrations deleted

**New leftovers (small, do them now — they make the two-person workflow structural):**

- [ ] **Add Dragos as a repo collaborator** (GitHub → Settings → Collaborators). **T**
- [ ] Turn on **branch protection** for `main`: require the CI check **and one approving review** — that's cross-review enforced by the platform, not by willpower. [Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) **T**

---

## Phase 2 — Design system & theming (was 0.5) 🔨 IN PROGRESS — Teo

**Goal:** One reusable design system — tokens, light/dark/system themes, base components — _before_ feature screens, so every later phase reuses instead of reinventing.

**Split:** Teo finishes the started components and the toggle; **Dragos's Phase D first-PR (`Input`) lands here**; verify together. Dragos reviews Teo's component PRs as his first reviews — ask about anything unclear; that's the point.

**Learn first:** [Expo color themes](https://docs.expo.dev/develop/user-interface/color-themes/) · [`useColorScheme`](https://reactnative.dev/docs/usecolorscheme) · [**React Context** (passing data deeply)](https://react.dev/learn/passing-data-deeply-with-context) + [`useContext`](https://react.dev/reference/react/useContext) — the theme provider is **your own context**, not React Navigation's · [React Navigation theming](https://reactnavigation.org/docs/themes/) (cosmetic, for headers/tab bars later — and never wrap `NavigationContainer` yourself; Expo Router owns it) · [why tokens beat hex values](https://m3.material.io/styles/color/system/overview) · [Expo fonts (`expo-font` + Google Fonts)](https://docs.expo.dev/develop/user-interface/fonts/) · for the base components: [StyleSheet](https://reactnative.dev/docs/stylesheet) · [Pressable](https://reactnative.dev/docs/pressable) · [safe areas](https://docs.expo.dev/develop/user-interface/safe-areas/) · [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)

- [x] Design tokens from `DESIGN.md`: light + dark palettes, spacing scale, type scale, radii. _(done on `feat/phase-2-design-system`)_
- [x] Theme provider reading device scheme; modes: light / dark / system. _(done on the branch)_
- [x] Persist the choice via AsyncStorage (default: system). _(done on the branch)_
- [ ] Base components from tokens — `Screen`, `Text`, `Button`, `Card`, `Input` — plus a theme toggle. **T** (Button / Card / Screen / toggle — WIP exists) + **D** (`Input`, via Phase D)

> **Commit:** `feat(ui): add themed base components and theme toggle`

- [ ] **Component gallery screen** — every base component in both themes on one screen, so styles can't silently drift. **D**, **T** reviews

> **Commit:** `feat(ui): add component gallery screen`

- [ ] Verify both themes on device **and web**; flipping the OS theme updates live. **T + D** (one on phone, one on web)
- [ ] **Teach-back:** Dragos walks Teo through the full path _token file → provider → `useContext` → styled component_ without notes.

> **Push & merge** to `main`.

**Gotchas:** check contrast in _both_ themes; set status-bar style per theme. The provider currently trusts `AsyncStorage.getItem` blindly — what happens on first launch when it returns `null`? Good first review conversation.

---

## Phase 3 — Backend schema (Supabase) (was 1)

**Goal:** Real schema as **migrations**, RLS on everything, app talking to Supabase securely.

**Split:** sketch the model **together** in dbdiagram.io (~1 h call — this is a design decision, not typing). Teo writes the party/roster/night/result migrations; **Dragos writes the `profiles` table migration + its RLS himself** (small, self-contained, teaches the whole workflow) and reviews the rest. Teo wires the client; Dragos generates the TS types.

**Dragos, learn first (before your migration):** SQL basics — [SQLBolt interactive](https://sqlbolt.com/) lessons 1–12, then the links below.

**Learn first:** [Supabase with Expo](https://docs.expo.dev/guides/using-supabase/) · [Expo quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native) · [Tables & relationships](https://supabase.com/docs/guides/database/tables) · [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Migrations with the CLI](https://supabase.com/docs/guides/deployment/database-migrations) · [Generating TS types](https://supabase.com/docs/guides/api/rest/generating-types) · [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/) (session storage on device)

- [ ] Create the free **hosted** Supabase project; save URL + **publishable key** (`sb_publishable_…`, never the secret one client-side). **T**
- [ ] Sketch the full model in dbdiagram.io. **T + D together**
- [ ] Write it as **migration files**: profiles (**D**) · parties, party roster, game nights, games, game results (**T**). Friendships + messages come in their own phases.

> **Commit:** `feat(db): add core schema for profiles, parties, and game nights`

- [ ] **RLS on every table** + policies — `profiles` by **D**, the rest by **T**, each reviewing the other. Not optional: the publishable key would otherwise expose everything.

> **Commit:** `feat(db): enable row level security and access policies`

- [ ] Wire the Supabase client into the app via `EXPO_PUBLIC_*` env vars; secure session storage on device. **T**

> **Commit:** `feat(api): add supabase client with secure session storage`

- [ ] Generate **TypeScript types** from the schema so code and DB can't drift. **D**

> **Commit:** `chore(db): generate typescript types from schema`

- [ ] **Teach-back:** Dragos explains what RLS is and walks through one of Teo's policies; Teo explains the migration → local → hosted flow end-to-end.

> **Push & merge** to `main`.

**Gotchas:** develop against the **local** stack, apply migrations to hosted when a phase merges.

---

## Phase 4 — Authentication (was 2)

**Goal:** Sign up / log in / log out; profile row auto-created; inner screens gated.

**Split:** Teo builds the auth-state provider + route guards (the tricky, async part); **Dragos builds the sign-up and login screens** with Phase 2 components — his first real screens; the design is already specified in `DESIGN.md` §7. Both verify on device + web.

**Learn first:** [Supabase Auth in RN](https://supabase.com/docs/guides/auth/quickstarts/react-native) · [full Expo tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native) · [Expo Router protected routes](https://docs.expo.dev/router/advanced/authentication/) · [Managing user data (the profile-on-signup trigger)](https://supabase.com/docs/guides/auth/managing-user-data)

- [ ] Email + password sign-up, login, logout (using the Phase 2 components). Screens **D**, wiring **T + D**

> **Commit:** `feat(auth): add email/password sign up and login`

- [ ] Profile row on signup — **database trigger** (more robust than an app call). **T**; **D** reviews with his Phase 3 RLS knowledge

> **Commit:** `feat(auth): create profile on sign up`

- [ ] Auth-state provider + **route guards**; handle the session-restore loading state (no login-screen flash). **T**

> **Commit:** `feat(auth): guard app routes by session state`

- [ ] Verify on device **and web**; session survives restart. **T + D**
- [ ] **Teach-back:** Dragos explains the session lifecycle (login → storage → restart → restore → guard); Teo explains the signup trigger.

> **Push, merge, tag `v0.1.0`** — first milestone. 🎉

---

## Phase 5 — Parties & the immutable roster (was 3)

**Goal:** Create a party (name + locked roster), list parties, view details.

**Split:** **Teo** owns the database lock (trigger + RLS + the CI test proving it); **Dragos** owns the UI (create-party form, party list, detail screen) — by now that's his lane. Review across.

**Learn first:** revisit the roster decision above · [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [React Hook Form](https://react-hook-form.com/get-started) + [Zod](https://zod.dev/) (forms + validation) · [Insert/select data](https://supabase.com/docs/reference/javascript/insert)

- [ ] "Create party" flow: **just a name** (when/where/games belong to game nights). **D**

> **Commit:** `feat(party): add create-party form`

- [ ] Add players at creation (pick from existing users; friend invites upgrade later). **D**

> **Commit:** `feat(party): add players to a new party`

- [ ] **Enforce immutability in the database**: `locked` + trigger + RLS. Prove it — a direct API insert must be rejected _by Postgres_, not the UI — and turn that proof into a CI test. **T**

> **Commit:** `feat(db): add trigger to lock party roster after creation`

- [ ] "My parties" list + party detail screen. **D**

> **Commit:** `feat(party): list parties and show party details`

- [ ] **Teach-back:** Dragos explains _why_ the lock lives in Postgres and what exactly the trigger rejects; Teo explains one of Dragos's form-validation choices back to him.

> **Push & merge.**

**Gotchas:** this is _why the app exists_ — make the lock a real guarantee. UTC timestamps; validate inputs (≥ 2 players).

---

## Phase 6 — Game nights & scoring (was 4)

**Goal:** Run a game night inside a party, record per-player scores, see who's winning.

**Split:** **Dragos** builds the generic flow first (new-night form, add-game, one-number-per-player entry, leaderboard UI) — UI + simple mutations. **Teo** builds the schema-driven engine on top. **The scoring logic is both-touch:** whoever writes a pure function, the other writes its unit tests.

**Learn first:** [TanStack Query basics](https://tanstack.com/query/latest/docs/framework/react/overview) · [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) (writing data) · [Supabase joins & nesting](https://supabase.com/docs/guides/database/joins-and-nesting) · [Expo date/time picker](https://docs.expo.dev/versions/latest/sdk/date-time-picker/)

- [ ] "New game night": date/time, location (free text for now), planned games. **D**

> **Commit:** `feat(gamenight): create a game night within a party`

- [ ] Add a played game to the night (typed name for now; catalog picker lands in Phase 8). **D**

> **Commit:** `feat(gamenight): add a played game to a night`

- [ ] **Generic score entry first** (one number per player) + winner. Whole flow end-to-end before going schema-driven. **D**

> **Commit:** `feat(scoring): record per-player scores for a game`

- [ ] **Schema-driven entry**: render inputs from the game's scoring schema; compute winner from its archetype; store structured results. **T**

> **Commit:** `feat(scoring): render score entry from the game's schema`

- [ ] Live **game-night leaderboard**. **D**

> **Commit:** `feat(scoring): show game-night leaderboard`

- [ ] **Teach-back:** each explains the other's half — Dragos: how archetype → rendered inputs → winner; Teo: the night flow and its queries/mutations.

> **Push, merge, tag `v0.2.0`** — playable MVP. 🎉

**Design decision (decide together):** define "win" per archetype and what the _night_ winner means (most game-wins vs most points). Write it down — every Phase 7 stat depends on it. Extract scoring logic into **pure functions**; cross-test them (your highest-risk code). Only the host enters scores (RLS).

---

## Phase 7 — Stats & win rates (was 5)

**Goal:** Win rates overall, per party, per game, head-to-head.

**Split:** **Teo** writes the harder SQL (views/RPCs — the math lives in the database); **Dragos** builds the stats screens and **verifies every number by hand against the committed seed dataset** — the verification _is_ the SQL lesson. Dragos writes the simplest view (global win rate) himself.

**Learn first:** [Postgres aggregates](https://www.postgresql.org/docs/current/functions-aggregate.html) · [DB functions (RPC) & views](https://supabase.com/docs/guides/database/functions) — do the math in the database.

- [ ] Global win rate. **D** (view) + **T** (review)

> **Commit:** `feat(stats): compute global win rate`

- [ ] Per-game and per-party breakdowns. **T** (SQL) + **D** (screens)

> **Commit:** `feat(stats): add per-game and per-party win rates`

- [ ] Head-to-head vs any player (surfaces on friend profiles in Track B). **T** (SQL) + **D** (screens)

> **Commit:** `feat(stats): add head-to-head stats between players`

- [ ] **Teach-back:** Dragos explains one aggregate query line by line; Teo explains why views/RPCs beat computing stats in the app.

> **Push & merge.**

**Gotchas:** one source of truth (a view/RPC) so every screen agrees. Decide tie/missing-score handling _before_ computing. Verify the math against a **committed seed dataset** with known answers.

---

## Phase 8 — Board-game catalog (was 6) — pre-work exists

**Goal:** Searchable, filterable catalog: BGG + custom games, with scoring schemas.

**Already in the repo:** `docs/scripts/games_schema.sql` (games table, indexes, RLS, `search_games_by_players`) and `docs/scripts/import_bgg_games.py` (top ~5000 BGG games importer — **it's Python, Dragos: your home turf; you own the import**). Fold the SQL into a proper **migration** and run the import.

**Split:** **Dragos** — migration from the existing SQL, the Python import run, catalog list UI (FlatList, debounced search, filters), custom-game form. **Teo** — live BGG search + caching (rate limits, XML), scoring archetypes + classifier, the LLM enrichment script. Wire the picker together.

**Learn first:** [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) — XML not JSON, rate-limited, search + thing endpoints · [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) (parse the XML) · [FlatList](https://reactnative.dev/docs/flatlist) (long scrolling lists) · [debouncing](https://developer.mozilla.org/en-US/docs/Glossary/Debounce) (the search box).

- [ ] Convert `games_schema.sql` into a migration; run the BGG import into your table. **D**

> **Commit:** `feat(catalog): add games schema migration and bgg import`

- [ ] Live BGG search for games not yet cached; cache fetched games (respect rate limits). **T**

> **Commit:** `feat(catalog): integrate boardgamegeek search with caching`

- [ ] Custom (non-BGG) games, same fields. **D**

> **Commit:** `feat(catalog): add custom user-created games`

- [ ] Search bar + filters (type, player count, difficulty). Player-count rule (already server-side): query `qmin–qmax` matches when `min ≥ qmin − 1`, `min ≤ qmin`, `max ≥ qmax`; single `n` = `n–n`. **D**

> **Commit:** `feat(catalog): add catalog search bar and filters`

- [ ] Wire the catalog into Phase 6's game picker. **T + D**

> **Commit:** `feat(catalog): select catalog games when scoring`

- [ ] Game detail screen + **scoring schemas**: ~10 win-condition archetypes + a deterministic mechanic-based default classifier for the long tail. **T**

> **Commit:** `feat(catalog): add scoring archetypes and mechanic-based defaults`

- [ ] Enrich popular games via an **offline batch LLM script**, cached as JSON in the DB; hand-curate the top ~100; hosts can override. **T**

> **Commit:** `feat(catalog): generate detailed scoring schemas (cached)`

- [ ] **Teach-back:** Dragos explains the caching strategy and rate-limit handling; Teo explains the player-count SQL rule and the import pipeline.

> **Push, merge, tag `v0.3.0`**. 🎉

**Gotchas:** debounce search; never block the UI on BGG being slow; score entry only ever reads a _stored_ schema, never calls the AI. Mock BGG in tests.

---

## Phase 9 — Testing, polish, web & release (was 10)

**Goal:** Tested, polished, deployed. **v1.0.0.**

**Split:** **Dragos** — loading/empty/error states across all screens (he built most of them), unit-test top-up. **Teo** — Maestro E2E, builds and deploys. Do the release checklist **together** — afterwards, either of you can ship a release alone.

**Learn first:** [Jest in Expo](https://docs.expo.dev/develop/unit-testing/) · [RN Testing Library](https://callstack.github.io/react-native-testing-library/) · [Maestro E2E](https://docs.maestro.dev/) · [EAS Build](https://docs.expo.dev/build/introduction/) · [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)

- [ ] Unit/component tests for core logic (scoring, win-rate math, roster lock) — top up whatever you wrote along the way. **D + T**

> **Commit:** `test: cover scoring and win-rate logic`

- [ ] One Maestro happy-path E2E (sign in → create party → record a score). **T**

> **Commit:** `test(e2e): add core user-journey flow`

- [ ] Loading/empty/error states everywhere; web layout; basic accessibility. **D**

> **Commit:** `fix(ui): add loading, empty, and error states`

- [ ] Mobile build (EAS or local) + web deploy to a free host. **T**, **D** shadowing

> **Commit:** `chore: configure builds and web deploy`

- [ ] **Teach-back (release edition):** Dragos performs a full release dry-run solo, narrating each step; Teo only watches.

> **Push, merge, tag `v1.0.0`** — shipped. 🎉

---

# Track B — after v1.0.0

Same discipline, one phase per branch, tag each. By now Dragos owns whole features with review; the splits below are lighter suggestions — set them in the weekly sync.

## Phase 10 — Friends system (was 7) → v1.1.0

[Many-to-many modeling](https://supabase.com/docs/guides/database/joins-and-nesting). Requests (send/accept/decline) → friends list → friend profile with Phase 7 head-to-head → upgrade party invites to friends-list picks. Store a friendship **once**, query both directions; RLS so only accepted friends see data — and write an RLS test proving a non-friend _can't_. **Split:** **D** — screens + requests flow · **T** — friendship schema + the RLS test · teach-back on the one-row-two-directions query.

> **Commits:** `feat(friends): send and respond to friend requests` · `feat(friends): add friends list` · `feat(friends): show friend profile with stats` · `feat(party): invite players from friends list`

## Phase 11 — Realtime chat (was 8) → v1.2.0

[Supabase Realtime](https://supabase.com/docs/guides/realtime) · [Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes) · [inverted FlatList](https://reactnative.dev/docs/flatlist#inverted) (chat scroll) · [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview) (input above keyboard). Messages table + RLS → 1:1 conversation screen → realtime inserts. Unsubscribe on unmount (leaks hit limits); optimistic send. Group chats: later, decide then. **Split:** **T** — realtime subscription lifecycle · **D** — conversation UI + the messages schema (his first solo schema) · teach-back on subscribe/unsubscribe and optimistic updates.

> **Commits:** `feat(chat): add messages schema and policies` · `feat(chat): add direct message conversation screen` · `feat(chat): stream new messages in realtime`

## Phase 12 — Push notifications (was 9) → v1.3.0

[Expo push](https://docs.expo.dev/push-notifications/overview/) · [setup](https://docs.expo.dev/push-notifications/push-notifications-setup/) · [sending](https://docs.expo.dev/push-notifications/sending-notifications/) · [Edge Functions](https://supabase.com/docs/guides/functions). **Expo Go can't receive Android push since SDK 53** — you need a [development build](https://docs.expo.dev/develop/development-builds/introduction/). Dev build → store push tokens → Edge Function sends on party invite (server-side only, never from the client) → deep-link taps. Web push: out of scope, note it. **Split:** **T** — dev build + Edge Function · **D** — token registration + deep links · teach-back on why sending lives server-side.

> **Commits:** `chore: add development build configuration` · `feat(notifications): register and store push tokens` · `feat(notifications): send push on party invite` · `feat(notifications): deep-link from notification taps`

## Phase 13 — CI/CD & automation (was 11) → v1.4.0

[Actions quickstart](https://docs.github.com/en/actions/quickstart) · [Expo on CI](https://docs.expo.dev/build-reference/build-on-ci/) · [EAS + Actions](https://docs.expo.dev/eas-update/github-actions/) · [Supabase environments](https://supabase.com/docs/guides/deployment/managing-environments) · [Dependabot](https://docs.github.com/en/code-security/dependabot) · [Sentry RN](https://docs.sentry.io/platforms/react-native/). Migrations against disposable Postgres in CI → web deploy on merge + PR previews → EAS builds on tags → auto-apply migrations to prod (token in Actions secrets) → Dependabot + secret scanning + CodeQL → Sentry with sourcemaps → badges + auto-changelog from your Conventional Commits. **Split:** pair on the first workflow file, then alternate per workflow · teach-back — each explains a pipeline the other wrote, end to end.

> **Commits:** `ci: run database migrations against disposable postgres in ci` · `ci: build and deploy web on merge to main` · `ci: trigger eas build on release tags` · `ci: apply supabase migrations to production on release` · `chore(security): enable dependabot, secret scanning, and code scanning` · `feat(observability): add sentry error monitoring with sourcemaps` · `docs: add ci badges and automated changelog`

---

## Timeline (Teo ~40 h/wk + Dragos ~15 h/wk — ranges, not promises)

Two people are **not** twice the speed — especially while one is learning and both are reviewing. Early on, mentoring costs Teo time; the payoff compounds from Phase 5 onward and especially in Track B.

| Milestone                                       | Phases    | Roughly when (from 2026-07-18) |
| ----------------------------------------------- | --------- | ------------------------------ |
| Design system + schema + login (**v0.1.0**)     | D + 2 → 4 | **~3–4 weeks**                 |
| Playable MVP: party + game night (**v0.2.0**)   | 5 → 6     | **~6–8 weeks**                 |
| Stats + catalog (**v0.3.0**)                    | 7 → 8     | **~9–11 weeks**                |
| Polished release (**v1.0.0**)                   | 9         | **~11–12 weeks (~3 months)**   |
| Friends + chat + push + automation (**v1.4.0**) | 10 → 13   | **~4 months**                  |

Faster: small tickets, don't gold-plate v1, test tricky logic as you write it, honest weekly syncs. Slower: big unscoped tasks, skipping reviews "just this once", siloing, long gaps between sessions.

---

## Quick reference — commit & review cadence

| When                                                   | Do                                                      |
| ------------------------------------------------------ | ------------------------------------------------------- |
| Finished one logical change (≈ a checkbox)             | **Commit** (Conventional Commit — commitlint checks it) |
| End of a work session                                  | **Push** your branch                                    |
| Finished a task                                        | PR → **the other person reviews** → merge               |
| Reviewing                                              | Don't approve until you could explain the diff yourself |
| End of a phase                                         | Teach-back done → merge → **push**                      |
| Milestone phases (4, 6, 8, 9, then each Track B phase) | **Tag** `v0.1.0` …                                      |
| Friday                                                 | 30-min sync: demo · teach-back · split next week        |
| Before any merge to `main`                             | CI green · review approved · web still works            |

One phase at a time, keep `main` always working, and let the history tell the story — with two names in it now.
