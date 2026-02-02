# Menus

Menus display a list of choices on temporary surfaces, typically triggered by buttons or context actions.

## Basic Menu

A simple dropdown menu with clickable items.

<Preview title="Basic Menu">
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

```html
<div class="Menu">
    <button class="Menu-item">Edit</button>
    <button class="Menu-item">Duplicate</button>
    <button class="Menu-item">Archive</button>
    <button class="Menu-item">Delete</button>
</div>
```

## Menu with Icons

Add leading icons to menu items for visual recognition.

<Preview title="Menu with Icons">
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

```html
<div class="Menu">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-pencil"></i>
        Edit
    </button>
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-copy"></i>
        Duplicate
    </button>
    ...
    <div class="Menu-divider"></div>
    <button class="Menu-item Menu-item--danger">
        <i class="Menu-item-icon ph ph-trash"></i>
        Delete
    </button>
</div>
```

## Menu with Shortcuts

Display keyboard shortcuts alongside menu items.

<Preview title="Menu with Shortcuts">
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

```html
<div class="Menu">
    <button class="Menu-item">
        <span class="Menu-item-text">Undo</span>
        <span class="Menu-item-shortcut">⌘Z</span>
    </button>
    <button class="Menu-item">
        <span class="Menu-item-text">Redo</span>
        <span class="Menu-item-shortcut">⇧⌘Z</span>
    </button>
    ...
</div>
```

## Menu with Sections

Group related items with headers.

<Preview title="Menu with Sections">
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

```html
<div class="Menu">
    <div class="Menu-header">View</div>
    <button class="Menu-item">Grid View</button>
    <button class="Menu-item">List View</button>
    <div class="Menu-header">Sort By</div>
    <button class="Menu-item">Date Modified</button>
    ...
</div>
```

## Checkable Menu

Menu items with checkboxes or radio buttons.

<Preview title="Checkable Menu">
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

```html
<div class="Menu">
    <div class="Menu-header">Options</div>
    <label class="Menu-item Menu-item--checkbox">
        <input type="checkbox" checked>
        <span class="Menu-item-text">Show Hidden Files</span>
    </label>
    ...
</div>
```

## Submenu

Menu items that expand to show nested options.

<Preview title="Menu with Submenu">
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

```html
<div class="Menu">
    <button class="Menu-item Menu-item--submenu">
        <i class="Menu-item-icon ph ph-clock-counter-clockwise"></i>
        <span class="Menu-item-text">Recent</span>
        <i class="Menu-item-chevron ph ph-caret-right"></i>
    </button>
    ...
</div>
```

## Compact Menu

A denser menu variant for space-constrained areas.

<Preview title="Compact Menu">
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

```html
<div class="Menu Menu--compact">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-pencil"></i>
        Edit
    </button>
    ...
</div>
```

## Menu with Descriptions

Add secondary text for more context.

<Preview title="Menu with Descriptions">
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

```html
<div class="Menu">
    <button class="Menu-item Menu-item--multiline">
        <i class="Menu-item-icon ph ph-user-circle"></i>
        <div class="Menu-item-content">
            <span class="Menu-item-title">Profile</span>
            <span class="Menu-item-description">View and edit your profile</span>
        </div>
    </button>
    ...
</div>
```

## Context Menu

Right-click style context menu.

<Preview title="Context Menu">
    <div style="position: relative; padding: var(--space-8); background: var(--bg-secondary); border-radius: var(--space-2); text-align: center; color: var(--text-secondary);">
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

```html
<div class="Menu Menu--context">
    <button class="Menu-item">
        <i class="Menu-item-icon ph ph-arrow-left"></i>
        Back
    </button>
    ...
</div>
```

## Disabled Items

Menu items that are not currently available.

<Preview title="Disabled Menu Items">
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

```html
<div class="Menu">
    <button class="Menu-item" disabled>Cut</button>
    <button class="Menu-item">Copy</button>
    <button class="Menu-item" disabled>Paste</button>
</div>
```

## Accessibility

- Use `role="menu"` on the menu container
- Use `role="menuitem"` on interactive items
- Use `role="menuitemcheckbox"` and `role="menuitemradio"` for checkable items
- Support keyboard navigation (Arrow keys, Enter, Escape)
- Use `aria-expanded` on trigger buttons
- Use `aria-disabled="true"` for disabled items
- Ensure focus management when menu opens/closes
- Use `aria-haspopup="menu"` on trigger elements
