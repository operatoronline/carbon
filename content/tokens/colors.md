# Colors

Carbon uses **OKLCH** — a perceptually uniform color space that produces consistent, harmonious colors across your entire palette.

## Why OKLCH?

Traditional color models (HSL, RGB) have a fundamental problem: two colors with the same "lightness" value can appear drastically different in brightness. OKLCH solves this.

<Preview title="OKLCH vs HSL Comparison">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">HSL: Same L (50%), different perceived brightness</small>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: hsl(60, 100%, 50%); padding: var(--space-4); border-radius: var(--space-1); flex: 1; text-align: center; color: black;">Yellow</div>
                <div style="background: hsl(240, 100%, 50%); padding: var(--space-4); border-radius: var(--space-1); flex: 1; text-align: center; color: white;">Blue</div>
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">OKLCH: Same L (70%), consistent perceived brightness</small>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: oklch(70% 0.15 90); padding: var(--space-4); border-radius: var(--space-1); flex: 1; text-align: center; color: black;">Yellow</div>
                <div style="background: oklch(70% 0.15 250); padding: var(--space-4); border-radius: var(--space-1); flex: 1; text-align: center; color: black;">Blue</div>
            </div>
        </div>
    </div>
</Preview>

### OKLCH Values

```css
oklch(L C H)
/* L = Lightness (0-100%) — perceptual brightness */
/* C = Chroma (0-0.4) — color intensity/saturation */
/* H = Hue (0-360) — color angle on the wheel */
```

| Component | Range | Description |
|-----------|-------|-------------|
| **L** (Lightness) | 0% – 100% | 0% = black, 100% = white |
| **C** (Chroma) | 0 – ~0.4 | 0 = gray, higher = more vivid |
| **H** (Hue) | 0 – 360 | Color wheel angle |

---

## Core Palette

### Backgrounds

Surface colors for pages and components.

<Preview title="Background Colors">
    <div style="display: flex; gap: var(--space-4); width: 100%;">
        <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-2);">
            <div style="background: var(--bg-primary); padding: var(--space-6); border: 1px solid var(--border-subtle); border-radius: var(--space-2);">
                <strong>Primary</strong>
                <code style="display: block; margin-top: var(--space-1); font-size: 0.8em;">--bg-primary</code>
            </div>
            <div style="background: var(--bg-secondary); padding: var(--space-6); border: 1px solid var(--border-subtle); border-radius: var(--space-2);">
                <strong>Secondary</strong>
                <code style="display: block; margin-top: var(--space-1); font-size: 0.8em;">--bg-secondary</code>
            </div>
        </div>
    </div>
</Preview>

```css
:root {
  --bg-primary: oklch(100% 0 0);   /* Pure white */
  --bg-secondary: oklch(98% 0 0); /* Subtle off-white */
}

[data-theme="dark"] {
  --bg-primary: oklch(15% 0 0);   /* Near black */
  --bg-secondary: oklch(18% 0 0); /* Slightly lighter */
}
```

### Text

Typography colors with clear hierarchy.

<Preview title="Text Colors">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div>
            <span style="color: var(--text-primary); font-size: 1.25rem; font-weight: 600;">Primary Text</span>
            <code style="margin-left: var(--space-2); font-size: 0.8em;">--text-primary</code>
        </div>
        <div>
            <span style="color: var(--text-secondary);">Secondary Text — used for descriptions and supporting content</span>
            <code style="margin-left: var(--space-2); font-size: 0.8em;">--text-secondary</code>
        </div>
    </div>
</Preview>

```css
:root {
  --text-primary: oklch(20% 0 0);   /* Near black */
  --text-secondary: oklch(45% 0 0); /* Medium gray */
}

[data-theme="dark"] {
  --text-primary: oklch(95% 0 0);   /* Near white */
  --text-secondary: oklch(75% 0 0); /* Light gray */
}
```

### Borders

Subtle and strong borders for structure and emphasis.

<Preview title="Border Colors">
    <div style="display: flex; gap: var(--space-4); width: 100%;">
        <div style="flex: 1; padding: var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--space-2); text-align: center;">
            <strong>Subtle</strong>
            <code style="display: block; margin-top: var(--space-1); font-size: 0.8em;">--border-subtle</code>
        </div>
        <div style="flex: 1; padding: var(--space-4); border: 2px solid var(--border-strong); border-radius: var(--space-2); text-align: center;">
            <strong>Strong</strong>
            <code style="display: block; margin-top: var(--space-1); font-size: 0.8em;">--border-strong</code>
        </div>
    </div>
</Preview>

```css
:root {
  --border-subtle: oklch(92% 0 0); /* Light dividers */
  --border-strong: oklch(85% 0 0); /* Input borders, emphasis */
}

[data-theme="dark"] {
  --border-subtle: oklch(25% 0 0);
  --border-strong: oklch(35% 0 0);
}
```

### Accent

The primary brand color — used sparingly for actions, links, and focus states.

<Preview title="Accent Color">
    <div style="display: flex; gap: var(--space-4); align-items: center;">
        <div style="background: var(--accent-primary); color: white; padding: var(--space-4) var(--space-6); border-radius: var(--space-2); font-weight: 600;">
            Accent Primary
        </div>
        <a href="#" class="Link" onclick="return false;">Accent as link</a>
    </div>
</Preview>

```css
:root {
  --accent-primary: oklch(60% 0.15 250); /* Refined blue */
}

[data-theme="dark"] {
  --accent-primary: oklch(70% 0.15 250); /* Brighter for dark bg */
}
```

---

## Semantic Colors

Feedback colors communicate status and meaning. These follow OKLCH principles for consistent brightness.

<Preview title="Semantic Color Palette">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4); width: 100%;">
        <div style="background: oklch(55% 0.15 150); color: white; padding: var(--space-4); border-radius: var(--space-2);">
            <strong>Success</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(55% 0.15 150)</div>
        </div>
        <div style="background: oklch(70% 0.15 80); color: black; padding: var(--space-4); border-radius: var(--space-2);">
            <strong>Warning</strong>
            <div style="font-size: 0.85em; opacity: 0.8; margin-top: var(--space-1);">oklch(70% 0.15 80)</div>
        </div>
        <div style="background: oklch(55% 0.2 25); color: white; padding: var(--space-4); border-radius: var(--space-2);">
            <strong>Error</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(55% 0.2 25)</div>
        </div>
        <div style="background: oklch(60% 0.15 250); color: white; padding: var(--space-4); border-radius: var(--space-2);">
            <strong>Info</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(60% 0.15 250)</div>
        </div>
    </div>
</Preview>

### Usage in Components

Semantic colors are used in Alerts, Badges, Toasts, and Progress indicators:

```css
/* Solid backgrounds */
.Badge--success { background: oklch(55% 0.15 150); }
.Badge--warning { background: oklch(70% 0.15 80); }
.Badge--error { background: oklch(55% 0.2 25); }

/* Subtle backgrounds (10% opacity) */
.Alert--success { background: oklch(55% 0.15 150 / 0.1); }
.Alert--warning { background: oklch(70% 0.15 80 / 0.1); }
.Alert--error { background: oklch(55% 0.2 25 / 0.1); }

/* Text colors (same hue, adjusted lightness) */
.text-success { color: oklch(45% 0.15 150); }
.text-warning { color: oklch(55% 0.15 80); }
.text-error { color: oklch(50% 0.2 25); }
```

---

## Dark Mode

Carbon supports automatic dark mode via the `data-theme="dark"` attribute on the root element.

<Preview title="Theme Toggle">
    <div style="display: flex; gap: var(--space-4);">
        <button class="Button Button--primary" onclick="document.documentElement.setAttribute('data-theme', 'light')">
            <i class="ph ph-sun"></i> Light
        </button>
        <button class="Button Button--primary" onclick="document.documentElement.setAttribute('data-theme', 'dark')">
            <i class="ph ph-moon"></i> Dark
        </button>
    </div>
</Preview>

### Implementation

```html
<!-- Set theme on document root -->
<html data-theme="dark">
```

```javascript
// Toggle theme
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Respect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
```

### All Tokens by Theme

| Token | Light | Dark |
|-------|-------|------|
| `--bg-primary` | oklch(100% 0 0) | oklch(15% 0 0) |
| `--bg-secondary` | oklch(98% 0 0) | oklch(18% 0 0) |
| `--text-primary` | oklch(20% 0 0) | oklch(95% 0 0) |
| `--text-secondary` | oklch(45% 0 0) | oklch(75% 0 0) |
| `--border-subtle` | oklch(92% 0 0) | oklch(25% 0 0) |
| `--border-strong` | oklch(85% 0 0) | oklch(35% 0 0) |
| `--accent-primary` | oklch(60% 0.15 250) | oklch(70% 0.15 250) |

---

## Accessibility

### Contrast Requirements

WCAG 2.1 requires minimum contrast ratios:
- **4.5:1** for normal text (AA)
- **3:1** for large text and UI components (AA)
- **7:1** for normal text (AAA)

<Preview title="Contrast Check">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--space-1);">
            <span style="color: var(--text-primary);">Primary on Primary BG</span>
            <span class="Badge Badge--success">✓ 15.8:1</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--space-1);">
            <span style="color: var(--text-secondary);">Secondary on Primary BG</span>
            <span class="Badge Badge--success">✓ 5.9:1</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--accent-primary); border-radius: var(--space-1);">
            <span style="color: white;">White on Accent</span>
            <span class="Badge" style="background: white; color: var(--accent-primary);">✓ 4.6:1</span>
        </div>
    </div>
</Preview>

### Tips for Accessible Color Usage

1. **Never rely on color alone** — Use icons, patterns, or text labels alongside color
2. **Test with grayscale** — Your hierarchy should work without color
3. **Check both themes** — Verify contrast in light AND dark modes
4. **Use semantic colors consistently** — Red = error, green = success, etc.

---

## Extending the Palette

To add custom colors while maintaining OKLCH harmony:

```css
:root {
  /* Start with your desired hue */
  --brand-hue: 280; /* Purple */
  
  /* Build a consistent scale */
  --brand-50: oklch(97% 0.02 var(--brand-hue));
  --brand-100: oklch(94% 0.04 var(--brand-hue));
  --brand-200: oklch(88% 0.08 var(--brand-hue));
  --brand-300: oklch(80% 0.12 var(--brand-hue));
  --brand-400: oklch(70% 0.14 var(--brand-hue));
  --brand-500: oklch(60% 0.15 var(--brand-hue)); /* Base */
  --brand-600: oklch(50% 0.14 var(--brand-hue));
  --brand-700: oklch(40% 0.12 var(--brand-hue));
  --brand-800: oklch(30% 0.08 var(--brand-hue));
  --brand-900: oklch(20% 0.04 var(--brand-hue));
}
```

### Hue Reference

| Hue | Color |
|-----|-------|
| 0-30 | Red / Orange |
| 30-90 | Orange / Yellow |
| 90-150 | Yellow / Green |
| 150-200 | Green / Cyan |
| 200-270 | Cyan / Blue |
| 270-330 | Blue / Purple |
| 330-360 | Purple / Red |

---

## Quick Reference

```css
/* Backgrounds */
var(--bg-primary)      /* Main surface */
var(--bg-secondary)    /* Elevated/recessed surfaces */

/* Text */
var(--text-primary)    /* Headings, body text */
var(--text-secondary)  /* Captions, placeholders */

/* Borders */
var(--border-subtle)   /* Dividers, card edges */
var(--border-strong)   /* Input borders, emphasis */

/* Accent */
var(--accent-primary)  /* Links, buttons, focus */

/* Semantic (inline values) */
oklch(55% 0.15 150)    /* Success - green */
oklch(70% 0.15 80)     /* Warning - amber */
oklch(55% 0.2 25)      /* Error - red */
oklch(60% 0.15 250)    /* Info - blue */
```
