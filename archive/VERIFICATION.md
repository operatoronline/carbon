# Carbon Design System — Verification Checklist

**Created:** 2026-02-02  
**Purpose:** Comprehensive assessment of component completeness and visual quality.

---

## Executive Summary

**Core Issue:** Inconsistent documentation depth. Later components (Sliders, Accordions, Menus, etc.) are comprehensive with variants, states, accessibility, CSS reference, and best practices. Early components (Buttons, Badges, Forms, etc.) are minimal stubs with 1-3 basic examples.

**Visual Issues:** Preview blocks lack vertical rhythm, proper spacing between sections, and consistent alignment. The overall feel is "unfinished prototype" rather than "polished design system."

---

## Part 1: Global/Shell Issues

### Preview Block Styling
- [ ] **Vertical rhythm** — Inconsistent spacing between Preview blocks and prose
- [ ] **Section dividers** — No visual separation between component variants
- [ ] **Preview header styling** — Header exists but lacks polish (font weight, border treatment)
- [ ] **Preview canvas padding** — Needs consistent internal spacing
- [ ] **Code block spacing** — Gap between Preview canvas and following code block

### Page Layout
- [ ] **Prose typography** — Line lengths, paragraph spacing need audit
- [ ] **Heading hierarchy** — H2/H3 spacing relative to content
- [ ] **TOC alignment** — Right rail TOC positioning and scroll behavior
- [ ] **Breadcrumb styling** — Needs visual refinement

### Component Section Template
Each component page should follow this structure:
1. Title + intro paragraph
2. `---` divider
3. Variants (each with Preview + code)
4. `---` divider
5. Sizes (if applicable)
6. `---` divider
7. States (disabled, loading, error)
8. `---` divider
9. Composition examples (real-world usage)
10. `---` divider
11. Accessibility section
12. `---` divider
13. CSS Reference (full class definitions)
14. `---` divider
15. Best Practices (Do/Don't lists)

---

## Part 2: Component Completeness Audit

### Rating Scale
- ✅ **Complete** — All sections present, production-ready
- 🟡 **Partial** — Core content exists, needs expansion
- 🔴 **Stub** — Minimal examples only, major gaps

---

### Tokens

#### Colors (`tokens/colors.md`)
- [ ] OKLCH palette documentation
- [ ] Semantic color mapping
- [ ] Dark mode variants
- [ ] Contrast/accessibility guidance
- [ ] Usage examples
- **Status:** 🟡 Needs review

#### Typography (`tokens/typography.md`)
- [ ] Type scale with examples
- [ ] Font weights
- [ ] Line heights
- [ ] Responsive typography
- [ ] Best practices
- **Status:** 🟡 Partially complete

#### Spacing (`tokens/spacing.md`)
- [ ] 4px scale documentation
- [ ] Visual scale reference
- [ ] Usage guidelines
- [ ] Margin vs padding guidance
- **Status:** 🟡 Needs review

---

### Components — Stubs (Need Major Work)

#### Buttons (`components/buttons.md`) ✅
**Status:** COMPLETE (2026-02-02)
- [x] Primary, Secondary, Tertiary, Ghost, Outline, Danger variants
- [x] Sizes (small, medium, large)
- [x] Icon-only buttons
- [x] Button with icon (leading/trailing)
- [x] Loading state with spinner
- [x] Disabled state
- [x] Button groups
- [x] Full-width variant
- [x] Real-world examples (forms, cards, toolbars)
- [x] Accessibility section
- [x] CSS Reference
- [x] Best Practices

#### Badges (`components/badges.md`) 🔴
**Current:** Simple + status badges
**Missing:**
- [ ] Sizes (small, default, large)
- [ ] Dot/indicator variant
- [ ] Badge with icon
- [ ] Removable/dismissible badge
- [ ] Badge on avatar (notification dot)
- [ ] Badge in navigation
- [ ] Outlined variant
- [ ] Accessibility section
- [ ] CSS Reference
- [ ] Best Practices

#### Avatars (`components/avatars.md`) 🔴
**Current:** 3 sizes only
**Missing:**
- [ ] Initials fallback
- [ ] Icon fallback
- [ ] Avatar with status indicator
- [ ] Avatar with badge
- [ ] Avatar group (stacked)
- [ ] Square variant
- [ ] Bordered variant
- [ ] Clickable/interactive avatar
- [ ] Accessibility section
- [ ] CSS Reference
- [ ] Best Practices

#### Icons (`components/icons.md`) 🔴
**Current:** Basic usage + button example
**Missing:**
- [ ] Size scale
- [ ] Color variants
- [ ] Icon in text (inline)
- [ ] Icon button patterns
- [ ] Animated icons
- [ ] Loading spinner
- [ ] Full Phosphor icon reference link
- [ ] Accessibility (aria-hidden, sr-only labels)
- [ ] Best Practices

#### Links (`components/links.md`) 🔴
**Current:** 2 basic examples
**Missing:**
- [ ] External link (with icon)
- [ ] Visited state
- [ ] Link in navigation context
- [ ] Standalone link
- [ ] Subtle/muted link
- [ ] Danger/destructive link
- [ ] Link with icon
- [ ] Underline variants (always, hover, none)
- [ ] Accessibility section
- [ ] CSS Reference
- [ ] Best Practices

#### Cards (`components/cards.md`) ✅
**Status:** COMPLETE (2026-02-02)
- [x] Basic card, card with header, card with footer
- [x] Card with image, interactive card
- [x] Horizontal card (image left)
- [x] Selectable card with checkbox
- [x] Variants: elevated, bordered, compact
- [x] Loading/skeleton card
- [x] Card grid layout
- [x] Real-world examples (product, profile, stats)
- [x] Accessibility section
- [x] CSS Reference
- [x] Best Practices

#### Forms (`components/forms.md`) ✅
**Status:** COMPLETE (2026-02-02)
- [x] Input sizes (small, medium, large)
- [x] Input with icon (leading/trailing)
- [x] Input with button (search pattern)
- [x] Password input (show/hide toggle)
- [x] Input states (error, success, disabled)
- [x] Input with helper text
- [x] Input with character count
- [x] Required field indicator
- [x] Checkbox and checkbox groups
- [x] Radio buttons and radio groups
- [x] Radio cards (rich selection)
- [x] Form layouts (stacked, inline, two-column)
- [x] Form validation patterns
- [x] Accessibility section
- [x] CSS Reference
- [x] Best Practices

#### Tables (`components/tables.md`) ✅
**Status:** COMPLETE (2026-02-02)
- [x] Basic, bordered, striped, hoverable variants
- [x] Compact/dense variant
- [x] Sortable columns with icons
- [x] Selectable rows with checkboxes
- [x] Table with actions column
- [x] Responsive table (horizontal scroll)
- [x] Sticky header
- [x] Empty state, loading state
- [x] Column alignment (right, center)
- [x] Footer with totals
- [x] Accessibility section
- [x] CSS Reference
- [x] Best Practices

#### Modals (`components/modals.md`) ✅
**Status:** COMPLETE (2026-02-02)
- [x] Sizes (small, medium, large, fullscreen)
- [x] Modal with form
- [x] Modal with scrolling content
- [x] Confirmation modal pattern
- [x] Danger/destructive modal
- [x] Modal with image/media
- [x] Centered modal (no header)
- [x] Nested/stacked modals
- [x] Accessibility (focus trap, escape key, ARIA)
- [x] CSS Reference
- [x] Best Practices

---

### Components — Partial (Need Polish)

#### Tabs (`components/tabs.md`) 🟡
- [ ] Review variant coverage
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Tooltips (`components/tooltips.md`) 🟡
- [ ] Review positioning
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Toasts (`components/toasts.md`) 🟡
- [ ] Review variant coverage
- [ ] Add positioning options
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Dropdowns (`components/dropdowns.md`) 🟡
- [ ] Review completeness
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Progress (`components/progress.md`) 🟡
- [ ] Review variant coverage
- [ ] Add circular progress
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Alerts (`components/alerts.md`) 🟡
- [ ] Review completeness
- [ ] Verify all variants styled
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Switches (`components/switches.md`) 🟡
- [ ] Review completeness
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Pagination (`components/pagination.md`) 🟡
- [ ] Review completeness
- [ ] Add accessibility section
- [ ] Add CSS Reference
- [ ] Add Best Practices

#### Skeletons (`components/skeletons.md`) 🟡
- [ ] Review variant coverage
- [ ] Add composition examples
- [ ] Add Best Practices

---

### Components — Complete (Reference Standard) ✅

These components set the quality bar. All others should match this depth:

- **Sliders** — Full coverage: variants, sizes, colors, states, forms, accessibility, CSS, best practices
- **Accordions** — Full coverage: variants, icons, states, nesting, accessibility, CSS, best practices
- **Menus** — Full coverage: icons, shortcuts, sections, checkable, submenu, accessibility, CSS, best practices
- **Textarea** — Full coverage: sizes, states, helper text, auto-resize, accessibility, CSS, best practices
- **Steppers** — Full coverage: variants, orientations, states, icons, accessibility, CSS, best practices
- **Lists** — Full coverage: interactive, navigation, selectable, metadata, accessibility, CSS, best practices
- **Breadcrumbs** (component) — Full coverage: icons, separators, truncation, accessibility, CSS, best practices
- **Chips** — Full coverage: icons, removable, selectable, colors, sizes, accessibility, CSS, best practices
- **Empty States** — Full coverage: variants, illustrations, contexts, best practices
- **Dividers** — Full coverage: orientations, labels, spacing, styles
- **Toolbar** — Full coverage: variants, groups, search, vertical, floating
- **Timeline** — Full coverage: variants, icons, status, orientations, actions
- **Drawer** — Full coverage: positions, sizes, navigation, filters, persistent
- **Rating** — Full coverage: interactive, sizes, half stars, variants, states

---

## Part 3: Priority Order

### Phase 1 — Foundation (Critical)
1. **Buttons** — Most used component, currently a stub
2. **Forms** — Core interaction patterns missing
3. **Cards** — Container component, needs full treatment
4. **Global CSS** — Vertical rhythm, section spacing

### Phase 2 — Core Components
5. **Tables** — Data display is essential
6. **Modals** — Dialog patterns need depth
7. **Badges** — Status indicators need variants
8. **Links** — Navigation building block

### Phase 3 — Polish
9. **Avatars** — User representation
10. **Icons** — Reference and patterns
11. **Partial components** — Add missing sections

### Phase 4 — Visual Refinement
12. Preview block spacing
13. Section dividers
14. Typography polish
15. Dark mode audit

---

## Part 4: CSS Audit Required

### Missing/Incomplete CSS Classes
Run audit to verify these classes are fully styled in `docs.css`:
- [ ] `.Button--tertiary`, `.Button--ghost`, `.Button--danger`
- [ ] `.Button--small`, `.Button--large`
- [ ] `.Button--loading`, `.Button--icon-only`
- [ ] `.Badge--small`, `.Badge--large`, `.Badge--dot`
- [ ] `.Avatar--initials`, `.Avatar-group`
- [ ] `.Link--external`, `.Link--muted`, `.Link--danger`
- [ ] `.Card--horizontal`, `.Card--selectable`
- [ ] `.Input--error`, `.Input--success`, `.Input-icon`
- [ ] `.Table--striped`, `.Table--hoverable`, `.Table--compact`
- [ ] `.Modal--small`, `.Modal--large`, `.Modal--fullscreen`

---

## Part 5: Testing Checklist

### Visual Regression (Playwright)
- [ ] Update baselines after component expansion
- [ ] Add tests for new variants
- [ ] Test all states (hover, focus, active, disabled)
- [ ] Dark mode coverage for new components

### Accessibility
- [ ] Keyboard navigation audit
- [ ] Screen reader testing
- [ ] Color contrast verification
- [ ] Focus indicator visibility

### Responsive
- [ ] Mobile breakpoint testing
- [ ] Touch target sizes (44px minimum)
- [ ] Horizontal scroll prevention

---

## Tracking

| Component | Status | Assignee | Last Updated |
|-----------|--------|----------|--------------|
| Buttons | ✅ Complete | Cosmo | 2026-02-02 |
| Badges | 🔴 Stub | — | 2026-02-02 |
| Avatars | 🔴 Stub | — | 2026-02-02 |
| Icons | 🔴 Stub | — | 2026-02-02 |
| Links | 🔴 Stub | — | 2026-02-02 |
| Cards | ✅ Complete | Cosmo | 2026-02-02 |
| Forms | ✅ Complete | Cosmo | 2026-02-02 |
| Tables | ✅ Complete | Cosmo | 2026-02-02 |
| Modals | ✅ Complete | Cosmo | 2026-02-02 |
| Tabs | 🟡 Partial | — | 2026-02-02 |
| Tooltips | 🟡 Partial | — | 2026-02-02 |
| Toasts | 🟡 Partial | — | 2026-02-02 |
| Dropdowns | 🟡 Partial | — | 2026-02-02 |
| Progress | 🟡 Partial | — | 2026-02-02 |
| Alerts | 🟡 Partial | — | 2026-02-02 |
| Switches | 🟡 Partial | — | 2026-02-02 |
| Pagination | 🟡 Partial | — | 2026-02-02 |
| Skeletons | 🟡 Partial | — | 2026-02-02 |
| Sliders | ✅ Complete | — | 2026-02-02 |
| Accordions | ✅ Complete | — | 2026-02-02 |
| Menus | ✅ Complete | — | 2026-02-02 |
| ... | ... | ... | ... |

---

*This document should be updated as components are completed.*
