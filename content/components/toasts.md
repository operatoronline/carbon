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
