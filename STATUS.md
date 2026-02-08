# Carbon Status

## Metadata
- **Version:** v0.3
- **Last Updated:** 2026-02-08
- **Host:** carbon.operator.onl
- **Repo:** https://github.com/operatoronline/carbon

## Current Status
**v0.3 Complete** ✅

Full aesthetic reskin to match the Library design system.

## v0.3 Highlights — Library Aesthetic Reskin

### Typography
- **Display fonts:** `Instrument Serif` for hero titles, page headers
- **UI fonts:** `Outfit` for navigation, body copy, component labels
- **Mono:** `JetBrains Mono` for code blocks, micro-labels, technical text
- **Hero treatment:** Serif titles with italic accent word pattern (`<em>Buttons</em>`)

### Color System
- OKLCH color tokens ported from Library
- Purple accent (270° hue) with full scale (pri-50 to pri-600)
- Grayscale scale (g50 to g950) for semantic colors
- Status colors: ok (green), warn (yellow), err (red)
- Full dark mode support

### Shell Architecture
- **Floating pill nav** — bottom on mobile, top on desktop
- **Glassmorphism toolbar** — desktop search bar with blur effect
- **Sidebar removed** — clean, focused reading experience
- **Safe area insets** — mobile viewport-fit support

### Design Tokens
- Radii: r-s (6px) → r-f (9999px pill)
- Shadows: sh-s → sh-xl with OKLCH transparency
- Animation: ease (expo), spring, durations (f/n/s)
- Spacing: 4px base scale

### Components
All 38 components updated with new tokens:
- Buttons, Cards, Tables, Forms, Modals
- Toasts, Tooltips, Alerts, Accordions
- Tabs, Dropdowns, Menus, Pagination
- Progress, Skeletons, Steppers, Timeline
- And more...

## Components (38 total)

### Tokens
- Colors (OKLCH system, semantic palette, dark mode)
- Typography (Instrument Serif, Outfit, JetBrains Mono)
- Spacing (4px scale, usage guidelines)

### Layout
- Layouts (Container, Grid, Stack, Cluster, Split, Center)

### Components
Accordions, Alerts, Avatars, Badges, Breadcrumbs, Buttons, Cards, Chips/Tags, Dividers, Drawer, Dropdowns, Empty States, File Upload, Forms, Icons, Links, Lists, Menus, Modals, Pagination, Progress, Rating, Skeletons, Sliders, Steppers, Switches, Tables, Tabs, Textarea, Timeline, Toasts, Toolbar, Tooltips

## Automation
- **Hourly Health Check** — Verify site status
- **Daily Summary** — 9 AM UTC recap

## Backlog (v0.4 candidates)
- [ ] Date Picker component
- [ ] Tree View component
- [ ] Data Grid component
- [ ] Rich Text Editor patterns
- [ ] Mobile bottom sheet navigation

## Known Issues
None.

## Change Log
- **v0.1** (2026-02-02): Project initialization. Scaffolding complete.
- **v0.2** (2026-02-04): Full documentation overhaul. Enhanced previews, API Reference, Accessibility for all 38 components. File Upload added.
- **v0.3** (2026-02-05): Library aesthetic reskin. New typography (Instrument Serif/Outfit/JetBrains Mono), OKLCH color system with purple accent, floating pill nav, glassmorphism effects, removed sidebar.
