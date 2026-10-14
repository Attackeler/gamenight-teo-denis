# Gamenight — Marcian's roadmap

Welcome! This is your personal task queue at ~5–10 h/week — a **derived view** of [`ROADMAP.md`](./ROADMAP.md), which stays the source of truth. If the two disagree, `ROADMAP.md` wins. Day-to-day ticking: **`gamenight-roadmap.html`** → click **Marcian**.

**Read first, in order:** [`ONBOARDING.md`](./ONBOARDING.md) (sections 1, 2, and **3B — your learning path**) → this file → `ROADMAP.md` intro and "The goal everything else serves" (the rest of `ROADMAP.md` can wait until it makes sense).

**Your deal, honestly:** you're learning programming itself, at a few hours a week. That's planned for: nothing in the next phases waits on you, and your tasks are small on purpose. But they're **real** — every one of them ships in the app. Most are **🔁 replicas**: you do a task the way a recipe says, and you fix the recipe wherever it confused you. That makes you the team's recipe tester — if you can follow a recipe, anyone can.

---

## Standing duties (every week, not tickable)

- **Show up to the weekly sync** (~45 min) — even in a week you did nothing, that's where you pick up the thread.
- **Shadow-review one PR a week** (from your week 5 on): read a Teo or Dragos PR and leave at least one question in the thread. Questions like "what does this line do?" are exactly right.
- **Keep a "confused" notes file.** Everything you didn't get goes there; bring it to the sync or the team chat.
- **Blocked > 30 min after honestly trying?** Write down what you tried → ask in the team chat. That's not cheating; that's the job.
- **Push every session**, even half-done work, on your branch.

---

## Right now — Phase O, your on-ramp (~8–10 weeks)

Full links and details: `ONBOARDING.md` section 3B.

- [ ] 👥 **Setup on a call with Teo** (~2–3 h): terminal basics, git, VS Code, Node, Docker — app on your phone **and** in the browser
- [ ] **Weeks 1–4 — programming basics in JavaScript** (freeCodeCamp + MDN) · checkpoints: bigger-of-two + even/odd (week 2) · the top-scorer function, explained to Dragos (week 4)
- [ ] **Weeks 4–5 — git:** Learn Git Branching, then 🔁 **practice PR from the git recipe:** fill in your favorite board game in the team table in `docs/README.md`
- [ ] **First shadow review** — one question on a real PR
- [ ] **Weeks 5–8 — React + React Native** (Tic-Tac-Toe tutorial, core components, our code) · checkpoint: trace one color from `tokens.ts` to the screen, explained to Dragos

## Phase 2 — design system (your first real PR)

- [ ] 🔁 **`Avatar`** — initials in a colored circle, using the `avatar` tokens — from the base-component recipe 🎉
- [ ] Verify themes with the team (phone + web)
- [ ] 🧠 Teach-back: trace one color from `tokens.ts` to the screen

## Phase 3 — backend schema (your first SQL)

- [ ] **Before your task:** [SQLBolt](https://sqlbolt.com/) lessons 1–6
- [ ] 👥 Data-model session (all three) — the best hour you'll spend on understanding the whole app; ask to drive for a stretch
- [ ] 🔁 **Add `profiles.avatar_color`** with a migration, then regenerate types — from the table and types recipes (it feeds your `Avatar`)
- [ ] 🧠 Teach-back: what a migration is, using your own

## Phase 4 — auth → tag v0.1.0

- [ ] 🔁 **Settings screen** — theme toggle + log out — from the new-screen recipe
- [ ] Verify login with the team (phone + web)
- [ ] 🧠 Teach-back: what happens, step by step, when you press Log out

## Phase 5 — parties & the roster lock

- [ ] 👥 Roster-lock design session — drive for at least 15 minutes
- [ ] 🔁 **Create-party form** (just a name) from the form recipe
- [ ] 🧠 Teach-back: why the lock lives in the database, not the app

## Phase 6 — game nights & scoring → tag v0.2.0

- [ ] 👥 Scoring rules session
- [ ] 🔁 **Add a played game** to a night, from the form recipe
- [ ] 🔁 **Unit tests for Teo's archetype winner functions**, from the unit-test recipe — tests are just "this input should give that answer"
- [ ] 🧠 Teach-back: the night flow (Dragos's)

## Phase 7 — stats

- [ ] 🔁 **Add tie and missing-score scenarios** to the seed data, with their expected answers
- [ ] 🔁 **Games-played-per-player view** from Dragos's SQL view recipe
- [ ] **Verify every stat on screen by hand** against the seed's known answers
- [ ] 🧠 Teach-back: one aggregate query, line by line

## Phase 8 — catalog → tag v0.3.0

- [ ] 🔁 **Re-run the BGG import on your machine** from Dragos's recipe alone; fix whatever was unclear
- [ ] 🔁 **Custom-game form** from the form recipe
- [ ] 🧠 Teach-back: how a game travels from BoardGameGeek into our table

## Phase 9 — release → tag v1.0.0

- [ ] Test top-up on code you didn't write
- [ ] 🔁 **Database test** for one RLS policy, from the db-test recipe
- [ ] 🔁 **Loading / empty / error states** on the remaining screens, from Dragos's recipe
- [ ] 🔁 **Web-deploy dry-run, solo**, from the release recipe — you ship the website
- [ ] 🧠 Whole-app teach-back: one screen, one table, one test you didn't write

## Track B (post-v1) — your own small features

- [ ] P10: 🔁 friends list + friend profile with head-to-head stats
- [ ] P11: 🔁 **messages schema + policies — your first solo schema**
- [ ] P12: register and store push tokens
- [ ] P13: 👥 drive the first CI workflow with Teo · 🔁 EAS build on tags · 🔁 badges + automated changelog

---

## Your growth arc, explicitly

Phase O: programming basics, git, React → Phase 2–4: your first component, column, and screen — all from recipes → Phase 5–8: forms, tests, SQL views, a data import — one of every kind → Phase 9: you deploy the website yourself → Track B: your own schema and features. By `v1.0.0` you can explain every part of the app at a high level, and your column in the skills matrix has an **R** in more rows than you'd believe today.
