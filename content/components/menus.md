# Menus

Menus display a list of choices on temporary surfaces, typically triggered by buttons or context actions. They allow users to select from a set of options without cluttering the interface.

---

## Installation

Copy the menu CSS from `styles/docs.css` or include the Carbon stylesheet:

```html
<link rel="stylesheet" href="carbon.min.css">
```

Then use menu classes in your HTML:

```html
<div class="Menu">
    <button class="Menu-item">Edit</button>
    <button class="Menu-item">Delete</button>
</div>
```

---

## Usage

The base `.Menu` class provides the menu container styling. Add `.Menu--open` to show the menu, and use `.Menu-item` for each action.

<Preview>
<div class="Menu Menu--open" style="position: relative; max-width: 180px;">
    <button class="Menu-item">Edit</button>
    <button class="Menu-item">Duplicate</button>
    <button class="Menu-item">Archive</button>
    <button class="Menu-item">Delete</button>
</div>
</Preview>

---

## Examples

### Basic Menu

A simple dropdown menu with clickable items.

<Preview>
<div class="Menu-demo">
    <button class="Button Button--secondary" onclick="this.nextElementSibling.classList.toggle('Menu--open')">
        Options
        <i class="ph ph-caret-down"></i>
    </button>
    <div class="Menu Menu--open" style="position: relative; top: var(--space-2);">
        <button class="Menu-item">Edit</button>
        <button class="Menu-item">Duplicate</button>
        <button class="Menu-item">Archive</button>
        <button class="Menu-item">Delete</button>
    </div>
</div>
</Preview>

### Menu with Icons

Add leading icons to menu items for visual recognition.

<Preview>
<div class="Menu Menu--open" style="max-width: 200px;">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-pencil"></i>
        Edit
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-copy"></i>
        Duplicate
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-archive"></i>
        Archive
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item Menu-item--danger">
        <i class="Menu-item-icon ph ph-trash"></i>
        Delete
    </button>
</div>
</Preview>

### Menu with Shortcuts

Display keyboard shortcuts alongside menu items.

<Preview>
<div class="Menu Menu--open" style="max-width: 240px;">
    <button class="Menu-item">
        <span class="Menu-item-text">Undo</span>
        <span class="Menu-item-shortcut">⌘Z</span>
    </button>
    <button class="Menu-item">
        <span class="Menu-item-text">Redo</span>
        <span class="Menu-item-shortcut">⇧⌘Z</span>
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item">
        <span class="Menu-item-text">Cut</span>
        <span class="Menu-item-shortcut">⌘X</span>
    </button>
    <button class="Menu-item">
        <span class="Menu-item-text">Copy</span>
        <span class="Menu-item-shortcut">⌘C</span>
    </button>
    <button class="Menu-item">
        <span class="Menu-item-text">Paste</span>
        <span class="Menu-item-shortcut">⌘V</span>
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item">
        <span class="Menu-item-text">Select All</span>
        <span class="Menu-item-shortcut">⌘A</span>
    </button>
</div>
</Preview>

### Menu with Sections

Group related items with headers.

<Preview>
<div class="Menu Menu--open" style="max-width: 220px;">
    <div class="Menu-header">View</div>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-squares-four"></i>
        Grid View
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-list"></i>
        List View
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-columns"></i>
        Column View
    </button>
    <div class="Menu-header">Sort By</div>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-calendar"></i>
        Date Modified
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-text-aa"></i>
        Name
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-file"></i>
        Size
    </button>
</div>
</Preview>

### Checkable Menu

Menu items with checkboxes or radio buttons for toggling options.

<Preview>
<div style="display: flex; gap: var(--space-6);">
    <div class="Menu Menu--open" style="min-width: 180px;">
        <div class="Menu-header">Options</div>
        <label class="Menu-item Menu-item--checkbox">
            <input type="checkbox" checked>
            <span class="Menu-item-text">Show Hidden Files</span>
        </label>
        <label class="Menu-item Menu-item--checkbox">
            <input type="checkbox">
            <span class="Menu-item-text">Show Extensions</span>
        </label>
        <label class="Menu-item Menu-item--checkbox">
            <input type="checkbox" checked>
            <span class="Menu-item-text">Show Preview</span>
        </label>
    </div>
    <div class="Menu Menu--open" style="min-width: 160px;">
        <div class="Menu-header">Sort Order</div>
        <label class="Menu-item Menu-item--radio">
            <input type="radio" name="sort" checked>
            <span class="Menu-item-text">Ascending</span>
        </label>
        <label class="Menu-item Menu-item--radio">
            <input type="radio" name="sort">
            <span class="Menu-item-text">Descending</span>
        </label>
    </div>
</div>
</Preview>

### Submenu

Menu items that expand to show nested options.

<Preview>
<div class="Menu Menu--open" style="max-width: 200px;">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-file-plus"></i>
        New
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-folder-open"></i>
        Open
    </button>
    <button class="Menu-item Menu-item--submenu">
        <i class="Menu-item-icon ph ph-clock-counter-clockwise"></i>
        <span class="Menu-item-text">Recent</span>
        <i class="Menu-item-chevron ph ph-caret-right"></i>
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-floppy-disk"></i>
        Save
    </button>
    <button class="Menu-item Menu-item--submenu">
        <i class="Menu-item-icon ph ph-export"></i>
        <span class="Menu-item-text">Export As</span>
        <i class="Menu-item-chevron ph ph-caret-right"></i>
    </button>
</div>
</Preview>

### Compact Menu

A denser menu variant for space-constrained areas or toolbars.

<Preview>
<div class="Menu Menu--open Menu--compact" style="max-width: 160px;">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-pencil"></i>
        Edit
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-copy"></i>
        Copy
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-share"></i>
        Share
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item Menu-item--danger">
        <i class="Menu-item-icon ph ph-trash"></i>
        Delete
    </button>
</div>
</Preview>

### Menu with Descriptions

Add secondary text for more context on complex actions.

<Preview>
<div class="Menu Menu--open" style="max-width: 280px;">
    <button class="Menu-item Menu-item--multiline">
        <i class="Menu-item-icon ph ph-user-circle"></i>
        <div class="Menu-item-content">
            <span class="Menu-item-title">Profile</span>
            <span class="Menu-item-description">View and edit your profile</span>
        </div>
    </button>
    <button class="Menu-item Menu-item--multiline">
        <i class="Menu-item-icon ph ph-gear"></i>
        <div class="Menu-item-content">
            <span class="Menu-item-title">Settings</span>
            <span class="Menu-item-description">Manage preferences</span>
        </div>
    </button>
    <button class="Menu-item Menu-item--multiline">
        <i class="Menu-item-icon ph ph-bell"></i>
        <div class="Menu-item-content">
            <span class="Menu-item-title">Notifications</span>
            <span class="Menu-item-description">Configure alerts</span>
        </div>
    </button>
    <div class="Menu-divider"></div>
    <button class="Menu-item Menu-item--danger">
        <i class="Menu-item-icon ph ph-sign-out"></i>
        Sign Out
    </button>
</div>
</Preview>

### Context Menu

Right-click style context menu for in-place actions.

<Preview>
<div style="position: relative; padding: var(--space-8); background: var(--bg-s); border-radius: var(--r-m); text-align: center; color: var(--fg-3);">
    <span>Right-click area (simulated)</span>
    <div class="Menu Menu--open Menu--context" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <button class="Menu-item">
            <i class="Menu-item-icon ph ph-arrow-left"></i>
            Back
        </button>
        <button class="Menu-item" disabled>
            <i class="Menu-item-icon ph ph-arrow-right"></i>
            Forward
        </button>
        <button class="Menu-item">
            <i class="Menu-item-icon ph ph-arrow-clockwise"></i>
            Reload
        </button>
        <div class="Menu-divider"></div>
        <button class="Menu-item">
            <i class="Menu-item-icon ph ph-code"></i>
            View Source
        </button>
        <button class="Menu-item">
            <i class="Menu-item-icon ph ph-magnifying-glass"></i>
            Inspect
        </button>
    </div>
</div>
</Preview>

### Disabled Items

Menu items that are not currently available.

<Preview>
<div class="Menu Menu--open" style="max-width: 200px;">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-pencil"></i>
        Edit
    </button>
    <button class="Menu-item" disabled>
        <i class="Menu-item-icon ph ph-scissors"></i>
        Cut
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-copy"></i>
        Copy
    </button>
    <button class="Menu-item" disabled>
        <i class="Menu-item-icon ph ph-clipboard"></i>
        Paste
    </button>
</div>
</Preview>

---

## Customization

Override menu styles using CSS custom properties:

```css
/* Custom menu appearance */
.Menu {
  --menu-bg: var(--bg);
  --menu-border: var(--border-primary);
  --menu-shadow: var(--shadow-lg);
  --menu-radius: var(--radius-lg);
}

/* Custom item styling */
.Menu-item {
  --menu-item-padding: var(--space-2) var(--space-3);
  --menu-item-hover: var(--bg-s);
}

/* Danger variant color */
.Menu-item--danger {
  --menu-item-color: var(--color-danger);
}

/* Custom compact variant */
.Menu--compact .Menu-item {
  --menu-item-padding: var(--space-1) var(--space-2);
  font-size: var(--text-sm);
}

/* Wider menu */
.Menu--wide {
  min-width: 280px;
}
```

---

## API Reference

### Container Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Menu</code></td>
<td class="ApiTable-desc">Base menu container (hidden by default)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu--open</code></td>
<td class="ApiTable-desc">Shows the menu (display: block)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu--compact</code></td>
<td class="ApiTable-desc">Denser padding for compact layouts</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu--context</code></td>
<td class="ApiTable-desc">Context menu styling (absolute positioning)</td>
</tr>
</tbody>
</table>

### Item Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Menu-item</code></td>
<td class="ApiTable-desc">Clickable menu item (use on button/a/label)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item--danger</code></td>
<td class="ApiTable-desc">Destructive action styling (red text)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item--checkbox</code></td>
<td class="ApiTable-desc">Checkbox item (use on label)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item--radio</code></td>
<td class="ApiTable-desc">Radio item (use on label)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item--submenu</code></td>
<td class="ApiTable-desc">Item with nested submenu indicator</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item--multiline</code></td>
<td class="ApiTable-desc">Item with title and description</td>
</tr>
</tbody>
</table>

### Item Content Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Menu-item-icon</code></td>
<td class="ApiTable-desc">Leading icon in menu item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-text</code></td>
<td class="ApiTable-desc">Main text label (required with shortcuts)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-shortcut</code></td>
<td class="ApiTable-desc">Keyboard shortcut display (right-aligned)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-chevron</code></td>
<td class="ApiTable-desc">Submenu indicator arrow</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-content</code></td>
<td class="ApiTable-desc">Wrapper for multiline items</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-title</code></td>
<td class="ApiTable-desc">Primary text in multiline item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-item-description</code></td>
<td class="ApiTable-desc">Secondary text in multiline item</td>
</tr>
</tbody>
</table>

### Structural Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Menu-header</code></td>
<td class="ApiTable-desc">Section header (non-interactive)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Menu-divider</code></td>
<td class="ApiTable-desc">Visual separator between groups</td>
</tr>
</tbody>
</table>

### Data Attributes

<table class="ApiTable">
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">disabled</code></td>
<td class="ApiTable-desc">Disables the menu item (grayed out, not clickable)</td>
</tr>
</tbody>
</table>

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter / Space | Activates focused menu item |
| Escape | Closes the menu |
| Arrow Down | Moves focus to next item |
| Arrow Up | Moves focus to previous item |
| Arrow Right | Opens submenu (if present) |
| Arrow Left | Closes submenu, returns to parent |
| Home | Moves focus to first item |
| End | Moves focus to last item |

### Screen Readers

```html
<!-- Menu trigger with aria-expanded -->
<button class="Button Button--secondary" 
        aria-haspopup="menu" 
        aria-expanded="false"
        aria-controls="options-menu">
    Options
    <i class="ph ph-caret-down"></i>
</button>

<!-- Menu container with role -->
<div class="Menu" role="menu" id="options-menu" aria-label="Options">
    <button class="Menu-item" role="menuitem">Edit</button>
    <button class="Menu-item" role="menuitem">Duplicate</button>
    <div class="Menu-divider" role="separator"></div>
    <button class="Menu-item" role="menuitem">Delete</button>
</div>

<!-- Disabled item -->
<button class="Menu-item" role="menuitem" aria-disabled="true">
    Paste
</button>

<!-- Checkbox item -->
<div class="Menu-item" role="menuitemcheckbox" aria-checked="true">
    <span class="Menu-item-text">Show Hidden Files</span>
</div>

<!-- Radio group -->
<div role="group" aria-label="Sort order">
    <div class="Menu-item" role="menuitemradio" aria-checked="true">
        Ascending
    </div>
    <div class="Menu-item" role="menuitemradio" aria-checked="false">
        Descending
    </div>
</div>

<!-- Submenu trigger -->
<button class="Menu-item" role="menuitem" aria-haspopup="menu" aria-expanded="false">
    <span class="Menu-item-text">Recent</span>
    <i class="Menu-item-chevron ph ph-caret-right"></i>
</button>
```

### Focus Management

```html
<!-- When menu opens: -->
<!-- 1. Set aria-expanded="true" on trigger -->
<!-- 2. Move focus to first menu item -->
<!-- 3. Trap focus within menu -->

<!-- When menu closes: -->
<!-- 1. Set aria-expanded="false" on trigger -->
<!-- 2. Return focus to trigger button -->
```

---

## Best Practices

### Do

- ✓ **Use clear, concise labels** — "Delete" not "Remove this item from the list"
- ✓ **Group related items** — Use headers and dividers to organize
- ✓ **Show keyboard shortcuts** — Help power users work faster
- ✓ **Use icons consistently** — All items with icons, or none
- ✓ **Put destructive actions last** — Separated by a divider
- ✓ **Close on selection** — Menu should dismiss after an action
- ✓ **Manage focus properly** — Return focus to trigger on close

### Don't

- ✗ **Nest too deeply** — More than 2 levels becomes confusing
- ✗ **Use menus for navigation** — Use proper nav components instead
- ✗ **Mix icons and no-icons** — Be consistent within a menu
- ✗ **Forget disabled states** — Explain why items are unavailable
- ✗ **Make menus too wide** — Keep them scannable (max ~300px)
- ✗ **Put too many items** — Consider breaking into sections or submenus
- ✗ **Ignore touch targets** — Minimum 44px height on mobile
