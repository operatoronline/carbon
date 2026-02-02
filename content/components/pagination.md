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

## Accessibility

- Use `<nav>` element with appropriate `aria-label`
- Mark current page with `aria-current="page"`
- Disabled items should have `aria-disabled="true"`
- Previous/Next buttons should have descriptive `aria-label`
