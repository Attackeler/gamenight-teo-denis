# Gamenight — Design System

**Direction:** Dark, clean, and native-feeling. **iOS structure** (large navigation titles, inset grouped lists, a bottom tab bar, clear hierarchy) meets **Discord's warmth** (soft rounded panels, comfortable dark grays, a calm blurple accent). **Dark is the default**; a light theme is fully specified too.

This is the spec you implement in **Phase 0.5** of the roadmap — the source of truth for color, type, spacing, and components. Open `gamenight-mockups.html` next to it to *see* every screen. (No app code here on purpose; you build the components yourself.)

**Three theme modes, always:** dark (default), light, and **system** (follows the device). Every token has a dark value and a light value — never hard-code a hex in a screen; reference the token.

**Feel in one line:** quiet, modern, legible. Lots of breathing room, few borders, one accent color used sparingly. If a screen looks busy or candy-colored, it's wrong.

---

## 1. Color tokens

### Core (dark = default)

| Token | Dark | Light | Use |
|---|---|---|---|
| `bg` | `#17181B` | `#F2F2F7` | App background |
| `surface` | `#212327` | `#FFFFFF` | Cards, grouped list cells |
| `surfaceAlt` | `#2A2C31` | `#FFFFFF` | Inputs, raised/pressed fills |
| `elevated` | `#303237` | `#FFFFFF` | Sheets, popovers, menus |
| `border` | `#34363C` | `#E4E4EA` | Hairlines, separators |
| `text` | `#F2F3F5` | `#1A1B1F` | Primary text |
| `textSecondary` | `#B6BAC1` | `#5E6068` | Supporting text |
| `textMuted` | `#82858C` | `#8E9098` | Placeholders, captions, icons |

### Accent & semantic

| Token | Dark | Light | Use |
|---|---|---|---|
| `accent` (blurple) | `#6E7DFF` | `#4F5BD5` | Primary actions, active tab, links, selection |
| `onAccent` | `#FFFFFF` | `#FFFFFF` | Text/icons on accent |
| `accentSoftBg` | `#23264A` | `#ECEEFF` | Tinted button / chip background |
| `accentSoftText` | `#B9C0FF` | `#3A45B8` | Text on the tinted background |
| `success` (online, wins) | `#3BA55D` | `#1E9E54` | Online dots, confirmations |
| `danger` | `#ED4245` | `#D7373B` | Errors, destructive |
| `warning` | `#E5A458` | `#B26C1E` | Cautions |
| `gold` (winner crown only) | `#E5B567` | `#C08A2E` | The crown icon on a night winner — used sparingly |

### Avatar fills (rotate for distinct players)

Indigo `#6E7DFF` · green `#3BA55D` · amber `#E5A458` · pink `#EB5E8B` · teal `#36C5C0`. White initials. Add a `success` online dot when relevant (Discord-style).

**Restraint rule:** at most **one** accent-filled element per screen (the primary button or the active state). Everything else is gray. The accent earns attention by being rare.

---

## 2. Typography

Native feel = the system font. Use **Inter** as the cross-platform stand-in for San Francisco (nearly identical proportions, free). On iOS you may use the actual system font for a true-native feel.

Load via [`@expo-google-fonts/inter`](https://www.npmjs.com/package/@expo-google-fonts/inter) + [`expo-font`](https://docs.expo.dev/versions/latest/sdk/font/). Numbers in leaderboards use `tabular-nums`.

| Style | Weight | Size / line-height | Use |
|---|---|---|---|
| Large title | 700 | 32 / 38 | Top-of-screen title (iOS large title) |
| Title | 600 | 22 / 28 | Sheet titles, section heroes |
| Headline | 600 | 17 / 22 | Card titles, list row titles, button labels |
| Body | 400 | 17 / 22 | Default text |
| Subhead | 400 | 15 / 20 | Secondary row text |
| Footnote | 400 | 13 / 18 | Group headers (uppercase, `textMuted`), captions |
| Caption | 400 | 12 / 16 | Timestamps, fine print |

Sentence case everywhere ("New party", "Start game night"). Group headers may be uppercase footnote with letter-spacing, iOS-style.

---

## 3. Spacing, radii, elevation

- **Spacing (4-pt):** 4, 8, 12, 16, 20, 24, 32. Screen side margins **16–18**; list rows ~**14px** vertical padding; **22px** between groups — keep it roomy, never cramped. Space between grouped sections **24–32**.
- **Radii:** cards & grouped blocks **16**, buttons & inputs **12**, chips/avatars/segmented **999/circle**, bottom sheets **20** (top corners).
- **Elevation — dark:** no drop shadows. Separate layers with `surface` → `surfaceAlt` → `elevated` and the `border` hairline. Flat and calm.
- **Elevation — light:** a single soft shadow on cards (`0 1px 3px rgba(0,0,0,.06)`); grouped lists use separators, not shadows.

---

## 4. Iconography

[**Lucide**](https://lucide.dev/) (`lucide-react-native`) — clean rounded line icons, close to SF Symbols. Consistent stroke. Common: `dice-5` (logo), `plus`, `search`, `users`, `user`, `map-pin`, `calendar`, `clock`, `crown`, `chevron-right`, `chevron-left`, `message-circle`, `bell`, `lock`, `minus`, `check`, `trophy`, `sun`, `moon`, `smartphone` (system theme).

---

## 5. Components

- **Navigation bar:** large title on scroll-top that collapses to a centered inline title; leading back chevron, trailing action (e.g. `+`, or an avatar). No heavy header background — just the page color.
- **Bottom tab bar:** `surface` with a top `border`; tabs Parties · Games · Friends · Chat · You; active icon + label in `accent`, inactive `textMuted`.
- **Inset grouped list (the workhorse):** a rounded `surface` block, rows separated by inset hairlines, a footnote group header above and optional footnote below. Rows: leading icon/avatar, title (+ subhead), trailing value/chevron. Use for forms, party details, friends, stats, settings.
- **Card:** rounded 16 `surface`; in dark a 1px `border`, in light a soft shadow. Party cards use this.
- **Button — primary:** `accent` fill, `onAccent` text, height 50, radius 12, Headline weight. One per screen.
- **Button — tinted:** `accentSoftBg` bg + `accentSoftText` text (iOS-style secondary).
- **Button — plain:** transparent, `accent` text.
- **Input:** `surfaceAlt` bg, radius 12, height 48, no harsh border (use bg contrast); focus = 2px `accent` ring. In grouped forms, inputs render as list rows instead.
- **Segmented control:** rounded track on `surfaceAlt`, selected segment `elevated` with `text`; used for filters and the theme toggle (System / Light / Dark).
- **Chip / pill:** small, `surfaceAlt` or `accentSoftBg` for selected; used for game types, filters, status (`Live` = success tint, `Upcoming` = accent tint, `Done` = muted).
- **Avatar:** circle (32 in rows, 40 in headers, 64 in profiles), initials on a rotating fill; optional `success` online dot.
- **Stepper (score entry):** a row with the player, a `−` button, the score, and a `+` button — or a numeric field. `surfaceAlt` controls, `accent` on the value when focused.
- **Win-rate ring / bar:** thin `border` track, `accent` fill, percentage centered. Stat cards use big tabular numbers.
- **Winner badge:** subtle — a `gold` `crown` icon plus the name, no loud fill.
- **Message bubble (chat):** mine = `accent` fill / white text, theirs = `surfaceAlt` / `text`; rounded 16 with a tighter corner on the sender side; timestamp in caption.

---

## 6. Theming rules (dark / light / system)

- Define both palettes as one token object keyed by mode; components read token names only. Default to **dark**; **system** follows the device; allow explicit override. Persist the choice.
- Set the status bar style per theme. In dark, keep surfaces in the `#17–30` gray range — avoid pure black except where you want OLED contrast.
- Check contrast both ways: the accent is lighter in dark (`#6E7DFF`) and deeper in light (`#4F5BD5`) for that reason.
- Test by flipping the OS theme while the app is open — it should update live.

See roadmap **Phase 0.5** for build steps and links.

---

## 7. Screen layouts

**Core (through Phase 3)**

- **Sign in.** Centered dice logo, "Gamenight", tagline "Game nights, scored." Two grouped inputs (email, password), a primary "Sign in" button, a plain "Create account" link.
- **Parties (home).** Large title "Parties"; trailing `+` in the nav bar. Search field. A list of party cards: name (Headline), date + location (subhead with icons), a row of player avatars with online dots, and a status chip. Bottom tab bar.
- **New party.** Cancel/Create nav. Just a **name** and the **player roster** (rows + an "Add player" row). Footnote: "Players lock once the first game night starts — you'll set when, where, and which games when you start a night." Primary "Create party".

**New game night.** Cancel/Start nav. Date & time, location (free-text + "Use map"), and the **games to play** (added from the catalogue as chips). Primary "Start night". This is where scheduling and game selection happen — never at party creation.
- **Party detail.** Large title = party name; status chip + location/date subhead. Grouped "Players" section (avatars + names) with a footnote "Roster locked" + lock icon once locked. Grouped "Game nights" list (date, winner name, chevron). Primary "Start game night".

**Later (the screens you asked for)**

- **Enter scores.** Title "Game 3 · Azul". A grouped list, one row per player: avatar + name on the left, a stepper (`−` value `+`) or numeric field on the right. A primary "Save scores" button. Keep it fast to tap.
- **Game night standings.** Title "Tonight". A ranked grouped list: position, avatar + name, points (tabular). Leader row marked with a `gold` crown and a subtle `accentSoftBg` highlight. A small "Night winner — Mihai" line on top.
- **Stats / win rate.** Your profile header (avatar, name). Stat cards: global win rate (ring), nights won, games played. A grouped "By game" list with a win-rate bar per game. A "Head-to-head" teaser linking to friends.
- **Friends.** Large title "Friends"; search; a "Requests" group (accept/decline) when present; a grouped friends list: avatar + name, subhead "68% win rate · played 12×", chevron to their profile.
- **Friend profile.** Header avatar + name + global win rate. Stat row: "Played together 12×", "Your record 7–5". A grouped "Head-to-head by game" list (e.g., Catan 3–1). A "Message" button (plain/tinted).
- **Chat.** Conversation titled with the friend's name + avatar. Message bubbles (mine accent, theirs `surfaceAlt`), grouped by time, with a caption timestamp. Bottom input bar: rounded `surfaceAlt` field + an `accent` send button.

**The rest of the screens**

- **Sign up.** Like sign in plus name and confirm-password fields.
- **Games (catalog).** Large title, search, filter chips (players · difficulty · type). **Rich rows from BoardGameGeek:** cover thumbnail, name, difficulty badge, a one-line tagline, player count, and play time. Paginated (~50 per page across ~5,000 games). Tapping a row opens the detail. Tab: Games.
- **Game detail.** Cover image + title + meta (players · time · weight) + difficulty badge; the full **description** (from BGG), category/mechanic chips, and any **awards**; a "Scoring" group (win condition, tracked fields, template source: curated / AI / default, Edit-scoring); Add-to-game-night button.
- **Profile / settings.** Your header; an Appearance group with a Theme segmented control (System / Light / Dark); account rows; sign out. Tab: You.
- **Chat list.** Conversations: avatar + name + last-message preview + time. Tab: Chat.
- **Game night.** A night in progress: the games played (each with its winner), an Add-game row, and a View-standings action.

### Web / responsive layout

The same screens reflow for the browser (the app is Expo web). Phone layout stacks vertically; the **web layout** uses a persistent **left sidebar** (logo + the five tabs + the theme toggle) and a wide content area: parties and games become multi-column grids, chat becomes a two-pane list + thread, and score entry opens as a centered panel. The catalogue on web shows fuller game detail (description + meta), like a reference page. Build mobile-first, then widen at a breakpoint (~768px). See `gamenight-web.html` for the browser layout.

### Player-count search

When you search by players, you type a single number (`4`) or a range (`3–5`). A game matches when it **covers your whole range and doesn't start more than one player below your minimum**:

`min_players ≥ qmin − 1`  AND  `min_players ≤ qmin`  AND  `max_players ≥ qmax`

So `3–5` matches `3-5, 2-6, 2-5, 3-7` but **not** `1-5` (starts two below) or `2-4` (can't reach 5). A single `n` means `qmin = qmax = n`. This runs in the database — see `scripts/games_schema.sql` (`search_games_by_players`).

---

## 8. Game-dependent scoring (schema-driven)

Scoring is **not** a single +/− counter — it changes per game. Each game carries a **scoring schema** that describes *what to capture*, and the score-entry screen is generated dynamically from it.

**Win-condition archetypes** (most of the ~5,000 games map to one): `highest_total` · `lowest_total` · `target_score` (first to N) · `last_standing` / elimination · `rounds` (per-round scores) · `rank_only` (just placement) · `cooperative` (win/lose together).

**A schema** = an archetype + a list of fields. Each field has a **scope** (per-player, or a per-game pick), a **type** (number, integer, money, boolean, player-select, placement), a label, and an optional **bonus value** that feeds the computed total.

**Examples**

- *Catan* — archetype `highest_total` (first to 10 VP). Per-player: victory points (number). Bonuses: longest road (player pick, +2), largest army (player pick, +2), VP cards (per-player integer). Totals update from base + bonuses; winner = highest.
- *Monopoly* — archetype `last_standing`. Per-player: elimination order (placement) and ending money (money). Winner = last player standing.

**The UI** renders one control per field, grouped (e.g. "Points", then "Bonuses"), highlights the winner, and computes totals live. A **generic fallback schema** (just points, or placement) covers any game that doesn't have a specific schema yet — the app always works.

**Where schemas come from** (see roadmap Phase 6): a deterministic mechanic-based default for the long tail, AI-generated detail for popular games (cached), hand-curation for the top ~100, and user overrides. The score-entry UI doesn't care which — it just renders whatever schema the game has.

---

*Generated to match an Apple-native + Discord, dark-first direction. Tell me what to nudge — a different accent than blurple, lighter/darker grays, more or less rounding — and I'll revise the spec and mockups.*
