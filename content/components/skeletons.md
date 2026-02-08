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

## Common Patterns

### Profile Card Loading

<Preview title="Profile Card Skeleton">
    <div style="max-width: 300px; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3);">
            <div class="Skeleton Skeleton--circle" style="width: 48px; height: 48px;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-1);">
                <div class="Skeleton" style="height: 16px; width: 70%;"></div>
                <div class="Skeleton" style="height: 12px; width: 50%;"></div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <div class="Skeleton" style="height: 14px; width: 100%;"></div>
            <div class="Skeleton" style="height: 14px; width: 85%;"></div>
        </div>
    </div>
</Preview>

### Article Feed

<Preview title="Article Feed Skeleton">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div style="display: flex; gap: var(--space-3);">
            <div class="Skeleton" style="width: 100px; height: 80px; flex-shrink: 0;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-2);">
                <div class="Skeleton" style="height: 16px; width: 90%;"></div>
                <div class="Skeleton" style="height: 12px; width: 100%;"></div>
                <div class="Skeleton" style="height: 12px; width: 60%;"></div>
            </div>
        </div>
        <div style="display: flex; gap: var(--space-3);">
            <div class="Skeleton" style="width: 100px; height: 80px; flex-shrink: 0;"></div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-2);">
                <div class="Skeleton" style="height: 16px; width: 75%;"></div>
                <div class="Skeleton" style="height: 12px; width: 100%;"></div>
                <div class="Skeleton" style="height: 12px; width: 45%;"></div>
            </div>
        </div>
    </div>
</Preview>

### Dashboard Widgets

<Preview title="Dashboard Skeleton">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); width: 100%;">
        <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
            <div class="Skeleton" style="height: 12px; width: 60%; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 24px; width: 40%;"></div>
        </div>
        <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
            <div class="Skeleton" style="height: 12px; width: 50%; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 24px; width: 35%;"></div>
        </div>
        <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
            <div class="Skeleton" style="height: 12px; width: 70%; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 24px; width: 45%;"></div>
        </div>
    </div>
</Preview>

### Form Loading

<Preview title="Form Skeleton">
    <div style="max-width: 350px; display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <div class="Skeleton" style="height: 12px; width: 80px; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 36px; width: 100%;"></div>
        </div>
        <div>
            <div class="Skeleton" style="height: 12px; width: 100px; margin-bottom: var(--space-2);"></div>
            <div class="Skeleton" style="height: 36px; width: 100%;"></div>
        </div>
        <div class="Skeleton" style="height: 36px; width: 120px;"></div>
    </div>
</Preview>

---

## Customization

Override skeleton styling with CSS custom properties:

```css
/* Custom shimmer colors */
.Skeleton {
  --skeleton-bg: oklch(90% 0 0);
  --skeleton-shimmer: oklch(95% 0 0);
}
```

### Pulse Animation (instead of shimmer)

```css
.Skeleton--pulse {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

### Theming

```css
[data-theme="dark"] .Skeleton {
  background: oklch(25% 0 0);
}

[data-theme="dark"] .Skeleton::after {
  background: linear-gradient(
    90deg,
    transparent,
    oklch(30% 0 0),
    transparent
  );
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Skeleton</code></td><td class="ApiTable-desc">Base skeleton with shimmer animation</td></tr>
<tr><td><code class="ApiTable-prop">.Skeleton--circle</code></td><td class="ApiTable-desc">Circular skeleton (for avatars)</td></tr>
<tr><td><code class="ApiTable-prop">.Skeleton--static</code></td><td class="ApiTable-desc">No animation (reduced motion)</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-busy="true"</code></td><td class="ApiTable-desc">On the container to indicate loading state</td></tr>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">On the container to describe what's loading</td></tr>
</tbody>
</table>

### Sizing

Skeletons use inline `style` attributes for dimensions. Set `height` to match the text line-height and `width` as percentage or fixed value.

---

## CSS Reference

```css
/* Base skeleton */
.Skeleton {
  background: var(--bg-s);
  border-radius: var(--r-s);
  position: relative;
  overflow: hidden;
}

/* Shimmer animation */
.Skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    oklch(100% 0 0 / 0.08),
    transparent
  );
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Circle variant */
.Skeleton--circle {
  border-radius: 50%;
}

/* Static variant */
.Skeleton--static::after {
  animation: none;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .Skeleton::after {
    animation: none;
  }
}
```

---

## Accessibility

### Screen Reader Guidance

Use `aria-busy="true"` on the container while content is loading. Add `aria-label` to describe what's being loaded. When content finishes loading, remove `aria-busy` or set it to `false`.

```html
<div aria-busy="true" aria-label="Loading user profile">
    <div class="Skeleton" style="height: 16px; width: 80%;"></div>
    <div class="Skeleton" style="height: 16px; width: 60%;"></div>
</div>
```

### Reduced Motion

Respect `prefers-reduced-motion` by disabling the shimmer animation. Use `.Skeleton--static` as a manual override, or rely on the CSS media query which handles it automatically.

### ARIA Attributes

- `aria-busy="true"` on loading containers
- `aria-label` to describe the loading content
- Remove `aria-busy` when content loads
- Use `aria-live="polite"` on the container if content loads asynchronously

---

## Best Practices

### Do

- ✓ **Match the final content layout** — Skeleton shape should mirror the real content
- ✓ **Vary line widths** — Different widths (100%, 80%, 60%) look more natural than uniform blocks
- ✓ **Respect reduced motion** — Disable shimmer for users who prefer reduced motion
- ✓ **Group related skeletons** — Wrap in a container with `aria-busy="true"`
- ✓ **Transition smoothly** — Fade skeletons into real content rather than hard-swapping
- ✓ **Use for layout-heavy content** — Cards, lists, and dashboards benefit most from skeletons

### Don't

- ✗ **Use for fast loads** — Content appearing in under 300ms doesn't need a skeleton
- ✗ **Animate everything** — Overuse of shimmer is distracting; use static for secondary areas
- ✗ **Mismatch dimensions** — A skeleton taller than the real content causes layout shift
- ✗ **Use skeletons for errors** — Show error states explicitly, not loading placeholders
- ✗ **Nest skeletons deeply** — Keep the placeholder structure simple and flat
- ✗ **Forget to remove aria-busy** — Stale `aria-busy="true"` confuses screen readers
