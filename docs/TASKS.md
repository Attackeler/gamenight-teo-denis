# Tasks — who does what, in baby steps

Where we are right now: [`STATUS.md`](./STATUS.md). Set up your machine first: [`SETUP.md`](./SETUP.md).

## How the split works

- **Equal split:** in every step, **Teo, Dragos and Marcian each have the same number of tasks** (Phase 13 has one paired task on top). Kinds of work rotate, so everyone does UI, database, tests and docs.
- **Hours differ** (Teo ~40, Dragos ~15, Marcian ~5–10 a week). Teo's extra hours go to **reviewing, pairing and unblocking**, never to taking someone else's task.
- **One task = one branch = one PR.** The indented bullets under a task are its baby steps; each one is a sitting of 1–2 hours at most. How to branch, commit and open the PR: [`playbook/git-pr-flow.md`](./playbook/git-pr-flow.md).
- **📖** = you're the first to do this kind of task, so write the recipe in the same PR. **🔁** = follow an existing recipe, and fix it wherever it wasn't enough. **👥** = all three together on a call.
- **⏳ waits for** = don't start until that task is merged.
- **Stuck more than 30 minutes?** Write down what you tried and ask in the team chat. **Task untouched for two syncs?** Pair on it or swap it, but only in the weekly sync.
- **Reviews:** Teo's PRs → Dragos · Dragos's PRs → Teo · Marcian's PRs → Dragos first, then Teo. Marcian also reads one PR a week and leaves a question.
- Tick tasks in `gamenight-roadmap.html` (open it in a browser; `#teo` / `#dragos` / `#marcian` shows only your tasks). The **why** behind each task is in [`ROADMAP.md`](./ROADMAP.md).

**Learning runs alongside, and isn't counted in the split.** Dragos and Marcian follow their paths in [`ONBOARDING.md`](./ONBOARDING.md). The tasks below are sized so you can do them while learning.

---

## Step 0 — Same starting line (week 1–2)

**Goal:** everything is on GitHub, everyone can run the app, and the small leftovers from Phase 1 are fixed.

👥 **Together:** pick a weekly sync slot (~45 min) and make a team chat. The first sync is a walk through this file.

### Teo

- [x] **0.T1 — Commit and push the components** (done 2026-11-02, `9db642e`)
    - `git switch feat/phase-2-design-system`
    - `make check-files`, then fix anything red
    - `git add src/components app/index.tsx`, then commit `feat(ui): add base component drafts`
    - `git push`
- [x] **0.T2 — Get these docs onto `main`** (done 2026-11-04, PR #10)
    - `git push -u origin docs/team-roadmap`, then open a PR into `main`. Dragos reviews it.
    - After the merge: delete `team-roadmap.bundle` from your machine, and delete the merged old branches on GitHub (list in `STATUS.md`)
- [ ] **0.T3 — Repo access**
    - GitHub → Settings → Collaborators: add Dragos and Marcian
    - [x] Rule for `main`: require a PR, **1 approving review**, and the `check-run` CI check (already set up as a ruleset)
- [ ] **0.T4 — Fix the pre-commit hook** · commit `fix(devops): run lint-staged in pre-commit`
    - Replace `.husky/pre-commit` so it only runs `npx lint-staged`, and drop the line that rewrites `.husky/commit-msg`
    - Check that `.lintstagedrc.ts` covers lint and prettier for staged files; CI still runs the full `ts-check`
    - Prove it works: make a small badly formatted change, commit, and watch it get fixed or blocked

### Dragos

- [ ] **0.D1 — Machine setup** with [`SETUP.md`](./SETUP.md), on a call with Teo
    - Done when the app runs on your phone and in the browser, and `make check-files` passes
- [ ] **0.D2 — 📖 Local-environment recipe** (with Marcian) · commit `docs(playbook): add local environment recipe`
    - Copy `playbook/_TEMPLATE.md` to `playbook/local-env.md`
    - Write down every problem you hit during setup, with its fix
    - Marcian adds his problems to the same PR; Teo reviews
- [ ] **0.D3 — 🔁 Practice PR, following the git recipe** · commit `chore(db): remove stray sql snippet`
    - Delete `supabase/snippets/Untitled query 554.sql`
    - Add `supabase/snippets/` to `.gitignore`
- [ ] **0.D4 — Stop tracking Python bytecode** · commit `chore: stop tracking python bytecode`
    - `git rm -r --cached docs/scripts/__pycache__`
    - Add `__pycache__/` to `.gitignore`

### Marcian

- [ ] **0.M1 — Machine setup** with [`SETUP.md`](./SETUP.md), on a call with Teo
    - Done when the app runs on your phone and in the browser, and `make check-files` passes
- [ ] **0.M2 — 📖 Local-environment recipe** (with Dragos)
    - Add every setup problem you hit to Dragos's `playbook/local-env.md` PR, even small ones
- [ ] **0.M3 — 🔁 Practice PR, following the git recipe** · commit `docs: add my favorite game to the team table`
    - Fill in your favorite board game in the team table in `docs/README.md`
    - If any step of the git recipe confused you, fix the recipe in the same PR
- [ ] **0.M4 — Fix two npm scripts** · commit `fix(devops): fix format script and remove reset-project`
    - In `package.json` → `"scripts"`: change `"format": "prettier:fix"` to `"format": "npm run prettier:fix"`
    - Delete the `"reset-project"` line (the file it runs no longer exists)
    - Check it: `npm run format` runs Prettier without an error

---

## Step 1 — Finish the design system (Phase 2)

**Goal:** themed base components that every screen will reuse, plus the first two recipes. Ends with Phase 2 merged into `main`.

### Teo

- [ ] **1.T1 — Fix the theme provider** (do this first; everything builds on it) · commit `fix(theme): default to system mode and support three-way selection`
    - An empty storage (`null`) on first launch must mean `'system'`
    - Replace the light ↔ dark `toggleTheme` with `setMode('system' | 'light_theme' | 'dark_theme')`
    - Expose the resolved scheme (`'light' | 'dark'`) instead of comparing theme objects
    - Keep the splash screen up until fonts and theme are loaded, so there's no wrong-theme flash
    - Check it: clear the app's data, open it, and it follows the OS theme
- [ ] **1.T2 — Finish the base components** · commit `feat(ui): add themed base components`
    - `Screen` (safe area + background), `AppText` (type scale), `Button` (primary / tinted / plain), `Card`
    - Typed props, no `any`, tokens only (no raw hex values or numbers)
- [ ] **1.T3 — 📖 Base-component recipe** · commit `docs(playbook): add base component recipe`
    - `playbook/base-component.md`: token lookup → new file → typed props → add it to the gallery → check both themes
    - Link 1.T2 as the worked example

### Dragos

- [ ] **1.D1 — 🔁 `Input`** · ⏳ waits for 1.T3 · commit `feat(ui): add themed input component`
    - `DESIGN.md` §5: `surfaceAlt` background, radius 12, height 48, 2px `accent` focus ring
    - Follow the recipe, and fix it wherever it wasn't enough
- [ ] **1.D2 — 📖 Component gallery screen + new-screen recipe** · commit `feat(ui): add component gallery screen`
    - New file `app/gallery.tsx` showing every base component; link to it from the home screen
    - Write `playbook/new-screen.md`
- [ ] **1.D3 — Theme toggle + themed header** · ⏳ waits for 1.T1 · commit `feat(ui): add theme toggle and themed navigation chrome`
    - Segmented control (System / Light / Dark) on the gallery screen
    - Header and status bar follow the theme

### Marcian

- [ ] **1.M1 — 🔁 `Avatar`** · ⏳ waits for 1.T3 · pair with Teo for the first hour · commit `feat(ui): add avatar component`
    - Initials in a circle, sizes 32 / 40 / 64, fill colors from the `avatar` tokens
- [ ] **1.M2 — 🔁 `Chip`** (solo this time) · commit `feat(ui): add chip component`
    - `DESIGN.md` §5: small pill, `surfaceAlt` background, `accentSoftBg` when selected
- [ ] **1.M3 — Both-themes check** · ⏳ waits for 1.D2 + 1.D3
    - Open the gallery on your phone **and** in the browser, in light, dark and system
    - Flip your phone's theme: the app should change live
    - Open one GitHub issue per problem (screenshot + what you expected)

👥 **Together:** teach-back (Dragos: token → provider → `useContext` → component; Marcian: trace one color from `tokens.ts` to the screen) → **merge Phase 2 into `main`**.

---

## Step 2 — The database (Phase 3)

**Goal:** the real tables as migrations, Row Level Security (RLS) on every table, and the app connected to Supabase.

**Before this step:** Dragos does [SQLBolt](https://sqlbolt.com/) lessons 1–12, Marcian lessons 1–6.

👥 **Together first:** sketch the data model in [dbdiagram.io](https://dbdiagram.io) (~1.5 h, rotate who's typing).

### Teo

- [ ] **2.T1 — Hosted Supabase project:** create it, save the URL + publishable key, and share them via a password manager (never in chat)
- [ ] **2.T2 — 📖 `parties` + `party_members` tables with RLS + the table recipe** · commit `feat(db): add parties and roster tables with rls`
- [ ] **2.T3 — Supabase client in the app** (env vars + secure session storage) + a short "how the app talks to Supabase" note · commit `feat(api): add supabase client with secure session storage`

### Dragos

- [ ] **2.D1 — 🔁 `profiles` table + RLS** · ⏳ waits for 2.T2 · commit `feat(db): add profiles table with rls`
- [ ] **2.D2 — 🔁 `game_nights`, `games`, `game_results` tables + RLS** · commit `feat(db): add game night and result tables with rls`
- [ ] **2.D3 — 📖 Generate TypeScript types + the types recipe** · commit `chore(db): generate typescript types from schema`

### Marcian

- [ ] **2.M1 — Commit the data-model diagram** from the session to `docs/` · commit `docs: add data model diagram`
- [ ] **2.M2 — 🔁 Add `profiles.avatar_color`** with a migration, then regenerate the types · ⏳ waits for 2.D1 + 2.D3 · commit `feat(db): add avatar color to profiles`
- [ ] **2.M3 — 🔁 Add an npm script `db:types`** that regenerates the types · commit `chore(db): add db:types script`

👥 **Together:** teach-back (Dragos: RLS, using one of Teo's policies; Marcian: what a migration is, using his own; Teo: local → hosted) → merge.

---

## Step 3 — Login → `v0.1.0` (Phase 4)

**Goal:** sign up, log in, log out; a profile row is created automatically; screens are hidden until you log in.

### Teo

- [ ] **3.T1 — Auth session provider** (holds the session, shares it through context) · commit `feat(auth): add auth session provider`
- [ ] **3.T2 — Route guards** (logged out → only auth screens; no login-screen flash on restart) · commit `feat(auth): guard app routes by session state`
- [ ] **3.T3 — 📖 Create a profile on sign-up with a database trigger + the trigger recipe** · commit `feat(auth): create profile on sign up`

### Dragos

- [ ] **3.D1 — 📖 Sign-up screen** (React Hook Form + Zod) + the form recipe · commit `feat(auth): add email/password sign up`
- [ ] **3.D2 — 🔁 Login screen** from the form recipe · commit `feat(auth): add login screen`
- [ ] **3.D3 — Auth error messages** (wrong password, email taken, offline) · commit `feat(auth): show auth error messages`

### Marcian

- [ ] **3.M1 — 🔁 Settings screen** with the theme toggle, from the new-screen recipe · commit `feat(settings): add settings screen`
- [ ] **3.M2 — Log out button** on Settings · ⏳ waits for 3.T1 · commit `feat(settings): add log out button`
- [ ] **3.M3 — Auth check** on a phone **and** web: sign up → log in → restart the app (still logged in) → log out. One issue per problem.

👥 **Together:** teach-back · bus-factor check (three random files, each explained by someone who didn't write it) → **tag `v0.1.0`** 🎉

---

## Later — the same split, one line per task

Each of these turns into baby steps when we get there; we write them out in the sync before the step starts. The details are in [`ROADMAP.md`](./ROADMAP.md).

### Phase 5 — Parties & the locked roster (👥 design the lock together first)

| Teo                                        | Dragos                                 | Marcian                |
| ------------------------------------------ | -------------------------------------- | ---------------------- |
| 📖 "My parties" list + load-data recipe    | 🔁 Roster-lock trigger in the database | 🔁 Create-party form   |
| 📖 Database test proving the lock + recipe | Add players when creating a party      | 🔁 Party detail screen |

### Phase 6 — Game nights & scoring → `v0.2.0` (👥 agree the scoring rules first)

| Teo                                   | Dragos                                   | Marcian                                |
| ------------------------------------- | ---------------------------------------- | -------------------------------------- |
| 📖 Set up Jest + unit-test recipe     | 🔁 Add a played game to a night          | Write the rules into `docs/SCORING.md` |
| Schema-driven score entry             | 🔁 Generic score entry + winner function | 🔁 "New game night" form               |
| 🔁 Tests for Dragos's winner function | 🔁 Live game-night leaderboard           | 🔁 Tests for Teo's archetype functions |

### Phase 7 — Stats & win rates

| Teo                                      | Dragos                                    | Marcian                                  |
| ---------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| 📖 Seed data with known answers + recipe | 📖 Global win-rate view + SQL view recipe | 🔁 Tie / missing-score cases in the seed |
| Head-to-head stats                       | 🔁 Per-game and per-party win rates       | 🔁 Games-played-per-player view          |
| 🔁 Per-party stats screen                | 🔁 Overall stats screen                   | Check every number on screen by hand     |

### Phase 8 — Board-game catalog → `v0.3.0`

| Teo                                       | Dragos                                      | Marcian                              |
| ----------------------------------------- | ------------------------------------------- | ------------------------------------ |
| 📖 Live BGG search + caching + recipe     | 📖 Games migration + Python import + recipe | 🔁 Re-run the import from the recipe |
| Scoring archetypes + default classifier   | Catalog list with search and filters        | 🔁 Custom-game form                  |
| Offline LLM enrichment of scoring schemas | Catalog → game picker                       | Game detail screen                   |

### Phase 9 — Testing, polish & release → `v1.0.0`

| Teo                                           | Dragos                                     | Marcian                             |
| --------------------------------------------- | ------------------------------------------ | ----------------------------------- |
| 📖 First E2E flow (Maestro) + recipe          | 📖 Loading / empty / error states + recipe | 🔁 Database test for one RLS policy |
| 📖 Mobile build + web deploy + release recipe | 🔁 Second E2E flow                         | 🔁 States on the remaining screens  |
| Accessibility pass on others' screens         | 🔁 Full release dry-run, solo              | 🔁 Web-deploy dry-run, solo         |

### Phases 10–13 (after `v1.0.0`)

| Phase                 | Teo                                    | Dragos                                              | Marcian                                                  |
| --------------------- | -------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| 10 Friends → `v1.1.0` | Friend requests · Invite from friends  | 🔁 Friendships schema · Friend profile              | 🔁 DB test: non-friends can't see data · 🔁 Friends list |
| 11 Chat → `v1.2.0`    | 📖 Realtime messages · Unread counts   | Conversation screen · 🔁 Live leaderboard           | 🔁 Messages schema · Conversations list                  |
| 12 Push → `v1.3.0`    | Dev build · 🔁 Game-night notification | 📖 Invite notification (Edge Function) · Deep links | Register push tokens · Notification settings             |
| 13 CI/CD → `v1.4.0`   | Migrations on release · Sentry         | Web deploy on merge · Dependabot + CodeQL           | 🔁 EAS build on tags · Badges + changelog                |

Phase 13 also has 👥📖 **the first CI workflow**, paired: Marcian types, Teo guides.

---

## Rough timeline (re-check it in every sync)

| Step                        | Roughly                                                    |
| --------------------------- | ---------------------------------------------------------- |
| Step 0 — same starting line | 1–2 weeks (by mid-November 2026)                           |
| Step 1 — design system      | 2–3 weeks (early December)                                 |
| Step 2 — database           | 2–3 weeks (around the holidays — plan a lighter fortnight) |
| Step 3 — login, `v0.1.0`    | 2–3 weeks (mid to late January 2027)                       |

Since everyone carries the same number of tasks, a step finishes when the **slowest column** finishes. If one column keeps finishing last, discuss it in the sync: pair on it, or move a task across.
