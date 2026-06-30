# Gamenight — Build Roadmap

A phased, learn-by-doing plan for building **Gamenight**: an Expo (React Native + web) app where friends create *parties*, lock in a fixed player roster, run *game nights*, record scores, track win rates, browse a board-game catalog, chat, and manage friends.

> **How this roadmap teaches.** It tells you *what* to build, in *what order*, *why*, and *when to commit and push* — but not *how*. Every phase starts with "Learn first" links so you discover the actual code yourself. The parts marked **Design decision** are the ones worth struggling with; that's where the real learning is. No code is included on purpose. Ask me for code only when you're genuinely stuck.

---

## How to use this document

- Work **top to bottom**. Each phase is a shippable slice that the next one builds on. Don't jump ahead.
- Tick the checkboxes as you go — this is your progress tracker.
- Read the **Learn first** links *before* writing anything in that phase.
- The blockquoted **Commit:** lines tell you exactly when to commit and give you a ready-made message.
- **Design decision** boxes are mini-assignments. Decide, write down your reasoning (a note in the repo is great), then build.
- Treat **Best practices / gotchas** as the stuff that would otherwise cost you a wasted afternoon.

---

## Git workflow (read once, apply in every phase)

This is the routine you asked to be reminded of. Apply it the same way everywhere.

- **Branch per phase.** Create a branch like `feat/phase-2-auth` off `main`, do the phase's work there, then open a Pull Request into `main` and merge it — even working solo. Reviewing your own PR is a great habit. Learn the flow: [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow).
- **Commit small and often.** One *atomic* commit per logical change (roughly one checkbox). A commit should do one thing and still leave the app working.
- **Use Conventional Commits** for every message: `type(scope): short description` in the imperative mood. Types you'll use: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `style`, `perf`. Spec: [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/) · why it matters: [How to write a Git commit message](https://cbea.ms/git-commit/).
- **Push** at the **end of every work session** (so nothing lives only on your laptop) and **always at the end of a phase**.
- **Tag releases** at the milestones marked below using semantic versioning (`v0.1.0`, `v0.2.0`, …). Learn tagging — just the one short chapter: [Pro Git: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging).
- **Never commit secrets.** Write your `.gitignore` *before* your first commit (it must ignore `node_modules`, `.env*`, build output, `.expo`). Expo + Node `.gitignore` reference: [github/gitignore](https://github.com/github/gitignore).

If you forget everything else: *commit per logical change, push at the end of each session, tag at each milestone.*

---

## Cost — how to keep this $0

Your constraint is "free." This whole stack has a real free tier. Here's the budget reality so nothing surprises you:

- **Expo SDK + CLI** — free forever. You develop locally and in **Expo Go** (free). [Expo pricing](https://expo.dev/pricing)
- **Supabase** (database, auth, realtime, storage, edge functions) — free tier: 500 MB database, 1 GB file storage, 50,000 monthly active users, 5 GB egress, **2 projects**, **no credit card required**. Caveat: a free project **pauses after ~1 week of inactivity** (you click to restore it). [Supabase pricing](https://supabase.com/pricing)
- **Expo Push Notifications** — free, no per-message charge (rate-limited, plenty for you). [Push overview](https://docs.expo.dev/push-notifications/overview/)
- **EAS Build** (cloud builds) — free tier gives ~15 iOS + 15 Android builds/month. You can also **build locally for free**. You'll need a build for push notifications (see Phase 9). [EAS Build](https://docs.expo.dev/build/introduction/) · [Local builds](https://docs.expo.dev/build-reference/local-builds/)
- **Maps** — Google Maps needs billing enabled. Avoid that: use **OpenStreetMap** (free, no key). Easiest of all: start with free-text locations and add maps later. (See Phase 3.)
- **BoardGameGeek XML API2** — free. [Docs](https://boardgamegeek.com/wiki/page/BGG_XML_API2)
- **GitHub** — free private repos.
- **Web hosting** — free tiers from [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/), Vercel, Netlify, or Cloudflare Pages.
- **CI/CD & DevOps tooling** — **GitHub Actions** (2,000 free Linux minutes/month on private repos, *unlimited* on public), **Dependabot** + secret scanning + CodeQL, and **Husky / lint-staged / commitlint** are all free. **Docker Desktop** (free for personal use) runs your local Supabase stack. [GitHub Actions billing](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
- **Error monitoring** — [Sentry](https://sentry.io/pricing/) free Developer tier: 5,000 errors/month. (See Phase 11.)

**Design decision:** Stay on Supabase free tier and accept project-pausing during the build, or not? For a learning project, free tier is the right call — just know about the pause.

---

## Tech stack & why

You picked "some React Native experience," TypeScript, and lowest-cost backend. Given that:

- **Expo (latest SDK) + Expo Router + TypeScript** — Expo Router gives you file-based routing that works on iOS, Android, **and web** from one codebase (your web-compatibility requirement). [Expo Router](https://docs.expo.dev/router/introduction/) · [Expo + TypeScript](https://docs.expo.dev/guides/typescript/) · use the newest SDK: [Expo changelog](https://expo.dev/changelog).
- **Supabase** — Postgres + auth + realtime + storage + serverless functions on one free tier. Postgres (relational) is the right fit because almost everything you're tracking is *relationships and aggregates* (who played whom, win rates per game). [Supabase docs](https://supabase.com/docs).
- **TanStack Query for server state + Zustand for local/UI state** — the 2026 standard split. Don't make one tool do both. [TanStack Query](https://tanstack.com/query/latest) · [TanStack Query in React Native](https://tanstack.com/query/latest/docs/framework/react/react-native) · [Zustand](https://zustand.docs.pmnd.rs/).

**Design decision:** Confirm you're comfortable with this stack before Phase 0. If you'd rather swap Zustand for React Context, that's fine for a small app — decide and note why.

---

## Data model overview (think it through before Phase 1)

You don't need SQL yet — just understand the shapes. You'll likely need concepts for:

- **Profile** — one per user (display name, avatar), linked to the auth user.
- **Friendship** — a link between two profiles with a status (pending / accepted). Powers the friends page and invites.
- **Party** — created by a host; has just a **name** and a fixed roster of players. The *when / where / what* does NOT live here.
- **Party roster** — the players in a party. **This is your hardest design problem** (see below).
- **Game night** — one evening inside a party (a party has many). Each game night carries its own **date/time**, **location** (free text *or* map coordinates), and the **games played** that night. Scheduling and game selection live here, not on the party.
- **Game** — a catalog entry (BGG or custom) with type, player count, difficulty, and a **scoring schema** (see below) describing how that game is scored.
- **Game result** — links a game night + a game + **structured** per-player data captured from the game's schema (points, bonuses, placement, money…) plus the computed winner.
- **Scoring schema** — per game: a win-condition archetype + the fields to capture. Drives the dynamic score-entry screen. Sources: hand-curated, mechanic-based default, AI-generated, or user override. (See Phase 4 and Phase 6.)
- **Message** — chat between friends (and maybe party group chats).

**Decision (locked in) — the immutable roster (core to your whole app):** A party's player count and identities are *fixed once set* so scores stay comparable. You've chosen to **enforce this in the database** — the strongest option, because the rule holds no matter what touches the data (your app, a script, or a direct API call). The UI can hide the buttons, but the database is what actually guarantees it.

Implementation shape to aim for (work out the SQL yourself — that's the learning): give a party a `locked` state, then add a **Postgres trigger** (backed by matching RLS policies) that **rejects any insert or delete on roster rows, and any change to a player's identity, once the party is locked**.

Think through *when* a party should lock. Recommended rule: lock the moment the first game night is created — that way you can still fix a typo before any scores exist, but the roster is frozen forever after real play begins. Write that rule down and decide what the UI shows once a party is locked.

Learn the tools you'll need: [Postgres triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Postgres constraints](https://www.postgresql.org/docs/current/ddl-constraints.html). Sketch the whole model visually first with the free [dbdiagram.io](https://dbdiagram.io).

---

# The phases

Milestone tags: **v0.1.0** auth · **v0.2.0** parties + scoring · **v0.3.0** stats + catalog · **v0.4.0** friends + chat · **v1.0.0** notifications + release · **v1.1.0** CI/CD & automation.

---

## Phase 0 — Foundations & project setup

**Goal:** A running Expo + TypeScript app (on a phone *and* in the browser), in a clean GitHub repo, with linting and formatting wired up. No features yet.

**Learn first:** [Expo "create your first app" tutorial](https://docs.expo.dev/tutorial/introduction/) · [Expo Router intro](https://docs.expo.dev/router/introduction/) · [React docs (if you want a refresher)](https://react.dev/learn) · [Running on web](https://docs.expo.dev/workflow/web/).

**Steps:**

- [ ] Install/verify the toolchain: a current Node LTS, a code editor, and Git.
- [ ] Scaffold a new Expo app **with TypeScript and Expo Router** (Expo's project creator). Confirm it runs on a device via Expo Go.
- [ ] Confirm the same app runs in the **browser** (Expo web). This proves web compatibility from day one — keep checking it every phase.

> **Commit:** `chore: scaffold expo app with typescript and expo router`

- [ ] Initialize git, write your `.gitignore` (before anything else), and make the first commit.
- [ ] Create the GitHub repo and push. Set `main` as protected if you like.

> **Commit:** `chore: add gitignore and project metadata`

- [ ] Add **ESLint + Prettier** and an editor format-on-save. Decide a folder structure (e.g. `app/` for routes, `src/` for components/lib/hooks). [Expo + ESLint/Prettier](https://docs.expo.dev/guides/using-eslint/).

> **Commit:** `chore: configure eslint, prettier, and project structure`

> **Push & tag:** push the branch, merge to `main`. No tag yet — there's nothing to release.

**Best practices / gotchas:** Pick the folder structure now and stick to it. Get web working *now*; web bugs are far cheaper to catch early than after 8 phases of mobile-only assumptions.

**Pro practice (real-world):** Pin your toolchain — add an `.nvmrc` (or Volta) for the Node version and an `.editorconfig` — so your machine and CI build identically.

---

## Phase 0.5 — Design system & theming (light, dark & system)

**Goal:** One reusable design system — colors, typography, spacing, and base components — supporting a light theme, a dark theme, and automatic following of the device theme. Build this *before* the feature screens so every later phase just reuses it instead of reinventing styles.

**Learn first:** [Expo — color themes / dark mode](https://docs.expo.dev/develop/user-interface/color-themes/) · [React Native `useColorScheme`](https://reactnative.dev/docs/usecolorscheme) · [React Navigation theming](https://reactnavigation.org/docs/themes/) (Expo Router builds on this) · [Material's color-system thinking](https://m3.material.io/styles/color/system/overview) for *why* named tokens beat hard-coded colors.

**Steps:**

- [ ] Turn the design spec (see `DESIGN.md`) into **design tokens**: a light palette and a dark palette (background, surface, text, primary, etc.), a spacing scale, a type scale, and corner radii. Keep colors as *named tokens* — never a raw hex value inside a screen.

> **Commit:** `feat(theme): add light and dark design tokens`

- [ ] Build a **theme provider** that reads the device color scheme and exposes the active theme app-wide. Support three modes: light, dark, and *system*.

> **Commit:** `feat(theme): add theme provider with system, light, and dark modes`

- [ ] **Persist** the user's choice so it survives restarts; default to *system*.

> **Commit:** `feat(theme): persist user theme preference`

- [ ] Build base components from the tokens — at minimum `Screen`, `Text`, `Button`, `Card`, `Input` — plus a theme toggle for the settings screen.

> **Commit:** `feat(ui): add themed base components and theme toggle`

- [ ] Verify both themes on device and web, and that flipping the *device* theme updates the app live.

> **Push & tag:** merge to `main`.

**Best practices / gotchas:** Never hard-code a color in a screen — always reference a token, or retrofitting dark mode becomes a nightmare. Check **contrast** in *both* themes (don't just invert the palette). Test the system-follow path by switching your OS theme while the app is open. Set the status-bar style per theme.

**Pro practice (real-world):** Treat the design system as testable — add a component-gallery screen (or Storybook for React Native) plus snapshot tests so styles can't silently drift.

---

## Phase 0.7 — DevOps foundations (local parity, secrets & automated hygiene)

**Goal:** Before any features, stand up a real engineering setup: a containerized local backend that mirrors production, your database schema managed as versioned migrations, safe secret handling, and automated checks that run on every commit and pull request — so quality is enforced by tooling, not willpower. All free.

> **Why now:** In a real project these guardrails exist from day one. Adding them after you've written features means retrofitting tests, untangling secrets, and reformatting the whole codebase. Far cheaper to do first.

**Learn first:** [Supabase local development](https://supabase.com/docs/guides/local-development) · [Supabase CLI getting started](https://supabase.com/docs/guides/local-development/cli/getting-started) · [Docker Desktop](https://docs.docker.com/desktop/) · [Husky git hooks](https://typicode.github.io/husky/) · [lint-staged](https://github.com/lint-staged/lint-staged) · [commitlint](https://commitlint.js.org/) · [Expo environment variables](https://docs.expo.dev/guides/environment-variables/).

**Steps:**

- [ ] Install **Docker Desktop** (free for personal use) and run the whole **Supabase stack locally** with the Supabase CLI (`supabase init`, `supabase start`). You now get an identical Postgres + Auth + Storage + Realtime in containers — develop offline, reset the DB at will, and stop depending on a shared cloud project for day-to-day work.

> **Commit:** `chore(devops): run supabase locally via cli and docker`

- [ ] Manage your **database schema as versioned migrations** (`supabase migration new`, `supabase db diff`) instead of clicking in the dashboard. Your schema becomes reviewable, diffable, replayable code — the single biggest "real project" upgrade.

> **Commit:** `chore(db): manage schema as versioned migrations`

- [ ] Set up **env management**: a git-ignored `.env` for local secrets, a committed `.env.example` documenting every required variable, and a clear split between `EXPO_PUBLIC_*` (safe, ships to the client) and server-only secrets. Never hard-code a key.

> **Commit:** `chore(devops): add env example and document configuration`

- [ ] Add **pre-commit hooks** with Husky + lint-staged so ESLint, Prettier, and a typecheck run automatically on staged files before every commit. Broken code can't even be committed.

> **Commit:** `chore(devops): add husky pre-commit hooks with lint-staged`

- [ ] Add **commitlint** to enforce the Conventional Commits you're already writing, so the history stays clean and a changelog can be generated later.

> **Commit:** `chore(devops): enforce conventional commits with commitlint`

- [ ] Add a **minimal CI workflow** (GitHub Actions) that runs on every pull request: install with cache, then lint, typecheck, and test. Turn on **branch protection** for `main` requiring this check to pass. Now quality is gated, not optional. (Public repos get unlimited free minutes; private repos get 2,000 free Linux minutes/month — plenty here.)

> **Commit:** `ci: add lint, typecheck, and test on pull requests`

- [ ] Set up a free **GitHub Project board** (columns: Backlog → To Do → In Progress → In Review → Done) with an issue **Type** field (Epic / Story / Task / Bug / Chore) and issue + PR templates. Turn each roadmap phase into an **Epic** and break the current phase into Stories and Tasks. This is your team's single source of truth — **Denis owns the board** (see `TEAM.md`).

> **Commit:** `chore(devops): add github project board and issue templates`

- [ ] Add **task scripts** (a `Makefile` or npm scripts) for the everyday commands — `dev`, `db:reset`, `db:migrate`, `lint`, `test`, `typecheck` — so the whole workflow is one command and self-documenting.

> **Commit:** `chore(devops): add task scripts for common workflows`

> **Push & tag:** merge to `main`. No app tag — this is groundwork.

**Best practices / gotchas:** Docker does **not** containerize the React Native app itself (mobile builds use native toolchains locally or on EAS) — use it for the **backend** (local Supabase, Edge Function testing) and **CI**, not the app. Keep CI fast (cache dependencies) or people skip it. The goal is **local = CI = prod**: the same migrations and the same containers everywhere, so "works on my machine" disappears.

---

## Phase 1 — Backend foundation (Supabase)

**Goal:** A Supabase project with your schema, Row Level Security on, and the app able to talk to it securely.

**Learn first:** [Use Supabase with Expo](https://docs.expo.dev/guides/using-supabase/) · [Supabase Expo quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native) · [Tables & relationships](https://supabase.com/docs/guides/database/tables) · [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security).

**Steps:**

- [ ] Create a free Supabase project. Save its URL and **publishable key** (not the secret key) for the app. *(Supabase is moving to `sb_publishable_…` / `sb_secret_…` keys — use the publishable one client-side.)*
- [ ] Turn your data-model sketch into real tables. Start with the essentials: profiles, parties, party roster, game nights, games, game results. Add friendships + messages later in their phases.

> **Commit:** `feat(db): add core schema for profiles, parties, and game nights`

- [ ] **Enable RLS on every table** and write policies so users only read/write what they should. This is not optional — without it your "publishable" key would expose everything.

> **Commit:** `feat(db): enable row level security and access policies`

- [ ] Wire the Supabase client into the app, reading config from environment variables (Expo requires the `EXPO_PUBLIC_` prefix for values used in app code). Use secure storage for the session on device.

> **Commit:** `feat(api): add supabase client with secure session storage`

> **Push & tag:** push, open PR, merge to `main`.

**Best practices / gotchas:** RLS-first thinking saves you from rewriting security later. Keep secrets in `.env` (already git-ignored). Generate TypeScript types from your database schema so your code and DB never drift — Supabase can do this for you.

**Pro practice (real-world):** Write this schema as your first **migration** (see Phase 0.7), and auto-generate DB types in CI so a build fails the moment code and schema drift.

---

## Phase 2 — Authentication

**Goal:** Users can sign up, log in, log out; a profile row is created on signup; logged-out users can't reach the app's inner screens.

**Learn first:** [Supabase Auth with React Native](https://supabase.com/docs/guides/auth/quickstarts/react-native) · [Full Expo user-management tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native) · [Expo Router auth/protected routes](https://docs.expo.dev/router/advanced/authentication/).

**Steps:**

- [ ] Build sign-up, login, and logout. (Email + password is simplest to start; magic links are an option.)

> **Commit:** `feat(auth): add email/password sign up and login`

- [ ] On signup, create the user's profile row automatically. Decide where: a database trigger vs. an app call. (Trigger is more robust.)

> **Commit:** `feat(auth): create profile on sign up`

- [ ] Add an auth-state provider and **protect routes**: unauthenticated users are redirected to login; authenticated users land on the home screen.

> **Commit:** `feat(auth): guard app routes by session state`

- [ ] Verify the whole flow on **device and web**.

> **Push & tag:** merge to `main`, then **tag `v0.1.0`** — your first real milestone.

**Best practices / gotchas:** Handle the loading state while the session restores (avoid a flash of the login screen on launch). Show clear errors for wrong passwords / taken emails. Confirm the session survives an app restart.

**Pro practice (real-world):** Cover the auth guard with tests, never log tokens, and keep auth secrets in env — not in code.

---

## Phase 3 — Parties & the immutable roster

**Goal:** Create a party with a location, time, planned games, and a **locked** set of players. View your parties.

**Learn first:** Revisit your **immutable-roster design decision** above. [Postgres triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [Forms in React Native](https://docs.expo.dev/router/reference/typed-routes/) and a form/validation library of your choice (e.g. React Hook Form + Zod).

**Steps:**

- [ ] Build the "create party" flow: **just a name** (location, time, and games are NOT here — they belong to each game night, Phase 4).

> **Commit:** `feat(party): add create-party form`

- [ ] Add players to the party at creation time (start by picking from existing users/usernames; richer friend-based invites come in Phase 7). Persist the roster.

> **Commit:** `feat(party): add players to a new party`

- [ ] **Enforce immutability with your database rule.** Add the `locked` state plus the Postgres trigger (and RLS) so roster rows can't be added, removed, or have a player's identity changed once the party locks. Prove it works: try to add a player via a direct API call and confirm the *database itself* rejects it — not just the UI.

> **Commit:** `feat(db): add trigger to lock party roster after creation`

- [ ] Build "my parties" list + a party detail screen.

> **Commit:** `feat(party): list parties and show party details`

> **Push & tag:** merge to `main`.

**Best practices / gotchas:** This phase is the heart of *why the app exists* (comparable scores), so get immutability genuinely enforced, not just hidden in the UI. Store the planned time in UTC and format per device. Validate inputs (no empty party names, at least 2 players).

**Pro practice (real-world):** Make the lock trigger a *tested guarantee* — a CI test that fires a direct API insert and asserts the database itself rejects it.

---

## Phase 4 — Game nights & scoring

**Goal:** Inside a party, run a game night, record each game's per-player scores when it ends, and see who's winning the night.

**Learn first:** [TanStack Query basics](https://tanstack.com/query/latest/docs/framework/react/overview) (you'll lean on it for fetching/mutating game data) · [Supabase data queries](https://supabase.com/docs/guides/database/joins-and-nesting).

**Steps:**

- [ ] Build the "new game night" flow: a **date/time**, a **location** (free text or map), and the **games you plan to play** (picked from the catalogue). This is where scheduling and game selection live.

> **Commit:** `feat(gamenight): create a game night within a party`

- [ ] Add a played game to the night — pick from the catalog (Phase 6) or, for now, type a game name.

> **Commit:** `feat(gamenight): add a played game to a night`

- [ ] Build a **generic** score entry first (one number per player) and record the per-game result + winner. Get the whole flow working before going game-specific.

> **Commit:** `feat(scoring): record per-player scores for a game`

- [ ] Make entry **schema-driven**: render the inputs dynamically from the game's scoring schema (points, bonuses, placement, money…) and compute the winner from its archetype. Store the structured result so stats can use it later.

> **Commit:** `feat(scoring): render score entry from the game's schema`

- [ ] Show a live **game-night leaderboard** (points per player, current leader).

> **Commit:** `feat(scoring): show game-night leaderboard`

> **Push & tag:** merge to `main`, then **tag `v0.2.0`**.

**Best practices / gotchas:** **Design decision:** define what a "win" means per archetype (most points? last standing? lowest score?) and what the *night* winner is (most game-wins, or most total points). Write it down — every win-rate stat in Phase 5 depends on it. Build the generic schema first so the flow works end-to-end, then layer the dynamic schema renderer on top. Only the host can enter scores (enforce in RLS).

**Pro practice (real-world):** Extract scoring/win logic into pure functions and unit-test them (your highest-risk code), and gate merges on those tests.

---

## Phase 5 — Stats & win rates

**Goal:** Global and per-context win rates: overall, per party, per game, and head-to-head per friend.

**Learn first:** [Postgres aggregate functions](https://www.postgresql.org/docs/current/functions-aggregate.html) · [Supabase database functions (RPC) & views](https://supabase.com/docs/guides/database/functions). Doing the math in the database is faster and keeps the app simple.

**Steps:**

- [ ] Compute and display each user's **global win rate** across all game nights.

> **Commit:** `feat(stats): compute global win rate`

- [ ] Add per-game and per-party breakdowns.

> **Commit:** `feat(stats): add per-game and per-party win rates`

- [ ] Add **head-to-head**: times you've played with a given friend, and your win rate against them per game and in total. (Surfaced on the friend's profile in Phase 7.)

> **Commit:** `feat(stats): add head-to-head stats between players`

> **Push & tag:** merge to `main`.

**Best practices / gotchas:** Put aggregation logic in **one place** (a database view or RPC) so every screen shows consistent numbers. Decide how to handle ties and games with missing scores *before* you compute, or your percentages will quietly lie. Cache stats with TanStack Query so screens feel instant.

**Pro practice (real-world):** Verify win-rate math against a committed seed dataset with known expected results, so a refactor can't quietly change the numbers.

---

## Phase 6 — Board-game catalog (BoardGameGeek + custom)

**Goal:** A searchable, filterable catalog combining BoardGameGeek data and your own custom entries, with type, player count, and difficulty.

**Learn first:** [BGG XML API2 docs](https://boardgamegeek.com/wiki/page/BGG_XML_API2) — note it returns **XML, not JSON**, has a **search** endpoint and a **thing** (details) endpoint, is **rate-limited**, and has terms of use. You'll need to parse XML and cache results.

**Steps:**

- [ ] Integrate BGG search: query by name, then fetch details (type, player count, weight/difficulty) for a chosen game.

> **Commit:** `feat(catalog): integrate boardgamegeek search and details`

- [ ] **Cache fetched games into your own Supabase table** so you're not hitting BGG repeatedly (respects their rate limits and makes search fast).

> **Commit:** `feat(catalog): cache board games in the database`

- [ ] Add custom (non-BGG) games with the same fields.

> **Commit:** `feat(catalog): add custom user-created games`

- [ ] Build the search bar + filters (type, player count, difficulty). **Player-count rule:** a query `qmin–qmax` matches a game when `min ≥ qmin − 1`, `min ≤ qmin`, and `max ≥ qmax` — it covers your whole range without starting more than one player below your minimum. So `3–5` matches `2-5 / 2-6 / 3-7` but not `1-5` or `2-4`; a single number `n` means `n–n`. (Already implemented server-side — see `scripts/games_schema.sql`.)

> **Commit:** `feat(catalog): add catalog search bar and filters`

- [ ] Wire the catalog into Phase 4's "add a played game" picker.

> **Commit:** `feat(catalog): select catalog games when scoring`

- [ ] Add a **game detail** screen and give every game a **scoring schema**. Define ~10 win-condition archetypes, then a **default classifier** that maps a game to an archetype from its BGG mechanics/categories (deterministic, free — this covers the 5,000-game long tail).

> **Commit:** `feat(catalog): add scoring archetypes and mechanic-based defaults`

- [ ] Enrich popular games with detailed schemas. Run an **offline batch script** that asks an LLM to read a game's BGG description/rules and propose the specific fields (Catan's longest road, Monopoly's elimination + money…), then **cache the JSON** in your database so each game is generated once. Hand-curate the top ~100; let hosts override per party.

> **Commit:** `feat(catalog): generate detailed scoring schemas (cached)`

> **Push & tag:** merge to `main`, then **tag `v0.3.0`**.

**Best practices / gotchas:** **Design decision:** how do you map BGG's "weight" to your difficulty scale, and how often do you refresh cached data? Always handle BGG being slow/down gracefully — never block the UI on it. Debounce the search box so you're not firing a request per keystroke. **Keep schema generation free:** lean on the deterministic mechanic-based default for the long tail; generate AI schemas only for games people actually use (lazily, then cached) or as a one-off offline batch you ship as static data, and use the cheapest model. The score-entry UI never calls the AI — it only reads a stored schema.

**Pro practice (real-world):** Never call BGG in tests — record fixtures and mock it; run schema generation as an offline cached job, never in the request path.

---

## Phase 7 — Friends system

**Goal:** Send/accept friend requests, see a friends list, and view a friend's profile with their global win rate, how many times you've played together, and your head-to-head record.

**Learn first:** Reuse Phase 5 stats and Phase 1 RLS patterns. [Modeling many-to-many relationships](https://supabase.com/docs/guides/database/joins-and-nesting).

**Steps:**

- [ ] Friend requests: send, accept, decline.

> **Commit:** `feat(friends): send and respond to friend requests`

- [ ] Friends list page.

> **Commit:** `feat(friends): add friends list`

- [ ] Friend profile showing their global win rate + the head-to-head stats from Phase 5.

> **Commit:** `feat(friends): show friend profile with stats`

- [ ] Upgrade party invites (Phase 3) to invite from your friends list.

> **Commit:** `feat(party): invite players from friends list`

> **Push & tag:** merge to `main`.

**Best practices / gotchas:** A friendship is one relationship between two people — store it once and query both directions, rather than duplicating rows. Lock down with RLS: you can only see friend data once the friendship is accepted.

**Pro practice (real-world):** Write RLS policy tests that assert a non-friend *cannot* read friend data — treat security as automated tests, not hope.

---

## Phase 8 — Realtime messaging / chat

**Goal:** Friends can chat, with messages appearing in real time.

**Learn first:** [Supabase Realtime](https://supabase.com/docs/guides/realtime) · [Getting started with Realtime](https://supabase.com/docs/guides/realtime/getting_started) · [Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes) (subscribe to new rows in a messages table).

**Steps:**

- [ ] Messages table + RLS so only conversation participants can read/write.

> **Commit:** `feat(chat): add messages schema and policies`

- [ ] One-to-one conversation screen: load history, send a message.

> **Commit:** `feat(chat): add direct message conversation screen`

- [ ] Subscribe to realtime inserts so new messages appear instantly without refresh.

> **Commit:** `feat(chat): stream new messages in realtime`

> **Push & tag:** merge to `main`, then **tag `v0.4.0`**.

**Best practices / gotchas:** Unsubscribe from channels when leaving a screen (or you'll leak subscriptions and hit limits). Optimistically show the sender's own message instantly. **Design decision:** do you also want party group chats now, or ship 1:1 first and add groups later?

**Pro practice (real-world):** Lint/test for subscription leaks (unsubscribe on unmount), and exercise realtime against your local Docker stack before touching prod.

---

## Phase 9 — Push notifications

**Goal:** A user gets a push notification when they're invited to a party (and optionally on new messages).

**Learn first:** [Expo push overview](https://docs.expo.dev/push-notifications/overview/) · [Setup & getting a push token](https://docs.expo.dev/push-notifications/push-notifications-setup/) · [Sending from a server](https://docs.expo.dev/push-notifications/sending-notifications/) · [Supabase Edge Functions](https://supabase.com/docs/guides/functions). **Important:** since SDK 53, **Expo Go can't receive push on Android** — you need a **development build** (`expo-dev-client`). [Development builds](https://docs.expo.dev/develop/development-builds/introduction/).

**Steps:**

- [ ] Create a development build so you can actually test push (free locally, or via EAS free tier).

> **Commit:** `chore: add development build configuration`

- [ ] Request notification permission and store each user's Expo **push token** in the database.

> **Commit:** `feat(notifications): register and store push tokens`

- [ ] On a party invite, a **Supabase Edge Function** calls Expo's push service to notify the invitee.

> **Commit:** `feat(notifications): send push on party invite`

- [ ] Handle taps: open the relevant party/conversation.

> **Commit:** `feat(notifications): deep-link from notification taps`

> **Push & tag:** merge to `main`.

**Best practices / gotchas:** Never trust the client to send notifications to others — do it server-side in the Edge Function. Handle permission denial gracefully. Web push is a separate path; it's fine to scope web out for v1 and note it.

**Pro practice (real-world):** Test the Edge Function locally with the Supabase CLI (Docker), and keep the Expo push token in GitHub/EAS secrets — never in the client.

---

## Phase 10 — Testing, polish, web & release

**Goal:** The app is tested, handles errors/empty/loading states, looks right on web, and is shippable.

**Learn first:** [Unit testing with Jest in Expo](https://docs.expo.dev/develop/unit-testing/) · [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) · [Maestro (E2E)](https://docs.maestro.dev/) · [EAS Build](https://docs.expo.dev/build/introduction/) · [EAS Hosting for web](https://docs.expo.dev/eas/hosting/introduction/).

**Steps:**

- [ ] Add unit/component tests for your core logic (scoring, win-rate math, roster locking).

> **Commit:** `test: cover scoring and win-rate logic`

- [ ] Add at least one end-to-end happy-path test with Maestro (sign in → create party → record a score).

> **Commit:** `test(e2e): add core user-journey flow`

- [ ] Polish: consistent loading, empty, and error states everywhere; check the **web layout**; basic accessibility.

> **Commit:** `fix(ui): add loading, empty, and error states`

- [ ] Build and deploy: a mobile build via EAS (or local), and the web build to a free host.

> **Commit:** `chore: configure builds and web deploy`

> **Push & tag:** merge to `main`, then **tag `v1.0.0`** — you shipped it.

**Best practices / gotchas:** Don't wait until here to test — write a test alongside any tricky logic as you build (especially Phases 4–5). Run your test suite before every merge. Consider free error monitoring ([Sentry](https://docs.sentry.io/platforms/react-native/) has a dev tier) so you see crashes after release.

**Pro practice (real-world):** Enforce a coverage threshold and an E2E smoke test in CI, then automate the release: tag → build → deploy → changelog (see Phase 11).

---

## Phase 11 — CI/CD & automation (all free)

**Goal:** Every push and pull request is automatically linted, type-checked, tested, and — on `main` — built, deployed, and migrated, with dependency updates, security scanning, and error monitoring running themselves. You stop deploying by hand. Builds on the basic CI from Phase 0.7.

**Learn first:** [GitHub Actions quickstart](https://docs.github.com/en/actions/quickstart) · [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) · [Building Expo apps on CI](https://docs.expo.dev/build-reference/build-on-ci/) · [EAS + GitHub Actions](https://docs.expo.dev/eas-update/github-actions/) · [Supabase: managing environments](https://supabase.com/docs/guides/deployment/managing-environments) · [Dependabot](https://docs.github.com/en/code-security/dependabot) · [Branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) · [Sentry for React Native](https://docs.sentry.io/platforms/react-native/).

**Steps:**

- [ ] Extend CI to **test the database**: spin up Postgres (or the Supabase stack) in a service container and run your migrations against it on every PR, using the same images as local dev for parity.

> **Commit:** `ci: run database migrations against disposable postgres in ci`

- [ ] Add **continuous deployment for web**: on merge to `main`, build the Expo web app and deploy it to a free host (EAS Hosting, Cloudflare Pages, Vercel, or Netlify). Add **PR preview deploys** so every pull request gets a shareable URL.

> **Commit:** `ci: build and deploy web on merge to main`

- [ ] Wire **EAS Build** into CI for mobile binaries, triggered on release **tags** so each milestone produces an installable build. (Free tier: 15 iOS + 15 Android builds/month, or build locally for free.)

> **Commit:** `ci: trigger eas build on release tags`

- [ ] **Automate database deploys**: on merge to `main`, apply new Supabase migrations to your hosted project via the CLI in Actions, with the access token stored as a GitHub Actions secret (never in the repo).

> **Commit:** `ci: apply supabase migrations to production on release`

- [ ] Turn on **automated dependency updates and security scanning** — Dependabot (or Renovate) for update PRs, plus GitHub's free secret scanning and Dependabot alerts; enable CodeQL code scanning (free on public repos).

> **Commit:** `chore(security): enable dependabot, secret scanning, and code scanning`

- [ ] Add **error monitoring** with Sentry (free Developer tier: 5,000 errors/month) and upload source maps from CI so production stack traces are readable.

> **Commit:** `feat(observability): add sentry error monitoring with sourcemaps`

- [ ] Add **status badges** (CI, build) to your README and generate a **CHANGELOG** automatically from your Conventional Commits.

> **Commit:** `docs: add ci badges and automated changelog`

> **Push & tag:** merge to `main`, then **tag `v1.1.0`** — your first "the robots do the work" release.

**Best practices / gotchas:** Secrets live in **GitHub Actions secrets** and **EAS secrets**, never in YAML or the repo. Keep pipelines fast and parallel (cache `node_modules`, split lint/test/build jobs) so CI stays under a minute or two. Make CI **required** via branch protection or it becomes decorative. Pin action versions (e.g. `actions/checkout@v4`) and review Dependabot's own PRs.

**Cost (all free):** GitHub Actions — unlimited minutes on public repos, 2,000 Linux min/month on private. EAS Build — 15 iOS + 15 Android/month, or unlimited local. Supabase CLI + Postgres containers — free. Dependabot, secret scanning, CodeQL (public) — free. Sentry — 5,000 errors/month free. Web hosting — Cloudflare Pages / Vercel / Netlify / EAS Hosting free tiers.

---

## After v1.0.0 — ideas to keep learning

Group chats per party · photo uploads to Supabase Storage · offline support with TanStack Query persistence · real map locations via OpenStreetMap/Leaflet on web + a free map view on mobile · CI that runs lint + tests on every PR (GitHub Actions) · automated changelog from your Conventional Commits.

---

## Quick reference — commit cadence

| When | Do |
|---|---|
| Finished one logical change (≈ a checkbox) | **Commit** with a Conventional Commit message |
| End of a work session | **Push** your branch |
| End of a phase | Open PR → merge to `main` → **push** |
| Milestone phases (2, 4, 6, 8, 10) | Also **tag** `v0.1.0` … `v1.0.0` |
| Before any merge to `main` | Run lint + tests; confirm web still works |

You've got this. Build one phase at a time, keep `main` always working, and let the commit history tell the story of what you learned.
