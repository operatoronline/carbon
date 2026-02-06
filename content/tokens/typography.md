# Typography

Carbon uses a refined type system with **three font families**: **Instrument Serif** for display headings, **Outfit** for body text and UI, and **JetBrains Mono** for code.

## Font Stack

```css
--ff-d: 'Instrument Serif', Georgia, serif;     /* Display */
--ff-b: 'Outfit', system-ui, sans-serif;        /* Body */
--ff-m: 'JetBrains Mono', ui-monospace, monospace; /* Mono */
```

<Preview title="Font Families">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Instrument Serif (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 2rem; letter-spacing: -0.02em;">The quick brown fox jumps over the lazy dog.</div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Outfit (Body & UI)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem;">The quick brown fox jumps over the lazy dog. Perfect for readable body text and clean UI elements.</div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">JetBrains Mono (Code)</small>
            <div style="font-family: var(--ff-m); font-size: 0.9rem; color: var(--accent);">const greeting = "Hello, World!";</div>
        </div>
    </div>
</Preview>

---

## Type Scale

Based on a **1.25 ratio** (Major Third), creating harmonious size progression.

| Level | Size | Usage | Font |
|-------|------|-------|------|
| Display | clamp(2.5rem, 8vw, 4rem) | Hero headlines | Instrument Serif |
| H1 | 2.5rem | Page titles | Instrument Serif |
| H2 | 1.75rem | Section headers | Instrument Serif |
| H3 | 1.125rem | Subsections | Outfit |
| Body | 1rem | Paragraphs | Outfit |
| Small | 0.875rem | Captions, labels | Outfit |
| XSmall | 0.75rem | Fine print | Outfit |
| Mono | 0.8125rem | Code blocks | JetBrains Mono |

<Preview title="Type Scale">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div style="font-family: var(--ff-d); font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 400; line-height: 1; letter-spacing: -0.035em;">Display</div>
        <div style="font-family: var(--ff-d); font-size: 1.75rem; font-weight: 400; line-height: 1.25; letter-spacing: -0.02em;">Heading 2</div>
        <div style="font-family: var(--ff-b); font-size: 1.125rem; font-weight: 600; line-height: 1.4;">Heading 3</div>
        <div style="font-family: var(--ff-b); font-size: 1rem; line-height: 1.6; color: var(--fg-2);">Body text — the quick brown fox jumps over the lazy dog. This is readable body copy.</div>
        <div style="font-family: var(--ff-b); font-size: 0.875rem; color: var(--fg-3); line-height: 1.5;">Small text for captions and supporting content.</div>
        <div style="font-family: var(--ff-m); font-size: 0.8125rem; color: var(--accent); line-height: 1.7; background: var(--bg-s); padding: var(--space-2) var(--space-3); border-radius: var(--r-s);">const code = "monospace";</div>
    </div>
</Preview>

---

## Font Weights

Outfit provides a range of weights. Use them intentionally to create hierarchy.

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Large display text only |
| Regular | 400 | Body text, descriptions |
| Medium | 500 | UI labels, buttons |
| Semi-Bold | 600 | Subheadings, emphasis |
| Bold | 700 | Strong emphasis |

<Preview title="Font Weights (Outfit)">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.125rem; font-family: var(--ff-b);">
        <div style="font-weight: 300;">Light (300) — Large display only</div>
        <div style="font-weight: 400;">Regular (400) — Default body weight</div>
        <div style="font-weight: 500;">Medium (500) — Buttons and labels</div>
        <div style="font-weight: 600;">Semi-Bold (600) — Subheadings</div>
        <div style="font-weight: 700;">Bold (700) — Strong emphasis</div>
    </div>
</Preview>

### Instrument Serif

Instrument Serif works best at regular weight (400), with italics for emphasis.

<Preview title="Instrument Serif Styles">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.5rem; font-family: var(--ff-d);">
        <div style="font-weight: 400;">Regular — Elegant display headings</div>
        <div style="font-style: italic;">Italic — <em>Beautiful</em> emphasis</div>
    </div>
</Preview>

```css
/* Weight usage */
body { font-family: var(--ff-b); font-weight: 400; }
.Button { font-weight: 500; }
h3 { font-weight: 600; }
h1, h2 { font-family: var(--ff-d); font-weight: 400; }
```

---

## Line Height

Proper leading improves readability. Tighter for headings, looser for body text.

| Context | Line Height | Ratio |
|---------|-------------|-------|
| Display/H1 | 1.0 – 1.1 | Tight |
| H2 | 1.25 | Snug |
| H3/UI | 1.4 | Normal |
| Body | 1.6 – 1.7 | Relaxed |
| Long-form | 1.7 | Loose |

<Preview title="Line Height Comparison">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); width: 100%;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">line-height: 1.1 (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 1.5rem; line-height: 1.1; padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
                Tight leading for serif headlines keeps them compact and impactful
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">line-height: 1.6 (Body)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem; line-height: 1.6; padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
                Relaxed leading for body text improves readability over multiple lines of content
            </div>
        </div>
    </div>
</Preview>

```css
/* Line heights */
.page-header h1 { line-height: 1; }
.prose h2 { line-height: 1.25; }
h3 { line-height: 1.4; }
body, p { line-height: 1.6; }
.prose { line-height: 1.7; }
```

---

## Letter Spacing

Subtle tracking adjustments improve legibility at extreme sizes.

| Context | Letter Spacing | When |
|---------|----------------|------|
| Display | -0.035em | Large serif headings |
| Headings | -0.02em | Section titles |
| Normal | 0 | Body text |
| Labels | 0.03em – 0.06em | Uppercase, monospace labels |

<Preview title="Letter Spacing">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--fg-3);">-0.035em (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 2.5rem; letter-spacing: -0.035em;">Tight Serif Tracking</div>
        </div>
        <div>
            <small style="color: var(--fg-3);">0 (Default)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem;">Normal body text with default letter spacing.</div>
        </div>
        <div>
            <small style="color: var(--fg-3);">0.06em (Labels)</small>
            <div style="font-family: var(--ff-m); font-size: 0.625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Section Label</div>
        </div>
    </div>
</Preview>

```css
/* Letter spacing */
.page-header h1 { letter-spacing: -0.035em; }
.prose h2 { letter-spacing: -0.02em; }
.fnav-btn { letter-spacing: 0.06em; text-transform: uppercase; }
```

---

## Text Colors

Use semantic color tokens for consistent hierarchy.

<Preview title="Text Hierarchy">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div style="color: var(--fg); font-size: 1.25rem; font-weight: 600;">--fg — Headlines & primary text</div>
        <div style="color: var(--fg-2);">--fg-2 — Body text, descriptions</div>
        <div style="color: var(--fg-3);">--fg-3 — Captions, placeholders</div>
        <div style="color: var(--fg-4);">--fg-4 — Disabled, decorative</div>
        <div style="color: var(--accent);">--accent — Links and interactive elements</div>
        <div style="color: var(--ok);">--ok — Success messages</div>
        <div style="color: var(--err);">--err — Error messages</div>
    </div>
</Preview>

```css
/* Text colors */
.text-primary { color: var(--fg); }
.text-secondary { color: var(--fg-2); }
.text-muted { color: var(--fg-3); }
.text-accent { color: var(--accent); }
.text-success { color: var(--ok); }
.text-error { color: var(--err); }
```

---

## Heading Styles

Complete heading definitions matching the Library aesthetic.

<Preview title="Heading Definitions">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <div style="font-family: var(--ff-d); font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 400; line-height: 1; letter-spacing: -0.035em;">Page Title</div>
            <code style="font-size: 0.75em; color: var(--fg-3);">Display: ff-d / clamp(2.5rem, 8vw, 4rem) / 400 / 1 / -0.035em</code>
        </div>
        <div>
            <h2 style="font-family: var(--ff-d); font-size: 1.75rem; font-weight: 400; line-height: 1.25; letter-spacing: -0.02em; margin: 0;">Section Header</h2>
            <code style="font-size: 0.75em; color: var(--fg-3);">H2: ff-d / 1.75rem / 400 / 1.25 / -0.02em</code>
        </div>
        <div>
            <h3 style="font-family: var(--ff-b); font-size: 1.125rem; font-weight: 600; line-height: 1.4; margin: 0;">Subsection</h3>
            <code style="font-size: 0.75em; color: var(--fg-3);">H3: ff-b / 1.125rem / 600 / 1.4 / 0</code>
        </div>
    </div>
</Preview>

```css
.page-header h1 {
  font-family: var(--ff-d);
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.035em;
}

.page-header h1 em {
  font-style: italic;
  color: var(--accent);
}

.prose h2 {
  font-family: var(--ff-d);
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: var(--space-10) 0 var(--space-4);
}

.prose h3 {
  font-family: var(--ff-b);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  margin: var(--space-8) 0 var(--space-3);
}
```

---

## Prose Styles

Optimized typography for long-form reading.

<Preview title="Prose Example">
    <div class="prose" style="max-width: 65ch;">
        <p style="margin-bottom: var(--space-4); line-height: 1.7; color: var(--fg-2);">Good typography is invisible. When type is well-set, the reader doesn't notice the mechanics — they simply absorb the content. This is the goal of Carbon's typography system.</p>
        <p style="margin-bottom: var(--space-4); line-height: 1.7; color: var(--fg-2);">The <strong style="font-weight: 600; color: var(--fg);">measure</strong> (line length) is kept between 45-75 characters for optimal readability. Combined with generous <em>line-height</em> and proper spacing between paragraphs, long-form content becomes effortless to read.</p>
        <p style="line-height: 1.7; color: var(--fg-2);">Notice how your eye flows naturally from line to line without strain.</p>
    </div>
</Preview>

```css
.prose {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--fg-2);
  max-width: 65ch; /* Optimal line length */
}

.prose p {
  margin-bottom: var(--space-4);
}

.prose strong {
  font-weight: 600;
  color: var(--fg);
}

.prose code:not([class*="language-"]) {
  font-family: var(--ff-m);
  font-size: 0.875em;
  padding: 2px 6px;
  background: var(--bg-m);
  border-radius: var(--r-s);
  color: var(--accent);
}
```

---

## Code Typography

JetBrains Mono styles for code blocks and inline code.

<Preview title="Code Styles">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Inline Code</small>
            <p style="font-family: var(--ff-b);">Use the <code style="font-family: var(--ff-m); font-size: 0.875em; padding: 2px 6px; background: var(--bg-m); border-radius: var(--r-s); color: var(--accent);">var(--space-4)</code> token for standard spacing.</p>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Code Block</small>
            <pre style="font-family: var(--ff-m); font-size: 0.8125rem; line-height: 1.7; background: var(--g950); color: var(--g100); padding: var(--space-4); border-radius: var(--r-l); overflow-x: auto;"><code>function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
        </div>
    </div>
</Preview>

```css
code:not([class*="language-"]) {
  font-family: var(--ff-m);
  font-size: 0.875em;
  padding: 2px 6px;
  background: var(--bg-m);
  border-radius: var(--r-s);
  color: var(--accent);
}

pre[class*="language-"] {
  font-family: var(--ff-m);
  font-size: 0.8125rem;
  line-height: 1.7;
  background: var(--g950);
  border: 1px solid var(--g800);
  border-radius: var(--r-l);
  padding: var(--space-4);
}
```

---

## Responsive Typography

Scale type sizes at different breakpoints for optimal reading.

```css
/* Base (Mobile) */
.page-header h1 { 
  font-size: clamp(2.5rem, 8vw, 4rem); 
}

/* Prose scales naturally with rem */
.prose { font-size: 1rem; }

/* Breakpoint-specific adjustments */
@media (min-width: 768px) {
  .prose h2 { font-size: 1.75rem; }
}

@media (min-width: 1024px) {
  .prose h2 { font-size: 2rem; }
}
```

### Fluid Typography

The display heading uses `clamp()` for smooth scaling:

```css
/* Scales from 2.5rem (40px) to 4rem (64px) based on viewport */
font-size: clamp(2.5rem, 8vw, 4rem);
```

---

## Navigation Typography

The floating pill nav uses monospace labels with wide tracking.

<Preview title="Nav Label Style">
    <div style="display: flex; gap: var(--space-4); align-items: center;">
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Components</span>
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Tokens</span>
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; background: var(--accent); color: white; padding: var(--space-2) var(--space-4); border-radius: var(--r-f);">Guides</span>
    </div>
</Preview>

```css
.fnav-btn {
  font-family: var(--ff-m);
  font-size: 0.5625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

---

## Best Practices

### Do

- ✓ **Use Instrument Serif for display** — Large headlines, hero text
- ✓ **Use Outfit for body and UI** — Readable and clean
- ✓ **Use JetBrains Mono for code** — Clear differentiation
- ✓ **Establish clear hierarchy** — Size + font + weight guides the eye
- ✓ **Use appropriate measure** — 45-75 characters per line
- ✓ **Add breathing room** — Generous line-height for body text

### Don't

- ✗ **Mix too many sizes** — Stick to the scale
- ✗ **Use pure black text** — Use --fg (oklch-based)
- ✗ **Justify body text** — Left-align for better readability
- ✗ **Use Instrument Serif for body** — Save it for headlines
- ✗ **Forget mobile** — Test typography at small viewports
- ✗ **Over-style code** — Keep it clean and readable

---

## Quick Reference

```css
/* Font Families */
font-family: var(--ff-d);  /* Instrument Serif - Display */
font-family: var(--ff-b);  /* Outfit - Body & UI */
font-family: var(--ff-m);  /* JetBrains Mono - Code */

/* Display Sizes */
font-size: clamp(2.5rem, 8vw, 4rem);  /* Hero */
font-size: 1.75rem;                    /* H2 */
font-size: 1.125rem;                   /* H3 */
font-size: 1rem;                       /* Body */
font-size: 0.875rem;                   /* Small */
font-size: 0.8125rem;                  /* Code */
font-size: 0.5625rem;                  /* Nav labels */

/* Weights */
font-weight: 400;  /* Regular (body, serif) */
font-weight: 500;  /* Medium (buttons) */
font-weight: 600;  /* Semi-Bold (subheads) */
font-weight: 700;  /* Bold (emphasis) */

/* Line Heights */
line-height: 1;    /* Display */
line-height: 1.25; /* Headings */
line-height: 1.4;  /* UI */
line-height: 1.6;  /* Body */
line-height: 1.7;  /* Prose/Code */

/* Letter Spacing */
letter-spacing: -0.035em; /* Display */
letter-spacing: -0.02em;  /* H2 */
letter-spacing: 0.06em;   /* Labels */
```
