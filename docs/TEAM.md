# Gamenight — Team Playbook

How **Teo** and **Denis** build Gamenight together: what it is, who does what, how we track work with tickets, and when it ships.

Companion to `ROADMAP.md` (the build plan) and `gamenight-roadmap.html` (the clickable progress tracker). A friendlier version of this file is `gamenight-team.html` — open it in a browser.

---

## The app, in plain language (read this first, Denis)

**Gamenight is a free phone + web app for friend groups that have regular board-game nights.**

You create a _party_ — your fixed group of players. Then, every time you get together, you log a _game night_: the date, where you are, which games you played, and everyone's scores. The app works out who won and keeps score across the whole group **over time** — overall win rates, per-game win rates, and head-to-head ("am I actually better than you at Catan?"). It also has a searchable catalog of board games (pulling real data from BoardGameGeek), a friends list, real-time chat, and push notifications when someone invites you to a party.

Think of it as a **stats tracker + social hub for game nights**. It remembers every result, so the group can finally settle who's the best.

**What a user can do in it:**

- Create a party (a fixed roster of players) so scores stay comparable.
- Log a game night: date, place, games played, and each player's score.
- See who won the night, and win rates over time (overall, per game, head-to-head).
- Search a big board-game catalog, or add your own games.
- Add friends, chat in real time, and get notified about invites.

**What it's built with** (all new to you is fine — you'll learn it):

- **Expo / React Native + TypeScript** — the app itself (runs on phones _and_ the web from one codebase).
- **Supabase** — the backend: database, login, real-time, file storage. Free.
- **GitHub** — where the code lives, plus our tickets and our automation.
- **Docker** — runs a copy of the backend on our own laptops so we can work offline.

Everything we use has a free tier. Total cost to build and run this: **$0**.

---

## The two of us

|                    | Teo                            | Denis                                       |
| ------------------ | ------------------------------ | ------------------------------------------- |
| **Time**           | ~8 h/day, 5 days/week          | ~4 h/day, 5 days/week                       |
| **Starting point** | Some React Native experience   | New to programming                          |
| **Early focus**    | Drives the hard parts; mentors | Process, design, QA + learning; pairs daily |
| **End goal**       | Full co-developer              | Full co-developer                           |

Combined: **~60 person-hours/week.**

---

## How we work (the important part)

Our goal is that **both of us can do everything by the end.** That doesn't happen by accident — we build it in with six habits:

1. **Pair programming.** For anything new or hard, we work on one screen together: one person _drives_ (types), the other _navigates_ (thinks ahead, looks things up). Swap roles every ~30 minutes. It feels slower for one task but it's the fastest way to move knowledge between two heads.
2. **Whoever didn't build it, reviews it.** Every change goes through a Pull Request (a "please-merge-my-change" request) that the _other_ person reads and approves. You can't approve what you don't understand — so reviewing is forced learning.
3. **Teach-back.** After each phase, whoever led it gives the other a 10–15 minute walkthrough of how it works.
4. **Rotate the scary stuff.** Teo leads the first hard thing (database security in Phase 3); Denis leads a similar thing later (Phase 7) with Teo supporting. Nobody gets to "own" a mystery area.
5. **Everything is a ticket.** No work happens unless it's on the board (see below). Denis owns the board.
6. **Shared learning log.** A running doc where we both jot what we learned and the links that helped. Future-us will be grateful.

---

## Denis's ramp-up: zero to co-developer

You do **not** need to know how to code to start being useful. You start by owning the parts of a real software team that _aren't_ deep coding, learn the fundamentals on the side, and pair every day until you're writing features yourself.

### Stage 1 — Weeks ~1–3: Own the process, learn the basics

- **~1.5 h/day learning** the fundamentals: a beginner JavaScript / TypeScript + React course (freeCodeCamp is free and excellent) and the basics of Git.
- **Own the GitHub Project board**: create it, write the first user stories, keep it tidy. (This is real project-management experience.)
- **Help with design**: wireframes in Figma (free) and choosing the app's colors and spacing. Phase 0.5 is very visual — a great first hands-on win.
- **Pair with Teo ~1–1.5 h/day**, watching, asking "why," and starting to drive simple bits.

### Stage 2 — Weeks ~4–10: Training wheels

- Take **"good first issues"** — small, clearly-described coding tasks Teo prepares for you (a form field, a list screen, a style fix, a small test).
- **Own QA**: test the app, write down what you tried, file bugs as tickets.
- **Own catalog content** (Phase 6): adding games and defining how each is scored — real, valuable work that doesn't need deep code.
- Keep running the board and sprint planning.

### Stage 3 — Weeks ~10+: Co-developer

- **Lead a whole feature solo.** Phase 7 (Friends) is your "graduation" — it reuses patterns you've already seen Teo build.
- **Review Teo's Pull Requests.** From here on we rotate freely and genuinely both know the whole app.

---

## Who does what, phase by phase

_Lead_ = drives it. _Denis's win_ = his growth task for that phase. **Both always review each other's Pull Requests** — that's non-negotiable and it's how we cross-train.

| Phase                           | Lead                   | Denis's win (his growth task)                                              |
| ------------------------------- | ---------------------- | -------------------------------------------------------------------------- |
| **0** Foundations & setup       | Teo                    | Set up his own machine (Node, editor, Git) alongside — first hands-on      |
| **0.5** Design system & theming | **Denis** (with Teo)   | Wireframes in Figma; pick colors + build simple themed components          |
| **0.7** DevOps + the board      | Teo (Docker/CI)        | **Owns** the Project board + writes the first backlog of stories           |
| **1** Backend schema (Supabase) | Teo                    | Sketch the data model in dbdiagram.io with Teo; learn SQL basics           |
| **2** Authentication            | Teo                    | Build the login / sign-up form UI                                          |
| **3** Parties & roster lock     | Teo (the hard trigger) | Build "create party" form + "my parties" list; write the lock test         |
| **4** Game nights & scoring     | Teo (scoring engine)   | Build the score-entry UI + the leaderboard display                         |
| **5** Stats & win rates         | Pair                   | Build the stats screens; write the seed-data tests                         |
| **6** Catalog (BoardGameGeek)   | Teo (the API)          | **Owns** catalog content (curate games + scoring rules) + search/filter UI |
| **7** Friends system            | **Denis** (graduation) | Lead the whole feature solo; Teo reviews                                   |
| **8** Realtime chat             | Pair (new for both)    | Rotate driving                                                             |
| **9** Push notifications        | Teo (Edge Functions)   | Permission UI + deep-links + testing on real devices                       |
| **10** Testing & polish         | **Denis** leads QA     | Write test cases, run Maestro flows, file bugs                             |
| **11** CI/CD & automation       | Teo                    | Pairs to learn the pipeline; owns README badges + changelog                |

---

## Tickets — how we track work (Agile-lite, free)

**Tool:** GitHub Issues + GitHub Projects. It's built into the repo, free, and it talks to our automated pipeline. **Denis owns it.**

**Work-item types** (a "Type" field on every issue):

- **Epic** — a whole phase. Example: _"Phase 4: Game nights & scoring."_
- **Story** — something a _user_ can do, written from their point of view. Example: _"As a host, I can record each player's score for a game."_
- **Task** — a technical step with no direct user story. Example: _"Add the `game_results` table + RLS policies."_
- **Bug** — something that's broken.
- **Chore** — tooling, DevOps, or cleanup.

**The board** has five columns:

> **Backlog → To Do (this sprint) → In Progress → In Review → Done**

**Every ticket has:** a type, an assignee, a size (S / M / L), and **acceptance criteria** — a short checklist of what "done" means.

**Definition of Done:** code written → tests pass in CI → the _other_ person reviewed and approved the Pull Request → merged → (if it's a Story) demoed to each other.

**Sprints are one week.** **Monday** = planning (pull tickets from the Backlog into the sprint). **Friday** = a quick demo of what got done + a 10-minute retro (what went well, what to change). Denis runs both — it's the best project-management training there is.

**Tie tickets to code:** write `Closes #42` in a Pull Request and GitHub automatically moves ticket #42 to **Done** when it merges. This pairs perfectly with the Conventional Commit messages in the roadmap.

---

## Our daily & weekly rhythm

**Every day**

- **10-minute standup** (Denis runs it): each of us says _what I did / what I'm doing today / any blockers._
- **~1–1.5 h pairing** overlap.
- The rest of the day: solo on your own tickets.

**A rough day for each of us (early on)**

- **Denis (~4 h):** ~1.5 h learning · ~1.5 h board + design + QA + pairing · ~1 h a good-first-issue.
- **Teo (~8 h):** ~5–6 h building · ~1 h reviewing Denis's PRs + prepping his next tickets · ~1 h pairing/teaching.

**Every week:** Monday planning · Friday demo + retro. One sprint ≈ one phase (give or take).

---

## When does it ship?

At **5 days/week (~60 person-hours/week)**, building _while learning_, here's a realistic path. These are **ranges, not promises** — learning projects always surprise you, and the "struggle" on the design-decision parts is the whole point (and it takes time).

| Milestone                                     | Phases | Roughly when (from start)        |
| --------------------------------------------- | ------ | -------------------------------- |
| App runs + login works (**v0.1.0**)           | 0 → 2  | **~3–4 weeks**                   |
| Playable MVP: party + game night (**v0.2.0**) | 3 → 4  | **~6–8 weeks**                   |
| Stats + catalog (**v0.3.0**)                  | 5 → 6  | **~9–12 weeks**                  |
| Friends + chat (**v0.4.0**)                   | 7 → 8  | **~12–14 weeks**                 |
| Polished release (**v1.0.0**)                 | 9 → 10 | **~15–18 weeks (~4 months)**     |
| Fully automated (**v1.1.0**)                  | 11     | **~16–19 weeks (~4–4.5 months)** |

**Bottom line:** something **usable and demo-able in your hands in about 6–8 weeks**, and a polished, automated **v1.0 release in roughly 4–5 months.**

**Want a real release sooner?** Scope down a leaner "v1": ship auth + parties + game nights + basic stats (**Phases 0–5**) and push chat, push notifications, and the full catalog to "after v1." That's a genuinely shippable app in about **2–2.5 months.**

**What makes it go faster or slower**

- **Faster:** keep tickets small, pair on the scary stuff (fewer dead-ends), and don't gold-plate v1.
- **Slower:** skipping tests early (bugs pile up), big unscoped tickets, and long gaps between sessions (you lose the thread and have to re-learn).

---

## Learning resources — bookmark these

The main things to learn, grouped by topic. Each phase in your personal task list (`gamenight-roadmap-teo-tasks.html` / `gamenight-roadmap-denis.html`) also links the exact resources for _that phase's_ work, so you learn just-in-time.

- **Fundamentals (great for Denis):** [freeCodeCamp](https://www.freecodecamp.org/learn/) · [React — Learn](https://react.dev/learn) · [React Native docs](https://reactnative.dev/docs/getting-started) · [TypeScript](https://www.typescriptlang.org/docs/)
- **The app framework (Expo):** [Expo tutorial](https://docs.expo.dev/tutorial/introduction/) · [Expo Router](https://docs.expo.dev/router/introduction/) · [Expo on web](https://docs.expo.dev/workflow/web/)
- **Backend & database (Supabase / Postgres):** [Supabase docs](https://supabase.com/docs) · [Local dev (CLI + Docker)](https://supabase.com/docs/guides/local-development) · [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Triggers](https://supabase.com/docs/guides/database/postgres/triggers) · [Realtime](https://supabase.com/docs/guides/realtime) · [Edge Functions](https://supabase.com/docs/guides/functions)
- **Tooling, tickets & DevOps:** [GitHub basics](https://docs.github.com/en/get-started) · [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects) · [GitHub Actions](https://docs.github.com/en/actions) · [Docker](https://docs.docker.com/get-started/) · [Husky](https://typicode.github.io/husky/) · [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- **Design:** [Figma — getting started](https://help.figma.com/hc/en-us)
- **Data fetching & state:** [TanStack Query](https://tanstack.com/query/latest)
- **External data:** [BoardGameGeek XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2)
- **Testing & monitoring:** [Jest in Expo](https://docs.expo.dev/develop/unit-testing/) · [RN Testing Library](https://callstack.github.io/react-native-testing-library/) · [Maestro (E2E)](https://docs.maestro.dev/) · [Sentry](https://docs.sentry.io/platforms/react-native/)

---

## Is "both of us know how to do everything" actually possible?

**Yes — and it's the most valuable thing you'll get out of this.** It just has to be deliberate. The pairing, the "whoever didn't build it reviews it" rule, the teach-backs, and rotating the scary stuff are _specifically_ there to make sure neither of us ends up the only person who understands a part of the app. By the time you hit v1.0, Denis won't be "the non-programmer" anymore — he'll have written, reviewed, and explained code across every layer. That's the plan.
