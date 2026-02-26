# Standard Design System

A framework-agnostic design system built on OKLCH colors, a 24-column fluid grid, and 4px spacing. Markdown-driven static site generator with dark mode, floating pill navigation, and glassmorphism.

**Live:** [standard.operator.onl](https://standard.operator.onl)

## Stack

- **Colors:** OKLCH exclusively — perceptual uniformity
- **Grid:** 24-column fluid grid, mobile-first
- **Spacing:** 4px base unit
- **Typography:** Instrument Serif / Outfit / JetBrains Mono
- **Icons:** Phosphor Icons
- **Components:** 32 documented with live previews
- **Tokens:** Colors, Spacing, Typography
- **Patterns:** Layouts, Empty States

## Build

```bash
npm install
npm run build        # Build static site → dist/
npm run dev          # Watch mode
npm test             # Playwright visual regression (68 tests)
npm run test:update  # Regenerate snapshots
```

## Structure

```
content/           # Markdown source
  components/      # 32 component pages
  tokens/          # Colors, Spacing, Typography
  patterns/        # Layouts, Empty States
templates/         # HTML shell
styles/            # Source CSS (docs.css)
scripts/           # Build engine (build.mjs)
tests/             # Playwright visual regression
dist/              # Built output (symlinked to web root)
```
