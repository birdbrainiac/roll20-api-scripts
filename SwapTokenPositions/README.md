# SwapTokenPositions

**SwapTokenPositions** is a Roll20 API script that allows GMs and players to quickly swap the positions of two selected tokens on the same page. It features a modern design with customizable animation effects, persistent settings, and clear chat feedback.

## Features

- **Seamless Swapping**: Select exactly two tokens on the same page and run `!swap-tokens` to switch their positions.
- **Staged Animation Pipeline**:
  - `origin`: Point FX at starting positions.
  - `travel`: Beam FX and optional travel visibility behavior.
  - `destination`: Point FX after swap completes.
- **Customizable FX**: Choose from a wide variety of point and beam effects.
- **Persistent Settings**: GMs can customize staged defaults (FX, travel mode, timing/delays) and save them permanently.
- **One-Time Overrides**: Players and GMs can use command flags to customize a single swap without changing global defaults.
- **Styled Feedback**: Professional arcane-themed message boxes for success, errors, and settings.
- **Macro Installation**: Automatically create a global "SwapTokens" macro for your game.
- **Preset Support**: Includes `portal`, `lightning`, `shadow`, `fire`, `magic`, `transport`, and `none` presets.
- **Legacy Compatibility**: Supports deprecated `--duration`, `--beam-fx`, and `--burst-fx` flags with warnings.

## Development

This mod now uses a multi-file source layout for maintenance, but Roll20 still requires a single bundled script for manual testing and publication.

### Source of Truth

As the script was nearly 1.2k lines in a single file, the source code has been refactored into multiple modules under the `src/` directory. This allows for better organization and maintainability.

- Edit files in `src/`.
- Do not hand-edit generated bundles; they are build artifacts.

### Build Setup

From the `SwapTokenPositions` folder:

```bash
npm install
npm run build
```

The build writes the same bundled script to both of these files:

- `SwapTokenPositions.js`
- `<version>/SwapTokenPositions.js` where `<version>` comes from `script.json`.

### Watch Mode

For active development:

```bash
npm run watch
```

This rebuilds the bundle whenever a source file changes.

Roll20 does not load files from `src/` directly. Only the generated single-file bundle should be pasted into the Roll20 mod area.

### Contributor Workflow

When making changes to this mod:

1. Edit the source files under `src/`.
2. Update script metadata in `script.json` if necessary (e.g., version, description).
3. Update documentation in `README.md` and `TESTING.md` as needed to reflect new features or changes.
4. Run `npm run build`.
5. Verify the generated `SwapTokenPositions.js` bundle works in Roll20.
6. Commit the source changes and the regenerated build artifacts together.

### Manual Roll20 Testing

1. Run `npm run build`.
2. Open `SwapTokenPositions.js`.
3. Copy the entire generated file.
4. Paste it into the Roll20 Mod Scripts editor for your game.
5. Complete the detailed test plan: [TESTING.md](TESTING.md)

## Roll20 VTT Commands

### Basic Usage

`!swap-tokens`
Swaps the two currently selected tokens using the default settings.

### Acceptable Parameters for Customization (Available to Everyone)

- `--help`: Displays the help menu.
- `--instant`: Skips all FX and timing and swaps immediately.
- `--preset <value>`: Applies a preset.
  - Values: `portal`, `lightning`, `shadow`, `fire`, `magic`, `transport`, `none`
- `--origin-fx <value>`: Point FX at both origin positions.
- `--travel-fx <value>`: Beam FX between positions during travel stage.
- `--destination-fx <value>`: Point FX at both destination positions.
- `--travel-mode <value>`: Visibility behavior during travel stage.
  - Values: `normal`, `invisible`
- `--origin-time <0-10>`: Seconds to wait after origin FX.
- `--travel-time <0-10>`: Seconds to wait after travel FX.
- `--destination-time <0-10>`: Stored destination timing value.
- `--swap-delay <0-10>`: Extra delay between origin and travel stages.
- `--destination-delay <0-10>`: Extra delay between travel stage and swap.

### Examples of Customization

- `!swap-tokens --preset portal` Applies the portal preset for one swap.
- `!swap-tokens --preset transport` Applies a Star Trek-style transporter shimmer preset with hidden travel.
- `!swap-tokens --preset transport --travel-mode normal` Uses transport visuals but keeps tokens visible during travel.
- `!swap-tokens --preset lightning --travel-time 1` Applies lightning preset with explicit travel timing override.
- `!swap-tokens --origin-fx nova-magic --travel-fx beam-fire --destination-fx explode-fire` Uses custom FX for each stage.
- `!swap-tokens --origin-time 1 --swap-delay 0.5 --destination-delay 1` Uses explicit stage timing.
- `!swap-tokens --instant` Swaps immediately regardless of saved defaults.
- `!swap-tokens --beam-fx beam-fire --duration 2` Uses deprecated flags (still supported) and shows deprecation notices.

### Global Configuration (GM Only)

- `--save`: Commits provided customization flags as the new global defaults.
- `--show-settings`: Displays the current persistent defaults in chat.
- `--check-settings`: Validates current persistent defaults and reports issues.
- `--reset-settings`: Restores the script to its factory defaults.
- `--install-macro`: Automatically creates a global "SwapTokens" macro in your campaign.

### Deprecated Flags

The following flags are still supported for backward compatibility but are deprecated:

- `--duration` (use `--swap-delay`)
- `--beam-fx` (use `--travel-fx`)
- `--burst-fx` (use `--destination-fx`)

## License

This script is licensed under the MIT License.
