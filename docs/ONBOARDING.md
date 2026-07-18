# Gamenight — Onboarding (Dragos, start here)

Welcome to the team. This guide takes you from "a bit of Python" to shipping reviewed code in this repo. It is the long-form version of **Phase D** in [`ROADMAP.md`](./ROADMAP.md) — read that file's intro and the **Two-person workflow** section right after this one.

**The deal:** you put in ~15 h/week; the plan below front-loads only what the next few phases actually need. By `v1.0.0`, you and Teo can each explain **every part of the app** — that's a stated project goal, and the workflow (cross-reviews, teach-backs) exists to make it happen. You are not "the junior who does the small stuff"; you're the second engineer who happens to be earlier on the curve.

**House rules for learning:**

- Type every example out. Never paste code you don't understand.
- Blocked longer than ~30 min after honestly trying? Write down what you tried, then ask Teo. Asking with notes is a skill, not a weakness.
- "I don't understand this" is a valid PR review comment — from you _and_ to you.

---

## 1. What you're building

A free mobile + web app for friend groups to track board-game-night scores and win rates: create a _party_ with a fixed player roster, run _game nights_, record per-game scores, see who's actually the best at Catan. Product spec: [`DESIGN.md`](./DESIGN.md) · visual mockups: `gamenight-mockups.html` (double-click, opens in browser) · plan: [`ROADMAP.md`](./ROADMAP.md) · progress tracker: `gamenight-roadmap.html`.

**Stack in one line:** TypeScript everywhere · **Expo / React Native** (one codebase → iOS + Android + web) · **Supabase** (Postgres database, auth, realtime — the whole backend) · GitHub (code, issues, CI). Everything runs free.

---

## 2. Coming from Python — the mental map

The concepts transfer; mostly the spelling changes. Skim now, come back when something feels alien.

| Python                            | This project                                   | Notes                                                            |
| --------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| `pip` + `requirements.txt` / venv | `npm` + `package.json` + `node_modules/`       | `npm install` once; `node_modules` is the git-ignored venv       |
| `python script.py`                | `npm run <script>` / `npx <tool>`              | Scripts live in `package.json` → `"scripts"`                     |
| `def f(x):`                       | `function f(x) {}` or `const f = x => {}`      | Arrow functions are everywhere; get comfortable with them        |
| `dict` / `list`                   | object `{}` / array `[]`                       | `obj.key` or `obj['key']`; arrays have `.map`, `.filter`         |
| list comprehension                | `.map()` / `.filter()`                         | `[x*2 for x in xs]` → `xs.map(x => x * 2)`                       |
| `async def` / `await`             | `async` / `await`                              | Nearly identical; JS is async-first — you'll use it constantly   |
| duck typing + type hints          | **TypeScript** — hints that actually enforce   | The compiler blocks wrong types; CI runs it (`npm run ts-check`) |
| `None`                            | `null` **and** `undefined`                     | Two flavors of nothing; TS forces you to handle them             |
| f-strings `f"hi {name}"`          | template literals `` `hi ${name}` ``           | Backticks, not quotes                                            |
| indentation blocks                | `{ }` blocks; indentation is just style        | Prettier formats on save/commit — never format by hand           |
| `black` / `flake8` / `mypy`       | Prettier / ESLint / TypeScript                 | Same roles; all wired into the editor, git hooks, and CI         |
| Django/Flask + SQL you write      | **Supabase** — Postgres + auto REST API + auth | You write SQL in migrations; the client library does the queries |

The genuinely **new** ideas (no Python equivalent you've likely met): **React** (UI = a function of state; when state changes, the UI re-renders) and **JSX** (HTML-ish tags inside code — `<Button>Save</Button>` is a function call). Week 2 covers them.

---

## 3. Set up your machine (do this first, ~half a day)

Work through top to bottom; each step assumes the previous one. Windows users: install [Git Bash](https://git-scm.com/downloads) or WSL and use it for everything below.

1. **Git + GitHub.** Install [git](https://git-scm.com/downloads). Make a GitHub account if needed; send Teo your username — he adds you as a collaborator on `Attackeler/gamenight-teo-denis`. Set your identity: `git config --global user.name "..."` and `user.email "..."`.
2. **Node.js 26.4 + npm 11** — the repo **enforces** these versions (`engines` + `engine-strict`), so use a version manager instead of a system install: [nvm](https://github.com/nvm-sh/nvm) (`nvm install 26.4.0 && nvm use 26.4.0`), or [Volta](https://volta.sh/). Check: `node -v` → `v26.4.0`.
3. **VS Code** — [download](https://code.visualstudio.com/). When you open the project it will offer _"This workspace has extension recommendations"_ → **Install All**. What each extension does, and which to add later: [`EXTENSIONS.md`](./EXTENSIONS.md). Turn on **Format on Save** (Settings → search "format on save").
4. **Docker Desktop** — [install](https://www.docker.com/products/docker-desktop/). Only used to run the Supabase backend locally; you never write Dockerfiles here.
5. **Clone and install:**

    ```bash
    git clone https://github.com/Attackeler/gamenight-teo-denis.git
    cd gamenight-teo-denis
    npm install        # also installs the git hooks (husky) automatically
    ```

6. **Local backend up:**

    ```bash
    npx supabase start   # first run downloads containers — takes a while
    npx supabase status  # prints local URLs and keys
    ```

7. **Environment file:** copy `.env.example` to a new file `.env.local`; fill `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_KEY` with the **API URL** and **publishable/anon key** from `npx supabase status`. (`.env.local` is git-ignored — secrets never get committed.)
8. **Run the app:**

    ```bash
    npx expo start       # or: make start-app (starts supabase too, uses a tunnel)
    ```

    - **Phone:** install **Expo Go** ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)), scan the QR from the terminal.
    - **Browser:** press `w` in the same terminal.

9. **Verify the toolchain:** `make check-files` (runs ESLint + Prettier check + TypeScript check — the same three checks CI runs on every PR).

**Done when:** the app renders on your phone **and** in the browser, and `make check-files` passes. That's the first Phase D checkbox — tick it in `gamenight-roadmap.html`.

---

## 4. Learning path (~3 weeks at 15 h/week)

Deliberately narrow: just enough JS → TS → React → React Native to do Phase 2–4 work. SQL/Supabase comes later, attached to Phase 3 (see `ROADMAP.md`). Don't binge tutorials — hit the checkpoint, move on.

### Week 1 — JavaScript (from Python) + git

- **JS crash course, Python-aware:** [MDN — JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — skim what's obvious, slow down at: arrow functions, destructuring (`const { theme } = props`), spread (`...`), array methods (`map`/`filter`/`find`), objects.
- **Deeper reference when confused:** [javascript.info](https://javascript.info/) chapters 1–5.
- **Async:** [MDN async/await](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) — you know this from Python; learn the Promise spelling.
- **Git the team way:** [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) + [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (§6 below).

> **Checkpoint:** you can write a function that takes an array of `{ name, score }` objects and returns the top scorer, using `filter`/`map`/reduce-or-sort — without looking up syntax. And you've opened a practice PR (any tiny thing — fix a typo in a doc) and merged it after Teo's review.

### Week 2 — TypeScript + React

- **TS for people who know some typing:** [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) → [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Think "mypy, but load-bearing".
- **React, the official way:** [react.dev Quick Start](https://react.dev/learn) → [Thinking in React](https://react.dev/learn/thinking-in-react) → [useState](https://react.dev/reference/react/useState) → [useContext / passing data deeply](https://react.dev/learn/passing-data-deeply-with-context). React is the biggest new idea in the stack — give it the most hours this week.

> **Checkpoint:** open `src/theme/ThemeProvider.tsx` in this repo and explain to Teo, line by line, what it does: the context, the state, how `system` mode resolves against the device scheme, how AsyncStorage persists the choice. (Bonus: spot what happens on first launch when storage is empty — discuss it with Teo.)

### Week 3 — React Native + Expo, then your first real PR

- **RN in one sitting:** [React Native — the basics](https://reactnative.dev/docs/getting-started) — `View`/`Text`/`Pressable`/`StyleSheet` instead of HTML/CSS.
- **Expo & routing:** [Expo tutorial](https://docs.expo.dev/tutorial/introduction/) (skim; our app already exists) · [Expo Router](https://docs.expo.dev/router/introduction/) — files in `app/` become screens.
- **Read our actual code:** `app/_layout.tsx` (fonts + providers + navigation stack), `app/index.tsx`, everything in `src/theme/` and `src/components/`.

> **Checkpoint (= first real PR):** build the `Input` base component from [`DESIGN.md`](./DESIGN.md) §5 — `surfaceAlt` background, radius 12, height 48, focus ring in `accent` — using only theme tokens, and show it in the component gallery. Branch `feat/phase-2-input`, commit `feat(ui): add themed input component`, open a PR, iterate on Teo's review until merged. Congratulations — you're on the scoreboard.

**Later (before your Phase 3 tasks):** [SQLBolt](https://sqlbolt.com/) lessons 1–12, then [Supabase: what is RLS](https://supabase.com/docs/guides/database/postgres/row-level-security). Budget ~4 h.

---

## 5. Repo tour

| Path              | What it is                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------- |
| `app/`            | Screens. File-based routing: `app/index.tsx` is the home screen; `_layout.tsx` wraps them all |
| `src/theme/`      | Design system: `tokens.ts` (colors/type/spacing from DESIGN.md) + `ThemeProvider.tsx`         |
| `src/components/` | Reusable base components (`Button`, `Card`, …) — build screens out of these, never raw styles |
| `supabase/`       | Backend config + (soon) `migrations/` — versioned SQL that defines the database               |
| `docs/`           | You are here: spec, roadmap, tracker, mockups, this guide, import scripts                     |
| `app-example/`    | Expo's demo code kept for reference — not part of the app; safe to peek, don't import from it |
| `.github/`        | CI workflow (lint + prettier + typecheck on every PR) and issue/PR templates                  |
| `.husky/`         | Git hooks: pre-commit formats/lints staged files; commit-msg enforces Conventional Commits    |
| `package.json`    | Dependencies + the `npm run …` scripts; `Makefile` wraps the common combos                    |
| `.env.local`      | Your machine-only secrets (Supabase URL/key). Never committed; template is `.env.example`     |

---

## 6. How we work (the contract)

Full version: `ROADMAP.md` → **Two-person workflow**. The short form:

1. **Never commit to `main`.** Branch per task: `feat/phase-4-login-screen`, `fix/...`, `docs/...`, `chore/...`.
2. **Commit messages are checked** by commitlint. Format: `type(scope): lower-case summary` — e.g. `feat(ui): add themed input component`, `fix(theme): default to system mode on first launch`. Allowed types: `feat` `fix` `docs` `chore` `refactor` `test` `ci` `style` `perf` `revert`. The roadmap hands you ready-made messages for most tasks.
3. **Small commits** (≈ one roadmap checkbox), **push every session** — unpushed work doesn't exist.
4. **Every PR is reviewed by the other person.** As a reviewer, don't approve until you could explain the diff; as an author, answer "why" in the thread, not in DMs — future-you reads PRs like documentation.
5. **Weekly sync, Friday ~30 min:** demo what shipped · do any due teach-back · split next week's tasks (the tracker is the sprint list).
6. **Stuck or found a bug?** GitHub issue, even a one-liner. Nothing lives only in someone's head.
7. **The hooks will nag you** — pre-commit reformats and lints, commit-msg rejects bad messages, CI re-checks everything. That's the guardrail, not a punishment; you literally cannot break `main` by accident.

---

## 7. Glossary (the words that will fly around)

- **Expo** — toolchain around React Native: run the app on your phone via Expo Go, build for stores, deploy web.
- **React Native (RN)** — React, but rendering native iOS/Android components instead of HTML.
- **Expo Router** — file-based navigation: a file in `app/` = a screen with a URL.
- **Component** — a function returning UI (`JSX`). Screens are components made of smaller components.
- **Props / state / hooks** — inputs to a component / its memory / the `useXxx` functions that manage both.
- **Context** — React's way to share a value (like the current theme) with a whole subtree without passing it through every level.
- **Design token** — a named value (`surface`, `accent`, `spacing.l`) instead of a raw hex/number — the whole point of `src/theme/tokens.ts`.
- **Supabase** — hosted Postgres + auth + realtime + storage behind one API; our entire backend.
- **Postgres** — the SQL database under Supabase.
- **Migration** — a versioned SQL file that changes the database schema; the DB is code-reviewed like code.
- **RLS (Row Level Security)** — Postgres rules deciding _which rows each user may see/change_. Our security model; every table gets it.
- **AsyncStorage** — tiny on-device key-value store (we persist the theme choice there).
- **ESLint / Prettier** — linter / formatter (your `flake8` / `black`).
- **Husky / lint-staged / commitlint** — git hooks: auto-format staged files, enforce commit-message format.
- **CI (GitHub Actions)** — the checks (lint, prettier, typecheck) that run on every PR; red = no merge.
- **Conventional Commits** — the `type(scope): message` commit format; later it auto-generates changelogs.
- **BGG** — [BoardGameGeek](https://boardgamegeek.com/); its public XML API feeds our game catalog in Phase 8.

---

Questions → Teo, or open an issue. Tick your progress in `gamenight-roadmap.html` (your tasks wear a **D** chip). See you in the PRs. 🎲
