# Skeletons

Skeletons are placeholder previews that indicate content is loading.

## Basic Skeleton

<Preview title="Basic Skeleton">
    <div style="width: 200px;">
        <div class="Skeleton" style="height: 16px; width: 80%;"></div>
    </div>
</Preview>

```html
<div class="Skeleton" style="height: 16px; width: 80%;"></div>
```

## Text Skeleton

Simulate loading text with multiple lines.

<Preview title="Text Skeleton">
    <div style="width: 300px; display: flex; flex-direction: column; gap: var(--space-2);">
        <div class="Skeleton" style="height: 16px; width: 100%;"></div>
        <div class="Skeleton" style="height: 16px; width: 90%;"></div>
        <div class="Skeleton" style="height: 16px; width: 75%;"></div>
    </div>
</Preview>

```html
<div class="Skeleton" style="height: 16px; width: 100%;"></div>
<div class="Skeleton" style="height: 16px; width: 90%;"></div>
<div class="Skeleton" style="height: 16px; width: 75%;"></div>
```

## Avatar Skeleton

<Preview title="Avatar Skeleton">
    <div style="display: flex; gap: var(--space-4);">
        <div class="Skeleton Skeleton--circle" style="width: 32px; height: 32px;"></div>
        <div class="Skeleton Skeleton--circle" style="width: 48px; height: 48px;"></div>
        <div class="Skeleton Skeleton--circle" style="width: 64px; height: 64px;"></div>
    </div>
</Preview>

```html
<div class="Skeleton Skeleton--circle" style="width: 48px; height: 48px;"></div>
```

## Card Skeleton

<Preview title="Card Skeleton">
    <div class="Card" style="width: 280px;">
        <div class="Skeleton" style="height: 140px; border-radius: 0;"></div>
        <div class="Card-body">
            <div class="Skeleton" style="height: 20px; width: 60%; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 14px; width: 100%; margin-bottom: var(--space-1);"></div>
            <div class="Skeleton" style="height: 14px; width: 80%;"></div>
        </div>
    </div>
</Preview>

```html
<div class="Card">
    <div class="Skeleton" style="height: 140px;"></div>
    <div class="Card-body">
        <div class="Skeleton" style="height: 20px; width: 60%;"></div>
        <div class="Skeleton" style="height: 14px; width: 100%;"></div>
        <div class="Skeleton" style="height: 14px; width: 80%;"></div>
    </div>
</div>
```

## List Skeleton

<Preview title="List Skeleton">
    <div style="width: 300px; display: flex; flex-direction: column; gap: var(--space-3);">
        <div style="display: flex; gap: var(--space-3); align-items: center;">
            <div class="Skeleton Skeleton--circle" style="width: 40px; height: 40px;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-1);">
                <div class="Skeleton" style="height: 14px; width: 70%;"></div>
                <div class="Skeleton" style="height: 12px; width: 50%;"></div>
            </div>
        </div>
        <div style="display: flex; gap: var(--space-3); align-items: center;">
            <div class="Skeleton Skeleton--circle" style="width: 40px; height: 40px;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-1);">
                <div class="Skeleton" style="height: 14px; width: 60%;"></div>
                <div class="Skeleton" style="height: 12px; width: 40%;"></div>
            </div>
        </div>
        <div style="display: flex; gap: var(--space-3); align-items: center;">
            <div class="Skeleton Skeleton--circle" style="width: 40px; height: 40px;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-1);">
                <div class="Skeleton" style="height: 14px; width: 80%;"></div>
                <div class="Skeleton" style="height: 12px; width: 55%;"></div>
            </div>
        </div>
    </div>
</Preview>

## Table Skeleton

<Preview title="Table Skeleton">
    <div style="width: 100%;">
        <div style="display: flex; gap: var(--space-4); padding: var(--space-3) 0; border-bottom: 2px solid var(--bd);">
            <div class="Skeleton" style="height: 12px; width: 80px;"></div>
            <div class="Skeleton" style="height: 12px; width: 120px;"></div>
            <div class="Skeleton" style="height: 12px; width: 60px;"></div>
        </div>
        <div style="display: flex; gap: var(--space-4); padding: var(--space-3) 0; border-bottom: 1px solid var(--bd);">
            <div class="Skeleton" style="height: 14px; width: 80px;"></div>
            <div class="Skeleton" style="height: 14px; width: 120px;"></div>
            <div class="Skeleton" style="height: 14px; width: 60px;"></div>
        </div>
        <div style="display: flex; gap: var(--space-4); padding: var(--space-3) 0; border-bottom: 1px solid var(--bd);">
            <div class="Skeleton" style="height: 14px; width: 80px;"></div>
            <div class="Skeleton" style="height: 14px; width: 120px;"></div>
            <div class="Skeleton" style="height: 14px; width: 60px;"></div>
        </div>
    </div>
</Preview>

## Static Variant

Disable animation for reduced motion preferences.

<Preview title="Static Skeleton">
    <div class="Skeleton Skeleton--static" style="height: 16px; width: 200px;"></div>
</Preview>

```html
<div class="Skeleton Skeleton--static">...</div>
```

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.Skeleton` | Base skeleton with shimmer animation |
| `.Skeleton--circle` | Circular skeleton (avatars) |
| `.Skeleton--static` | No animation (reduced motion) |

### Sizing

Skeletons use inline `style` attributes for dimensions:

| Property | Example | Description |
|----------|---------|-------------|
| `height` | `16px` | Match text line height |
| `width` | `80%` | Percentage or fixed width |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bg-secondary` | — | Base skeleton color |
| `--border-subtle` | — | Shimmer highlight color |

### Attributes

| Attribute | Element | Description |
|-----------|---------|-------------|
| `aria-busy="true"` | Container | Indicates loading state |
| `aria-label` | Container | Describes what's loading |

---

## Accessibility

- Use `aria-busy="true"` on the container while loading
- Use `aria-label` to describe what's loading
- Respect `prefers-reduced-motion` for animations

```html
<div aria-busy="true" aria-label="Loading user profile">
    <div class="Skeleton">...</div>
</div>
```

---

## Best Practices

### Do

- ✓ **Match content layout** — Skeleton should resemble final content
- ✓ **Vary line widths** — Creates natural text appearance
- ✓ **Respect reduced motion** — Use `.Skeleton--static` for accessibility
- ✓ **Group related skeletons** — Wrap in container with `aria-busy`

### Don't

- ✗ **Use for fast loads** — Under 300ms doesn't need skeleton
- ✗ **Animate everything** — Static skeletons are less distracting
- ✗ **Mismatch dimensions** — Skeleton should match actual content size
