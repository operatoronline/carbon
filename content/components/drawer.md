---
title: Drawer
---

# Drawer

Drawers are panels that slide in from the edge of the screen, commonly used for navigation, filters, or secondary content.

## Basic Drawer

A simple slide-out panel from the right.

<Preview>
  <div style="position: relative; height: 300px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Drawer Title</h3>
        <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
      </div>
      <div class="Drawer-body">
        <p>Drawer content goes here. This can contain any elements.</p>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer-backdrop"></div>
<div class="Drawer Drawer--right">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Drawer Title</h3>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  </div>
  <div class="Drawer-body">
    <p>Drawer content goes here.</p>
  </div>
</div>
```

## Position Variants

Drawers can slide in from any edge.

<Preview>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4);">
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--left Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Left</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Right</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--top Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Top</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--bottom Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Bottom</h4>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--left">...</div>
<div class="Drawer Drawer--right">...</div>
<div class="Drawer Drawer--top">...</div>
<div class="Drawer Drawer--bottom">...</div>
```

## Sizes

Drawers come in different widths.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--xs" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">XS (240px)</h4></div>
      </div>
    </div>
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">SM (320px)</h4></div>
      </div>
    </div>
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">Default (400px)</h4></div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--xs">...</div>  <!-- 240px -->
<div class="Drawer Drawer--sm">...</div>  <!-- 320px -->
<div class="Drawer">...</div>             <!-- 400px -->
<div class="Drawer Drawer--lg">...</div>  <!-- 560px -->
<div class="Drawer Drawer--xl">...</div>  <!-- 720px -->
<div class="Drawer Drawer--full">...</div> <!-- 100% -->
```

## Navigation Drawer

A sidebar navigation pattern.

<Preview>
  <div style="position: relative; height: 400px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer Drawer--left Drawer--open Drawer--sm" style="position: absolute;">
      <div class="Drawer-header">
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <div style="width: 32px; height: 32px; background: var(--accent); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C</div>
          <span style="font-weight: 600;">Carbon</span>
        </div>
      </div>
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active">
          <i class="ph ph-house"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-folder"></i>
          <span>Projects</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-users"></i>
          <span>Team</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-calendar"></i>
          <span>Calendar</span>
        </a>
        <div class="Drawer-navDivider"></div>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-gear"></i>
          <span>Settings</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-question"></i>
          <span>Help</span>
        </a>
      </nav>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--left Drawer--sm">
  <div class="Drawer-header">
    <div class="Logo">...</div>
  </div>
  <nav class="Drawer-nav">
    <a href="#" class="Drawer-navItem Drawer-navItem--active">
      <i class="ph ph-house"></i>
      <span>Dashboard</span>
    </a>
    <a href="#" class="Drawer-navItem">
      <i class="ph ph-folder"></i>
      <span>Projects</span>
    </a>
    <div class="Drawer-navDivider"></div>
    <a href="#" class="Drawer-navItem">
      <i class="ph ph-gear"></i>
      <span>Settings</span>
    </a>
  </nav>
</div>
```

## Filter Drawer

A drawer for filter controls.

<Preview>
  <div style="position: relative; height: 400px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Filters</h3>
        <button class="Button Button--ghost Button--sm">Reset</button>
      </div>
      <div class="Drawer-body">
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Category</h4>
          <label class="Checkbox"><input type="checkbox" checked> Electronics</label>
          <label class="Checkbox"><input type="checkbox"> Clothing</label>
          <label class="Checkbox"><input type="checkbox" checked> Books</label>
          <label class="Checkbox"><input type="checkbox"> Home & Garden</label>
        </div>
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Price Range</h4>
          <div style="display: flex; gap: var(--space-2); align-items: center;">
            <input type="number" class="Input Input--sm" placeholder="Min" style="width: 80px;">
            <span>—</span>
            <input type="number" class="Input Input--sm" placeholder="Max" style="width: 80px;">
          </div>
        </div>
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Rating</h4>
          <label class="Radio"><input type="radio" name="rating"> 4+ Stars</label>
          <label class="Radio"><input type="radio" name="rating" checked> 3+ Stars</label>
          <label class="Radio"><input type="radio" name="rating"> Any</label>
        </div>
      </div>
      <div class="Drawer-footer">
        <button class="Button Button--ghost" style="flex: 1;">Cancel</button>
        <button class="Button Button--primary" style="flex: 1;">Apply Filters</button>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--right Drawer--sm">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Filters</h3>
    <button class="Button Button--ghost Button--sm">Reset</button>
  </div>
  <div class="Drawer-body">
    <div class="Drawer-section">
      <h4 class="Drawer-sectionTitle">Category</h4>
      <!-- Filter controls -->
    </div>
  </div>
  <div class="Drawer-footer">
    <button class="Button Button--ghost">Cancel</button>
    <button class="Button Button--primary">Apply</button>
  </div>
</div>
```

## With Tabs

Organize drawer content with tabs.

<Preview>
  <div style="position: relative; height: 350px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Details</h3>
        <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
      </div>
      <div class="Tabs Tabs--full">
        <div class="Tabs-list" role="tablist">
          <button class="Tabs-tab active" role="tab">Info</button>
          <button class="Tabs-tab" role="tab">Activity</button>
          <button class="Tabs-tab" role="tab">Comments</button>
        </div>
      </div>
      <div class="Drawer-body">
        <p>Tab content goes here...</p>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--right">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Details</h3>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  </div>
  <div class="Tabs Tabs--full">
    <div class="Tabs-list" role="tablist">
      <button class="Tabs-tab active" role="tab">Info</button>
      <button class="Tabs-tab" role="tab">Activity</button>
    </div>
  </div>
  <div class="Drawer-body">
    <!-- Content -->
  </div>
</div>
```

## Persistent Sidebar

A drawer that stays open alongside main content.

<Preview>
  <div style="display: flex; height: 300px; border: 1px solid var(--bd); border-radius: var(--radius-md); overflow: hidden;">
    <div class="Drawer Drawer--persistent Drawer--open Drawer--sm" style="position: relative;">
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active">
          <i class="ph ph-house"></i>
          <span>Home</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-chart-bar"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-envelope"></i>
          <span>Messages</span>
        </a>
      </nav>
    </div>
    <div style="flex: 1; padding: var(--space-4); background: var(--bg-s);">
      <p style="color: var(--fg-3);">Main content area</p>
    </div>
  </div>
</Preview>

```html
<div class="Layout">
  <div class="Drawer Drawer--persistent Drawer--sm">
    <nav class="Drawer-nav">...</nav>
  </div>
  <main class="Layout-main">
    <!-- Main content -->
  </main>
</div>
```

## Mini Variant

Collapsed sidebar showing only icons, expands on hover.

<Preview>
  <div style="display: flex; height: 300px; border: 1px solid var(--bd); border-radius: var(--radius-md); overflow: hidden;">
    <div class="Drawer Drawer--persistent Drawer--mini Drawer--open" style="position: relative;">
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active" title="Home">
          <i class="ph ph-house"></i>
          <span>Home</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Search">
          <i class="ph ph-magnifying-glass"></i>
          <span>Search</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Notifications">
          <i class="ph ph-bell"></i>
          <span>Notifications</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Settings">
          <i class="ph ph-gear"></i>
          <span>Settings</span>
        </a>
      </nav>
    </div>
    <div style="flex: 1; padding: var(--space-4); background: var(--bg-s);">
      <p style="color: var(--fg-3);">Hover over the sidebar to expand</p>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--persistent Drawer--mini">
  <nav class="Drawer-nav">
    <a href="#" class="Drawer-navItem" title="Home">
      <i class="ph ph-house"></i>
      <span>Home</span>
    </a>
  </nav>
</div>
```

## CSS Reference

```css
/* Backdrop overlay */
.Drawer-backdrop {
  position: fixed;
  inset: 0;
  background: oklch(0% 0 0 / 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 998;
}
.Drawer-backdrop--visible {
  opacity: 1;
  visibility: visible;
}

/* Base drawer */
.Drawer {
  position: fixed;
  background: var(--bg);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
  transition: transform 0.3s ease;
}

/* Position variants */
.Drawer--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  transform: translateX(100%);
}
.Drawer--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  transform: translateX(-100%);
}
.Drawer--top {
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  transform: translateY(-100%);
}
.Drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  transform: translateY(100%);
}

/* Open state */
.Drawer--open {
  transform: translate(0);
}

/* Sizes */
.Drawer--xs { width: 240px; }
.Drawer--sm { width: 320px; }
.Drawer--lg { width: 560px; }
.Drawer--xl { width: 720px; }
.Drawer--full { width: 100%; }

/* Persistent (in-page sidebar) */
.Drawer--persistent {
  position: relative;
  box-shadow: none;
  border-right: 1px solid var(--bd);
  transform: none;
}

/* Mini variant */
.Drawer--mini {
  width: 64px;
  transition: width 0.2s;
}
.Drawer--mini:hover {
  width: 240px;
}
.Drawer--mini .Drawer-navItem span {
  opacity: 0;
  width: 0;
  overflow: hidden;
}
.Drawer--mini:hover .Drawer-navItem span {
  opacity: 1;
  width: auto;
}

/* Header */
.Drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  border-bottom: 1px solid var(--bd);
}
.Drawer-title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}

/* Body */
.Drawer-body {
  flex: 1;
  padding: var(--space-4);
  overflow-y: auto;
}

/* Footer */
.Drawer-footer {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-top: 1px solid var(--bd);
}

/* Navigation */
.Drawer-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
}
.Drawer-navItem {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--fg-3);
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.Drawer-navItem:hover {
  background: var(--bg-s);
  color: var(--fg);
}
.Drawer-navItem--active {
  background: oklch(60% 0.15 250 / 0.1);
  color: var(--accent);
}
.Drawer-navDivider {
  height: 1px;
  background: var(--bd);
  margin: var(--space-2) 0;
}

/* Sections */
.Drawer-section {
  margin-bottom: var(--space-4);
}
.Drawer-sectionTitle {
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--fg);
}
```

## JavaScript

```js
// Toggle drawer
function toggleDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.querySelector('.Drawer-backdrop');
  
  drawer.classList.toggle('Drawer--open');
  backdrop?.classList.toggle('Drawer-backdrop--visible');
  
  // Prevent body scroll when open
  document.body.style.overflow = drawer.classList.contains('Drawer--open') ? 'hidden' : '';
}

// Close on backdrop click
document.querySelector('.Drawer-backdrop')?.addEventListener('click', () => {
  document.querySelectorAll('.Drawer--open').forEach(d => d.classList.remove('Drawer--open'));
  document.querySelector('.Drawer-backdrop')?.classList.remove('Drawer-backdrop--visible');
  document.body.style.overflow = '';
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.Drawer--open').forEach(d => d.classList.remove('Drawer--open'));
    document.querySelector('.Drawer-backdrop')?.classList.remove('Drawer-backdrop--visible');
    document.body.style.overflow = '';
  }
});
```

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Drawer` | Base drawer container |
| `.Drawer--left` | Slides in from the left edge |
| `.Drawer--right` | Slides in from the right edge (default) |
| `.Drawer--top` | Slides in from the top edge |
| `.Drawer--bottom` | Slides in from the bottom edge |
| `.Drawer--open` | Shows the drawer (applies transform) |
| `.Drawer--xs` | Extra small width (240px) |
| `.Drawer--sm` | Small width (320px) |
| `.Drawer--lg` | Large width (560px) |
| `.Drawer--xl` | Extra large width (720px) |
| `.Drawer--full` | Full width (100%) |
| `.Drawer--persistent` | In-page sidebar (no overlay) |
| `.Drawer--mini` | Collapsed sidebar, expands on hover |
| `.Drawer-backdrop` | Overlay behind the drawer |
| `.Drawer-backdrop--visible` | Shows the backdrop |
| `.Drawer-header` | Header with title and close button |
| `.Drawer-title` | Title text in header |
| `.Drawer-body` | Scrollable content area |
| `.Drawer-footer` | Footer with actions |
| `.Drawer-nav` | Navigation container |
| `.Drawer-navItem` | Navigation link item |
| `.Drawer-navItem--active` | Active navigation item |
| `.Drawer-navDivider` | Divider between nav groups |
| `.Drawer-section` | Content section (e.g., filters) |
| `.Drawer-sectionTitle` | Section heading |

</div>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` for modal drawers
- Add `aria-labelledby` pointing to the drawer title
- Trap focus within the drawer when open
- Return focus to the trigger element when closed
- Support Escape key to close the drawer
- Ensure backdrop click closes the drawer
- Use `aria-hidden="true"` on main content when drawer is open
- Provide a visible close button with `aria-label="Close"`
- For navigation drawers, use `nav` element with `aria-label`
