# Progress

Progress indicators show the status of ongoing processes.

## Progress Bar

<Preview title="Progress Bar">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div class="Progress">
            <div class="Progress-bar" style="width: 25%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 50%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 75%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 100%;"></div>
        </div>
    </div>
</Preview>

```html
<div class="Progress">
    <div class="Progress-bar" style="width: 50%;"></div>
</div>
```

## With Label

<Preview title="Progress with Label">
    <div style="width: 100%;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2); font-size: 0.9rem;">
            <span>Uploading...</span>
            <span>67%</span>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 67%;"></div>
        </div>
    </div>
</Preview>

```html
<div style="display: flex; justify-content: space-between;">
    <span>Uploading...</span>
    <span>67%</span>
</div>
<div class="Progress">
    <div class="Progress-bar" style="width: 67%;"></div>
</div>
```

## Sizes

<Preview title="Progress Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div>
            <small style="color: var(--text-secondary);">Small</small>
            <div class="Progress Progress--small" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary);">Default</small>
            <div class="Progress" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary);">Large</small>
            <div class="Progress Progress--large" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Progress Progress--small">...</div>
<div class="Progress">...</div>
<div class="Progress Progress--large">...</div>
```

## Variants

<Preview title="Progress Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div class="Progress">
            <div class="Progress-bar" style="width: 60%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--success" style="width: 100%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--warning" style="width: 45%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--error" style="width: 30%;"></div>
        </div>
    </div>
</Preview>

```html
<div class="Progress-bar Progress-bar--success"></div>
<div class="Progress-bar Progress-bar--warning"></div>
<div class="Progress-bar Progress-bar--error"></div>
```

## Indeterminate

For unknown duration processes.

<Preview title="Indeterminate Progress">
    <div class="Progress">
        <div class="Progress-bar Progress-bar--indeterminate"></div>
    </div>
</Preview>

```html
<div class="Progress">
    <div class="Progress-bar Progress-bar--indeterminate"></div>
</div>
```

## Spinner

For inline loading states.

<Preview title="Spinners">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <div class="Spinner Spinner--small"></div>
        <div class="Spinner"></div>
        <div class="Spinner Spinner--large"></div>
    </div>
</Preview>

```html
<div class="Spinner Spinner--small"></div>
<div class="Spinner"></div>
<div class="Spinner Spinner--large"></div>
```

## Button with Spinner

<Preview title="Loading Button">
    <div style="display: flex; gap: var(--space-4);">
        <button class="Button Button--primary" disabled>
            <div class="Spinner Spinner--small Spinner--light"></div>
            <span>Saving...</span>
        </button>
        <button class="Button" disabled>
            <div class="Spinner Spinner--small"></div>
            <span>Loading...</span>
        </button>
    </div>
</Preview>

```html
<button class="Button Button--primary" disabled>
    <div class="Spinner Spinner--small Spinner--light"></div>
    <span>Saving...</span>
</button>
```

## Full Page Loader

<Preview title="Page Loader">
    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: var(--space-2);">
        <div style="text-align: center;">
            <div class="Spinner Spinner--large"></div>
            <p style="margin-top: var(--space-3); color: var(--text-secondary); font-size: 0.9rem;">Loading...</p>
        </div>
    </div>
</Preview>

```html
<div class="page-loader">
    <div class="Spinner Spinner--large"></div>
    <p>Loading...</p>
</div>
```
