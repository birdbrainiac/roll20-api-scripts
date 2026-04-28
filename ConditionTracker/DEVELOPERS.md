# Condition Tracker Developer Guide

This guide is for contributors who want to edit source files and regenerate the bundled script used by Roll20.

## What You Need

- Node.js 20.x LTS recommended
- npm
- Git
- A code editor

Check your versions:

```bash
node -v
npm -v
git --version
```

## Project Layout

- `src/` is the source of truth for script logic.
- `ConditionTracker.js` is generated output.
- `<version>/ConditionTracker.js` is generated output for release/version tracking.
- `script.json` controls script metadata and the versioned output folder name.
- [MOD_FILE_MAP.md](MOD_FILE_MAP.md) is the complete developer inventory of project files and module responsibilities.

Do not hand-edit generated bundle files.

## First-Time Setup

From the `ConditionTracker` directory:

```bash
npm install
```

## Build Commands

One-time build:

```bash
npm run build
```

Watch mode:

```bash
npm run watch
```

The build bundles `src/index.js` and writes both root and versioned output files.

## Contributor Workflow

1. Edit files in `src/`.
2. Run `npm run build`.
3. Paste `ConditionTracker.js` into Roll20 and restart the sandbox.
4. Run the smoke and regression checks in `TESTING.md`.
5. Commit source, docs, metadata, and generated artifacts together.

## Updating Version Metadata

If behavior changes for a release:

1. Update `script.json` version.
2. Update `package.json` version.
3. Update `CHANGELOG.md`.
4. Run `npm run build`.
5. Confirm output appears in the new version folder.
