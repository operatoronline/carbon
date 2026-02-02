# Buttons

Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take and are typically placed throughout your UI.

---

## Primary Button

The primary button is for the main action on a page. Use sparingly — one primary action per section.

<Preview title="Primary Button">
    <button class="Button Button--primary">Get Started</button>
</Preview>

```html
<button class="Button Button--primary">Get Started</button>
```

---

## Secondary Button

Secondary buttons are for alternative actions. They pair well with primary buttons.

<Preview title="Secondary Button">
    <button class="Button Button--secondary">Learn More</button>
</Preview>

```html
<button class="Button Button--secondary">Learn More</button>
```

---

## Tertiary Button

Tertiary buttons are for less prominent actions. Use for actions like "Cancel" or "Back".

<Preview title="Tertiary Button">
    <button class="Button Button--tertiary">Cancel</button>
</Preview>

```html
<button class="Button Button--tertiary">Cancel</button>
```

---

## Ghost Button

Ghost buttons are minimal, blending into the background until hovered.

<Preview title="Ghost Button">
    <button class="Button Button--ghost">View All</button>
</Preview>

```html
<button class="Button Button--ghost">View All</button>
```

---

## Outline Button

Outline buttons have a border but no fill. Good for secondary actions with more visual weight than ghost.

<Preview title="Outline Button">
    <button class="Button Button--outline">Download</button>
</Preview>

```html
<button class="Button Button--outline">Download</button>
```

---

## Danger Button

Danger buttons indicate destructive actions like delete or remove.

<Preview title="Danger Button">
    <button class="Button Button--danger">Delete Account</button>
</Preview>

```html
<button class="Button Button--danger">Delete Account</button>
```

---

## Sizes

Buttons come in three sizes: small, medium (default), and large.

<Preview title="Button Sizes">
    <button class="Button Button--primary Button--small">Small</button>
    <button class="Button Button--primary">Medium</button>
    <button class="Button Button--primary Button--large">Large</button>
</Preview>

```html
<button class="Button Button--primary Button--small">Small</button>
<button class="Button Button--primary">Medium</button>
<button class="Button Button--primary Button--large">Large</button>
```

---

## With Icons

Buttons can include icons for visual reinforcement. Icons can be leading or trailing.

<Preview title="Button with Leading Icon">
    <button class="Button Button--primary">
        <i class="ph ph-plus Button-icon"></i>
        Add Item
    </button>
    <button class="Button Button--secondary">
        <i class="ph ph-download Button-icon"></i>
        Download
    </button>
</Preview>

```html
<button class="Button Button--primary">
    <i class="ph ph-plus Button-icon"></i>
    Add Item
</button>
```

<Preview title="Button with Trailing Icon">
    <button class="Button Button--primary">
        Continue
        <i class="ph ph-arrow-right Button-icon Button-icon--trailing"></i>
    </button>
    <button class="Button Button--secondary">
        Open Link
        <i class="ph ph-arrow-square-out Button-icon Button-icon--trailing"></i>
    </button>
</Preview>

```html
<button class="Button Button--primary">
    Continue
    <i class="ph ph-arrow-right Button-icon Button-icon--trailing"></i>
</button>
```

---

## Icon-Only Buttons

For actions where the icon is self-explanatory. Always include an `aria-label`.

<Preview title="Icon-Only Buttons">
    <button class="Button Button--icon" aria-label="Search">
        <i class="ph ph-magnifying-glass"></i>
    </button>
    <button class="Button Button--icon" aria-label="Settings">
        <i class="ph ph-gear"></i>
    </button>
    <button class="Button Button--icon" aria-label="Close">
        <i class="ph ph-x"></i>
    </button>
    <button class="Button Button--icon Button--primary" aria-label="Add">
        <i class="ph ph-plus"></i>
    </button>
</Preview>

```html
<button class="Button Button--icon" aria-label="Search">
    <i class="ph ph-magnifying-glass"></i>
</button>
```

---

## Loading State

Show a loading state when an action is in progress. Disable interaction during loading.

<Preview title="Loading Buttons">
    <button class="Button Button--primary Button--loading" disabled>
        <span class="Button-spinner"></span>
        Loading...
    </button>
    <button class="Button Button--secondary Button--loading" disabled>
        <span class="Button-spinner"></span>
        Saving...
    </button>
</Preview>

```html
<button class="Button Button--primary Button--loading" disabled>
    <span class="Button-spinner"></span>
    Loading...
</button>
```

---

## Disabled State

Disabled buttons indicate an action is unavailable.

<Preview title="Disabled Buttons">
    <button class="Button Button--primary" disabled>Primary</button>
    <button class="Button Button--secondary" disabled>Secondary</button>
    <button class="Button Button--outline" disabled>Outline</button>
    <button class="Button Button--danger" disabled>Danger</button>
</Preview>

```html
<button class="Button Button--primary" disabled>Primary</button>
```

---

## Button Groups

Group related buttons together.

<Preview title="Button Group">
    <div class="ButtonGroup">
        <button class="Button Button--secondary">Day</button>
        <button class="Button Button--secondary ButtonGroup-item--active">Week</button>
        <button class="Button Button--secondary">Month</button>
    </div>
</Preview>

```html
<div class="ButtonGroup">
    <button class="Button Button--secondary">Day</button>
    <button class="Button Button--secondary ButtonGroup-item--active">Week</button>
    <button class="Button Button--secondary">Month</button>
</div>
```

<Preview title="Icon Button Group">
    <div class="ButtonGroup">
        <button class="Button Button--icon Button--secondary" aria-label="List view">
            <i class="ph ph-list"></i>
        </button>
        <button class="Button Button--icon Button--secondary ButtonGroup-item--active" aria-label="Grid view">
            <i class="ph ph-squares-four"></i>
        </button>
        <button class="Button Button--icon Button--secondary" aria-label="Column view">
            <i class="ph ph-columns"></i>
        </button>
    </div>
</Preview>

```html
<div class="ButtonGroup">
    <button class="Button Button--icon Button--secondary" aria-label="List view">
        <i class="ph ph-list"></i>
    </button>
    ...
</div>
```

---

## Full Width

Buttons can expand to fill their container.

<Preview title="Full Width Button">
    <div style="max-width: 320px; width: 100%;">
        <button class="Button Button--primary Button--block">Create Account</button>
    </div>
</Preview>

```html
<button class="Button Button--primary Button--block">Create Account</button>
```

---

## Button Pairs

Common button pairing patterns.

<Preview title="Modal Actions">
    <div style="display: flex; gap: var(--space-3); justify-content: flex-end;">
        <button class="Button Button--tertiary">Cancel</button>
        <button class="Button Button--primary">Save Changes</button>
    </div>
</Preview>

<Preview title="Destructive Confirmation">
    <div style="display: flex; gap: var(--space-3); justify-content: flex-end;">
        <button class="Button Button--secondary">Keep</button>
        <button class="Button Button--danger">Delete</button>
    </div>
</Preview>

---

## Real-World Examples

### Form Submit

<Preview title="Form with Submit Button">
    <div style="max-width: 320px; width: 100%;">
        <div style="margin-bottom: var(--space-4);">
            <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: var(--space-2);">Email</label>
            <input type="email" class="Input" placeholder="you@example.com">
        </div>
        <button class="Button Button--primary Button--block">Subscribe</button>
    </div>
</Preview>

### Card Actions

<Preview title="Card with Actions">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <h4 style="margin-bottom: var(--space-2); font-weight: 600;">Project Update</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Review the latest changes to the design system documentation.</p>
        </div>
        <div style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--border-subtle); display: flex; gap: var(--space-2); justify-content: flex-end;">
            <button class="Button Button--ghost Button--small">Dismiss</button>
            <button class="Button Button--primary Button--small">View Changes</button>
        </div>
    </div>
</Preview>

### Toolbar

<Preview title="Toolbar with Buttons">
    <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--bg-secondary); border-radius: var(--space-2);">
        <button class="Button Button--primary Button--small">
            <i class="ph ph-plus Button-icon"></i>
            New
        </button>
        <div class="ButtonGroup">
            <button class="Button Button--icon Button--secondary Button--small" aria-label="Undo">
                <i class="ph ph-arrow-counter-clockwise"></i>
            </button>
            <button class="Button Button--icon Button--secondary Button--small" aria-label="Redo">
                <i class="ph ph-arrow-clockwise"></i>
            </button>
        </div>
        <div style="flex: 1;"></div>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="More options">
            <i class="ph ph-dots-three"></i>
        </button>
    </div>
</Preview>

---

## Accessibility

Buttons have strong native accessibility. Enhance with these patterns:

### Keyboard Support
- **Enter/Space** — Activates the button
- **Tab** — Moves focus to/from button
- Focus indicators are visible by default

### Screen Readers
```html
<!-- Standard button — text is read automatically -->
<button class="Button Button--primary">Submit Form</button>

<!-- Icon-only — requires aria-label -->
<button class="Button Button--icon" aria-label="Close dialog">
    <i class="ph ph-x"></i>
</button>

<!-- Loading state — announce status -->
<button class="Button Button--primary" aria-busy="true" disabled>
    <span class="Button-spinner"></span>
    Saving...
</button>

<!-- Toggle button -->
<button class="Button Button--secondary" aria-pressed="true">
    <i class="ph ph-star-fill"></i>
    Starred
</button>
```

### Disabled vs aria-disabled
```html
<!-- Native disabled — removes from tab order -->
<button class="Button Button--primary" disabled>Cannot Click</button>

<!-- aria-disabled — keeps in tab order (for tooltips) -->
<button class="Button Button--primary" aria-disabled="true">
    Upgrade Required
</button>
```

---

## CSS Reference

```css
/* Base Button */
.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--space-1);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  text-decoration: none;
}

/* Primary */
.Button--primary {
  background-color: var(--accent-primary);
  color: white;
}
.Button--primary:hover {
  background-color: oklch(55% 0.15 250);
}
.Button--primary:active {
  background-color: oklch(50% 0.15 250);
}

/* Secondary */
.Button--secondary {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border-color: var(--border-subtle);
}
.Button--secondary:hover {
  background-color: var(--border-subtle);
  border-color: var(--border-strong);
}

/* Tertiary */
.Button--tertiary {
  background-color: transparent;
  color: var(--text-secondary);
}
.Button--tertiary:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

/* Ghost */
.Button--ghost {
  background-color: transparent;
  color: var(--text-primary);
}
.Button--ghost:hover {
  background-color: var(--bg-secondary);
}

/* Outline */
.Button--outline {
  background-color: transparent;
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}
.Button--outline:hover {
  background-color: var(--accent-primary);
  color: white;
}

/* Danger */
.Button--danger {
  background-color: oklch(55% 0.2 25);
  color: white;
}
.Button--danger:hover {
  background-color: oklch(50% 0.2 25);
}

/* Sizes */
.Button--small {
  padding: var(--space-1) var(--space-3);
  font-size: 0.8rem;
}
.Button--large {
  padding: var(--space-3) var(--space-6);
  font-size: 1rem;
}

/* Icon-only */
.Button--icon {
  padding: var(--space-2);
  aspect-ratio: 1;
}
.Button--icon.Button--small { padding: var(--space-1); }
.Button--icon.Button--large { padding: var(--space-3); }

/* Full width */
.Button--block {
  width: 100%;
}

/* Icon within button */
.Button-icon {
  font-size: 1.1em;
}
.Button-icon--trailing {
  order: 1;
}

/* Loading */
.Button--loading {
  position: relative;
  color: transparent;
}
.Button-spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Disabled */
.Button:disabled,
.Button[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Focus */
.Button:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Button Group */
.ButtonGroup {
  display: inline-flex;
}
.ButtonGroup .Button {
  border-radius: 0;
}
.ButtonGroup .Button:first-child {
  border-radius: var(--space-1) 0 0 var(--space-1);
}
.ButtonGroup .Button:last-child {
  border-radius: 0 var(--space-1) var(--space-1) 0;
}
.ButtonGroup .Button + .Button {
  margin-left: -1px;
}
.ButtonGroup .Button:hover {
  z-index: 1;
}
.ButtonGroup-item--active {
  background-color: var(--accent-primary) !important;
  color: white !important;
  border-color: var(--accent-primary) !important;
}
```

---

## Best Practices

### Do

- ✓ **Use clear, action-oriented labels** — "Save Changes" not "Submit"
- ✓ **Lead with a verb** — "Create Project", "Delete File"
- ✓ **Limit primary buttons** — One per section/view
- ✓ **Show loading states** — Feedback during async actions
- ✓ **Size touch targets** — Minimum 44px for mobile

### Don't

- ✗ **Use vague labels** — "Click Here", "OK", "Yes"
- ✗ **Disable without explanation** — Provide tooltip or helper text
- ✗ **Use too many styles** — Stick to 2-3 variants per view
- ✗ **Hide important actions** — Primary actions should be visible
- ✗ **Forget hover/focus states** — Essential for accessibility
