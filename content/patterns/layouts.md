# Layouts

Layout patterns for structuring content with responsive grids, stacks, and containers. These primitives compose into any page structure.

---

## Container

Centers content with a max-width and consistent padding.

<Preview title="Container">
    <div class="Layout-container" style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
        <p>Content is centered with max-width and horizontal padding.</p>
    </div>
</Preview>

```html
<div class="Layout-container">
    <!-- Content here -->
</div>
```

### Container Sizes

| Modifier | Max Width | Use Case |
|----------|-----------|----------|
| `--narrow` | 640px | Articles, forms, focused content |
| (default) | 960px | General content pages |
| `--wide` | 1280px | Dashboards, data-heavy pages |

<Preview title="Container Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div class="Layout-container Layout-container--narrow" style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">
            <small>Narrow (640px) — Articles, forms</small>
        </div>
        <div class="Layout-container" style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">
            <small>Default (960px) — General pages</small>
        </div>
        <div class="Layout-container Layout-container--wide" style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">
            <small>Wide (1280px) — Dashboards</small>
        </div>
    </div>
</Preview>

```css
.Layout-container { max-width: 960px; }
.Layout-container--narrow { max-width: 640px; }
.Layout-container--wide { max-width: 1280px; }
```

---

## Grid

A responsive 12-column grid. Columns stack on mobile (<768px).

<Preview title="12-Column Grid">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-4" style="background: var(--accent-primary); color: white; padding: var(--space-3); border-radius: var(--space-1); text-align: center;">4</div>
        <div class="Layout-col-4" style="background: var(--accent-primary); color: white; padding: var(--space-3); border-radius: var(--space-1); text-align: center;">4</div>
        <div class="Layout-col-4" style="background: var(--accent-primary); color: white; padding: var(--space-3); border-radius: var(--space-1); text-align: center;">4</div>
    </div>
</Preview>

```html
<div class="Layout-grid">
    <div class="Layout-col-4">...</div>
    <div class="Layout-col-4">...</div>
    <div class="Layout-col-4">...</div>
</div>
```

### Column Spans

Use `Layout-col-{1-12}` to control column width.

<Preview title="Mixed Columns">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-8" style="background: oklch(55% 0.12 250); color: white; padding: var(--space-3); border-radius: var(--space-1);">8 columns (Main)</div>
        <div class="Layout-col-4" style="background: oklch(70% 0.08 250); padding: var(--space-3); border-radius: var(--space-1);">4 columns (Sidebar)</div>
    </div>
</Preview>

### Responsive Columns

Use `Layout-col-{n}@md` for tablet+ breakpoints.

<Preview title="Responsive Grid">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-12 Layout-col-6@md" style="background: oklch(55% 0.12 150); color: white; padding: var(--space-3); border-radius: var(--space-1);">Full → Half</div>
        <div class="Layout-col-12 Layout-col-6@md" style="background: oklch(55% 0.12 150); color: white; padding: var(--space-3); border-radius: var(--space-1);">Full → Half</div>
    </div>
</Preview>

```html
<!-- Full width on mobile, half on tablet+ -->
<div class="Layout-grid">
    <div class="Layout-col-12 Layout-col-6@md">...</div>
    <div class="Layout-col-12 Layout-col-6@md">...</div>
</div>
```

---

## Stack

Vertical stacking with consistent spacing. The foundation of most layouts.

<Preview title="Stack">
    <div class="Layout-stack" style="max-width: 280px;">
        <div style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">Item 1</div>
        <div style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">Item 2</div>
        <div style="background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">Item 3</div>
    </div>
</Preview>

```html
<div class="Layout-stack">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Stack Spacing Variants

<Preview title="Stack Sizes">
    <div style="display: flex; gap: var(--space-8);">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Tight (8px)</small>
            <div class="Layout-stack Layout-stack--tight" style="width: 100px;">
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">A</div>
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">B</div>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Default (16px)</small>
            <div class="Layout-stack" style="width: 100px;">
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">A</div>
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">B</div>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Loose (32px)</small>
            <div class="Layout-stack Layout-stack--loose" style="width: 100px;">
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">A</div>
                <div style="background: var(--bg-secondary); padding: var(--space-2); border-radius: var(--space-1); text-align: center;">B</div>
            </div>
        </div>
    </div>
</Preview>

```css
.Layout-stack { gap: var(--space-4); }       /* 16px */
.Layout-stack--tight { gap: var(--space-2); } /* 8px */
.Layout-stack--loose { gap: var(--space-8); } /* 32px */
```

---

## Cluster

Horizontal grouping with wrapping. Perfect for tags, buttons, and inline elements.

<Preview title="Cluster">
    <div class="Layout-cluster">
        <span class="Badge">Design</span>
        <span class="Badge">Development</span>
        <span class="Badge">Product</span>
        <span class="Badge">Research</span>
        <span class="Badge">Strategy</span>
    </div>
</Preview>

```html
<div class="Layout-cluster">
    <span class="Badge">Tag 1</span>
    <span class="Badge">Tag 2</span>
    ...
</div>
```

---

## Split

Push items to opposite ends of a row. Common for headers and footers.

<Preview title="Split">
    <div class="Layout-split" style="width: 100%; background: var(--bg-secondary); padding: var(--space-3); border-radius: var(--space-1);">
        <span style="font-weight: 600;">Left Content</span>
        <span style="color: var(--text-secondary);">Right Content</span>
    </div>
</Preview>

```html
<div class="Layout-split">
    <span>Left content</span>
    <span>Right content</span>
</div>
```

---

## Sidebar Layout

Fixed-width sidebar with fluid main area. Stacks on mobile.

<Preview title="Sidebar Layout">
    <div class="Layout-sidebar" style="width: 100%;">
        <aside style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
            <strong style="display: block; margin-bottom: var(--space-2);">Sidebar</strong>
            <small style="color: var(--text-secondary);">240px fixed</small>
        </aside>
        <main style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
            <strong style="display: block; margin-bottom: var(--space-2);">Main Content</strong>
            <small style="color: var(--text-secondary);">Fluid width</small>
        </main>
    </div>
</Preview>

```html
<div class="Layout-sidebar">
    <aside>Sidebar content</aside>
    <main>Main content</main>
</div>
```

### Sidebar on Right

<Preview title="Sidebar Right">
    <div class="Layout-sidebar Layout-sidebar--right" style="width: 100%;">
        <main style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
            <strong>Main Content</strong>
        </main>
        <aside style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
            <strong>Sidebar</strong>
        </aside>
    </div>
</Preview>

```html
<div class="Layout-sidebar Layout-sidebar--right">
    <main>Main content</main>
    <aside>Sidebar content</aside>
</div>
```

---

## Center

Vertically and horizontally center content. Useful for empty states and loading screens.

<Preview title="Center">
    <div class="Layout-center" style="height: 150px; background: var(--bg-secondary); border-radius: var(--space-1);">
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: var(--space-2);">📭</div>
            <div style="font-weight: 600;">No items yet</div>
            <div style="color: var(--text-secondary); font-size: 0.9rem;">Add your first item to get started</div>
        </div>
    </div>
</Preview>

```html
<div class="Layout-center" style="height: 300px;">
    <div>Centered content</div>
</div>
```

---

## Real-World Patterns

### Marketing Page

<Preview title="Marketing Layout">
    <div style="width: 100%; border: 1px solid var(--border-subtle); border-radius: var(--space-2); overflow: hidden;">
        <header style="padding: var(--space-4) var(--space-6); border-bottom: 1px solid var(--border-subtle);">
            <div class="Layout-split">
                <strong>Logo</strong>
                <nav class="Layout-cluster">
                    <a href="#" class="Link">Features</a>
                    <a href="#" class="Link">Pricing</a>
                    <a href="#" class="Link">Docs</a>
                </nav>
            </div>
        </header>
        <main style="padding: var(--space-8);">
            <div class="Layout-container Layout-container--narrow" style="text-align: center;">
                <h2 style="margin-bottom: var(--space-4);">Hero Headline</h2>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">Supporting text that explains the value proposition.</p>
                <div class="Layout-cluster" style="justify-content: center;">
                    <button class="Button Button--primary">Get Started</button>
                    <button class="Button">Learn More</button>
                </div>
            </div>
        </main>
    </div>
</Preview>

```html
<header>
    <div class="Layout-split">
        <Logo />
        <nav class="Layout-cluster">...</nav>
    </div>
</header>
<main>
    <div class="Layout-container Layout-container--narrow">
        <h1>Hero Headline</h1>
        <p>...</p>
        <div class="Layout-cluster">
            <Button>Get Started</Button>
        </div>
    </div>
</main>
```

### Dashboard

<Preview title="Dashboard Layout">
    <div style="width: 100%; border: 1px solid var(--border-subtle); border-radius: var(--space-2); overflow: hidden; height: 280px;">
        <div style="display: flex; height: 100%;">
            <aside style="width: 200px; background: var(--bg-secondary); padding: var(--space-4); border-right: 1px solid var(--border-subtle);">
                <div class="Layout-stack Layout-stack--tight">
                    <small style="font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Menu</small>
                    <a href="#" style="padding: var(--space-2); background: var(--accent-primary); color: white; border-radius: var(--space-1); text-decoration: none;">Dashboard</a>
                    <a href="#" style="padding: var(--space-2); color: var(--text-secondary); text-decoration: none;">Projects</a>
                    <a href="#" style="padding: var(--space-2); color: var(--text-secondary); text-decoration: none;">Settings</a>
                </div>
            </aside>
            <main style="flex: 1; padding: var(--space-4); overflow: auto;">
                <div class="Layout-stack">
                    <div class="Layout-split">
                        <h3 style="margin: 0;">Dashboard</h3>
                        <button class="Button Button--primary" style="font-size: 0.85rem;">New Project</button>
                    </div>
                    <div class="Layout-grid">
                        <div class="Layout-col-4" style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
                            <small style="color: var(--text-secondary);">Total Users</small>
                            <div style="font-size: 1.5rem; font-weight: 700;">1,234</div>
                        </div>
                        <div class="Layout-col-4" style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
                            <small style="color: var(--text-secondary);">Revenue</small>
                            <div style="font-size: 1.5rem; font-weight: 700;">$12.4k</div>
                        </div>
                        <div class="Layout-col-4" style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-1);">
                            <small style="color: var(--text-secondary);">Active Now</small>
                            <div style="font-size: 1.5rem; font-weight: 700;">89</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</Preview>

### Card Grid

<Preview title="Card Grid">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-12 Layout-col-4@md">
            <div class="Card">
                <div style="height: 80px; background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(60% 0.15 280));"></div>
                <div class="Card-body">
                    <div class="Card-title">Card Title</div>
                    <div class="Card-description">Brief description of this card's content.</div>
                </div>
            </div>
        </div>
        <div class="Layout-col-12 Layout-col-4@md">
            <div class="Card">
                <div style="height: 80px; background: linear-gradient(135deg, oklch(55% 0.15 150), oklch(55% 0.15 180));"></div>
                <div class="Card-body">
                    <div class="Card-title">Card Title</div>
                    <div class="Card-description">Brief description of this card's content.</div>
                </div>
            </div>
        </div>
        <div class="Layout-col-12 Layout-col-4@md">
            <div class="Card">
                <div style="height: 80px; background: linear-gradient(135deg, oklch(65% 0.15 30), oklch(65% 0.15 60));"></div>
                <div class="Card-body">
                    <div class="Card-title">Card Title</div>
                    <div class="Card-description">Brief description of this card's content.</div>
                </div>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Layout-grid">
    <div class="Layout-col-12 Layout-col-4@md">
        <Card />
    </div>
    <div class="Layout-col-12 Layout-col-4@md">
        <Card />
    </div>
    <div class="Layout-col-12 Layout-col-4@md">
        <Card />
    </div>
</div>
```

### Form Layout

<Preview title="Form Layout">
    <div class="Layout-container Layout-container--narrow" style="padding: var(--space-6); background: var(--bg-secondary); border-radius: var(--space-2);">
        <div class="Layout-stack">
            <h3 style="margin: 0;">Create Account</h3>
            <div class="Layout-grid">
                <div class="Layout-col-6">
                    <label style="display: block; margin-bottom: var(--space-1); font-size: 0.9rem; font-weight: 500;">First Name</label>
                    <input type="text" class="Input" placeholder="John">
                </div>
                <div class="Layout-col-6">
                    <label style="display: block; margin-bottom: var(--space-1); font-size: 0.9rem; font-weight: 500;">Last Name</label>
                    <input type="text" class="Input" placeholder="Doe">
                </div>
            </div>
            <div>
                <label style="display: block; margin-bottom: var(--space-1); font-size: 0.9rem; font-weight: 500;">Email</label>
                <input type="email" class="Input" placeholder="john@example.com">
            </div>
            <div class="Layout-split" style="padding-top: var(--space-2);">
                <label class="Switch-label" style="gap: var(--space-2);">
                    <label class="Switch">
                        <input type="checkbox">
                        <span class="Switch-slider"></span>
                    </label>
                    <span style="font-size: 0.9rem;">Remember me</span>
                </label>
                <button class="Button Button--primary">Sign Up</button>
            </div>
        </div>
    </div>
</Preview>

### Article Layout

<Preview title="Article Layout">
    <div style="width: 100%; max-width: 700px;">
        <article>
            <header style="margin-bottom: var(--space-6);">
                <div class="Layout-cluster" style="margin-bottom: var(--space-3);">
                    <span class="Badge Badge--primary">Design</span>
                    <span style="color: var(--text-secondary); font-size: 0.85rem;">5 min read</span>
                </div>
                <h2 style="margin: 0 0 var(--space-2);">Article Headline Goes Here</h2>
                <p style="color: var(--text-secondary); margin: 0;">A brief summary or subtitle that gives context to the article.</p>
            </header>
            <div style="line-height: 1.7;">
                <p>Article body text with optimal line height for comfortable reading. The measure is kept between 45-75 characters per line.</p>
            </div>
        </article>
    </div>
</Preview>

---

## Combining Patterns

The power of these primitives comes from composition:

```html
<!-- Common page structure -->
<div class="Layout-container">
    <div class="Layout-stack Layout-stack--loose">
        
        <!-- Page header -->
        <header class="Layout-split">
            <h1>Page Title</h1>
            <Button>Action</Button>
        </header>
        
        <!-- Main content with sidebar -->
        <div class="Layout-sidebar">
            <main class="Layout-stack">
                <!-- Content sections -->
            </main>
            <aside class="Layout-stack">
                <!-- Sidebar widgets -->
            </aside>
        </div>
        
        <!-- Footer -->
        <footer class="Layout-split">
            <span>© 2026</span>
            <nav class="Layout-cluster">...</nav>
        </footer>
        
    </div>
</div>
```

---

## Quick Reference

```css
/* Container */
.Layout-container              /* 960px max */
.Layout-container--narrow      /* 640px max */
.Layout-container--wide        /* 1280px max */

/* Grid */
.Layout-grid                   /* 12-column grid */
.Layout-col-{1-12}            /* Column span */
.Layout-col-{1-12}@md         /* Tablet+ column span */

/* Stack */
.Layout-stack                  /* Vertical, 16px gap */
.Layout-stack--tight          /* 8px gap */
.Layout-stack--loose          /* 32px gap */

/* Cluster */
.Layout-cluster               /* Horizontal with wrap */

/* Split */
.Layout-split                 /* Space between */

/* Sidebar */
.Layout-sidebar               /* Sidebar left */
.Layout-sidebar--right        /* Sidebar right */

/* Center */
.Layout-center                /* Center content */
```
