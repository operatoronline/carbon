# Chips

Chips (also called Tags) are compact elements that represent inputs, attributes, or actions. They can be interactive (selectable, removable) or purely informational.

---

## Basic Chips

Simple non-interactive chips for displaying metadata.

<Preview title="Basic Chips">
    <div class="Layout-cluster">
        <span class="Chip">Design</span>
        <span class="Chip">Development</span>
        <span class="Chip">Product</span>
        <span class="Chip">Research</span>
    </div>
</Preview>

```html
<span class="Chip">Design</span>
<span class="Chip">Development</span>
```

---

## With Icons

Add leading icons for visual context.

<Preview title="Chips with Icons">
    <div class="Layout-cluster">
        <span class="Chip">
            <i class="ph ph-user"></i>
            John Doe
        </span>
        <span class="Chip">
            <i class="ph ph-calendar"></i>
            Today
        </span>
        <span class="Chip">
            <i class="ph ph-map-pin"></i>
            San Francisco
        </span>
    </div>
</Preview>

```html
<span class="Chip">
    <i class="ph ph-user"></i>
    John Doe
</span>
```

---

## Removable Chips

Add a close button to allow users to remove chips.

<Preview title="Removable Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--removable">
            React
            <button class="Chip-remove" aria-label="Remove React">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--removable">
            TypeScript
            <button class="Chip-remove" aria-label="Remove TypeScript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--removable">
            Node.js
            <button class="Chip-remove" aria-label="Remove Node.js">
                <i class="ph ph-x"></i>
            </button>
        </span>
    </div>
</Preview>

```html
<span class="Chip Chip--removable">
    React
    <button class="Chip-remove" aria-label="Remove React">
        <i class="ph ph-x"></i>
    </button>
</span>
```

---

## Selectable Chips

Chips that can be toggled on/off, useful for filters.

<Preview title="Selectable Chips">
    <div class="Layout-cluster">
        <button class="Chip Chip--selectable Chip--selected">
            <i class="ph ph-check"></i>
            All
        </button>
        <button class="Chip Chip--selectable">
            Open
        </button>
        <button class="Chip Chip--selectable Chip--selected">
            <i class="ph ph-check"></i>
            In Progress
        </button>
        <button class="Chip Chip--selectable">
            Closed
        </button>
    </div>
</Preview>

```html
<button class="Chip Chip--selectable">Open</button>
<button class="Chip Chip--selectable Chip--selected">
    <i class="ph ph-check"></i>
    Selected
</button>
```

---

## Color Variants

Semantic colors for different contexts.

<Preview title="Chip Colors">
    <div class="Layout-cluster">
        <span class="Chip">Default</span>
        <span class="Chip Chip--primary">Primary</span>
        <span class="Chip Chip--success">Success</span>
        <span class="Chip Chip--warning">Warning</span>
        <span class="Chip Chip--error">Error</span>
    </div>
</Preview>

```html
<span class="Chip">Default</span>
<span class="Chip Chip--primary">Primary</span>
<span class="Chip Chip--success">Success</span>
<span class="Chip Chip--warning">Warning</span>
<span class="Chip Chip--error">Error</span>
```

---

## Outlined Variant

Lighter visual weight with border-only styling.

<Preview title="Outlined Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--outlined">Default</span>
        <span class="Chip Chip--outlined Chip--primary">Primary</span>
        <span class="Chip Chip--outlined Chip--success">Success</span>
        <span class="Chip Chip--outlined Chip--warning">Warning</span>
        <span class="Chip Chip--outlined Chip--error">Error</span>
    </div>
</Preview>

```html
<span class="Chip Chip--outlined">Default</span>
<span class="Chip Chip--outlined Chip--primary">Primary</span>
```

---

## Sizes

<Preview title="Chip Sizes">
    <div class="Layout-stack">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Small</small>
            <div class="Layout-cluster">
                <span class="Chip Chip--small">Small</span>
                <span class="Chip Chip--small Chip--primary">Primary</span>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Default</small>
            <div class="Layout-cluster">
                <span class="Chip">Default</span>
                <span class="Chip Chip--primary">Primary</span>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Large</small>
            <div class="Layout-cluster">
                <span class="Chip Chip--large">Large</span>
                <span class="Chip Chip--large Chip--primary">Primary</span>
            </div>
        </div>
    </div>
</Preview>

```html
<span class="Chip Chip--small">Small</span>
<span class="Chip">Default</span>
<span class="Chip Chip--large">Large</span>
```

---

## Avatar Chips

Chips with leading avatar for people or entities.

<Preview title="Avatar Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--avatar">
            <span class="Chip-avatar" style="background: var(--accent-primary);">A</span>
            Alice
        </span>
        <span class="Chip Chip--avatar Chip--removable">
            <span class="Chip-avatar" style="background: oklch(55% 0.15 150);">B</span>
            Bob
            <button class="Chip-remove" aria-label="Remove Bob">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--avatar">
            <img class="Chip-avatar" src="https://i.pravatar.cc/24?img=3" alt="">
            Carol
        </span>
    </div>
</Preview>

```html
<span class="Chip Chip--avatar">
    <span class="Chip-avatar">A</span>
    Alice
</span>

<span class="Chip Chip--avatar">
    <img class="Chip-avatar" src="avatar.jpg" alt="">
    Carol
</span>
```

---

## Input Chips

Common pattern for tag inputs in forms.

<Preview title="Tag Input">
    <div style="border: 1px solid var(--border-strong); border-radius: var(--space-1); padding: var(--space-2); display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; min-height: 44px;">
        <span class="Chip Chip--small Chip--removable">
            javascript
            <button class="Chip-remove" aria-label="Remove javascript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--small Chip--removable">
            typescript
            <button class="Chip-remove" aria-label="Remove typescript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--small Chip--removable">
            react
            <button class="Chip-remove" aria-label="Remove react">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <input type="text" placeholder="Add tag..." style="border: none; outline: none; flex: 1; min-width: 100px; font-family: var(--font-sans); font-size: 0.9rem; background: transparent;">
    </div>
</Preview>

```html
<div class="ChipInput">
    <span class="Chip Chip--small Chip--removable">
        tag
        <button class="Chip-remove">×</button>
    </span>
    <input type="text" placeholder="Add tag...">
</div>
```

---

## Use Cases

### Filter Bar

<Preview title="Filter Example">
    <div class="Layout-stack Layout-stack--tight">
        <small style="color: var(--text-secondary);">Active filters:</small>
        <div class="Layout-cluster">
            <span class="Chip Chip--primary Chip--removable">
                Status: Open
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <span class="Chip Chip--primary Chip--removable">
                Assigned: Me
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <span class="Chip Chip--primary Chip--removable">
                Label: Bug
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <button class="Link" style="font-size: 0.85rem;">Clear all</button>
        </div>
    </div>
</Preview>

### Category Tags

<Preview title="Category Tags">
    <div class="Card" style="max-width: 320px;">
        <div style="height: 120px; background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(60% 0.15 280));"></div>
        <div class="Card-body">
            <div class="Layout-cluster" style="margin-bottom: var(--space-2);">
                <span class="Chip Chip--small Chip--outlined Chip--primary">Tutorial</span>
                <span class="Chip Chip--small Chip--outlined">Beginner</span>
            </div>
            <div class="Card-title">Getting Started with Carbon</div>
            <div class="Card-description">Learn how to set up and customize the design system.</div>
        </div>
    </div>
</Preview>

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.Chip` | Base chip styling |
| `.Chip--primary` | Primary color variant |
| `.Chip--success` | Success color variant |
| `.Chip--warning` | Warning color variant |
| `.Chip--error` | Error color variant |
| `.Chip--outlined` | Transparent background with border |
| `.Chip--small` | Smaller chip size |
| `.Chip--large` | Larger chip size |
| `.Chip--removable` | Chip with dismiss button |
| `.Chip--selectable` | Interactive toggle chip |
| `.Chip--selected` | Active selected state |
| `.Chip--avatar` | Chip with leading avatar |
| `.Chip-remove` | Dismiss button element |
| `.Chip-avatar` | Avatar element inside chip |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--space-1` | `0.25rem` | Gap between elements |
| `--space-2` | `0.5rem` | Horizontal padding |
| `--space-4` | `1rem` | Border radius |
| `--bg-secondary` | — | Default background |
| `--border-subtle` | — | Default border color |
| `--text-primary` | — | Text color |
| `--text-secondary` | — | Icon color |
| `--accent-primary` | — | Selected state background |

### Attributes

| Attribute | Description |
|-----------|-------------|
| `aria-label` | Required on `.Chip-remove` to describe what is removed |
| `role="listitem"` | Use when chips are in a list context |
| `aria-pressed` | Use on selectable chips to indicate state |

---

## Accessibility

- **Use `<button>` for interactive chips** — Ensures keyboard accessibility
- **Provide aria-labels for remove buttons** — Screen readers need context
- **Announce changes** — Use aria-live regions when chips are added/removed
- **Ensure sufficient contrast** — Especially for colored variants

```html
<!-- Removable chip with proper labels -->
<span class="Chip Chip--removable" role="listitem">
    React
    <button class="Chip-remove" 
            aria-label="Remove React from selection">
        <i class="ph ph-x" aria-hidden="true"></i>
    </button>
</span>

<!-- Chip group with live region -->
<div role="list" aria-label="Selected filters">
    <span class="Chip" role="listitem">Filter 1</span>
    <span class="Chip" role="listitem">Filter 2</span>
</div>
<div aria-live="polite" class="sr-only">
    <!-- Announce changes here -->
</div>
```

---

## CSS Reference

```css
/* Base */
.Chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-4);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
}

.Chip i {
  font-size: 1rem;
  color: var(--text-secondary);
}

/* Remove button */
.Chip-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 2px;
  margin: -2px;
  margin-left: var(--space-1);
  border-radius: 50%;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.15s;
}

.Chip-remove:hover {
  background-color: oklch(0% 0 0 / 0.1);
  color: var(--text-primary);
}

/* Selectable */
.Chip--selectable {
  cursor: pointer;
  transition: all 0.15s;
}

.Chip--selectable:hover {
  border-color: var(--border-strong);
}

.Chip--selected {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.Chip--selected i {
  color: white;
}

/* Color variants */
.Chip--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  border-color: oklch(60% 0.15 250 / 0.3);
  color: oklch(50% 0.15 250);
}

.Chip--success {
  background-color: oklch(55% 0.15 150 / 0.15);
  border-color: oklch(55% 0.15 150 / 0.3);
  color: oklch(45% 0.15 150);
}

.Chip--warning {
  background-color: oklch(70% 0.15 80 / 0.15);
  border-color: oklch(70% 0.15 80 / 0.3);
  color: oklch(50% 0.15 80);
}

.Chip--error {
  background-color: oklch(55% 0.2 25 / 0.15);
  border-color: oklch(55% 0.2 25 / 0.3);
  color: oklch(50% 0.2 25);
}

/* Outlined variant */
.Chip--outlined {
  background-color: transparent;
}

/* Sizes */
.Chip--small {
  padding: 2px var(--space-2);
  font-size: 0.75rem;
}

.Chip--large {
  padding: var(--space-2) var(--space-3);
  font-size: 0.9rem;
}

/* Avatar variant */
.Chip--avatar {
  padding-left: 2px;
}

.Chip-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  object-fit: cover;
}
```
