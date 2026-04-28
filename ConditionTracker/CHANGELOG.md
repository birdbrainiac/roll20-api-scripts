# Changelog

All notable changes to **Condition Tracker** will be documented in this file.

## [1.0.0] - 2026-04-28

### Added

- Initial release of Condition Tracker with token-focused condition and custom-effect tracking for Roll20 Turn Tracker.
- Guided GM workflows: interactive wizard (`--prompt`), multi-target wizard (`--multi-target`), and menu-driven controls for apply/remove/help/config.
- Rich effect modeling: standard conditions plus custom effect types (Spell, Ability, Advantage, Disadvantage, Other) with duplicate prevention and per-target tracking.
- Turn-order integration: stable custom rows, grouped source-based rows for advantage/disadvantage, tracked durations (until removed, end-of-turn anchors, numeric rounds), and efficient row insertion/update handling.
- Automatic lifecycle cleanup: expiry-based removal, zero-HP cleanup prompts/actions, proactive token-deletion pruning (`destroy:graphic`), and manual reconciliation for orphaned/stale entries.
- Marker system: configurable per-condition marker mapping with safe marker application/removal logic that avoids removing markers still required by other active conditions.
- GM tooling: auto-installed `ConditionTrackerWizard` and `ConditionTrackerMultiTarget` macros, plus reinstall support for macros and localized handout content.
- Internationalization support: localized chat/wizard/help content for `en-US`, `fr`, `de`, `es`, `pt-BR`, and `ko`, with persistent `--config language` and per-command bilingual output via `--lang`.
- Configuration surface: GM options for marker usage, icon mode, subject prompt bypass, health bar monitoring, marker overrides, and language.
- Performance-focused foundations: precomputed condition-anchor lookups and batch turn-row cleanup passes to reduce repeated rescans in larger combats.
- Developer-ready modular architecture (`src/`) with Rollup build pipeline and generated release artifacts.
