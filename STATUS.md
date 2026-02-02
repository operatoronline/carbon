# Carbon Status

## Metadata
- **Version:** v0.1
- **Last Updated:** 2026-02-02
- **Host:** carbon.operator.onl

## Current Focus
**Component Completeness Overhaul** — Early components are stubs; later ones are comprehensive. See `VERIFICATION.md` for full audit.

**✅ Component consistency achieved!** All 9 former stub components (Buttons, Badges, Avatars, Icons, Links, Forms, Cards, Tables, Modals) now have full documentation matching the quality of comprehensive components like Sliders, Accordions, and Menus.

## In Progress
- [x] **Colors** — Complete OKLCH system with semantic palette, dark mode, accessibility guidance ✓
- [x] **Spacing** — Full scale documentation with usage guidelines ✓
- [x] **Typography** — Complete type system (weights, line heights, responsive) ✓
- [x] **Layouts** — Real-world examples (marketing, dashboard, card grid, form, article patterns) ✓

## Completed
- [x] Initial repository structure scaffolded.
- [x] Base CSS tokens (OKLCH, 4px scale) implemented.
- [x] Page template (`page.html`) created.
- [x] Core build system (`build.mjs`) implemented with `<Preview>` block support.
- [x] Home page and first component (Buttons) authored.
- [x] Hourly update and continuity cron jobs configured.
- [x] Navigation and TOC auto-generation in build script.
- [x] Basic Dark mode styling.
- [x] Token documentation authored (colors.md, typography.md, spacing.md) — *needs expansion*.
- [x] Badges and Avatars components authored.
- [x] Navigation tree sorting and Introduction labeling.
- [x] Breadcrumbs implementation in template and build script.
- [x] Icons and Links components authored.
- [x] Form components (Inputs, Selects) authored.
- [x] Mobile-first responsive shell with sticky top bar and drawer menu.
- [x] Cards component authored.
- [x] Tables and Modals components authored.
- [x] Layout patterns (Container, Grid, Stack, Cluster, Split, Sidebar, Center).
- [x] Client-side search with Fuse.js (fuzzy matching, keyboard nav, results dropdown).
- [x] TOC active state highlighting (IntersectionObserver).
- [x] Tabs component (Basic, Contained, Pills variants).
- [x] Tooltips component (4 positions, multiline, dark mode).
- [x] Toasts component (4 semantic variants, actions, dismissible).
- [x] Fixed nav labels (removed .md suffix, proper Introduction naming).
- [x] Dropdowns component (basic, icons, sections, checkable).
- [x] Progress component (bars, sizes, variants, indeterminate, spinners).
- [x] Alerts component (4 variants, dismissible, with actions, callouts).
- [x] Switches component (basic, sizes, with labels, form integration).
- [x] Pagination component (basic, ellipsis, compact, with page size).
- [x] Code syntax highlighting (Prism.js with OKLCH dark/light themes).
- [x] Copy code button (appears on hover, shows checkmark on success).
- [x] Skeleton/Loading placeholder component (shimmer animation, circle variant, reduced motion).
- [x] Mobile menu auto-close (on link click + outside click).

## Recently Added
- [x] Menus component (basic, icons, shortcuts, sections, checkable, submenu, compact, descriptions, context)
- [x] Textarea component (basic, sizes, character count, helper text, states, auto-resize, code input)
- [x] Steppers component (basic, descriptions, vertical, compact, icons, error, interactive, progress)
- [x] Lists component (basic, interactive, navigation, selectable, metadata, avatars, dense, bordered, sections, actions)
- [x] Breadcrumbs component (basic, icons, separators, truncated, sizes, accessibility)
- [x] Accordions component (basic, icons, bordered, flush, exclusive, nested content)
- [x] Chips/Tags component (basic, icons, removable, selectable, colors, outlined, sizes, avatar)
- [x] Empty States pattern (basic, illustrated, compact, search, error, onboarding, in cards/tables)
- [x] Sliders/Range inputs (basic, labels, value display, steps, sizes, colors, disabled)
- [x] Dividers component (horizontal, vertical, labeled, spacing variants, styles)
- [x] Visual regression testing (Playwright, 33 baseline screenshots, light/dark/mobile/interactive)

## Backlog
✅ **Backlog cleared!** All originally planned components are complete.

**Completed this session:**
- [x] Toolbar component (basic, text buttons, button groups, bordered, sizes, search, contextual, vertical, floating)
- [x] Timeline component (basic, descriptions, icons, status variants, alternating, compact, horizontal, actions)
- [x] Drawer/Sidebar component (positions, sizes, navigation, filters, tabs, persistent, mini variant)
- [x] Rating component (basic, interactive, sizes, count, half stars, hearts/thumbs/emoji, breakdown, states, labels)

**Potential additions:**
- [ ] Date Picker component
- [ ] File Upload component
- [ ] Tree View component
- [ ] Data Grid component
- [ ] Rich Text Editor patterns

## Automation
- **Continuity Loop:** Every 30 min — resume work from STATUS.md
- **Hourly Update:** Top of hour — progress summary to Aiden
- **Daily Summary:** 9 AM UTC — full recap
- **Visual Regression:** Playwright snapshot testing (33 baselines)
  - `npm test` — run visual tests against baselines
  - `npm run test:update` — regenerate baselines
  - Coverage: 14 pages × light/dark + interactive states + mobile

## Known Issues
- ~~**Component inconsistency** — RESOLVED. All components now have comprehensive documentation.~~
- ~~**Preview styling** — RESOLVED. Added prose typography rules and connected Preview/code blocks.~~
- **Shell refinement** — Page layout could benefit from additional typography polish.

## Change Log
- **v0.1**: Project initialization. Scaffolding complete.
- **2026-02-02**: Pivoting to foundational tokens overhaul.
