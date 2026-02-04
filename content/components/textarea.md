# Textarea

Textareas are multi-line text inputs for longer-form content like comments, descriptions, or messages.

## Basic Textarea

A standard multi-line text input.

<Preview title="Basic Textarea">
    <div style="max-width: 400px;">
        <label class="Form-label" for="basic-textarea">Description</label>
        <textarea class="Textarea" id="basic-textarea" rows="4" placeholder="Enter a description..."></textarea>
    </div>
</Preview>

```html
<label class="Form-label" for="basic-textarea">Description</label>
<textarea class="Textarea" id="basic-textarea" rows="4" placeholder="Enter a description..."></textarea>
```

## With Helper Text

Add context or instructions below the textarea.

<Preview title="Textarea with Helper Text">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="helper-textarea">Bio</label>
        <textarea class="Textarea" id="helper-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
        <span class="Form-hint">Maximum 500 characters</span>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label" for="helper-textarea">Bio</label>
    <textarea class="Textarea" id="helper-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
    <span class="Form-hint">Maximum 500 characters</span>
</div>
```

## Character Counter

Show remaining or used character count.

<Preview title="Textarea with Character Counter">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="counter-textarea">Message</label>
        <textarea class="Textarea" id="counter-textarea" rows="4" maxlength="280" placeholder="What's on your mind?"></textarea>
        <div class="Textarea-footer">
            <span class="Form-hint">Be concise and clear</span>
            <span class="Textarea-counter">0 / 280</span>
        </div>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label" for="counter-textarea">Message</label>
    <textarea class="Textarea" id="counter-textarea" rows="4" maxlength="280" placeholder="..."></textarea>
    <div class="Textarea-footer">
        <span class="Form-hint">Be concise and clear</span>
        <span class="Textarea-counter">0 / 280</span>
    </div>
</div>
```

## Sizes

Multiple size variants for different contexts.

<Preview title="Textarea Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div class="Form-group">
            <label class="Form-label">Small</label>
            <textarea class="Textarea Textarea--sm" rows="2" placeholder="Small textarea..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Medium (Default)</label>
            <textarea class="Textarea" rows="3" placeholder="Medium textarea..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Large</label>
            <textarea class="Textarea Textarea--lg" rows="4" placeholder="Large textarea..."></textarea>
        </div>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--sm" rows="2">Small</textarea>
<textarea class="Textarea" rows="3">Medium (default)</textarea>
<textarea class="Textarea Textarea--lg" rows="4">Large</textarea>
```

## States

Different visual states for validation and interaction.

<Preview title="Textarea States">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div class="Form-group">
            <label class="Form-label">Default</label>
            <textarea class="Textarea" rows="2" placeholder="Default state..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Focused</label>
            <textarea class="Textarea Textarea--focus" rows="2" placeholder="Focused state..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Error</label>
            <textarea class="Textarea Textarea--error" rows="2" placeholder="Error state..."></textarea>
            <span class="Form-error">This field is required</span>
        </div>
        <div class="Form-group">
            <label class="Form-label">Success</label>
            <textarea class="Textarea Textarea--success" rows="2" placeholder="Success state...">Valid content here</textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Disabled</label>
            <textarea class="Textarea" rows="2" disabled placeholder="Disabled state...">Cannot edit this</textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Read-only</label>
            <textarea class="Textarea" rows="2" readonly>This content is read-only</textarea>
        </div>
    </div>
</Preview>

```html
<textarea class="Textarea">Default</textarea>
<textarea class="Textarea Textarea--error">Error state</textarea>
<textarea class="Textarea Textarea--success">Success state</textarea>
<textarea class="Textarea" disabled>Disabled</textarea>
<textarea class="Textarea" readonly>Read-only</textarea>
```

## Auto-resize

Textareas that grow with content.

<Preview title="Auto-resize Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="autoresize-textarea">Notes</label>
        <textarea class="Textarea Textarea--autoresize" id="autoresize-textarea" rows="2" placeholder="Start typing... the textarea will grow"></textarea>
        <span class="Form-hint">Textarea expands as you type</span>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--autoresize" rows="2" placeholder="..."></textarea>

<script>
// Auto-resize implementation
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});
</script>
```

## With Toolbar

Add formatting controls above the textarea.

<Preview title="Textarea with Toolbar">
    <div class="Textarea-wrapper" style="max-width: 500px;">
        <div class="Textarea-toolbar">
            <button type="button" class="Textarea-toolbar-btn" title="Bold">
                <i class="ph ph-text-bolder"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Italic">
                <i class="ph ph-text-italic"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Underline">
                <i class="ph ph-text-underline"></i>
            </button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="Link">
                <i class="ph ph-link"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Image">
                <i class="ph ph-image"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Code">
                <i class="ph ph-code"></i>
            </button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="List">
                <i class="ph ph-list-bullets"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Quote">
                <i class="ph ph-quotes"></i>
            </button>
        </div>
        <textarea class="Textarea Textarea--no-top-radius" rows="6" placeholder="Write your content here..."></textarea>
    </div>
</Preview>

```html
<div class="Textarea-wrapper">
    <div class="Textarea-toolbar">
        <button type="button" class="Textarea-toolbar-btn" title="Bold">
            <i class="ph ph-text-bolder"></i>
        </button>
        <button type="button" class="Textarea-toolbar-btn" title="Italic">
            <i class="ph ph-text-italic"></i>
        </button>
        ...
    </div>
    <textarea class="Textarea Textarea--no-top-radius" rows="6"></textarea>
</div>
```

## With Action Bar

Add actions below the textarea for submit or attachments.

<Preview title="Textarea with Action Bar">
    <div class="Textarea-wrapper" style="max-width: 500px;">
        <textarea class="Textarea Textarea--no-bottom-radius" rows="4" placeholder="Write a comment..."></textarea>
        <div class="Textarea-actions">
            <div class="Textarea-actions-left">
                <button type="button" class="Textarea-action-btn" title="Attach file">
                    <i class="ph ph-paperclip"></i>
                </button>
                <button type="button" class="Textarea-action-btn" title="Add emoji">
                    <i class="ph ph-smiley"></i>
                </button>
                <button type="button" class="Textarea-action-btn" title="Mention">
                    <i class="ph ph-at"></i>
                </button>
            </div>
            <button type="submit" class="Button Button--primary Button--sm">
                Post Comment
            </button>
        </div>
    </div>
</Preview>

```html
<div class="Textarea-wrapper">
    <textarea class="Textarea Textarea--no-bottom-radius" rows="4"></textarea>
    <div class="Textarea-actions">
        <div class="Textarea-actions-left">
            <button type="button" class="Textarea-action-btn">
                <i class="ph ph-paperclip"></i>
            </button>
            ...
        </div>
        <button type="submit" class="Button Button--primary Button--sm">
            Post Comment
        </button>
    </div>
</div>
```

## No Resize

Disable user resizing.

<Preview title="Non-resizable Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="noresize-textarea">Fixed Size</label>
        <textarea class="Textarea Textarea--no-resize" id="noresize-textarea" rows="4" placeholder="This textarea cannot be resized..."></textarea>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--no-resize" rows="4"></textarea>
```

## Horizontal Resize Only

Allow only horizontal resizing.

<Preview title="Horizontal Resize Only">
    <div class="Form-group" style="max-width: 600px;">
        <label class="Form-label">Adjustable Width</label>
        <textarea class="Textarea Textarea--resize-horizontal" rows="3" placeholder="Drag the corner to resize horizontally..."></textarea>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--resize-horizontal" rows="3"></textarea>
```

## Required Field

Mark textarea as required with visual indicator.

<Preview title="Required Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label">
            Feedback
            <span class="Form-required">*</span>
        </label>
        <textarea class="Textarea" rows="4" required placeholder="Please share your feedback..."></textarea>
        <span class="Form-hint">Required field</span>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label">
        Feedback
        <span class="Form-required">*</span>
    </label>
    <textarea class="Textarea" rows="4" required></textarea>
</div>
```

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Textarea` | Base textarea styling |
| `.Textarea--sm` | Small size variant |
| `.Textarea--lg` | Large size variant |
| `.Textarea--focus` | Forced focus state (for demos) |
| `.Textarea--error` | Error state styling |
| `.Textarea--success` | Success/valid state styling |
| `.Textarea--autoresize` | Auto-growing textarea |
| `.Textarea--no-resize` | Disables user resizing |
| `.Textarea--resize-horizontal` | Horizontal resize only |
| `.Textarea--no-top-radius` | Removes top border radius (for toolbar) |
| `.Textarea--no-bottom-radius` | Removes bottom border radius (for action bar) |
| `.Textarea-wrapper` | Container for textarea + toolbar/actions |
| `.Textarea-toolbar` | Formatting toolbar above textarea |
| `.Textarea-toolbar-btn` | Toolbar button |
| `.Textarea-toolbar-divider` | Divider between toolbar groups |
| `.Textarea-actions` | Action bar below textarea |
| `.Textarea-actions-left` | Left-aligned actions |
| `.Textarea-action-btn` | Action bar button |
| `.Textarea-footer` | Footer with counter/hint |
| `.Textarea-counter` | Character counter |

</div>

## Accessibility

- Always associate textareas with labels using `for` and `id`
- Use `aria-describedby` to link helper text and error messages
- Provide clear placeholder text that disappears on focus
- Ensure error states are announced to screen readers
- Support keyboard navigation (Tab to focus, standard text editing)
- Use `aria-invalid="true"` for error states
- Include `maxlength` attribute when character limits apply
- Announce character count updates to screen readers with `aria-live="polite"`
- Ensure toolbar buttons have descriptive `title` or `aria-label` attributes
