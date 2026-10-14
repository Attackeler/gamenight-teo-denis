/* eslint-disable */
'use strict';
// Gamenight roadmap — task data for gamenight-roadmap.html (team plan v4).
// Edit tasks HERE and mirror the change in ROADMAP.md (+ the personal ROADMAP-*.md files).
// The HTML file is only a view.
//
// Step fields:
//   id   — stable key; progress is saved by id, so never reuse an id for a different task
//   t    — task text
//   o    — owner: 'T' Teo · 'D' Dragos · 'M' Marcian · combos like 'TD' / 'TM' · 'ALL' everyone
//   k    — kind (optional): 'recipe' 📖 · 'replica' 🔁 · 'together' 👥 · 'teach' 🧠 — string or array
//   c    — ready-made Conventional Commit message (optional)
//   done — true = already done in the repo (baseline, audited from git on 2026-10-15)

const PEOPLE = { T: 'Teo', D: 'Dragos', M: 'Marcian' };

const PHASES = [
    {
        n: 'O',
        title: 'On-ramps — Dragos and Marcian (parallel with Phase 2)',
        badge: 'next',
        track: 'A',
        goal: 'Dragos (~3 weeks at ~15 h/week, from Python) and Marcian (~8–10 weeks at 5–10 h/week, from zero) go from where they are to shipping reviewed PRs. Full guide, links, and checkpoints: docs/ONBOARDING.md. First real PRs land in Phase 2 (Input, Avatar).',
        learn: [
            ['ONBOARDING.md — the full guide', 'ONBOARDING.md'],
            ['Git recipe', 'playbook/git-pr-flow.md'],
            ['Learn Git Branching', 'https://learngitbranching.js.org/'],
            ['freeCodeCamp (Marcian)', 'https://www.freecodecamp.org/learn'],
            [
                'MDN — JavaScript first steps',
                'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting'
            ],
            ['React quick start', 'https://react.dev/learn'],
            [
                'React Native core components',
                'https://reactnative.dev/docs/intro-react-native-components'
            ]
        ],
        steps: [
            {
                id: 'po-sync',
                t: 'Pick a weekly sync slot (~45 min) that works for all three + a team chat channel',
                o: 'ALL'
            },
            {
                id: 'po-localenv',
                t: 'Recipe: local dev environment — written from every setup problem Dragos and Marcian actually hit',
                o: 'T',
                k: 'recipe',
                c: 'docs(playbook): add local environment recipe'
            },
            {
                id: 'pd-setup',
                t: 'Machine setup end-to-end (ONBOARDING §2): app on your phone AND in the browser, make check-files green',
                o: 'D'
            },
            {
                id: 'pd-js',
                t: 'Week 1 — JavaScript coming from Python + git; checkpoint: the top-scorer function without looking up syntax',
                o: 'D'
            },
            {
                id: 'pd-practice',
                t: 'Practice PR from the git recipe: remove the stray supabase/snippets SQL file and git-ignore the folder',
                o: 'D',
                k: 'replica',
                c: 'chore(db): remove stray sql snippet'
            },
            {
                id: 'pd-ts',
                t: 'Week 2 — TypeScript + React; checkpoint: explain src/theme/ThemeProvider.tsx to Teo line by line',
                o: 'D'
            },
            {
                id: 'pd-rn',
                t: 'Week 3 — React Native + Expo Router; checkpoint: how a file in app/ becomes a screen, what _layout.tsx does',
                o: 'D'
            },
            {
                id: 'pm-setup',
                t: 'Machine setup on a call with Teo (~2–3 h): terminal basics, git, VS Code, Node, Docker — app on your phone AND in the browser',
                o: 'M',
                k: 'together'
            },
            {
                id: 'pm-basics',
                t: 'Weeks 1–4 — programming basics in JavaScript (freeCodeCamp + MDN); checkpoints: bigger-of-two + even/odd, then the top-scorer function explained to Dragos',
                o: 'M'
            },
            {
                id: 'pm-git',
                t: 'Weeks 4–5 — Learn Git Branching, then the practice PR from the git recipe: fill in your favorite board game in the team table in docs/README.md',
                o: 'M',
                k: 'replica',
                c: 'docs: add my favorite game to the team table'
            },
            {
                id: 'pm-shadow',
                t: 'First shadow review: read a Teo or Dragos PR and leave at least one question (then one per week)',
                o: 'M'
            },
            {
                id: 'pm-react',
                t: 'Weeks 5–8 — React + React Native (Tic-Tac-Toe tutorial, core components, our code); checkpoint: trace one color from tokens.ts to the screen',
                o: 'M'
            }
        ],
        tips: 'Type every example out; never paste code you can’t explain. Blocked > 30 min after honestly trying? Write down what you tried, then ask in the team chat. Every setup problem goes into the local-env recipe.'
    },
    {
        n: '0',
        title: 'Foundations & project setup',
        badge: 'done',
        track: 'A',
        goal: 'Running Expo + TS app (device and browser), clean repo, lint/format wired, toolchain pinned.',
        learn: [
            ['Expo tutorial', 'https://docs.expo.dev/tutorial/introduction/'],
            ['Expo Router', 'https://docs.expo.dev/router/introduction/'],
            ['Expo on web', 'https://docs.expo.dev/workflow/web/']
        ],
        steps: [
            {
                id: 'p0-toolchain',
                t: 'Toolchain: Node, editor, Git',
                o: 'T',
                done: true
            },
            {
                id: 'p0-scaffold',
                t: 'Scaffold Expo app with TypeScript + Expo Router; runs in Expo Go',
                o: 'T',
                done: true
            },
            {
                id: 'p0-web',
                t: 'Same app runs in the browser (re-check web every phase)',
                o: 'T',
                done: true
            },
            {
                id: 'p0-git',
                t: 'Git init, .gitignore before first commit, GitHub repo pushed',
                o: 'T',
                done: true
            },
            {
                id: 'p0-lint',
                t: 'ESLint + Prettier + format-on-save + folder structure',
                o: 'T',
                done: true
            },
            {
                id: 'p0-pin',
                t: 'Pin the toolchain: engines + engine-strict + .editorconfig',
                o: 'T',
                done: true
            }
        ],
        tips: 'Web bugs are far cheaper caught early than after 8 phases of mobile-only assumptions.'
    },
    {
        n: '1',
        title: 'DevOps foundations (was 0.7)',
        badge: 'partial',
        track: 'A',
        goal: 'Local backend parity, versioned migrations, secrets hygiene, automated checks. Done across PRs #3–#9 — plus the team leftovers below.',
        learn: [
            [
                'Branch protection',
                'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches'
            ],
            ['Husky', 'https://typicode.github.io/husky/'],
            ['lint-staged', 'https://github.com/lint-staged/lint-staged#readme']
        ],
        steps: [
            {
                id: 'p1-supabase',
                t: 'Supabase local stack (Docker + CLI)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-migrations',
                t: 'Versioned migrations workflow (plumbing only — real schema is Phase 3)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-env',
                t: 'Env management (.env git-ignored, .env.example committed)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-hooks-setup',
                t: 'Husky pre-commit + commitlint (Conventional Commits enforced)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-ci',
                t: 'CI on pushes and PRs (lint, prettier, typecheck)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-make',
                t: 'Task scripts (Makefile)',
                o: 'T',
                done: true
            },
            {
                id: 'p1-templates',
                t: 'Issue + PR templates',
                o: 'T',
                done: true
            },
            {
                id: 'p1-dummies',
                t: 'Dummy migrations deleted',
                o: 'T',
                done: true
            },
            {
                id: 'p1-collab',
                t: 'Add Dragos and Marcian as repo collaborators',
                o: 'T'
            },
            {
                id: 'p1-protect',
                t: 'Branch protection on main: require the CI check AND one approving review',
                o: 'T'
            },
            {
                id: 'p1-hooks',
                t: 'Fix the git hooks + npm scripts: pre-commit rewrites commit-msg and never runs lint-staged; the format and reset-project scripts are broken',
                o: 'T',
                c: 'fix(devops): run lint-staged in pre-commit and fix npm scripts'
            }
        ],
        tips: 'The stray supabase/snippets SQL file is Dragos’s practice PR (Phase O). Branch protection is what turns “someone else reviews” from a promise into a rule.'
    },
    {
        n: '2',
        title: 'Design system & theming (was 0.5)',
        badge: 'now',
        track: 'A',
        goal: 'Tokens, light/dark/system themes, and base components before any feature screen — plus the first two recipes: base component and new screen.',
        learn: [
            [
                'Expo color themes',
                'https://docs.expo.dev/develop/user-interface/color-themes/'
            ],
            ['useColorScheme', 'https://reactnative.dev/docs/usecolorscheme'],
            [
                'React Context',
                'https://react.dev/learn/passing-data-deeply-with-context'
            ],
            [
                'React Navigation theming',
                'https://reactnavigation.org/docs/themes/'
            ],
            [
                'Expo fonts',
                'https://docs.expo.dev/develop/user-interface/fonts/'
            ],
            ['Pressable', 'https://reactnative.dev/docs/pressable'],
            [
                'Safe areas',
                'https://docs.expo.dev/develop/user-interface/safe-areas/'
            ],
            [
                'AsyncStorage',
                'https://docs.expo.dev/versions/latest/sdk/async-storage/'
            ],
            [
                'Splash screen',
                'https://docs.expo.dev/versions/latest/sdk/splash-screen/'
            ]
        ],
        steps: [
            {
                id: 'p2-tokens',
                t: 'Design tokens from DESIGN.md (palettes, spacing, type scale, radii) + Inter fonts',
                o: 'T',
                c: 'feat(theme): add light and dark design tokens',
                done: true
            },
            {
                id: 'p2-provider',
                t: 'Theme provider reading the device scheme; modes light / dark / system',
                o: 'T',
                c: 'feat(theme): add theme provider with system, light, and dark modes',
                done: true
            },
            {
                id: 'p2-persist',
                t: 'Persist the choice via AsyncStorage',
                o: 'T',
                c: 'feat(theme): persist user theme preference',
                done: true
            },
            {
                id: 'p2-wip',
                t: 'Commit and push the July base-component WIP (it only exists on Teo’s disk)',
                o: 'T'
            },
            {
                id: 'p2-fix',
                t: 'Fix the theme provider: first launch (null) → system; toggle from the theme actually shown; System / Light / Dark all selectable; no startup flash',
                o: 'T',
                c: 'fix(theme): default to system mode and support three-way selection'
            },
            {
                id: 'p2-components',
                t: 'Base components Screen, AppText, Button (primary / tinted / plain), Card — generic, typed props, tokens only',
                o: 'T',
                c: 'feat(ui): add themed base components'
            },
            {
                id: 'p2-recipe',
                t: 'Recipe: base component',
                o: 'T',
                k: 'recipe',
                c: 'docs(playbook): add base component recipe'
            },
            {
                id: 'p2-input',
                t: 'Input (DESIGN.md §5) from the base-component recipe — Dragos’s first real PR',
                o: 'D',
                k: 'replica',
                c: 'feat(ui): add themed input component'
            },
            {
                id: 'p2-gallery',
                t: 'Component gallery screen (every base component, both themes) + the new-screen recipe',
                o: 'D',
                k: 'recipe',
                c: 'feat(ui): add component gallery screen'
            },
            {
                id: 'p2-toggle',
                t: 'Theme toggle as a segmented control (System / Light / Dark) + themed header and status bar',
                o: 'T',
                c: 'feat(ui): add theme toggle and themed navigation chrome'
            },
            {
                id: 'p2-avatar',
                t: 'Avatar (initials in a circle, avatar tokens) from the base-component recipe — Marcian’s first real PR (can land after the merge)',
                o: 'M',
                k: 'replica',
                c: 'feat(ui): add avatar component'
            },
            {
                id: 'p2-verify',
                t: 'Verify both themes on a phone AND on web; flipping the OS theme updates live',
                o: 'ALL'
            },
            {
                id: 'p2-teach',
                t: 'Teach-back — Dragos: token → provider → useContext → component, no notes · Marcian: one color from tokens.ts to the screen',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: 'Merge the docs PR (docs/team-roadmap) first; when you merge main into the feature branch, take main’s version of docs/. Check contrast in both themes. Comparing theme === dark_theme is identity, not meaning — expose the resolved scheme from the context.'
    },
    {
        n: '3',
        title: 'Backend schema — Supabase (was 1)',
        badge: '',
        track: 'A',
        goal: 'Real schema as migrations, RLS on everything, app talking to Supabase securely. Recipes: table + migration + RLS, and regenerate types.',
        learn: [
            ['SQLBolt (D: 1–12 · M: 1–6)', 'https://sqlbolt.com/'],
            [
                'Supabase with Expo',
                'https://docs.expo.dev/guides/using-supabase/'
            ],
            [
                'Tables & relationships',
                'https://supabase.com/docs/guides/database/tables'
            ],
            [
                'RLS',
                'https://supabase.com/docs/guides/database/postgres/row-level-security'
            ],
            [
                'Migrations with the CLI',
                'https://supabase.com/docs/guides/deployment/database-migrations'
            ],
            [
                'Generating TS types',
                'https://supabase.com/docs/guides/api/rest/generating-types'
            ],
            [
                'expo-secure-store',
                'https://docs.expo.dev/versions/latest/sdk/securestore/'
            ]
        ],
        steps: [
            {
                id: 'p3-project',
                t: 'Create the hosted Supabase project; save URL + publishable key; share them via a password manager',
                o: 'T'
            },
            {
                id: 'p3-sketch',
                t: 'Sketch the full data model in dbdiagram.io (~1.5 h call, driver rotates); commit the diagram',
                o: 'ALL',
                k: 'together',
                c: 'docs: add data model diagram'
            },
            {
                id: 'p3-parties',
                t: 'parties + party_members tables with RLS + the table-migration-RLS recipe',
                o: 'T',
                k: 'recipe',
                c: 'feat(db): add parties and roster tables with rls'
            },
            {
                id: 'p3-profiles',
                t: 'profiles table + RLS from the table recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(db): add profiles table with rls'
            },
            {
                id: 'p3-nights',
                t: 'game_nights, games, game_results tables + RLS',
                o: 'T',
                c: 'feat(db): add game night and result tables with rls'
            },
            {
                id: 'p3-client',
                t: 'Supabase client via EXPO_PUBLIC_* + secure session storage + a “how the app talks to Supabase” note',
                o: 'T',
                c: 'feat(api): add supabase client with secure session storage'
            },
            {
                id: 'p3-types',
                t: 'Generate TypeScript types from the schema + the regenerate-types recipe',
                o: 'D',
                k: 'recipe',
                c: 'chore(db): generate typescript types from schema'
            },
            {
                id: 'p3-column',
                t: 'Add profiles.avatar_color with a migration, then regenerate types — from both recipes',
                o: 'M',
                k: 'replica',
                c: 'feat(db): add avatar color to profiles'
            },
            {
                id: 'p3-teach',
                t: 'Teach-back — Dragos: RLS + one of Teo’s policies · Marcian: what a migration is, using his own · Teo: migration → local → hosted',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: 'Develop against the local stack; apply migrations to hosted when a phase merges. RLS on every table — the publishable key would otherwise expose everything.'
    },
    {
        n: '4',
        title: 'Authentication (was 2)',
        badge: 'tag v0.1.0',
        track: 'A',
        goal: 'Sign up / log in / log out; profile row auto-created; inner screens gated. Recipes: form, database trigger.',
        learn: [
            [
                'Supabase Auth in RN',
                'https://supabase.com/docs/guides/auth/quickstarts/react-native'
            ],
            [
                'Expo Router protected routes',
                'https://docs.expo.dev/router/advanced/authentication/'
            ],
            [
                'Managing user data',
                'https://supabase.com/docs/guides/auth/managing-user-data'
            ],
            ['React Hook Form', 'https://react-hook-form.com/get-started'],
            ['Zod', 'https://zod.dev/']
        ],
        steps: [
            {
                id: 'p4-guard',
                t: 'Auth-state provider + route guards; session restore without a login-screen flash',
                o: 'T',
                c: 'feat(auth): guard app routes by session state'
            },
            {
                id: 'p4-trigger',
                t: 'Profile row on signup via a database trigger + the trigger recipe',
                o: 'T',
                k: 'recipe',
                c: 'feat(auth): create profile on sign up'
            },
            {
                id: 'p4-screens',
                t: 'Sign-up + login screens (DESIGN.md §7) with React Hook Form + Zod + the form recipe',
                o: 'D',
                k: 'recipe',
                c: 'feat(auth): add email/password sign up and login'
            },
            {
                id: 'p4-settings',
                t: 'Settings screen — theme toggle + log out — from the new-screen recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(settings): add settings screen with theme and logout'
            },
            {
                id: 'p4-verify',
                t: 'Verify on a phone AND web; the session survives an app restart',
                o: 'ALL'
            },
            {
                id: 'p4-teach',
                t: 'Teach-back — Dragos: the session lifecycle · Marcian: what happens when you press Log out · Teo: the signup trigger',
                o: 'ALL',
                k: 'teach'
            },
            {
                id: 'p4-bus',
                t: 'Bus-factor check: three random files, each explained by someone who didn’t write it — then tag v0.1.0',
                o: 'ALL'
            }
        ],
        tips: 'First milestone. The trigger recipe is written for Dragos — he uses it for the roster lock next phase.'
    },
    {
        n: '5',
        title: 'Parties & the immutable roster (was 3)',
        badge: '',
        track: 'A',
        goal: 'Create a party (name + locked roster), list parties, view details. Recipes: load & show data, database test.',
        learn: [
            [
                'Triggers',
                'https://supabase.com/docs/guides/database/postgres/triggers'
            ],
            [
                'TanStack Query',
                'https://tanstack.com/query/latest/docs/framework/react/overview'
            ],
            [
                'Mutations',
                'https://tanstack.com/query/latest/docs/framework/react/guides/mutations'
            ],
            [
                'Testing your database',
                'https://supabase.com/docs/guides/database/testing'
            ]
        ],
        steps: [
            {
                id: 'p5-design',
                t: 'Roster-lock design session (~1.5 h): when it locks, what is rejected, what the UI shows',
                o: 'ALL',
                k: 'together'
            },
            {
                id: 'p5-list',
                t: '“My parties” list with TanStack Query + the load-data recipe',
                o: 'T',
                k: 'recipe',
                c: 'feat(party): list my parties'
            },
            {
                id: 'p5-create',
                t: 'Create-party form (just a name) from the form recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(party): add create-party form'
            },
            {
                id: 'p5-players',
                t: 'Add players at creation (pick existing users; ≥ 2 players)',
                o: 'D',
                c: 'feat(party): add players to a new party'
            },
            {
                id: 'p5-lock',
                t: 'Roster lock in the database — locked + trigger + RLS — from the trigger recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(db): lock party roster with a trigger'
            },
            {
                id: 'p5-locktest',
                t: 'Prove the lock: a direct API insert is rejected by Postgres, run in CI + the db-test recipe',
                o: 'T',
                k: 'recipe',
                c: 'test(db): prove the roster lock rejects changes'
            },
            {
                id: 'p5-detail',
                t: 'Party detail screen from the load-data recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(party): show party details'
            },
            {
                id: 'p5-teach',
                t: 'Teach-back — Marcian: why the lock lives in the database · Dragos: his trigger line by line · Teo: TanStack Query caching',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: 'This is why the app exists — the lock must be a real guarantee, not a disabled button. One person writes it, another proves it.'
    },
    {
        n: '6',
        title: 'Game nights & scoring (was 4)',
        badge: 'tag v0.2.0',
        track: 'A',
        goal: 'Run a game night inside a party, record per-player scores, see who’s winning. Recipe: pure function + unit test.',
        learn: [
            ['Jest in Expo', 'https://docs.expo.dev/develop/unit-testing/'],
            [
                'Supabase joins & nesting',
                'https://supabase.com/docs/guides/database/joins-and-nesting'
            ],
            [
                'Expo date/time picker',
                'https://docs.expo.dev/versions/latest/sdk/date-time-picker/'
            ]
        ],
        steps: [
            {
                id: 'p6-rules',
                t: 'Scoring rules session: win per archetype, night winner, ties, missing scores → docs/SCORING.md',
                o: 'ALL',
                k: 'together',
                c: 'docs: define scoring and win rules'
            },
            {
                id: 'p6-night',
                t: 'New game night form (date/time, location, planned games) from the form recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(gamenight): create a game night within a party'
            },
            {
                id: 'p6-game',
                t: 'Add a played game to the night (typed name for now) from the form recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(gamenight): add a played game to a night'
            },
            {
                id: 'p6-jest',
                t: 'Set up Jest, add test to CI, cover the first pure function + the unit-test recipe',
                o: 'T',
                k: 'recipe',
                c: 'test: set up jest and run tests in ci'
            },
            {
                id: 'p6-generic',
                t: 'Generic score entry (one number per player) + winner as a tested pure function',
                o: 'D',
                k: 'replica',
                c: 'feat(scoring): record per-player scores for a game'
            },
            {
                id: 'p6-schema',
                t: 'Schema-driven entry: inputs from the scoring schema, winner per archetype, structured results',
                o: 'T',
                c: "feat(scoring): render score entry from the game's schema"
            },
            {
                id: 'p6-tests',
                t: 'Unit tests for Teo’s archetype winner functions, from the unit-test recipe',
                o: 'M',
                k: 'replica',
                c: 'test(scoring): cover archetype winner rules'
            },
            {
                id: 'p6-board',
                t: 'Live game-night leaderboard from the load-data recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(scoring): show game-night leaderboard'
            },
            {
                id: 'p6-teach',
                t: 'Teach-back — Marcian: the night flow · Dragos: archetype → inputs → winner · Teo: the leaderboard query',
                o: 'ALL',
                k: 'teach'
            },
            {
                id: 'p6-bus',
                t: 'Bus-factor check — then tag v0.2.0',
                o: 'ALL'
            }
        ],
        tips: 'Playable MVP. Scoring logic is the highest-risk code: pure functions, tested by someone other than the author; only the host enters scores (RLS).'
    },
    {
        n: '7',
        title: 'Stats & win rates (was 5)',
        badge: '',
        track: 'A',
        goal: 'Win rates overall, per party, per game, head-to-head — the math lives in the database. Recipes: seed data, SQL view / RPC.',
        learn: [
            [
                'Postgres aggregates',
                'https://www.postgresql.org/docs/current/functions-aggregate.html'
            ],
            [
                'Views',
                'https://www.postgresql.org/docs/current/sql-createview.html'
            ],
            [
                'DB functions (RPC)',
                'https://supabase.com/docs/guides/database/functions'
            ],
            [
                'Seeding your database',
                'https://supabase.com/docs/guides/local-development/seeding-your-database'
            ]
        ],
        steps: [
            {
                id: 'p7-seed',
                t: 'Seed dataset with hand-computed answers + the seed recipe',
                o: 'T',
                k: 'recipe',
                c: 'chore(db): add seed dataset with known stats'
            },
            {
                id: 'p7-ties',
                t: 'Add tie and missing-score scenarios to the seed, with expected answers',
                o: 'M',
                k: 'replica',
                c: 'chore(db): add tie scenarios to seed data'
            },
            {
                id: 'p7-global',
                t: 'Global win-rate view + the SQL view recipe',
                o: 'D',
                k: 'recipe',
                c: 'feat(stats): compute global win rate'
            },
            {
                id: 'p7-played',
                t: 'Games-played-per-player view from the SQL view recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(stats): count games played per player'
            },
            {
                id: 'p7-breakdown',
                t: 'Per-game and per-party win rates from the SQL view recipe',
                o: 'T',
                k: 'replica',
                c: 'feat(stats): add per-game and per-party win rates'
            },
            {
                id: 'p7-h2h',
                t: 'Head-to-head stats between players',
                o: 'T',
                c: 'feat(stats): add head-to-head stats between players'
            },
            {
                id: 'p7-screens',
                t: 'Stats screens from the load-data recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(stats): add stats screens'
            },
            {
                id: 'p7-verify',
                t: 'Verify every stat on screen by hand against the seed’s known answers',
                o: 'M'
            },
            {
                id: 'p7-teach',
                t: 'Teach-back — Marcian: one aggregate query line by line · Dragos: the head-to-head SQL · Teo: Dragos’s view',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: 'One source of truth (a view/RPC) so every screen agrees. Tie and missing-score handling comes from docs/SCORING.md.'
    },
    {
        n: '8',
        title: 'Board-game catalog (was 6) — pre-work exists',
        badge: 'tag v0.3.0',
        track: 'A',
        goal: 'Searchable, filterable catalog: BGG + custom games, with scoring schemas. docs/scripts/ already has games_schema.sql and the Python BGG importer. Recipes: BGG import, external API + caching.',
        learn: [
            [
                'BGG XML API2',
                'https://boardgamegeek.com/wiki/page/BGG_XML_API2'
            ],
            [
                'fast-xml-parser',
                'https://github.com/NaturalIntelligence/fast-xml-parser'
            ],
            ['FlatList', 'https://reactnative.dev/docs/flatlist'],
            [
                'Debouncing',
                'https://developer.mozilla.org/en-US/docs/Glossary/Debounce'
            ]
        ],
        steps: [
            {
                id: 'p8-import',
                t: 'Games migration from games_schema.sql + run the Python import + the import recipe',
                o: 'D',
                k: 'recipe',
                c: 'feat(catalog): add games schema migration and bgg import'
            },
            {
                id: 'p8-rerun',
                t: 'Re-run the import on your own machine from the recipe only; fix what was unclear',
                o: 'M',
                k: 'replica',
                c: 'docs(playbook): clarify bgg import recipe'
            },
            {
                id: 'p8-search',
                t: 'Live BGG search + caching (respect rate limits) + the external-API recipe',
                o: 'T',
                k: 'recipe',
                c: 'feat(catalog): integrate boardgamegeek search with caching'
            },
            {
                id: 'p8-list',
                t: 'Catalog list UI: FlatList + debounced search + filters (type, player count, difficulty)',
                o: 'D',
                c: 'feat(catalog): add catalog search bar and filters'
            },
            {
                id: 'p8-custom',
                t: 'Custom (non-BGG) game form from the form recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(catalog): add custom user-created games'
            },
            {
                id: 'p8-picker',
                t: 'Wire the catalog into the game picker',
                o: 'TD',
                c: 'feat(catalog): select catalog games when scoring'
            },
            {
                id: 'p8-archetypes',
                t: 'Game detail + scoring schemas: ~10 archetypes + mechanic-based default classifier',
                o: 'T',
                c: 'feat(catalog): add scoring archetypes and mechanic-based defaults'
            },
            {
                id: 'p8-llm',
                t: 'Offline batch LLM enrichment, cached as JSON; hand-curate the top ~100; hosts can override',
                o: 'T',
                c: 'feat(catalog): generate detailed scoring schemas (cached)'
            },
            {
                id: 'p8-teach',
                t: 'Teach-back — Dragos: caching + rate limits · Marcian: BGG → our table · Teo: the player-count SQL rule',
                o: 'ALL',
                k: 'teach'
            },
            {
                id: 'p8-bus',
                t: 'Bus-factor check — then tag v0.3.0',
                o: 'ALL'
            }
        ],
        tips: 'Debounce search; never block the UI on BGG being slow; score entry only reads a stored schema, never calls the AI. Mock BGG in tests.'
    },
    {
        n: '9',
        title: 'Testing, polish, web & release (was 10)',
        badge: 'tag v1.0.0',
        track: 'A',
        goal: 'Tested, polished, deployed — and anyone can ship a release. Recipes: UI states, E2E flow, build & release.',
        learn: [
            [
                'RN Testing Library',
                'https://callstack.github.io/react-native-testing-library/'
            ],
            ['Maestro', 'https://docs.maestro.dev/'],
            ['EAS Build', 'https://docs.expo.dev/build/introduction/'],
            ['EAS Hosting', 'https://docs.expo.dev/eas/hosting/introduction/']
        ],
        steps: [
            {
                id: 'p9-unit',
                t: 'Test top-up: each person adds tests for code someone else wrote',
                o: 'ALL',
                c: 'test: cover scoring and win-rate logic'
            },
            {
                id: 'p9-dbtest',
                t: 'Database test for one RLS policy (a non-member can’t see a party), from the db-test recipe',
                o: 'M',
                k: 'replica',
                c: 'test(db): cover party visibility policy'
            },
            {
                id: 'p9-states',
                t: 'Loading / empty / error states on screens you didn’t build + the UI-states recipe',
                o: 'D',
                k: 'recipe',
                c: 'fix(ui): add loading, empty, and error states'
            },
            {
                id: 'p9-states2',
                t: 'States on the remaining screens, from the UI-states recipe',
                o: 'M',
                k: 'replica',
                c: 'fix(ui): add states to remaining screens'
            },
            {
                id: 'p9-e2e',
                t: 'Maestro happy path (sign in → create party → record a score) + the E2E recipe',
                o: 'T',
                k: 'recipe',
                c: 'test(e2e): add core user-journey flow'
            },
            {
                id: 'p9-e2e2',
                t: 'Second E2E flow (sign up → log out → log in) from the E2E recipe',
                o: 'D',
                k: 'replica',
                c: 'test(e2e): add auth round-trip flow'
            },
            {
                id: 'p9-ship',
                t: 'Mobile build + web deploy + the release recipe',
                o: 'T',
                k: 'recipe',
                c: 'chore: configure builds and web deploy'
            },
            {
                id: 'p9-dry-d',
                t: 'Release dry-run, solo, from the release recipe — nobody helps',
                o: 'D',
                k: 'replica'
            },
            {
                id: 'p9-dry-m',
                t: 'Web-deploy dry-run, solo, from the release recipe',
                o: 'M',
                k: 'replica'
            },
            {
                id: 'p9-teach',
                t: 'Whole-app teach-back: each explains one screen, one table, and one test they didn’t write',
                o: 'ALL',
                k: 'teach'
            },
            {
                id: 'p9-bus',
                t: 'Bus-factor check + skills matrix review (every cell at least U?) — then tag v1.0.0',
                o: 'ALL'
            }
        ],
        tips: 'Shipped. 🎉 After this phase, any of the three can ship a release alone.'
    },
    {
        n: '10',
        title: 'Friends system (was 7) → v1.1.0',
        badge: 'trackb',
        track: 'B',
        goal: 'Requests → friends list → friend profile with head-to-head → invite party players from friends. Store a friendship once, query both directions.',
        learn: [
            [
                'Many-to-many modeling',
                'https://supabase.com/docs/guides/database/joins-and-nesting'
            ]
        ],
        steps: [
            {
                id: 'p10-schema',
                t: 'Friendships schema + RLS + a database test proving a non-friend can’t see data',
                o: 'D',
                k: 'replica',
                c: 'feat(db): add friendships with rls'
            },
            {
                id: 'p10-req',
                t: 'Send / accept / decline friend requests',
                o: 'T',
                c: 'feat(friends): send and respond to friend requests'
            },
            {
                id: 'p10-list',
                t: 'Friends list + friend profile with head-to-head, from the load-data recipe',
                o: 'M',
                k: 'replica',
                c: 'feat(friends): add friends list and profile'
            },
            {
                id: 'p10-invite',
                t: 'Invite party players from the friends list',
                o: 'T',
                c: 'feat(party): invite players from friends list'
            },
            {
                id: 'p10-teach',
                t: 'Teach-back: the store-once, query-both-directions friendship model',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: ''
    },
    {
        n: '11',
        title: 'Realtime chat (was 8) → v1.2.0',
        badge: 'trackb',
        track: 'B',
        goal: 'Messages table + RLS → 1:1 conversation → realtime inserts. Unsubscribe on unmount; optimistic send.',
        learn: [
            ['Supabase Realtime', 'https://supabase.com/docs/guides/realtime'],
            [
                'Postgres Changes',
                'https://supabase.com/docs/guides/realtime/postgres-changes'
            ],
            [
                'Inverted FlatList',
                'https://reactnative.dev/docs/flatlist#inverted'
            ]
        ],
        steps: [
            {
                id: 'p11-schema',
                t: 'Messages schema + policies — Marcian’s first solo schema',
                o: 'M',
                k: 'replica',
                c: 'feat(chat): add messages schema and policies'
            },
            {
                id: 'p11-screen',
                t: 'Direct-message conversation screen',
                o: 'D',
                c: 'feat(chat): add direct message conversation screen'
            },
            {
                id: 'p11-realtime',
                t: 'Stream new messages in realtime (subscribe/unsubscribe, optimistic send) + the realtime recipe',
                o: 'T',
                k: 'recipe',
                c: 'feat(chat): stream new messages in realtime'
            },
            {
                id: 'p11-live',
                t: 'Live game-night leaderboard from the realtime recipe',
                o: 'D',
                k: 'replica',
                c: 'feat(scoring): update leaderboard in realtime'
            },
            {
                id: 'p11-teach',
                t: 'Teach-back: the subscription lifecycle — explained by Marcian',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: ''
    },
    {
        n: '12',
        title: 'Push notifications (was 9) → v1.3.0',
        badge: 'trackb',
        track: 'B',
        goal: 'Development build → push tokens → Edge Functions send pushes (server-side only) → deep links. Expo Go can’t receive Android push since SDK 53.',
        learn: [
            ['Expo push', 'https://docs.expo.dev/push-notifications/overview/'],
            ['Edge Functions', 'https://supabase.com/docs/guides/functions'],
            [
                'Development builds',
                'https://docs.expo.dev/develop/development-builds/introduction/'
            ]
        ],
        steps: [
            {
                id: 'p12-devbuild',
                t: 'Development build configuration (added to the release recipe)',
                o: 'T',
                c: 'chore: add development build configuration'
            },
            {
                id: 'p12-tokens',
                t: 'Register and store push tokens',
                o: 'M',
                c: 'feat(notifications): register and store push tokens'
            },
            {
                id: 'p12-edge',
                t: 'Edge Function: push on party invite + the Edge Function recipe',
                o: 'D',
                k: 'recipe',
                c: 'feat(notifications): send push on party invite'
            },
            {
                id: 'p12-edge2',
                t: 'Edge Function: notify the party about a new game night, from the recipe',
                o: 'T',
                k: 'replica',
                c: 'feat(notifications): notify players about new game nights'
            },
            {
                id: 'p12-deeplink',
                t: 'Deep-link from notification taps',
                o: 'D',
                c: 'feat(notifications): deep-link from notification taps'
            },
            {
                id: 'p12-teach',
                t: 'Teach-back: why push sending lives server-side — explained by Marcian',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: ''
    },
    {
        n: '13',
        title: 'CI/CD & automation (was 11) → v1.4.0',
        badge: 'trackb',
        track: 'B',
        goal: 'Pipelines everyone can read and change: migrations in CI, web deploy, EAS builds, prod migrations, security scanning, Sentry, changelog.',
        learn: [
            [
                'Actions quickstart',
                'https://docs.github.com/en/actions/quickstart'
            ],
            [
                'Expo on CI',
                'https://docs.expo.dev/build-reference/build-on-ci/'
            ],
            [
                'Supabase environments',
                'https://supabase.com/docs/guides/deployment/managing-environments'
            ],
            ['Sentry RN', 'https://docs.sentry.io/platforms/react-native/']
        ],
        steps: [
            {
                id: 'p13-dbci',
                t: 'Pair on the first workflow — migrations against a disposable Postgres in CI (Marcian drives) + the CI-workflow recipe',
                o: 'TM',
                k: ['together', 'recipe'],
                c: 'ci: run database migrations against disposable postgres in ci'
            },
            {
                id: 'p13-webcd',
                t: 'Web deploy on merge + PR previews',
                o: 'D',
                k: 'replica',
                c: 'ci: build and deploy web on merge to main'
            },
            {
                id: 'p13-eas',
                t: 'EAS build on release tags',
                o: 'M',
                k: 'replica',
                c: 'ci: trigger eas build on release tags'
            },
            {
                id: 'p13-dbdeploy',
                t: 'Apply migrations to production on release',
                o: 'T',
                c: 'ci: apply supabase migrations to production on release'
            },
            {
                id: 'p13-security',
                t: 'Dependabot + secret scanning + CodeQL',
                o: 'D',
                c: 'chore(security): enable dependabot, secret scanning, and code scanning'
            },
            {
                id: 'p13-sentry',
                t: 'Sentry error monitoring with sourcemaps',
                o: 'T',
                c: 'feat(observability): add sentry error monitoring with sourcemaps'
            },
            {
                id: 'p13-badges',
                t: 'CI badges + automated changelog from Conventional Commits',
                o: 'M',
                k: 'replica',
                c: 'docs: add ci badges and automated changelog'
            },
            {
                id: 'p13-teach',
                t: 'Final teach-back: each explains a pipeline someone else wrote · skills matrix: every cell R or better?',
                o: 'ALL',
                k: 'teach'
            }
        ],
        tips: ''
    }
];

// The skills matrix: one row per kind of work (= one playbook recipe).
// Levels: U understand (can explain a real example) · R replicated it from the recipe · O own it (can do it without the recipe and teach it).
const SKILLS = [
    {
        id: 'git-pr-flow',
        name: 'Branch → commit → PR → review → merge',
        by: 'written with v4',
        recipe: 'playbook/git-pr-flow.md'
    },
    {
        id: 'local-env',
        name: 'Run & fix the local dev environment',
        by: 'Teo · O'
    },
    { id: 'base-component', name: 'Base component', by: 'Teo · 2' },
    { id: 'new-screen', name: 'New screen / route', by: 'Dragos · 2' },
    { id: 'db-table', name: 'Table + migration + RLS', by: 'Teo · 3' },
    { id: 'db-types', name: 'Regenerate TypeScript types', by: 'Dragos · 3' },
    { id: 'form', name: 'Form that saves data', by: 'Dragos · 4' },
    { id: 'db-trigger', name: 'Database trigger', by: 'Teo · 4' },
    { id: 'db-test', name: 'Database test (prove a rule)', by: 'Teo · 5' },
    {
        id: 'load-data',
        name: 'Load & show data (TanStack Query)',
        by: 'Teo · 5'
    },
    { id: 'unit-test', name: 'Pure function + unit test', by: 'Teo · 6' },
    { id: 'seed-data', name: 'Seed data with known answers', by: 'Teo · 7' },
    { id: 'sql-view', name: 'SQL view / RPC', by: 'Dragos · 7' },
    { id: 'bgg-import', name: 'BGG import (Python)', by: 'Dragos · 8' },
    { id: 'external-api', name: 'External API + caching', by: 'Teo · 8' },
    {
        id: 'ui-states',
        name: 'Loading / empty / error states',
        by: 'Dragos · 9'
    },
    { id: 'e2e-flow', name: 'E2E flow (Maestro)', by: 'Teo · 9' },
    { id: 'release', name: 'Build & release', by: 'Teo · 9' },
    { id: 'realtime', name: 'Realtime subscription', by: 'Teo · 11' },
    { id: 'edge-function', name: 'Edge Function', by: 'Dragos · 12' },
    { id: 'ci-workflow', name: 'CI workflow', by: 'Teo + Marcian · 13' }
];

// Matrix baseline from the repo history (2026-10-15). Saved clicks in the browser override it.
const SKILL_BASELINE = {
    'git-pr-flow': { T: 'O' },
    'local-env': { T: 'O' },
    'ci-workflow': { T: 'O' }
};
