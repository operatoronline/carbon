# Accordions

Accordions expand and collapse content sections, helping users focus on relevant information without overwhelming the page. Built on native `<details>` and `<summary>` elements for optimal accessibility.

---

## Installation

Copy the accordion CSS from `styles/docs.css` or include the Carbon stylesheet:

```html
<link rel="stylesheet" href="carbon.min.css">
```

Then use accordion classes in your HTML:

```html
<div class="Accordion">
    <details class="Accordion-item">
        <summary class="Accordion-header">Section Title</summary>
        <div class="Accordion-content">
            <p>Content goes here...</p>
        </div>
    </details>
</div>
```

---

## Usage

The base `.Accordion` class provides the container styling. Each panel uses native `<details>` and `<summary>` elements for built-in accessibility and keyboard support.

<Preview>
<div class="Accordion">
    <details class="Accordion-item">
        <summary class="Accordion-header">What is Carbon?</summary>
        <div class="Accordion-content">
            <p>Carbon is a framework-agnostic design system built with OKLCH colors and a 4px spacing scale.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">How do I install it?</summary>
        <div class="Accordion-content">
            <p>Simply include the CSS file in your project. No JavaScript framework required.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">Is it accessible?</summary>
        <div class="Accordion-content">
            <p>Yes! Native elements provide built-in keyboard navigation and screen reader support.</p>
        </div>
    </details>
</div>
</Preview>

---

## Examples

### With Icons

Add chevron indicators that rotate on expand using the `.Accordion--icons` modifier and `.Accordion-icon` class.

<Preview>
<div class="Accordion Accordion--icons">
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Account Settings</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Manage your account preferences, email notifications, and security settings.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Privacy & Security</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Control who can see your profile and manage two-factor authentication.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Billing Information</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Update your payment method, view invoices, and manage your subscription.</p>
        </div>
    </details>
</div>
</Preview>

### Bordered

Add visible borders between items with the `.Accordion--bordered` modifier.

<Preview>
<div class="Accordion Accordion--bordered">
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Getting Started</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Learn the basics of using Carbon in your projects.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Components</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Explore the full library of UI components.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Customization</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Learn how to customize tokens and extend the system.</p>
        </div>
    </details>
</div>
</Preview>

### Flush

No outer borders for seamless integration into cards or panels.

<Preview>
<div style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-2);">
    <div class="Accordion Accordion--flush">
        <details class="Accordion-item" open>
            <summary class="Accordion-header">
                <span>Order Summary</span>
                <i class="ph ph-caret-down Accordion-icon"></i>
            </summary>
            <div class="Accordion-content">
                <div class="Layout-split" style="margin-bottom: var(--space-2);">
                    <span>Subtotal</span>
                    <span>$99.00</span>
                </div>
                <div class="Layout-split" style="margin-bottom: var(--space-2);">
                    <span>Shipping</span>
                    <span>$5.00</span>
                </div>
                <div class="Layout-split" style="font-weight: 600;">
                    <span>Total</span>
                    <span>$104.00</span>
                </div>
            </div>
        </details>
        <details class="Accordion-item">
            <summary class="Accordion-header">
                <span>Shipping Address</span>
                <i class="ph ph-caret-down Accordion-icon"></i>
            </summary>
            <div class="Accordion-content">
                <p>123 Main Street<br>San Francisco, CA 94102</p>
            </div>
        </details>
    </div>
</div>
</Preview>

### Default Open

Use the `open` attribute to expand an item by default.

<Preview>
<div class="Accordion Accordion--bordered">
    <details class="Accordion-item" open>
        <summary class="Accordion-header">
            <span>This section is open by default</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Add the <code>open</code> attribute to the <code>&lt;details&gt;</code> element to have it expanded on page load.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>This section is closed</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Click to expand this content.</p>
        </div>
    </details>
</div>
</Preview>

### Single Expand (Exclusive)

Use JavaScript to ensure only one item is open at a time. Add `data-accordion="exclusive"` to enable this behavior.

<Preview>
<div class="Accordion Accordion--bordered" data-accordion="exclusive">
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Panel One</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>When this opens, other panels close automatically.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Panel Two</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>Only one panel can be open at a time.</p>
        </div>
    </details>
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Panel Three</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <p>This creates a traditional accordion behavior.</p>
        </div>
    </details>
</div>
</Preview>

```javascript
// Exclusive accordion behavior
document.querySelectorAll('[data-accordion="exclusive"]').forEach(accordion => {
  accordion.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        accordion.querySelectorAll('details').forEach(other => {
          if (other !== details) other.open = false;
        });
      }
    });
  });
});
```

### With Rich Content

Accordions can contain any content, including other components.

<Preview>
<div class="Accordion Accordion--bordered">
    <details class="Accordion-item" open>
        <summary class="Accordion-header">
            <span>Team Members</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">
            <div class="Layout-stack Layout-stack--tight">
                <div class="Layout-split">
                    <div style="display: flex; align-items: center; gap: var(--space-3);">
                        <div class="Avatar" style="background: var(--accent-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">A</div>
                        <div>
                            <div style="font-weight: 500;">Alice Johnson</div>
                            <div style="font-size: 0.85rem; color: var(--text-secondary);">Design Lead</div>
                        </div>
                    </div>
                    <span class="Badge Badge--success">Active</span>
                </div>
                <div class="Layout-split">
                    <div style="display: flex; align-items: center; gap: var(--space-3);">
                        <div class="Avatar" style="background: oklch(55% 0.15 150); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">B</div>
                        <div>
                            <div style="font-weight: 500;">Bob Smith</div>
                            <div style="font-size: 0.85rem; color: var(--text-secondary);">Developer</div>
                        </div>
                    </div>
                    <span class="Badge Badge--success">Active</span>
                </div>
            </div>
        </div>
    </details>
</div>
</Preview>

---

## Customization

Override accordion styles using CSS custom properties:

```css
/* Custom header styling */
.Accordion-header {
  --accordion-padding: var(--space-4);
  --accordion-bg-hover: var(--bg-tertiary);
  padding: var(--accordion-padding);
}

.Accordion-header:hover {
  background-color: var(--accordion-bg-hover);
}

/* Custom border color */
.Accordion--bordered {
  --accordion-border: var(--border-default);
  border-color: var(--accordion-border);
}

/* Custom icon animation */
.Accordion-icon {
  --accordion-icon-rotation: 180deg;
  transition: transform 0.3s ease;
}

details[open] .Accordion-icon {
  transform: rotate(var(--accordion-icon-rotation));
}

/* Compact accordion */
.Accordion--compact .Accordion-header {
  padding: var(--space-2) var(--space-3);
  font-size: 0.875rem;
}

.Accordion--compact .Accordion-content {
  padding: 0 var(--space-3) var(--space-3);
  font-size: 0.875rem;
}
```

---

## API Reference

### Container Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Accordion</code></td>
<td class="ApiTable-desc">Base accordion container (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion--icons</code></td>
<td class="ApiTable-desc">Enables icon rotation animation</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion--bordered</code></td>
<td class="ApiTable-desc">Adds borders around accordion and between items</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion--flush</code></td>
<td class="ApiTable-desc">Removes horizontal padding for card integration</td>
</tr>
</tbody>
</table>

### Item Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Accordion-item</code></td>
<td class="ApiTable-desc">Wrapper for each accordion panel (use on <code>&lt;details&gt;</code>)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion-header</code></td>
<td class="ApiTable-desc">Clickable header element (use on <code>&lt;summary&gt;</code>)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion-content</code></td>
<td class="ApiTable-desc">Collapsible content container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Accordion-icon</code></td>
<td class="ApiTable-desc">Chevron icon that rotates on expand</td>
</tr>
</tbody>
</table>

### Data Attributes

<table class="ApiTable">
<thead>
<tr>
<th>Attribute</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">data-accordion</code></td>
<td><code>"exclusive"</code></td>
<td class="ApiTable-desc">Only one panel can be open at a time (requires JS)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">open</code></td>
<td>boolean</td>
<td class="ApiTable-desc">Native attribute to expand panel by default</td>
</tr>
</tbody>
</table>

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter | Toggles the focused accordion panel |
| Space | Toggles the focused accordion panel |
| Tab | Moves focus to the next focusable element |
| Shift + Tab | Moves focus to the previous focusable element |

### Screen Readers

Native `<details>` and `<summary>` elements provide excellent accessibility:

```html
<!-- Native accordion — fully accessible out of the box -->
<details class="Accordion-item">
    <summary class="Accordion-header">Section Title</summary>
    <div class="Accordion-content">
        <p>Content is announced when expanded.</p>
    </div>
</details>

<!-- Default expanded state -->
<details class="Accordion-item" open>
    <summary class="Accordion-header">Open Section</summary>
    <div class="Accordion-content">
        <p>Screen readers announce "expanded" state.</p>
    </div>
</details>
```

### Custom Implementation

For non-native implementations, use proper ARIA attributes:

```html
<div class="Accordion">
    <div class="Accordion-item">
        <button id="accordion-header-1" 
                class="Accordion-header"
                aria-expanded="false" 
                aria-controls="accordion-panel-1">
            Section Title
        </button>
        <div id="accordion-panel-1" 
             class="Accordion-content"
             role="region" 
             aria-labelledby="accordion-header-1"
             hidden>
            <p>Content...</p>
        </div>
    </div>
</div>
```

---

## Best Practices

### Do

- ✓ **Use clear, descriptive headers** — Users decide to expand based on the title
- ✓ **Keep content focused** — Each section should cover one topic
- ✓ **Consider default states** — Open the most important section by default
- ✓ **Use native elements** — `<details>` and `<summary>` provide built-in accessibility
- ✓ **Use for optional content** — Hide supplementary info, not critical content

### Don't

- ✗ **Hide primary content** — Don't make users hunt for important information
- ✗ **Nest accordions deeply** — One level is usually enough
- ✗ **Use for very short content** — If it fits easily, just show it
- ✗ **Override keyboard behavior** — Let native elements handle interaction
- ✗ **Forget visual indicators** — Use icons to show expand/collapse state
