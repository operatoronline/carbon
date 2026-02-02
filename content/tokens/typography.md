# Typography

Carbon uses **DM Sans** — a geometric sans-serif designed for clarity at all sizes. The type system is built on a modular scale for consistent visual hierarchy.

## Font Stack

```css
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'SF Mono', 'Fira Code', 'Consolas', monospace;
```

<Preview title="Font Families">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Sans (Primary)</small>
            <div style="font-family: var(--font-sans); font-size: 1.5rem;">The quick brown fox jumps over the lazy dog.</div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Monospace (Code)</small>
            <div style="font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace; font-size: 1rem;">const greeting = "Hello, World!";</div>
        </div>
    </div>
</Preview>

---

## Type Scale

Based on a **1.25 ratio** (Major Third), creating harmonious size progression.

| Level | Size | Rem | Pixels | Usage |
|-------|------|-----|--------|-------|
| Display | 3rem | 3 | 48px | Hero headlines |
| H1 | 2.5rem | 2.5 | 40px | Page titles |
| H2 | 2rem | 2 | 32px | Section headers |
| H3 | 1.5rem | 1.5 | 24px | Subsections |
| H4 | 1.25rem | 1.25 | 20px | Card titles |
| Body | 1rem | 1 | 16px | Paragraphs |
| Small | 0.875rem | 0.875 | 14px | Captions, labels |
| XSmall | 0.75rem | 0.75 | 12px | Fine print |

<Preview title="Type Scale">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div style="font-size: 3rem; font-weight: 700; line-height: 1.1;">Display</div>
        <div style="font-size: 2.5rem; font-weight: 700; line-height: 1.2;">Heading 1</div>
        <div style="font-size: 2rem; font-weight: 600; line-height: 1.25;">Heading 2</div>
        <div style="font-size: 1.5rem; font-weight: 600; line-height: 1.3;">Heading 3</div>
        <div style="font-size: 1.25rem; font-weight: 600; line-height: 1.4;">Heading 4</div>
        <div style="font-size: 1rem; line-height: 1.5;">Body text — the quick brown fox jumps over the lazy dog.</div>
        <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">Small text for captions and supporting content.</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;">Extra small for fine print and legal text.</div>
    </div>
</Preview>

---

## Font Weights

DM Sans provides five weights. Use them intentionally to create hierarchy.

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | UI labels, buttons |
| Semi-Bold | 600 | Subheadings, emphasis |
| Bold | 700 | Headings, strong emphasis |

<Preview title="Font Weights">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.25rem;">
        <div style="font-weight: 400;">Regular (400) — Default body weight</div>
        <div style="font-weight: 500;">Medium (500) — Buttons and labels</div>
        <div style="font-weight: 600;">Semi-Bold (600) — Subheadings</div>
        <div style="font-weight: 700;">Bold (700) — Headlines and emphasis</div>
    </div>
</Preview>

```css
/* Weight usage */
body { font-weight: 400; }
.Button { font-weight: 500; }
h3, h4 { font-weight: 600; }
h1, h2 { font-weight: 700; }
```

---

## Line Height

Proper leading improves readability. Tighter for headings, looser for body text.

| Context | Line Height | Ratio |
|---------|-------------|-------|
| Display/H1 | 1.1 – 1.2 | Tight |
| H2/H3 | 1.25 – 1.3 | Snug |
| H4/UI | 1.4 | Normal |
| Body | 1.5 – 1.6 | Relaxed |
| Long-form | 1.7 – 1.8 | Loose |

<Preview title="Line Height Comparison">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); width: 100%;">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">line-height: 1.2 (Headings)</small>
            <div style="font-size: 1.5rem; font-weight: 600; line-height: 1.2; padding: var(--space-3); background: var(--bg-secondary); border-radius: var(--space-1);">
                Tight leading for headlines keeps them compact and impactful
            </div>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">line-height: 1.6 (Body)</small>
            <div style="font-size: 1rem; line-height: 1.6; padding: var(--space-3); background: var(--bg-secondary); border-radius: var(--space-1);">
                Relaxed leading for body text improves readability over multiple lines of content
            </div>
        </div>
    </div>
</Preview>

```css
/* Line heights */
h1, .display { line-height: 1.1; }
h2 { line-height: 1.25; }
h3 { line-height: 1.3; }
h4 { line-height: 1.4; }
body, p { line-height: 1.5; }
.prose { line-height: 1.7; }
```

---

## Letter Spacing

Subtle tracking adjustments improve legibility at extreme sizes.

| Context | Letter Spacing | When |
|---------|----------------|------|
| Tight | -0.02em | Large display text |
| Normal | 0 | Body text |
| Wide | 0.02em | Small caps, labels |
| Extra Wide | 0.05em | Uppercase headings |

<Preview title="Letter Spacing">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--text-secondary);">-0.02em (Display)</small>
            <div style="font-size: 2.5rem; font-weight: 700; letter-spacing: -0.02em;">Tight Tracking</div>
        </div>
        <div>
            <small style="color: var(--text-secondary);">0 (Default)</small>
            <div style="font-size: 1rem;">Normal body text with default letter spacing.</div>
        </div>
        <div>
            <small style="color: var(--text-secondary);">0.05em (Labels)</small>
            <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">Section Label</div>
        </div>
    </div>
</Preview>

```css
/* Letter spacing */
.display { letter-spacing: -0.02em; }
.label { letter-spacing: 0.05em; text-transform: uppercase; }
.nav-group { letter-spacing: 0.05em; }
```

---

## Text Colors

Use semantic color tokens for consistent hierarchy.

<Preview title="Text Hierarchy">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div style="color: var(--text-primary); font-size: 1.25rem; font-weight: 600;">Primary — Headlines & Body</div>
        <div style="color: var(--text-secondary);">Secondary — Descriptions, captions, and supporting text</div>
        <div style="color: var(--accent-primary);">Accent — Links and interactive elements</div>
        <div style="color: oklch(55% 0.15 150);">Success — Positive messages</div>
        <div style="color: oklch(55% 0.2 25);">Error — Error messages</div>
    </div>
</Preview>

```css
/* Text colors */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-accent { color: var(--accent-primary); }
.text-success { color: oklch(55% 0.15 150); }
.text-error { color: oklch(55% 0.2 25); }
```

---

## Heading Styles

Complete heading definitions with all properties.

<Preview title="Heading Definitions">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <h1 style="margin: 0;">Heading 1</h1>
            <code style="font-size: 0.8em; color: var(--text-secondary);">2.5rem / 700 / 1.2 / -0.01em</code>
        </div>
        <div>
            <h2 style="margin: 0;">Heading 2</h2>
            <code style="font-size: 0.8em; color: var(--text-secondary);">2rem / 600 / 1.25 / 0</code>
        </div>
        <div>
            <h3 style="margin: 0;">Heading 3</h3>
            <code style="font-size: 0.8em; color: var(--text-secondary);">1.5rem / 600 / 1.3 / 0</code>
        </div>
    </div>
</Preview>

```css
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.25;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}
```

---

## Prose Styles

Optimized typography for long-form reading.

<Preview title="Prose Example">
    <div style="max-width: 65ch; line-height: 1.7;">
        <p style="margin-bottom: var(--space-4);">Good typography is invisible. When type is well-set, the reader doesn't notice the mechanics — they simply absorb the content. This is the goal of Carbon's typography system.</p>
        <p style="margin-bottom: var(--space-4);">The <strong>measure</strong> (line length) is kept between 45-75 characters for optimal readability. Combined with generous <em>line-height</em> and proper spacing between paragraphs, long-form content becomes effortless to read.</p>
        <p>Notice how your eye flows naturally from line to line without strain.</p>
    </div>
</Preview>

```css
.prose {
  max-width: 65ch; /* Optimal line length */
  line-height: 1.7;
}

.prose p + p {
  margin-top: var(--space-4);
}

.prose strong {
  font-weight: 600;
}

.prose a {
  color: var(--accent-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

---

## Responsive Typography

Scale type sizes at different breakpoints for optimal reading.

```css
/* Base (Mobile) */
html { font-size: 16px; }
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
}
```

### Fluid Typography (Optional)

For smoother scaling, use clamp():

```css
h1 {
  /* Min: 2rem, Preferred: 5vw, Max: 3rem */
  font-size: clamp(2rem, 5vw, 3rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
}
```

---

## Code Typography

Monospace styles for code blocks and inline code.

<Preview title="Code Styles">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Inline Code</small>
            <p>Use the <code>var(--space-4)</code> token for standard spacing.</p>
        </div>
        <div>
            <small style="color: var(--text-secondary); display: block; margin-bottom: var(--space-2);">Code Block</small>
            <pre style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--space-2); overflow-x: auto;"><code>function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
        </div>
    </div>
</Preview>

```css
code {
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9em;
  background: var(--bg-secondary);
  padding: 2px var(--space-1);
  border-radius: 3px;
}

pre code {
  font-size: 0.875rem;
  line-height: 1.6;
  background: none;
  padding: 0;
}
```

---

## Best Practices

### Do

- ✓ **Establish clear hierarchy** — Size + weight should guide the eye
- ✓ **Limit font variations** — 2-3 weights max per page
- ✓ **Use appropriate measure** — 45-75 characters per line
- ✓ **Add breathing room** — Generous line-height for body text
- ✓ **Test at real sizes** — Check actual rendered output

### Don't

- ✗ **Mix too many sizes** — Stick to the scale
- ✗ **Use pure black text** — Use --text-primary (oklch(20% 0 0))
- ✗ **Justify body text** — Left-align for better readability
- ✗ **Use light weights for body** — 400 minimum for readability
- ✗ **Forget mobile** — Test typography at small viewports

---

## Quick Reference

```css
/* Font Families */
font-family: var(--font-sans);  /* DM Sans - UI & body */
font-family: var(--font-mono);  /* SF Mono - code */

/* Sizes */
font-size: 3rem;      /* Display */
font-size: 2.5rem;    /* H1 */
font-size: 2rem;      /* H2 */
font-size: 1.5rem;    /* H3 */
font-size: 1.25rem;   /* H4 */
font-size: 1rem;      /* Body */
font-size: 0.875rem;  /* Small */
font-size: 0.75rem;   /* XSmall */

/* Weights */
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semi-Bold */
font-weight: 700;  /* Bold */

/* Line Heights */
line-height: 1.1;  /* Display */
line-height: 1.25; /* Headings */
line-height: 1.5;  /* Body */
line-height: 1.7;  /* Prose */
```
