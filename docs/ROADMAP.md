# Gamenight — Team Build Roadmap

A phased, learn-by-doing plan for building **Gamenight** as a team of three: an Expo (React Native + web) app where friends create _parties_, lock in a fixed player roster, run _game nights_, record scores, track win rates, browse a board-game catalog, chat, and manage friends.

**The team:**

| Who         | Time         | Starting point                                                                         | Starts at                   |
| ----------- | ------------ | -------------------------------------------------------------------------------------- | --------------------------- |
| **Teo**     | ~40 h/week   | Started the project; knows the stack and the codebase so far                           | Phase 1 leftovers → Phase 2 |
| **Dragos**  | ~15 h/week   | A bit of Python (less Java); **new to JavaScript, TypeScript, React, git workflows**   | Phase O, Dragos path        |
| **Marcian** | ~5–10 h/week | **Beginner** — little or no coding yet. Learns programming itself through this project | Phase O, Marcian path       |

> **This file is the _what_ and the _why_.** **Who does what**, split **equally** into baby steps, lives in [`TASKS.md`](./TASKS.md). **Where we are right now** is in [`STATUS.md`](./STATUS.md). New machine? [`SETUP.md`](./SETUP.md).
>
> **Version history:** v5 (2026-11-02) split the work equally and moved ownership to `TASKS.md`. v4 (2026-10) was reworked when **Marcian joined**. v3 was the Teo + Dragos plan (2026-07, never merged; the project paused 2026-07-18 → 2026-10). v2 was the solo plan, v1 the original Teo + Denis plan. Older versions live in git history.

> **How this roadmap teaches.** It tells you _what_ to build, in _what order_, _why_, and _when to commit_ — not _how_. Every phase starts with **Learn first** links. The _how_ lives in the **playbook** (`docs/playbook/`), written by the team as you go — see below.

---

## The goal everything else serves

> **Anyone on the team can do any kind of task in this repo.** If one person did it once, the other two can do it again — from the written recipe, without asking.

Not "everyone has seen everything". Everyone has _done_ every kind of work at least once: built a component, written a migration and its RLS, added a trigger, written a test, shipped a release. The workflow below is designed to force that. Don't route around it to go faster — speed gained by siloing gets paid back with interest the first time someone else has to touch that code.

### The replication system (how the goal actually happens)

1. **📖 Recipes.** The **first** time anyone does a new _kind_ of task (first base component, first migration, first trigger, first E2E test…), the same PR adds a recipe to [`docs/playbook/`](./playbook/README.md): numbered steps, copy-pasteable commands, the files you touch, how to check it worked, and a link to that PR as the worked example. **A first-of-its-kind PR isn't done without its recipe.** Template: [`playbook/_TEMPLATE.md`](./playbook/_TEMPLATE.md).
2. **🔁 Replicas.** Every recipe is then tested by the **other two** doing a _sibling task_ — a real task of the same kind (Teo builds `Button` + writes the recipe → Dragos builds `Input` and Marcian builds `Avatar` from that recipe alone). Wherever the recipe wasn't enough, the replicator **fixes the recipe in the same PR**. The recipe is what's being tested, not the person.
3. **The skills matrix.** One row per kind of work, one column per person (in the tracker, and below). Levels: **U** understand it (can explain a real example) → **R** replicated it from the recipe → **O** own it (can do a new one without the recipe and teach it). The roadmap assigns tasks so the matrix fills up.
4. **Cross-review with explain-back.** Every PR is reviewed by someone who didn't write it, and the reviewer must be able to **explain the diff back in their own words** before approving. "I don't understand this part" is a review comment, not a failure.
5. **🧠 Teach-backs.** Every phase ends with teach-backs where people explain parts **they didn't build**. If nobody but the author can explain something, that's a bug — file an issue and fix the recipe.
6. **👥 Together sessions.** The few decisions that shape everything (data model, roster lock, scoring rules) are made **all three together** on a call, driver rotating every ~15 minutes — Marcian drives too.
7. **Bus-factor check at every tag.** Before tagging a milestone, pick three random files; for each, someone who _didn't_ write it explains it. Gaps become issues.

**Targets:** by `v1.0.0`, every cell of the matrix is at least **U** and every Track A skill has at least two people at **R** or better. By `v1.4.0`, every cell is **R** or better. Replication costs time on purpose — roughly +25% versus one person doing each kind of task once. That's the price of the goal, and it's budgeted in the timeline.

---

## Where the project stands

**Phase 0 and 1 are done** (PRs #1–#9, #11, #13, #15, #18–#20; small leftovers below). **Phase 2 is in progress** (tokens, theme and component drafts merged in PR #12), and **Phases 3+ haven't started**. `docs/scripts/` already holds the Phase 8 pre-work (`games_schema.sql` + the BGG import script). The full, dated picture (branches, known bugs) is in **[`STATUS.md`](./STATUS.md)**.

**Versions pinned in the repo:** Expo SDK 58 (`^58.0.0`, updated weekly by a PR from the `Expo update` workflow), Expo Router 58, React Native 0.88.1, React 19.3, TypeScript 6.0, Node 26.4 (`engines` + `engine-strict`). Repo: `Attackeler/gamenight-teo-denis` on GitHub.

**Old → new phase numbers** (branch names like `chore/phase-0.7-devops` used the old ones): old 0 → **0** · old 0.7 → **1** · old 0.5 → **2** · old 1 → **3** · old 2 → **4** · old 3 → **5** · old 4 → **6** · old 5 → **7** · old 6 → **8** · old 10 → **9** · old 7 → **10** · old 8 → **11** · old 9 → **12** · old 11 → **13**. **Phase O** (on-ramps) replaces v3's Phase D.

---

## How to use this document

- Work **top to bottom**. Each phase is a shippable slice. Don't jump ahead.
- **Phase O (learning) runs alongside** the tasks. Dragos and Marcian learn from `ONBOARDING.md` while doing their equal share of `TASKS.md`.
- Tick progress in the tracker (`gamenight-roadmap.html`; click your name for your own view). **Who owns a task: `TASKS.md` wins. What the task is and why: this file wins.**
- Read the **Learn first** links _before_ writing anything in that phase.
- Blockquoted **Commit:** lines give you a ready-made Conventional Commit message.
- Markers: **📖** writes a recipe · **🔁** replica (follows a recipe) · **👥** together session · **🧠** teach-back. Owners aren't listed here; they're in `TASKS.md` and the tracker (equal split, swapped only in the weekly sync, never mid-task).

---

## Team workflow (read once, apply every phase)

- **Branch per task** (`feat/phase-4-login-screen`, `docs/playbook-db-table`), open a PR, someone else reviews. **No self-merges, no rubber stamps** — branch protection enforces one approving review + green CI. [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- **Who reviews whom.** Default reviewer is the person who knows that area **least** (that's how knowledge spreads):
    - Teo's PRs → **Dragos** reviews (approves); Marcian **shadow-reviews** (reads it, leaves at least one question; doesn't block).
    - Dragos's PRs → **Teo** reviews; Marcian shadows when it's in an area he's about to replicate.
    - Marcian's PRs → **Dragos reviews first** (teaching is the fastest way to learn), then **Teo** approves.
- **Authors answer "why" in the PR thread**, not in DMs — the thread becomes documentation.
- **Rotate ownership.** Whoever built a system does **not** build the next feature on top of it — someone else does, as its first real consumer.
- **Both-touch rule for the scary parts.** Migrations, RLS, triggers, and the scoring engine: one person writes, another writes its tests or extends it — never one person end-to-end.
- **Conventional Commits** (enforced by commitlint) · **commit small** (≈ one checkbox) · **push every session** — unpushed work doesn't exist (the July WIP sat on one disk for three months; don't repeat that). [Spec](https://www.conventionalcommits.org/en/v1.0.0/)
- **GitHub Issues are the shared brain.** Every bug, idea, question, and "the recipe didn't cover this" gets an issue.
- **Weekly sync (~45 min, a fixed slot that works for Marcian):** each person demos what shipped · due teach-backs · update the skills matrix · split next week's tasks. Three people holding a third of a thread each is how team projects die; the sync is the cure.
- **Sizing: equal split.** Everyone has the same number of tasks per step, each broken into baby steps of 1–2 hours. Teo's extra hours go to reviews, pairing and unblocking, not to taking other people's tasks. A step finishes when the slowest column finishes, so a column that keeps lagging gets pairing, not extra pressure.
- **Blocked > 30 min after honestly trying?** Write down what you tried → ask in the team chat. Asking with notes is a skill, not a weakness.
- **Before every merge:** CI green · approved by someone else · web still runs · no secrets in the diff · recipe added or updated if it was a first-of-its-kind task.

---

## The skills matrix

The tracker has the live version (click a cell to cycle **–** → **U** → **R** → **O**). The recipe for each row lands in the phase shown; that's when replicas start.

| Kind of work                                 | Recipe written by · phase | Replicas (who · phase)    |
| -------------------------------------------- | ------------------------- | ------------------------- |
| Branch → commit → PR → review → merge        | already written           | D, M · Phase O            |
| Run & fix the local dev environment          | D + M · Phase O           | T (checks it) · Phase O   |
| Base component                               | T · Phase 2               | D (`Input`), M (`Avatar`) |
| New screen / route                           | D · Phase 2               | M (Settings, P4)          |
| Table + migration + RLS                      | T · Phase 3               | D (P3), M (P3, P11)       |
| Regenerate TypeScript types                  | D · Phase 3               | M · P3                    |
| Form that saves data (React Hook Form + Zod) | D · Phase 4               | M (P5, P6, P8), D (P6)    |
| Database trigger                             | T · Phase 4               | D (roster lock, P5)       |
| Database test (prove a rule)                 | T · Phase 5               | M (P9), D (P10)           |
| Load & show data (TanStack Query)            | T · Phase 5               | D (P5, P6, P7), M (P10)   |
| Pure function + unit test (Jest)             | T · Phase 6               | D, M · P6                 |
| Seed data with known answers                 | T · Phase 7               | M · P7                    |
| SQL view / RPC                               | D · Phase 7               | M, T · P7                 |
| BGG import (Python)                          | D · Phase 8               | M · P8                    |
| External API + caching                       | T · Phase 8               | D (Edge Function, P12)    |
| Loading / empty / error states               | D · Phase 9               | M · P9                    |
| E2E flow (Maestro)                           | T · Phase 9               | D · P9                    |
| Build & release                              | T · Phase 9               | D, M (dry-runs) · P9      |
| Realtime subscription                        | T · Phase 11              | D · P11                   |
| Edge Function                                | D · Phase 12              | T · P12                   |
| CI workflow                                  | T + M · Phase 13          | D, M · P13                |

---

## Cost — still $0

The whole stack is free-tier: [Expo](https://expo.dev/pricing) · [Supabase](https://supabase.com/pricing) (free project **pauses after ~1 week idle** — one click to restore) · [Expo Push](https://docs.expo.dev/push-notifications/overview/) · [EAS Build](https://docs.expo.dev/build/introduction/) (limited free builds/month, or [local builds](https://docs.expo.dev/build-reference/local-builds/)) · [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) · GitHub Actions (2,000 min/mo private) · [Sentry](https://sentry.io/pricing/) free tier · free web hosting ([EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/) / Vercel / Netlify / Cloudflare Pages). Maps: skip Google (billing) — free-text locations first, OpenStreetMap later.

---

## Tech stack & why

- **Expo SDK 58 + Expo Router + TypeScript** — file-based routing on iOS, Android **and web** from one codebase. [Expo Router](https://docs.expo.dev/router/introduction/) · [Expo + TS](https://docs.expo.dev/guides/typescript/)
- **Supabase** — Postgres + auth + realtime + storage + edge functions, one free tier. Relational fits: the app is all relationships and aggregates. [Docs](https://supabase.com/docs)
- **TanStack Query (server state) + Zustand (UI state, only if needed)** — don't make one tool do both. [TanStack Query](https://tanstack.com/query/latest) · [in React Native](https://tanstack.com/query/latest/docs/framework/react/react-native) · [Zustand](https://zustand.docs.pmnd.rs/)

---

## Data model overview (think it through before Phase 3)

Shapes you'll need: **Profile** (per user) · **Friendship** (pending/accepted link) · **Party** (host + name + fixed roster — _no_ when/where/what) · **Party roster** (the hard one) · **Game night** (one evening: date/time, location, games played) · **Game** (BGG or custom + scoring schema) · **Game result** (night + game + structured per-player data + winner) · **Scoring schema** (win-condition archetype + fields; drives the dynamic score screen) · **Message**.

**Decision (locked in) — the immutable roster:** a party's players are fixed once set so scores stay comparable, **enforced in the database**: a `locked` state + a **Postgres trigger** (backed by RLS) rejecting roster inserts/deletes/identity changes once locked. Recommended lock moment: when the first game night is created. Write the rule down; decide what the UI shows once locked.

Learn: [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html) · sketch it in [dbdiagram.io](https://dbdiagram.io)

---

## Phase O — On-ramps (parallel with Phase 2) ⟵ **DRAGOS AND MARCIAN START HERE**

**Goal:** Dragos and Marcian go from where they are to shipping reviewed PRs in this repo. Two paths, one shared setup. Full guide, links, and checkpoints: **[`ONBOARDING.md`](./ONBOARDING.md)**.

- **Dragos path** (~3 weeks at ~15 h/week): JavaScript from Python → TypeScript + React → React Native. First real PR: `Input` (Phase 2).
- **Marcian path** (~8–10 weeks at 5–10 h/week): programming itself, in JavaScript → git → React → React Native. First real PR: `Avatar` (Phase 2, lands whenever he gets there — it doesn't block the Phase 2 merge).

**Teo's part:** be on the setup calls ([`SETUP.md`](./SETUP.md)), review the local-environment recipe, and run the first weekly sync. His own Step 0 tasks are in `TASKS.md`.

- [ ] Pick a **weekly sync slot** that works for all three (~45 min) and a team chat channel.
- [ ] 📖 **Dragos + Marcian** write the **local dev environment** recipe from the setup problems they actually hit, each with its fix.

> **Commit:** `docs(playbook): add local environment recipe`

**Dragos:**

- [ ] **Machine setup** end-to-end ([`SETUP.md`](./SETUP.md)) — app on your phone **and** in the browser, `make check-files` green.
- [ ] **Week 1 — JavaScript, coming from Python** + git. Checkpoint: the top-scorer function without looking up syntax · 🔁 practice PR following the git recipe: remove the stray `supabase/snippets/` SQL file (Phase 1 leftover).

> **Commit:** `chore(db): remove stray sql snippet`

- [ ] **Week 2 — TypeScript + React.** Checkpoint: explain `src/theme/ThemeProvider.tsx` to Teo line by line.
- [ ] **Week 3 — React Native + Expo Router.** Checkpoint: how a file in `app/` becomes a screen, what `_layout.tsx` does.

**Marcian:**

- [ ] 👥 **Machine setup on a call with Teo** (~2–3 h): terminal basics, git, VS Code, Node, Docker, clone, app on your phone **and** in the browser.
- [ ] **Weeks 1–4 — programming basics in JavaScript:** values and variables, `if`, loops, functions, arrays, objects. Checkpoint: write the top-scorer function (array of `{ name, score }` → the winner's name) and explain each line.
- [ ] **Week 1–2 — practice PR** on a call: 🔁 follow the git recipe to fill in your favorite board game in the team table in `docs/README.md`. **Weeks 4–5:** Learn Git Branching, so the flow makes sense.

> **Commit:** `docs: add my favorite game to the team table`

- [ ] **First shadow review:** read one of Teo's or Dragos's PRs and leave at least one question in the thread. (Then one per week.)
- [ ] **Weeks 5–8 — React + React Native.** Checkpoint: trace one color from `src/theme/tokens.ts` all the way to the screen, and explain it to Dragos.

**Gotchas:** don't read tutorials for weeks — the checkpoints are deliberately small. Type every example out; never paste code you don't understand. When `npm install` or Docker fights you, that pain _is_ the DevOps learning — and it goes in the recipe.

---

# Track A — the lean v1

Milestones: **v0.1.0** auth · **v0.2.0** parties + scoring · **v0.3.0** stats + catalog · **v1.0.0** polished release. Friends, chat, push, and full CI/CD move to Track B so you get a _usable app_ fastest.

---

## Phase 0 — Foundations & project setup ✅ DONE

Scaffolded Expo + TS + Expo Router (`d48c46e`), `.gitignore`, ESLint + Prettier, repo on GitHub, runs on device and web. Toolchain pinned (`engines` + `engine-strict` + `.editorconfig`).

- [x] Toolchain (Node, editor, Git)
- [x] Scaffold Expo app with TypeScript + Expo Router; runs in Expo Go
- [x] Runs in the browser (keep re-checking web every phase)
- [x] Git init, `.gitignore`, first commit, GitHub repo
- [x] ESLint + Prettier + folder structure
- [x] Pin the toolchain (`engines`, `engine-strict`, `.editorconfig`)

---

## Phase 1 — DevOps foundations ✅ DONE + leftovers (was 0.7)

Done across PRs #3–#9: local Supabase via CLI + Docker, migrations plumbing, `.env.example` with `EXPO_PUBLIC_*` split, Husky, commitlint, CI (lint + prettier + typecheck on pushes and PRs), Makefile, issue + PR templates, dummy migrations deleted.

- [x] Supabase local stack (Docker + CLI)
- [x] Versioned migrations workflow (plumbing only — real schema is Phase 3)
- [x] Env management (`.env` git-ignored, `.env.example` committed)
- [x] Husky pre-commit + commitlint (Conventional Commits enforced)
- [x] CI on PRs (lint, prettier, typecheck)
- [x] Task scripts (Makefile)
- [x] Issue + PR templates
- [x] Dummy migrations deleted

**Leftovers (small — they make the team workflow structural):**

- [ ] **Add Dragos and Marcian as repo collaborators** (GitHub → Settings → Collaborators).
- [x] **Branch protection** for `main`: it's already protected. Check that it requires the CI check **and one approving review**, so cross-review is enforced by the platform, not by willpower. [Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [x] **Fix the pre-commit hook:** `.husky/pre-commit` rewrites `.husky/commit-msg` on every commit and never runs lint-staged (so `.lintstagedrc.ts` is dead config). _Done 2026-11-04, PR #20._

> **Commit:** `fix(devops): run lint-staged in pre-commit`

- [ ] **Fix two npm scripts:** `format` calls `prettier:fix` as if it were a command; `reset-project` points at a deleted `scripts/` folder.

> **Commit:** `fix(devops): fix format script and remove reset-project`

- [ ] **Stop tracking Python bytecode:** `docs/scripts/__pycache__/` is committed; untrack it and git-ignore `__pycache__/`.

> **Commit:** `chore: stop tracking python bytecode`

- [ ] Remove the stray `supabase/snippets/Untitled query 554.sql` and git-ignore `supabase/snippets/` — **Dragos's practice PR** (Phase O).

---

## Phase 2 — Design system & theming (was 0.5) 🔨 IN PROGRESS

**Goal:** One reusable design system — tokens, light/dark/system themes, base components — _before_ feature screens, so every later phase reuses instead of reinventing. And the first two recipes: **base component** and **new screen**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [Expo color themes](https://docs.expo.dev/develop/user-interface/color-themes/) · [`useColorScheme`](https://reactnative.dev/docs/usecolorscheme) · [**React Context**](https://react.dev/learn/passing-data-deeply-with-context) + [`useContext`](https://react.dev/reference/react/useContext) — the theme provider is **our own context**, not React Navigation's · [React Navigation theming](https://reactnavigation.org/docs/themes/) (headers/tab bars — never wrap `NavigationContainer` yourself; Expo Router owns it) · [why tokens beat hex values](https://m3.material.io/styles/color/system/overview) · [Expo fonts](https://docs.expo.dev/develop/user-interface/fonts/) · [StyleSheet](https://reactnative.dev/docs/stylesheet) · [Pressable](https://reactnative.dev/docs/pressable) · [safe areas](https://docs.expo.dev/develop/user-interface/safe-areas/) · [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/) · [Splash screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/) (hold it while fonts + theme load)

- [x] Design tokens from `DESIGN.md`: light + dark palettes, spacing, type scale, radii; Inter fonts loaded. _(PR #12)_
- [x] Theme provider reading the device scheme; modes: light / dark / system. _(PR #12)_
- [x] Persist the choice via AsyncStorage. _(PR #12)_
- [x] **Commit and push the July base-component WIP.** _(`9db642e`, PR #12)_
- [ ] **Fix the theme provider** before anyone builds on it: first launch (storage empty → `null`) must mean **system**, not light; toggling must work from the theme _actually shown_; all three modes selectable (System / Light / Dark — `DESIGN.md` §5); no wrong-theme flash on startup.

> **Commit:** `fix(theme): default to system mode and support three-way selection`

- [ ] **Base components from tokens** — `Screen`, `AppText`, `Button` (primary / tinted / plain), `Card` — generic (props + children, nothing hardcoded), typed props (no `any`), tokens only.

> **Commit:** `feat(ui): add themed base components`

- [ ] 📖 **Recipe: base component** — how to add one, from token lookup to gallery entry.

> **Commit:** `docs(playbook): add base component recipe`

- [ ] 🔁 **`Input`** from the base-component recipe (`DESIGN.md` §5: `surfaceAlt`, radius 12, height 48, `accent` focus ring) — Dragos's first real PR.

> **Commit:** `feat(ui): add themed input component`

- [ ] 📖 **Component gallery screen** — every base component, both themes, one screen — **plus the new-screen recipe**.

> **Commit:** `feat(ui): add component gallery screen`

- [ ] **Theme toggle** as a segmented control (System / Light / Dark) on the gallery; themed navigation header + status bar.

> **Commit:** `feat(ui): add theme toggle and themed navigation chrome`

- [ ] 🔁 **`Avatar`** from the base-component recipe — initials in a circle using the `avatar` tokens — Marcian's first real PR (can land after the Phase 2 merge).

> **Commit:** `feat(ui): add avatar component`

- [ ] Verify both themes on a phone **and** on web; flipping the OS theme updates live.
- [ ] 🧠 **Teach-back:** Dragos walks the full path _token → provider → `useContext` → styled component_ without notes; Marcian traces one color from `tokens.ts` to the screen.

> **Push & merge** to `main`.

**Gotchas:** check contrast in _both_ themes. `theme === dark_theme` compares object identity — expose the resolved scheme from the context instead. In `AppText`, spreading `props` after `style` silently throws away the theme styles. Merge the docs PR (`docs/team-roadmap`) **before** this one — both touch `docs/`; take `main`'s version of `docs/` when you merge `main` into the feature branch.

---

## Phase 3 — Backend schema (Supabase) (was 1)

**Goal:** Real schema as **migrations**, RLS on everything, app talking to Supabase securely. Recipes: **table + migration + RLS** and **regenerate types**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**SQL first:** Dragos — [SQLBolt](https://sqlbolt.com/) lessons 1–12 (~4 h). Marcian — SQLBolt lessons 1–6 before his task.

**Learn first:** [Supabase with Expo](https://docs.expo.dev/guides/using-supabase/) · [Expo quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native) · [Tables & relationships](https://supabase.com/docs/guides/database/tables) · [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Migrations with the CLI](https://supabase.com/docs/guides/deployment/database-migrations) · [Generating TS types](https://supabase.com/docs/guides/api/rest/generating-types) · [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)

- [ ] Create the free **hosted** Supabase project; save URL + **publishable key** (`sb_publishable_…`, never the secret one client-side); share them through a password manager, not chat.
- [ ] 👥 **Sketch the full model** in dbdiagram.io (~1.5 h call, driver rotates); commit the exported diagram to `docs/`.

> **Commit:** `docs: add data model diagram`

- [ ] 📖 **`parties` + `party_members`** tables with RLS — **plus the table-migration-RLS recipe**.

> **Commit:** `feat(db): add parties and roster tables with rls`

- [ ] 🔁 **`profiles`** table + RLS from the recipe.

> **Commit:** `feat(db): add profiles table with rls`

- [ ] **`game_nights`, `games`, `game_results`** + RLS.

> **Commit:** `feat(db): add game night and result tables with rls`

- [ ] Supabase client via `EXPO_PUBLIC_*` env vars + secure session storage on device; add a short "how the app talks to Supabase" note to the playbook.

> **Commit:** `feat(api): add supabase client with secure session storage`

- [ ] 📖 **Generate TypeScript types** from the schema — **plus the regenerate-types recipe**.

> **Commit:** `chore(db): generate typescript types from schema`

- [ ] 🔁 **Add `profiles.avatar_color`** (it feeds his `Avatar`) with a migration, then regenerate types — both from the recipes.

> **Commit:** `feat(db): add avatar color to profiles`

- [ ] 🧠 **Teach-back:** Dragos — what RLS is + one of Teo's policies; Marcian — what a migration is, using his own; Teo — the migration → local → hosted flow.

> **Push & merge** to `main`.

**Gotchas:** develop against the **local** stack; apply migrations to hosted when a phase merges. RLS on _every_ table — the publishable key would otherwise expose everything.

---

## Phase 4 — Authentication (was 2)

**Goal:** Sign up / log in / log out; profile row auto-created; inner screens gated. Recipes: **form** and **database trigger**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [Supabase Auth in RN](https://supabase.com/docs/guides/auth/quickstarts/react-native) · [full Expo tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native) · [Expo Router protected routes](https://docs.expo.dev/router/advanced/authentication/) · [Managing user data](https://supabase.com/docs/guides/auth/managing-user-data) · [React Hook Form](https://react-hook-form.com/get-started) + [Zod](https://zod.dev/)

- [ ] Auth-state provider + **route guards**; handle the session-restore loading state (no login-screen flash).

> **Commit:** `feat(auth): guard app routes by session state`

- [ ] 📖 **Profile row on signup** via a **database trigger** — **plus the trigger recipe**.

> **Commit:** `feat(auth): create profile on sign up`

- [ ] 📖 **Sign-up + login screens** (`DESIGN.md` §7) with React Hook Form + Zod — **plus the form recipe**.

> **Commit:** `feat(auth): add email/password sign up and login`

- [ ] 🔁 **Settings screen** — theme toggle + log out — from the new-screen recipe.

> **Commit:** `feat(settings): add settings screen with theme and logout`

- [ ] Verify on a phone **and** web; the session survives an app restart.
- [ ] 🧠 **Teach-back:** Dragos — the session lifecycle (login → storage → restart → restore → guard); Marcian — what happens, step by step, when you press Log out; Teo — the signup trigger.
- [ ] **Bus-factor check:** three random files, each explained by someone who didn't write it.

> **Push, merge, tag `v0.1.0`** — first milestone. 🎉

---

## Phase 5 — Parties & the immutable roster (was 3)

**Goal:** Create a party (name + locked roster), list parties, view details. Recipes: **load & show data** and **database test**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** revisit the roster decision above · [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [TanStack Query overview](https://tanstack.com/query/latest/docs/framework/react/overview) · [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) · [Insert/select data](https://supabase.com/docs/reference/javascript/insert) · [Testing your database (pgTAP)](https://supabase.com/docs/guides/database/testing)

- [ ] 👥 **Roster-lock design session** (~1.5 h): when does it lock, what exactly is rejected, what does the UI show? Write the answers in the PR description of the lock.
- [ ] 📖 **"My parties" list** with TanStack Query — **plus the load-data recipe**.

> **Commit:** `feat(party): list my parties`

- [ ] 🔁 **Create-party form** — just a name (when/where/games belong to game nights) — from the form recipe.

> **Commit:** `feat(party): add create-party form`

- [ ] Add players at creation (pick from existing users; ≥ 2 players).

> **Commit:** `feat(party): add players to a new party`

- [ ] 🔁 **Roster lock in the database** — `locked` + trigger + RLS — from the trigger recipe.

> **Commit:** `feat(db): lock party roster with a trigger`

- [ ] 📖 **Prove the lock:** a direct API insert into a locked roster is rejected **by Postgres**; run it in CI — **plus the database-test recipe**.

> **Commit:** `test(db): prove the roster lock rejects changes`

- [ ] 🔁 **Party detail screen** from the load-data recipe.

> **Commit:** `feat(party): show party details`

- [ ] 🧠 **Teach-back:** Marcian — why the lock lives in the database, not the app; Dragos — his trigger, line by line; Teo — how TanStack Query caches and refreshes the list.

> **Push & merge.**

**Gotchas:** this is _why the app exists_ — the lock must be a real guarantee, not a disabled button. UTC timestamps; validate inputs.

---

## Phase 6 — Game nights & scoring (was 4)

**Goal:** Run a game night inside a party, record per-player scores, see who's winning. Recipe: **pure function + unit test**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [Jest in Expo](https://docs.expo.dev/develop/unit-testing/) · [Supabase joins & nesting](https://supabase.com/docs/guides/database/joins-and-nesting) · [Expo date/time picker](https://docs.expo.dev/versions/latest/sdk/date-time-picker/)

- [ ] 👥 **Scoring rules session:** define "win" per archetype and what the _night_ winner means (most game-wins vs most points); ties; missing scores. Write it down in `docs/SCORING.md` — every Phase 7 stat depends on it.

> **Commit:** `docs: define scoring and win rules`

- [ ] 🔁 **"New game night"** form: date/time, location (free text), planned games — from the form recipe.

> **Commit:** `feat(gamenight): create a game night within a party`

- [ ] 🔁 **Add a played game** to the night (typed name for now; the catalog picker lands in Phase 8) — from the form recipe.

> **Commit:** `feat(gamenight): add a played game to a night`

- [ ] 📖 **Set up Jest**, add `test` to CI, cover the first pure function — **plus the unit-test recipe**.

> **Commit:** `test: set up jest and run tests in ci`

- [ ] 🔁 **Generic score entry** (one number per player) + winner as a **tested pure function** — whole flow end-to-end before going schema-driven.

> **Commit:** `feat(scoring): record per-player scores for a game`

- [ ] **Schema-driven entry:** render inputs from the game's scoring schema; compute the winner per archetype; store structured results.

> **Commit:** `feat(scoring): render score entry from the game's schema`

- [ ] 🔁 **Unit tests for Teo's archetype winner functions** — from the unit-test recipe (both-touch).

> **Commit:** `test(scoring): cover archetype winner rules`

- [ ] 🔁 **Live game-night leaderboard** from the load-data recipe.

> **Commit:** `feat(scoring): show game-night leaderboard`

- [ ] 🧠 **Teach-back:** Marcian — the night flow (Dragos's); Dragos — archetype → rendered inputs → winner (Teo's); Teo — the leaderboard query (Dragos's).
- [ ] **Bus-factor check.**

> **Push, merge, tag `v0.2.0`** — playable MVP. 🎉

**Gotchas:** scoring logic is your highest-risk code — keep it in pure functions, test them, and only let the host enter scores (RLS).

---

## Phase 7 — Stats & win rates (was 5)

**Goal:** Win rates overall, per party, per game, head-to-head. Recipes: **seed data** and **SQL view / RPC**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [Postgres aggregates](https://www.postgresql.org/docs/current/functions-aggregate.html) · [Views](https://www.postgresql.org/docs/current/sql-createview.html) · [DB functions (RPC)](https://supabase.com/docs/guides/database/functions) — do the math in the database · [Seeding your database](https://supabase.com/docs/guides/local-development/seeding-your-database)

- [ ] 📖 **Seed dataset with known answers** (hand-computed win rates in a comment) — **plus the seed recipe**.

> **Commit:** `chore(db): add seed dataset with known stats`

- [ ] 🔁 **Add tie and missing-score scenarios** to the seed, with their expected answers.

> **Commit:** `chore(db): add tie scenarios to seed data`

- [ ] 📖 **Global win rate** view — **plus the SQL view recipe**.

> **Commit:** `feat(stats): compute global win rate`

- [ ] 🔁 **Games played per player** view, from the recipe.

> **Commit:** `feat(stats): count games played per player`

- [ ] 🔁 **Per-game and per-party** win rates, from the recipe.

> **Commit:** `feat(stats): add per-game and per-party win rates`

- [ ] **Head-to-head** vs any player (surfaces on friend profiles in Track B).

> **Commit:** `feat(stats): add head-to-head stats between players`

- [ ] 🔁 **Stats screens** from the load-data recipe.

> **Commit:** `feat(stats): add stats screens`

- [ ] **Verify every number on screen by hand** against the seed's known answers.
- [ ] 🧠 **Teach-back:** Marcian — one aggregate query, line by line; Dragos — the head-to-head SQL (Teo's); Teo — Dragos's view.

> **Push & merge.**

**Gotchas:** one source of truth (a view/RPC) so every screen agrees. Tie/missing-score handling comes from `docs/SCORING.md`, decided in Phase 6.

---

## Phase 8 — Board-game catalog (was 6) — pre-work exists

**Goal:** Searchable, filterable catalog: BGG + custom games, with scoring schemas. Recipes: **BGG import** and **external API + caching**.

**Already in the repo:** `docs/scripts/games_schema.sql` (games table, indexes, RLS, `search_games_by_players`) and `docs/scripts/import_bgg_games.py` (top ~5000 BGG games importer — **it's Python, Dragos: your home turf**).

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2) — XML not JSON, rate-limited · [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) · [FlatList](https://reactnative.dev/docs/flatlist) · [debouncing](https://developer.mozilla.org/en-US/docs/Glossary/Debounce)

- [ ] 📖 **Games migration** from `games_schema.sql` + run the Python import — **plus the import recipe**.

> **Commit:** `feat(catalog): add games schema migration and bgg import`

- [ ] 🔁 **Re-run the import on your own machine** from the recipe only; fix whatever was unclear.

> **Commit:** `docs(playbook): clarify bgg import recipe`

- [ ] 📖 **Live BGG search** for games not yet cached; cache fetched games (respect rate limits) — **plus the external-API recipe**.

> **Commit:** `feat(catalog): integrate boardgamegeek search with caching`

- [ ] **Catalog list UI:** FlatList + debounced search + filters (type, player count, difficulty). Player-count rule (already server-side): query `qmin–qmax` matches when `min ≥ qmin − 1`, `min ≤ qmin`, `max ≥ qmax`; single `n` = `n–n`.

> **Commit:** `feat(catalog): add catalog search bar and filters`

- [ ] 🔁 **Custom (non-BGG) game** form, same fields — from the form recipe.

> **Commit:** `feat(catalog): add custom user-created games`

- [ ] Wire the catalog into Phase 6's game picker.

> **Commit:** `feat(catalog): select catalog games when scoring`

- [ ] Game detail screen + **scoring schemas**: ~10 win-condition archetypes + a deterministic mechanic-based default classifier.

> **Commit:** `feat(catalog): add scoring archetypes and mechanic-based defaults`

- [ ] Enrich popular games via an **offline batch LLM script**, cached as JSON in the DB; hand-curate the top ~100; hosts can override.

> **Commit:** `feat(catalog): generate detailed scoring schemas (cached)`

- [ ] 🧠 **Teach-back:** Dragos — caching + rate limits (Teo's); Marcian — how a game travels from BGG into our table; Teo — the player-count SQL rule.
- [ ] **Bus-factor check.**

> **Push, merge, tag `v0.3.0`.** 🎉

**Gotchas:** debounce search; never block the UI on BGG being slow; score entry only ever reads a _stored_ schema, never calls the AI. Mock BGG in tests.

---

## Phase 9 — Testing, polish, web & release (was 10)

**Goal:** Tested, polished, deployed — and **anyone can ship a release**. **v1.0.0.** Recipes: **UI states**, **E2E flow**, **build & release**.

**Who does what:** the equal split in [`TASKS.md`](./TASKS.md).

**Learn first:** [RN Testing Library](https://callstack.github.io/react-native-testing-library/) · [Maestro](https://docs.maestro.dev/) · [EAS Build](https://docs.expo.dev/build/introduction/) · [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)

- [ ] **Test top-up:** each person adds tests for code someone else wrote (scoring, win-rate math, roster lock).

> **Commit:** `test: cover scoring and win-rate logic`

- [ ] 🔁 **Database test** for one RLS policy (e.g. "a non-member can't see a party"), from the recipe.

> **Commit:** `test(db): cover party visibility policy`

- [ ] 📖 **Loading / empty / error states** on screens you didn't build — **plus the UI-states recipe**.

> **Commit:** `fix(ui): add loading, empty, and error states`

- [ ] 🔁 **States on the remaining screens**, from the recipe.

> **Commit:** `fix(ui): add states to remaining screens`

- [ ] 📖 **Maestro happy path** (sign in → create party → record a score) — **plus the E2E recipe**.

> **Commit:** `test(e2e): add core user-journey flow`

- [ ] 🔁 **Second E2E flow** (sign up → log out → log in) from the recipe.

> **Commit:** `test(e2e): add auth round-trip flow`

- [ ] 📖 **Mobile build + web deploy** to a free host — **plus the release recipe** (`docs/playbook/release.md`).

> **Commit:** `chore: configure builds and web deploy`

- [ ] 🔁 **Release dry-run, solo:** Dragos ships a full release from the recipe, narrating every step; nobody helps.
- [ ] 🔁 **Web-deploy dry-run, solo:** Marcian deploys web from the recipe.
- [ ] 🧠 **Whole-app teach-back:** each person explains one screen, one table, and one test they didn't write.
- [ ] **Bus-factor check** + update the skills matrix: every cell at least **U**?

> **Push, merge, tag `v1.0.0`** — shipped. 🎉

---

# Track B — after v1.0.0

Same discipline, one phase per branch, tag each. Recipes exist for most kinds of work by now, so **owners rotate harder**: nobody builds the same kind of thing twice in a row, and Marcian owns whole small features.

## Phase 10 — Friends system (was 7) → v1.1.0

[Many-to-many modeling](https://supabase.com/docs/guides/database/joins-and-nesting). Requests (send/accept/decline) → friends list → friend profile with Phase 7 head-to-head → upgrade party invites to friends-list picks. Store a friendship **once**, query both directions; RLS so only accepted friends see data.

- [ ] 🔁 Friendships schema + RLS + a **database test proving a non-friend can't see data** — from the table and db-test recipes.
- [ ] Send / accept / decline friend requests.
- [ ] 🔁 Friends list + friend profile with head-to-head stats — from the load-data recipe.
- [ ] Invite party players from the friends list.
- [ ] 🧠 Teach-back: the store-once, query-both-directions friendship model — explained by someone who didn't write it.

> **Commits:** `feat(db): add friendships with rls` · `feat(friends): send and respond to friend requests` · `feat(friends): add friends list and profile` · `feat(party): invite players from friends list`

## Phase 11 — Realtime chat (was 8) → v1.2.0

[Supabase Realtime](https://supabase.com/docs/guides/realtime) · [Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes) · [inverted FlatList](https://reactnative.dev/docs/flatlist#inverted) · [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview). Messages table + RLS → 1:1 conversation screen → realtime inserts. Unsubscribe on unmount (leaks hit limits); optimistic send. Group chats: later, decide then.

- [ ] 🔁 **Messages schema + policies** — Marcian's first solo schema, from the recipes.
- [ ] Direct-message conversation screen.
- [ ] 📖 Stream new messages in realtime (subscribe/unsubscribe lifecycle, optimistic send) — **plus the realtime recipe**.
- [ ] 🔁 Make the game-night leaderboard live, from the realtime recipe.
- [ ] 🧠 Teach-back: the subscription lifecycle — explained by Marcian.

> **Commits:** `feat(chat): add messages schema and policies` · `feat(chat): add direct message conversation screen` · `feat(chat): stream new messages in realtime` · `feat(scoring): update leaderboard in realtime`

## Phase 12 — Push notifications (was 9) → v1.3.0

[Expo push](https://docs.expo.dev/push-notifications/overview/) · [setup](https://docs.expo.dev/push-notifications/push-notifications-setup/) · [sending](https://docs.expo.dev/push-notifications/sending-notifications/) · [Edge Functions](https://supabase.com/docs/guides/functions). **Expo Go can't receive Android push since SDK 53** — you need a [development build](https://docs.expo.dev/develop/development-builds/introduction/). Sending lives server-side only, never in the client. Web push: out of scope, note it.

- [ ] Development build configuration (add it to the release recipe).
- [ ] Register and store push tokens.
- [ ] 📖 Edge Function that sends a push on party invite — **plus the Edge Function recipe**.
- [ ] 🔁 Edge Function: notify the party when a game night is scheduled, from the recipe.
- [ ] Deep-link from notification taps.
- [ ] 🧠 Teach-back: why sending lives server-side — explained by Marcian.

> **Commits:** `chore: add development build configuration` · `feat(notifications): register and store push tokens` · `feat(notifications): send push on party invite` · `feat(notifications): notify players about new game nights` · `feat(notifications): deep-link from notification taps`

## Phase 13 — CI/CD & automation (was 11) → v1.4.0

[Actions quickstart](https://docs.github.com/en/actions/quickstart) · [Expo on CI](https://docs.expo.dev/build-reference/build-on-ci/) · [EAS + Actions](https://docs.expo.dev/eas-update/github-actions/) · [Supabase environments](https://supabase.com/docs/guides/deployment/managing-environments) · [Dependabot](https://docs.github.com/en/code-security/dependabot) · [Sentry RN](https://docs.sentry.io/platforms/react-native/).

- [ ] 👥 📖 **Pair on the first workflow** — migrations against a disposable Postgres in CI — Marcian drives, Teo navigates — **plus the CI-workflow recipe**.
- [ ] 🔁 Web deploy on merge + PR previews.
- [ ] 🔁 EAS build on release tags.
- [ ] Apply migrations to production on release (token in Actions secrets).
- [ ] Dependabot + secret scanning + CodeQL.
- [ ] Sentry error monitoring with sourcemaps.
- [ ] 🔁 CI badges + automated changelog from Conventional Commits.
- [ ] 🧠 Final teach-back: each person explains a pipeline someone else wrote, end to end. Final skills-matrix check: every cell **R** or better?

> **Commits:** `ci: run database migrations against disposable postgres in ci` · `ci: build and deploy web on merge to main` · `ci: trigger eas build on release tags` · `ci: apply supabase migrations to production on release` · `chore(security): enable dependabot, secret scanning, and code scanning` · `feat(observability): add sentry error monitoring with sourcemaps` · `docs: add ci badges and automated changelog`

---

## Timeline (equal split — ranges, not promises; re-baselined 2026-11-02)

Three people are **not** three times the speed, especially while two are learning and every kind of task gets done more than once on purpose. With an equal split, a step finishes when the **slowest column** finishes, so the dates below are later than v4's. Teo should budget **~6–8 h/week** for reviews and pairing through Phase 5. The payoff compounds from Phase 6 on, and in Track B nobody is a bottleneck. Step-by-step dates up to `v0.1.0`: [`TASKS.md` → Rough timeline](./TASKS.md#rough-timeline-re-check-it-in-every-sync).

| Milestone                                       | Phases    | Roughly when (from 2026-11-02)       |
| ----------------------------------------------- | --------- | ------------------------------------ |
| Design system + schema + login (**v0.1.0**)     | O + 1 → 4 | **~10–12 weeks** (mid–late Jan 2027) |
| Playable MVP: party + game night (**v0.2.0**)   | 5 → 6     | **~4–5 months** (March 2027)         |
| Stats + catalog (**v0.3.0**)                    | 7 → 8     | **~6 months** (April–May 2027)       |
| Polished release (**v1.0.0**)                   | 9         | **~7 months** (June 2027)            |
| Friends + chat + push + automation (**v1.4.0**) | 10 → 13   | **~11–12 months** (autumn 2027)      |

The holidays fall inside Step 2 (the database). Plan a lighter fortnight. Faster: small tickets, honest weekly syncs, recipes written while the work is fresh. Slower: big unscoped tasks, skipping reviews "just this once", recipes written weeks later from memory, long gaps between sessions.

---

## Quick reference — commit & review cadence

| When                                              | Do                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Finished one logical change (≈ a checkbox)        | **Commit** (Conventional Commit — commitlint checks it)             |
| End of a work session                             | **Push** your branch                                                |
| First time anyone does this kind of task          | Add a **recipe** to `docs/playbook/` in the same PR                 |
| Doing a task that has a recipe                    | Follow it; **fix the recipe** wherever it wasn't enough             |
| Finished a task                                   | PR → **someone else reviews** (Marcian shadows) → merge             |
| Reviewing                                         | Don't approve until you could explain the diff yourself             |
| End of a phase                                    | Teach-backs done → merge → **push**                                 |
| Milestone phases (4, 6, 8, 9, each Track B phase) | Bus-factor check → **tag** `v0.1.0` …                               |
| Weekly                                            | ~45-min sync: demo · teach-back · skills matrix · split next week   |
| Before any merge to `main`                        | CI green · approved by someone else · web still works · recipe done |

One phase at a time, keep `main` always working, and let the history tell the story — with three names in it now.
