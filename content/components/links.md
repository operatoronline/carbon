# Links

Links are used for navigation and to reference external resources. They provide a way for users to move between pages, sections, or to external content.

---

## Standard Link

The default link style uses the primary accent color with an underline on hover.

<Preview title="Standard Link">
    <a href="#" class="Link">Click here to learn more</a>
</Preview>

```html
<a href="#" class="Link">Click here to learn more</a>
```

---

## Inline Links

Links within body text should be clearly distinguishable but not disruptive.

<Preview title="Inline Link">
    <p style="max-width: 480px; line-height: 1.6;">
        For more information about our services, please visit our 
        <a href="#" class="Link">documentation</a> or contact 
        <a href="#" class="Link">customer support</a>. You can also 
        check out our <a href="#" class="Link">getting started guide</a> 
        for beginners.
    </p>
</Preview>

```html
<p>
    For more information, visit our <a href="#" class="Link">documentation</a>.
</p>
```

---

## Link Variants

Different visual styles for various contexts.

<Preview title="Link Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link">Default Link</a>
        <a href="#" class="Link Link--subtle">Subtle Link</a>
        <a href="#" class="Link Link--muted">Muted Link</a>
        <a href="#" class="Link Link--underline">Always Underlined</a>
    </div>
</Preview>

```html
<a href="#" class="Link">Default Link</a>
<a href="#" class="Link Link--subtle">Subtle Link</a>
<a href="#" class="Link Link--muted">Muted Link</a>
<a href="#" class="Link Link--underline">Always Underlined</a>
```

---

## Standalone Links

Links that stand alone as navigation elements.

<Preview title="Standalone Link">
    <a href="#" class="Link Link--standalone">
        View all products
    </a>
</Preview>

```html
<a href="#" class="Link Link--standalone">View all products</a>
```

<Preview title="Standalone Link with Arrow">
    <a href="#" class="Link Link--standalone">
        Read the full article
        <i class="ph ph-arrow-right Link-icon"></i>
    </a>
</Preview>

```html
<a href="#" class="Link Link--standalone">
    Read the full article
    <i class="ph ph-arrow-right Link-icon"></i>
</a>
```

---

## Links with Icons

Add icons for visual context or to indicate behavior.

<Preview title="Link with Leading Icon">
    <a href="#" class="Link">
        <i class="ph ph-file-text Link-icon"></i>
        View Documentation
    </a>
</Preview>

```html
<a href="#" class="Link">
    <i class="ph ph-file-text Link-icon"></i>
    View Documentation
</a>
```

<Preview title="Link with Trailing Icon">
    <a href="#" class="Link" target="_blank">
        Open in new tab
        <i class="ph ph-arrow-square-out Link-icon"></i>
    </a>
</Preview>

```html
<a href="#" class="Link" target="_blank">
    Open in new tab
    <i class="ph ph-arrow-square-out Link-icon"></i>
</a>
```

<Preview title="External Link Indicator">
    <p style="max-width: 480px; line-height: 1.6;">
        Learn more on the 
        <a href="#" class="Link Link--external" target="_blank" rel="noopener">
            official website
            <i class="ph ph-arrow-square-out Link-icon"></i>
        </a>
        for complete details.
    </p>
</Preview>

```html
<a href="#" class="Link Link--external" target="_blank" rel="noopener">
    official website
    <i class="ph ph-arrow-square-out Link-icon"></i>
</a>
```

---

## Link Sizes

Control link size for different contexts.

<Preview title="Link Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link Link--small">Small Link</a>
        <a href="#" class="Link">Default Link</a>
        <a href="#" class="Link Link--large">Large Link</a>
    </div>
</Preview>

```html
<a href="#" class="Link Link--small">Small Link</a>
<a href="#" class="Link">Default Link</a>
<a href="#" class="Link Link--large">Large Link</a>
```

---

## Visited State

Indicate links that have been visited.

<Preview title="Visited Links">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link">Unvisited Link</a>
        <a href="#" class="Link Link--visited">Visited Link</a>
    </div>
</Preview>

```html
<a href="#" class="Link">Unvisited Link</a>
<!-- Visited state is typically browser-controlled, 
     but can be styled with CSS :visited pseudo-class -->
```

### CSS for Visited State
```css
.Link:visited {
  color: oklch(50% 0.12 300); /* Muted purple */
}
```

---

## Disabled Link

Style for links that are temporarily unavailable.

<Preview title="Disabled Link">
    <span class="Link Link--disabled" aria-disabled="true">
        Currently unavailable
    </span>
</Preview>

```html
<!-- Use span instead of anchor for truly disabled links -->
<span class="Link Link--disabled" aria-disabled="true">
    Currently unavailable
</span>
```

---

## Link Groups

Common patterns for grouping related links.

<Preview title="Vertical Link List">
    <nav style="display: flex; flex-direction: column; gap: var(--space-2);">
        <a href="#" class="Link Link--nav">Home</a>
        <a href="#" class="Link Link--nav Link--active">Products</a>
        <a href="#" class="Link Link--nav">About Us</a>
        <a href="#" class="Link Link--nav">Contact</a>
    </nav>
</Preview>

```html
<nav>
    <a href="#" class="Link Link--nav">Home</a>
    <a href="#" class="Link Link--nav Link--active">Products</a>
    <a href="#" class="Link Link--nav">About Us</a>
</nav>
```

<Preview title="Horizontal Link List">
    <nav style="display: flex; gap: var(--space-6);">
        <a href="#" class="Link Link--nav">Features</a>
        <a href="#" class="Link Link--nav">Pricing</a>
        <a href="#" class="Link Link--nav">Blog</a>
        <a href="#" class="Link Link--nav">Support</a>
    </nav>
</Preview>

```html
<nav style="display: flex; gap: var(--space-6);">
    <a href="#" class="Link Link--nav">Features</a>
    <a href="#" class="Link Link--nav">Pricing</a>
</nav>
```

<Preview title="Footer Links">
    <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
        <a href="#" class="Link Link--muted Link--small">Privacy Policy</a>
        <span style="color: var(--text-secondary);">·</span>
        <a href="#" class="Link Link--muted Link--small">Terms of Service</a>
        <span style="color: var(--text-secondary);">·</span>
        <a href="#" class="Link Link--muted Link--small">Cookie Settings</a>
    </div>
</Preview>

```html
<a href="#" class="Link Link--muted Link--small">Privacy Policy</a>
<span>·</span>
<a href="#" class="Link Link--muted Link--small">Terms of Service</a>
```

---

## Skip Link

Accessibility pattern for keyboard navigation.

<Preview title="Skip Link">
    <a href="#main-content" class="Link Link--skip">Skip to main content</a>
    <p style="margin-top: var(--space-4); color: var(--text-secondary); font-size: 0.875rem;">
        (Tab to this preview to see the skip link appear)
    </p>
</Preview>

```html
<a href="#main-content" class="Link Link--skip">Skip to main content</a>

<main id="main-content">
    <!-- Main content here -->
</main>
```

---

## Download Links

Style for downloadable resources.

<Preview title="Download Links">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link" download>
            <i class="ph ph-file-pdf Link-icon"></i>
            Annual Report 2025.pdf
        </a>
        <a href="#" class="Link" download>
            <i class="ph ph-file-xls Link-icon"></i>
            Financial Data.xlsx
        </a>
        <a href="#" class="Link" download>
            <i class="ph ph-file-zip Link-icon"></i>
            Source Code.zip
        </a>
    </div>
</Preview>

```html
<a href="/files/report.pdf" class="Link" download>
    <i class="ph ph-file-pdf Link-icon"></i>
    Annual Report 2025.pdf
</a>
```

---

## Real-World Examples

### Card with Link

<Preview title="Card Read More Link">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Getting Started Guide</h4>
            <p class="Card-text">Learn the basics of setting up your first project with our step-by-step tutorial.</p>
            <a href="#" class="Link Link--standalone" style="margin-top: var(--space-3); display: inline-flex;">
                Read more
                <i class="ph ph-arrow-right Link-icon"></i>
            </a>
        </div>
    </div>
</Preview>

### Breadcrumb Navigation

<Preview title="Breadcrumbs">
    <nav aria-label="Breadcrumb" style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem;">
        <a href="#" class="Link Link--muted">Home</a>
        <i class="ph ph-caret-right" style="color: var(--text-secondary); font-size: 0.75rem;"></i>
        <a href="#" class="Link Link--muted">Products</a>
        <i class="ph ph-caret-right" style="color: var(--text-secondary); font-size: 0.75rem;"></i>
        <span style="color: var(--text-primary);">Widget Pro</span>
    </nav>
</Preview>

```html
<nav aria-label="Breadcrumb">
    <a href="#" class="Link Link--muted">Home</a>
    <i class="ph ph-caret-right"></i>
    <a href="#" class="Link Link--muted">Products</a>
    <i class="ph ph-caret-right"></i>
    <span>Widget Pro</span>
</nav>
```

### Help Text with Link

<Preview title="Help Text">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label">Email Address</label>
        <input type="email" class="Input" placeholder="you@example.com">
        <span class="FormField-helper">
            Having trouble? <a href="#" class="Link">Reset your email</a>
        </span>
    </div>
</Preview>

### Alert with Link

<Preview title="Alert with Action Link">
    <div class="Alert Alert--info" style="max-width: 480px;">
        <i class="ph ph-info Alert-icon"></i>
        <div>
            Your subscription expires in 7 days. 
            <a href="#" class="Link">Renew now</a> to avoid interruption.
        </div>
    </div>
</Preview>

### Empty State with Links

<Preview title="Empty State">
    <div style="text-align: center; padding: var(--space-8); max-width: 400px;">
        <i class="ph ph-magnifying-glass" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: var(--space-4);"></i>
        <h4 style="margin: 0 0 var(--space-2);">No results found</h4>
        <p style="color: var(--text-secondary); margin: 0 0 var(--space-4);">
            We couldn't find anything matching your search. Try 
            <a href="#" class="Link">browsing all items</a> or 
            <a href="#" class="Link">adjusting your filters</a>.
        </p>
    </div>
</Preview>

### Reference Links

<Preview title="Reference Section">
    <div style="max-width: 480px;">
        <h5 style="margin: 0 0 var(--space-3); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">Related Resources</h5>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-2);">
            <li>
                <a href="#" class="Link">
                    <i class="ph ph-book-open Link-icon"></i>
                    API Documentation
                </a>
            </li>
            <li>
                <a href="#" class="Link">
                    <i class="ph ph-video Link-icon"></i>
                    Video Tutorial
                </a>
            </li>
            <li>
                <a href="#" class="Link Link--external" target="_blank">
                    <i class="ph ph-github-logo Link-icon"></i>
                    GitHub Repository
                    <i class="ph ph-arrow-square-out Link-icon" style="margin-left: var(--space-1);"></i>
                </a>
            </li>
        </ul>
    </div>
</Preview>

---

## Accessibility

Links require careful attention to accessibility:

### Descriptive Text
```html
<!-- Good: Descriptive link text -->
<a href="/pricing" class="Link">View pricing plans</a>

<!-- Bad: Vague link text -->
<a href="/pricing" class="Link">Click here</a>
```

### External Links
```html
<!-- Indicate external links open in new tab -->
<a href="https://example.com" 
   class="Link" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Example website (opens in new tab)">
    Example website
    <i class="ph ph-arrow-square-out" aria-hidden="true"></i>
</a>
```

### Skip Links
```html
<!-- Provide skip navigation for keyboard users -->
<a href="#main-content" class="Link Link--skip">
    Skip to main content
</a>
```

### Download Links
```html
<!-- Indicate file type and size for downloads -->
<a href="/report.pdf" class="Link" download>
    <i class="ph ph-file-pdf" aria-hidden="true"></i>
    Annual Report (PDF, 2.4 MB)
</a>
```

### Links vs Buttons
```html
<!-- Link: Navigation to new page/resource -->
<a href="/about" class="Link">About Us</a>

<!-- Button: Triggers an action on the current page -->
<button class="Button Button--primary">Submit Form</button>
```

---

## CSS Reference

```css
/* Base Link */
.Link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--accent-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s, text-decoration 0.15s;
}

.Link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.Link:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Link Icon */
.Link-icon {
  font-size: 0.9em;
  flex-shrink: 0;
}

/* Variants */
.Link--subtle {
  color: var(--text-primary);
}

.Link--subtle:hover {
  color: var(--accent-primary);
}

.Link--muted {
  color: var(--text-secondary);
}

.Link--muted:hover {
  color: var(--text-primary);
}

.Link--underline {
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Standalone */
.Link--standalone {
  font-weight: 500;
}

/* External */
.Link--external .Link-icon:last-child {
  opacity: 0.7;
}

/* Sizes */
.Link--small {
  font-size: 0.875rem;
}

.Link--large {
  font-size: 1.125rem;
}

/* Disabled */
.Link--disabled {
  color: var(--text-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

.Link--disabled:hover {
  text-decoration: none;
}

/* Navigation Links */
.Link--nav {
  color: var(--text-secondary);
  font-weight: 500;
}

.Link--nav:hover {
  color: var(--text-primary);
  text-decoration: none;
}

.Link--nav.Link--active {
  color: var(--accent-primary);
}

/* Visited State */
.Link:visited {
  color: oklch(50% 0.12 300);
}

.Link--subtle:visited,
.Link--muted:visited {
  color: var(--text-secondary);
}

/* Skip Link */
.Link--skip {
  position: absolute;
  left: -9999px;
  top: var(--space-4);
  z-index: 9999;
  padding: var(--space-2) var(--space-4);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-strong);
  border-radius: var(--space-1);
  font-weight: 500;
}

.Link--skip:focus {
  left: var(--space-4);
}

/* Link in dark text (ensure contrast) */
p .Link,
.Card-text .Link,
.FormField-helper .Link {
  font-weight: 500;
}
```

---

## Best Practices

### Do

- ✓ **Use descriptive text** — "View pricing" not "Click here"
- ✓ **Indicate external links** — Use icon and/or aria-label
- ✓ **Provide skip links** — Essential for keyboard navigation
- ✓ **Use links for navigation** — To pages or resources
- ✓ **Include file info** — For downloads, show type and size

### Don't

- ✗ **Use "click here"** — Link text should be meaningful alone
- ✗ **Open everything in new tabs** — Only for external links
- ✗ **Style links as buttons** — Use actual buttons for actions
- ✗ **Hide links in walls of text** — Make them visually distinct
- ✗ **Remove focus indicators** — Critical for accessibility
