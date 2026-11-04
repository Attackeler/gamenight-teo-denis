# Gamenight 🎲

A free **mobile + web app** for friend groups to track board-game-night scores and win rates: create a _party_ with a fixed player roster, run _game nights_, record per-game scores, and settle who's actually the best at Catan.

A learn-by-doing project by **Teo**, **Dragos**, and **Marcian**. One codebase (Expo / React Native + web), one free-tier backend (Supabase), total cost **$0**.

## Start here (in this order)

1. **[`docs/STATUS.md`](./docs/STATUS.md)** — where the project is right now (2 minutes).
2. **[`docs/SETUP.md`](./docs/SETUP.md)** — get the app running on your machine (1–2 hours, once).
3. **[`docs/TASKS.md`](./docs/TASKS.md)** — your tasks, split equally, in baby steps.

Then, as needed: [`docs/playbook/git-pr-flow.md`](./docs/playbook/git-pr-flow.md) (how to get a change into `main`) · [`docs/ONBOARDING.md`](./docs/ONBOARDING.md) (learning paths) · [`docs/ROADMAP.md`](./docs/ROADMAP.md) (the full plan and the why) · [`docs/README.md`](./docs/README.md) (everything else).

## Quick start (if you've done this before)

```bash
# Needs: Node 26.4.0 + npm 11.17.0 (enforced), Docker Desktop running, git
git clone https://github.com/Attackeler/gamenight-teo-denis.git
cd gamenight-teo-denis
npm install                  # also installs the git hooks
npx supabase start           # local database (Docker)
cp .env.example .env.local   # fill in the URL + key from: npx supabase status
npx expo start               # scan the QR with Expo Go, or press "w" for web
```

| Command               | What it does                                                |
| --------------------- | ----------------------------------------------------------- |
| `make check-files`    | Lint + Prettier check + TypeScript check (CI runs the same) |
| `make start-app`      | Start Supabase + Expo (tunnel mode)                         |
| `make supabase-start` | Start local Supabase + reset the database to the migrations |
| `make supabase-stop`  | Stop the local backend                                      |

## How we work, in five lines

1. Never commit to `main`. One task → one branch → one PR.
2. Someone who didn't write it reviews it; CI must be green.
3. Commit messages look like `type(scope): lower-case summary` (commitlint checks them).
4. The first time anyone does a new kind of task, they write a **recipe** in [`docs/playbook/`](./docs/playbook/README.md); the others repeat it from the recipe.
5. Push at the end of every session — unpushed work doesn't exist.

## Stack

**Expo SDK 58** (React Native + Expo Router — iOS, Android, web) · **TypeScript** · **Supabase** (Postgres, auth, realtime) · **GitHub Actions** CI · **Docker** (local backend only).
