# Where we are

> **Last checked: 2026-11-04**, against GitHub (`Attackeler/gamenight-teo-denis`) and every branch. Update this page in the weekly sync — it should take two minutes.

## In one sentence

The foundations are done and merged, and so is the first half of the design system (Phase 2): tokens, fonts, the theme provider and the component drafts are all on `main`, on Expo SDK 58. The next job is to get Dragos and Marcian set up, so all three of us start from the same place.

## The picture

```text
Phase 0  Foundations           ██████████  done   (merged, PRs #1–#2)
Phase 1  DevOps                █████████░  done   (merged, PRs #3–#9, #11, #13, #15) — small leftovers
Phase 2  Design system         █████░░░░░  in progress — tokens, theme, drafts merged (PR #12); fixes + components next
Phase 3  Database schema       ░░░░░░░░░░  not started
Phase 4  Login  → v0.1.0       ░░░░░░░░░░  not started
```

## What's where

| Place                                                                                                                                                                                                                                                                       | What's in it                                                                                                                                                                                                                                       | State                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `main` (GitHub)                                                                                                                                                                                                                                                             | Expo SDK 58 app, local Supabase, CI (lint + prettier + typecheck), Husky + commitlint, Makefile, issue + PR templates, these docs, design tokens + Inter fonts + `ThemeProvider` + drafts of `AppText`, `Button`, `Card`, weekly Expo update check | ✅ last merge 2026-11-04 (PRs #10–#16). **Protected:** PR + 1 approving review + the `check-run` CI check |
| `fix/phase-1-pre-commit-hook` (GitHub)                                                                                                                                                                                                                                      | A start on the pre-commit hook fix (`a21e2e3`, 2026-11-02)                                                                                                                                                                                         | 🔨 pushed, **no PR yet** — task 0.T4                                                                      |
| `docs/two-person-roadmap` (GitHub)                                                                                                                                                                                                                                          | Old Teo + Dragos plan (2026-07)                                                                                                                                                                                                                    | 🗑️ replaced by the team roadmap — never merge it                                                          |
| `chore/cross-platform-line-endings`, `chore/phase-0.7-devops`, `chore/scaffold-expo-app`, `chore/toolchain`, `chore/upgrade-expo-sdk-58`, `ci/expo-auto-update`, `docs/solo-roadmap`, `docs/team-roadmap`, `feat/phase-2-design-system`, `fix/ci-pin-node-version` (GitHub) | Old branches                                                                                                                                                                                                                                       | 🗑️ already merged — safe to delete                                                                        |

There are **no issues, no tags, no tests, and no database tables** yet (`supabase/migrations/` is empty).

**Expo updates:** every Monday the `Expo update` workflow checks for a new Expo release and opens a PR (`chore/expo-auto-update`) when there is one. Review it like any other PR; a new SDK (first number changes) can need code changes, so try it on a phone first.

## Known problems (each one is a task in [`TASKS.md`](./TASKS.md))

| Problem                                                                                                                          | Task owner |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `.husky/pre-commit` rewrites `.husky/commit-msg` every time and never runs lint-staged (`.lintstagedrc.ts` is unused)            | Teo        |
| `ThemeProvider`: on first launch storage is empty, so the mode becomes `null` (not "system"); the toggle only flips light ↔ dark | Teo        |
| `docs/scripts/__pycache__/*.pyc` is committed to git                                                                             | Dragos     |
| Stray `supabase/snippets/Untitled query 554.sql`                                                                                 | Dragos     |
| `npm run format` calls `prettier:fix` as a command (broken); `npm run reset-project` points at a deleted folder                  | Marcian    |

## The next three things (in order)

1. **Teo:** add Dragos and Marcian as collaborators (GitHub → Settings → Collaborators).
2. **Everyone:** set up your machine with [`SETUP.md`](./SETUP.md) (Dragos and Marcian on a call with Teo).
3. **Everyone:** start your column of **Step 0** in [`TASKS.md`](./TASKS.md).
