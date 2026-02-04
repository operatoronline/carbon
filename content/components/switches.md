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

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.Switch` | Base switch wrapper (label element) |
| `.Switch--small` | Smaller switch size |
| `.Switch--large` | Larger switch size |
| `.Switch-slider` | Visual slider/track element |
| `.Switch-label` | Container for switch with text label |
| `.Switch-label-text` | Text wrapper (supports title + description) |

### Structure

```html
<label class="Switch">
    <input type="checkbox">
    <span class="Switch-slider"></span>
</label>
```

### States

| State | Attribute | Description |
|-------|-----------|-------------|
| Off | (default) | Unchecked state |
| On | `checked` | Checked/active state |
| Disabled | `disabled` | Non-interactive state |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bg-secondary` | — | Track background (off) |
| `--accent-primary` | — | Track background (on) |
| `--bg-primary` | — | Thumb color |
| `--border-subtle` | — | Track border |

---

## Accessibility

- Switches use native `<input type="checkbox">` for full accessibility
- Labels are clickable to toggle the switch
- Keyboard accessible (Space to toggle when focused)
- Screen readers announce the checked state
- Use `aria-describedby` to associate helper text with the switch

---

## Best Practices

### Do

- ✓ **Use for binary settings** — On/off, enabled/disabled
- ✓ **Show immediate effect** — Changes apply instantly, no submit button
- ✓ **Provide clear labels** — Describe what the switch controls
- ✓ **Keep labels positive** — "Enable notifications" not "Disable notifications"

### Don't

- ✗ **Use for forms requiring submission** — Use checkboxes instead
- ✗ **Hide the current state** — Always make it clear what on/off means
- ✗ **Use for multiple selections** — Switches are single binary choices
