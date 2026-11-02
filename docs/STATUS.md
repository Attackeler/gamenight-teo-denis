# Where we are

> **Last checked: 2026-11-02**, against GitHub (`Attackeler/gamenight-teo-denis`) and every branch. Update this page in the weekly sync — it should take two minutes.

## In one sentence

The foundations are done and merged. The design system (Phase 2) is half built but **not merged**, and nothing has been pushed since July. The next job is to get everything that sits on Teo's machine onto GitHub, so all three of us start from the same place.

## The picture

```text
Phase 0  Foundations           ██████████  done   (merged, PRs #1–#2)
Phase 1  DevOps                █████████░  done   (merged, PRs #3–#9) — 5 small leftovers
Phase 2  Design system         ████░░░░░░  in progress — branch pushed, components not committed
Phase 3  Database schema       ░░░░░░░░░░  not started
Phase 4  Login  → v0.1.0       ░░░░░░░░░░  not started
```

## What's where

| Place                                                                                                | What's in it                                                                                                            | State                                                     |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `main` (GitHub)                                                                                      | Expo app skeleton, local Supabase, CI (lint + prettier + typecheck), Husky + commitlint, Makefile, issue + PR templates | ✅ last merge 2026-07-06 (PR #9). **Protected.**          |
| `feat/phase-2-design-system` (GitHub)                                                                | Design tokens (light + dark), Inter fonts, `ThemeProvider` (system / light / dark), theme choice saved in AsyncStorage  | 🔨 pushed 2026-07-07, **no PR yet**                       |
| Teo's machine only                                                                                   | `src/components/AppText.tsx`, `Button.tsx`, `Card.tsx` + an edit to `app/index.tsx`                                     | ⚠️ **uncommitted** — exists nowhere else                  |
| `docs/team-roadmap` (Teo's machine, from `team-roadmap.bundle`)                                      | The three-person plan (2026-10-15) + this equal-split rework (2026-11-02)                                               | ⚠️ **not pushed yet** — this is the branch you're reading |
| `docs/two-person-roadmap` (GitHub)                                                                   | Old Teo + Dragos plan (2026-07)                                                                                         | 🗑️ replaced by `docs/team-roadmap` — never merge it       |
| `chore/phase-0.7-devops`, `chore/scaffold-expo-app`, `chore/toolchain`, `docs/solo-roadmap` (GitHub) | Old branches                                                                                                            | 🗑️ already merged — safe to delete                        |

There are **no open PRs, no issues, no tags, no tests, and no database tables** yet (`supabase/migrations/` is empty).

## Known problems (each one is a task in [`TASKS.md`](./TASKS.md))

| Problem                                                                                                                          | Task owner                                       |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| The components and the docs only exist on Teo's machine                                                                          | Teo                                              |
| `.husky/pre-commit` rewrites `.husky/commit-msg` every time and never runs lint-staged (`.lintstagedrc.ts` is unused)            | Teo                                              |
| `ThemeProvider`: on first launch storage is empty, so the mode becomes `null` (not "system"); the toggle only flips light ↔ dark | Teo                                              |
| `docs/scripts/__pycache__/*.pyc` is committed to git                                                                             | Dragos                                           |
| Stray `supabase/snippets/Untitled query 554.sql`                                                                                 | Dragos                                           |
| `npm run format` calls `prettier:fix` as a command (broken); `npm run reset-project` points at a deleted folder                  | Marcian                                          |
| The repo requires **Node 26.4** (`engine-strict`) — Teo's machine has v24.15, so `npm install` refuses to run                    | Everyone: follow [`SETUP.md`](./SETUP.md) step 2 |

## The next three things (in order)

1. **Teo:** commit + push the components, and push this docs branch and open its PR → everything lives on GitHub.
2. **Everyone:** set up your machine with [`SETUP.md`](./SETUP.md) (Dragos and Marcian on a call with Teo).
3. **Everyone:** start your column of **Step 0** in [`TASKS.md`](./TASKS.md).
