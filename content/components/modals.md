# Modals

Modals (dialogs) focus user attention on a single task or piece of information. They appear over the main content and require user interaction before returning to the main flow.

---

## Basic Modal

A standard modal with header, body, and footer actions.

<Preview title="Basic Modal">
    <button class="Button Button--primary" onclick="document.getElementById('modal-basic').classList.add('Modal-overlay--active')">Open Modal</button>
    <div id="modal-basic" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal">
            <header class="Modal-header">
                <h4 class="Modal-title">Modal Title</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-basic').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>This is the modal body content. You can place any content here including forms, text, images, or other components.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-basic').classList.remove('Modal-overlay--active')">Cancel</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-basic').classList.remove('Modal-overlay--active')">Save Changes</button>
            </footer>
        </div>
    </div>
</Preview>

```html
<div class="Modal-overlay Modal-overlay--active">
    <div class="Modal">
        <header class="Modal-header">
            <h4 class="Modal-title">Modal Title</h4>
            <button class="Button Button--icon Button--ghost" aria-label="Close">
                <i class="ph ph-x"></i>
            </button>
        </header>
        <div class="Modal-body">
            <p>Content goes here...</p>
        </div>
        <footer class="Modal-footer">
            <button class="Button Button--tertiary">Cancel</button>
            <button class="Button Button--primary">Save Changes</button>
        </footer>
    </div>
</div>
```

---

## Modal Sizes

Modals come in three sizes: small, medium (default), and large.

<Preview title="Small Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-small').classList.add('Modal-overlay--active')">Small Modal</button>
    <div id="modal-small" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <header class="Modal-header">
                <h4 class="Modal-title">Quick Action</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-small').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>Small modals are perfect for quick confirmations or simple inputs.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--primary Button--small" onclick="document.getElementById('modal-small').classList.remove('Modal-overlay--active')">Got it</button>
            </footer>
        </div>
    </div>
</Preview>

<Preview title="Large Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-large').classList.add('Modal-overlay--active')">Large Modal</button>
    <div id="modal-large" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--large">
            <header class="Modal-header">
                <h4 class="Modal-title">Detailed View</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-large').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>Large modals provide more space for complex content like forms with multiple fields, data tables, or detailed information.</p>
                <div style="margin-top: var(--space-4); padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-2);">
                    <p style="color: var(--text-secondary); margin: 0;">This is an example of additional content that benefits from extra space.</p>
                </div>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-large').classList.remove('Modal-overlay--active')">Cancel</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-large').classList.remove('Modal-overlay--active')">Continue</button>
            </footer>
        </div>
    </div>
</Preview>

```html
<div class="Modal Modal--small">...</div>
<div class="Modal">...</div> <!-- Default medium -->
<div class="Modal Modal--large">...</div>
```

---

## Fullscreen Modal

For immersive experiences or mobile views.

<Preview title="Fullscreen Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-fullscreen').classList.add('Modal-overlay--active')">Fullscreen Modal</button>
    <div id="modal-fullscreen" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--fullscreen">
            <header class="Modal-header">
                <h4 class="Modal-title">Full Screen Experience</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-fullscreen').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>Fullscreen modals take over the entire viewport. Use for complex workflows, media viewers, or mobile experiences.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--primary" onclick="document.getElementById('modal-fullscreen').classList.remove('Modal-overlay--active')">Done</button>
            </footer>
        </div>
    </div>
</Preview>

```html
<div class="Modal Modal--fullscreen">...</div>
```

---

## Modal with Form

Common pattern for data entry.

<Preview title="Form Modal">
    <button class="Button Button--primary" onclick="document.getElementById('modal-form').classList.add('Modal-overlay--active')">Create Account</button>
    <div id="modal-form" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal">
            <header class="Modal-header">
                <h4 class="Modal-title">Create Account</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-form').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <form style="display: flex; flex-direction: column; gap: var(--space-4);">
                    <div class="FormField">
                        <label class="FormField-label FormField-label--required">Full Name</label>
                        <input type="text" class="Input" placeholder="John Doe">
                    </div>
                    <div class="FormField">
                        <label class="FormField-label FormField-label--required">Email</label>
                        <input type="email" class="Input" placeholder="john@example.com">
                    </div>
                    <div class="FormField">
                        <label class="FormField-label FormField-label--required">Password</label>
                        <input type="password" class="Input" placeholder="••••••••">
                        <span class="FormField-helper">At least 8 characters</span>
                    </div>
                    <label class="Checkbox">
                        <input type="checkbox" class="Checkbox-input">
                        <span class="Checkbox-box"></span>
                        <span class="Checkbox-label">I agree to the Terms of Service</span>
                    </label>
                </form>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-form').classList.remove('Modal-overlay--active')">Cancel</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-form').classList.remove('Modal-overlay--active')">Create Account</button>
            </footer>
        </div>
    </div>
</Preview>

---

## Scrolling Content

For modals with content that exceeds viewport height.

<Preview title="Scrolling Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-scroll').classList.add('Modal-overlay--active')">Long Content Modal</button>
    <div id="modal-scroll" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal">
            <header class="Modal-header">
                <h4 class="Modal-title">Terms of Service</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-scroll').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body Modal-body--scrollable" style="max-height: 300px;">
                <h5 style="margin-bottom: var(--space-3);">1. Introduction</h5>
                <p style="margin-bottom: var(--space-4);">Welcome to our service. These terms govern your use of our platform and services. By accessing or using our services, you agree to be bound by these terms.</p>
                <h5 style="margin-bottom: var(--space-3);">2. User Accounts</h5>
                <p style="margin-bottom: var(--space-4);">You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.</p>
                <h5 style="margin-bottom: var(--space-3);">3. Acceptable Use</h5>
                <p style="margin-bottom: var(--space-4);">You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.</p>
                <h5 style="margin-bottom: var(--space-3);">4. Privacy</h5>
                <p style="margin-bottom: var(--space-4);">Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
                <h5 style="margin-bottom: var(--space-3);">5. Termination</h5>
                <p>We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason at our discretion.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-scroll').classList.remove('Modal-overlay--active')">Decline</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-scroll').classList.remove('Modal-overlay--active')">Accept</button>
            </footer>
        </div>
    </div>
</Preview>

```html
<div class="Modal-body Modal-body--scrollable" style="max-height: 300px;">
    <!-- Long content here -->
</div>
```

---

## Confirmation Modal

For confirming user actions.

<Preview title="Confirmation Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-confirm').classList.add('Modal-overlay--active')">Show Confirmation</button>
    <div id="modal-confirm" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <header class="Modal-header">
                <h4 class="Modal-title">Confirm Action</h4>
            </header>
            <div class="Modal-body">
                <p>Are you sure you want to publish this document? This action will make it visible to all users.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-confirm').classList.remove('Modal-overlay--active')">Cancel</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-confirm').classList.remove('Modal-overlay--active')">Publish</button>
            </footer>
        </div>
    </div>
</Preview>

---

## Danger Modal

For destructive actions that require careful confirmation.

<Preview title="Danger Modal">
    <button class="Button Button--danger" onclick="document.getElementById('modal-danger').classList.add('Modal-overlay--active')">Delete Account</button>
    <div id="modal-danger" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <header class="Modal-header">
                <div style="width: 48px; height: 48px; border-radius: 50%; background: oklch(55% 0.2 25 / 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-3);">
                    <i class="ph ph-warning" style="font-size: 1.5rem; color: oklch(55% 0.2 25);"></i>
                </div>
                <h4 class="Modal-title">Delete Account?</h4>
            </header>
            <div class="Modal-body" style="text-align: center;">
                <p style="color: var(--text-secondary);">This action cannot be undone. All your data, including projects, files, and settings will be permanently deleted.</p>
            </div>
            <footer class="Modal-footer" style="justify-content: center;">
                <button class="Button Button--secondary" onclick="document.getElementById('modal-danger').classList.remove('Modal-overlay--active')">Keep Account</button>
                <button class="Button Button--danger" onclick="document.getElementById('modal-danger').classList.remove('Modal-overlay--active')">Delete Forever</button>
            </footer>
        </div>
    </div>
</Preview>

---

## Modal with Image

For media previews or visual content.

<Preview title="Image Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-image').classList.add('Modal-overlay--active')">View Image</button>
    <div id="modal-image" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--large">
            <header class="Modal-header">
                <h4 class="Modal-title">Image Preview</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-image').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body" style="padding: 0;">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Abstract gradient" style="width: 100%; display: block;">
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--secondary" onclick="document.getElementById('modal-image').classList.remove('Modal-overlay--active')">Close</button>
                <button class="Button Button--primary">
                    <i class="ph ph-download Button-icon"></i>
                    Download
                </button>
            </footer>
        </div>
    </div>
</Preview>

---

## Centered Modal (No Header)

Simplified modal for alerts or simple messages.

<Preview title="Centered Alert">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-alert').classList.add('Modal-overlay--active')">Show Alert</button>
    <div id="modal-alert" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small Modal--centered">
            <div class="Modal-body" style="text-align: center; padding: var(--space-8);">
                <div style="width: 64px; height: 64px; border-radius: 50%; background: oklch(55% 0.15 150 / 0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4);">
                    <i class="ph ph-check" style="font-size: 2rem; color: oklch(55% 0.15 150);"></i>
                </div>
                <h4 style="margin-bottom: var(--space-2);">Success!</h4>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">Your changes have been saved successfully.</p>
                <button class="Button Button--primary" onclick="document.getElementById('modal-alert').classList.remove('Modal-overlay--active')">Continue</button>
            </div>
        </div>
    </div>
</Preview>

---

## Modal with Steps

For multi-step wizards or workflows.

<Preview title="Stepper Modal">
    <button class="Button Button--primary" onclick="document.getElementById('modal-stepper').classList.add('Modal-overlay--active')">Open Wizard</button>
    <div id="modal-stepper" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal">
            <header class="Modal-header">
                <h4 class="Modal-title">Create Project</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-stepper').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-steps">
                <div class="Modal-step Modal-step--completed">
                    <div class="Modal-step-indicator">
                        <i class="ph ph-check"></i>
                    </div>
                    <span class="Modal-step-label">Details</span>
                </div>
                <div class="Modal-step Modal-step--active">
                    <div class="Modal-step-indicator">2</div>
                    <span class="Modal-step-label">Team</span>
                </div>
                <div class="Modal-step">
                    <div class="Modal-step-indicator">3</div>
                    <span class="Modal-step-label">Settings</span>
                </div>
            </div>
            <div class="Modal-body">
                <h5 style="margin-bottom: var(--space-4);">Add Team Members</h5>
                <div class="FormField" style="margin-bottom: var(--space-4);">
                    <label class="FormField-label">Invite by email</label>
                    <div class="Input-group">
                        <input type="email" class="Input Input--grouped" placeholder="teammate@example.com">
                        <button class="Button Button--secondary">Add</button>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: var(--space-3);">
                    <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2); background: var(--bg-secondary); border-radius: var(--space-2);">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=team1" class="Avatar Avatar--small" alt="Sarah">
                        <div style="flex: 1;">
                            <div style="font-weight: 500; font-size: 0.9rem;">Sarah Chen</div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">sarah@example.com</div>
                        </div>
                        <select class="Select" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-2); font-size: 0.8rem;">
                            <option>Editor</option>
                            <option>Viewer</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2); background: var(--bg-secondary); border-radius: var(--space-2);">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=team2" class="Avatar Avatar--small" alt="Mike">
                        <div style="flex: 1;">
                            <div style="font-weight: 500; font-size: 0.9rem;">Mike Johnson</div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">mike@example.com</div>
                        </div>
                        <select class="Select" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-2); font-size: 0.8rem;">
                            <option>Viewer</option>
                            <option>Editor</option>
                            <option>Admin</option>
                        </select>
                    </div>
                </div>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary">Back</button>
                <button class="Button Button--primary" onclick="document.getElementById('modal-stepper').classList.remove('Modal-overlay--active')">Continue</button>
            </footer>
        </div>
    </div>
</Preview>

```html
<div class="Modal-steps">
    <div class="Modal-step Modal-step--completed">
        <div class="Modal-step-indicator"><i class="ph ph-check"></i></div>
        <span class="Modal-step-label">Details</span>
    </div>
    <div class="Modal-step Modal-step--active">
        <div class="Modal-step-indicator">2</div>
        <span class="Modal-step-label">Team</span>
    </div>
    <div class="Modal-step">
        <div class="Modal-step-indicator">3</div>
        <span class="Modal-step-label">Settings</span>
    </div>
</div>
```

---

## Loading State

Show loading indicator during async operations.

<Preview title="Loading Modal">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-loading').classList.add('Modal-overlay--active')">Show Loading</button>
    <div id="modal-loading" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <div class="Modal-body" style="text-align: center; padding: var(--space-8);">
                <div class="Modal-spinner"></div>
                <h4 style="margin: var(--space-4) 0 var(--space-2);">Processing...</h4>
                <p style="color: var(--text-secondary); margin: 0;">Please wait while we save your changes.</p>
            </div>
        </div>
    </div>
</Preview>

<Preview title="Modal with Loading Footer">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-loading-footer').classList.add('Modal-overlay--active')">Submit Form</button>
    <div id="modal-loading-footer" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <header class="Modal-header">
                <h4 class="Modal-title">Save Changes</h4>
            </header>
            <div class="Modal-body">
                <p>Your changes are being saved to the server. This may take a moment.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--tertiary" onclick="document.getElementById('modal-loading-footer').classList.remove('Modal-overlay--active')">Cancel</button>
                <button class="Button Button--primary Button--loading" disabled>
                    <span class="Button-spinner"></span>
                    Saving...
                </button>
            </footer>
        </div>
    </div>
</Preview>

```html
<!-- Full loading state -->
<div class="Modal-body" style="text-align: center;">
    <div class="Modal-spinner"></div>
    <h4>Processing...</h4>
    <p>Please wait...</p>
</div>

<!-- Loading button in footer -->
<button class="Button Button--primary Button--loading" disabled>
    <span class="Button-spinner"></span>
    Saving...
</button>
```

---

## Modal Stack (Nested)

Handle multiple modals with proper z-index stacking.

<Preview title="Nested Modals">
    <button class="Button Button--secondary" onclick="document.getElementById('modal-parent').classList.add('Modal-overlay--active')">Open First Modal</button>
    <div id="modal-parent" class="Modal-overlay" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal">
            <header class="Modal-header">
                <h4 class="Modal-title">First Modal</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-parent').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>This is the first modal. Click below to open a nested modal.</p>
                <button class="Button Button--secondary" style="margin-top: var(--space-4);" onclick="document.getElementById('modal-child').classList.add('Modal-overlay--active')">Open Second Modal</button>
            </div>
        </div>
    </div>
    <div id="modal-child" class="Modal-overlay Modal-overlay--nested" onclick="if(event.target === this) this.classList.remove('Modal-overlay--active')">
        <div class="Modal Modal--small">
            <header class="Modal-header">
                <h4 class="Modal-title">Second Modal</h4>
                <button class="Button Button--icon Button--ghost" onclick="document.getElementById('modal-child').classList.remove('Modal-overlay--active')" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
            </header>
            <div class="Modal-body">
                <p>This is a nested modal that appears above the first one.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--primary" onclick="document.getElementById('modal-child').classList.remove('Modal-overlay--active')">Close</button>
            </footer>
        </div>
    </div>
</Preview>

---

## Accessibility

Modals require careful attention to accessibility:

### Focus Management
```javascript
// Trap focus within modal
const modal = document.querySelector('.Modal');
const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Focus first element on open
firstElement.focus();
```

### Escape to Close
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
```

### ARIA Attributes
```html
<div 
    class="Modal-overlay Modal-overlay--active" 
    role="dialog" 
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
>
    <div class="Modal">
        <header class="Modal-header">
            <h4 id="modal-title" class="Modal-title">Modal Title</h4>
        </header>
        <div class="Modal-body">
            <p id="modal-description">Modal description...</p>
        </div>
    </div>
</div>
```

### Return Focus
```javascript
// Store the element that opened the modal
const triggerElement = document.activeElement;

// On close, return focus
function closeModal() {
    overlay.classList.remove('Modal-overlay--active');
    triggerElement.focus();
}
```

---

## CSS Reference

```css
/* Overlay */
.Modal-overlay {
  position: fixed;
  inset: 0;
  background-color: oklch(0% 0 0 / 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
}

.Modal-overlay--active {
  opacity: 1;
  visibility: visible;
}

.Modal-overlay--nested {
  z-index: 1001;
}

/* Modal */
.Modal {
  background-color: var(--bg-primary);
  border-radius: var(--space-3);
  box-shadow: 0 20px 40px oklch(0% 0 0 / 0.2);
  width: 100%;
  max-width: 480px;
  max-height: calc(100vh - var(--space-8));
  display: flex;
  flex-direction: column;
  transform: translateY(10px);
  transition: transform 0.2s;
}

.Modal-overlay--active .Modal {
  transform: translateY(0);
}

/* Sizes */
.Modal--small {
  max-width: 360px;
}

.Modal--large {
  max-width: 720px;
}

.Modal--fullscreen {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  border-radius: 0;
}

/* Header */
.Modal-header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.Modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

/* Body */
.Modal-body {
  padding: var(--space-6);
  flex: 1;
  overflow-y: auto;
}

.Modal-body--scrollable {
  overflow-y: auto;
}

.Modal-body p {
  margin: 0;
  line-height: 1.6;
}

/* Footer */
.Modal-footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}

/* Centered variant */
.Modal--centered .Modal-header {
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: none;
  padding-bottom: 0;
}

/* Prevent body scroll when modal is open */
body:has(.Modal-overlay--active) {
  overflow: hidden;
}

/* Steps/Stepper */
.Modal-steps {
  display: flex;
  justify-content: center;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
  gap: var(--space-6);
}

.Modal-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  position: relative;
}

.Modal-step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 14px;
  left: calc(50% + 20px);
  width: calc(100% + var(--space-2));
  height: 2px;
  background-color: var(--border-subtle);
}

.Modal-step--completed:not(:last-child)::after {
  background-color: var(--accent-primary);
}

.Modal-step-indicator {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
}

.Modal-step--active .Modal-step-indicator {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.Modal-step--completed .Modal-step-indicator {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.Modal-step-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.Modal-step--active .Modal-step-label {
  color: var(--text-primary);
  font-weight: 500;
}

/* Loading Spinner */
.Modal-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-subtle);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: modal-spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes modal-spin {
  to { transform: rotate(360deg); }
}
```

---

## Best Practices

### Do

- ✓ **Use for focused tasks** — Modals demand attention, use purposefully
- ✓ **Provide clear escape** — Always offer a way to close (X button, Cancel, Escape key)
- ✓ **Keep content focused** — One task per modal
- ✓ **Use descriptive titles** — Help users understand context
- ✓ **Return focus** — Focus the trigger element when modal closes

### Don't

- ✗ **Stack many modals** — Avoid more than 2 levels of nesting
- ✗ **Use for simple messages** — Consider toasts or inline alerts instead
- ✗ **Block without explanation** — Always explain why a modal appeared
- ✗ **Forget mobile** — Ensure modals work on small screens
- ✗ **Auto-open on page load** — Let users initiate modal interactions
