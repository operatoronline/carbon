# Cards

Cards are surfaces that group related information and actions. They provide entry points to more detailed content and serve as a consistent container across your interface.

---

## Basic Card

A simple card with body content.

<Preview title="Basic Card">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Card Title</h4>
            <p class="Card-text">This is a basic card with some descriptive text inside the body area.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card">
    <div class="Card-body">
        <h4 class="Card-title">Card Title</h4>
        <p class="Card-text">Description text...</p>
    </div>
</div>
```

---

## Card with Header

Add a header section for titles or metadata.

<Preview title="Card with Header">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-header">
            <h4 class="Card-title">Project Update</h4>
            <span class="Badge Badge--primary">New</span>
        </div>
        <div class="Card-body">
            <p class="Card-text">Review the latest changes to the design system documentation and component library.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card">
    <div class="Card-header">
        <h4 class="Card-title">Project Update</h4>
        <span class="Badge Badge--primary">New</span>
    </div>
    <div class="Card-body">
        <p class="Card-text">Content...</p>
    </div>
</div>
```

---

## Card with Footer

Add a footer for actions or metadata.

<Preview title="Card with Footer">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Subscription</h4>
            <p class="Card-text">Your current plan is Pro. Next billing date is March 15, 2026.</p>
        </div>
        <div class="Card-footer">
            <button class="Button Button--tertiary Button--small">Cancel</button>
            <button class="Button Button--primary Button--small">Upgrade</button>
        </div>
    </div>
</Preview>

```html
<div class="Card">
    <div class="Card-body">...</div>
    <div class="Card-footer">
        <button class="Button Button--tertiary Button--small">Cancel</button>
        <button class="Button Button--primary Button--small">Upgrade</button>
    </div>
</div>
```

---

## Card with Image

Cards can include images for visual interest.

<Preview title="Card with Image">
    <div class="Card" style="max-width: 320px;">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=640&h=320" class="Card-image" alt="Abstract gradient">
        <div class="Card-body">
            <h4 class="Card-title">Design Inspiration</h4>
            <p class="Card-text">Explore the latest trends in visual design and color theory.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card">
    <img src="..." class="Card-image" alt="...">
    <div class="Card-body">
        <h4 class="Card-title">Title</h4>
        <p class="Card-text">Description...</p>
    </div>
</div>
```

---

## Interactive Card

Cards that respond to hover and can be clicked as a whole.

<Preview title="Interactive Card">
    <a href="#" class="Card Card--interactive" style="max-width: 320px; text-decoration: none;">
        <div class="Card-body">
            <h4 class="Card-title">Getting Started Guide</h4>
            <p class="Card-text">Learn the basics of setting up and using the Carbon design system.</p>
        </div>
        <div class="Card-footer Card-footer--link">
            <span class="Link">Read more</span>
            <i class="ph ph-arrow-right"></i>
        </div>
    </a>
</Preview>

```html
<a href="#" class="Card Card--interactive">
    <div class="Card-body">
        <h4 class="Card-title">Getting Started Guide</h4>
        <p class="Card-text">Learn the basics...</p>
    </div>
    <div class="Card-footer Card-footer--link">
        <span class="Link">Read more</span>
        <i class="ph ph-arrow-right"></i>
    </div>
</a>
```

---

## Horizontal Card

Image on the left, content on the right.

<Preview title="Horizontal Card">
    <div class="Card Card--horizontal" style="max-width: 480px;">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200&h=200" class="Card-image" alt="Abstract gradient">
        <div class="Card-body">
            <span class="Badge Badge--success" style="margin-bottom: var(--space-2);">Available</span>
            <h4 class="Card-title">Premium Course</h4>
            <p class="Card-text">Deep dive into advanced design patterns and techniques.</p>
            <button class="Button Button--primary Button--small">Enroll Now</button>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--horizontal">
    <img src="..." class="Card-image" alt="...">
    <div class="Card-body">
        <h4 class="Card-title">Title</h4>
        <p class="Card-text">Description...</p>
    </div>
</div>
```

---

## Selectable Card

Cards that can be selected, often used for multi-select interfaces.

<Preview title="Selectable Cards">
    <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
        <label class="Card Card--selectable" style="width: 160px;">
            <input type="checkbox" class="Card-checkbox">
            <div class="Card-body" style="text-align: center;">
                <i class="ph ph-image" style="font-size: 2rem; color: var(--text-secondary); margin-bottom: var(--space-2);"></i>
                <span class="Card-title" style="font-size: 0.9rem;">Images</span>
            </div>
        </label>
        <label class="Card Card--selectable Card--selected" style="width: 160px;">
            <input type="checkbox" class="Card-checkbox" checked>
            <div class="Card-body" style="text-align: center;">
                <i class="ph ph-file-text" style="font-size: 2rem; color: var(--text-secondary); margin-bottom: var(--space-2);"></i>
                <span class="Card-title" style="font-size: 0.9rem;">Documents</span>
            </div>
        </label>
        <label class="Card Card--selectable" style="width: 160px;">
            <input type="checkbox" class="Card-checkbox">
            <div class="Card-body" style="text-align: center;">
                <i class="ph ph-video" style="font-size: 2rem; color: var(--text-secondary); margin-bottom: var(--space-2);"></i>
                <span class="Card-title" style="font-size: 0.9rem;">Videos</span>
            </div>
        </label>
    </div>
</Preview>

```html
<label class="Card Card--selectable">
    <input type="checkbox" class="Card-checkbox">
    <div class="Card-body">
        <i class="ph ph-image"></i>
        <span class="Card-title">Images</span>
    </div>
</label>
```

---

## Card Variants

### Elevated Card

Subtle shadow for depth.

<Preview title="Elevated Card">
    <div class="Card Card--elevated" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Elevated Card</h4>
            <p class="Card-text">This card has a subtle shadow for visual depth and hierarchy.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--elevated">...</div>
```

### Bordered Card

Stronger border emphasis.

<Preview title="Bordered Card">
    <div class="Card Card--bordered" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Bordered Card</h4>
            <p class="Card-text">This card has a more prominent border for definition.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--bordered">...</div>
```

### Filled Card

Subtle background fill for visual grouping.

<Preview title="Filled Card">
    <div class="Card Card--filled" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Filled Card</h4>
            <p class="Card-text">This card has a subtle background fill to stand out from the page.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--filled">...</div>
```

<Preview title="All Variants Compared">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4);">
        <div class="Card">
            <div class="Card-body">
                <h4 class="Card-title" style="font-size: 0.9rem;">Default</h4>
                <p class="Card-text" style="font-size: 0.8rem;">Standard card with subtle border</p>
            </div>
        </div>
        <div class="Card Card--elevated">
            <div class="Card-body">
                <h4 class="Card-title" style="font-size: 0.9rem;">Elevated</h4>
                <p class="Card-text" style="font-size: 0.8rem;">Shadow for depth and hierarchy</p>
            </div>
        </div>
        <div class="Card Card--bordered">
            <div class="Card-body">
                <h4 class="Card-title" style="font-size: 0.9rem;">Bordered</h4>
                <p class="Card-text" style="font-size: 0.8rem;">Stronger border emphasis</p>
            </div>
        </div>
        <div class="Card Card--filled">
            <div class="Card-body">
                <h4 class="Card-title" style="font-size: 0.9rem;">Filled</h4>
                <p class="Card-text" style="font-size: 0.8rem;">Background fill for grouping</p>
            </div>
        </div>
    </div>
</Preview>

### Compact Card

Reduced padding for denser layouts.

<Preview title="Compact Card">
    <div class="Card Card--compact" style="max-width: 280px;">
        <div class="Card-body">
            <h4 class="Card-title">Compact Card</h4>
            <p class="Card-text">Smaller padding for tighter layouts.</p>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--compact">...</div>
```

---

## Loading State

Skeleton placeholder while loading.

<Preview title="Loading Card">
    <div class="Card Card--loading" style="max-width: 320px;">
        <div class="Skeleton Skeleton--image" style="height: 160px;"></div>
        <div class="Card-body">
            <div class="Skeleton Skeleton--text Skeleton--title" style="width: 60%;"></div>
            <div class="Skeleton Skeleton--text" style="margin-top: var(--space-2);"></div>
            <div class="Skeleton Skeleton--text" style="width: 80%; margin-top: var(--space-1);"></div>
        </div>
    </div>
</Preview>

```html
<div class="Card Card--loading">
    <div class="Skeleton Skeleton--image"></div>
    <div class="Card-body">
        <div class="Skeleton Skeleton--text Skeleton--title"></div>
        <div class="Skeleton Skeleton--text"></div>
    </div>
</div>
```

---

## Card Grid

Standard responsive card layout.

<Preview title="Card Grid">
    <div class="CardGrid">
        <div class="Card">
            <div class="Card-body">
                <h4 class="Card-title">Card One</h4>
                <p class="Card-text">First card in the grid layout.</p>
            </div>
        </div>
        <div class="Card">
            <div class="Card-body">
                <h4 class="Card-title">Card Two</h4>
                <p class="Card-text">Second card in the grid layout.</p>
            </div>
        </div>
        <div class="Card">
            <div class="Card-body">
                <h4 class="Card-title">Card Three</h4>
                <p class="Card-text">Third card in the grid layout.</p>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="CardGrid">
    <div class="Card">...</div>
    <div class="Card">...</div>
    <div class="Card">...</div>
</div>
```

---

## Real-World Examples

### Product Card

<Preview title="Product Card">
    <div class="Card" style="max-width: 280px;">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=280&h=200" class="Card-image" alt="Watch">
        <div class="Card-body">
            <span style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Accessories</span>
            <h4 class="Card-title" style="margin-top: var(--space-1);">Minimal Watch</h4>
            <div style="display: flex; align-items: center; gap: var(--space-2); margin-top: var(--space-2);">
                <span style="font-size: 1.25rem; font-weight: 600;">$129</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary); text-decoration: line-through;">$159</span>
            </div>
        </div>
        <div class="Card-footer">
            <button class="Button Button--primary Button--block Button--small">Add to Cart</button>
        </div>
    </div>
</Preview>

### Profile Card

<Preview title="Profile Card">
    <div class="Card" style="max-width: 320px; text-align: center;">
        <div class="Card-body">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile" class="Avatar Avatar--large" alt="User" style="margin: 0 auto var(--space-4);">
            <h4 class="Card-title">Sarah Chen</h4>
            <p class="Card-text" style="color: var(--text-secondary);">Senior Product Designer</p>
            <div style="display: flex; justify-content: center; gap: var(--space-6); margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--border-subtle);">
                <div>
                    <div style="font-size: 1.25rem; font-weight: 600;">142</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Projects</div>
                </div>
                <div>
                    <div style="font-size: 1.25rem; font-weight: 600;">8.2k</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Followers</div>
                </div>
                <div>
                    <div style="font-size: 1.25rem; font-weight: 600;">521</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Following</div>
                </div>
            </div>
        </div>
        <div class="Card-footer">
            <button class="Button Button--primary Button--small">Follow</button>
            <button class="Button Button--secondary Button--small">Message</button>
        </div>
    </div>
</Preview>

### Article Card

<Preview title="Article Card">
    <a href="#" class="Card Card--interactive" style="max-width: 380px; text-decoration: none;">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=380&h=200" class="Card-image" alt="Laptop with coffee">
        <div class="Card-body">
            <div style="display: flex; gap: var(--space-2); margin-bottom: var(--space-3);">
                <span class="Badge Badge--outline Badge--small">Design</span>
                <span class="Badge Badge--outline Badge--small">Tutorial</span>
            </div>
            <h4 class="Card-title">Getting Started with Design Systems</h4>
            <p class="Card-text">Learn how to build and maintain a scalable design system that grows with your product.</p>
            <div style="display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-4); padding-top: var(--space-3); border-top: 1px solid var(--border-subtle);">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=article" class="Avatar Avatar--small" alt="Author">
                <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.85rem;">Sarah Chen</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Jan 15 · 8 min read</div>
                </div>
                <button class="Button Button--icon Button--ghost Button--small" aria-label="Bookmark" onclick="event.preventDefault();">
                    <i class="ph ph-bookmark"></i>
                </button>
            </div>
        </div>
    </a>
</Preview>

### Blog Card Grid

<Preview title="Blog Card Grid">
    <div class="CardGrid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        <a href="#" class="Card Card--interactive" style="text-decoration: none;">
            <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=280&h=160" class="Card-image" alt="Code on screen">
            <div class="Card-body">
                <span class="Badge Badge--primary Badge--small" style="margin-bottom: var(--space-2);">Featured</span>
                <h4 class="Card-title" style="font-size: 0.95rem;">Building Accessible Components</h4>
                <p class="Card-text" style="font-size: 0.85rem;">Best practices for creating inclusive web experiences.</p>
            </div>
        </a>
        <a href="#" class="Card Card--interactive" style="text-decoration: none;">
            <img src="https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&q=80&w=280&h=160" class="Card-image" alt="Design tools">
            <div class="Card-body">
                <span class="Badge Badge--secondary Badge--small" style="margin-bottom: var(--space-2);">Tutorial</span>
                <h4 class="Card-title" style="font-size: 0.95rem;">Color Theory for Developers</h4>
                <p class="Card-text" style="font-size: 0.85rem;">Understanding color to build better interfaces.</p>
            </div>
        </a>
        <a href="#" class="Card Card--interactive" style="text-decoration: none;">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=280&h=160" class="Card-image" alt="Laptop setup">
            <div class="Card-body">
                <span class="Badge Badge--secondary Badge--small" style="margin-bottom: var(--space-2);">Guide</span>
                <h4 class="Card-title" style="font-size: 0.95rem;">CSS Custom Properties Deep Dive</h4>
                <p class="Card-text" style="font-size: 0.85rem;">Advanced techniques for theming with CSS variables.</p>
            </div>
        </a>
    </div>
</Preview>

### Stats Card

<Preview title="Stats Card">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); max-width: 600px;">
        <div class="Card Card--compact">
            <div class="Card-body">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Revenue</span>
                    <i class="ph ph-trend-up" style="color: oklch(55% 0.15 150);"></i>
                </div>
                <div style="font-size: 1.5rem; font-weight: 700; margin-top: var(--space-2);">$48,234</div>
                <div style="font-size: 0.75rem; color: oklch(55% 0.15 150); margin-top: var(--space-1);">+12.5% from last month</div>
            </div>
        </div>
        <div class="Card Card--compact">
            <div class="Card-body">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Users</span>
                    <i class="ph ph-users" style="color: var(--accent-primary);"></i>
                </div>
                <div style="font-size: 1.5rem; font-weight: 700; margin-top: var(--space-2);">2,847</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: var(--space-1);">+89 this week</div>
            </div>
        </div>
        <div class="Card Card--compact">
            <div class="Card-body">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Orders</span>
                    <i class="ph ph-shopping-cart" style="color: oklch(70% 0.15 80);"></i>
                </div>
                <div style="font-size: 1.5rem; font-weight: 700; margin-top: var(--space-2);">384</div>
                <div style="font-size: 0.75rem; color: oklch(55% 0.2 25); margin-top: var(--space-1);">-3.2% from last month</div>
            </div>
        </div>
    </div>
</Preview>

---

## Accessibility

Cards require attention to ensure they're accessible:

### Interactive Cards
```html
<!-- Entire card is clickable -->
<a href="/article" class="Card Card--interactive">
    <div class="Card-body">
        <h4 class="Card-title">Article Title</h4>
        <p class="Card-text">Description...</p>
    </div>
</a>

<!-- Card with internal link (use CSS to expand click area) -->
<div class="Card">
    <div class="Card-body">
        <h4 class="Card-title">
            <a href="/article" class="Card-link">Article Title</a>
        </h4>
        <p class="Card-text">Description...</p>
    </div>
</div>
```

### Selectable Cards
```html
<!-- Always use proper form controls -->
<label class="Card Card--selectable">
    <input type="checkbox" class="Card-checkbox" aria-describedby="card-desc">
    <div class="Card-body">
        <span class="Card-title">Option Name</span>
        <span id="card-desc" class="Card-text">Description of this option</span>
    </div>
</label>
```

### Images
```html
<!-- Always provide meaningful alt text -->
<img src="..." class="Card-image" alt="Description of what's in the image">

<!-- For decorative images -->
<img src="..." class="Card-image" alt="" role="presentation">
```

---

## CSS Reference

```css
/* Base Card */
.Card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.Card-header {
  padding: var(--space-4);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Card-body {
  padding: var(--space-4);
  flex: 1;
}

.Card-footer {
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  gap: var(--space-2);
  justify-content: flex-end;
}

.Card-footer--link {
  justify-content: space-between;
  align-items: center;
}

.Card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.Card-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: var(--space-2) 0 0;
  line-height: 1.5;
}

.Card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Interactive */
.Card--interactive {
  cursor: pointer;
  transition: all 0.2s;
  color: inherit;
}

.Card--interactive:hover {
  border-color: var(--border-strong);
  box-shadow: 0 4px 12px oklch(0% 0 0 / 0.08);
}

/* Horizontal */
.Card--horizontal {
  flex-direction: row;
}

.Card--horizontal .Card-image {
  width: 200px;
  height: auto;
  flex-shrink: 0;
}

/* Selectable */
.Card--selectable {
  cursor: pointer;
  transition: all 0.15s;
}

.Card--selectable:hover {
  border-color: var(--border-strong);
}

.Card-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Card--selectable:has(.Card-checkbox:checked),
.Card--selected {
  border-color: var(--accent-primary);
  background-color: oklch(60% 0.15 250 / 0.05);
}

.Card--selectable:has(.Card-checkbox:focus-visible) {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Variants */
.Card--elevated {
  border-color: transparent;
  box-shadow: 0 2px 8px oklch(0% 0 0 / 0.08), 0 1px 2px oklch(0% 0 0 / 0.04);
}

.Card--bordered {
  border-width: 2px;
}

.Card--filled {
  background-color: var(--bg-secondary);
  border-color: transparent;
}

.Card--compact .Card-body,
.Card--compact .Card-header,
.Card--compact .Card-footer {
  padding: var(--space-3);
}

/* Loading */
.Card--loading {
  pointer-events: none;
}

/* Card Link (expands to fill card) */
.Card-link {
  text-decoration: none;
  color: inherit;
}

.Card-link::after {
  content: "";
  position: absolute;
  inset: 0;
}

.Card:has(.Card-link) {
  position: relative;
}

/* Card Grid */
.CardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}
```

---

## Best Practices

### Do

- ✓ **Keep cards focused** — One topic or action per card
- ✓ **Use consistent sizing** — Cards in a grid should match heights
- ✓ **Provide clear actions** — Make primary actions obvious
- ✓ **Use meaningful images** — Images should reinforce content
- ✓ **Consider mobile** — Horizontal cards may need to stack

### Don't

- ✗ **Overload with content** — Cards should be scannable
- ✗ **Use too many actions** — Limit to 1-2 primary actions
- ✗ **Nest cards** — Avoid cards within cards
- ✗ **Forget loading states** — Use skeletons for async content
- ✗ **Make everything clickable** — Be intentional about interactive areas
