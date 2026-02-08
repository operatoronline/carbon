# Canonical Page Structure

This document defines the required section structure for all Carbon Design System pages. Every sub-agent MUST follow this exactly.

---

## Component Pages

### Full Section Order

```
# Component Name
[Intro paragraph — what it is, when to use it]
---
## [Component-specific sections]
[Variants, sizes, states, with icons, groups, etc. — varies per component]
---
## Common Patterns
[Real-world usage examples: in cards, in forms, in modals, toolbar combos, etc.]
[Each pattern gets a <Preview> block with inline styles]
---
## Customization
[How to override via CSS custom properties]
[Code examples showing theming, custom variants]
---
## API Reference
[THE INTERFACE — class names, attributes, expected markup]
[Must use <table class="ApiTable"> HTML format, NOT markdown tables]

Example:
<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Component</code></td>
<td class="ApiTable-desc">Base component styles (required)</td>
</tr>
</tbody>
</table>

Sub-sections as needed: Base Classes, Variant Classes, Size Classes, Modifier Classes, Attributes, Custom Properties
---
## CSS Reference
[THE IMPLEMENTATION — full copy-paste ready CSS]
[Presented in fenced ```css code blocks]
[This is the actual CSS source code for the component]
[Organize by: base styles, variants, sizes, states, modifiers, responsive]
---
## Accessibility
[Keyboard Support table (Key | Action)]
[Screen Reader guidance with code examples]
[ARIA attributes and patterns]
---
## Best Practices
### Do
- ✓ **Bold guideline** — Explanation

### Don't
- ✗ **Bold guideline** — Explanation
```

### Rules

1. **Section order is mandatory** — Common Patterns → Customization → API Reference → CSS Reference → Accessibility → Best Practices
2. **API Reference uses ApiTable HTML** — Never markdown tables
3. **API Reference ≠ CSS Reference**:
   - API Reference = What classes/attributes exist and what they do (the contract)
   - CSS Reference = The actual CSS rules (the implementation)
4. **Common Patterns must have Preview blocks** — Not just code snippets
5. **Best Practices uses ✓/✗ format** with bold guidelines
6. **Every component must have ALL six tail sections** — Add missing ones

### For components with JavaScript:
- JavaScript section goes BEFORE Common Patterns (it's a component-specific section)

---

## Token Pages

### Full Section Order

```
# Token Name
[Philosophy paragraph — WHY this approach]
---
## [Token-specific sections]
[The scale, values, visual demos, educational comparisons]
---
## Best Practices
### Do / ### Don't (✓/✗ format)
---
## Quick Reference
[Cheat sheet with all token values in a fenced code block]
```

---

## Pattern Pages

### Full Section Order

```
# Pattern Name
[Intro paragraph]
---
## [Pattern-specific sections]
[Variants, examples, usage contexts]
---
## Best Practices
### Do / ### Don't (✓/✗ format)
---
## CSS Reference
[Full CSS source code]
```

---

## Content Quality Standards

Match the token pages (colors, typography, spacing) in richness:

1. **Rich Preview blocks** — Every major concept gets a visual demo
2. **Educational depth** — Explain WHY, not just WHAT
3. **Comparison demos** — Show good vs bad when relevant
4. **Inline styles in Previews** — Use Carbon's own CSS variables (var(--space-4), var(--accent), var(--ff-b), etc.)
5. **No curved vertical bars** — Any vertical bar elements must NOT have border-radius (straight edges only)
6. **Code examples** — Every Preview should have a corresponding code block showing the HTML

---

## Formatting Rules

1. **Previews**: `<Preview title="...">` with inline CSS using Carbon tokens
2. **Tables**: API tables use `<table class="ApiTable">` HTML; other tables can use markdown
3. **Code blocks**: Fenced with language (```html, ```css, ```js)
4. **Headings**: H2 for main sections, H3 for subsections
5. **Section separators**: `---` between major H2 sections
