---
title: Toolbar
---

# Toolbar

Toolbars group related actions and controls in a horizontal bar, commonly used at the top of content areas or as contextual action bars.

## Basic Toolbar

A simple toolbar with action buttons.

<Preview>
  <div class="Toolbar">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-list"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-grid-four"></i></button>
    <div class="Toolbar-divider"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-sort-ascending"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-list"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-grid-four"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-sort-ascending"></i></button>
</div>
```

## With Text Buttons

Toolbars can include text buttons alongside icon buttons.

<Preview>
  <div class="Toolbar">
    <button class="Button Button--ghost"><i class="ph ph-plus"></i> New</button>
    <button class="Button Button--ghost"><i class="ph ph-upload"></i> Upload</button>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-magnifying-glass"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-dots-three"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar">
  <button class="Button Button--ghost"><i class="ph ph-plus"></i> New</button>
  <button class="Button Button--ghost"><i class="ph ph-upload"></i> Upload</button>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-magnifying-glass"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-dots-three"></i></button>
</div>
```

## Button Groups

Group related actions together.

<Preview>
  <div class="Toolbar">
    <div class="ButtonGroup">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-left"></i></button>
      <button class="Button Button--ghost Button--icon active"><i class="ph ph-text-align-center"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-right"></i></button>
    </div>
    <div class="Toolbar-divider"></div>
    <div class="ButtonGroup">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-b"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-italic"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-underline"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar">
  <div class="ButtonGroup">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-left"></i></button>
    <button class="Button Button--ghost Button--icon active"><i class="ph ph-text-align-center"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-right"></i></button>
  </div>
  <div class="Toolbar-divider"></div>
  <div class="ButtonGroup">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-b"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-italic"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-underline"></i></button>
  </div>
</div>
```

## Bordered Toolbar

Add a border for visual separation.

<Preview>
  <div class="Toolbar Toolbar--bordered">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-left"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-right"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-clockwise"></i></button>
    <div class="Toolbar-spacer"></div>
    <span class="Toolbar-text">Page 1 of 10</span>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-share"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-download"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--bordered">
  <button class="Button Button--ghost Button--icon">...</button>
  <div class="Toolbar-spacer"></div>
  <span class="Toolbar-text">Page 1 of 10</span>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon">...</button>
</div>
```

## Sizes

Toolbars come in different sizes.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div class="Toolbar Toolbar--sm Toolbar--bordered">
      <span class="Toolbar-label">Small</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-trash"></i></button>
    </div>
    <div class="Toolbar Toolbar--bordered">
      <span class="Toolbar-label">Default</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-trash"></i></button>
    </div>
    <div class="Toolbar Toolbar--lg Toolbar--bordered">
      <span class="Toolbar-label">Large</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon Button--lg"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon Button--lg"><i class="ph ph-trash"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--sm">...</div>
<div class="Toolbar">...</div>
<div class="Toolbar Toolbar--lg">...</div>
```

## With Search

Integrate a search input into the toolbar.

<Preview>
  <div class="Toolbar Toolbar--bordered">
    <div class="Toolbar-search">
      <i class="ph ph-magnifying-glass"></i>
      <input type="text" placeholder="Search..." class="Toolbar-searchInput">
    </div>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
    <button class="Button Button--primary Button--sm">Search</button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--bordered">
  <div class="Toolbar-search">
    <i class="ph ph-magnifying-glass"></i>
    <input type="text" placeholder="Search..." class="Toolbar-searchInput">
  </div>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
  <button class="Button Button--primary Button--sm">Search</button>
</div>
```

## Contextual Toolbar

Appears when items are selected, showing relevant actions.

<Preview>
  <div class="Toolbar Toolbar--contextual">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
    <span class="Toolbar-text"><strong>3</strong> selected</span>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost"><i class="ph ph-copy"></i> Copy</button>
    <button class="Button Button--ghost"><i class="ph ph-folder"></i> Move</button>
    <button class="Button Button--ghost text-error"><i class="ph ph-trash"></i> Delete</button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--contextual">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  <span class="Toolbar-text"><strong>3</strong> selected</span>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost"><i class="ph ph-copy"></i> Copy</button>
  <button class="Button Button--ghost"><i class="ph ph-folder"></i> Move</button>
  <button class="Button Button--ghost text-error"><i class="ph ph-trash"></i> Delete</button>
</div>
```

## Vertical Toolbar

Stack actions vertically for sidebars or narrow spaces.

<Preview>
  <div style="display: inline-block;">
    <div class="Toolbar Toolbar--vertical Toolbar--bordered">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-cursor"></i></button>
      <button class="Button Button--ghost Button--icon active"><i class="ph ph-hand"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-square"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-circle"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-line-segment"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-t"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--vertical Toolbar--bordered">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-cursor"></i></button>
  <button class="Button Button--ghost Button--icon active"><i class="ph ph-hand"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-square"></i></button>
  ...
</div>
```

## Floating Toolbar

A floating toolbar for contextual actions (like text editors).

<Preview>
  <div style="padding: var(--space-8); background: var(--bg-secondary); border-radius: var(--radius-md);">
    <div class="Toolbar Toolbar--floating">
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-b"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-italic"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-underline"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-link"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-code"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--floating">
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-b"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-italic"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-underline"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-link"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-code"></i></button>
</div>
```

## CSS Reference

```css
/* Base toolbar */
.Toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2);
}

/* Divider between groups */
.Toolbar-divider {
  width: 1px;
  height: 1.5rem;
  background: var(--border-subtle);
  margin: 0 var(--space-2);
}

/* Flexible spacer */
.Toolbar-spacer {
  flex: 1;
}

/* Text content */
.Toolbar-text {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  padding: 0 var(--space-2);
}

.Toolbar-label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
  padding: 0 var(--space-2);
}

/* Bordered variant */
.Toolbar--bordered {
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
}

/* Sizes */
.Toolbar--sm { padding: var(--space-1); gap: var(--space-0-5); }
.Toolbar--lg { padding: var(--space-3); gap: var(--space-2); }

/* Vertical layout */
.Toolbar--vertical {
  flex-direction: column;
  width: fit-content;
}
.Toolbar--vertical .Toolbar-divider {
  width: 100%;
  height: 1px;
  margin: var(--space-2) 0;
}

/* Floating (elevated) */
.Toolbar--floating {
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--space-1);
}

/* Contextual (selection) */
.Toolbar--contextual {
  background: var(--accent-primary);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
}
.Toolbar--contextual .Toolbar-text { color: white; }
.Toolbar--contextual .Button--ghost { color: white; }
.Toolbar--contextual .Button--ghost:hover { background: oklch(100% 0 0 / 0.15); }

/* Search in toolbar */
.Toolbar-search {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
}
.Toolbar-searchInput {
  border: none;
  background: transparent;
  outline: none;
  font-size: var(--text-sm);
  color: var(--text-primary);
  min-width: 150px;
}

/* Button groups */
.ButtonGroup {
  display: flex;
  gap: 0;
}
.ButtonGroup .Button {
  border-radius: 0;
}
.ButtonGroup .Button:first-child {
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
}
.ButtonGroup .Button:last-child {
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}
.ButtonGroup .Button.active {
  background: var(--bg-secondary);
}
```
