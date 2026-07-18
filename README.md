# Gamenight 🎲

A free **mobile + web app** for friend groups to track board-game-night scores and win rates: create a _party_ with a fixed player roster, run _game nights_, record per-game scores, and settle who's actually the best at Catan.

A learn-by-doing project by **Teo** and **Dragos**. One codebase (Expo / React Native + web), one free-tier backend (Supabase), total cost **$0**.

## Status

Pre-`v0.1.0`. Design system in progress (`feat/phase-2-design-system`); real database schema and auth are next. The living plan is [`docs/ROADMAP.md`](./docs/ROADMAP.md), tracked day-to-day in `docs/gamenight-roadmap.html`.

## Stack

**Expo SDK 54** (React Native + Expo Router, runs on iOS, Android, and web) · **TypeScript** · **Supabase** (Postgres, auth, realtime) · **GitHub Actions** CI · **Docker** (local backend only).

## Getting started

New to the project (or to the stack)? The full walkthrough — including a Python-to-TypeScript on-ramp — is [`docs/ONBOARDING.md`](./docs/ONBOARDING.md). The short version:

```bash
# Requirements: Node 26.4 + npm 11 (enforced), Docker, git
git clone https://github.com/Attackeler/gamenight-teo-denis.git
cd gamenight-teo-denis
npm install               # also installs git hooks

npx supabase start        # local backend (Docker)
cp .env.example .env.local   # then fill values from: npx supabase status

npx expo start            # scan QR with Expo Go, or press "w" for web
```

Common tasks are wrapped in the `Makefile`:

| Command               | What it does                                                |
| --------------------- | ----------------------------------------------------------- |
| `make install`        | `npm install`                                               |
| `make start-app`      | Start Supabase + Expo (tunnel mode)                         |
| `make check-files`    | Lint + Prettier check + TypeScript check (CI runs the same) |
| `make supabase-start` | Start local Supabase + reset DB to migrations               |
| `make supabase-stop`  | Stop the local backend                                      |

## How we work

Branch per task → PR → **the other person reviews** (no self-merges) → squash of small [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (enforced by commitlint). CI checks lint, formatting, and types on every PR. Details: [`docs/ROADMAP.md` → Two-person workflow](./docs/ROADMAP.md).

## Docs

Everything lives in [`docs/`](./docs/README.md): design spec, roadmap + clickable tracker, onboarding, editor setup, mockups, and the Phase 8 import scripts.
