# Carbon v0.2 Plan: Design System Polish

**Goal:** Elevate Carbon from "documentation with examples" to a polished, professional design system showcase on par with Tailwind CSS, shadcn/ui, and Base Web.

**Date:** 2026-02-03
**Status:** Planning

---

## The Gap

### What Best-in-Class Design Systems Do

| Feature | Tailwind | shadcn/ui | Base Web | Chakra UI | Carbon v0.1 |
|---------|----------|-----------|----------|-----------|-------------|
| Live interactive previews | ✓ | ✓ | ✓ | ✓ | ✗ |
| Props/API reference tables | — | ✓ | ✓ | ✓ | ✗ |
| Variant grid showcases | ✓ | ✓ | ✓ | ✓ | Partial |
| Copy-to-clipboard (prominent) | ✓ | ✓ | ✓ | ✓ | Partial |
| Consistent page structure | ✓ | ✓ | ✓ | ✓ | ✗ |
| Code + Preview tabs | — | ✓ | ✓ | ✓ | ✗ |
| Dynamic code updates | — | — | ✓ | — | ✗ |
| Installation snippets | ✓ | ✓ | ✓ | ✓ | ✗ |
| Customization section | ✓ | ✓ | ✓ | ✓ | ✗ |
| Responsive preview toggle | — | ✓ | ✓ | — | ✗ |
| Dark/light preview toggle | ✓ | ✓ | ✓ | ✓ | Page-level only |

### Current Carbon Issues

1. **Inconsistent structure** — Some pages have CSS Reference, some don't. Section ordering varies.
2. **Static previews** — `<Preview>` blocks show HTML but aren't interactive.
3. **No API reference** — Missing props tables, no clear "what can I customize?" section.
4. **Raw CSS dumps** — CSS Reference is a code block, not organized documentation.
5. **Missing polish details:**
   - No "copy code" button prominence
   - No installation/usage snippets
   - No variant comparison grids
   - No customization examples

---

## v0.2 Objectives

### 1. Standardized Page Structure

Every component page follows this structure:

```
# Component Name
Brief description (1-2 sentences)

## Installation
Copy-paste HTML/CSS snippet

## Usage
Basic example with code

## Examples
### Variant Name
Preview + Code for each variant

## Customization
How to override tokens, add variants

## API Reference
Props/classes table

## Accessibility
Keyboard, screen reader, ARIA notes

## Best Practices
Do's and Don'ts
```

### 2. Interactive Preview System

**Phase 1: Enhanced Static Previews**
- Tabbed interface: `Preview | HTML | CSS`
- Prominent copy button on each tab
- Background toggle (light/dark/checkered)
- Viewport toggle (mobile/tablet/desktop)

**Phase 2: Interactive Playground** (stretch goal)
- Prop controls panel (checkboxes, selects, inputs)
- Live code editor with syntax highlighting
- Real-time preview updates
- Base Web-style experience

### 3. Consistent Visual Language

**Preview Container:**
- Consistent padding/border treatment
- Centered content with max-width
- Clear visual separation from docs prose

**Code Blocks:**
- Syntax highlighting (already have Prism)
- Line numbers for longer blocks
- Copy button always visible (not just on hover)
- Language label badge

**Component Showcases:**
- Grid layout for variant comparisons
- Size scale demonstrations (XS → XL in a row)
- Color/state matrix views

### 4. API Reference Tables

Standardized props/classes documentation:

```
| Class | Description | Default |
|-------|-------------|---------|
| `.Button` | Base button styles | — |
| `.Button--primary` | Primary variant | — |
| `.Button--small` | Small size | — |
```

For components with JS behavior:
```
| Attribute | Type | Description |
|-----------|------|-------------|
| `data-accordion` | `"exclusive"` | Single-expand mode |
| `open` | boolean | Default expanded state |
```

### 5. Design Token Integration

Each component page shows:
- Which tokens it uses
- How to customize via CSS custom properties
- Example overrides

```css
/* Customize button colors */
.Button--primary {
  --button-bg: var(--color-brand);
  --button-hover: var(--color-brand-dark);
}
```

---

## Implementation Plan

### Phase 1: Foundation (Days 1-2)
- [ ] Create new Preview component with tabs
- [ ] Build API Reference table component
- [ ] Design variant grid layout system
- [ ] Update `build.mjs` to support new block types

### Phase 2: Template Standardization (Days 3-4)
- [ ] Create component page template/checklist
- [ ] Audit all component pages for structure
- [ ] Identify missing sections per component
- [ ] Establish content guidelines doc

### Phase 3: Component Updates (Days 5-10)
Rewrite each component page to new standard:

**Priority 1 (Core):**
- [ ] Buttons
- [ ] Forms (Inputs, Selects, Textareas)
- [ ] Cards
- [ ] Modals
- [ ] Tables

**Priority 2 (Navigation):**
- [ ] Tabs
- [ ] Accordions
- [ ] Menus
- [ ] Dropdowns
- [ ] Breadcrumbs

**Priority 3 (Feedback):**
- [ ] Alerts
- [ ] Toasts
- [ ] Progress
- [ ] Badges
- [ ] Tooltips

**Priority 4 (Data Display):**
- [ ] Lists
- [ ] Avatars
- [ ] Empty States
- [ ] Skeletons

**Priority 5 (Layout):**
- [ ] Layouts pattern page
- [ ] Dividers
- [ ] Drawers
- [ ] Toolbar

### Phase 4: Polish (Days 11-12)
- [ ] Homepage refresh
- [ ] Getting Started guide
- [ ] Consistent spacing audit
- [ ] Typography hierarchy check
- [ ] Mobile experience review
- [ ] Update visual regression baselines

---

## Technical Specifications

### New Preview Block Syntax

```markdown
<Preview variant="interactive" background="checkered">
  <PreviewPane>
    <button class="Button Button--primary">Click me</button>
  </PreviewPane>
  <PreviewControls>
    - variant: primary | secondary | ghost
    - size: small | medium | large
    - disabled: true | false
  </PreviewControls>
</Preview>
```

### Build System Updates

`build.mjs` needs:
1. Parse new `<Preview>` attributes
2. Generate tabbed interface HTML
3. Extract and display HTML/CSS separately
4. Add copy-to-clipboard functionality
5. Support viewport/theme toggles

### New CSS Components

```css
/* Preview container */
.Preview { }
.Preview-tabs { }
.Preview-pane { }
.Preview-code { }
.Preview-controls { }

/* API table */
.ApiTable { }
.ApiTable-prop { }
.ApiTable-type { }
.ApiTable-default { }

/* Variant grid */
.VariantGrid { }
.VariantGrid-item { }
.VariantGrid-label { }
```

---

## Success Metrics

1. **Consistency:** Every component page passes structure checklist
2. **Usability:** Copy-paste workflow takes < 10 seconds
3. **Comprehensiveness:** All components have API reference
4. **Visual quality:** Matches polish level of shadcn/ui
5. **Interactivity:** At least Phase 1 preview system complete

---

## Reference Links

- [Tailwind CSS](https://tailwindcss.com) — Beautiful marketing, clear guides
- [shadcn/ui](https://ui.shadcn.com/docs/components/accordion) — Excellent component pages, copy-first UX
- [Base Web](https://baseweb.design/components/button/) — Interactive playgrounds
- [Chakra UI](https://chakra-ui.com/docs/components/button) — Great props tables, customization docs

---

## Open Questions

1. **Interactive playground scope?** Full Base Web-style or simpler prop toggles?
2. **Framework examples?** Add React/Vue snippets alongside vanilla HTML?
3. **Figma/design files?** Include design assets for designers?
4. **Versioning?** How to handle breaking changes in components?

---

## Next Steps

1. Review this plan — feedback on priorities/scope
2. Start with Preview component redesign
3. Pick one component (Buttons) as the template
4. Iterate until we're happy with the format
5. Systematically update remaining components

---

*This document will be updated as we progress through v0.2 development.*
