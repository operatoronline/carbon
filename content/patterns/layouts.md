# Layouts

Composable primitives for page structure. Container, Grid, Stack, Cluster, Split, Sidebar, and Center — combine them to build any layout without writing custom CSS.

---

## Container

Centers content with a max-width and horizontal padding.

<Preview title="Container Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div class="Layout-container Layout-container--narrow" style="background: var(--accent-s); padding: var(--space-3); border-radius: var(--r-s); border: 1px dashed var(--accent);">
            <code style="font-size: .75rem; color: var(--accent);">--narrow</code> <span style="color: var(--fg-3); font-size: .8rem;">640px</span>
        </div>
        <div class="Layout-container" style="background: var(--bg-s); padding: var(--space-3); border-radius: var(--r-s); border: 1px dashed var(--bd-s);">
            <code style="font-size: .75rem;">default</code> <span style="color: var(--fg-3); font-size: .8rem;">960px</span>
        </div>
        <div class="Layout-container Layout-container--wide" style="background: var(--bg-s); padding: var(--space-3); border-radius: var(--r-s); border: 1px dashed var(--bd-s);">
            <code style="font-size: .75rem;">--wide</code> <span style="color: var(--fg-3); font-size: .8rem;">1280px</span>
        </div>
    </div>
</Preview>

```html
<div class="Layout-container">...</div>
<div class="Layout-container Layout-container--narrow">...</div>
<div class="Layout-container Layout-container--wide">...</div>
```

---

## Grid

A 12-column grid. All columns collapse to full-width below 768px. Use `Layout-col-{n}@md` for responsive spans.

<Preview title="Equal Columns">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-4" style="background: var(--accent); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-weight: 600;">4</div>
        <div class="Layout-col-4" style="background: var(--accent); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-weight: 600;">4</div>
        <div class="Layout-col-4" style="background: var(--accent); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-weight: 600;">4</div>
    </div>
</Preview>

<Preview title="Asymmetric (Main + Sidebar)">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-8" style="background: oklch(55% 0.15 270); color: white; padding: var(--space-4); border-radius: var(--r-s); font-weight: 600;">8 — Main</div>
        <div class="Layout-col-4" style="background: oklch(75% 0.08 270); padding: var(--space-4); border-radius: var(--r-s);">4 — Side</div>
    </div>
</Preview>

```html
<div class="Layout-grid">
    <div class="Layout-col-8">Main content</div>
    <div class="Layout-col-4">Sidebar</div>
</div>

<!-- Responsive: full on mobile, halves on tablet+ -->
<div class="Layout-grid">
    <div class="Layout-col-12 Layout-col-6@md">Left</div>
    <div class="Layout-col-12 Layout-col-6@md">Right</div>
</div>
```

---

## Stack

Vertical flow with consistent gap. The most-used layout primitive.

<Preview title="Stack Variants">
    <div style="display: flex; gap: var(--space-8); align-items: flex-start;">
        <div style="text-align: center;">
            <div style="font-size: .7rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--fg-4); margin-bottom: var(--space-2);">Tight · 8px</div>
            <div class="Layout-stack Layout-stack--tight" style="width: 80px;">
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
            </div>
        </div>
        <div style="text-align: center;">
            <div style="font-size: .7rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--fg-4); margin-bottom: var(--space-2);">Default · 16px</div>
            <div class="Layout-stack" style="width: 80px;">
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
            </div>
        </div>
        <div style="text-align: center;">
            <div style="font-size: .7rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--fg-4); margin-bottom: var(--space-2);">Loose · 32px</div>
            <div class="Layout-stack Layout-stack--loose" style="width: 80px;">
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
                <div style="background: var(--accent); height: 24px; border-radius: var(--r-s);"></div>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Layout-stack">...</div>
<div class="Layout-stack Layout-stack--tight">...</div>
<div class="Layout-stack Layout-stack--loose">...</div>
```

---

## Cluster

Horizontal grouping with wrapping. For tags, buttons, inline elements.

<Preview title="Cluster">
    <div class="Layout-cluster">
        <span class="Badge Badge--primary">Design</span>
        <span class="Badge">Development</span>
        <span class="Badge">Product</span>
        <span class="Badge">Research</span>
        <span class="Badge">Strategy</span>
        <span class="Badge">Engineering</span>
    </div>
</Preview>

```html
<div class="Layout-cluster">
    <span class="Badge">Tag</span>
    <span class="Badge">Tag</span>
    ...
</div>
```

---

## Split

Push items to opposite ends of a row. Headers, footers, toolbars.

<Preview title="Split">
    <div class="Layout-split" style="width: 100%; background: var(--bg-s); padding: var(--space-3) var(--space-4); border-radius: var(--r-s);">
        <span style="font-weight: 600;">Page Title</span>
        <button class="Button Button--primary Button--small">Action</button>
    </div>
</Preview>

```html
<div class="Layout-split">
    <h1>Title</h1>
    <button class="Button">Action</button>
</div>
```

---

## Sidebar

Fixed-width sidebar with fluid main area. Stacks on mobile. Use `--right` to flip.

<Preview title="Sidebar Layout">
    <div class="Layout-sidebar" style="width: 100%;">
        <aside style="background: var(--bg-m); padding: var(--space-4); border-radius: var(--r-s);">
            <strong style="font-size: .85rem;">Sidebar</strong>
            <div style="color: var(--fg-3); font-size: .75rem; margin-top: var(--space-1);">240px fixed</div>
        </aside>
        <main style="background: var(--bg-s); padding: var(--space-4); border-radius: var(--r-s);">
            <strong style="font-size: .85rem;">Main Content</strong>
            <div style="color: var(--fg-3); font-size: .75rem; margin-top: var(--space-1);">Fluid width, fills remaining space</div>
        </main>
    </div>
</Preview>

```html
<div class="Layout-sidebar">
    <aside>Navigation</aside>
    <main>Content</main>
</div>

<!-- Sidebar on right -->
<div class="Layout-sidebar Layout-sidebar--right">
    <main>Content</main>
    <aside>Sidebar</aside>
</div>
```

---

## Center

Vertical and horizontal centering. Empty states, loading screens.

<Preview title="Center">
    <div class="Layout-center" style="height: 160px; width: 100%; background: var(--bg-s); border-radius: var(--r-s);">
        <div style="text-align: center;">
            <div style="font-size: 1.5rem; margin-bottom: var(--space-2);">📭</div>
            <div style="font-weight: 600; font-size: .9rem;">Nothing here yet</div>
            <div style="color: var(--fg-3); font-size: .8rem;">Create your first item to get started.</div>
        </div>
    </div>
</Preview>

```html
<div class="Layout-center" style="min-height: 300px;">
    <div>Centered content</div>
</div>
```

---

## Composition

These primitives are designed to nest. A typical page:

```html
<div class="Layout-container">
    <div class="Layout-stack Layout-stack--loose">

        <header class="Layout-split">
            <h1>Dashboard</h1>
            <button class="Button Button--primary">New</button>
        </header>

        <div class="Layout-sidebar">
            <aside class="Layout-stack">
                <!-- Nav links -->
            </aside>
            <main class="Layout-stack">
                <div class="Layout-grid">
                    <div class="Layout-col-4">Stat card</div>
                    <div class="Layout-col-4">Stat card</div>
                    <div class="Layout-col-4">Stat card</div>
                </div>
                <!-- Content -->
            </main>
        </div>

    </div>
</div>
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Layout-container</code></td>
<td class="ApiTable-desc">Centered container, 960px max-width</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-container--narrow</code></td>
<td class="ApiTable-desc">640px max-width</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-container--wide</code></td>
<td class="ApiTable-desc">1280px max-width</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-grid</code></td>
<td class="ApiTable-desc">12-column grid</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-col-{1-12}</code></td>
<td class="ApiTable-desc">Column span</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-col-{1-12}@md</code></td>
<td class="ApiTable-desc">Column span at 768px+</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-stack</code></td>
<td class="ApiTable-desc">Vertical flow, 16px gap</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-stack--tight</code></td>
<td class="ApiTable-desc">8px gap</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-stack--loose</code></td>
<td class="ApiTable-desc">32px gap</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-cluster</code></td>
<td class="ApiTable-desc">Horizontal wrapping group</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-split</code></td>
<td class="ApiTable-desc">Space-between row</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-sidebar</code></td>
<td class="ApiTable-desc">Sidebar (240px) + fluid main</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-sidebar--right</code></td>
<td class="ApiTable-desc">Sidebar on the right</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Layout-center</code></td>
<td class="ApiTable-desc">Vertical + horizontal centering</td>
</tr>
</tbody>
</table>

---

## Best Practices

### Do

- ✓ **Start with Container** — Wrap page content in `Layout-container` to constrain width and center the layout
- ✓ **Use Stack as your default** — Most vertical arrangements should use `Layout-stack` rather than custom margins
- ✓ **Compose primitives** — Nest Grid inside Stack inside Container; these are building blocks, not standalone solutions
- ✓ **Use responsive column classes** — Apply `Layout-col-12 Layout-col-6@md` so layouts collapse gracefully on mobile
- ✓ **Choose the right gap** — Use `--tight` for related items (form fields), default for sections, `--loose` for page-level spacing

### Don't

- ✗ **Add custom margins between layout children** — Let the layout primitive's gap handle spacing
- ✗ **Use Grid for simple vertical stacking** — A 1-column grid is just a Stack; use the simpler primitive
- ✗ **Hardcode widths on grid columns** — Use `Layout-col-{n}` classes instead of inline width styles
- ✗ **Nest grids deeply** — More than two levels of Grid nesting becomes hard to maintain; flatten with Stack or Split
- ✗ **Forget the Container** — Without it, content stretches edge-to-edge on wide screens and becomes unreadable

---

## CSS Reference

```css
/* ── Container ── */
.Layout-container {
  width: 100%;
  max-width: 960px;
  margin-inline: auto;
  padding-inline: var(--space-4);
}

.Layout-container--narrow {
  max-width: 640px;
}

.Layout-container--wide {
  max-width: 1280px;
}

/* ── Grid ── */
.Layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
}

.Layout-col-1  { grid-column: span 1; }
.Layout-col-2  { grid-column: span 2; }
.Layout-col-3  { grid-column: span 3; }
.Layout-col-4  { grid-column: span 4; }
.Layout-col-5  { grid-column: span 5; }
.Layout-col-6  { grid-column: span 6; }
.Layout-col-7  { grid-column: span 7; }
.Layout-col-8  { grid-column: span 8; }
.Layout-col-9  { grid-column: span 9; }
.Layout-col-10 { grid-column: span 10; }
.Layout-col-11 { grid-column: span 11; }
.Layout-col-12 { grid-column: span 12; }

@media (min-width: 768px) {
  .Layout-col-1\@md  { grid-column: span 1; }
  .Layout-col-2\@md  { grid-column: span 2; }
  .Layout-col-3\@md  { grid-column: span 3; }
  .Layout-col-4\@md  { grid-column: span 4; }
  .Layout-col-5\@md  { grid-column: span 5; }
  .Layout-col-6\@md  { grid-column: span 6; }
  .Layout-col-7\@md  { grid-column: span 7; }
  .Layout-col-8\@md  { grid-column: span 8; }
  .Layout-col-9\@md  { grid-column: span 9; }
  .Layout-col-10\@md { grid-column: span 10; }
  .Layout-col-11\@md { grid-column: span 11; }
  .Layout-col-12\@md { grid-column: span 12; }
}

/* ── Stack ── */
.Layout-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.Layout-stack--tight {
  gap: var(--space-2);
}

.Layout-stack--loose {
  gap: var(--space-8);
}

/* ── Cluster ── */
.Layout-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

/* ── Split ── */
.Layout-split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

/* ── Sidebar ── */
.Layout-sidebar {
  display: flex;
  gap: var(--space-4);
}

.Layout-sidebar > aside {
  flex: 0 0 240px;
}

.Layout-sidebar > main {
  flex: 1 1 0%;
  min-width: 0;
}

.Layout-sidebar--right {
  flex-direction: row-reverse;
}

@media (max-width: 767px) {
  .Layout-sidebar {
    flex-direction: column;
  }

  .Layout-sidebar > aside {
    flex: none;
  }
}

/* ── Center ── */
.Layout-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
