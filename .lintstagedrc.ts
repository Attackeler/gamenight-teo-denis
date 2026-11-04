// Runs on the files you're committing only. The full lint + type check
// still runs in CI on every PR (see .github/workflows/node.js.yaml).
module.exports = {
    // Fix lint problems, then format, in TS and JS files
    '*.{ts,tsx,js}': ['eslint --fix --no-warn-ignored', 'prettier --write'],

    // Format Markdown, JSON, and YAML files
    '*.{md,json,yaml,yml}': 'prettier --write --ignore-unknown'
};
