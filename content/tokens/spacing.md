# Spacing

Carbon uses a **4px base unit** for all spacing. This creates consistent rhythm and alignment across every component and layout.

## Why 4px?

- **Divisible** — Works cleanly with common screen densities (1x, 2x, 3x)
- **Flexible** — Small enough for fine-tuning, large enough to create visible hierarchy
- **Industry standard** — Used by Material Design, GitHub Primer, and most modern systems

---

## The Scale

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `--space-1` | 0.25rem | 4px | Icon gaps, tight padding |
| `--space-2` | 0.5rem | 8px | Button padding, small gaps |
| `--space-3` | 0.75rem | 12px | Input padding, list spacing |
| `--space-4` | 1rem | 16px | Card padding, standard gaps |
| `--space-5` | 1.25rem | 20px | Section spacing |
| `--space-6` | 1.5rem | 24px | Component margins |
| `--space-8` | 2rem | 32px | Large gaps, section breaks |
| `--space-12` | 3rem | 48px | Page sections, hero spacing |

<Preview title="Visual Scale">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-1</code>
            <div style="width: 4px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">4px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-2</code>
            <div style="width: 8px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">8px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-3</code>
            <div style="width: 12px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">12px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-4</code>
            <div style="width: 16px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">16px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-5</code>
            <div style="width: 20px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">20px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-6</code>
            <div style="width: 24px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">24px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-8</code>
            <div style="width: 32px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">32px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px;">--space-12</code>
            <div style="width: 48px; height: 24px; background: var(--accent-primary); border-radius: 2px;"></div>
            <span style="color: var(--text-secondary);">48px</span>
        </div>
    </div>
</Preview>

---

## Usage Guidelines

### Component Internal Spacing

Use smaller values (1-4) for padding and gaps within components.

<Preview title="Button Padding">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <button class="Button Button--primary">
                Standard Button
            </button>
            <code style="margin-left: var(--space-3); font-size: 0.85em;">padding: var(--space-2) var(--space-4)</code>
        </div>
        <div>
            <button class="Button Button--primary" style="padding: var(--space-1) var(--space-2); font-size: 0.85rem;">
                Small Button
            </button>
            <code style="margin-left: var(--space-3); font-size: 0.85em;">padding: var(--space-1) var(--space-2)</code>
        </div>
    </div>
</Preview>

```css
/* Buttons */
.Button { padding: var(--space-2) var(--space-4); }
.Button--small { padding: var(--space-1) var(--space-2); }
.Button--large { padding: var(--space-3) var(--space-6); }

/* Inputs */
.Input { padding: var(--space-2) var(--space-3); }

/* Cards */
.Card-body { padding: var(--space-4); }
```

### Component Gaps

Use consistent gaps between related elements.

<Preview title="Gap Spacing">
    <div style="display: flex; flex-direction: column; gap: var(--space-6); width: 100%;">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Tight (--space-2)</small>
            <div style="display: flex; gap: var(--space-2);">
                <span class="Badge">Tag</span>
                <span class="Badge">Tag</span>
                <span class="Badge">Tag</span>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Standard (--space-4)</small>
            <div style="display: flex; gap: var(--space-4);">
                <button class="Button Button--primary">Save</button>
                <button class="Button">Cancel</button>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Loose (--space-6)</small>
            <div style="display: flex; gap: var(--space-6);">
                <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-2);">Card A</div>
                <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-2);">Card B</div>
            </div>
        </div>
    </div>
</Preview>

```css
/* Tight - inline elements */
gap: var(--space-2);

/* Standard - buttons, form rows */
gap: var(--space-4);

/* Loose - cards, sections */
gap: var(--space-6);
```

### Layout Spacing

Use larger values (6-12) for page-level spacing.

<Preview title="Section Spacing">
    <div style="display: flex; flex-direction: column; width: 100%; border: 1px solid var(--border-subtle); border-radius: var(--space-2); overflow: hidden;">
        <div style="padding: var(--space-6); background: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
            <strong>Header</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-6)</code>
        </div>
        <div style="padding: var(--space-8);">
            <strong>Main Content</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-8)</code>
            <div style="margin-top: var(--space-6); padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-1);">
                <small>Nested section with margin-top: var(--space-6)</small>
            </div>
        </div>
        <div style="padding: var(--space-4); background: var(--bg-secondary); border-top: 1px solid var(--border-subtle);">
            <strong>Footer</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-4)</code>
        </div>
    </div>
</Preview>

```css
/* Page container */
.container { padding: 0 var(--space-6); }

/* Section margins */
.section { margin-bottom: var(--space-12); }

/* Content blocks */
.content > * + * { margin-top: var(--space-6); }
```

---

## Spacing Patterns

### Stack Pattern

Vertical spacing between block elements.

<Preview title="Stack Spacing">
    <div class="Layout-stack" style="max-width: 300px;">
        <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-1);">First item</div>
        <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-1);">Second item</div>
        <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-1);">Third item</div>
    </div>
</Preview>

```css
.Layout-stack { gap: var(--space-4); }
.Layout-stack--tight { gap: var(--space-2); }
.Layout-stack--loose { gap: var(--space-8); }
```

### Inset Pattern

Equal padding on all sides.

<Preview title="Inset Variations">
    <div style="display: flex; gap: var(--space-4);">
        <div style="padding: var(--space-2); background: var(--bg-secondary); border: 1px dashed var(--border-strong); border-radius: var(--space-1);">
            <div style="background: var(--accent-primary); color: white; padding: var(--space-2); border-radius: var(--space-1); font-size: 0.8em;">space-2</div>
        </div>
        <div style="padding: var(--space-4); background: var(--bg-secondary); border: 1px dashed var(--border-strong); border-radius: var(--space-1);">
            <div style="background: var(--accent-primary); color: white; padding: var(--space-2); border-radius: var(--space-1); font-size: 0.8em;">space-4</div>
        </div>
        <div style="padding: var(--space-6); background: var(--bg-secondary); border: 1px dashed var(--border-strong); border-radius: var(--space-1);">
            <div style="background: var(--accent-primary); color: white; padding: var(--space-2); border-radius: var(--space-1); font-size: 0.8em;">space-6</div>
        </div>
    </div>
</Preview>

### Squish Pattern

Reduced vertical padding (common for buttons and pills).

<Preview title="Squish Inset">
    <div style="display: flex; gap: var(--space-4); align-items: center;">
        <div style="padding: var(--space-1) var(--space-3); background: var(--accent-primary); color: white; border-radius: var(--space-1); font-size: 0.85em;">
            Squish: 1 × 3
        </div>
        <div style="padding: var(--space-2) var(--space-4); background: var(--accent-primary); color: white; border-radius: var(--space-1);">
            Squish: 2 × 4
        </div>
        <div style="padding: var(--space-3) var(--space-6); background: var(--accent-primary); color: white; border-radius: var(--space-1);">
            Squish: 3 × 6
        </div>
    </div>
</Preview>

```css
/* Squish ratios (vertical × horizontal) */
padding: var(--space-1) var(--space-3); /* 1:3 - pills, small tags */
padding: var(--space-2) var(--space-4); /* 1:2 - buttons */
padding: var(--space-3) var(--space-6); /* 1:2 - large buttons */
```

---

## Responsive Spacing

Adjust spacing at different breakpoints for optimal density.

```css
/* Base mobile spacing */
.container {
  padding: 0 var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### Spacing Scale by Context

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Page padding | space-4 | space-6 | space-8 |
| Section gap | space-6 | space-8 | space-12 |
| Card padding | space-3 | space-4 | space-4 |
| Component gap | space-2 | space-3 | space-4 |

---

## Best Practices

### Do

- ✓ **Use tokens, not arbitrary values** — `var(--space-4)` not `15px`
- ✓ **Be consistent** — Same spacing for same relationships
- ✓ **Create hierarchy** — More space = more separation
- ✓ **Use the scale** — Jump by meaningful increments (2→4→6, not 2→3→4)

### Don't

- ✗ **Mix units** — Don't combine px and rem arbitrarily
- ✗ **Invent values** — Stick to the scale
- ✗ **Overspace** — Dense UIs can feel more professional
- ✗ **Underspace** — Cramped layouts hurt readability

<Preview title="Spacing Hierarchy">
    <div style="display: flex; gap: var(--space-8); width: 100%;">
        <div style="flex: 1;">
            <small style="color: oklch(55% 0.2 25); font-weight: 600; display: block; margin-bottom: var(--space-2);">❌ Inconsistent</small>
            <div style="border: 1px solid var(--border-subtle); border-radius: var(--space-2); padding: 15px;">
                <div style="margin-bottom: 10px; font-weight: 600;">Title</div>
                <div style="margin-bottom: 18px; color: var(--text-secondary);">Description text</div>
                <button class="Button Button--primary" style="margin-top: 12px;">Action</button>
            </div>
        </div>
        <div style="flex: 1;">
            <small style="color: oklch(55% 0.15 150); font-weight: 600; display: block; margin-bottom: var(--space-2);">✓ Consistent</small>
            <div style="border: 1px solid var(--border-subtle); border-radius: var(--space-2); padding: var(--space-4);">
                <div style="margin-bottom: var(--space-2); font-weight: 600;">Title</div>
                <div style="margin-bottom: var(--space-4); color: var(--text-secondary);">Description text</div>
                <button class="Button Button--primary">Action</button>
            </div>
        </div>
    </div>
</Preview>

---

## Quick Reference

```css
/* Micro */
var(--space-1)  /* 4px  - Icon gaps, borders */
var(--space-2)  /* 8px  - Button padding, small gaps */

/* Standard */
var(--space-3)  /* 12px - Input padding */
var(--space-4)  /* 16px - Card padding, default gap */

/* Comfortable */
var(--space-5)  /* 20px - Section spacing */
var(--space-6)  /* 24px - Component margins */

/* Spacious */
var(--space-8)  /* 32px - Section breaks */
var(--space-12) /* 48px - Page sections */
```
