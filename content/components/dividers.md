# Dividers

Dividers separate content into distinct sections. They can be horizontal or vertical, with optional labels.

---

## Horizontal Divider

A simple horizontal line to separate content blocks.

<Preview title="Horizontal Divider">
    <div class="Layout-stack">
        <p>Content above the divider. This could be any block of text or components.</p>
        <hr class="Divider">
        <p>Content below the divider. Notice the clean visual separation.</p>
    </div>
</Preview>

```html
<hr class="Divider">
```

---

## With Label

Add a centered label to provide context.

<Preview title="Labeled Divider">
    <div class="Layout-stack">
        <p>First section content goes here.</p>
        <div class="Divider Divider--label">
            <span>Or continue with</span>
        </div>
        <p>Second section content goes here.</p>
    </div>
</Preview>

```html
<div class="Divider Divider--label">
    <span>Or continue with</span>
</div>
```

### Label Positions

<Preview title="Label Positions">
    <div class="Layout-stack Layout-stack--loose">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Left</small>
            <div class="Divider Divider--label Divider--label-left">
                <span>Section</span>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Center (default)</small>
            <div class="Divider Divider--label">
                <span>Section</span>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Right</small>
            <div class="Divider Divider--label Divider--label-right">
                <span>Section</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Divider Divider--label Divider--label-left">...</div>
<div class="Divider Divider--label">...</div>
<div class="Divider Divider--label Divider--label-right">...</div>
```

---

## Vertical Divider

Separate inline or flex items horizontally.

<Preview title="Vertical Divider">
    <div style="display: flex; align-items: center; gap: var(--space-4);">
        <span>Home</span>
        <span class="Divider Divider--vertical"></span>
        <span>Products</span>
        <span class="Divider Divider--vertical"></span>
        <span>About</span>
        <span class="Divider Divider--vertical"></span>
        <span>Contact</span>
    </div>
</Preview>

```html
<div style="display: flex; align-items: center; gap: var(--space-4);">
    <span>Home</span>
    <span class="Divider Divider--vertical"></span>
    <span>Products</span>
</div>
```

---

## Spacing Variants

Control the margin around dividers.

<Preview title="Spacing Variants">
    <div style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-2);">
        <p>Tight spacing below:</p>
        <hr class="Divider Divider--tight">
        <p>Default spacing below:</p>
        <hr class="Divider">
        <p>Loose spacing below:</p>
        <hr class="Divider Divider--loose">
        <p>End of content.</p>
    </div>
</Preview>

```html
<hr class="Divider Divider--tight">  <!-- 8px margin -->
<hr class="Divider">                  <!-- 16px margin -->
<hr class="Divider Divider--loose">  <!-- 32px margin -->
```

---

## Style Variants

<Preview title="Divider Styles">
    <div class="Layout-stack Layout-stack--loose">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Solid (default)</small>
            <hr class="Divider">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Dashed</small>
            <hr class="Divider Divider--dashed">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Dotted</small>
            <hr class="Divider Divider--dotted">
        </div>
    </div>
</Preview>

```html
<hr class="Divider">              <!-- Solid -->
<hr class="Divider Divider--dashed">
<hr class="Divider Divider--dotted">
```

---

## In Context

### Card Sections

<Preview title="Card with Dividers">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <div class="Card-title">Order Summary</div>
            <div class="Card-description">Review your items</div>
        </div>
        <hr class="Divider" style="margin: 0;">
        <div style="padding: var(--space-4);">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <span>Subtotal</span>
                <span>$99.00</span>
            </div>
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <span>Shipping</span>
                <span>$5.00</span>
            </div>
            <div class="Layout-split" style="color: var(--text-secondary);">
                <span>Tax</span>
                <span>$8.32</span>
            </div>
        </div>
        <hr class="Divider" style="margin: 0;">
        <div style="padding: var(--space-4);">
            <div class="Layout-split" style="font-weight: 600;">
                <span>Total</span>
                <span>$112.32</span>
            </div>
        </div>
    </div>
</Preview>

### Menu Sections

<Preview title="Menu with Dividers">
    <div style="width: 200px; background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--space-2); padding: var(--space-1) 0;">
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--text-primary);">Profile</a>
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--text-primary);">Settings</a>
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--text-primary);">Billing</a>
        <hr class="Divider Divider--tight" style="margin-left: var(--space-3); margin-right: var(--space-3);">
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: oklch(55% 0.2 25);">Sign Out</a>
    </div>
</Preview>

### Login Form

<Preview title="Social Login Divider">
    <div style="max-width: 320px;">
        <div class="Layout-stack Layout-stack--tight" style="margin-bottom: var(--space-4);">
            <button class="Button" style="width: 100%;">
                <i class="ph ph-google-logo"></i>
                Continue with Google
            </button>
            <button class="Button" style="width: 100%;">
                <i class="ph ph-apple-logo"></i>
                Continue with Apple
            </button>
        </div>
        <div class="Divider Divider--label">
            <span>or</span>
        </div>
        <div class="Layout-stack Layout-stack--tight" style="margin-top: var(--space-4);">
            <input type="email" class="Input" placeholder="Email">
            <input type="password" class="Input" placeholder="Password">
            <button class="Button Button--primary" style="width: 100%;">Sign In</button>
        </div>
    </div>
</Preview>

---

## Accessibility

- Use `<hr>` for semantic dividers — screen readers announce it as a separator
- Decorative dividers should use `role="presentation"` or `aria-hidden="true"`
- Labeled dividers provide additional context for all users

```html
<!-- Semantic divider -->
<hr class="Divider">

<!-- Decorative divider -->
<hr class="Divider" role="presentation">

<!-- Labeled divider (semantic) -->
<div class="Divider Divider--label" role="separator">
    <span>Section</span>
</div>
```

---

## CSS Reference

```css
/* Base horizontal divider */
.Divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: var(--space-4) 0;
}

/* Spacing variants */
.Divider--tight { margin: var(--space-2) 0; }
.Divider--loose { margin: var(--space-8) 0; }

/* Style variants */
.Divider--dashed { border-top-style: dashed; }
.Divider--dotted { border-top-style: dotted; }

/* Vertical divider */
.Divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  background-color: var(--border-subtle);
  vertical-align: middle;
}

/* Labeled divider */
.Divider--label {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: var(--space-4) 0;
  border: none;
}

.Divider--label::before,
.Divider--label::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: var(--border-subtle);
}

.Divider--label span {
  font-size: 0.85rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

/* Label positions */
.Divider--label-left::before { flex: 0 0 24px; }
.Divider--label-right::after { flex: 0 0 24px; }
```
