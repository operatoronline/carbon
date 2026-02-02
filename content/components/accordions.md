# Accordions

Accordions expand and collapse content sections, helping users focus on relevant information without overwhelming the page.

---

## Basic Accordion

A simple expand/collapse panel using native `<details>` and `<summary>`.

<Preview title="Basic Accordion">
    <div class="Accordion">
        <details class="Accordion-item">
            <summary class="Accordion-header">What is Carbon?</summary>
            <div class="Accordion-content">
                <p>Carbon is a framework-agnostic design system built with OKLCH colors and a 4px spacing scale. It outputs static HTML files that can be hosted anywhere.</p>
            </div>
        </details>
        <details class="Accordion-item">
            <summary class="Accordion-header">How do I install it?</summary>
            <div class="Accordion-content">
                <p>Simply include the CSS file in your project. No JavaScript framework required — just HTML and CSS.</p>
            </div>
        </details>
        <details class="Accordion-item">
            <summary class="Accordion-header">Is it accessible?</summary>
            <div class="Accordion-content">
                <p>Yes! Using native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements provides built-in keyboard navigation and screen reader support.</p>
            </div>
        </details>
    </div>
</Preview>

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

## With Icons

Add chevron indicators that rotate on expand.

<Preview title="Accordion with Icons">
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
                <p>Control who can see your profile, manage two-factor authentication, and review login history.</p>
            </div>
        </details>
        <details class="Accordion-item">
            <summary class="Accordion-header">
                <span>Billing Information</span>
                <i class="ph ph-caret-down Accordion-icon"></i>
            </summary>
            <div class="Accordion-content">
                <p>Update your payment method, view invoices, and manage your subscription plan.</p>
            </div>
        </details>
    </div>
</Preview>

```html
<div class="Accordion Accordion--icons">
    <details class="Accordion-item">
        <summary class="Accordion-header">
            <span>Section Title</span>
            <i class="ph ph-caret-down Accordion-icon"></i>
        </summary>
        <div class="Accordion-content">...</div>
    </details>
</div>
```

---

## Bordered Variant

Add visible borders between items.

<Preview title="Bordered Accordion">
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

```html
<div class="Accordion Accordion--bordered">
    ...
</div>
```

---

## Flush Variant

No outer borders for seamless integration into cards or panels.

<Preview title="Flush Accordion">
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

---

## Default Open

Use the `open` attribute to expand an item by default.

<Preview title="Default Open">
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

```html
<details class="Accordion-item" open>
    ...
</details>
```

---

## Single Expand (Exclusive)

Use JavaScript to ensure only one item is open at a time.

<Preview title="Exclusive Accordion">
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

---

## With Nested Content

Accordions can contain any content, including other components.

<Preview title="Rich Content">
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

## Accessibility

Native `<details>` and `<summary>` elements provide excellent accessibility:

- **Keyboard support** — Enter/Space to toggle, built-in
- **Screen readers** — Announces expanded/collapsed state
- **No ARIA needed** — Semantic HTML handles it
- **Focus visible** — Browser default focus styles apply

For custom implementations, use ARIA:

```html
<div role="region" aria-labelledby="accordion-header-1">
    <button id="accordion-header-1" 
            aria-expanded="false" 
            aria-controls="accordion-panel-1">
        Section Title
    </button>
    <div id="accordion-panel-1" 
         role="region" 
         aria-labelledby="accordion-header-1"
         hidden>
        Content...
    </div>
</div>
```

---

## CSS Reference

```css
/* Base */
.Accordion {
  display: flex;
  flex-direction: column;
}

.Accordion-item {
  border: none;
}

.Accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  list-style: none;
  transition: background-color 0.2s;
}

.Accordion-header:hover {
  background-color: var(--bg-secondary);
}

.Accordion-header::-webkit-details-marker {
  display: none;
}

.Accordion-content {
  padding: 0 var(--space-4) var(--space-4);
  color: var(--text-secondary);
}

/* Icon rotation */
.Accordion-icon {
  transition: transform 0.2s;
}

details[open] .Accordion-icon {
  transform: rotate(180deg);
}

/* Bordered variant */
.Accordion--bordered {
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
  overflow: hidden;
}

.Accordion--bordered .Accordion-item + .Accordion-item {
  border-top: 1px solid var(--border-subtle);
}

/* Flush variant */
.Accordion--flush .Accordion-header {
  padding-left: 0;
  padding-right: 0;
}

.Accordion--flush .Accordion-content {
  padding-left: 0;
  padding-right: 0;
}

.Accordion--flush .Accordion-item + .Accordion-item {
  border-top: 1px solid var(--border-subtle);
}
```

---

## Best Practices

### Do

- ✓ **Use clear, descriptive headers** — Users decide to expand based on the title
- ✓ **Keep content focused** — Each section should cover one topic
- ✓ **Consider default states** — Open the most important section by default
- ✓ **Use for optional content** — Hide supplementary info, not critical content

### Don't

- ✗ **Hide primary content** — Don't make users hunt for important info
- ✗ **Nest accordions deeply** — One level is usually enough
- ✗ **Use for short content** — If it fits, just show it
- ✗ **Override keyboard behavior** — Let native elements handle it
