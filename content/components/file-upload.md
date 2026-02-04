# File Upload

Upload files via drag-and-drop or file browser. Supports single and multiple files with progress indicators, previews, and validation.

---

## Installation

File Upload uses Carbon's base styles and JavaScript for drag-and-drop interactions.

```html
<link rel="stylesheet" href="/css/carbon.css">
<script src="/js/carbon.js" defer></script>
```

---

## Usage

### Basic Drop Zone

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">PNG, JPG, GIF up to 10MB</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### Multiple Files

Add `multiple` to accept multiple files.

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">Up to 5 files, 10MB each</p>
      <input type="file" class="FileUpload-input" multiple />
    </div>
  </div>
</Preview>

---

## Variants

### Compact

Smaller drop zone for inline usage.

<Preview>
  <div class="FileUpload FileUpload--compact">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <span class="FileUpload-text">
        <span class="FileUpload-link">Upload file</span>
      </span>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### With Border

More prominent border style.

<Preview>
  <div class="FileUpload FileUpload--bordered">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      <input type="file" class="FileUpload-input" accept="image/*" />
    </div>
  </div>
</Preview>

### Image Preview

Shows thumbnail preview for uploaded images.

<Preview>
  <div class="FileUpload FileUpload--preview">
    <div class="FileUpload-dropzone">
      <div class="FileUpload-preview">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect fill='%23e5e7eb' width='120' height='120'/%3E%3Cpath fill='%239ca3af' d='M45 50h30v20H45z'/%3E%3Ccircle fill='%239ca3af' cx='52' cy='45' r='5'/%3E%3C/svg%3E" alt="Preview" class="FileUpload-thumbnail" />
      </div>
      <div class="FileUpload-content">
        <p class="FileUpload-text">
          <span class="FileUpload-link">Change image</span>
        </p>
        <p class="FileUpload-hint">PNG, JPG up to 5MB</p>
      </div>
      <input type="file" class="FileUpload-input" accept="image/*" />
    </div>
  </div>
</Preview>

---

## File List

Display uploaded files with actions.

### Basic File List

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text"><span class="FileUpload-link">Add more files</span></p>
      <input type="file" class="FileUpload-input" multiple />
    </div>
    <ul class="FileUpload-list">
      <li class="FileUpload-item">
        <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        <div class="FileUpload-itemInfo">
          <span class="FileUpload-itemName">document.pdf</span>
          <span class="FileUpload-itemSize">2.4 MB</span>
        </div>
        <button class="FileUpload-itemRemove" aria-label="Remove file">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </li>
      <li class="FileUpload-item">
        <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <div class="FileUpload-itemInfo">
          <span class="FileUpload-itemName">photo.jpg</span>
          <span class="FileUpload-itemSize">1.2 MB</span>
        </div>
        <button class="FileUpload-itemRemove" aria-label="Remove file">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</Preview>

### With Progress

Show upload progress for each file.

<Preview>
  <ul class="FileUpload-list">
    <li class="FileUpload-item FileUpload-item--uploading">
      <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">large-video.mp4</span>
        <div class="FileUpload-progress">
          <div class="FileUpload-progressBar" style="width: 65%"></div>
        </div>
        <span class="FileUpload-itemSize">65% · 12.4 MB of 19.1 MB</span>
      </div>
      <button class="FileUpload-itemRemove" aria-label="Cancel upload">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </li>
    <li class="FileUpload-item FileUpload-item--complete">
      <svg class="FileUpload-itemIcon FileUpload-itemIcon--success" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">report.pdf</span>
        <span class="FileUpload-itemSize">Complete · 4.2 MB</span>
      </div>
      <button class="FileUpload-itemRemove" aria-label="Remove file">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </li>
    <li class="FileUpload-item FileUpload-item--error">
      <svg class="FileUpload-itemIcon FileUpload-itemIcon--error" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">corrupted.zip</span>
        <span class="FileUpload-itemSize FileUpload-itemSize--error">Upload failed · File corrupted</span>
      </div>
      <button class="FileUpload-itemRetry" aria-label="Retry upload">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      </button>
    </li>
  </ul>
</Preview>

---

## States

### Drag Over

Active state when files are dragged over the drop zone.

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone is-dragover">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">Drop files here</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### Disabled

<Preview>
  <div class="FileUpload FileUpload--disabled">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">Upload disabled</p>
      <p class="FileUpload-hint">Contact admin for access</p>
      <input type="file" class="FileUpload-input" disabled />
    </div>
  </div>
</Preview>

### Error

<Preview>
  <div class="FileUpload FileUpload--error">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p class="FileUpload-text">File too large</p>
      <p class="FileUpload-hint">Maximum file size is 10MB</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

---

## Customization

### CSS Variables

```css
.FileUpload {
  /* Dropzone */
  --file-upload-bg: var(--surface-1);
  --file-upload-border: var(--border-default);
  --file-upload-border-hover: var(--border-strong);
  --file-upload-border-active: var(--color-primary);
  --file-upload-radius: var(--radius-lg);
  --file-upload-padding: var(--space-8);

  /* Colors */
  --file-upload-icon-color: var(--text-muted);
  --file-upload-text-color: var(--text-default);
  --file-upload-hint-color: var(--text-muted);
  --file-upload-link-color: var(--color-primary);

  /* Progress */
  --file-upload-progress-bg: var(--surface-2);
  --file-upload-progress-fill: var(--color-primary);

  /* States */
  --file-upload-error-color: var(--color-error);
  --file-upload-success-color: var(--color-success);
}
```

### Custom Styling Example

```css
/* Circular avatar upload */
.FileUpload--avatar .FileUpload-dropzone {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: var(--space-4);
}

.FileUpload--avatar .FileUpload-preview {
  border-radius: 50%;
  overflow: hidden;
}
```

---

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.FileUpload` | Base container |
| `.FileUpload--compact` | Smaller, inline variant |
| `.FileUpload--bordered` | Solid border style |
| `.FileUpload--preview` | Image preview layout |
| `.FileUpload--disabled` | Disabled state |
| `.FileUpload--error` | Error state |
| `.FileUpload-dropzone` | Drop target area |
| `.FileUpload-dropzone.is-dragover` | Active drag state |
| `.FileUpload-input` | Hidden file input |
| `.FileUpload-icon` | Upload icon |
| `.FileUpload-text` | Main instruction text |
| `.FileUpload-link` | Clickable upload trigger |
| `.FileUpload-hint` | Help text (file types, size) |
| `.FileUpload-preview` | Image thumbnail container |
| `.FileUpload-thumbnail` | Preview image |
| `.FileUpload-list` | File list container |
| `.FileUpload-item` | Individual file row |
| `.FileUpload-item--uploading` | Upload in progress |
| `.FileUpload-item--complete` | Upload complete |
| `.FileUpload-item--error` | Upload failed |
| `.FileUpload-itemIcon` | File type icon |
| `.FileUpload-itemInfo` | File name and size container |
| `.FileUpload-itemName` | File name |
| `.FileUpload-itemSize` | File size / status |
| `.FileUpload-progress` | Progress bar container |
| `.FileUpload-progressBar` | Progress bar fill |
| `.FileUpload-itemRemove` | Remove/cancel button |
| `.FileUpload-itemRetry` | Retry button |

</div>

---

## Accessibility

- Use `aria-label` on remove/retry buttons
- Add `aria-describedby` linking to hint text
- Announce upload progress to screen readers via `aria-live`
- Ensure keyboard access to drop zone via the file input
- Provide clear error messages for validation failures

### Keyboard Support

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Open file browser (when focused) |
| `Delete` | Remove focused file from list |
| `Tab` | Navigate between files and actions |

---

## Best Practices

<div class="DoDont">
  <div class="Do">
    <h4>✓ Do</h4>
    <ul>
      <li>Show accepted file types and size limits</li>
      <li>Display upload progress for large files</li>
      <li>Allow retry for failed uploads</li>
      <li>Show image previews when appropriate</li>
      <li>Provide clear error messages</li>
    </ul>
  </div>
  <div class="Dont">
    <h4>✗ Don't</h4>
    <ul>
      <li>Allow uploads without size limits</li>
      <li>Remove files without confirmation</li>
      <li>Hide the file list when processing</li>
      <li>Use vague error messages like "Upload failed"</li>
      <li>Auto-upload on selection without user control</li>
    </ul>
  </div>
</div>
