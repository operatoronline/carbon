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
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Left</small>
            <div class="Divider Divider--label Divider--label-left">
                <span>Section</span>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Center (default)</small>
            <div class="Divider Divider--label">
                <span>Section</span>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Right</small>
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
    <div style="background: var(--bg-s); padding: var(--space-4); border-radius: var(--r-m);">
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
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Solid (default)</small>
            <hr class="Divider">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Dashed</small>
            <hr class="Divider Divider--dashed">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Dotted</small>
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
            <div class="Layout-split" style="color: var(--fg-3);">
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
    <div style="width: 200px; background: var(--bg); border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-1) 0;">
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--fg);">Profile</a>
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--fg);">Settings</a>
        <a href="#" style="display: block; padding: var(--space-2) var(--space-3); text-decoration: none; color: var(--fg);">Billing</a>
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

## Common Patterns

### Section Divider in a Settings Page

<Preview title="Settings Sections">
<div style="max-width: 400px;">
    <div style="padding: var(--space-3) 0;">
        <h4 style="margin: 0;">Account</h4>
        <p style="color: var(--fg-3); font-size: 0.85rem;">Manage your account settings</p>
    </div>
    <hr class="Divider">
    <div style="padding: var(--space-3) 0;">
        <h4 style="margin: 0;">Notifications</h4>
        <p style="color: var(--fg-3); font-size: 0.85rem;">Configure alert preferences</p>
    </div>
    <hr class="Divider">
    <div style="padding: var(--space-3) 0;">
        <h4 style="margin: 0;">Privacy</h4>
        <p style="color: var(--fg-3); font-size: 0.85rem;">Control data sharing</p>
    </div>
</div>
</Preview>

### Toolbar Separator

<Preview title="Toolbar with Vertical Dividers">
<div style="display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2); border: 1px solid var(--bd); border-radius: var(--r-s); width: fit-content;">
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-text-b"></i></button>
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-text-italic"></i></button>
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-text-underline"></i></button>
    <span class="Divider Divider--vertical"></span>
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-list-bullets"></i></button>
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-list-numbers"></i></button>
    <span class="Divider Divider--vertical"></span>
    <button class="Button Button--ghost Button--icon Button--small"><i class="ph ph-link"></i></button>
</div>
</Preview>

### Footer with Divider

<Preview title="Page Footer">
<div style="max-width: 500px;">
    <hr class="Divider Divider--loose">
    <div style="display: flex; justify-content: space-between; color: var(--fg-3); font-size: 0.85rem;">
        <span>© 2026 Acme Corp</span>
        <div style="display: flex; gap: var(--space-3);">
            <a href="#" style="color: var(--fg-3);">Privacy</a>
            <span class="Divider Divider--vertical"></span>
            <a href="#" style="color: var(--fg-3);">Terms</a>
            <span class="Divider Divider--vertical"></span>
            <a href="#" style="color: var(--fg-3);">Contact</a>
        </div>
    </div>
</div>
</Preview>

---

## Customization

Override divider styles using CSS custom properties:

```css
/* Custom divider color */
.Divider--accent {
  border-top-color: var(--accent);
}

/* Thicker divider */
.Divider--thick {
  border-top-width: 3px;
}

/* Gradient divider */
.Divider--gradient {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--bd), transparent);
}

/* Custom label styling */
.Divider--label-fancy span {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  color: var(--accent);
}
```

### Spacing Overrides

```css
/* Custom vertical divider height */
.Divider--vertical-tall {
  height: 2em;
}

/* Inset divider (indented) */
.Divider--inset {
  margin-left: var(--space-8);
}
```

---

## API Reference

### Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Divider</code></td><td class="ApiTable-desc">Base horizontal divider</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--tight</code></td><td class="ApiTable-desc">Reduced margin (8px)</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--loose</code></td><td class="ApiTable-desc">Increased margin (32px)</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--dashed</code></td><td class="ApiTable-desc">Dashed line style</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--dotted</code></td><td class="ApiTable-desc">Dotted line style</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--vertical</code></td><td class="ApiTable-desc">Vertical separator (inline)</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--label</code></td><td class="ApiTable-desc">Divider with centered text</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--label-left</code></td><td class="ApiTable-desc">Label aligned left</td></tr>
<tr><td><code class="ApiTable-prop">.Divider--label-right</code></td><td class="ApiTable-desc">Label aligned right</td></tr>
</tbody>
</table>

### Elements

<table class="ApiTable">
<thead>
<tr><th>Element</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">&lt;hr&gt;</code></td><td class="ApiTable-desc">Semantic horizontal divider</td></tr>
<tr><td><code class="ApiTable-prop">&lt;div&gt;</code></td><td class="ApiTable-desc">Use for labeled dividers (contains <code>&lt;span&gt;</code>)</td></tr>
<tr><td><code class="ApiTable-prop">&lt;span&gt;</code></td><td class="ApiTable-desc">Vertical dividers and label text</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">role="presentation"</code></td><td class="ApiTable-desc">For decorative dividers</td></tr>
<tr><td><code class="ApiTable-prop">role="separator"</code></td><td class="ApiTable-desc">For semantic labeled dividers</td></tr>
<tr><td><code class="ApiTable-prop">aria-hidden="true"</code></td><td class="ApiTable-desc">Alternative for decorative dividers</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base horizontal divider */
.Divider {
  border: none;
  border-top: 1px solid var(--bd);
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
  background-color: var(--bd);
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
  background-color: var(--bd);
}

.Divider--label span {
  font-size: 0.85rem;
  color: var(--fg-3);
  white-space: nowrap;
}

/* Label positions */
.Divider--label-left::before { flex: 0 0 24px; }
.Divider--label-right::after { flex: 0 0 24px; }
```

---

## Accessibility

- Use `<hr>` for semantic dividers — screen readers announce it as a separator
- Decorative dividers should use `role="presentation"` or `aria-hidden="true"`
- Labeled dividers provide additional context for all users

### Keyboard Support

| Key | Action |
|-----|--------|
| N/A | Dividers are not interactive and receive no keyboard focus |

### Screen Reader Guidance

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

## Best Practices

### Do

- ✓ **Use sparingly** — Dividers add visual weight; whitespace often suffices
- ✓ **Group related content** — Dividers separate distinct sections, not every element
- ✓ **Match spacing to hierarchy** — Use `--loose` for major sections, `--tight` for minor
- ✓ **Use labels for clarity** — "Or" in login forms, section names in settings
- ✓ **Use semantic `<hr>`** — Provides meaning for screen readers
- ✓ **Be consistent** — Pick one style (solid/dashed/dotted) and stick with it

### Don't

- ✗ **Overuse dividers** — More than 3-4 visible dividers crowds the interface
- ✗ **Use between every element** — Creates visual noise and defeats the purpose
- ✗ **Mix styles randomly** — Inconsistent dashed/dotted/solid looks messy
- ✗ **Use dividers instead of spacing** — Margins and padding are lighter alternatives
- ✗ **Forget vertical dividers in flex layouts** — They need explicit height to render
- ✗ **Add dividers inside tight components** — Cards and chips don't need extra lines
