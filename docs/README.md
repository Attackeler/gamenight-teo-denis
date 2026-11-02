# Gamenight — docs

A free **mobile + web app** for friend groups to track board-game-night scores and win rates, built by a team of three. The shared goal: **anyone on the team can do any kind of task in this repo.** If one of us did it once, the others can do it again from the recipe.

## The team

| Who     | Time         | Starting point                       | Favorite board game |
| ------- | ------------ | ------------------------------------ | ------------------- |
| Teo     | ~40 h/week   | Started the project, knows the stack | —                   |
| Dragos  | ~15 h/week   | Coming from Python; new to JS/React  | —                   |
| Marcian | ~5–10 h/week | Learning programming from zero       | —                   |

**Work is split equally:** the same number of tasks per person in every step. Teo's extra hours go to reviews and pairing. See [`TASKS.md`](./TASKS.md).

_Fill in your favorite game: that's Marcian's practice PR (task 0.M3)._

---

## Read these, in this order

| #   | File                                                   | What it answers                                                |
| --- | ------------------------------------------------------ | -------------------------------------------------------------- |
| 1   | [`STATUS.md`](./STATUS.md)                             | Where are we right now? What's on which branch? What's broken? |
| 2   | [`SETUP.md`](./SETUP.md)                               | How do I get the app running on my machine?                    |
| 3   | [`TASKS.md`](./TASKS.md)                               | What's my next task, and what are its baby steps?              |
| 4   | [`playbook/git-pr-flow.md`](./playbook/git-pr-flow.md) | How do I get a change into `main`?                             |
| 5   | [`ONBOARDING.md`](./ONBOARDING.md)                     | What should I learn, and in what order? (Dragos and Marcian)   |

## Reference (open when you need it)

- **[`ROADMAP.md`](./ROADMAP.md)**: the full plan. **What** we build in each phase and **why**, learning links, gotchas. Who does what lives in `TASKS.md`.
- **`gamenight-roadmap.html`**: the clickable tracker. Double-click it to open it in your browser, then click your name to see only your tasks. Ticks save in that browser; use **Export / Import** to move them to another computer. The task list itself lives in `gamenight-roadmap-data.js`.
- **[`playbook/`](./playbook/README.md)**: the recipes, i.e. how to do each kind of task.
- **[`DESIGN.md`](./DESIGN.md)**: the design spec (colors, type, components, screens).
- **[`EXTENSIONS.md`](./EXTENSIONS.md)**: recommended VS Code extensions.
- **`gamenight-mockups.html`** / **`gamenight-web.html`**: visual mockups.
- **[`scripts/`](./scripts/README.md)**: SQL schema + BoardGameGeek import (used in Phase 8).

## Keeping the docs true

- **Who does what changes** → edit `TASKS.md` **and** `gamenight-roadmap-data.js` in the same PR.
- **What we build or why changes** → edit `ROADMAP.md`.
- **Every weekly sync** → update `STATUS.md` (it takes two minutes).

## Milestones

`v0.1.0` login → `v0.2.0` parties + scoring → `v0.3.0` stats + catalog → `v1.0.0` polished release → then friends, chat, push, CI/CD (`v1.1.0`–`v1.4.0`).

## Project history

Started as a Teo + Denis project (v1 roadmap), went solo when Denis left (v2), was replanned for Teo + Dragos in 2026-07 (v3, never merged; the project paused mid-July to mid-October), and became a team of three when **Marcian joined in 2026-10** (v4). **v5 (2026-11-02)** split the work equally and added `STATUS.md`, `SETUP.md` and `TASKS.md`. Older versions are in git history.
