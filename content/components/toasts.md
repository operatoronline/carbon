# Toasts

Toasts provide brief, non-blocking notifications that appear temporarily.

## Basic Toast

<Preview title="Basic Toast">
    <div class="Toast">
        <span class="Toast-message">Your changes have been saved.</span>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">Your changes have been saved.</span>
</div>
```

## With Icon

<Preview title="Toast with Icon">
    <div class="Toast">
        <i class="ph ph-check-circle Toast-icon"></i>
        <span class="Toast-message">Successfully uploaded!</span>
    </div>
</Preview>

```html
<div class="Toast">
    <i class="ph ph-check-circle Toast-icon"></i>
    <span class="Toast-message">Successfully uploaded!</span>
</div>
```

## Variants

Toasts support semantic variants for different message types.

<Preview title="Toast Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Toast Toast--success">
            <i class="ph ph-check-circle Toast-icon"></i>
            <span class="Toast-message">Operation completed successfully.</span>
        </div>
        <div class="Toast Toast--error">
            <i class="ph ph-x-circle Toast-icon"></i>
            <span class="Toast-message">Something went wrong. Please try again.</span>
        </div>
        <div class="Toast Toast--warning">
            <i class="ph ph-warning Toast-icon"></i>
            <span class="Toast-message">Your session will expire in 5 minutes.</span>
        </div>
        <div class="Toast Toast--info">
            <i class="ph ph-info Toast-icon"></i>
            <span class="Toast-message">New version available. Refresh to update.</span>
        </div>
    </div>
</Preview>

```html
<div class="Toast Toast--success">...</div>
<div class="Toast Toast--error">...</div>
<div class="Toast Toast--warning">...</div>
<div class="Toast Toast--info">...</div>
```

## With Action

Toasts can include a single action button.

<Preview title="Toast with Action">
    <div class="Toast">
        <span class="Toast-message">Message archived.</span>
        <button class="Toast-action">Undo</button>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">Message archived.</span>
    <button class="Toast-action">Undo</button>
</div>
```

## With Close Button

<Preview title="Dismissible Toast">
    <div class="Toast">
        <span class="Toast-message">3 items selected.</span>
        <button class="Toast-close" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">3 items selected.</span>
    <button class="Toast-close" aria-label="Dismiss">
        <i class="ph ph-x"></i>
    </button>
</div>
```

## Toast Container

Toasts are positioned using a container, typically at the bottom-right.

```html
<div class="Toast-container">
    <div class="Toast">...</div>
    <div class="Toast">...</div>
</div>
```

```css
.Toast-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1100;
}
```

## JavaScript

Basic toast management:

```js
function showToast(message, variant = 'default', duration = 4000) {
    const container = document.querySelector('.Toast-container') 
        || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `Toast Toast--${variant}`;
    toast.innerHTML = `<span class="Toast-message">${message}</span>`;
    
    container.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('active'));
    
    // Auto-dismiss
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
```

---

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Toast` | Base toast container |
| `.Toast--success` | Green success variant |
| `.Toast--error` | Red error variant |
| `.Toast--warning` | Yellow warning variant |
| `.Toast--info` | Blue informational variant |
| `.Toast-icon` | Leading icon |
| `.Toast-message` | Message text content |
| `.Toast-action` | Optional action button |
| `.Toast-close` | Dismiss button |
| `.Toast-container` | Fixed positioning wrapper |
| `.Toast.active` | Visible/animated state |

</div>

---

## Accessibility

- Use `role="status"` for non-critical toasts (informational, success)
- Use `role="alert"` for urgent toasts (errors, warnings)
- Include `aria-live="polite"` for standard notifications
- Include `aria-live="assertive"` for critical notifications
- Ensure auto-dismiss timing is sufficient (4-7 seconds minimum)
- Provide dismiss button for toasts with longer content
- Icons should have `aria-hidden="true"` when message is clear

### Example with ARIA

```html
<div class="Toast Toast--success" role="status" aria-live="polite">
    <i class="ph ph-check-circle Toast-icon" aria-hidden="true"></i>
    <span class="Toast-message">File uploaded successfully.</span>
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to action/close button |
| `Enter` / `Space` | Activate focused button |
| `Escape` | Dismiss toast (when focused) |

---

## Best Practices

<div class="DoDont">
  <div class="Do">
    <h4>✓ Do</h4>
    <ul>
      <li>Keep messages brief and scannable</li>
      <li>Use appropriate variants for message types</li>
      <li>Provide undo actions for destructive operations</li>
      <li>Stack multiple toasts vertically</li>
      <li>Allow enough time to read before auto-dismiss</li>
    </ul>
  </div>
  <div class="Dont">
    <h4>✗ Don't</h4>
    <ul>
      <li>Show more than 3 toasts at once</li>
      <li>Use toasts for critical errors requiring action</li>
      <li>Auto-dismiss error messages too quickly</li>
      <li>Include lengthy text or multiple paragraphs</li>
      <li>Use toasts for confirmations requiring decisions</li>
    </ul>
  </div>
</div>
