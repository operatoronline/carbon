# Dropdowns

Dropdowns display a list of actions or options when triggered.

## Basic Dropdown

<Preview title="Basic Dropdown">
    <div class="Dropdown">
        <button class="Button Dropdown-trigger">
            Options
            <i class="ph ph-caret-down"></i>
        </button>
        <div class="Dropdown-menu" style="position: relative; display: block; margin-top: var(--space-2);">
            <a href="#" class="Dropdown-item">Edit</a>
            <a href="#" class="Dropdown-item">Duplicate</a>
            <a href="#" class="Dropdown-item">Archive</a>
            <hr class="Dropdown-divider">
            <a href="#" class="Dropdown-item Dropdown-item--danger">Delete</a>
        </div>
    </div>
</Preview>

```html
<div class="Dropdown">
    <button class="Button Dropdown-trigger">
        Options
        <i class="ph ph-caret-down"></i>
    </button>
    <div class="Dropdown-menu">
        <a href="#" class="Dropdown-item">Edit</a>
        <a href="#" class="Dropdown-item">Duplicate</a>
        <hr class="Dropdown-divider">
        <a href="#" class="Dropdown-item Dropdown-item--danger">Delete</a>
    </div>
</div>
```

## With Icons

<Preview title="Dropdown with Icons">
    <div class="Dropdown-menu" style="position: relative; display: block; width: 200px;">
        <a href="#" class="Dropdown-item">
            <i class="ph ph-pencil"></i>
            <span>Edit</span>
        </a>
        <a href="#" class="Dropdown-item">
            <i class="ph ph-copy"></i>
            <span>Duplicate</span>
        </a>
        <a href="#" class="Dropdown-item">
            <i class="ph ph-archive"></i>
            <span>Archive</span>
        </a>
        <hr class="Dropdown-divider">
        <a href="#" class="Dropdown-item Dropdown-item--danger">
            <i class="ph ph-trash"></i>
            <span>Delete</span>
        </a>
    </div>
</Preview>

```html
<a href="#" class="Dropdown-item">
    <i class="ph ph-pencil"></i>
    <span>Edit</span>
</a>
```

## With Sections

Group related items with headers.

<Preview title="Sectioned Dropdown">
    <div class="Dropdown-menu" style="position: relative; display: block; width: 220px;">
        <div class="Dropdown-header">Actions</div>
        <a href="#" class="Dropdown-item">Edit profile</a>
        <a href="#" class="Dropdown-item">Preferences</a>
        <hr class="Dropdown-divider">
        <div class="Dropdown-header">Account</div>
        <a href="#" class="Dropdown-item">Billing</a>
        <a href="#" class="Dropdown-item">Team members</a>
        <hr class="Dropdown-divider">
        <a href="#" class="Dropdown-item Dropdown-item--danger">Sign out</a>
    </div>
</Preview>

```html
<div class="Dropdown-header">Actions</div>
<a href="#" class="Dropdown-item">Edit profile</a>
```

## Checkable Items

For multi-select or toggle options.

<Preview title="Checkable Dropdown">
    <div class="Dropdown-menu" style="position: relative; display: block; width: 180px;">
        <label class="Dropdown-item Dropdown-item--check">
            <input type="checkbox" checked>
            <span>Show sidebar</span>
        </label>
        <label class="Dropdown-item Dropdown-item--check">
            <input type="checkbox" checked>
            <span>Show toolbar</span>
        </label>
        <label class="Dropdown-item Dropdown-item--check">
            <input type="checkbox">
            <span>Compact mode</span>
        </label>
    </div>
</Preview>

```html
<label class="Dropdown-item Dropdown-item--check">
    <input type="checkbox" checked>
    <span>Show sidebar</span>
</label>
```

## Icon Button Trigger

Common pattern for action menus.

<Preview title="Icon Button Dropdown">
    <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
        <div class="Dropdown">
            <button class="icon-btn Dropdown-trigger">
                <i class="ph ph-dots-three"></i>
            </button>
        </div>
        <div class="Dropdown">
            <button class="icon-btn Dropdown-trigger">
                <i class="ph ph-dots-three-vertical"></i>
            </button>
        </div>
    </div>
</Preview>

```html
<button class="icon-btn Dropdown-trigger">
    <i class="ph ph-dots-three-vertical"></i>
</button>
```

## JavaScript

Basic toggle logic:

```js
document.querySelectorAll('.Dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.Dropdown-trigger');
    const menu = dropdown.querySelector('.Dropdown-menu');
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other dropdowns
        document.querySelectorAll('.Dropdown-menu.active').forEach(m => {
            if (m !== menu) m.classList.remove('active');
        });
        menu.classList.toggle('active');
    });
});

// Close on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.Dropdown-menu.active')
        .forEach(m => m.classList.remove('active'));
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.Dropdown-menu.active')
            .forEach(m => m.classList.remove('active'));
    }
});
```
