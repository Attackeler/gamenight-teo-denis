# The playbook

**How we do every kind of task in this repo, written by whoever did it first.**

The project goal is that anyone on the team can do any kind of task — if one person did it once, the other two can do it again without asking. This folder is how that happens. Background: [`ROADMAP.md` → The goal everything else serves](../ROADMAP.md#the-goal-everything-else-serves).

---

## The rules

1. **First of its kind → write the recipe.** The first time anyone does a new _kind_ of task (first base component, first migration, first trigger, first E2E test…), the same PR adds a recipe here. The PR isn't done without it; reviewers check.
2. **Has a recipe → follow it, then fix it.** When you do a task that already has a recipe, use the recipe first and ask people second. Wherever the recipe wasn't enough (a missing step, a command that didn't work on your machine, a word you didn't know), **fix the recipe in the same PR** and add a line to its changelog.
3. **The recipe is being tested, not you.** A replica that needed help means the recipe needs work. That's a good outcome — it's how the recipe gets good.
4. **One-off setup work** (the Supabase client, Jest setup, the dev build) gets a short **"how it works"** note here instead of a full recipe: what it is, where it lives, how to change it safely.
5. **Recipes are about the kind of task, not the specific code.** "How to add a table" — not "the parties table". The specific PR is the worked example you link to.

## How to write a good recipe

Copy [`_TEMPLATE.md`](./_TEMPLATE.md) to `docs/playbook/<kind-of-task>.md`. Then:

- Write it **while the work is fresh** — in the same PR, not weeks later from memory.
- **Numbered steps.** Every command copy-pasteable, every file path exact.
- Say **how to check it worked** — what you should see in the terminal, the app, or GitHub.
- Assume the reader is **Marcian two months in**: knows the basics, has never done _this_ before. If a step needs a concept, link the doc that explains it.
- Link your PR as the worked example.
- Keep it short. If a recipe passes ~150 lines, it's probably two recipes.

---

## Recipe index

Status: ✅ written · ⏳ due in that phase · Replicated by: who has done it from the recipe (update it when you replicate).

| Recipe                                | Kind of work                                 | Written by · phase | Status | Replicated by |
| ------------------------------------- | -------------------------------------------- | ------------------ | ------ | ------------- |
| [`git-pr-flow.md`](./git-pr-flow.md)  | Branch → commit → PR → review → merge        | written with v4    | ✅     | —             |
| `local-env.md`                        | Run & fix the local dev environment          | Teo · Phase O      | ⏳     | —             |
| `base-component.md`                   | Base component                               | Teo · Phase 2      | ⏳     | —             |
| `new-screen.md`                       | New screen / route                           | Dragos · Phase 2   | ⏳     | —             |
| `db-table.md`                         | Table + migration + RLS (also: add a column) | Teo · Phase 3      | ⏳     | —             |
| `db-types.md`                         | Regenerate TypeScript types                  | Dragos · Phase 3   | ⏳     | —             |
| `supabase-client.md` _(how it works)_ | How the app talks to Supabase                | Teo · Phase 3      | ⏳     | —             |
| `form.md`                             | Form that saves data (React Hook Form + Zod) | Dragos · Phase 4   | ⏳     | —             |
| `db-trigger.md`                       | Database trigger                             | Teo · Phase 4      | ⏳     | —             |
| `db-test.md`                          | Database test (prove a rule)                 | Teo · Phase 5      | ⏳     | —             |
| `load-data.md`                        | Load & show data (TanStack Query)            | Teo · Phase 5      | ⏳     | —             |
| `unit-test.md`                        | Pure function + unit test (Jest)             | Teo · Phase 6      | ⏳     | —             |
| `seed-data.md`                        | Seed data with known answers                 | Teo · Phase 7      | ⏳     | —             |
| `sql-view.md`                         | SQL view / RPC                               | Dragos · Phase 7   | ⏳     | —             |
| `bgg-import.md`                       | BGG import (Python)                          | Dragos · Phase 8   | ⏳     | —             |
| `external-api.md`                     | External API + caching                       | Teo · Phase 8      | ⏳     | —             |
| `ui-states.md`                        | Loading / empty / error states               | Dragos · Phase 9   | ⏳     | —             |
| `e2e-flow.md`                         | E2E flow (Maestro)                           | Teo · Phase 9      | ⏳     | —             |
| `release.md`                          | Build & release                              | Teo · Phase 9      | ⏳     | —             |
| `realtime.md`                         | Realtime subscription                        | Teo · Phase 11     | ⏳     | —             |
| `edge-function.md`                    | Edge Function                                | Dragos · Phase 12  | ⏳     | —             |
| `ci-workflow.md`                      | CI workflow                                  | Teo + Marcian · 13 | ⏳     | —             |

When you write one: create the file, link it in the first column, flip the status to ✅. When you replicate one: add your name and PR number in the last column, and tick your cell in the tracker's skills matrix.
