# Tooltips

Tooltips display informative text when users hover over or focus on an element.

## Basic Tooltip

Tooltips use the `data-tooltip` attribute for content.

<Preview title="Basic Tooltip">
    <div style="padding: var(--space-8);">
        <button class="Button Button--primary Tooltip" data-tooltip="This is a tooltip">Hover me</button>
    </div>
</Preview>

```html
<button class="Tooltip" data-tooltip="This is a tooltip">
    Hover me
</button>
```

## Positions

Control tooltip placement with position modifiers.

<Preview title="Tooltip Positions">
    <div style="display: flex; gap: var(--space-4); flex-wrap: wrap; padding: var(--space-8);">
        <button class="Button Tooltip Tooltip--top" data-tooltip="Top tooltip">Top</button>
        <button class="Button Tooltip Tooltip--bottom" data-tooltip="Bottom tooltip">Bottom</button>
        <button class="Button Tooltip Tooltip--left" data-tooltip="Left tooltip">Left</button>
        <button class="Button Tooltip Tooltip--right" data-tooltip="Right tooltip">Right</button>
    </div>
</Preview>

```html
<button class="Tooltip Tooltip--top" data-tooltip="...">Top</button>
<button class="Tooltip Tooltip--bottom" data-tooltip="...">Bottom</button>
<button class="Tooltip Tooltip--left" data-tooltip="...">Left</button>
<button class="Tooltip Tooltip--right" data-tooltip="...">Right</button>
```

## On Icons

Common use case: adding context to icon buttons.

<Preview title="Icon Tooltips">
    <div style="display: flex; gap: var(--space-2); padding: var(--space-6);">
        <button class="icon-btn Tooltip" data-tooltip="Settings">
            <i class="ph ph-gear"></i>
        </button>
        <button class="icon-btn Tooltip" data-tooltip="Notifications">
            <i class="ph ph-bell"></i>
        </button>
        <button class="icon-btn Tooltip" data-tooltip="Profile">
            <i class="ph ph-user"></i>
        </button>
    </div>
</Preview>

```html
<button class="icon-btn Tooltip" data-tooltip="Settings">
    <i class="ph ph-gear"></i>
</button>
```

## Multiline

For longer content, the tooltip expands to accommodate text.

<Preview title="Multiline Tooltip">
    <div style="padding: var(--space-8);">
        <span class="Tooltip Tooltip--wide" data-tooltip="This is a longer tooltip that wraps to multiple lines when the content exceeds the default width.">
            <span class="Link">Hover for details</span>
        </span>
    </div>
</Preview>

```html
<span class="Tooltip Tooltip--wide" data-tooltip="Longer content...">
    Hover for details
</span>
```

---

## API Reference

### Classes

| Class | Description |
|-------|-------------|
| `.Tooltip` | Base tooltip trigger (add to any element) |
| `.Tooltip--top` | Position tooltip above element (default) |
| `.Tooltip--bottom` | Position tooltip below element |
| `.Tooltip--left` | Position tooltip to the left |
| `.Tooltip--right` | Position tooltip to the right |
| `.Tooltip--wide` | Allow wider tooltip for longer content |

### Attributes

| Attribute | Description |
|-----------|-------------|
| `data-tooltip` | **Required.** The tooltip text content |
| `aria-describedby` | Link to tooltip ID for screen readers (when essential) |
| `tabindex="0"` | Add to non-focusable elements that need tooltips |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--bg-primary` | — | Tooltip background (inverted) |
| `--text-primary` | — | Tooltip text color (inverted) |
| `--space-1` | `0.25rem` | Vertical padding |
| `--space-2` | `0.5rem` | Horizontal padding |

---

## Accessibility

- Tooltips appear on `:hover` and `:focus`
- Use `aria-describedby` for screen readers when tooltip contains essential info
- Don't put interactive elements inside tooltips
- Add `tabindex="0"` to non-focusable trigger elements
- Keep tooltip text concise — use a modal or popover for complex content

---

## Best Practices

### Do

- ✓ **Keep text short** — One sentence max, ideally under 80 characters
- ✓ **Use for supplementary info** — Labels, hints, keyboard shortcuts
- ✓ **Ensure trigger is focusable** — Buttons, links, or add `tabindex`
- ✓ **Position to avoid clipping** — Use appropriate direction modifier

### Don't

- ✗ **Hide essential info** — If users *need* it, don't put it in a tooltip
- ✗ **Use on touch devices** — Hover doesn't work; use alternative patterns
- ✗ **Include interactive content** — Links, buttons belong in popovers
- ✗ **Overuse tooltips** — If everything has a tooltip, nothing stands out
