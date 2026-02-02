# Forms

Forms allow users to enter data and interact with the system. Carbon provides a consistent set of form controls with built-in validation states and accessibility.

---

## Text Input

Standard text entry field with label.

<Preview title="Text Input">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label" for="input-basic">Username</label>
        <input type="text" id="input-basic" class="Input" placeholder="Enter your username">
    </div>
</Preview>

```html
<div class="FormField">
    <label class="FormField-label" for="input-basic">Username</label>
    <input type="text" id="input-basic" class="Input" placeholder="Enter your username">
</div>
```

---

## Input Sizes

Inputs come in three sizes.

<Preview title="Input Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
        <input type="text" class="Input Input--small" placeholder="Small">
        <input type="text" class="Input" placeholder="Medium (default)">
        <input type="text" class="Input Input--large" placeholder="Large">
    </div>
</Preview>

```html
<input type="text" class="Input Input--small" placeholder="Small">
<input type="text" class="Input" placeholder="Medium">
<input type="text" class="Input Input--large" placeholder="Large">
```

---

## Input with Icon

Add leading or trailing icons for context.

<Preview title="Input with Leading Icon">
    <div class="Input-wrapper" style="max-width: 320px;">
        <i class="ph ph-magnifying-glass Input-icon"></i>
        <input type="text" class="Input Input--withIcon" placeholder="Search...">
    </div>
</Preview>

```html
<div class="Input-wrapper">
    <i class="ph ph-magnifying-glass Input-icon"></i>
    <input type="text" class="Input Input--withIcon" placeholder="Search...">
</div>
```

<Preview title="Input with Trailing Icon">
    <div class="Input-wrapper" style="max-width: 320px;">
        <input type="text" class="Input Input--withIconTrailing" placeholder="Enter email">
        <i class="ph ph-envelope Input-icon Input-icon--trailing"></i>
    </div>
</Preview>

```html
<div class="Input-wrapper">
    <input type="text" class="Input Input--withIconTrailing" placeholder="Enter email">
    <i class="ph ph-envelope Input-icon Input-icon--trailing"></i>
</div>
```

---

## Input with Button

Common pattern for search fields.

<Preview title="Search Input">
    <div class="Input-group" style="max-width: 400px;">
        <input type="text" class="Input Input--grouped" placeholder="Search documentation...">
        <button class="Button Button--primary">Search</button>
    </div>
</Preview>

```html
<div class="Input-group">
    <input type="text" class="Input Input--grouped" placeholder="Search...">
    <button class="Button Button--primary">Search</button>
</div>
```

---

## Password Input

Toggle password visibility.

<Preview title="Password Input">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label" for="password-input">Password</label>
        <div class="Input-wrapper">
            <input type="password" id="password-input" class="Input Input--withIconTrailing" placeholder="Enter password">
            <button type="button" class="Input-toggle" aria-label="Toggle password visibility" onclick="const input = this.previousElementSibling; const icon = this.querySelector('i'); if(input.type === 'password') { input.type = 'text'; icon.className = 'ph ph-eye-slash'; } else { input.type = 'password'; icon.className = 'ph ph-eye'; }">
                <i class="ph ph-eye"></i>
            </button>
        </div>
    </div>
</Preview>

```html
<div class="Input-wrapper">
    <input type="password" id="password" class="Input Input--withIconTrailing">
    <button type="button" class="Input-toggle" aria-label="Toggle password visibility">
        <i class="ph ph-eye"></i>
    </button>
</div>
```

---

## Input States

Visual feedback for different states.

<Preview title="Input States">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
        <div class="FormField">
            <label class="FormField-label">Default</label>
            <input type="text" class="Input" value="Normal input">
        </div>
        <div class="FormField">
            <label class="FormField-label">Focused</label>
            <input type="text" class="Input" value="Click to focus" style="border-color: var(--accent-primary); box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.1);">
        </div>
        <div class="FormField FormField--error">
            <label class="FormField-label">Error</label>
            <input type="text" class="Input Input--error" value="Invalid value">
            <span class="FormField-message FormField-message--error">
                <i class="ph ph-warning-circle"></i>
                This field is required
            </span>
        </div>
        <div class="FormField FormField--success">
            <label class="FormField-label">Success</label>
            <input type="text" class="Input Input--success" value="Valid input">
            <span class="FormField-message FormField-message--success">
                <i class="ph ph-check-circle"></i>
                Looks good!
            </span>
        </div>
        <div class="FormField">
            <label class="FormField-label">Disabled</label>
            <input type="text" class="Input" value="Cannot edit" disabled>
        </div>
    </div>
</Preview>

```html
<!-- Error state -->
<div class="FormField FormField--error">
    <label class="FormField-label">Email</label>
    <input type="email" class="Input Input--error" value="invalid">
    <span class="FormField-message FormField-message--error">
        <i class="ph ph-warning-circle"></i>
        Please enter a valid email
    </span>
</div>

<!-- Success state -->
<div class="FormField FormField--success">
    <label class="FormField-label">Username</label>
    <input type="text" class="Input Input--success" value="available_name">
    <span class="FormField-message FormField-message--success">
        <i class="ph ph-check-circle"></i>
        Username is available
    </span>
</div>
```

---

## Helper Text

Provide additional context below inputs.

<Preview title="Input with Helper Text">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label" for="helper-input">Email Address</label>
        <input type="email" id="helper-input" class="Input" placeholder="you@example.com">
        <span class="FormField-helper">We'll never share your email with anyone.</span>
    </div>
</Preview>

```html
<div class="FormField">
    <label class="FormField-label" for="email">Email Address</label>
    <input type="email" id="email" class="Input" placeholder="you@example.com">
    <span class="FormField-helper">We'll never share your email.</span>
</div>
```

---

## Character Count

Show remaining characters for limited fields.

<Preview title="Input with Character Count">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label" for="bio-input">Bio</label>
        <input type="text" id="bio-input" class="Input" placeholder="Tell us about yourself" maxlength="100">
        <div class="FormField-footer">
            <span class="FormField-helper">Brief description</span>
            <span class="FormField-count">0/100</span>
        </div>
    </div>
</Preview>

```html
<div class="FormField">
    <label class="FormField-label">Bio</label>
    <input type="text" class="Input" maxlength="100">
    <div class="FormField-footer">
        <span class="FormField-helper">Brief description</span>
        <span class="FormField-count">0/100</span>
    </div>
</div>
```

---

## Required Field

Indicate required fields with an asterisk.

<Preview title="Required Field">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label FormField-label--required" for="required-input">Email</label>
        <input type="email" id="required-input" class="Input" placeholder="you@example.com" required>
    </div>
</Preview>

```html
<div class="FormField">
    <label class="FormField-label FormField-label--required">Email</label>
    <input type="email" class="Input" required>
</div>
```

---

## Textarea

Multi-line text input for longer content.

<Preview title="Basic Textarea">
    <div class="FormField" style="max-width: 400px;">
        <label class="FormField-label" for="textarea-basic">Description</label>
        <textarea id="textarea-basic" class="Textarea" placeholder="Enter a detailed description..." rows="4"></textarea>
    </div>
</Preview>

```html
<div class="FormField">
    <label class="FormField-label" for="description">Description</label>
    <textarea id="description" class="Textarea" placeholder="Enter description..." rows="4"></textarea>
</div>
```

<Preview title="Textarea with Character Count">
    <div class="FormField" style="max-width: 400px;">
        <label class="FormField-label" for="textarea-count">Bio</label>
        <textarea id="textarea-count" class="Textarea" placeholder="Tell us about yourself..." rows="3" maxlength="280"></textarea>
        <div class="FormField-footer">
            <span class="FormField-helper">Brief description for your profile</span>
            <span class="FormField-count">0/280</span>
        </div>
    </div>
</Preview>

<Preview title="Textarea States">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div class="FormField FormField--error">
            <label class="FormField-label">Error State</label>
            <textarea class="Textarea Textarea--error" rows="2">Content with error</textarea>
            <span class="FormField-message FormField-message--error">
                <i class="ph ph-warning-circle"></i>
                Description must be at least 20 characters
            </span>
        </div>
        <div class="FormField">
            <label class="FormField-label">Disabled</label>
            <textarea class="Textarea" rows="2" disabled>Cannot edit this content</textarea>
        </div>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--error" rows="3">...</textarea>
<textarea class="Textarea" rows="3" disabled>...</textarea>
```

---

## Select

Dropdown for choosing from predefined options.

<Preview title="Select">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label" for="select-country">Country</label>
        <select id="select-country" class="Select">
            <option value="">Choose a country...</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Germany</option>
        </select>
    </div>
</Preview>

```html
<select class="Select">
    <option value="">Choose a country...</option>
    <option>United States</option>
    ...
</select>
```

---

## Checkbox

For binary choices or multiple selections.

<Preview title="Checkbox">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Remember me</span>
        </label>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" checked>
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Receive notifications</span>
        </label>
        <label class="Checkbox Checkbox--disabled">
            <input type="checkbox" class="Checkbox-input" disabled>
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Disabled option</span>
        </label>
    </div>
</Preview>

```html
<label class="Checkbox">
    <input type="checkbox" class="Checkbox-input">
    <span class="Checkbox-box"></span>
    <span class="Checkbox-label">Remember me</span>
</label>
```

---

## Checkbox Group

Multiple related checkboxes.

<Preview title="Checkbox Group">
    <fieldset class="FormFieldset">
        <legend class="FormFieldset-legend">Interests</legend>
        <div class="CheckboxGroup">
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input" name="interests" value="design">
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">Design</span>
            </label>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input" name="interests" value="development" checked>
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">Development</span>
            </label>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input" name="interests" value="marketing">
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">Marketing</span>
            </label>
        </div>
    </fieldset>
</Preview>

```html
<fieldset class="FormFieldset">
    <legend class="FormFieldset-legend">Interests</legend>
    <div class="CheckboxGroup">
        <label class="Checkbox">
            <input type="checkbox" name="interests" value="design">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Design</span>
        </label>
        ...
    </div>
</fieldset>
```

---

## Radio Buttons

For single selection from a list.

<Preview title="Radio Buttons">
    <fieldset class="FormFieldset">
        <legend class="FormFieldset-legend">Plan</legend>
        <div class="RadioGroup">
            <label class="Radio">
                <input type="radio" class="Radio-input" name="plan" value="free">
                <span class="Radio-circle"></span>
                <span class="Radio-label">Free</span>
            </label>
            <label class="Radio">
                <input type="radio" class="Radio-input" name="plan" value="pro" checked>
                <span class="Radio-circle"></span>
                <span class="Radio-label">Pro</span>
            </label>
            <label class="Radio">
                <input type="radio" class="Radio-input" name="plan" value="enterprise">
                <span class="Radio-circle"></span>
                <span class="Radio-label">Enterprise</span>
            </label>
        </div>
    </fieldset>
</Preview>

```html
<fieldset class="FormFieldset">
    <legend class="FormFieldset-legend">Plan</legend>
    <div class="RadioGroup">
        <label class="Radio">
            <input type="radio" name="plan" value="free">
            <span class="Radio-circle"></span>
            <span class="Radio-label">Free</span>
        </label>
        ...
    </div>
</fieldset>
```

---

## Indeterminate Checkbox

For "select all" patterns where some items are selected.

<Preview title="Indeterminate Checkbox">
    <div style="max-width: 300px;">
        <label class="Checkbox" style="margin-bottom: var(--space-3); border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--space-3);">
            <input type="checkbox" class="Checkbox-input Checkbox-input--indeterminate">
            <span class="Checkbox-box Checkbox-box--indeterminate"></span>
            <span class="Checkbox-label" style="font-weight: 500;">Select All Files</span>
        </label>
        <div style="padding-left: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3);">
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input" checked>
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">document.pdf</span>
            </label>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input">
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">image.png</span>
            </label>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input" checked>
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">spreadsheet.xlsx</span>
            </label>
        </div>
    </div>
</Preview>

```html
<!-- Indeterminate state set via JavaScript -->
<script>
  checkbox.indeterminate = true;
</script>

<label class="Checkbox">
    <input type="checkbox" class="Checkbox-input">
    <span class="Checkbox-box Checkbox-box--indeterminate"></span>
    <span class="Checkbox-label">Select All</span>
</label>
```

---

## Switch

Toggle switches for on/off settings.

<Preview title="Basic Switch">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <label class="Switch">
            <input type="checkbox" class="Switch-input">
            <span class="Switch-track"></span>
            <span class="Switch-label">Enable notifications</span>
        </label>
        <label class="Switch">
            <input type="checkbox" class="Switch-input" checked>
            <span class="Switch-track"></span>
            <span class="Switch-label">Dark mode</span>
        </label>
        <label class="Switch Switch--disabled">
            <input type="checkbox" class="Switch-input" disabled>
            <span class="Switch-track"></span>
            <span class="Switch-label">Disabled switch</span>
        </label>
    </div>
</Preview>

```html
<label class="Switch">
    <input type="checkbox" class="Switch-input">
    <span class="Switch-track"></span>
    <span class="Switch-label">Enable notifications</span>
</label>
```

<Preview title="Switch with Description">
    <div style="max-width: 400px;">
        <label class="Switch Switch--block">
            <div class="Switch-content">
                <span class="Switch-label">Email notifications</span>
                <span class="Switch-description">Receive email updates about your account activity</span>
            </div>
            <input type="checkbox" class="Switch-input" checked>
            <span class="Switch-track"></span>
        </label>
    </div>
</Preview>

```html
<label class="Switch Switch--block">
    <div class="Switch-content">
        <span class="Switch-label">Email notifications</span>
        <span class="Switch-description">Receive updates about activity</span>
    </div>
    <input type="checkbox" class="Switch-input">
    <span class="Switch-track"></span>
</label>
```

<Preview title="Switch Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <label class="Switch Switch--small">
            <input type="checkbox" class="Switch-input" checked>
            <span class="Switch-track"></span>
            <span class="Switch-label">Small</span>
        </label>
        <label class="Switch">
            <input type="checkbox" class="Switch-input" checked>
            <span class="Switch-track"></span>
            <span class="Switch-label">Medium (default)</span>
        </label>
        <label class="Switch Switch--large">
            <input type="checkbox" class="Switch-input" checked>
            <span class="Switch-track"></span>
            <span class="Switch-label">Large</span>
        </label>
    </div>
</Preview>

---

## File Upload

File input with drag-and-drop zone.

<Preview title="Basic File Input">
    <div class="FormField" style="max-width: 400px;">
        <label class="FormField-label">Attachment</label>
        <div class="FileInput">
            <input type="file" class="FileInput-input" id="file-basic">
            <label for="file-basic" class="FileInput-label">
                <i class="ph ph-upload-simple FileInput-icon"></i>
                <span class="FileInput-text">Choose file or drag here</span>
                <span class="FileInput-hint">PNG, JPG up to 10MB</span>
            </label>
        </div>
    </div>
</Preview>

```html
<div class="FileInput">
    <input type="file" class="FileInput-input" id="file-upload">
    <label for="file-upload" class="FileInput-label">
        <i class="ph ph-upload-simple FileInput-icon"></i>
        <span class="FileInput-text">Choose file or drag here</span>
        <span class="FileInput-hint">PNG, JPG up to 10MB</span>
    </label>
</div>
```

<Preview title="File Upload with Preview">
    <div class="FormField" style="max-width: 400px;">
        <label class="FormField-label">Profile Photo</label>
        <div class="FileInput FileInput--with-preview">
            <div class="FileInput-preview">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=upload" alt="Preview" class="FileInput-image">
            </div>
            <div class="FileInput-content">
                <input type="file" class="FileInput-input" id="file-preview" accept="image/*">
                <label for="file-preview" class="Button Button--secondary Button--small">
                    <i class="ph ph-upload-simple Button-icon"></i>
                    Change Photo
                </label>
                <span class="FileInput-hint">JPG, PNG or GIF. Max 2MB.</span>
            </div>
        </div>
    </div>
</Preview>

<Preview title="Multiple File Upload">
    <div class="FormField" style="max-width: 400px;">
        <label class="FormField-label">Documents</label>
        <div class="FileInput FileInput--multiple">
            <input type="file" class="FileInput-input" id="file-multiple" multiple>
            <label for="file-multiple" class="FileInput-label">
                <i class="ph ph-files FileInput-icon"></i>
                <span class="FileInput-text">Drop files here or click to browse</span>
                <span class="FileInput-hint">Upload multiple files at once</span>
            </label>
        </div>
        <div class="FileInput-list" style="margin-top: var(--space-3);">
            <div class="FileInput-item">
                <i class="ph ph-file-pdf FileInput-item-icon" style="color: oklch(55% 0.2 25);"></i>
                <span class="FileInput-item-name">document.pdf</span>
                <span class="FileInput-item-size">2.4 MB</span>
                <button class="Button Button--icon Button--ghost Button--small" aria-label="Remove file">
                    <i class="ph ph-x"></i>
                </button>
            </div>
            <div class="FileInput-item">
                <i class="ph ph-file-image FileInput-item-icon" style="color: oklch(55% 0.15 150);"></i>
                <span class="FileInput-item-name">photo.jpg</span>
                <span class="FileInput-item-size">1.1 MB</span>
                <button class="Button Button--icon Button--ghost Button--small" aria-label="Remove file">
                    <i class="ph ph-x"></i>
                </button>
            </div>
        </div>
    </div>
</Preview>

---

## Radio Cards

Richer radio selection with descriptions.

<Preview title="Radio Cards">
    <div class="RadioCardGroup" style="max-width: 400px;">
        <label class="RadioCard">
            <input type="radio" name="tier" value="starter" class="RadioCard-input">
            <div class="RadioCard-content">
                <div class="RadioCard-header">
                    <span class="RadioCard-title">Starter</span>
                    <span class="RadioCard-price">$9/mo</span>
                </div>
                <p class="RadioCard-description">Perfect for individuals and small projects.</p>
            </div>
        </label>
        <label class="RadioCard RadioCard--selected">
            <input type="radio" name="tier" value="pro" class="RadioCard-input" checked>
            <div class="RadioCard-content">
                <div class="RadioCard-header">
                    <span class="RadioCard-title">Pro</span>
                    <span class="RadioCard-price">$29/mo</span>
                </div>
                <p class="RadioCard-description">For growing teams with advanced needs.</p>
            </div>
        </label>
        <label class="RadioCard">
            <input type="radio" name="tier" value="enterprise" class="RadioCard-input">
            <div class="RadioCard-content">
                <div class="RadioCard-header">
                    <span class="RadioCard-title">Enterprise</span>
                    <span class="RadioCard-price">Custom</span>
                </div>
                <p class="RadioCard-description">Dedicated support and custom integrations.</p>
            </div>
        </label>
    </div>
</Preview>

```html
<label class="RadioCard">
    <input type="radio" name="tier" value="pro" class="RadioCard-input">
    <div class="RadioCard-content">
        <div class="RadioCard-header">
            <span class="RadioCard-title">Pro</span>
            <span class="RadioCard-price">$29/mo</span>
        </div>
        <p class="RadioCard-description">For growing teams.</p>
    </div>
</label>
```

---

## Form Layouts

### Stacked Form

Default vertical layout.

<Preview title="Stacked Form">
    <form style="max-width: 400px; display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="FormField">
            <label class="FormField-label FormField-label--required">Full Name</label>
            <input type="text" class="Input" placeholder="John Doe">
        </div>
        <div class="FormField">
            <label class="FormField-label FormField-label--required">Email</label>
            <input type="email" class="Input" placeholder="john@example.com">
        </div>
        <div class="FormField">
            <label class="FormField-label">Company</label>
            <input type="text" class="Input" placeholder="Acme Inc">
        </div>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Subscribe to newsletter</span>
        </label>
        <button type="submit" class="Button Button--primary Button--block">Submit</button>
    </form>
</Preview>

### Inline Form

Horizontal layout for compact forms.

<Preview title="Inline Form">
    <form class="FormInline">
        <div class="FormField" style="flex: 1;">
            <input type="email" class="Input" placeholder="Enter your email">
        </div>
        <button type="submit" class="Button Button--primary">Subscribe</button>
    </form>
</Preview>

```html
<form class="FormInline">
    <div class="FormField" style="flex: 1;">
        <input type="email" class="Input" placeholder="Enter your email">
    </div>
    <button type="submit" class="Button Button--primary">Subscribe</button>
</form>
```

### Two-Column Form

Side-by-side fields.

<Preview title="Two-Column Form">
    <form style="max-width: 500px;">
        <div class="FormRow">
            <div class="FormField">
                <label class="FormField-label">First Name</label>
                <input type="text" class="Input" placeholder="John">
            </div>
            <div class="FormField">
                <label class="FormField-label">Last Name</label>
                <input type="text" class="Input" placeholder="Doe">
            </div>
        </div>
        <div class="FormField" style="margin-top: var(--space-4);">
            <label class="FormField-label">Email</label>
            <input type="email" class="Input" placeholder="john.doe@example.com">
        </div>
    </form>
</Preview>

```html
<div class="FormRow">
    <div class="FormField">
        <label class="FormField-label">First Name</label>
        <input type="text" class="Input">
    </div>
    <div class="FormField">
        <label class="FormField-label">Last Name</label>
        <input type="text" class="Input">
    </div>
</div>
```

---

## Real-World Examples

### Login Form

<Preview title="Login Form">
    <div class="Card" style="max-width: 400px; margin: 0 auto;">
        <div class="Card-body">
            <div style="text-align: center; margin-bottom: var(--space-6);">
                <h3 style="margin: 0 0 var(--space-2);">Welcome back</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">Sign in to your account</p>
            </div>
            <form style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Email</label>
                    <div class="Input-wrapper">
                        <i class="ph ph-envelope Input-icon"></i>
                        <input type="email" class="Input Input--withIcon" placeholder="you@example.com">
                    </div>
                </div>
                <div class="FormField">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <label class="FormField-label FormField-label--required">Password</label>
                        <a href="#" class="Link" style="font-size: 0.8rem;">Forgot password?</a>
                    </div>
                    <div class="Input-wrapper">
                        <input type="password" class="Input Input--withIconTrailing" placeholder="••••••••">
                        <button type="button" class="Input-toggle" aria-label="Show password">
                            <i class="ph ph-eye"></i>
                        </button>
                    </div>
                </div>
                <label class="Checkbox">
                    <input type="checkbox" class="Checkbox-input">
                    <span class="Checkbox-box"></span>
                    <span class="Checkbox-label">Remember me for 30 days</span>
                </label>
                <button type="submit" class="Button Button--primary Button--block">Sign In</button>
            </form>
            <div style="text-align: center; margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary); font-size: 0.9rem;">Don't have an account? </span>
                <a href="#" class="Link">Sign up</a>
            </div>
        </div>
    </div>
</Preview>

### Signup Form

<Preview title="Signup Form">
    <div class="Card" style="max-width: 480px; margin: 0 auto;">
        <div class="Card-body">
            <div style="text-align: center; margin-bottom: var(--space-6);">
                <h3 style="margin: 0 0 var(--space-2);">Create your account</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">Start your 14-day free trial</p>
            </div>
            <form style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div class="FormRow">
                    <div class="FormField">
                        <label class="FormField-label FormField-label--required">First name</label>
                        <input type="text" class="Input" placeholder="John">
                    </div>
                    <div class="FormField">
                        <label class="FormField-label FormField-label--required">Last name</label>
                        <input type="text" class="Input" placeholder="Doe">
                    </div>
                </div>
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Email</label>
                    <input type="email" class="Input" placeholder="john@example.com">
                </div>
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Password</label>
                    <input type="password" class="Input" placeholder="Create a strong password">
                    <span class="FormField-helper">Must be at least 8 characters with a number and symbol</span>
                </div>
                <div class="FormField">
                    <label class="FormField-label">Company (optional)</label>
                    <input type="text" class="Input" placeholder="Acme Inc">
                </div>
                <label class="Checkbox">
                    <input type="checkbox" class="Checkbox-input">
                    <span class="Checkbox-box"></span>
                    <span class="Checkbox-label" style="font-size: 0.85rem;">I agree to the <a href="#" class="Link">Terms of Service</a> and <a href="#" class="Link">Privacy Policy</a></span>
                </label>
                <button type="submit" class="Button Button--primary Button--block">Create Account</button>
            </form>
        </div>
    </div>
</Preview>

### Settings Form

<Preview title="Settings Form">
    <form style="max-width: 600px;">
        <fieldset class="FormFieldset" style="margin-bottom: var(--space-6);">
            <legend class="FormFieldset-legend" style="font-size: 1rem; margin-bottom: var(--space-4);">Profile Information</legend>
            <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div class="FileInput FileInput--with-preview">
                    <div class="FileInput-preview">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=settings" alt="Profile" class="Avatar Avatar--large">
                    </div>
                    <div class="FileInput-content">
                        <input type="file" class="FileInput-input" id="settings-avatar" accept="image/*">
                        <label for="settings-avatar" class="Button Button--secondary Button--small">Change Photo</label>
                        <span class="FileInput-hint">JPG or PNG. Max 2MB.</span>
                    </div>
                </div>
                <div class="FormRow">
                    <div class="FormField">
                        <label class="FormField-label">First name</label>
                        <input type="text" class="Input" value="Sarah">
                    </div>
                    <div class="FormField">
                        <label class="FormField-label">Last name</label>
                        <input type="text" class="Input" value="Chen">
                    </div>
                </div>
                <div class="FormField">
                    <label class="FormField-label">Email</label>
                    <input type="email" class="Input" value="sarah@example.com">
                </div>
                <div class="FormField">
                    <label class="FormField-label">Bio</label>
                    <textarea class="Textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
                    <div class="FormField-footer">
                        <span class="FormField-helper">Brief description for your profile</span>
                        <span class="FormField-count">0/160</span>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="FormFieldset" style="margin-bottom: var(--space-6);">
            <legend class="FormFieldset-legend" style="font-size: 1rem; margin-bottom: var(--space-4);">Notifications</legend>
            <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <label class="Switch Switch--block">
                    <div class="Switch-content">
                        <span class="Switch-label">Email notifications</span>
                        <span class="Switch-description">Receive emails about account activity</span>
                    </div>
                    <input type="checkbox" class="Switch-input" checked>
                    <span class="Switch-track"></span>
                </label>
                <label class="Switch Switch--block">
                    <div class="Switch-content">
                        <span class="Switch-label">Push notifications</span>
                        <span class="Switch-description">Receive push notifications on your devices</span>
                    </div>
                    <input type="checkbox" class="Switch-input">
                    <span class="Switch-track"></span>
                </label>
                <label class="Switch Switch--block">
                    <div class="Switch-content">
                        <span class="Switch-label">Marketing emails</span>
                        <span class="Switch-description">Receive news, updates, and promotions</span>
                    </div>
                    <input type="checkbox" class="Switch-input">
                    <span class="Switch-track"></span>
                </label>
            </div>
        </fieldset>
        <fieldset class="FormFieldset" style="margin-bottom: var(--space-6);">
            <legend class="FormFieldset-legend" style="font-size: 1rem; margin-bottom: var(--space-4);">Preferences</legend>
            <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div class="FormField">
                    <label class="FormField-label">Language</label>
                    <select class="Select">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
                <div class="FormField">
                    <label class="FormField-label">Timezone</label>
                    <select class="Select">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                    </select>
                </div>
            </div>
        </fieldset>
        <div style="display: flex; gap: var(--space-3); justify-content: flex-end; padding-top: var(--space-4); border-top: 1px solid var(--border-subtle);">
            <button type="button" class="Button Button--secondary">Cancel</button>
            <button type="submit" class="Button Button--primary">Save Changes</button>
        </div>
    </form>
</Preview>

### Contact Form

<Preview title="Contact Form">
    <form class="Card" style="max-width: 500px;">
        <div class="Card-header">
            <h4 class="Card-title">Get in touch</h4>
        </div>
        <div class="Card-body" style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="FormRow">
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Name</label>
                    <input type="text" class="Input" placeholder="Your name">
                </div>
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Email</label>
                    <input type="email" class="Input" placeholder="you@example.com">
                </div>
            </div>
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Subject</label>
                <select class="Select">
                    <option value="">Select a topic...</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership</option>
                </select>
            </div>
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Message</label>
                <textarea class="Textarea" rows="5" placeholder="How can we help?"></textarea>
            </div>
            <div class="FormField">
                <label class="FormField-label">Attachments (optional)</label>
                <div class="FileInput">
                    <input type="file" class="FileInput-input" id="contact-file" multiple>
                    <label for="contact-file" class="FileInput-label">
                        <i class="ph ph-paperclip FileInput-icon"></i>
                        <span class="FileInput-text">Attach files</span>
                        <span class="FileInput-hint">Max 5 files, 10MB each</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="Card-footer">
            <button type="submit" class="Button Button--primary">
                <i class="ph ph-paper-plane-right Button-icon"></i>
                Send Message
            </button>
        </div>
    </form>
</Preview>

---

## Form Validation

### Client-side Validation Pattern

<Preview title="Validation Example">
    <form style="max-width: 400px; display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="FormField FormField--error">
            <label class="FormField-label FormField-label--required">Email</label>
            <input type="email" class="Input Input--error" value="invalid-email">
            <span class="FormField-message FormField-message--error">
                <i class="ph ph-warning-circle"></i>
                Please enter a valid email address
            </span>
        </div>
        <div class="FormField FormField--success">
            <label class="FormField-label FormField-label--required">Password</label>
            <input type="password" class="Input Input--success" value="••••••••">
            <span class="FormField-message FormField-message--success">
                <i class="ph ph-check-circle"></i>
                Strong password
            </span>
        </div>
        <div class="FormField">
            <label class="FormField-label FormField-label--required">Confirm Password</label>
            <input type="password" class="Input" placeholder="Re-enter password">
        </div>
        <button type="submit" class="Button Button--primary Button--block" disabled>Create Account</button>
    </form>
</Preview>

---

## Accessibility

Forms require careful attention to accessibility.

### Labels
```html
<!-- Always associate labels with inputs -->
<label for="email-field">Email</label>
<input type="email" id="email-field" class="Input">

<!-- Or wrap input in label -->
<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-label">Accept terms</span>
</label>
```

### Error Messages
```html
<!-- Connect error messages to inputs -->
<input 
    type="email" 
    id="email" 
    class="Input Input--error" 
    aria-invalid="true"
    aria-describedby="email-error"
>
<span id="email-error" class="FormField-message FormField-message--error">
    Please enter a valid email
</span>
```

### Required Fields
```html
<!-- Mark required fields -->
<label for="name">
    Name <span aria-hidden="true">*</span>
</label>
<input type="text" id="name" required aria-required="true">
```

### Fieldsets
```html
<!-- Group related fields -->
<fieldset>
    <legend>Shipping Address</legend>
    <!-- address fields -->
</fieldset>
```

---

## CSS Reference

```css
/* Form Field Container */
.FormField {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.FormField-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.FormField-label--required::after {
  content: " *";
  color: oklch(55% 0.2 25);
}

.FormField-helper {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.FormField-message {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 0.8rem;
}

.FormField-message--error {
  color: oklch(55% 0.2 25);
}

.FormField-message--success {
  color: oklch(55% 0.15 150);
}

.FormField-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.FormField-count {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Input */
.Input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--space-1);
  border: 1px solid var(--border-strong);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: all 0.2s;
  outline: none;
}

.Input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.1);
}

.Input--error {
  border-color: oklch(55% 0.2 25);
}
.Input--error:focus {
  box-shadow: 0 0 0 2px oklch(55% 0.2 25 / 0.1);
}

.Input--success {
  border-color: oklch(55% 0.15 150);
}
.Input--success:focus {
  box-shadow: 0 0 0 2px oklch(55% 0.15 150 / 0.1);
}

.Input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--bg-secondary);
}

/* Input Sizes */
.Input--small {
  padding: var(--space-1) var(--space-2);
  font-size: 0.875rem;
}

.Input--large {
  padding: var(--space-3) var(--space-4);
  font-size: 1.1rem;
}

/* Input with Icon */
.Input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.Input-icon {
  position: absolute;
  left: var(--space-3);
  color: var(--text-secondary);
  pointer-events: none;
}

.Input-icon--trailing {
  left: auto;
  right: var(--space-3);
}

.Input--withIcon {
  padding-left: calc(var(--space-3) + 1.5em);
}

.Input--withIconTrailing {
  padding-right: calc(var(--space-3) + 1.5em);
}

.Input-toggle {
  position: absolute;
  right: var(--space-2);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--space-1);
}

/* Input Group */
.Input-group {
  display: flex;
}

.Input--grouped {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.Input-group .Button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Checkbox */
.Checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.Checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-strong);
  border-radius: var(--space-1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.Checkbox-input:checked + .Checkbox-box {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
}

.Checkbox-input:checked + .Checkbox-box::after {
  content: "";
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

.Checkbox-input:focus-visible + .Checkbox-box {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.Checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.Checkbox-label {
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* Radio */
.Radio {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.Radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Radio-circle {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-strong);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.Radio-input:checked + .Radio-circle {
  border-color: var(--accent-primary);
}

.Radio-input:checked + .Radio-circle::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--accent-primary);
  border-radius: 50%;
}

.Radio-input:focus-visible + .Radio-circle {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.Radio-label {
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* Groups */
.CheckboxGroup,
.RadioGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Fieldset */
.FormFieldset {
  border: none;
  padding: 0;
  margin: 0;
}

.FormFieldset-legend {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

/* Radio Cards */
.RadioCardGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.RadioCard {
  display: block;
  padding: var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
  cursor: pointer;
  transition: all 0.15s;
}

.RadioCard:hover {
  border-color: var(--border-strong);
}

.RadioCard-input {
  position: absolute;
  opacity: 0;
}

.RadioCard-input:checked + .RadioCard-content {
  /* Parent styling handled by --selected */
}

.RadioCard--selected,
.RadioCard:has(.RadioCard-input:checked) {
  border-color: var(--accent-primary);
  background-color: oklch(60% 0.15 250 / 0.05);
}

.RadioCard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.RadioCard-title {
  font-weight: 600;
}

.RadioCard-price {
  font-weight: 600;
  color: var(--accent-primary);
}

.RadioCard-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Form Layouts */
.FormInline {
  display: flex;
  gap: var(--space-3);
  align-items: flex-end;
}

.FormRow {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

/* Textarea */
.Textarea {
  width: 100%;
  padding: var(--space-3);
  border-radius: var(--space-1);
  border: 1px solid var(--border-strong);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  min-height: 80px;
  transition: all 0.2s;
  outline: none;
}

.Textarea:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.1);
}

.Textarea--error {
  border-color: oklch(55% 0.2 25);
}

.Textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--bg-secondary);
  resize: none;
}

/* Switch */
.Switch {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
}

.Switch--block {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3);
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
}

.Switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Switch-track {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.Switch-track::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px oklch(0% 0 0 / 0.2);
  transition: transform 0.2s;
}

.Switch-input:checked + .Switch-track {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
}

.Switch-input:checked + .Switch-track::after {
  transform: translateX(20px);
}

.Switch-input:focus-visible + .Switch-track {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.Switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.Switch-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.Switch-content {
  flex: 1;
}

.Switch-description {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-top: var(--space-1);
}

/* Switch Sizes */
.Switch--small .Switch-track {
  width: 36px;
  height: 20px;
}

.Switch--small .Switch-track::after {
  width: 14px;
  height: 14px;
}

.Switch--small .Switch-input:checked + .Switch-track::after {
  transform: translateX(16px);
}

.Switch--large .Switch-track {
  width: 52px;
  height: 28px;
}

.Switch--large .Switch-track::after {
  width: 22px;
  height: 22px;
}

.Switch--large .Switch-input:checked + .Switch-track::after {
  transform: translateX(24px);
}

/* File Input */
.FileInput {
  position: relative;
}

.FileInput-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.FileInput-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  border: 2px dashed var(--border-strong);
  border-radius: var(--space-2);
  background-color: var(--bg-secondary);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.FileInput-label:hover,
.FileInput-input:focus + .FileInput-label {
  border-color: var(--accent-primary);
  background-color: oklch(60% 0.15 250 / 0.05);
}

.FileInput-icon {
  font-size: 2rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

.FileInput-text {
  font-weight: 500;
  color: var(--text-primary);
}

.FileInput-hint {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: var(--space-1);
}

/* File Input with Preview */
.FileInput--with-preview {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.FileInput--with-preview .FileInput-preview {
  flex-shrink: 0;
}

.FileInput--with-preview .FileInput-image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.FileInput--with-preview .FileInput-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* File List */
.FileInput-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.FileInput-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  background-color: var(--bg-secondary);
  border-radius: var(--space-1);
}

.FileInput-item-icon {
  font-size: 1.25rem;
}

.FileInput-item-name {
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
}

.FileInput-item-size {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Indeterminate Checkbox */
.Checkbox-box--indeterminate {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
}

.Checkbox-box--indeterminate::after {
  content: "";
  width: 8px;
  height: 2px;
  background-color: white;
  border: none;
  transform: none;
  margin: 0;
}

/* Select (enhanced) */
.Select {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  padding-right: var(--space-8);
  border-radius: var(--space-1);
  border: 1px solid var(--border-strong);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 256 256'%3E%3Cpath fill='%236b7280' d='M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  transition: all 0.2s;
}

.Select:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.1);
}

.Select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--bg-secondary);
}
```

---

## Best Practices

### Do

- ✓ **Always use labels** — Every input needs an associated label
- ✓ **Show validation inline** — Don't wait for form submission
- ✓ **Mark required fields** — Be explicit about what's needed
- ✓ **Provide helper text** — Explain expected formats
- ✓ **Use appropriate input types** — `email`, `tel`, `url`, etc.

### Don't

- ✗ **Use placeholder as label** — Placeholders disappear on input
- ✗ **Disable submit without explanation** — Tell users why
- ✗ **Red for everything** — Reserve red for errors only
- ✗ **Auto-focus aggressively** — Respect user navigation
- ✗ **Clear forms on error** — Preserve user input
