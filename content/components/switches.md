# Switches

Switches toggle a single option on or off.

## Basic Switch

<Preview title="Basic Switch">
    <label class="Switch">
        <input type="checkbox">
        <span class="Switch-slider"></span>
    </label>
</Preview>

```html
<label class="Switch">
    <input type="checkbox">
    <span class="Switch-slider"></span>
</label>
```

## States

<Preview title="Switch States">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <label class="Switch">
            <input type="checkbox">
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" disabled>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked disabled>
            <span class="Switch-slider"></span>
        </label>
    </div>
</Preview>

```html
<input type="checkbox">           <!-- Off -->
<input type="checkbox" checked>   <!-- On -->
<input type="checkbox" disabled>  <!-- Disabled off -->
<input type="checkbox" checked disabled>  <!-- Disabled on -->
```

## Sizes

<Preview title="Switch Sizes">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <label class="Switch Switch--small">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch Switch--large">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
    </div>
</Preview>

```html
<label class="Switch Switch--small">...</label>
<label class="Switch">...</label>
<label class="Switch Switch--large">...</label>
```

## With Label

<Preview title="Switch with Label">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <label class="Switch-label">
            <span class="Switch-label-text">
                <span>Dark mode</span>
                <small style="color: var(--text-secondary);">Use dark theme across the app</small>
            </span>
            <span class="Switch">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label">
            <span class="Switch-label-text">
                <span>Notifications</span>
                <small style="color: var(--text-secondary);">Receive push notifications</small>
            </span>
            <span class="Switch">
                <input type="checkbox" checked>
                <span class="Switch-slider"></span>
            </span>
        </label>
    </div>
</Preview>

```html
<label class="Switch-label">
    <span class="Switch-label-text">
        <span>Dark mode</span>
        <small>Use dark theme across the app</small>
    </span>
    <span class="Switch">
        <input type="checkbox">
        <span class="Switch-slider"></span>
    </span>
</label>
```

## In a Form

<Preview title="Settings Form">
    <div style="width: 320px; display: flex; flex-direction: column; gap: var(--space-3);">
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--border-subtle);">
            <span>Email notifications</span>
            <span class="Switch Switch--small">
                <input type="checkbox" checked>
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--border-subtle);">
            <span>SMS alerts</span>
            <span class="Switch Switch--small">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--border-subtle);">
            <span>Marketing emails</span>
            <span class="Switch Switch--small">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
    </div>
</Preview>

## Accessibility

- Switches use native `<input type="checkbox">` for full accessibility
- Labels are clickable to toggle the switch
- Keyboard accessible (Space to toggle when focused)
- Screen readers announce the checked state
