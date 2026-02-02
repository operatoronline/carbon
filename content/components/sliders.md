# Sliders

Sliders allow users to select a value or range from a continuous or discrete set of values by moving a handle along a track.

---

## Basic Slider

A simple range input with Carbon styling.

<Preview title="Basic Slider">
    <div style="width: 100%; max-width: 320px;">
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<input type="range" class="Slider" min="0" max="100" value="50">
```

---

## With Labels

Add min/max labels for context.

<Preview title="Slider with Labels">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Slider-labels">
            <span>0</span>
            <span>100</span>
        </div>
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<div class="Slider-container">
    <div class="Slider-labels">
        <span>0</span>
        <span>100</span>
    </div>
    <input type="range" class="Slider" min="0" max="100" value="50">
</div>
```

---

## With Value Display

Show the current value alongside the slider.

<Preview title="Slider with Value">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Layout-split" style="margin-bottom: var(--space-2);">
            <label style="font-weight: 500;">Volume</label>
            <span class="Slider-value">50%</span>
        </div>
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<div class="Slider-container">
    <div class="Layout-split">
        <label>Volume</label>
        <span class="Slider-value">50%</span>
    </div>
    <input type="range" class="Slider" min="0" max="100" value="50">
</div>
```

```javascript
// Update value display
const slider = document.querySelector('.Slider');
const display = document.querySelector('.Slider-value');
slider.addEventListener('input', () => {
    display.textContent = slider.value + '%';
});
```

---

## Discrete Steps

Use the `step` attribute for predefined increments.

<Preview title="Stepped Slider">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Layout-split" style="margin-bottom: var(--space-2);">
            <label style="font-weight: 500;">Quality</label>
            <span class="Slider-value">Medium</span>
        </div>
        <input type="range" class="Slider" min="1" max="5" step="1" value="3">
        <div class="Slider-ticks">
            <span>Low</span>
            <span></span>
            <span>Med</span>
            <span></span>
            <span>High</span>
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider" min="1" max="5" step="1" value="3">
<div class="Slider-ticks">
    <span>Low</span>
    <span></span>
    <span>Med</span>
    <span></span>
    <span>High</span>
</div>
```

---

## Sizes

<Preview title="Slider Sizes">
    <div class="Layout-stack" style="max-width: 320px;">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Small</small>
            <input type="range" class="Slider Slider--small" min="0" max="100" value="30">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Default</small>
            <input type="range" class="Slider" min="0" max="100" value="50">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Large</small>
            <input type="range" class="Slider Slider--large" min="0" max="100" value="70">
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider Slider--small" ...>
<input type="range" class="Slider" ...>
<input type="range" class="Slider Slider--large" ...>
```

---

## Color Variants

<Preview title="Colored Sliders">
    <div class="Layout-stack" style="max-width: 320px;">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Default (Accent)</small>
            <input type="range" class="Slider" min="0" max="100" value="60">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Success</small>
            <input type="range" class="Slider Slider--success" min="0" max="100" value="80">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Warning</small>
            <input type="range" class="Slider Slider--warning" min="0" max="100" value="40">
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Error</small>
            <input type="range" class="Slider Slider--error" min="0" max="100" value="20">
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider Slider--success" ...>
<input type="range" class="Slider Slider--warning" ...>
<input type="range" class="Slider Slider--error" ...>
```

---

## Disabled State

<Preview title="Disabled Slider">
    <div style="max-width: 320px;">
        <input type="range" class="Slider" min="0" max="100" value="50" disabled>
    </div>
</Preview>

```html
<input type="range" class="Slider" min="0" max="100" value="50" disabled>
```

---

## In Forms

Common slider use cases in forms.

<Preview title="Settings Form">
    <div class="Layout-stack" style="max-width: 400px; padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--space-2);">
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Brightness</label>
                <span style="color: var(--text-secondary);">75%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="75">
        </div>
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Contrast</label>
                <span style="color: var(--text-secondary);">50%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="50">
        </div>
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Saturation</label>
                <span style="color: var(--text-secondary);">60%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="60">
        </div>
    </div>
</Preview>

### Price Range Filter

<Preview title="Price Range">
    <div style="max-width: 320px; padding: var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--space-2);">
        <div style="font-weight: 600; margin-bottom: var(--space-3);">Price Range</div>
        <div class="Layout-split" style="margin-bottom: var(--space-3);">
            <div>
                <small style="color: var(--text-secondary);">Min</small>
                <div style="font-size: 1.25rem; font-weight: 600;">$25</div>
            </div>
            <div style="text-align: right;">
                <small style="color: var(--text-secondary);">Max</small>
                <div style="font-size: 1.25rem; font-weight: 600;">$150</div>
            </div>
        </div>
        <input type="range" class="Slider" min="0" max="200" value="150">
        <div class="Slider-labels" style="margin-top: var(--space-1);">
            <span style="font-size: 0.75rem; color: var(--text-secondary);">$0</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary);">$200</span>
        </div>
    </div>
</Preview>

---

## Accessibility

Native range inputs are accessible by default:

- **Keyboard support** — Arrow keys adjust value
- **Screen readers** — Value is announced
- **Focus visible** — Clear focus indicator

Enhance with ARIA when needed:

```html
<label for="volume-slider">Volume</label>
<input 
    type="range" 
    id="volume-slider"
    class="Slider" 
    min="0" 
    max="100" 
    value="50"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
    aria-valuetext="50 percent"
>
```

For custom implementations, ensure:
- Focusable thumb element
- Arrow key navigation
- Value announcement on change

---

## CSS Reference

```css
/* Base slider */
.Slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: var(--border-subtle);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

/* Track - WebKit */
.Slider::-webkit-slider-runnable-track {
  height: 6px;
  background: var(--border-subtle);
  border-radius: 3px;
}

/* Thumb - WebKit */
.Slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: var(--accent-primary);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  box-shadow: 0 2px 4px oklch(0% 0 0 / 0.2);
  transition: transform 0.15s, box-shadow 0.15s;
}

.Slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.Slider::-webkit-slider-thumb:active {
  transform: scale(0.95);
  box-shadow: 0 1px 2px oklch(0% 0 0 / 0.2);
}

/* Thumb - Firefox */
.Slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--accent-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px oklch(0% 0 0 / 0.2);
}

/* Focus */
.Slider:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Disabled */
.Slider:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.Slider--small { height: 4px; }
.Slider--small::-webkit-slider-thumb { width: 14px; height: 14px; margin-top: -5px; }
.Slider--large { height: 8px; }
.Slider--large::-webkit-slider-thumb { width: 22px; height: 22px; margin-top: -7px; }

/* Color variants */
.Slider--success::-webkit-slider-thumb { background: oklch(55% 0.15 150); }
.Slider--warning::-webkit-slider-thumb { background: oklch(70% 0.15 80); }
.Slider--error::-webkit-slider-thumb { background: oklch(55% 0.2 25); }

/* Container helpers */
.Slider-container {
  width: 100%;
}

.Slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-1);
}

.Slider-ticks {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: var(--space-1);
}

.Slider-value {
  font-weight: 600;
  color: var(--text-primary);
  min-width: 3ch;
  text-align: right;
}
```

---

## Best Practices

### Do

- ✓ **Show the current value** — Users need feedback
- ✓ **Use appropriate ranges** — Match real-world constraints
- ✓ **Add labels** — Context helps users understand the scale
- ✓ **Consider steps** — Discrete values are often easier to use

### Don't

- ✗ **Use for precise input** — Text inputs are better for exact values
- ✗ **Hide the scale** — Users need to understand the range
- ✗ **Make the thumb too small** — Touch targets need adequate size
- ✗ **Forget keyboard users** — Native inputs handle this automatically
