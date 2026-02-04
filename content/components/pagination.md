# Pagination

Pagination helps users navigate through large sets of content.

## Basic Pagination

<Preview title="Basic Pagination">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev" aria-label="Previous">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item">1</a>
        <a href="#" class="Pagination-item active">2</a>
        <a href="#" class="Pagination-item">3</a>
        <a href="#" class="Pagination-item">4</a>
        <a href="#" class="Pagination-item">5</a>
        <a href="#" class="Pagination-item Pagination-item--next" aria-label="Next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<nav class="Pagination">
    <a href="#" class="Pagination-item Pagination-item--prev">
        <i class="ph ph-caret-left"></i>
    </a>
    <a href="#" class="Pagination-item">1</a>
    <a href="#" class="Pagination-item active">2</a>
    <a href="#" class="Pagination-item">3</a>
    <a href="#" class="Pagination-item Pagination-item--next">
        <i class="ph ph-caret-right"></i>
    </a>
</nav>
```

## With Ellipsis

For large page counts, use ellipsis to indicate skipped pages.

<Preview title="Pagination with Ellipsis">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item">1</a>
        <span class="Pagination-ellipsis">...</span>
        <a href="#" class="Pagination-item">4</a>
        <a href="#" class="Pagination-item active">5</a>
        <a href="#" class="Pagination-item">6</a>
        <span class="Pagination-ellipsis">...</span>
        <a href="#" class="Pagination-item">20</a>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<span class="Pagination-ellipsis">...</span>
```

## Disabled States

<Preview title="Disabled Pagination">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev disabled" aria-disabled="true">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item active">1</a>
        <a href="#" class="Pagination-item">2</a>
        <a href="#" class="Pagination-item">3</a>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<a class="Pagination-item Pagination-item--prev disabled" aria-disabled="true">
```

## Compact

For tight spaces, use the compact variant.

<Preview title="Compact Pagination">
    <nav class="Pagination Pagination--compact">
        <a href="#" class="Pagination-item Pagination-item--prev">
            <i class="ph ph-caret-left"></i>
        </a>
        <span class="Pagination-info">Page 5 of 20</span>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<nav class="Pagination Pagination--compact">
    <a href="#" class="Pagination-item Pagination-item--prev">...</a>
    <span class="Pagination-info">Page 5 of 20</span>
    <a href="#" class="Pagination-item Pagination-item--next">...</a>
</nav>
```

## With Page Size

<Preview title="Pagination with Page Size">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <div style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
            <span>Show</span>
            <select class="Select" style="width: auto; padding: var(--space-1) var(--space-2);">
                <option>10</option>
                <option>25</option>
                <option>50</option>
            </select>
            <span>per page</span>
        </div>
        <nav class="Pagination">
            <a href="#" class="Pagination-item Pagination-item--prev">
                <i class="ph ph-caret-left"></i>
            </a>
            <a href="#" class="Pagination-item active">1</a>
            <a href="#" class="Pagination-item">2</a>
            <a href="#" class="Pagination-item">3</a>
            <a href="#" class="Pagination-item Pagination-item--next">
                <i class="ph ph-caret-right"></i>
            </a>
        </nav>
    </div>
</Preview>

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.Pagination` | Container for pagination controls |
| `.Pagination--compact` | Minimal prev/next with page info |
| `.Pagination-item` | Individual page link |
| `.Pagination-item--prev` | Previous page button |
| `.Pagination-item--next` | Next page button |
| `.Pagination-item.active` | Current page indicator |
| `.Pagination-item.disabled` | Non-interactive state |
| `.Pagination-ellipsis` | Skipped pages indicator |
| `.Pagination-info` | Page count text (compact mode) |

### Structure

```html
<nav class="Pagination" aria-label="Pagination">
    <a class="Pagination-item Pagination-item--prev">...</a>
    <a class="Pagination-item">1</a>
    <a class="Pagination-item active" aria-current="page">2</a>
    <span class="Pagination-ellipsis">...</span>
    <a class="Pagination-item">10</a>
    <a class="Pagination-item Pagination-item--next">...</a>
</nav>
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bg-secondary` | — | Item background |
| `--text-primary` | — | Item text color |
| `--accent-primary` | — | Active item color |
| `--border-subtle` | — | Item border |
| `--space-2` | `0.5rem` | Item padding |

### Attributes

| Attribute | Description |
|-----------|-------------|
| `aria-label` | On `<nav>` to describe pagination |
| `aria-current="page"` | On current page item |
| `aria-disabled="true"` | On disabled items |
| `aria-label="Previous/Next"` | On prev/next buttons |

---

## Accessibility

- Use `<nav>` element with appropriate `aria-label`
- Mark current page with `aria-current="page"`
- Disabled items should have `aria-disabled="true"`
- Previous/Next buttons should have descriptive `aria-label`

---

## Best Practices

### Do

- ✓ **Show context** — Always indicate current position
- ✓ **Limit visible pages** — Use ellipsis for large counts
- ✓ **Disable appropriately** — Gray out prev on page 1
- ✓ **Provide compact option** — For mobile or tight spaces

### Don't

- ✗ **Show all pages** — Creates overwhelming UI
- ✗ **Hide page numbers** — Users need to know position
- ✗ **Make touch targets too small** — Min 44px on mobile
