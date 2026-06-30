# Gamenight

A free **mobile + web app** for friend groups to track board-game-night scores and win rates — built by **Teo & Denis** as a learn-by-doing project.

> **New here? This README is your map.** It tells you which file to open first and what each one is for.

---

## Start here — open the files in this order

1. **`README.md`** — you're reading it. The map of everything.
2. **`gamenight-team.html`** — the **team playbook**: what the app is, who does what, how we use tickets, and the timeline. **Read this together first.** *(Plain-text version: `TEAM.md`.)*
3. **`gamenight-roadmap.html`** — the **full build plan**: all 14 phases as clickable checkboxes with shared progress, "learn first" links, and the DevOps + free-tier reference. *(Plain-text version: `ROADMAP.md`.)*
4. **Your personal task list** — open the one with your name and keep it open while you work:
   - **Teo →** `gamenight-roadmap-teo-tasks.html`
   - **Denis →** `gamenight-roadmap-denis.html`

So: **team playbook → shared roadmap → your own task list.**

---

## How to open the HTML files

**Double-click any `.html` file** — it opens in your web browser (Chrome, Edge, or Firefox). Nothing to install.

- Click the **squares** to tick off tasks. Your progress **saves automatically** in that browser, on that computer.
- Each file remembers **its own** progress (your task list, Denis's task list, and the shared roadmap are all separate).
- Use **Expand / Collapse all** to fold phases, and **Reset progress** to start a file over.

The `.md` files (README, ROADMAP, TEAM, DESIGN) are plain text — open them in VS Code, or just read the matching `.html` version.

---

## Every file at a glance

| File | What it's for | Who |
|---|---|---|
| `README.md` | This map | Both |
| `gamenight-team.html` / `TEAM.md` | The plan: app description, roles, tickets, timeline | **Both — read first** |
| `gamenight-roadmap.html` / `ROADMAP.md` | The full 14-phase build plan + shared progress | Both |
| `gamenight-roadmap-teo-tasks.html` | Teo's explicit personal checklist | Teo |
| `gamenight-roadmap-denis.html` | Denis's explicit personal checklist | Denis |
| `DESIGN.md` | The app's design spec (used in Phase 0.5) | Both |
| `scripts/` | SQL schema + BoardGameGeek import helpers | Teo (mostly) |

---

## A typical day

1. **10-min standup** (Denis runs it): *what I did / what I'm doing / any blockers.*
2. Open **your personal task list** and pick your next unchecked task.
3. **Pair** for ~1–1.5 h on anything new or hard (one types, one navigates — swap often).
4. Every change → a **Pull Request** the other person reviews. *You can't approve what you don't understand* — that's how you both learn the whole app.
5. Keep the **ticket board** (GitHub Projects) up to date — Denis owns it.

Weekly: **Monday** plan the sprint · **Friday** demo + a 10-min retro.

---

## The build order (milestones)

`v0.1.0` auth → `v0.2.0` parties + scoring → `v0.3.0` stats + catalog → `v0.4.0` friends + chat → `v1.0.0` release → `v1.1.0` CI/CD.

**Rough timeline at 5 days/week:** something usable in ~6–8 weeks, a polished `v1.0` in ~4–5 months. Full breakdown in the team playbook.

---

## Tech stack (all free)

**Expo (React Native + web)** · **TypeScript** · **Supabase** (Postgres, auth, realtime, storage) · **GitHub** (code, Issues/Projects, Actions CI/CD) · **Docker** (runs the backend locally). Total cost to build and run: **$0**.

---

*The goal isn't just to ship the app — it's that **both of us can do everything** by the end. The pairing, reviews, and rotating roles in the playbook are how we get there.*
