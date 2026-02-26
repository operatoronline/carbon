# Empty States

Empty states communicate when there's no content to display. A good empty state guides users toward their next action instead of leaving them confused.

---

## Basic Empty State

A centered message with optional icon and action.

<Preview title="Basic Empty State">
    <div class="EmptyState">
        <div class="EmptyState-icon">
            <i class="ph ph-package"></i>
        </div>
        <h3 class="EmptyState-title">No items yet</h3>
        <p class="EmptyState-description">Get started by creating your first item.</p>
        <button class="Button Button--primary">Create Item</button>
    </div>
</Preview>

```html
<div class="EmptyState">
    <div class="EmptyState-icon">
        <i class="ph ph-package"></i>
    </div>
    <h3 class="EmptyState-title">No items yet</h3>
    <p class="EmptyState-description">Get started by creating your first item.</p>
    <button class="Button Button--primary">Create Item</button>
</div>
```

---

## With Illustration

Replace the icon with a custom illustration for more personality.

<Preview title="Illustrated Empty State">
    <div class="EmptyState">
        <div class="EmptyState-illustration">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="50" fill="var(--bg-s)" stroke="var(--bd)" stroke-width="2"/>
                <path d="M40 55 L60 75 L80 55" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <circle cx="60" cy="40" r="6" fill="var(--accent)"/>
            </svg>
        </div>
        <h3 class="EmptyState-title">Your inbox is empty</h3>
        <p class="EmptyState-description">When you receive messages, they'll appear here.</p>
    </div>
</Preview>

```html
<div class="EmptyState">
    <div class="EmptyState-illustration">
        <img src="empty-inbox.svg" alt="">
    </div>
    <h3 class="EmptyState-title">Your inbox is empty</h3>
    <p class="EmptyState-description">When you receive messages, they'll appear here.</p>
</div>
```

---

## Compact Variant

For smaller containers like sidebars or cards.

<Preview title="Compact Empty State">
    <div style="max-width: 280px; border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4);">
        <div class="EmptyState EmptyState--compact">
            <div class="EmptyState-icon">
                <i class="ph ph-file-text"></i>
            </div>
            <p class="EmptyState-description">No documents</p>
            <button class="Button Button--primary" style="font-size: 0.85rem; padding: var(--space-1) var(--space-3);">Upload</button>
        </div>
    </div>
</Preview>

```html
<div class="EmptyState EmptyState--compact">
    <div class="EmptyState-icon">
        <i class="ph ph-file-text"></i>
    </div>
    <p class="EmptyState-description">No documents</p>
    <button class="Button Button--primary">Upload</button>
</div>
```

---

## Search Results

When a search or filter returns no matches.

<Preview title="No Search Results">
    <div class="EmptyState">
        <div class="EmptyState-icon">
            <i class="ph ph-magnifying-glass"></i>
        </div>
        <h3 class="EmptyState-title">No results found</h3>
        <p class="EmptyState-description">We couldn't find anything matching "quantum flux capacitor". Try different keywords or check for typos.</p>
        <div class="Layout-cluster" style="justify-content: center;">
            <button class="Button">Clear Search</button>
            <button class="Button Button--primary">Browse All</button>
        </div>
    </div>
</Preview>

```html
<div class="EmptyState">
    <div class="EmptyState-icon">
        <i class="ph ph-magnifying-glass"></i>
    </div>
    <h3 class="EmptyState-title">No results found</h3>
    <p class="EmptyState-description">Try different keywords or check for typos.</p>
    <div class="Layout-cluster">
        <button class="Button">Clear Search</button>
        <button class="Button Button--primary">Browse All</button>
    </div>
</div>
```

---

## Error State

When something goes wrong loading content.

<Preview title="Error State">
    <div class="EmptyState EmptyState--error">
        <div class="EmptyState-icon">
            <i class="ph ph-warning-circle"></i>
        </div>
        <h3 class="EmptyState-title">Unable to load data</h3>
        <p class="EmptyState-description">Something went wrong on our end. Please try again or contact support if the problem persists.</p>
        <div class="Layout-cluster" style="justify-content: center;">
            <button class="Button Button--primary">
                <i class="ph ph-arrow-clockwise"></i>
                Retry
            </button>
            <button class="Button">Contact Support</button>
        </div>
    </div>
</Preview>

```html
<div class="EmptyState EmptyState--error">
    <div class="EmptyState-icon">
        <i class="ph ph-warning-circle"></i>
    </div>
    <h3 class="EmptyState-title">Unable to load data</h3>
    <p class="EmptyState-description">Something went wrong...</p>
    <button class="Button Button--primary">Retry</button>
</div>
```

---

## First-Time User

Onboarding empty states that guide new users.

<Preview title="Onboarding Empty State">
    <div class="EmptyState">
        <div class="EmptyState-icon" style="background: oklch(55% 0.15 150 / 0.1); color: oklch(55% 0.15 150);">
            <i class="ph ph-rocket-launch"></i>
        </div>
        <h3 class="EmptyState-title">Welcome to your dashboard!</h3>
        <p class="EmptyState-description">You're all set up. Here's how to get started:</p>
        <div class="Layout-stack Layout-stack--tight" style="text-align: left; max-width: 300px; margin: var(--space-4) auto 0;">
            <div style="display: flex; gap: var(--space-3); align-items: flex-start;">
                <span class="Badge Badge--primary" style="border-radius: 50%; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">1</span>
                <span>Create your first project</span>
            </div>
            <div style="display: flex; gap: var(--space-3); align-items: flex-start;">
                <span class="Badge" style="border-radius: 50%; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">2</span>
                <span style="color: var(--fg-3);">Invite team members</span>
            </div>
            <div style="display: flex; gap: var(--space-3); align-items: flex-start;">
                <span class="Badge" style="border-radius: 50%; min-width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">3</span>
                <span style="color: var(--fg-3);">Start collaborating</span>
            </div>
        </div>
        <button class="Button Button--primary" style="margin-top: var(--space-4);">Create Project</button>
    </div>
</Preview>

---

## In Cards

Empty states within card components.

<Preview title="Empty Card">
    <div class="Layout-grid" style="width: 100%;">
        <div class="Layout-col-12">
            <div class="Card" style="height: 200px;">
                <div class="Card-body" style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <div class="EmptyState EmptyState--compact">
                        <i class="ph ph-chart-line" style="font-size: 2rem; color: var(--fg-3);"></i>
                        <p class="EmptyState-description">No data to display</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="Layout-col-12">
            <div class="Card" style="height: 200px;">
                <div class="Card-body" style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <div class="EmptyState EmptyState--compact">
                        <i class="ph ph-users" style="font-size: 2rem; color: var(--fg-3);"></i>
                        <p class="EmptyState-description">No team members</p>
                        <a href="#" class="Link" style="font-size: 0.85rem;">Invite people</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Preview>

---

## In Tables

Empty state for table components.

<Preview title="Empty Table">
    <div style="border: 1px solid var(--bd); border-radius: var(--r-m); overflow: hidden;">
        <table class="Table" style="margin: 0;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
        <div class="EmptyState" style="padding: var(--space-8);">
            <div class="EmptyState-icon">
                <i class="ph ph-clipboard-text"></i>
            </div>
            <h3 class="EmptyState-title">No records found</h3>
            <p class="EmptyState-description">Create a new record to get started.</p>
            <button class="Button Button--primary">Add Record</button>
        </div>
    </div>
</Preview>

---

## Best Practices

### Content Guidelines

| Element | Guideline |
|---------|-----------|
| **Title** | Clear, concise — what's missing |
| **Description** | Why it's empty + what to do next |
| **Action** | Primary CTA to resolve the state |
| **Tone** | Helpful, not apologetic |

### Do

- ✓ **Explain the situation** — Tell users why there's no content
- ✓ **Provide a clear action** — Give them something to do
- ✓ **Use appropriate visuals** — Icons or illustrations that match context
- ✓ **Keep it simple** — One primary action, maybe a secondary
- ✓ **Match the context** — Use compact variant in small containers like cards or sidebars
- ✓ **Differentiate error from empty** — Use the error variant when content failed to load vs. simply not existing yet

### Don't

- ✗ **Leave it blank** — An empty container is confusing
- ✗ **Be overly verbose** — Keep copy short and scannable
- ✗ **Use generic messages** — "No data" doesn't help anyone
- ✗ **Hide the state** — Make it visible so users understand
- ✗ **Stack multiple empty states** — If a page has several empty sections, consolidate into one page-level message
- ✗ **Blame the user** — Say "No results found" not "You didn't search correctly"

---

## CSS Reference

```css
/* Base */
.EmptyState {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-8);
  min-height: 200px;
}

.EmptyState-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--bg-s);
  color: var(--fg-3);
  font-size: 2rem;
  margin-bottom: var(--space-4);
}

.EmptyState-illustration {
  margin-bottom: var(--space-4);
}

.EmptyState-illustration img,
.EmptyState-illustration svg {
  max-width: 160px;
  height: auto;
}

.EmptyState-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--fg);
  margin: 0 0 var(--space-2);
}

.EmptyState-description {
  font-size: 0.9rem;
  color: var(--fg-3);
  max-width: 320px;
  margin: 0 0 var(--space-4);
}

/* Compact variant */
.EmptyState--compact {
  padding: var(--space-4);
  min-height: auto;
}

.EmptyState--compact .EmptyState-icon {
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  margin-bottom: var(--space-3);
}

.EmptyState--compact .EmptyState-title {
  font-size: 1rem;
}

.EmptyState--compact .EmptyState-description {
  font-size: 0.85rem;
  margin-bottom: var(--space-3);
}

/* Error variant */
.EmptyState--error .EmptyState-icon {
  background-color: oklch(55% 0.2 25 / 0.1);
  color: oklch(55% 0.2 25);
}
```
