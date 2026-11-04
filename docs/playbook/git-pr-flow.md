# Recipe: From a branch to a merged PR

> **Written by:** Teo (with the v4 roadmap) · **Worked example:** [PR #9 — remove dummy migrations](https://github.com/Attackeler/gamenight-teo-denis/pull/9) · **Replicated by:** —

**Use this when:** you're about to change anything in the repo — code, docs, config. Every change goes through this flow; nobody commits to `main` directly (branch protection blocks it anyway).

**Takes about:** 15 minutes the first time, on top of the change itself. Two minutes once it's habit.

---

## Before you start

- **You should already know:** what a commit, a branch, and a remote are. If not: do the "Introduction Sequence" and "Push & Pull — Git Remotes!" levels of [Learn Git Branching](https://learngitbranching.js.org/) first (~2 h, it's a game).
- **Have:** the repo cloned, `npm install` done (that installs the git hooks), and your GitHub account added as a collaborator.
- **On Windows:** run these commands in **Git Bash** (comes with [Git for Windows](https://git-scm.com/downloads)) or the VS Code terminal set to Git Bash.

## Steps

1. **Start from the latest `main`.**

    ```bash
    git switch main
    git pull
    ```

2. **Create a branch for this one task.** Name it `type/phase-N-short-name` — the type is the same as in your commit message (`feat`, `fix`, `docs`, `chore`, `test`, `ci`, `refactor`).

    ```bash
    git switch -c docs/phase-o-favorite-game
    ```

3. **Make your change.** Save the files. Then run the same checks CI will run:

    ```bash
    make check-files
    ```

    Red? Fix it before committing. `npm run prettier:fix` fixes formatting for you.

4. **See what changed, then stage and commit.**

    ```bash
    git status                      # which files changed
    git diff                        # what changed inside them
    git add docs/README.md          # stage the files that belong to this task
    git commit -m "docs: add my favorite game to the team table"
    ```

    The message format is checked by commitlint: `type(optional-scope): lower-case summary`. Allowed types: `feat` `fix` `docs` `chore` `refactor` `test` `ci` `style` `perf` `revert`. The roadmap gives you a ready-made message for most tasks.

5. **Push the branch to GitHub.** The first push needs `-u` to link your branch to the remote one; after that, plain `git push`.

    ```bash
    git push -u origin docs/phase-o-favorite-game
    ```

6. **Open the pull request.** Git prints a link after the push — open it, or go to the repo on GitHub and click **Compare & pull request**. Fill in the template (what changed, why, recipe used or written). Under **Reviewers**, add the right person (see "Who reviews whom" in [`ROADMAP.md`](../ROADMAP.md#team-workflow-read-once-apply-every-phase)).

7. **Answer the review.** Reply to every comment in the thread. To change something, edit on the same branch and push again — the PR updates by itself:

    ```bash
    git add <files>
    git commit -m "docs: fix team table formatting"
    git push
    ```

8. **Merge** once it's approved and CI is green: on the PR page, **Merge pull request** → **Confirm**. Then click **Delete branch**.

9. **Clean up locally.**

    ```bash
    git switch main
    git pull
    git branch -d docs/phase-o-favorite-game
    git fetch --prune                 # forget remote branches that were deleted
    ```

## Check it worked

- The PR page says **Merged** (purple).
- `git log --oneline -3` on `main` shows your commit (inside a "Merge pull request #…" commit).
- The tracker tick for that task is yours to click.

## Gotchas

- **Committed on `main` by accident (not pushed yet)?** Move the commit to a new branch, then put `main` back:

    ```bash
    git switch -c fix/my-branch       # the new branch keeps your commit
    git switch main
    git reset --hard origin/main      # careful: throws away local commits on main only
    git switch fix/my-branch
    ```

- **Commit message rejected?** Read the error — usually an upper-case letter, a missing type, or a full stop at the end. Just run `git commit` again with a fixed message; nothing was lost.
- **CI is red on the PR?** Click **Details** next to the failed check, read the first error, fix it, commit, push.
- **"Your branch is behind" / merge conflicts?** Bring `main` into your branch and resolve the files git marks:

    ```bash
    git fetch
    git merge origin/main
    ```

    Then [resolve the conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line), `git add` the fixed files, `git commit`, `git push`. Stuck for 30 minutes? Ask — conflicts are where everyone gets stuck at first.

- **Pushed a secret** (a key, a password)? Tell the team **right away** — deleting it in a new commit isn't enough, the key has to be replaced.
- **Unpushed work doesn't exist.** Push at the end of every session, even half-done (it's your branch — that's fine).

## Changelog

- 2026-10-15 — Teo — first version, written with the v4 team roadmap.
