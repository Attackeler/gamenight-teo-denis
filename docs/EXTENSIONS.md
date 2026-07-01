# VS Code Extensions — What, When & Why

A plain-language guide to the editor extensions we use on Gamenight — what each one does, **when** to install it, and a quick example. Written so it makes sense even if you've never coded before (👋 Denis).

> **What's an "extension"?** VS Code is a code editor. Extensions are add-ons that give it extra powers — spotting mistakes, formatting your code, talking to GitHub, and so on. You install the ones you need; they're all free.

---

## How to install one

1. Open **VS Code**.
2. Click the **Extensions** icon in the left sidebar (the four little squares), or press **Ctrl+Shift+X**.
3. Paste the extension's **ID** (e.g. `dbaeumer.vscode-eslint`) into the search box.
4. Click **Install**.

> **Always search by the ID** (the `publisher.name` in code font below), not just the friendly name. Popular extensions have copycats — the ID lands you on the real one.

**Even easier:** if the repo has a `.vscode/extensions.json` file, VS Code will pop up _"This workspace has extension recommendations"_ when you open the project — just click **Install All** and you're done. (See the end of this doc.)

---

## How to read this guide

Each entry has: **what it does**, **when to install**, and **an example**.

Legend:

- 🟢 **Install now** (Phase 0)
- 🟡 **Install when you reach that phase**
- ⚪ **Optional** nice-to-have, any time
- 👶 **Especially helpful if you're new to coding**

---

## 🟢 Install now — Phase 0 essentials

### ESLint — `dbaeumer.vscode-eslint`

**What it does:** ESLint is a "linter" — it reads your code and flags mistakes and sloppy patterns (unused variables, forgotten `await`, etc.) as you type, with a squiggly underline.
**Example:** You write `const total = 5;` but never use `total`. ESLint underlines it: _"'total' is assigned a value but never used."_ You delete it → cleaner code.
**Why here:** keeps both our code consistent, so code reviews are about _logic_, not style nitpicks.

### Prettier – Code formatter — `esbenp.prettier-vscode`

**What it does:** an automatic formatter. Every time you save, it tidies your file into one consistent style (indentation, quotes, spacing). You stop thinking about formatting entirely.
**Example:** You paste in messy code with random spacing. Hit **Save** → it instantly snaps into clean, aligned code.
**Set it up:** make Prettier the default formatter and turn on **Format on Save** (Settings → search "format on save").
👶 Great for Denis — you never have to make code "look right" by hand.

### Expo Tools — `expo.vscode-expo-tools`

**What it does:** the **official** Expo extension. Adds autocomplete and error-checking for Expo config files (`app.json`, `eas.json`) plus debugging help.
**Example:** Editing `app.json`, you start typing a setting → it suggests valid options and warns if you misspell a key.
**Note:** install the one by publisher **Expo**. Skip look-alikes.

### Pretty TypeScript Errors — `yoavbls.pretty-ts-errors` 👶

**What it does:** TypeScript's error messages can be a wall of text. This turns them into short, readable, color-coded explanations.
**Example:** Instead of a 12-line red blob, you see a clean _"Property 'name' is missing but required."_
👶 Denis — this one will save your sanity.

### Error Lens — `usernamehw.errorlens` 👶

**What it does:** normally an error stays hidden until you hover over the squiggle. Error Lens prints the message **right on the line**, in color.
**Example:** You forget a comma → _"',' expected"_ appears at the end of that line immediately, no hovering.
👶 Makes problems obvious instead of hidden.

### ES7+ React/React-Native snippets — `dsznajder.es7-react-js-snippets`

**What it does:** shortcuts that expand into boilerplate. Type a few letters, press **Tab**, get a whole block of code.
**Example:** type `rnfes` + Tab → a complete React Native screen component appears, imports and export already written.
**Why here:** saves a ton of repetitive typing.

### Path Intellisense — `christian-kohler.path-intellisense`

**What it does:** autocompletes file paths when you import things.
**Example:** typing `import Button from '../components/` → it lists the files in that folder so you pick one, instead of guessing and typo-ing the path.

---

## 🟢 Git & teamwork (for our PR-per-phase workflow)

### GitLens — `eamodio.gitlens`

**What it does:** supercharges git inside VS Code. Headline feature: next to each line it can show **who last changed it and when** ("blame").
**Example:** A line looks odd. GitLens shows _"Teo, 2 days ago — commit: fix scoring."_ Now you know the context before touching it.
**Why here:** helps us understand each other's changes.

### GitHub Pull Requests — `github.vscode-pull-request-github`

**What it does:** create, review, and comment on Pull Requests **without leaving VS Code**.
**Example:** Denis opens a PR; Teo sees it in the sidebar, reads the diff, leaves comments, and approves — all in the editor.
**Why here:** we review every phase's PR, and this makes it painless. (Reviewing is how we both learn the whole app.)

---

## 🟡 Install when you reach the phase

### DotENV — `mikestead.dotenv` · _Phase 0.7_

**What it does:** syntax highlighting for `.env` files (where your keys/config live). Makes them readable instead of flat gray text — and easier to spot a mistake.

### SQLTools + PostgreSQL driver — `mtxr.sqltools` and `mtxr.sqltools-driver-pg` · _Phase 1_

**What they do:** write SQL with autocomplete, and even run queries against your Supabase/Postgres database from inside VS Code.
**Example:** writing a migration, you get table/column suggestions; you can run a quick `SELECT` to check your data without leaving the editor. (Install both — the first is the tool, the second teaches it to speak Postgres.)

### Jest — `orta.vscode-jest` · _Phase 10_

**What it does:** runs your tests automatically and shows a ✅/❌ right next to each test in the file.
**Example:** You write a test for the win-rate math → a green check appears when it passes, a red ✗ with the reason when it fails.

### YAML — `redhat.vscode-yaml` and GitHub Actions — `github.vscode-github-actions` · _Phase 11_

**What they do:** your CI pipeline is written in YAML (a format that's _very_ fussy about spaces). YAML adds validation + autocomplete; the GitHub Actions extension adds workflow-specific help and lets you watch your pipeline runs.
**Example:** editing the pipeline, it warns you the moment an indent is off and autocompletes action names.

---

## ⚪ Quality-of-life (optional, any time)

### Markdown All in One — `yzhang.markdown-all-in-one`

**What it does:** makes editing `.md` files (like this one, or the roadmap) nicer — live preview, auto table-of-contents, tidy lists.

### Code Spell Checker — `streetsidesoftware.code-spell-checker` 👶

**What it does:** catches typos in code, comments, docs, and commit messages.
**Example:** you write `recieve` → it underlines it and suggests `receive`.

### EditorConfig — `editorconfig.editorconfig`

**What it does:** makes VS Code obey a shared `.editorconfig` file, so everyone's indentation and line-endings match regardless of personal settings. (We add that file in Phase 0's "pin your toolchain" pro tip.)

### Color Highlight — `naumovs.color-highlight` 👶 · _handy in Phase 0.5_

**What it does:** shows a little colored square next to any color code.
**Example:** `#7c5cff` gets a purple swatch beside it — perfect when Denis is building the design system and juggling colors.

---

## Don't bother installing these

- **TypeScript** — already built into VS Code.
- **Bracket pair colorization** — built in now (enable in Settings if it's off).
- **Tailwind CSS IntelliSense** — only useful with NativeWind, which we're **not** using. Our app styles with React Native's own `StyleSheet`.

---

## One-click setup for the whole team (recommended)

We can drop a `.vscode/extensions.json` file into the repo listing all the "install now" extensions. Then whenever either of us opens the project, VS Code offers to install the whole set in one click — so Teo and Denis end up with an identical environment. Ask and it'll get generated.

---

_Companion to `README.md`, `ROADMAP.md`, and the per-person task lists. If an extension ever feels noisy, you can disable it per-workspace — nothing here is permanent._
