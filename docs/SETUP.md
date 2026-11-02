# Setup — from zero to the app running

**Time:** about 1–2 hours (the first `supabase start` downloads a lot). **Marcian and Dragos:** do this on a call with Teo the first time.

**Done when:** ✅ the app opens on your phone **and** in your browser, and ✅ `make check-files` passes.

> **Windows:** use **Git Bash** for every command below (it comes with Git for Windows). In VS Code: Terminal → ⌄ next to `+` → **Git Bash**.

---

## 1. Install the tools

| Tool                                                                                                                                                           | Why                                   | Check it worked    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------ |
| [Git](https://git-scm.com/downloads)                                                                                                                           | Version control                       | `git --version`    |
| [VS Code](https://code.visualstudio.com/)                                                                                                                      | Editor                                | opens              |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/)                                                                                              | Runs the database on your machine     | `docker --version` |
| A Node version manager (step 2)                                                                                                                                | The repo needs one exact Node version | `node -v`          |
| **Expo Go** on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)) | Runs the app on your phone            | opens              |

Then tell git who you are (once per computer):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Send Teo your **GitHub username** so he can add you as a collaborator.

## 2. Install the exact Node + npm versions

The repo **refuses to install** with any other version (`engine-strict=true` in `.npmrc`). Required: **Node 26.4.0** and **npm 11.17.0**.

- **Windows:** install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) (`nvm-setup.exe`), then open a **new** terminal (as Administrator the first time):
- **macOS / Linux:** install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), then open a new terminal:

```bash
nvm install 26.4.0
nvm use 26.4.0
npm install -g npm@11.17.0

node -v   # must print v26.4.0
npm -v    # must print 11.17.0
```

## 3. Get the code

```bash
git clone https://github.com/Attackeler/gamenight-teo-denis.git
cd gamenight-teo-denis
npm install          # also installs the git hooks
code .               # opens VS Code
```

VS Code asks _"This workspace has extension recommendations"_ → **Install All**. What they do: [`EXTENSIONS.md`](./EXTENSIONS.md). Turn on **Format on Save** (Settings → search "format on save").

## 4. Start the database

Open **Docker Desktop** first and wait until it says it's running. Then:

```bash
npx supabase start     # first time: downloads containers, takes a while
npx supabase status    # prints the URL and keys you need next
```

## 5. Create your secrets file

```bash
cp .env.example .env.local
```

Open `.env.local` and paste two values from `npx supabase status`:

```bash
EXPO_PUBLIC_SUPABASE_URL="<API URL>"
EXPO_PUBLIC_SUPABASE_KEY="<publishable / anon key>"
```

`.env.local` is git-ignored — it never gets committed. Never paste keys into chat.

## 6. Run the app

```bash
npx expo start
```

- **Phone:** scan the QR code with your camera (iOS) or Expo Go (Android). Phone and computer must be on the **same Wi-Fi**.
- **Browser:** press `w` in the terminal.
- Different networks? Use `make start-app` instead (it starts Supabase and uses a tunnel).

## 7. Check everything

```bash
make check-files     # lint + formatting + types — the same checks CI runs on every PR
```

Green? You're done. Tick your setup task in `gamenight-roadmap.html`.

---

## Daily commands

| I want to…                      | Run                                                         |
| ------------------------------- | ----------------------------------------------------------- |
| Start working                   | Docker Desktop on → `npx supabase start` → `npx expo start` |
| Check my code before a commit   | `make check-files`                                          |
| Fix formatting automatically    | `npm run prettier:fix`                                      |
| Fix lint problems automatically | `npm run lint:fix`                                          |
| Reset my local database         | `make supabase-start` (start + reset to migrations)         |
| Stop the database               | `make supabase-stop`                                        |

How to get a change into `main`: [`playbook/git-pr-flow.md`](./playbook/git-pr-flow.md).

## When something goes wrong

| You see                                                               | Fix                                                                                                          |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `EBADENGINE` / `Unsupported engine` on `npm install`                  | Wrong Node or npm version → redo step 2, then open a new terminal                                            |
| `nvm: command not found`                                              | Close and reopen the terminal after installing nvm                                                           |
| `Cannot connect to the Docker daemon` / `supabase start` fails        | Docker Desktop isn't running → open it, wait, retry. On Windows it needs WSL 2 (Docker offers to install it) |
| Phone can't load the app / spins forever                              | Not on the same Wi-Fi → use `make start-app` (tunnel mode)                                                   |
| Commit rejected: `subject may not be empty` / `type may not be empty` | The commit message format is wrong → `type(scope): lower-case summary`, e.g. `docs: fix typo in setup`       |
| Git hooks don't run at all                                            | Run `npm install` again (it re-installs them)                                                                |
| `make: command not found` (Windows)                                   | Run the npm commands instead: `npm run lint`, `npm run prettier:check`, `npm run ts-check`                   |

**Hit something not on this list?** Write down the error and the fix, and add it to `docs/playbook/local-env.md` (Dragos and Marcian start that recipe in Step 0) — so the next person doesn't hit it.
