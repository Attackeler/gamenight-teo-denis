# Recipe: <kind of task, e.g. "Add a base component">

> **Written by:** <name> · **Worked example:** <link to the PR> · **Replicated by:** <name — PR link> · <name — PR link>

**Use this when:** <one sentence — the situation this recipe is for, and when it is _not_ the right recipe>.

**Takes about:** <rough time for someone doing it the first time from this recipe>.

---

## Before you start

- **You should already know:** <concepts, with links to the docs that explain them>.
- **Have running:** <e.g. `npx supabase start`, `npx expo start`>.
- **Start a branch** (see [`git-pr-flow.md`](./git-pr-flow.md)):

    ```bash
    git switch main && git pull
    git switch -c <type>/<phase>-<short-name>
    ```

## Steps

1. <Step. Exact file path. Exact command in a code block if there is one.>
2. <Step.>
3. <Step.>

## Check it worked

- <What you should see in the terminal / app / GitHub.>
- Run the same checks CI runs:

    ```bash
    make check-files
    ```

## Gotchas

<!-- Replicators: add what tripped you up here, one bullet each. -->

- <Mistake people make and how to spot or fix it.>

## Changelog

<!-- One line per fix: date — who — what was unclear and what changed. -->

- <YYYY-MM-DD> — <name> — first version.
