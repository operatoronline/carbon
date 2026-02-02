# Breadcrumbs

Breadcrumbs show the user's location within a site hierarchy and provide quick navigation to parent pages.

---

## Basic Breadcrumb

A simple trail of links separated by dividers.

<Preview title="Basic Breadcrumb">
    <nav class="Breadcrumb" aria-label="Breadcrumb">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Home</a></li>
            <li class="Breadcrumb-item"><a href="#">Products</a></li>
            <li class="Breadcrumb-item"><a href="#">Category</a></li>
            <li class="Breadcrumb-item" aria-current="page">Current Page</li>
        </ol>
    </nav>
</Preview>

```html
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item"><a href="#">Products</a></li>
        <li class="Breadcrumb-item" aria-current="page">Current Page</li>
    </ol>
</nav>
```

---

## With Icons

Add a home icon to the first item for visual clarity.

<Preview title="Breadcrumb with Home Icon">
    <nav class="Breadcrumb" aria-label="Breadcrumb">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item">
                <a href="#" aria-label="Home">
                    <i class="ph ph-house"></i>
                </a>
            </li>
            <li class="Breadcrumb-item"><a href="#">Settings</a></li>
            <li class="Breadcrumb-item" aria-current="page">Profile</li>
        </ol>
    </nav>
</Preview>

```html
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item">
            <a href="#" aria-label="Home">
                <i class="ph ph-house"></i>
            </a>
        </li>
        <li class="Breadcrumb-item"><a href="#">Settings</a></li>
        <li class="Breadcrumb-item" aria-current="page">Profile</li>
    </ol>
</nav>
```

---

## Custom Separators

Use different separator styles via CSS or inline.

<Preview title="Separator Styles">
    <div class="Layout-stack">
        <nav class="Breadcrumb" aria-label="Breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
        <nav class="Breadcrumb Breadcrumb--arrows" aria-label="Breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
        <nav class="Breadcrumb Breadcrumb--dots" aria-label="Breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
    </div>
</Preview>

```css
/* Default: slash */
.Breadcrumb-item + .Breadcrumb-item::before { content: "/"; }

/* Arrows */
.Breadcrumb--arrows .Breadcrumb-item + .Breadcrumb-item::before { content: "›"; }

/* Dots */
.Breadcrumb--dots .Breadcrumb-item + .Breadcrumb-item::before { content: "•"; }
```

---

## Truncated Breadcrumb

For deep hierarchies, collapse middle items with an ellipsis dropdown.

<Preview title="Truncated Breadcrumb">
    <nav class="Breadcrumb" aria-label="Breadcrumb">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Home</a></li>
            <li class="Breadcrumb-item">
                <button class="Breadcrumb-ellipsis" aria-label="Show more">
                    <i class="ph ph-dots-three"></i>
                </button>
            </li>
            <li class="Breadcrumb-item"><a href="#">Parent</a></li>
            <li class="Breadcrumb-item" aria-current="page">Current</li>
        </ol>
    </nav>
</Preview>

```html
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item">
            <button class="Breadcrumb-ellipsis" aria-label="Show more">...</button>
        </li>
        <li class="Breadcrumb-item"><a href="#">Parent</a></li>
        <li class="Breadcrumb-item" aria-current="page">Current</li>
    </ol>
</nav>
```

---

## Sizes

<Preview title="Breadcrumb Sizes">
    <div class="Layout-stack">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Small</small>
            <nav class="Breadcrumb Breadcrumb--small" aria-label="Breadcrumb">
                <ol class="Breadcrumb-list">
                    <li class="Breadcrumb-item"><a href="#">Home</a></li>
                    <li class="Breadcrumb-item"><a href="#">Section</a></li>
                    <li class="Breadcrumb-item" aria-current="page">Page</li>
                </ol>
            </nav>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Default</small>
            <nav class="Breadcrumb" aria-label="Breadcrumb">
                <ol class="Breadcrumb-list">
                    <li class="Breadcrumb-item"><a href="#">Home</a></li>
                    <li class="Breadcrumb-item"><a href="#">Section</a></li>
                    <li class="Breadcrumb-item" aria-current="page">Page</li>
                </ol>
            </nav>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Large</small>
            <nav class="Breadcrumb Breadcrumb--large" aria-label="Breadcrumb">
                <ol class="Breadcrumb-list">
                    <li class="Breadcrumb-item"><a href="#">Home</a></li>
                    <li class="Breadcrumb-item"><a href="#">Section</a></li>
                    <li class="Breadcrumb-item" aria-current="page">Page</li>
                </ol>
            </nav>
        </div>
    </div>
</Preview>

```css
.Breadcrumb { font-size: 0.875rem; }
.Breadcrumb--small { font-size: 0.75rem; }
.Breadcrumb--large { font-size: 1rem; }
```

---

## Accessibility

Breadcrumbs have important accessibility requirements:

1. **Use `<nav>` with `aria-label`** — Identifies the navigation landmark
2. **Use `<ol>` for the list** — Indicates ordered hierarchy
3. **Mark current page** — Use `aria-current="page"` on the last item
4. **Don't link current page** — The current page shouldn't be a link

```html
<!-- ✓ Accessible breadcrumb -->
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="/">Home</a></li>
        <li class="Breadcrumb-item"><a href="/products">Products</a></li>
        <li class="Breadcrumb-item" aria-current="page">Widget</li>
    </ol>
</nav>
```

---

## CSS Reference

```css
/* Base */
.Breadcrumb {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.Breadcrumb-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-2);
    list-style: none;
    margin: 0;
    padding: 0;
}

.Breadcrumb-item {
    display: flex;
    align-items: center;
}

/* Separator */
.Breadcrumb-item + .Breadcrumb-item::before {
    content: "/";
    margin-right: var(--space-2);
    color: var(--border-strong);
}

/* Links */
.Breadcrumb-item a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s;
}

.Breadcrumb-item a:hover {
    color: var(--accent-primary);
}

/* Current page */
.Breadcrumb-item[aria-current="page"] {
    color: var(--text-primary);
    font-weight: 500;
}

/* Ellipsis button */
.Breadcrumb-ellipsis {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: var(--space-1);
    border-radius: var(--space-1);
    display: flex;
    align-items: center;
}

.Breadcrumb-ellipsis:hover {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}

/* Variants */
.Breadcrumb--arrows .Breadcrumb-item + .Breadcrumb-item::before { content: "›"; }
.Breadcrumb--dots .Breadcrumb-item + .Breadcrumb-item::before { content: "•"; }

/* Sizes */
.Breadcrumb--small { font-size: 0.75rem; }
.Breadcrumb--large { font-size: 1rem; }
```

---

## Best Practices

### Do

- ✓ **Start with Home or root** — Provide full context
- ✓ **Keep labels short** — Use concise page names
- ✓ **Show hierarchy, not history** — Breadcrumbs aren't browser history
- ✓ **Place consistently** — Usually below header, above page title

### Don't

- ✗ **Link to current page** — It's redundant
- ✗ **Use on single-level sites** — Only useful for hierarchies
- ✗ **Show too many levels** — Truncate if deeper than 4-5 items
- ✗ **Replace primary navigation** — Breadcrumbs are supplementary
