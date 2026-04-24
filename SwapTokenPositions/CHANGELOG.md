# Changelog

All notable changes to the **SwapTokenPositions** script will be documented in this file.

## [2.0.0] - 2026-04-24

### Added

- New staged FX pipeline with explicit origin, travel, and destination phases.
- New FX flags: `--origin-fx`, `--travel-fx`, `--destination-fx`.
- New timing flags: `--origin-time`, `--travel-time`, `--destination-time`, `--swap-delay`, `--destination-delay`.
- New travel visibility flag: `--travel-mode` with values `normal` and `invisible`.
- Preset system with `portal`, `lightning`, `shadow`, `fire`, `magic`, `transport`, and `none`.
- `--instant` flag to force immediate swap.
- `--check-settings` validation command for persistent defaults.
- Backward-compatibility parsing for legacy flags with deprecation warnings.
- Modular multi-file source structure under `src/`.
- Local build tooling (`rollup`) to generate single-file artifacts for Roll20.
- Build banner metadata in generated output, including build timestamp.

### Changed

- Refactored internal architecture from a monolithic file to source modules with a generated bundle.
- Updated generated bundle artifacts used for Roll20 deployment.

### Deprecated

- `--duration` (replaced by `--swap-delay`)
- `--beam-fx` (replaced by `--travel-fx`)
- `--burst-fx` (replaced by `--destination-fx`)

## [1.0.0] - 2026-04-21

### Added

- Complete modernization of the script architecture with a focus on maintainability.
- Arcane-themed styled messaging for whispers and announcements.
- Persistent state management for GM settings (saves between sessions).
- One-time override support for duration, animation mode, and FX types.
- New `--install-macro` command to automatically create a "SwapTokens" macro.
- "Beams" animation mode (renamed from legacy "bounce") with customizable beam FX.
- "Transport" animation mode for immediate magical relocation.
- New `none` option for beam and burst FX to allow for silent, instantaneous swaps.
- Strict selection validation with clear feedback on required token counts.
- Silent management commands (Help/Settings) that don't require token selection.
- Improved whisper delivery using reliable player display name resolution.

### Fixed

- None - initial release does not have any reported issues.
