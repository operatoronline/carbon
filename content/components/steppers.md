# Steppers

Steppers display progress through a sequence of steps, commonly used in multi-step forms, wizards, and onboarding flows.

## Basic Stepper

A horizontal stepper showing numbered steps.

<Preview title="Basic Stepper">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Account</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">2</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Profile</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Preferences</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Account</span>
        </div>
    </div>
    <div class="Stepper-connector Stepper-connector--completed"></div>
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator">2</div>
        <div class="Stepper-content">
            <span class="Stepper-title">Profile</span>
        </div>
    </div>
    ...
</div>
```

## Stepper with Descriptions

Add descriptions for additional context on each step.

<Preview title="Stepper with Descriptions">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Cart</span>
                <span class="Stepper-description">Review your items</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">2</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Shipping</span>
                <span class="Stepper-description">Enter delivery address</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
                <span class="Stepper-description">Add payment method</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Review</span>
                <span class="Stepper-description">Confirm your order</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Cart</span>
            <span class="Stepper-description">Review your items</span>
        </div>
    </div>
    ...
</div>
```

## Vertical Stepper

A vertical layout for longer flows or mobile views.

<Preview title="Vertical Stepper">
    <div class="Stepper Stepper--vertical" style="max-width: 320px;">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Create account</span>
                <span class="Stepper-description">Sign up with email or social login</span>
            </div>
        </div>
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Verify email</span>
                <span class="Stepper-description">Check your inbox for verification</span>
            </div>
        </div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Complete profile</span>
                <span class="Stepper-description">Add your personal information</span>
            </div>
        </div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Set preferences</span>
                <span class="Stepper-description">Customize your experience</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--vertical">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Create account</span>
            <span class="Stepper-description">Sign up with email...</span>
        </div>
    </div>
    ...
</div>
```

## Icon Stepper

Use icons instead of numbers for visual clarity.

<Preview title="Icon Stepper">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Upload</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-sliders"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Edit</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-eye"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Preview</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-share"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Publish</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator Stepper-indicator--icon">
            <i class="ph ph-sliders"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Edit</span>
        </div>
    </div>
    ...
</div>
```

## Compact Stepper

A minimal stepper for space-constrained layouts.

<Preview title="Compact Stepper">
    <div class="Stepper Stepper--compact">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">5</div>
        </div>
    </div>
    <p style="text-align: center; margin-top: var(--space-4); color: var(--fg-3); font-size: 0.9rem;">Step 3 of 5: Payment Details</p>
</Preview>

```html
<div class="Stepper Stepper--compact">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
    </div>
    <div class="Stepper-connector Stepper-connector--completed"></div>
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator">3</div>
    </div>
    ...
</div>
```

## Clickable Stepper

Allow users to navigate between completed steps.

<Preview title="Clickable Stepper">
    <div class="Stepper Stepper--clickable">
        <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Details</span>
            </div>
        </button>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Address</span>
            </div>
        </button>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <button class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
            </div>
        </button>
        <div class="Stepper-connector"></div>
        <button class="Stepper-step" disabled>
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </button>
    </div>
</Preview>

```html
<div class="Stepper Stepper--clickable">
    <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Details</span>
        </div>
    </button>
    ...
</div>
```

## Error State

Show when a step has validation errors.

<Preview title="Stepper with Error">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Account</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--error">
            <div class="Stepper-indicator">
                <i class="ph ph-warning"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
                <span class="Stepper-description Stepper-description--error">Card declined</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--error">
        <div class="Stepper-indicator">
            <i class="ph ph-warning"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Payment</span>
            <span class="Stepper-description Stepper-description--error">Card declined</span>
        </div>
    </div>
    ...
</div>
```

## Progress Stepper

Combine with a progress indicator for completion status.

<Preview title="Progress Stepper">
    <div style="max-width: 400px;">
        <div class="Stepper Stepper--compact" style="margin-bottom: var(--space-3);">
            <div class="Stepper-step Stepper-step--completed">
                <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
            </div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--completed">
                <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
            </div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--active">
                <div class="Stepper-indicator">3</div>
            </div>
            <div class="Stepper-connector"></div>
            <div class="Stepper-step">
                <div class="Stepper-indicator">4</div>
            </div>
        </div>
        <div class="Progress" style="height: 4px;">
            <div class="Progress-bar" style="width: 66%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: var(--space-2); font-size: 0.85rem; color: var(--fg-3);">
            <span>Step 3 of 4</span>
            <span>66% complete</span>
        </div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--compact">
    ...
</div>
<div class="Progress" style="height: 4px;">
    <div class="Progress-bar" style="width: 66%;"></div>
</div>
```

## Dot Stepper

A minimal dot-based progress indicator.

<Preview title="Dot Stepper">
    <div class="Stepper Stepper--dots">
        <div class="Stepper-dot Stepper-dot--completed"></div>
        <div class="Stepper-dot Stepper-dot--completed"></div>
        <div class="Stepper-dot Stepper-dot--active"></div>
        <div class="Stepper-dot"></div>
        <div class="Stepper-dot"></div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--dots">
    <div class="Stepper-dot Stepper-dot--completed"></div>
    <div class="Stepper-dot Stepper-dot--completed"></div>
    <div class="Stepper-dot Stepper-dot--active"></div>
    <div class="Stepper-dot"></div>
    <div class="Stepper-dot"></div>
</div>
```

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Stepper` | Base stepper container |
| `.Stepper--vertical` | Vertical layout variant |
| `.Stepper--compact` | Minimal variant (indicators only) |
| `.Stepper--clickable` | Enables navigation to completed steps |
| `.Stepper--dots` | Dot-based progress indicator |
| `.Stepper-step` | Individual step container |
| `.Stepper-step--completed` | Completed step state |
| `.Stepper-step--active` | Current active step |
| `.Stepper-step--error` | Error state for a step |
| `.Stepper-step--clickable` | Clickable step (for navigation) |
| `.Stepper-indicator` | Step number or icon container |
| `.Stepper-indicator--icon` | Icon-only indicator variant |
| `.Stepper-content` | Step title and description container |
| `.Stepper-title` | Step title text |
| `.Stepper-description` | Step description text |
| `.Stepper-description--error` | Error description styling |
| `.Stepper-connector` | Line connecting steps |
| `.Stepper-connector--completed` | Completed connector (filled) |
| `.Stepper-dot` | Dot indicator (for dot variant) |
| `.Stepper-dot--completed` | Completed dot |
| `.Stepper-dot--active` | Active dot |

</div>

## Accessibility

- Use `aria-current="step"` on the active step
- Include `aria-label` on clickable steps
- Use `role="list"` and `role="listitem"` for step sequences
- Ensure sufficient color contrast for all states
- Announce step changes to screen readers with `aria-live`
- Use `aria-disabled="true"` for non-clickable future steps
- Provide descriptive labels that indicate step position (e.g., "Step 2 of 4")
- For error states, use `aria-invalid="true"` and describe the error
