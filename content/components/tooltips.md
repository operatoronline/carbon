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

## Accessibility

- Tooltips appear on `:hover` and `:focus`
- Use `aria-describedby` for screen readers when tooltip contains essential info
- Don't put interactive elements inside tooltips
