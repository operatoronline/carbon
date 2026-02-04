# Lists

Lists display collections of related items in a vertical arrangement. They're ideal for navigation, settings, selections, and displaying data.

## Basic List

A simple list with clickable items.

<Preview title="Basic List">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <span class="List-item-text">Profile</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Settings</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Notifications</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Help & Support</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <span class="List-item-text">Profile</span>
    </li>
    <li class="List-item">
        <span class="List-item-text">Settings</span>
    </li>
    ...
</ul>
```

## List with Icons

Add leading icons to provide visual context for each item.

<Preview title="List with Icons">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-user"></i>
            <span class="List-item-text">Profile</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-gear"></i>
            <span class="List-item-text">Settings</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-bell"></i>
            <span class="List-item-text">Notifications</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-question"></i>
            <span class="List-item-text">Help & Support</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-user"></i>
        <span class="List-item-text">Profile</span>
    </li>
    ...
</ul>
```

## List with Descriptions

Add secondary text for additional context.

<Preview title="List with Descriptions">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-user"></i>
            <div class="List-item-content">
                <span class="List-item-text">Profile</span>
                <span class="List-item-description">Manage your personal information</span>
            </div>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-shield-check"></i>
            <div class="List-item-content">
                <span class="List-item-text">Security</span>
                <span class="List-item-description">Password, 2FA, and login sessions</span>
            </div>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-bell"></i>
            <div class="List-item-content">
                <span class="List-item-text">Notifications</span>
                <span class="List-item-description">Configure alerts and emails</span>
            </div>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-user"></i>
        <div class="List-item-content">
            <span class="List-item-text">Profile</span>
            <span class="List-item-description">Manage your personal information</span>
        </div>
    </li>
    ...
</ul>
```

## List with Trailing Actions

Add trailing elements like badges, chevrons, or switches.

<Preview title="List with Trailing Actions">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-envelope"></i>
            <span class="List-item-text">Messages</span>
            <span class="List-item-trailing">
                <span class="Badge Badge--primary">5</span>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-moon"></i>
            <span class="List-item-text">Dark Mode</span>
            <span class="List-item-trailing">
                <label class="Switch">
                    <input type="checkbox" checked>
                    <span class="Switch-slider"></span>
                </label>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-globe"></i>
            <span class="List-item-text">Language</span>
            <span class="List-item-trailing List-item-meta">
                English
                <i class="ph ph-caret-right"></i>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-trash"></i>
            <span class="List-item-text List-item-text--danger">Delete Account</span>
            <span class="List-item-trailing">
                <i class="ph ph-caret-right"></i>
            </span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-envelope"></i>
        <span class="List-item-text">Messages</span>
        <span class="List-item-trailing">
            <span class="Badge Badge--primary">5</span>
        </span>
    </li>
    ...
</ul>
```

## Grouped Lists

Use headers to organize related items into sections.

<Preview title="Grouped List">
    <div style="max-width: 400px;">
        <div class="List-header">Account</div>
        <ul class="List">
            <li class="List-item">
                <i class="List-item-icon ph ph-user"></i>
                <span class="List-item-text">Profile</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-shield-check"></i>
                <span class="List-item-text">Security</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
        </ul>
        <div class="List-header">Preferences</div>
        <ul class="List">
            <li class="List-item">
                <i class="List-item-icon ph ph-bell"></i>
                <span class="List-item-text">Notifications</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-palette"></i>
                <span class="List-item-text">Appearance</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
        </ul>
    </div>
</Preview>

```html
<div class="List-header">Account</div>
<ul class="List">
    <li class="List-item">...</li>
</ul>
<div class="List-header">Preferences</div>
<ul class="List">
    <li class="List-item">...</li>
</ul>
```

## Selectable List

Lists where items can be selected, with checkboxes or radio buttons.

<Preview title="Selectable List (Checkbox)">
    <ul class="List List--selectable" style="max-width: 320px;">
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-1" checked>
            <label for="sel-1" class="List-item-text">Design System</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-2">
            <label for="sel-2" class="List-item-text">API Documentation</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-3" checked>
            <label for="sel-3" class="List-item-text">Component Library</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-4">
            <label for="sel-4" class="List-item-text">Testing Suite</label>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--selectable">
    <li class="List-item">
        <input type="checkbox" class="List-item-checkbox" id="sel-1" checked>
        <label for="sel-1" class="List-item-text">Design System</label>
    </li>
    ...
</ul>
```

<Preview title="Selectable List (Radio)">
    <ul class="List List--selectable" style="max-width: 320px;">
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-1">
            <label for="plan-1" class="List-item-text">Free Plan</label>
        </li>
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-2" checked>
            <label for="plan-2" class="List-item-text">Pro Plan</label>
        </li>
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-3">
            <label for="plan-3" class="List-item-text">Enterprise</label>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--selectable">
    <li class="List-item">
        <input type="radio" name="plan" class="List-item-radio" id="plan-1">
        <label for="plan-1" class="List-item-text">Free Plan</label>
    </li>
    ...
</ul>
```

## List with Avatars

Display user or entity information with avatars.

<Preview title="List with Avatars">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <div class="Avatar Avatar--md">
                <img src="https://i.pravatar.cc/150?img=1" alt="Sarah Chen">
            </div>
            <div class="List-item-content">
                <span class="List-item-text">Sarah Chen</span>
                <span class="List-item-description">Product Designer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge Badge--success">Online</span>
            </span>
        </li>
        <li class="List-item">
            <div class="Avatar Avatar--md">
                <img src="https://i.pravatar.cc/150?img=3" alt="Alex Rivera">
            </div>
            <div class="List-item-content">
                <span class="List-item-text">Alex Rivera</span>
                <span class="List-item-description">Frontend Engineer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge">Away</span>
            </span>
        </li>
        <li class="List-item">
            <div class="Avatar Avatar--md">JD</div>
            <div class="List-item-content">
                <span class="List-item-text">Jordan Davis</span>
                <span class="List-item-description">Backend Engineer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge Badge--secondary">Offline</span>
            </span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <div class="Avatar Avatar--md">
            <img src="..." alt="Sarah Chen">
        </div>
        <div class="List-item-content">
            <span class="List-item-text">Sarah Chen</span>
            <span class="List-item-description">Product Designer</span>
        </div>
        <span class="List-item-trailing">
            <span class="Badge Badge--success">Online</span>
        </span>
    </li>
    ...
</ul>
```

## Bordered List

A list with visible borders between items.

<Preview title="Bordered List">
    <ul class="List List--bordered" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-file-text"></i>
            <span class="List-item-text">Documents</span>
            <span class="List-item-trailing List-item-meta">128 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-image"></i>
            <span class="List-item-text">Images</span>
            <span class="List-item-trailing List-item-meta">64 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-video"></i>
            <span class="List-item-text">Videos</span>
            <span class="List-item-trailing List-item-meta">12 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-music-note"></i>
            <span class="List-item-text">Audio</span>
            <span class="List-item-trailing List-item-meta">89 files</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--bordered">
    <li class="List-item">
        <i class="List-item-icon ph ph-file-text"></i>
        <span class="List-item-text">Documents</span>
        <span class="List-item-trailing List-item-meta">128 files</span>
    </li>
    ...
</ul>
```

## Compact List

A denser list variant for tighter spaces.

<Preview title="Compact List">
    <ul class="List List--compact" style="max-width: 280px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-house"></i>
            <span class="List-item-text">Home</span>
        </li>
        <li class="List-item List-item--active">
            <i class="List-item-icon ph ph-folder"></i>
            <span class="List-item-text">Projects</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-calendar"></i>
            <span class="List-item-text">Calendar</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-chat-circle"></i>
            <span class="List-item-text">Messages</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-gear"></i>
            <span class="List-item-text">Settings</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--compact">
    <li class="List-item">
        <i class="List-item-icon ph ph-house"></i>
        <span class="List-item-text">Home</span>
    </li>
    <li class="List-item List-item--active">
        <i class="List-item-icon ph ph-folder"></i>
        <span class="List-item-text">Projects</span>
    </li>
    ...
</ul>
```

## Disabled Items

Items that cannot be interacted with.

<Preview title="Disabled Items">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-check-circle"></i>
            <span class="List-item-text">Available Option</span>
        </li>
        <li class="List-item List-item--disabled">
            <i class="List-item-icon ph ph-lock"></i>
            <span class="List-item-text">Premium Feature</span>
            <span class="List-item-trailing">
                <span class="Badge Badge--warning">Pro</span>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-check-circle"></i>
            <span class="List-item-text">Another Option</span>
        </li>
        <li class="List-item List-item--disabled">
            <i class="List-item-icon ph ph-clock"></i>
            <span class="List-item-text">Coming Soon</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <span class="List-item-text">Available Option</span>
    </li>
    <li class="List-item List-item--disabled">
        <span class="List-item-text">Premium Feature</span>
    </li>
    ...
</ul>
```

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.List` | Container for list items |
| `.List--bordered` | Visible borders between items |
| `.List--compact` | Reduced padding for dense layouts |
| `.List--selectable` | List with checkbox/radio selection |
| `.List-header` | Section header/title |
| `.List-item` | Individual list item |
| `.List-item--active` | Highlighted/selected state |
| `.List-item--disabled` | Non-interactive item |
| `.List-item-icon` | Leading icon |
| `.List-item-text` | Primary text content |
| `.List-item-text--danger` | Destructive action text (red) |
| `.List-item-description` | Secondary/helper text |
| `.List-item-content` | Wrapper for text + description |
| `.List-item-trailing` | Right-aligned content |
| `.List-item-meta` | Secondary trailing text |
| `.List-item-checkbox` | Checkbox input in selectable lists |
| `.List-item-radio` | Radio input in selectable lists |

### Structure

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-user"></i>
        <div class="List-item-content">
            <span class="List-item-text">Title</span>
            <span class="List-item-description">Description</span>
        </div>
        <span class="List-item-trailing">
            <i class="ph ph-caret-right"></i>
        </span>
    </li>
</ul>
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bg-primary` | — | List background |
| `--bg-secondary` | — | Hover/active background |
| `--text-primary` | — | Primary text color |
| `--text-secondary` | — | Description/meta text |
| `--border-subtle` | — | Border color |
| `--space-3` | `0.75rem` | Item padding |

### Attributes

| Attribute | Description |
|-----------|-------------|
| `role="listbox"` | For interactive/selectable lists |
| `role="option"` | For items in listbox |
| `aria-selected` | Selection state for options |
| `aria-disabled="true"` | Disabled item state |

---

## Accessibility

- Use semantic `<ul>` and `<li>` elements
- Interactive lists should use `role="listbox"` and `role="option"`
- Ensure sufficient color contrast for text and icons
- Provide visible focus states for keyboard navigation
- Use `aria-selected` for selectable items
- Use `aria-disabled="true"` for disabled items

---

## Best Practices

### Do

- ✓ **Use consistent item structure** — Same elements across items
- ✓ **Group related items** — Use headers for sections
- ✓ **Show interactive states** — Hover, focus, active
- ✓ **Provide visual hierarchy** — Icons, text, descriptions

### Don't

- ✗ **Overcrowd items** — Keep content scannable
- ✗ **Mix navigation and actions** — Separate menus from settings
- ✗ **Hide important info** — Key data should be visible
