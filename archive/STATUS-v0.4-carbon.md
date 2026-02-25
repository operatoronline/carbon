# Carbon Status

## Metadata
- **Version:** v0.4
- **Last Updated:** 2026-02-08
- **Host:** carbon.operator.onl
- **Repo:** https://github.com/operatoronline/carbon

## Current Status
**v0.4 In Progress** — Structural consistency pass across all pages.

---

## v0.4 Goal: Structural Consistency

Every page must follow a canonical section structure. Content quality should match the token pages (rich previews, educational depth, visual demos).

### Canonical Structure — Components

All component pages must end with these sections **in this exact order**:

1. **Common Patterns** — Real-world usage examples in context
2. **Customization** — CSS custom properties, overrides, extending
3. **API Reference** — HTML classes, attributes, data-attributes (using `<table class="ApiTable">` format). This is the *interface* — what classes exist and what they do.
4. **CSS Reference** — Full CSS source code for the component. This is the *implementation* — copy-paste ready CSS.
5. **Accessibility** — Keyboard support, screen readers, ARIA patterns
6. **Best Practices** — Do/Don't guidelines

**API Reference vs CSS Reference:**
- **API Reference** = The contract. Class names, attributes, expected markup, custom properties. Presented in ApiTable HTML tables.
- **CSS Reference** = The implementation. Actual CSS rules. Presented in fenced code blocks.

### Canonical Structure — Tokens

Token pages end with:
1. **Best Practices** — Do/Don't guidelines
2. **Quick Reference** — Cheat sheet of all token values

### Canonical Structure — Patterns

Pattern pages end with:
1. **Best Practices** — Do/Don't guidelines
2. **CSS Reference** — Full CSS source code

---

## Component Audit

### Tokens (3 pages)
| Page | Structure | Quality | Status |
|------|-----------|---------|--------|
| colors.md | ✅ Correct | ✅ Rich | Done |
| typography.md | ✅ Correct | ✅ Rich | Done |
| spacing.md | ✅ Correct | ✅ Rich | Done |

### Components (33 pages)
| Page | Structure | Quality | Status |
|------|-----------|---------|--------|
| accordions.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| alerts.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| avatars.md | ⚠️ Wrong order (CSS Ref before Best Practices) | ⚠️ Needs refresh | Pending |
| badges.md | ⚠️ Wrong order (CSS Ref before Best Practices) | ⚠️ Needs refresh | Pending |
| breadcrumbs.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| buttons.md | ⚠️ Missing CSS Ref | ✅ Recently updated | Pending |
| cards.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| chips.md | ⚠️ Wrong order, missing Best Practices | ⚠️ Needs refresh | Pending |
| dividers.md | ⚠️ Wrong order (CSS Ref after Best Practices) | ⚠️ Needs refresh | Pending |
| drawer.md | ⚠️ Wrong order throughout | ⚠️ Needs refresh | Pending |
| dropdowns.md | ⚠️ JavaScript section, missing CSS Ref | ⚠️ Needs refresh | Pending |
| file-upload.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| forms.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| icons.md | ⚠️ Wrong order (CSS Ref before Best Practices) | ⚠️ Needs refresh | Pending |
| links.md | ⚠️ Missing CSS Ref (merged into Customization) | ✅ Recently updated | Pending |
| lists.md | ⚠️ Missing Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| menus.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| modals.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| pagination.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| progress.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| rating.md | ⚠️ Wrong order, missing Best Practices | ⚠️ Needs refresh | Pending |
| skeletons.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| sliders.md | ⚠️ Wrong order (CSS Ref before Best Practices) | ⚠️ Needs refresh | Pending |
| steppers.md | ⚠️ Missing Best Practices, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| switches.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| tables.md | ⚠️ Missing CSS Ref | ⚠️ Needs refresh | Pending |
| tabs.md | ⚠️ JavaScript section, missing CSS Ref | ⚠️ Needs refresh | Pending |
| textarea.md | ⚠️ Missing Best Practices, Customization, CSS Ref | ⚠️ Needs refresh | Pending |
| timeline.md | ⚠️ Wrong order, missing Best Practices | ⚠️ Needs refresh | Pending |
| toasts.md | ⚠️ JavaScript section, missing CSS Ref | ⚠️ Needs refresh | Pending |
| toolbar.md | ⚠️ Wrong order, missing Best Practices | ⚠️ Needs refresh | Pending |
| tooltips.md | ⚠️ Missing Common Patterns, Customization, CSS Ref | ⚠️ Needs refresh | Pending |

### Patterns (2 pages)
| Page | Structure | Status |
|------|-----------|--------|
| layouts.md | ⚠️ Needs tail structure | Pending |
| empty-states.md | ⚠️ Needs tail structure | Pending |

---

## Batches

| Batch | Components | Agent | Status |
|-------|------------|-------|--------|
| 1 | tokens (colors, typography, spacing) | — | ✅ Structure verified |
| 2 | accordions, alerts, avatars, badges, breadcrumbs, buttons | Sub-agent | ✅ Complete |
| 3 | cards, chips, dividers, drawer, dropdowns, file-upload | Sub-agent | ✅ Complete |
| 4 | forms, icons, links, lists, menus, modals | Sub-agent | ✅ Complete |
| 5 | pagination, progress, rating, skeletons, sliders, steppers | Sub-agent | ✅ Complete |
| 6 | switches, tables, tabs, textarea, timeline, toasts, toolbar, tooltips | Sub-agent | ✅ Complete |
| 7 | patterns (layouts, empty-states) | Sub-agent | ✅ Complete |

---

## Change Log
- **v0.1** (2026-02-02): Project initialization
- **v0.2** (2026-02-04): Full documentation overhaul
- **v0.3** (2026-02-05): Library aesthetic reskin
- **v0.4** (2026-02-08): Structural consistency pass — canonical section order, content quality refresh
