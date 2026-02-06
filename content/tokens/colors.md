# Colors

Carbon uses **OKLCH** — a perceptually uniform color space that produces consistent, harmonious colors across your entire palette. The accent color is a refined **purple** at **270° hue**.

## Why OKLCH?

Traditional color models (HSL, RGB) have a fundamental problem: two colors with the same "lightness" value can appear drastically different in brightness. OKLCH solves this.

<Preview title="OKLCH vs HSL Comparison">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">HSL: Same L (50%), different perceived brightness</small>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: hsl(60, 100%, 50%); padding: var(--space-4); border-radius: var(--r-s); flex: 1; text-align: center; color: black;">Yellow</div>
                <div style="background: hsl(240, 100%, 50%); padding: var(--space-4); border-radius: var(--r-s); flex: 1; text-align: center; color: white;">Blue</div>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">OKLCH: Same L (70%), consistent perceived brightness</small>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: oklch(70% 0.15 90); padding: var(--space-4); border-radius: var(--r-s); flex: 1; text-align: center; color: black;">Yellow</div>
                <div style="background: oklch(70% 0.15 250); padding: var(--space-4); border-radius: var(--r-s); flex: 1; text-align: center; color: black;">Blue</div>
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

### Grayscale

Neutral colors built on OKLCH for consistent lightness progression.

<Preview title="Grayscale Palette">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-2); width: 100%;">
        <div style="background: var(--g950); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>g950</div>
            <div style="opacity: 0.7;">12%</div>
        </div>
        <div style="background: var(--g800); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>g800</div>
            <div style="opacity: 0.7;">24%</div>
        </div>
        <div style="background: var(--g500); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>g500</div>
            <div style="opacity: 0.7;">54%</div>
        </div>
        <div style="background: var(--g300); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>g300</div>
            <div style="opacity: 0.7;">76%</div>
        </div>
        <div style="background: var(--g100); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>g100</div>
            <div style="opacity: 0.7;">93%</div>
        </div>
        <div style="background: var(--g50); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem; border: 1px solid var(--bd);">
            <div>g50</div>
            <div style="opacity: 0.7;">97%</div>
        </div>
    </div>
</Preview>

```css
:root {
  --black: oklch(0% 0 0);
  --white: oklch(100% 0 0);
  --g950: oklch(12% 0 0);
  --g900: oklch(17% 0 0);
  --g850: oklch(20% 0 0);
  --g800: oklch(24% 0 0);
  --g700: oklch(34% 0 0);
  --g600: oklch(44% 0 0);
  --g500: oklch(54% 0 0);
  --g400: oklch(64% 0 0);
  --g300: oklch(76% 0 0);
  --g200: oklch(86% 0 0);
  --g100: oklch(93% 0 0);
  --g50: oklch(97% 0 0);
}
```

### Purple Accent (270° Hue)

The primary brand color — a refined purple used for actions, links, and focus states.

<Preview title="Purple Accent Scale">
    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--space-2); width: 100%;">
        <div style="background: var(--pri-600); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-600</div>
            <div style="opacity: 0.7;">45%</div>
        </div>
        <div style="background: var(--pri-500); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-500</div>
            <div style="opacity: 0.7;">55%</div>
        </div>
        <div style="background: var(--pri-400); color: white; padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-400</div>
            <div style="opacity: 0.7;">65%</div>
        </div>
        <div style="background: var(--pri-300); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-300</div>
            <div style="opacity: 0.7;">75%</div>
        </div>
        <div style="background: var(--pri-200); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-200</div>
            <div style="opacity: 0.7;">85%</div>
        </div>
        <div style="background: var(--pri-100); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem;">
            <div>pri-100</div>
            <div style="opacity: 0.7;">92%</div>
        </div>
        <div style="background: var(--pri-50); color: var(--g950); padding: var(--space-3); border-radius: var(--r-s); text-align: center; font-size: 0.75rem; border: 1px solid var(--bd);">
            <div>pri-50</div>
            <div style="opacity: 0.7;">96%</div>
        </div>
    </div>
</Preview>

```css
:root {
  /* Purple Accent (270° hue) */
  --pri-600: oklch(45% 0.18 270);
  --pri-500: oklch(55% 0.20 270);
  --pri-400: oklch(65% 0.18 270);
  --pri-300: oklch(75% 0.14 270);
  --pri-200: oklch(85% 0.08 270);
  --pri-100: oklch(92% 0.04 270);
  --pri-50: oklch(96% 0.02 270);
}
```

### Semantic Tokens

Surface colors for pages and components, mapped to grayscale and accent.

<Preview title="Semantic Tokens">
    <div style="display: flex; gap: var(--space-4); width: 100%;">
        <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-2);">
            <div style="background: var(--bg); padding: var(--space-6); border: 1px solid var(--bd); border-radius: var(--r-m);">
                <strong>--bg</strong>
                <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Primary background</code>
            </div>
            <div style="background: var(--bg-s); padding: var(--space-6); border: 1px solid var(--bd); border-radius: var(--r-m);">
                <strong>--bg-s</strong>
                <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Subtle background</code>
            </div>
            <div style="background: var(--bg-m); padding: var(--space-6); border: 1px solid var(--bd); border-radius: var(--r-m);">
                <strong>--bg-m</strong>
                <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Muted background</code>
            </div>
        </div>
    </div>
</Preview>

```css
:root {
  /* Semantic — Light Mode */
  --bg: var(--white);
  --bg-s: var(--g50);
  --bg-m: var(--g100);
  --bg-e: var(--white);
  --fg: var(--g950);
  --fg-2: var(--g700);
  --fg-3: var(--g500);
  --fg-4: var(--g400);
  --bd: var(--g200);
  --bd-s: var(--g300);
  --bd-w: var(--g100);

  --accent: var(--pri-500);
  --accent-h: var(--pri-600);
  --accent-s: var(--pri-100);
  --accent-fg: var(--white);
}
```

### Text Colors

Typography colors with clear hierarchy.

<Preview title="Text Hierarchy">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div>
            <span style="color: var(--fg); font-size: 1.25rem; font-weight: 600;">--fg (Primary)</span>
            <span style="color: var(--fg-3); margin-left: var(--space-2); font-size: 0.8em;">Headlines & body text</span>
        </div>
        <div>
            <span style="color: var(--fg-2);">--fg-2 (Secondary)</span>
            <span style="color: var(--fg-3); margin-left: var(--space-2); font-size: 0.8em;">Descriptions, captions</span>
        </div>
        <div>
            <span style="color: var(--fg-3);">--fg-3 (Tertiary)</span>
            <span style="color: var(--fg-4); margin-left: var(--space-2); font-size: 0.8em;">Placeholders, hints</span>
        </div>
        <div>
            <span style="color: var(--fg-4);">--fg-4 (Muted)</span>
            <span style="color: var(--fg-4); margin-left: var(--space-2); font-size: 0.8em;">Disabled, decorative</span>
        </div>
    </div>
</Preview>

### Borders

Subtle and strong borders for structure and emphasis.

<Preview title="Border Tokens">
    <div style="display: flex; gap: var(--space-4); width: 100%;">
        <div style="flex: 1; padding: var(--space-4); border: 1px solid var(--bd-w); border-radius: var(--r-m); text-align: center;">
            <strong>--bd-w</strong>
            <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Weak borders</code>
        </div>
        <div style="flex: 1; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m); text-align: center;">
            <strong>--bd</strong>
            <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Default borders</code>
        </div>
        <div style="flex: 1; padding: var(--space-4); border: 2px solid var(--bd-s); border-radius: var(--r-m); text-align: center;">
            <strong>--bd-s</strong>
            <code style="display: block; margin-top: var(--space-1); font-size: 0.8em; color: var(--fg-3);">Strong borders</code>
        </div>
    </div>
</Preview>

### Accent Usage

<Preview title="Accent in Action">
    <div style="display: flex; gap: var(--space-4); align-items: center; flex-wrap: wrap;">
        <button class="Button Button--primary">Primary Button</button>
        <button class="Button Button--outline">Outline Button</button>
        <a href="#" class="Link" onclick="return false;">Link with accent</a>
        <span class="Badge Badge--primary">Badge</span>
    </div>
</Preview>

```css
:root {
  --accent: var(--pri-500);     /* Primary actions */
  --accent-h: var(--pri-600);   /* Hover state */
  --accent-s: var(--pri-100);   /* Soft/subtle backgrounds */
  --accent-fg: var(--white);    /* Text on accent */
}
```

---

## Status Colors

Feedback colors communicate status and meaning. Built on OKLCH for consistent brightness.

<Preview title="Status Color Palette">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4); width: 100%;">
        <div style="background: var(--ok); color: white; padding: var(--space-4); border-radius: var(--r-m);">
            <strong>Success (--ok)</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(65% 0.18 145)</div>
        </div>
        <div style="background: var(--warn); color: black; padding: var(--space-4); border-radius: var(--r-m);">
            <strong>Warning (--warn)</strong>
            <div style="font-size: 0.85em; opacity: 0.8; margin-top: var(--space-1);">oklch(75% 0.15 85)</div>
        </div>
        <div style="background: var(--err); color: white; padding: var(--space-4); border-radius: var(--r-m);">
            <strong>Error (--err)</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(60% 0.20 25)</div>
        </div>
        <div style="background: var(--accent); color: white; padding: var(--space-4); border-radius: var(--r-m);">
            <strong>Info (--accent)</strong>
            <div style="font-size: 0.85em; opacity: 0.9; margin-top: var(--space-1);">oklch(55% 0.20 270)</div>
        </div>
    </div>
</Preview>

### Soft Variants

<Preview title="Soft Status Backgrounds">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="background: var(--ok-soft); border-left: 3px solid var(--ok); padding: var(--space-3); border-radius: var(--r-s);">
            <strong style="color: var(--ok);">Success</strong> — Soft background variant
        </div>
        <div style="background: var(--warn-soft); border-left: 3px solid var(--warn); padding: var(--space-3); border-radius: var(--r-s);">
            <strong style="color: oklch(55% 0.15 85);">Warning</strong> — Soft background variant
        </div>
        <div style="background: var(--err-soft); border-left: 3px solid var(--err); padding: var(--space-3); border-radius: var(--r-s);">
            <strong style="color: var(--err);">Error</strong> — Soft background variant
        </div>
        <div style="background: var(--accent-s); border-left: 3px solid var(--accent); padding: var(--space-3); border-radius: var(--r-s);">
            <strong style="color: var(--accent);">Info</strong> — Soft background variant
        </div>
    </div>
</Preview>

```css
:root {
  /* Status Colors */
  --ok: oklch(65% 0.18 145);
  --ok-soft: oklch(92% 0.04 145);
  --warn: oklch(75% 0.15 85);
  --warn-soft: oklch(94% 0.04 85);
  --err: oklch(60% 0.20 25);
  --err-soft: oklch(92% 0.04 25);
}
```

---

## Dark Mode

Carbon supports automatic dark mode via the `data-theme="dark"` attribute on the root element.

<Preview title="Theme Toggle">
    <div style="display: flex; gap: var(--space-4);">
        <button class="Button Button--secondary" onclick="document.documentElement.setAttribute('data-theme', 'light')">
            <i class="ph ph-sun"></i> Light
        </button>
        <button class="Button Button--secondary" onclick="document.documentElement.setAttribute('data-theme', 'dark')">
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

### Dark Mode Tokens

```css
[data-theme="dark"] {
  --bg: var(--g950);
  --bg-s: var(--g900);
  --bg-m: var(--g800);
  --bg-e: var(--g900);
  --fg: var(--g50);
  --fg-2: var(--g300);
  --fg-3: var(--g400);
  --fg-4: var(--g600);
  --bd: var(--g800);
  --bd-s: var(--g700);
  --bd-w: var(--g900);
  --accent-s: oklch(25% 0.08 270);

  --sh-s: 0 1px 3px oklch(0% 0 0/.2);
  --sh-m: 0 4px 16px oklch(0% 0 0/.3);
  --sh-l: 0 12px 40px oklch(0% 0 0/.4);
  --sh-xl: 0 24px 64px oklch(0% 0 0/.5);
}
```

### All Tokens by Theme

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | white | g950 |
| `--bg-s` | g50 | g900 |
| `--bg-m` | g100 | g800 |
| `--fg` | g950 | g50 |
| `--fg-2` | g700 | g300 |
| `--fg-3` | g500 | g400 |
| `--bd` | g200 | g800 |
| `--bd-s` | g300 | g700 |
| `--accent` | pri-500 | pri-500 |
| `--accent-s` | pri-100 | oklch(25% 0.08 270) |

---

## Accessibility

### Contrast Requirements

WCAG 2.1 requires minimum contrast ratios:
- **4.5:1** for normal text (AA)
- **3:1** for large text and UI components (AA)
- **7:1** for normal text (AAA)

<Preview title="Contrast Check">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--bg); border: 1px solid var(--bd); border-radius: var(--r-s);">
            <span style="color: var(--fg);">--fg on --bg</span>
            <span class="Badge Badge--success">✓ 15.8:1</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--bg); border: 1px solid var(--bd); border-radius: var(--r-s);">
            <span style="color: var(--fg-2);">--fg-2 on --bg</span>
            <span class="Badge Badge--success">✓ 5.9:1</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--accent); border-radius: var(--r-s);">
            <span style="color: white;">white on --accent</span>
            <span class="Badge" style="background: white; color: var(--accent);">✓ 4.6:1</span>
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
| **270** | **Purple (Carbon Accent)** |
| 270-330 | Blue / Purple |
| 330-360 | Purple / Red |

---

## Quick Reference

```css
/* Backgrounds */
var(--bg)       /* Main surface */
var(--bg-s)     /* Subtle/elevated surfaces */
var(--bg-m)     /* Muted surfaces */

/* Foreground (Text) */
var(--fg)       /* Primary text */
var(--fg-2)     /* Secondary text */
var(--fg-3)     /* Tertiary/placeholder */
var(--fg-4)     /* Muted/disabled */

/* Borders */
var(--bd-w)     /* Weak borders */
var(--bd)       /* Default borders */
var(--bd-s)     /* Strong borders */

/* Accent (Purple 270°) */
var(--accent)   /* Primary accent */
var(--accent-h) /* Hover state */
var(--accent-s) /* Soft background */
var(--accent-fg)/* Text on accent */

/* Status */
var(--ok)       /* Success */
var(--ok-soft)  /* Success background */
var(--warn)     /* Warning */
var(--warn-soft)/* Warning background */
var(--err)      /* Error */
var(--err-soft) /* Error background */
```
