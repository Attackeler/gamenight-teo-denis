/* eslint-disable */
'use strict';
// Gamenight roadmap — SHARED task data for all three trackers:
//   gamenight-roadmap.html (both) · gamenight-roadmap-teo.html · gamenight-roadmap-dragos.html
// Edit tasks HERE (and mirror the change in ROADMAP.md) — the HTML files are only views.
// Steps marked done:true are the repo baseline (audited from git history, incl. feat/phase-2-design-system).
const PHASES = [
    {
        n: 'D',
        title: 'Dragos’s on-ramp (parallel with Phase 2)',
        badge: 'next',
        track: 'A',
        goal: 'From “a bit of Python” to shipping reviewed PRs — ~3 weeks at ~15 h/week, while Teo finishes Phase 2. Full guide, links, and checkpoints: docs/ONBOARDING.md. SQL/Supabase learning comes attached to Phase 3.',
        learn: [
            ['ONBOARDING.md — the full guide', 'ONBOARDING.md'],
            [
                'MDN — JavaScript first steps',
                'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting'
            ],
            [
                'TypeScript in 5 minutes',
                'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html'
            ],
            ['React quick start', 'https://react.dev/learn'],
            [
                'React Native basics',
                'https://reactnative.dev/docs/getting-started'
            ],
            ['Expo Router', 'https://docs.expo.dev/router/introduction/'],
            [
                'GitHub Flow',
                'https://docs.github.com/en/get-started/using-github/github-flow'
            ],
            ['SQLBolt (before Phase 3)', 'https://sqlbolt.com/']
        ],
        steps: [
            {
                id: 'pd-setup',
                t: 'Machine setup end-to-end: Node 26 + npm 11, VS Code + extensions, Docker, clone, npm install, .env.local, local Supabase up, app on phone AND in browser (ONBOARDING §3)'
            },
            {
                id: 'pd-js',
                t: 'Week 1 — JavaScript coming from Python (arrow fns, destructuring, map/filter, async/await) + git basics; practice PR opened and merged'
            },
            {
                id: 'pd-ts',
                t: 'Week 2 — TypeScript + React; checkpoint: explain src/theme/ThemeProvider.tsx to Teo line by line'
            },
            {
                id: 'pd-rn',
                t: 'Week 3 — React Native + Expo Router; checkpoint: how a file in app/ becomes a screen, what _layout.tsx does'
            },
            {
                id: 'pd-firstpr',
                t: 'First real PR: themed Input component from DESIGN.md tokens + gallery entry; iterate on Teo’s review until merged',
                c: 'feat(ui): add themed input component'
            }
        ],
        tips: 'Type every example out; never paste code you don’t understand. Blocked >30 min after honestly trying? Write down what you tried and ask Teo — asking with notes is a skill.'
    },
    {
        n: '0',
        title: 'Foundations & project setup',
        badge: 'done',
        track: 'A',
        goal: 'Running Expo + TS app (device and browser), clean repo, lint/format wired.',
        learn: [
            ['Expo tutorial', 'https://docs.expo.dev/tutorial/introduction/'],
            ['Expo Router', 'https://docs.expo.dev/router/introduction/'],
            ['Expo on web', 'https://docs.expo.dev/workflow/web/'],
            ['EditorConfig', 'https://editorconfig.org/'],
            [
                'engines in package.json',
                'https://docs.npmjs.com/cli/v11/configuring-npm/package-json#engines'
            ]
        ],
        steps: [
            {
                id: 'p0-toolchain',
                t: 'Toolchain: Node LTS, editor, Git',
                done: true
            },
            {
                id: 'p0-scaffold',
                t: 'Scaffold Expo app with TypeScript + Expo Router; runs in Expo Go',
                c: 'chore: scaffold expo app with typescript and expo router',
                done: true
            },
            {
                id: 'p0-web',
                t: 'Same app runs in the browser (re-check web every phase)',
                done: true
            },
            {
                id: 'p0-git',
                t: 'Git init, .gitignore before first commit, GitHub repo pushed',
                c: 'chore: add gitignore and project metadata',
                done: true
            },
            {
                id: 'p0-lint',
                t: 'ESLint + Prettier + format-on-save + folder structure',
                c: 'chore: configure eslint, prettier, and project structure',
                done: true
            },
            {
                id: 'p0-pin',
                t: 'Pin the toolchain: .nvmrc (or Volta) + .editorconfig',
                c: 'chore: pin node version and add editorconfig',
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
        goal: 'Local backend parity, versioned migrations, secrets hygiene, automated checks. Done across PRs #3–#9 except the two-person leftovers below.',
        learn: [
            [
                'Supabase local dev',
                'https://supabase.com/docs/guides/local-development'
            ],
            ['Husky', 'https://typicode.github.io/husky/'],
            [
                'Branch protection',
                'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches'
            ],
            [
                'Issue/PR templates',
                'https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests'
            ]
        ],
        steps: [
            {
                id: 'p1-docker',
                t: 'Supabase stack locally via CLI + Docker',
                c: 'chore(devops): run supabase locally via cli and docker',
                done: true
            },
            {
                id: 'p1-migr',
                t: 'Versioned migrations workflow (plumbing)',
                c: 'chore(db): set up versioned migrations workflow',
                done: true
            },
            {
                id: 'p1-env',
                t: '.env git-ignored + .env.example committed (EXPO_PUBLIC_* split)',
                c: 'chore(devops): add env example and document configuration',
                done: true
            },
            {
                id: 'p1-husky',
                t: 'Husky + lint-staged pre-commit hooks',
                c: 'chore(devops): add husky pre-commit hooks with lint-staged',
                done: true
            },
            {
                id: 'p1-commitlint',
                t: 'commitlint enforcing Conventional Commits',
                c: 'chore(devops): enforce conventional commits with commitlint',
                done: true
            },
            {
                id: 'p1-ci',
                t: 'CI on PRs: lint, typecheck, test',
                c: 'ci: add lint, typecheck, and test on pull requests',
                done: true
            },
            {
                id: 'p1-make',
                t: 'Task scripts (Makefile)',
                c: 'chore(devops): add task scripts for common workflows',
                done: true
            },
            {
                id: 'p1-collab',
                t: 'NEW — add Dragos as a GitHub collaborator on the repo'
            },
            {
                id: 'p1-protect',
                t: 'LEFTOVER — branch protection on main: require the CI check + one approving review (makes cross-review structural)'
            },
            {
                id: 'p1-templates',
                t: 'LEFTOVER — issue + PR templates (bug / feature / chore); GitHub Issues replace the old team board',
                c: 'chore(devops): add issue and pr templates',
                done: true
            },
            {
                id: 'p1-dummy',
                t: 'LEFTOVER — delete the two dummy migrations before Phase 3',
                c: 'chore(db): remove dummy migrations',
                done: true
            }
        ],
        tips: 'Docker is for the backend and CI, not the app itself. Goal: local = CI = prod.'
    },
    {
        n: '2',
        title: 'Design system & theming (was 0.5)',
        badge: 'now',
        track: 'A',
        goal: 'Tokens + light/dark/system themes + base components, BEFORE any feature screens.',
        learn: [
            [
                'Expo color themes',
                'https://docs.expo.dev/develop/user-interface/color-themes/'
            ],
            [
                'React Context (the provider mechanism)',
                'https://react.dev/learn/passing-data-deeply-with-context'
            ],
            ['useContext', 'https://react.dev/reference/react/useContext'],
            ['useColorScheme', 'https://reactnative.dev/docs/usecolorscheme'],
            ['Navigation theming', 'https://reactnavigation.org/docs/themes/'],
            [
                'Why tokens',
                'https://m3.material.io/styles/color/system/overview'
            ],
            [
                'Expo fonts',
                'https://docs.expo.dev/develop/user-interface/fonts/'
            ],
            ['StyleSheet', 'https://reactnative.dev/docs/stylesheet'],
            ['Pressable', 'https://reactnative.dev/docs/pressable'],
            [
                'Safe areas',
                'https://docs.expo.dev/develop/user-interface/safe-areas/'
            ],
            [
                'AsyncStorage (persist choice)',
                'https://docs.expo.dev/versions/latest/sdk/async-storage/'
            ]
        ],
        steps: [
            {
                id: 'p2-tokens',
                t: 'DESIGN.md → design tokens: light + dark palettes, spacing, type scale, radii (never a raw hex in a screen)',
                c: 'feat(theme): add light and dark design tokens',
                done: true
            },
            {
                id: 'p2-provider',
                t: 'Theme provider reading device scheme; modes light / dark / system',
                c: 'feat(theme): add theme provider with system, light, and dark modes',
                done: true
            },
            {
                id: 'p2-persist',
                t: 'Persist theme choice with AsyncStorage (default: system)',
                c: 'feat(theme): persist user theme preference',
                done: true
            },
            {
                id: 'p2-components',
                t: 'Base components: Screen, Text, Button, Card, Input + theme toggle',
                c: 'feat(ui): add themed base components and theme toggle'
            },
            {
                id: 'p2-gallery',
                t: 'Component gallery screen — every base component in both themes on one page, so styles can’t silently drift',
                c: 'feat(ui): add component gallery screen'
            },
            {
                id: 'p2-verify',
                t: 'Verify both themes on device + web; OS theme flip updates live'
            }
        ],
        tips: 'Check contrast in BOTH themes; status-bar style per theme. Pro: component-gallery screen.'
    },
    {
        n: '3',
        title: 'Backend schema — Supabase (was 1)',
        badge: '',
        track: 'A',
        goal: 'Real schema as migrations, RLS on every table, app connected securely.',
        learn: [
            ['Supabase + Expo', 'https://docs.expo.dev/guides/using-supabase/'],
            [
                'Expo quickstart',
                'https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native'
            ],
            ['Tables', 'https://supabase.com/docs/guides/database/tables'],
            [
                'RLS',
                'https://supabase.com/docs/guides/database/postgres/row-level-security'
            ],
            ['dbdiagram.io', 'https://dbdiagram.io'],
            [
                'Migrations with the CLI',
                'https://supabase.com/docs/guides/deployment/database-migrations'
            ],
            [
                'Generating TS types',
                'https://supabase.com/docs/guides/api/rest/generating-types'
            ],
            [
                'expo-secure-store (session)',
                'https://docs.expo.dev/versions/latest/sdk/securestore/'
            ]
        ],
        steps: [
            {
                id: 'p3-project',
                t: 'Create hosted Supabase project; save URL + publishable key (sb_publishable_…, never the secret one client-side)'
            },
            {
                id: 'p3-schema',
                t: 'Sketch model in dbdiagram.io, then write migrations: profiles, parties, roster, game nights, games, results',
                c: 'feat(db): add core schema for profiles, parties, and game nights'
            },
            {
                id: 'p3-rls',
                t: 'RLS ON for every table + policies (not optional!)',
                c: 'feat(db): enable row level security and access policies'
            },
            {
                id: 'p3-client',
                t: 'Supabase client via EXPO_PUBLIC_* env vars; secure session storage',
                c: 'feat(api): add supabase client with secure session storage'
            },
            {
                id: 'p3-types',
                t: 'Generate TypeScript types from schema',
                c: 'chore(db): generate typescript types from schema'
            }
        ],
        tips: 'Develop against the local stack; apply migrations to hosted when the phase merges.'
    },
    {
        n: '4',
        title: 'Authentication (was 2)',
        badge: 'tag v0.1.0',
        track: 'A',
        goal: 'Sign up / log in / log out; profile auto-created; inner routes gated.',
        learn: [
            [
                'Supabase Auth in RN',
                'https://supabase.com/docs/guides/auth/quickstarts/react-native'
            ],
            [
                'Full Expo tutorial',
                'https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native'
            ],
            [
                'Protected routes',
                'https://docs.expo.dev/router/advanced/authentication/'
            ],
            [
                'Managing user data (profile trigger)',
                'https://supabase.com/docs/guides/auth/managing-user-data'
            ]
        ],
        steps: [
            {
                id: 'p4-auth',
                t: 'Email + password sign-up, login, logout (with Phase 2 components)',
                c: 'feat(auth): add email/password sign up and login'
            },
            {
                id: 'p4-profile',
                t: 'Profile row on signup via database trigger',
                c: 'feat(auth): create profile on sign up'
            },
            {
                id: 'p4-guard',
                t: 'Auth provider + route guards; no login-screen flash while session restores',
                c: 'feat(auth): guard app routes by session state'
            },
            {
                id: 'p4-verify',
                t: 'Verify device + web; session survives restart → merge, TAG v0.1.0'
            }
        ],
        tips: 'Clear errors for wrong password / taken email. Never log tokens.'
    },
    {
        n: '5',
        title: 'Parties & the immutable roster (was 3)',
        badge: '',
        track: 'A',
        goal: 'Create a party (name + locked roster), list parties, view details. The heart of the app.',
        learn: [
            [
                'Postgres triggers',
                'https://supabase.com/docs/guides/database/postgres/triggers'
            ],
            ['React Hook Form', 'https://react-hook-form.com/get-started'],
            ['Zod', 'https://zod.dev/'],
            [
                'Insert/select data',
                'https://supabase.com/docs/reference/javascript/insert'
            ]
        ],
        steps: [
            {
                id: 'p5-create',
                t: 'Create-party flow: just a name (when/where/games live on game nights)',
                c: 'feat(party): add create-party form'
            },
            {
                id: 'p5-players',
                t: 'Add players at creation (pick from existing users)',
                c: 'feat(party): add players to a new party'
            },
            {
                id: 'p5-lock',
                t: 'DB-enforced immutability: locked state + trigger + RLS; prove a direct API insert is rejected by Postgres',
                c: 'feat(db): add trigger to lock party roster after creation'
            },
            {
                id: 'p5-list',
                t: 'My-parties list + party detail screen',
                c: 'feat(party): list parties and show party details'
            }
        ],
        tips: 'Turn the direct-API rejection into a CI test. UTC timestamps. Validate: name non-empty, ≥ 2 players.'
    },
    {
        n: '6',
        title: 'Game nights & scoring (was 4)',
        badge: 'tag v0.2.0',
        track: 'A',
        goal: 'Run a night, record per-player scores, live leaderboard. Playable MVP.',
        learn: [
            [
                'TanStack Query',
                'https://tanstack.com/query/latest/docs/framework/react/overview'
            ],
            [
                'Joins & nesting',
                'https://supabase.com/docs/guides/database/joins-and-nesting'
            ],
            [
                'Mutations (writing data)',
                'https://tanstack.com/query/latest/docs/framework/react/guides/mutations'
            ],
            [
                'Expo date/time picker',
                'https://docs.expo.dev/versions/latest/sdk/date-time-picker/'
            ]
        ],
        steps: [
            {
                id: 'p6-night',
                t: 'New game night: date/time, location (free text), planned games',
                c: 'feat(gamenight): create a game night within a party'
            },
            {
                id: 'p6-game',
                t: 'Add a played game (typed name for now; catalog picker in Phase 8)',
                c: 'feat(gamenight): add a played game to a night'
            },
            {
                id: 'p6-generic',
                t: 'Generic score entry first (one number per player) + winner',
                c: 'feat(scoring): record per-player scores for a game'
            },
            {
                id: 'p6-schema',
                t: 'Schema-driven entry: inputs from the scoring schema, winner from archetype, structured results stored',
                c: 'feat(scoring): render score entry from the game schema'
            },
            {
                id: 'p6-board',
                t: 'Live game-night leaderboard → merge, TAG v0.2.0',
                c: 'feat(scoring): show game-night leaderboard'
            }
        ],
        tips: 'DECIDE + write down: what a win means per archetype, and what the NIGHT winner is. Pure functions + unit tests for scoring. Host-only score entry via RLS.'
    },
    {
        n: '7',
        title: 'Stats & win rates (was 5)',
        badge: '',
        track: 'A',
        goal: 'Win rates: global, per party, per game, head-to-head. Math lives in the database.',
        learn: [
            [
                'Postgres aggregates',
                'https://www.postgresql.org/docs/current/functions-aggregate.html'
            ],
            [
                'Views & RPC',
                'https://supabase.com/docs/guides/database/functions'
            ]
        ],
        steps: [
            {
                id: 'p7-global',
                t: 'Global win rate',
                c: 'feat(stats): compute global win rate'
            },
            {
                id: 'p7-breakdown',
                t: 'Per-game + per-party breakdowns',
                c: 'feat(stats): add per-game and per-party win rates'
            },
            {
                id: 'p7-h2h',
                t: 'Head-to-head vs any player',
                c: 'feat(stats): add head-to-head stats between players'
            }
        ],
        tips: 'One view/RPC as the single source of truth. Decide tie/missing-score handling BEFORE computing. Verify against a committed seed dataset.'
    },
    {
        n: '8',
        title: 'Board-game catalog (was 6 — pre-work exists!)',
        badge: 'tag v0.3.0',
        track: 'A',
        goal: 'BGG + custom games, search/filters, scoring schemas. docs/scripts/ already has the games schema + import script.',
        learn: [
            [
                'BGG XML API2',
                'https://boardgamegeek.com/wiki/page/BGG_XML_API2'
            ],
            [
                'fast-xml-parser',
                'https://github.com/NaturalIntelligence/fast-xml-parser'
            ],
            ['FlatList (long lists)', 'https://reactnative.dev/docs/flatlist'],
            [
                'Debouncing (search box)',
                'https://developer.mozilla.org/en-US/docs/Glossary/Debounce'
            ]
        ],
        steps: [
            {
                id: 'p8-import',
                t: 'Fold games_schema.sql into a migration; run the BGG import (~5000 games)',
                c: 'feat(catalog): add games schema migration and bgg import'
            },
            {
                id: 'p8-search',
                t: 'Live BGG search for uncached games; cache results (rate limits!)',
                c: 'feat(catalog): integrate boardgamegeek search with caching'
            },
            {
                id: 'p8-custom',
                t: 'Custom user-created games, same fields',
                c: 'feat(catalog): add custom user-created games'
            },
            {
                id: 'p8-filters',
                t: 'Search bar + filters; player-count rule is already server-side',
                c: 'feat(catalog): add catalog search bar and filters'
            },
            {
                id: 'p8-picker',
                t: 'Wire catalog into Phase 6 game picker',
                c: 'feat(catalog): select catalog games when scoring'
            },
            {
                id: 'p8-archetypes',
                t: 'Game detail + ~10 win archetypes + deterministic mechanic-based default classifier',
                c: 'feat(catalog): add scoring archetypes and mechanic-based defaults'
            },
            {
                id: 'p8-llm',
                t: 'Offline batch LLM enrichment for popular games, cached JSON; hand-curate top ~100 → merge, TAG v0.3.0',
                c: 'feat(catalog): generate detailed scoring schemas (cached)'
            }
        ],
        tips: 'Debounce search; never block UI on BGG; score entry only reads STORED schemas. Mock BGG in tests.'
    },
    {
        n: '9',
        title: 'Testing, polish, web & release (was 10)',
        badge: 'tag v1.0.0',
        track: 'A',
        goal: 'Tested, polished, deployed. Shipped.',
        learn: [
            ['Jest in Expo', 'https://docs.expo.dev/develop/unit-testing/'],
            [
                'RN Testing Library',
                'https://callstack.github.io/react-native-testing-library/'
            ],
            ['Maestro E2E', 'https://docs.maestro.dev/'],
            ['EAS Build', 'https://docs.expo.dev/build/introduction/'],
            ['EAS Hosting', 'https://docs.expo.dev/eas/hosting/introduction/']
        ],
        steps: [
            {
                id: 'p9-unit',
                t: 'Top up unit/component tests: scoring, win-rate math, roster lock',
                c: 'test: cover scoring and win-rate logic'
            },
            {
                id: 'p9-e2e',
                t: 'Maestro happy path: sign in → create party → record a score',
                c: 'test(e2e): add core user-journey flow'
            },
            {
                id: 'p9-polish',
                t: 'Loading/empty/error states everywhere; web layout; accessibility',
                c: 'fix(ui): add loading, empty, and error states'
            },
            {
                id: 'p9-ship',
                t: 'Mobile build (EAS/local) + web deploy → merge, TAG v1.0.0 🎉',
                c: 'chore: configure builds and web deploy'
            }
        ],
        tips: 'Do not save all testing for here — test tricky logic as you build phases 6–7.'
    },
    {
        n: '10',
        title: 'Friends system (was 7)',
        badge: 'trackb',
        track: 'B',
        goal: 'Requests, friends list, friend profile with head-to-head, friend-based invites. → v1.1.0',
        learn: [
            [
                'Many-to-many modeling',
                'https://supabase.com/docs/guides/database/joins-and-nesting'
            ]
        ],
        steps: [
            {
                id: 'p10-req',
                t: 'Send / accept / decline requests',
                c: 'feat(friends): send and respond to friend requests'
            },
            {
                id: 'p10-list',
                t: 'Friends list page',
                c: 'feat(friends): add friends list'
            },
            {
                id: 'p10-profile',
                t: 'Friend profile: global win rate + head-to-head',
                c: 'feat(friends): show friend profile with stats'
            },
            {
                id: 'p10-invite',
                t: 'Party invites from friends list → TAG v1.1.0',
                c: 'feat(party): invite players from friends list'
            }
        ],
        tips: 'Store a friendship once, query both directions. RLS test: a non-friend CANNOT read friend data.'
    },
    {
        n: '11',
        title: 'Realtime chat (was 8)',
        badge: 'trackb',
        track: 'B',
        goal: '1:1 messages appearing in realtime. → v1.2.0',
        learn: [
            ['Supabase Realtime', 'https://supabase.com/docs/guides/realtime'],
            [
                'Postgres Changes',
                'https://supabase.com/docs/guides/realtime/postgres-changes'
            ],
            [
                'Inverted FlatList (chat scroll)',
                'https://reactnative.dev/docs/flatlist#inverted'
            ],
            [
                'KeyboardAvoidingView',
                'https://reactnative.dev/docs/keyboardavoidingview'
            ]
        ],
        steps: [
            {
                id: 'p11-schema',
                t: 'Messages table + participant-only RLS',
                c: 'feat(chat): add messages schema and policies'
            },
            {
                id: 'p11-screen',
                t: '1:1 conversation screen: history + send',
                c: 'feat(chat): add direct message conversation screen'
            },
            {
                id: 'p11-realtime',
                t: 'Realtime inserts, no refresh → TAG v1.2.0',
                c: 'feat(chat): stream new messages in realtime'
            }
        ],
        tips: 'Unsubscribe on unmount (leaks hit limits). Optimistic send. Group chats: decide later.'
    },
    {
        n: '12',
        title: 'Push notifications (was 9)',
        badge: 'trackb',
        track: 'B',
        goal: 'Push on party invite; deep-link taps. Needs a dev build (Expo Go cannot receive Android push since SDK 53). → v1.3.0',
        learn: [
            ['Expo push', 'https://docs.expo.dev/push-notifications/overview/'],
            [
                'Setup',
                'https://docs.expo.dev/push-notifications/push-notifications-setup/'
            ],
            [
                'Dev builds',
                'https://docs.expo.dev/develop/development-builds/introduction/'
            ],
            ['Edge Functions', 'https://supabase.com/docs/guides/functions']
        ],
        steps: [
            {
                id: 'p12-devbuild',
                t: 'Development build (expo-dev-client)',
                c: 'chore: add development build configuration'
            },
            {
                id: 'p12-tokens',
                t: 'Permission flow + store push tokens',
                c: 'feat(notifications): register and store push tokens'
            },
            {
                id: 'p12-edge',
                t: 'Edge Function sends push on party invite (server-side only)',
                c: 'feat(notifications): send push on party invite'
            },
            {
                id: 'p12-deeplink',
                t: 'Taps deep-link to party/conversation → TAG v1.3.0',
                c: 'feat(notifications): deep-link from notification taps'
            }
        ],
        tips: 'Never send pushes from the client. Handle permission denial gracefully. Web push: out of scope for now.'
    },
    {
        n: '13',
        title: 'CI/CD & automation (was 11)',
        badge: 'trackb',
        track: 'B',
        goal: 'Every merge lints, tests, builds, deploys, and migrates itself. → v1.4.0',
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
            [
                'Dependabot',
                'https://docs.github.com/en/code-security/dependabot'
            ],
            ['Sentry RN', 'https://docs.sentry.io/platforms/react-native/']
        ],
        steps: [
            {
                id: 'p13-dbci',
                t: 'Migrations against disposable Postgres in CI',
                c: 'ci: run database migrations against disposable postgres in ci'
            },
            {
                id: 'p13-webcd',
                t: 'Web deploy on merge + PR preview deploys',
                c: 'ci: build and deploy web on merge to main'
            },
            {
                id: 'p13-eas',
                t: 'EAS builds on release tags',
                c: 'ci: trigger eas build on release tags'
            },
            {
                id: 'p13-dbdeploy',
                t: 'Auto-apply migrations to prod (token in Actions secrets)',
                c: 'ci: apply supabase migrations to production on release'
            },
            {
                id: 'p13-security',
                t: 'Dependabot + secret scanning + CodeQL',
                c: 'chore(security): enable dependabot, secret scanning, and code scanning'
            },
            {
                id: 'p13-sentry',
                t: 'Sentry with sourcemaps from CI',
                c: 'feat(observability): add sentry error monitoring with sourcemaps'
            },
            {
                id: 'p13-badges',
                t: 'README badges + auto-changelog → TAG v1.4.0',
                c: 'docs: add ci badges and automated changelog'
            }
        ],
        tips: 'Secrets in Actions/EAS secrets only. Cache deps, keep CI fast, make it required.'
    }
];

// v3: suggested owner per task — T = Teo, D = Dragos, TD = together.
// Suggestions from ROADMAP.md Split lines; rebalance in the Friday sync.
const OWNERS = {
    'pd-setup': 'D',
    'pd-js': 'D',
    'pd-ts': 'D',
    'pd-rn': 'D',
    'pd-firstpr': 'D',
    'p1-collab': 'T',
    'p1-protect': 'T',
    'p2-tokens': 'T',
    'p2-provider': 'T',
    'p2-persist': 'T',
    'p2-components': 'TD',
    'p2-gallery': 'D',
    'p2-verify': 'TD',
    'p3-project': 'T',
    'p3-schema': 'TD',
    'p3-rls': 'TD',
    'p3-client': 'T',
    'p3-types': 'D',
    'p4-auth': 'D',
    'p4-profile': 'T',
    'p4-guard': 'T',
    'p4-verify': 'TD',
    'p5-create': 'D',
    'p5-players': 'D',
    'p5-lock': 'T',
    'p5-list': 'D',
    'p6-night': 'D',
    'p6-game': 'D',
    'p6-generic': 'D',
    'p6-schema': 'T',
    'p6-board': 'D',
    'p7-global': 'D',
    'p7-breakdown': 'TD',
    'p7-h2h': 'TD',
    'p8-import': 'D',
    'p8-search': 'T',
    'p8-custom': 'D',
    'p8-filters': 'D',
    'p8-picker': 'TD',
    'p8-archetypes': 'T',
    'p8-llm': 'T',
    'p9-unit': 'TD',
    'p9-e2e': 'T',
    'p9-polish': 'D',
    'p9-ship': 'T',
    'p10-req': 'TD',
    'p10-list': 'D',
    'p10-profile': 'D',
    'p10-invite': 'D',
    'p11-schema': 'D',
    'p11-screen': 'D',
    'p11-realtime': 'T',
    'p12-devbuild': 'T',
    'p12-tokens': 'D',
    'p12-edge': 'T',
    'p12-deeplink': 'D',
    'p13-dbci': 'TD',
    'p13-webcd': 'T',
    'p13-eas': 'D',
    'p13-dbdeploy': 'T',
    'p13-security': 'D',
    'p13-sentry': 'T',
    'p13-badges': 'D'
};
// v3: every build phase ends with a teach-back (details in ROADMAP.md).
const TEACH = {
    2: 'Dragos walks through token file → provider → useContext → styled component, without notes',
    3: 'Dragos explains RLS + one of Teo’s policies; Teo explains the migration → local → hosted flow',
    4: 'Dragos explains the session lifecycle; Teo explains the signup trigger',
    5: 'Dragos explains why the roster lock lives in Postgres and what the trigger rejects; Teo explains one of Dragos’s form-validation choices',
    6: 'Each explains the other’s half — archetype→inputs→winner vs the night flow and its queries',
    7: 'Dragos explains one aggregate query line by line; Teo explains views/RPCs vs app-side math',
    8: 'Dragos explains caching + rate limits; Teo explains the player-count SQL rule + import pipeline',
    9: 'Release dry-run: Dragos ships solo, narrating every step; Teo only watches',
    10: 'The store-once, query-both-directions friendship model',
    11: 'Subscribe/unsubscribe lifecycle + optimistic send',
    12: 'Why push sending lives server-side only',
    13: 'Each explains a pipeline the other wrote, end to end'
};
PHASES.forEach(p => {
    if (TEACH[p.n])
        p.steps.push({
            id: 'p' + p.n + '-teach',
            t: 'Teach-back — ' + TEACH[p.n],
            o: 'TD'
        });
});
