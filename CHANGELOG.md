# Changelog

All notable changes to Endless Bounty theme will be documented in this file.

## [1.2.0] - 2026-01-13

### Changed
- **Renamed project from "Farm to Table" to "Endless Bounty"**
- Dark theme syntax colors now match the vibrant harvest palette (Spinach, Carrot, Apple, Squash, Eggplant, Honey, Tomato, Sage)
- Light theme status bar and title bar now use matching dark oak wood tones
- Light theme remote button changed from teal to blue for better consistency

### Added
- 11ty-powered documentation site with theme-aware templates
- Status bar previews in documentation
- More sophisticated Cooklang recipe examples (Sunday Pot Roast, Family Week meal plan, Grocery Store aisle.conf)
- `npm run dev` for local site development
- `npm run build` for building documentation

### Technical
- Documentation site now reads colors directly from theme JSON files
- Theme colors automatically sync between VS Code themes and documentation

## [1.1.0] - 2026-01-12

### Added
- Cooklang syntax highlighting for `.menu` meal planning files
- Cooklang syntax highlighting for `aisle.conf` shopping list configuration
- TextMate grammar for Cooklang recipe syntax (`.cook`, `.menu`)
- TextMate grammar for Cooklang config syntax (`aisle.conf`)
- Language configuration with comment support (`--`)
- Local install script (`install.sh`) for VS Code and Cursor
- Expanded examples on documentation site showing all Cooklang file types

### Cooklang File Support
- `.cook` — Recipe files with ingredients, cookware, timers, metadata
- `.menu` — Meal planning files with day sections, meal categories, recipe references
- `aisle.conf` — Shopping list configuration with store sections and ingredient aliases

## [1.0.0] - 2026-01-11

### Added
- Initial release
- Dark theme (Evening Market)
- Light theme (Morning Market)
- Full syntax highlighting for TypeScript, JavaScript, Python, and more
- Rich Markdown support with colorful heading hierarchy
- Basic Cooklang (`.cook`) support in theme colors
- GitHub Pages documentation site
