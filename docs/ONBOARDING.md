# Gamenight — Onboarding (Dragos and Marcian, start here)

Welcome to the team. This guide takes you from where you are today to shipping reviewed code in this repo. This guide is about **learning**; your actual tasks (split equally, in baby steps) are in [`TASKS.md`](./TASKS.md), and you work on both in parallel. There are two learning paths — **Dragos** (coming from some Python) and **Marcian** (starting from zero) — and everything else is shared.

**The deal:** the project has one goal above shipping fast — **anyone on the team can do any kind of task in this repo.** If Teo builds something, you two can build the next one like it, from a written recipe, without asking. That's why you'll replicate tasks, review code you don't fully understand yet, and explain other people's work back to them. You are not "the juniors who do the small stuff"; you're engineers who happen to be earlier on the curve, on a team built so the curve flattens fast.

**House rules for learning:**

- **Type every example out.** Never paste code you don't understand.
- **Blocked longer than ~30 min after honestly trying?** Write down what you tried, then ask in the team chat. Asking with notes is a skill, not a weakness.
- **"I don't understand this"** is a valid PR review comment — from you _and_ to you.
- **AI is your tutor, not your author.** Ask it to explain an error, quiz you, or review code _you_ wrote. Don't commit code it wrote that you can't explain line by line — in a teach-back, you'll be asked to.
- **Small and often beats long and rare.** Four sessions of 2 hours teach more than one of 8.

---

## 1. What you're building

A free mobile + web app for friend groups to track board-game-night scores and win rates: create a _party_ with a fixed player roster, run _game nights_, record per-game scores, see who's actually the best at Catan. Product spec: [`DESIGN.md`](./DESIGN.md) · visual mockups: `gamenight-mockups.html` (double-click, opens in your browser) · plan: [`ROADMAP.md`](./ROADMAP.md) · progress tracker: `gamenight-roadmap.html`.

**Stack in one line:** TypeScript everywhere · **Expo / React Native** (one codebase → iOS + Android + web) · **Supabase** (Postgres database, auth, realtime — the whole backend) · GitHub (code, issues, CI). Everything runs free.

---

## 2. Set up your machine

Follow **[`SETUP.md`](./SETUP.md)** top to bottom. Marcian and Dragos: do it on a call with Teo. It takes 1–2 hours.

**Done when:** the app renders on your phone **and** in the browser, and `make check-files` passes. Every problem you hit, with its fix, goes into the local-environment recipe (`docs/playbook/local-env.md`), which is your task 0.D2 / 0.M2 in [`TASKS.md`](./TASKS.md).

---

## 3A. Dragos's learning path (~3 weeks at ~15 h/week)

Deliberately narrow: just enough JS → TS → React → React Native for Phases 2–4. SQL comes later, attached to Phase 3. Don't binge tutorials — hit the checkpoint, move on.

### Week 1 — JavaScript (from Python) + git

The concepts transfer; mostly the spelling changes:

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

- **JS crash course, Python-aware:** [MDN — JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — skim the obvious, slow down at arrow functions, destructuring (`const { theme } = props`), spread (`...`), array methods (`map` / `filter` / `find`), objects.
- **Deeper reference when confused:** [javascript.info](https://javascript.info/) chapters 1–5.
- **Async:** [MDN — Promises and async/await](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) — you know the idea from Python; learn the Promise spelling.
- **Git the team way:** follow the [git recipe](./playbook/git-pr-flow.md) for your practice PR.

> **Checkpoint:** write a function that takes an array of `{ name, score }` objects and returns the top scorer, using `filter` / `map` / `sort` or `reduce` — without looking up syntax. **Practice PR**, following the git recipe: remove the stray `supabase/snippets/Untitled query 554.sql` and git-ignore `supabase/snippets/` (commit `chore(db): remove stray sql snippet`). Teo reviews; Marcian shadow-reviews.

### Week 2 — TypeScript + React

- **TS for people who know some typing:** [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) → [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Think "mypy, but load-bearing".
- **React, the official way:** [react.dev Quick Start](https://react.dev/learn) → [Thinking in React](https://react.dev/learn/thinking-in-react) → [useState](https://react.dev/reference/react/useState) → [passing data deeply with context](https://react.dev/learn/passing-data-deeply-with-context). React is the biggest new idea in the stack — give it the most hours this week.

> **Checkpoint:** open `src/theme/ThemeProvider.tsx` and explain it to Teo line by line: the context, the state, how `system` mode resolves against the device scheme, how AsyncStorage persists the choice — and what happens on first launch when storage is empty.

### Week 3 — React Native + Expo Router, then your first real PR

- **RN in one sitting:** [React Native — core components](https://reactnative.dev/docs/intro-react-native-components) — `View` / `Text` / `Pressable` / `StyleSheet` instead of HTML/CSS.
- **Expo & routing:** [Expo tutorial](https://docs.expo.dev/tutorial/introduction/) (skim; our app already exists) · [Expo Router](https://docs.expo.dev/router/introduction/) — files in `app/` become screens.
- **Read our actual code:** `app/_layout.tsx`, `app/index.tsx`, everything in `src/theme/` and `src/components/`.

> **Checkpoint:** you know how a file in `app/` becomes a screen and what `_layout.tsx` does. **First real PR (Phase 2):** build `Input` from the **base-component recipe** Teo writes (`docs/playbook/base-component.md`) — `DESIGN.md` §5: `surfaceAlt` background, radius 12, height 48, `accent` focus ring, tokens only. Where the recipe wasn't enough, fix it in the same PR.

**Later (before your Phase 3 tasks):** [SQLBolt](https://sqlbolt.com/) lessons 1–12, then [Supabase: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security). Budget ~4 h.

---

## 3B. Marcian's learning path (~8–10 weeks at 5–10 h/week)

You're learning programming itself, not just this stack — so this path is longer and gentler, and **that's planned for**. You get the same number of tasks as everyone else ([`TASKS.md`](./TASKS.md)), but they're sized as baby steps, and your first code task (`Avatar`, task 1.M1) is **paired with Teo**. So you start contributing long before this path is finished. Your practice PR (task 0.M3) comes in week 1–2: follow the git recipe step by step on a call, and the Learn Git Branching levels below will make it click afterwards.

**How to study:** one main resource at a time, hands on the keyboard. When something doesn't click, read the same topic in a second place ([javascript.info](https://javascript.info/) is great for that), then ask. Keep a notes file of things that confused you — it becomes great questions for the weekly sync.

### Week 1 — setup + the terminal

- **Setup** (section 2 above) on a call with Teo.
- **Terminal basics:** [The Odin Project — Command line basics](https://www.theodinproject.com/lessons/foundations-command-line-basics). You need: `cd`, `ls`, `pwd`, `mkdir`, how to open a folder in VS Code, and how to stop a running command (`Ctrl+C`).

### Weeks 1–4 — programming basics, in JavaScript

- **Main course (interactive, in the browser):** [freeCodeCamp](https://www.freecodecamp.org/learn) → the JavaScript curriculum. Work through variables, strings, numbers, `if` / `else`, functions, arrays, objects, and loops. Skip anything about the browser DOM for now.
- **Read along:** [MDN — JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting).
- **Run your own code:** make a scratch file `play.js` outside the repo and run it with `node play.js`.

> **Checkpoint (week 2):** without help, write a function that returns the bigger of two numbers, and one that returns `"even"` or `"odd"`. Explain each line out loud.
>
> **Checkpoint (week 4):** write a function that takes an array of `{ name, score }` objects and returns the winner's name. Explain it line by line to Dragos.

### Weeks 4–5 — git and your first PR

- **Learn Git Branching:** [learngitbranching.js.org](https://learngitbranching.js.org/) — the "Introduction Sequence" and "Push & Pull — Git Remotes!" levels. It's a game; it's the best way to _see_ branches.
- **The team way:** read the [git recipe](./playbook/git-pr-flow.md) top to bottom.

> **Checkpoint:** open your next small PR **on your own**, without a call. That's task 0.M4 (fix two npm scripts) in `TASKS.md`. Dragos reviews. If any step of the git recipe confused you, fix the recipe in the same PR. 🎉
>
> **From now on:** shadow-review one PR a week — read it, and leave at least one question in the thread.

### Weeks 5–6 — React

- **A small dose of TypeScript:** [TypeScript for the new programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) — just enough to read `name: string` and know it's a promise about what goes in.
- **React:** [react.dev Quick Start](https://react.dev/learn), then build the [Tic-Tac-Toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe) yourself (typed out, not pasted). It teaches components, props, and state — the three ideas everything in our app is made of.

### Weeks 7–8 — React Native + our code

- **React Native:** [core components](https://reactnative.dev/docs/intro-react-native-components) — `View` is a box, `Text` is text, `Pressable` is anything you can tap.
- **Expo:** the first chapters of the [Expo tutorial](https://docs.expo.dev/tutorial/introduction/) — enough to change something and see it on your phone.
- **Read our code** with Dragos or Teo on a call: `app/index.tsx` → `app/_layout.tsx` → `src/theme/` → `src/components/`.

> **Checkpoint:** trace one color from `src/theme/tokens.ts` all the way to the screen — which file defines it, which passes it along, which component uses it — and explain it to Dragos.
>
> **By now you've built `Avatar` and `Chip`** (tasks 1.M1 and 1.M2). Re-read your own `Avatar` code and explain every line to Dragos. If you can't explain a line yet, that's the next thing to learn.

**Later (before your Phase 3 task):** [SQLBolt](https://sqlbolt.com/) lessons 1–6.

---

## 4. The playbook and the replication system

Everything you'll build has (or will get) a **recipe** in [`docs/playbook/`](./playbook/README.md), written by whoever did that kind of task first. Your tasks marked **🔁** in the roadmap are **replicas**: do them from the recipe first, ask people second, and fix the recipe wherever it wasn't enough. The tracker's **skills matrix** shows who can do what — **U** understand · **R** replicated · **O** own it. Watching your row fill up is the point.

---

## 5. Repo tour

| Path              | What it is                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------- |
| `app/`            | Screens. File-based routing: `app/index.tsx` is the home screen; `_layout.tsx` wraps them all |
| `src/theme/`      | Design system: `tokens.ts` (colors/type/spacing from DESIGN.md) + `ThemeProvider.tsx`         |
| `src/components/` | Reusable base components (`Button`, `Card`, …) — build screens out of these, never raw styles |
| `supabase/`       | Backend config + (from Phase 3) `migrations/` — versioned SQL that defines the database       |
| `docs/`           | Spec, roadmap, tracker, mockups, this guide, import scripts                                   |
| `docs/playbook/`  | **Recipes** — how to do each kind of task, written by the team                                |
| `app-example/`    | Expo's demo code kept for reference — not part of the app; safe to peek, don't import from it |
| `.github/`        | CI workflow (lint + prettier + typecheck on every PR) and issue/PR templates                  |
| `.husky/`         | Git hooks: checks before each commit; commit-msg enforces Conventional Commits                |
| `package.json`    | Dependencies + the `npm run …` scripts; `Makefile` wraps the common combos                    |
| `.env.local`      | Your machine-only secrets (Supabase URL/key). Never committed; template is `.env.example`     |

---

## 6. How we work (the contract)

Full version: `ROADMAP.md` → **Team workflow**. The short form:

1. **Never commit to `main`.** Branch per task: `feat/phase-4-login-screen`, `fix/...`, `docs/...`, `chore/...`.
2. **Commit messages are checked** by commitlint: `type(scope): lower-case summary` — e.g. `feat(ui): add themed input component`. The roadmap hands you ready-made messages for most tasks.
3. **Small commits** (≈ one roadmap checkbox), **push every session** — unpushed work doesn't exist.
4. **Every PR is reviewed by someone who didn't write it.** Teo's PRs → Dragos reviews; Dragos's → Teo; Marcian's → Dragos first, then Teo. Marcian shadow-reviews too. Don't approve until you could explain the diff.
5. **First of its kind → write the recipe. Has a recipe → follow it, then fix it.**
6. **Weekly sync, ~45 min:** demo what shipped · due teach-backs · skills matrix · split next week's tasks.
7. **Stuck or found a bug?** GitHub issue, even a one-liner. Nothing lives only in someone's head.
8. **The hooks will nag you** — formatting, lint, commit format, and CI re-checks everything. That's the guardrail, not a punishment; you can't break `main` by accident.

---

## 7. Glossary (the words that will fly around)

- **Expo** — toolchain around React Native: run the app on your phone via Expo Go, build for stores, deploy web.
- **React Native (RN)** — React, but rendering native iOS/Android components instead of HTML.
- **Expo Router** — file-based navigation: a file in `app/` = a screen with a URL.
- **Component** — a function returning UI (JSX). Screens are components made of smaller components.
- **Props / state / hooks** — inputs to a component / its memory / the `useXxx` functions that manage both.
- **Context** — React's way to share a value (like the current theme) with a whole subtree without passing it through every level.
- **Design token** — a named value (`surface`, `accent`, `spacing.l`) instead of a raw hex/number — the whole point of `src/theme/tokens.ts`.
- **Supabase** — hosted Postgres + auth + realtime + storage behind one API; our entire backend.
- **Postgres** — the SQL database under Supabase.
- **Migration** — a versioned SQL file that changes the database schema; the database is code-reviewed like code.
- **RLS (Row Level Security)** — Postgres rules deciding _which rows each user may see or change_. Every table gets it.
- **Trigger** — code that runs inside the database automatically when rows change (e.g. lock a roster).
- **AsyncStorage** — tiny on-device key-value store (we persist the theme choice there).
- **ESLint / Prettier** — linter / formatter.
- **Husky / commitlint** — git hooks: checks before each commit; enforce commit-message format.
- **CI (GitHub Actions)** — the checks that run on every PR; red = no merge.
- **Conventional Commits** — the `type(scope): message` commit format; later it auto-generates changelogs.
- **Recipe** — a how-to in `docs/playbook/` for one kind of task, written by whoever did it first.
- **Replica (🔁)** — a task done from a recipe, to prove the recipe works and spread the skill.
- **Teach-back (🧠)** — explaining someone else's work, out loud, to the team.
- **Skills matrix** — the tracker grid of who can do which kind of task (U / R / O).
- **BGG** — [BoardGameGeek](https://boardgamegeek.com/); its public XML API feeds our game catalog in Phase 8.

---

Questions → the team chat, or open an issue. Tick your progress in `gamenight-roadmap.html` (click your name for your own view). See you in the PRs. 🎲
