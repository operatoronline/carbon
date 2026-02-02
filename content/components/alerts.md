# Alerts

Alerts display important messages that require user attention.

## Basic Alert

<Preview title="Basic Alert">
    <div class="Alert">
        <p>This is a basic alert message.</p>
    </div>
</Preview>

```html
<div class="Alert">
    <p>This is a basic alert message.</p>
</div>
```

## With Icon

<Preview title="Alert with Icon">
    <div class="Alert Alert--info">
        <i class="ph ph-info Alert-icon"></i>
        <div class="Alert-content">
            <p>A new version is available. Please refresh to update.</p>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <i class="ph ph-info Alert-icon"></i>
    <div class="Alert-content">
        <p>Your message here.</p>
    </div>
</div>
```

## Variants

<Preview title="Alert Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Alert Alert--info">
            <i class="ph ph-info Alert-icon"></i>
            <div class="Alert-content">
                <strong>Info:</strong> This is an informational message.
            </div>
        </div>
        <div class="Alert Alert--success">
            <i class="ph ph-check-circle Alert-icon"></i>
            <div class="Alert-content">
                <strong>Success:</strong> Your changes have been saved.
            </div>
        </div>
        <div class="Alert Alert--warning">
            <i class="ph ph-warning Alert-icon"></i>
            <div class="Alert-content">
                <strong>Warning:</strong> Your session will expire in 5 minutes.
            </div>
        </div>
        <div class="Alert Alert--error">
            <i class="ph ph-x-circle Alert-icon"></i>
            <div class="Alert-content">
                <strong>Error:</strong> Something went wrong. Please try again.
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">...</div>
<div class="Alert Alert--success">...</div>
<div class="Alert Alert--warning">...</div>
<div class="Alert Alert--error">...</div>
```

## With Title

<Preview title="Alert with Title">
    <div class="Alert Alert--warning">
        <i class="ph ph-warning Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Scheduled Maintenance</p>
            <p>The system will be unavailable on Sunday, Feb 5th from 2-4 AM UTC for scheduled maintenance.</p>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--warning">
    <i class="ph ph-warning Alert-icon"></i>
    <div class="Alert-content">
        <p class="Alert-title">Scheduled Maintenance</p>
        <p>Description text...</p>
    </div>
</div>
```

## Dismissible

<Preview title="Dismissible Alert">
    <div class="Alert Alert--info">
        <i class="ph ph-info Alert-icon"></i>
        <div class="Alert-content">
            <p>This alert can be dismissed.</p>
        </div>
        <button class="Alert-close" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <i class="ph ph-info Alert-icon"></i>
    <div class="Alert-content">
        <p>This alert can be dismissed.</p>
    </div>
    <button class="Alert-close" aria-label="Dismiss">
        <i class="ph ph-x"></i>
    </button>
</div>
```

## With Actions

<Preview title="Alert with Actions">
    <div class="Alert Alert--info">
        <i class="ph ph-cloud-arrow-up Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Update Available</p>
            <p>A new version (v2.1.0) is ready to install.</p>
            <div class="Alert-actions">
                <button class="Button Button--primary" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Update Now</button>
                <button class="Button" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Later</button>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <div class="Alert-content">
        <p class="Alert-title">Update Available</p>
        <p>Description...</p>
        <div class="Alert-actions">
            <button class="Button Button--primary">Update Now</button>
            <button class="Button">Later</button>
        </div>
    </div>
</div>
```

## Callout (Bordered)

A softer variant for documentation callouts.

<Preview title="Callout">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Callout Callout--info">
            <i class="ph ph-lightbulb Callout-icon"></i>
            <div class="Callout-content">
                <strong>Tip:</strong> You can use keyboard shortcuts to navigate faster.
            </div>
        </div>
        <div class="Callout Callout--warning">
            <i class="ph ph-warning Callout-icon"></i>
            <div class="Callout-content">
                <strong>Caution:</strong> This action cannot be undone.
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Callout Callout--info">
    <i class="ph ph-lightbulb Callout-icon"></i>
    <div class="Callout-content">
        <strong>Tip:</strong> Your content here.
    </div>
</div>
```
