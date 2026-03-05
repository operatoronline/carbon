# Token Export

Copy all design tokens as CSS custom properties. Use the **Copy All** button to grab the complete `:root` block, or copy individual categories. Tokens are organized by function — paste into your project's stylesheet and start building.

---

## Copy All Tokens

One block, everything you need. Paste this into your CSS and every Standard component will work.

<Preview title="Complete Token Set">
    <div class="token-export" id="token-export-all">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count" id="token-count-all">0 tokens</span>
                <span class="token-export-size" id="token-size-all"></span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-all" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy All
            </button>
        </div>
        <pre class="token-export-code" id="token-code-all"><code class="language-css">:root {
  /* ─── Grayscale ─── */
  --black: oklch(0% 0 0);
  --white: oklch(100% 0 0);
  --g950:  oklch(12% 0 0);
  --g900:  oklch(17% 0 0);
  --g850:  oklch(20% 0 0);
  --g800:  oklch(24% 0 0);
  --g700:  oklch(34% 0 0);
  --g600:  oklch(44% 0 0);
  --g500:  oklch(54% 0 0);
  --g400:  oklch(64% 0 0);
  --g300:  oklch(76% 0 0);
  --g200:  oklch(86% 0 0);
  --g100:  oklch(93% 0 0);
  --g50:   oklch(97% 0 0);

  /* ─── Purple Accent ─── */
  --pri-600: oklch(45% 0.18 270);
  --pri-500: oklch(55% 0.20 270);
  --pri-400: oklch(65% 0.18 270);
  --pri-300: oklch(75% 0.14 270);
  --pri-200: oklch(85% 0.08 270);
  --pri-100: oklch(92% 0.04 270);
  --pri-50:  oklch(96% 0.02 270);

  /* ─── Status Colors ─── */
  --ok:        oklch(65% 0.18 145);
  --ok-soft:   oklch(92% 0.04 145);
  --ok-text:   oklch(48% 0.15 145);
  --warn:      oklch(75% 0.15 85);
  --warn-soft: oklch(94% 0.04 85);
  --warn-text: oklch(48% 0.15 85);
  --err:       oklch(50% 0.20 25);
  --err-soft:  oklch(92% 0.04 25);
  --err-text:  oklch(53% 0.20 25);

  /* ─── Semantic: Surfaces ─── */
  --bg:   var(--white);
  --bg-s: var(--g50);
  --bg-m: var(--g100);
  --bg-e: var(--white);

  /* ─── Semantic: Text ─── */
  --fg:   var(--g950);
  --fg-2: var(--g700);
  --fg-3: var(--g500);
  --fg-4: oklch(55% 0 0);

  /* ─── Semantic: Borders ─── */
  --bd:   var(--g200);
  --bd-s: var(--g300);
  --bd-w: var(--g100);

  /* ─── Semantic: Accent ─── */
  --accent:    var(--pri-500);
  --accent-h:  var(--pri-600);
  --accent-s:  var(--pri-100);
  --accent-fg: var(--white);

  /* ─── Typography ─── */
  --ff-d: 'Instrument Serif', Georgia, serif;
  --ff-b: 'Outfit', system-ui, sans-serif;
  --ff-m: 'JetBrains Mono', ui-monospace, monospace;

  /* ─── Type Scale ─── */
  --fs-3xs:  0.5rem;
  --fs-2xs:  0.625rem;
  --fs-nav:  0.5625rem;
  --fs-xs:   0.6875rem;
  --fs-sm:   0.75rem;
  --fs-md:   0.8125rem;
  --fs-base: 0.875rem;
  --fs-lg:   0.9375rem;
  --fs-xl:   1rem;
  --fs-2xl:  1.125rem;
  --fs-3xl:  1.25rem;
  --fs-4xl:  1.5rem;
  --fs-5xl:  1.75rem;
  --fs-6xl:  2rem;
  --fs-7xl:  2.5rem;
  --fs-hero: clamp(2.5rem, 8vw, 4rem);

  /* ─── Spacing (4px grid) ─── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;

  /* ─── Radii ─── */
  --r-s:  6px;
  --r-m:  10px;
  --r-l:  16px;
  --r-xl: 24px;
  --r-f:  9999px;

  /* ─── Shadows ─── */
  --sh-s:  0 1px 2px oklch(0% 0 0/.06), 0 1px 3px oklch(0% 0 0/.04);
  --sh-m:  0 2px 4px oklch(0% 0 0/.04), 0 4px 16px oklch(0% 0 0/.06);
  --sh-l:  0 4px 8px oklch(0% 0 0/.04), 0 12px 40px oklch(0% 0 0/.08);
  --sh-xl: 0 8px 16px oklch(0% 0 0/.06), 0 24px 64px oklch(0% 0 0/.12);
  --sh-ring: 0 0 0 3px var(--accent-s);

  /* ─── Animation ─── */
  --ease:   cubic-bezier(.16, 1, .3, 1);
  --spring: cubic-bezier(.34, 1.56, .64, 1);
  --dur-f:  120ms;
  --dur-n:  200ms;
  --dur-s:  350ms;

  /* ─── Layout ─── */
  --safe-b: env(safe-area-inset-bottom, 0px);
  --safe-t: env(safe-area-inset-top, 0px);
  --nav-h:  56px;
}</code></pre>
    </div>
</Preview>

---

## Dark Mode Override

Paste this after the `:root` block to enable dark mode support. These tokens remap semantic aliases to darker values.

<Preview title="Dark Mode Tokens">
    <div class="token-export" id="token-export-dark">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">26 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-dark" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Dark Mode
            </button>
        </div>
        <pre class="token-export-code" id="token-code-dark"><code class="language-css">[data-theme="dark"] {
  --bg:   var(--g950);
  --bg-s: var(--g900);
  --bg-m: var(--g800);
  --bg-e: var(--g900);

  --fg:   var(--g50);
  --fg-2: var(--g300);
  --fg-3: var(--g400);
  --fg-4: oklch(55% 0 0);

  --bd:   var(--g800);
  --bd-s: var(--g700);
  --bd-w: var(--g900);

  --accent-s: oklch(25% 0.08 270);

  --ok-soft:   oklch(22% 0.04 145);
  --ok-text:   oklch(65% 0.18 145);
  --warn-soft: oklch(24% 0.04 85);
  --warn-text: oklch(65% 0.12 85);
  --err-soft:  oklch(22% 0.04 25);
  --err-text:  oklch(65% 0.18 25);

  --sh-s:  0 1px 2px oklch(0% 0 0/.24), 0 2px 6px oklch(0% 0 0/.16);
  --sh-m:  0 2px 4px oklch(0% 0 0/.20), 0 4px 16px oklch(0% 0 0/.24);
  --sh-l:  0 4px 8px oklch(0% 0 0/.24), 0 12px 40px oklch(0% 0 0/.32);
  --sh-xl: 0 8px 16px oklch(0% 0 0/.28), 0 24px 64px oklch(0% 0 0/.40);
}

/* Auto dark mode (system preference) */
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) {
    --bg:   oklch(12% 0 0);
    --bg-s: oklch(17% 0 0);
    --bg-m: oklch(24% 0 0);
    --bg-e: oklch(17% 0 0);

    --fg:   oklch(97% 0 0);
    --fg-2: oklch(76% 0 0);
    --fg-3: oklch(64% 0 0);
    --fg-4: oklch(55% 0 0);

    --bd:   oklch(24% 0 0);
    --bd-s: oklch(34% 0 0);
    --bd-w: oklch(17% 0 0);

    --accent-s: oklch(25% 0.08 270);

    --ok-soft:   oklch(22% 0.04 145);
    --ok-text:   oklch(65% 0.18 145);
    --warn-soft: oklch(24% 0.04 85);
    --warn-text: oklch(65% 0.12 85);
    --err-soft:  oklch(22% 0.04 25);
    --err-text:  oklch(65% 0.18 25);

    --sh-s:  0 1px 2px oklch(0% 0 0/.24), 0 2px 6px oklch(0% 0 0/.16);
    --sh-m:  0 2px 4px oklch(0% 0 0/.20), 0 4px 16px oklch(0% 0 0/.24);
    --sh-l:  0 4px 8px oklch(0% 0 0/.24), 0 12px 40px oklch(0% 0 0/.32);
    --sh-xl: 0 8px 16px oklch(0% 0 0/.28), 0 24px 64px oklch(0% 0 0/.40);
  }
}</code></pre>
    </div>
</Preview>

---

## By Category

Copy only the tokens you need.

### Colors

Grayscale, accent purple, and status colors.

<Preview title="Color Tokens">
    <div class="token-export" id="token-export-colors">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">30 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-colors" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Colors
            </button>
        </div>
        <pre class="token-export-code" id="token-code-colors"><code class="language-css">/* Grayscale */
--black: oklch(0% 0 0);
--white: oklch(100% 0 0);
--g950:  oklch(12% 0 0);
--g900:  oklch(17% 0 0);
--g850:  oklch(20% 0 0);
--g800:  oklch(24% 0 0);
--g700:  oklch(34% 0 0);
--g600:  oklch(44% 0 0);
--g500:  oklch(54% 0 0);
--g400:  oklch(64% 0 0);
--g300:  oklch(76% 0 0);
--g200:  oklch(86% 0 0);
--g100:  oklch(93% 0 0);
--g50:   oklch(97% 0 0);

/* Purple Accent */
--pri-600: oklch(45% 0.18 270);
--pri-500: oklch(55% 0.20 270);
--pri-400: oklch(65% 0.18 270);
--pri-300: oklch(75% 0.14 270);
--pri-200: oklch(85% 0.08 270);
--pri-100: oklch(92% 0.04 270);
--pri-50:  oklch(96% 0.02 270);

/* Status */
--ok:        oklch(65% 0.18 145);
--ok-soft:   oklch(92% 0.04 145);
--ok-text:   oklch(48% 0.15 145);
--warn:      oklch(75% 0.15 85);
--warn-soft: oklch(94% 0.04 85);
--warn-text: oklch(48% 0.15 85);
--err:       oklch(50% 0.20 25);
--err-soft:  oklch(92% 0.04 25);
--err-text:  oklch(53% 0.20 25);</code></pre>
    </div>
</Preview>

### Semantic Aliases

Surface, text, border, and accent mappings. These change between light and dark mode.

<Preview title="Semantic Tokens">
    <div class="token-export" id="token-export-semantic">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">15 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-semantic" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Semantic
            </button>
        </div>
        <pre class="token-export-code" id="token-code-semantic"><code class="language-css">/* Surfaces */
--bg:   var(--white);
--bg-s: var(--g50);
--bg-m: var(--g100);
--bg-e: var(--white);

/* Text */
--fg:   var(--g950);
--fg-2: var(--g700);
--fg-3: var(--g500);
--fg-4: oklch(55% 0 0);

/* Borders */
--bd:   var(--g200);
--bd-s: var(--g300);
--bd-w: var(--g100);

/* Accent */
--accent:    var(--pri-500);
--accent-h:  var(--pri-600);
--accent-s:  var(--pri-100);
--accent-fg: var(--white);</code></pre>
    </div>
</Preview>

### Typography

Font families and the 16-step type scale.

<Preview title="Typography Tokens">
    <div class="token-export" id="token-export-type">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">19 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-type" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Typography
            </button>
        </div>
        <pre class="token-export-code" id="token-code-type"><code class="language-css">/* Font Families */
--ff-d: 'Instrument Serif', Georgia, serif;
--ff-b: 'Outfit', system-ui, sans-serif;
--ff-m: 'JetBrains Mono', ui-monospace, monospace;

/* Type Scale (Major Third 1.25) */
--fs-3xs:  0.5rem;      /*  8px */
--fs-2xs:  0.625rem;    /* 10px */
--fs-nav:  0.5625rem;   /*  9px */
--fs-xs:   0.6875rem;   /* 11px */
--fs-sm:   0.75rem;     /* 12px */
--fs-md:   0.8125rem;   /* 13px */
--fs-base: 0.875rem;    /* 14px */
--fs-lg:   0.9375rem;   /* 15px */
--fs-xl:   1rem;        /* 16px */
--fs-2xl:  1.125rem;    /* 18px */
--fs-3xl:  1.25rem;     /* 20px */
--fs-4xl:  1.5rem;      /* 24px */
--fs-5xl:  1.75rem;     /* 28px */
--fs-6xl:  2rem;        /* 32px */
--fs-7xl:  2.5rem;      /* 40px */
--fs-hero: clamp(2.5rem, 8vw, 4rem);</code></pre>
    </div>
</Preview>

### Spacing

The 4px grid spacing scale.

<Preview title="Spacing Tokens">
    <div class="token-export" id="token-export-spacing">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">9 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-spacing" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Spacing
            </button>
        </div>
        <pre class="token-export-code" id="token-code-spacing"><code class="language-css">--space-1:  4px;   /* Micro: icon gaps, tight padding */
--space-2:  8px;   /* Button padding, small gaps */
--space-3:  12px;  /* Input padding, list spacing */
--space-4:  16px;  /* Card padding, standard gaps */
--space-5:  20px;  /* Section spacing */
--space-6:  24px;  /* Component margins */
--space-8:  32px;  /* Large gaps, section breaks */
--space-10: 40px;  /* Extra-large gaps */
--space-12: 48px;  /* Page sections, hero spacing */</code></pre>
    </div>
</Preview>

### Radii

Border radius tokens from subtle to full.

<Preview title="Radius Tokens">
    <div class="token-export" id="token-export-radii">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">5 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-radii" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Radii
            </button>
        </div>
        <pre class="token-export-code" id="token-code-radii"><code class="language-css">--r-s:  6px;    /* Subtle: inline code, small chips */
--r-m:  10px;   /* Medium: cards, inputs, dropdowns */
--r-l:  16px;   /* Large: modals, drawers, code blocks */
--r-xl: 24px;   /* Extra-large: hero cards */
--r-f:  9999px; /* Full: pills, avatars, badges */</code></pre>
    </div>
</Preview>

### Shadows

Multi-layer elevation system with focus ring.

<Preview title="Shadow Tokens">
    <div class="token-export" id="token-export-shadows">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">5 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-shadows" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Shadows
            </button>
        </div>
        <pre class="token-export-code" id="token-code-shadows"><code class="language-css">--sh-s:    0 1px 2px oklch(0% 0 0/.06), 0 1px 3px oklch(0% 0 0/.04);
--sh-m:    0 2px 4px oklch(0% 0 0/.04), 0 4px 16px oklch(0% 0 0/.06);
--sh-l:    0 4px 8px oklch(0% 0 0/.04), 0 12px 40px oklch(0% 0 0/.08);
--sh-xl:   0 8px 16px oklch(0% 0 0/.06), 0 24px 64px oklch(0% 0 0/.12);
--sh-ring: 0 0 0 3px var(--accent-s);</code></pre>
    </div>
</Preview>

### Animation

Easing curves and durations.

<Preview title="Animation Tokens">
    <div class="token-export" id="token-export-animation">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">5 tokens</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-animation" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy Animation
            </button>
        </div>
        <pre class="token-export-code" id="token-code-animation"><code class="language-css">--ease:   cubic-bezier(.16, 1, .3, 1);   /* Smooth deceleration */
--spring: cubic-bezier(.34, 1.56, .64, 1); /* Overshoot bounce */
--dur-f:  120ms;  /* Fast: hover, focus */
--dur-n:  200ms;  /* Normal: transitions */
--dur-s:  350ms;  /* Slow: page transitions, reveals */</code></pre>
    </div>
</Preview>

---

## Export Formats

### JSON

For JavaScript tooling, style dictionaries, or token pipelines.

<Preview title="JSON Export">
    <div class="token-export" id="token-export-json">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">JSON format</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-json" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy JSON
            </button>
        </div>
        <pre class="token-export-code" id="token-code-json"><code class="language-javascript">{
  "color": {
    "black":   { "value": "oklch(0% 0 0)" },
    "white":   { "value": "oklch(100% 0 0)" },
    "gray": {
      "950": { "value": "oklch(12% 0 0)" },
      "900": { "value": "oklch(17% 0 0)" },
      "850": { "value": "oklch(20% 0 0)" },
      "800": { "value": "oklch(24% 0 0)" },
      "700": { "value": "oklch(34% 0 0)" },
      "600": { "value": "oklch(44% 0 0)" },
      "500": { "value": "oklch(54% 0 0)" },
      "400": { "value": "oklch(64% 0 0)" },
      "300": { "value": "oklch(76% 0 0)" },
      "200": { "value": "oklch(86% 0 0)" },
      "100": { "value": "oklch(93% 0 0)" },
      "50":  { "value": "oklch(97% 0 0)" }
    },
    "purple": {
      "600": { "value": "oklch(45% 0.18 270)" },
      "500": { "value": "oklch(55% 0.20 270)" },
      "400": { "value": "oklch(65% 0.18 270)" },
      "300": { "value": "oklch(75% 0.14 270)" },
      "200": { "value": "oklch(85% 0.08 270)" },
      "100": { "value": "oklch(92% 0.04 270)" },
      "50":  { "value": "oklch(96% 0.02 270)" }
    },
    "status": {
      "ok":        { "value": "oklch(65% 0.18 145)" },
      "okSoft":    { "value": "oklch(92% 0.04 145)" },
      "okText":    { "value": "oklch(48% 0.15 145)" },
      "warn":      { "value": "oklch(75% 0.15 85)" },
      "warnSoft":  { "value": "oklch(94% 0.04 85)" },
      "warnText":  { "value": "oklch(48% 0.15 85)" },
      "err":       { "value": "oklch(50% 0.20 25)" },
      "errSoft":   { "value": "oklch(92% 0.04 25)" },
      "errText":   { "value": "oklch(53% 0.20 25)" }
    }
  },
  "spacing": {
    "1":  { "value": "4px" },
    "2":  { "value": "8px" },
    "3":  { "value": "12px" },
    "4":  { "value": "16px" },
    "5":  { "value": "20px" },
    "6":  { "value": "24px" },
    "8":  { "value": "32px" },
    "10": { "value": "40px" },
    "12": { "value": "48px" }
  },
  "typography": {
    "family": {
      "display": { "value": "'Instrument Serif', Georgia, serif" },
      "body":    { "value": "'Outfit', system-ui, sans-serif" },
      "mono":    { "value": "'JetBrains Mono', ui-monospace, monospace" }
    },
    "size": {
      "3xs":  { "value": "0.5rem" },
      "2xs":  { "value": "0.625rem" },
      "nav":  { "value": "0.5625rem" },
      "xs":   { "value": "0.6875rem" },
      "sm":   { "value": "0.75rem" },
      "md":   { "value": "0.8125rem" },
      "base": { "value": "0.875rem" },
      "lg":   { "value": "0.9375rem" },
      "xl":   { "value": "1rem" },
      "2xl":  { "value": "1.125rem" },
      "3xl":  { "value": "1.25rem" },
      "4xl":  { "value": "1.5rem" },
      "5xl":  { "value": "1.75rem" },
      "6xl":  { "value": "2rem" },
      "7xl":  { "value": "2.5rem" },
      "hero": { "value": "clamp(2.5rem, 8vw, 4rem)" }
    }
  },
  "radius": {
    "s":    { "value": "6px" },
    "m":    { "value": "10px" },
    "l":    { "value": "16px" },
    "xl":   { "value": "24px" },
    "full": { "value": "9999px" }
  },
  "shadow": {
    "s":    { "value": "0 1px 2px oklch(0% 0 0/.06), 0 1px 3px oklch(0% 0 0/.04)" },
    "m":    { "value": "0 2px 4px oklch(0% 0 0/.04), 0 4px 16px oklch(0% 0 0/.06)" },
    "l":    { "value": "0 4px 8px oklch(0% 0 0/.04), 0 12px 40px oklch(0% 0 0/.08)" },
    "xl":   { "value": "0 8px 16px oklch(0% 0 0/.06), 0 24px 64px oklch(0% 0 0/.12)" }
  },
  "animation": {
    "ease":   { "value": "cubic-bezier(.16, 1, .3, 1)" },
    "spring": { "value": "cubic-bezier(.34, 1.56, .64, 1)" },
    "duration": {
      "fast":   { "value": "120ms" },
      "normal": { "value": "200ms" },
      "slow":   { "value": "350ms" }
    }
  }
}</code></pre>
    </div>
</Preview>

### SCSS Variables

For Sass-based projects. Map CSS custom properties to `$variables`.

<Preview title="SCSS Export">
    <div class="token-export" id="token-export-scss">
        <div class="token-export-header">
            <div class="token-export-meta">
                <span class="token-export-count">SCSS format</span>
            </div>
            <button class="Button Button--primary token-export-copy" data-copy-target="token-code-scss" type="button">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy SCSS
            </button>
        </div>
        <pre class="token-export-code" id="token-code-scss"><code class="language-css">// Standard Design System — SCSS Tokens
// Generated from v1.0

// Grayscale
$black: oklch(0% 0 0);
$white: oklch(100% 0 0);
$g950:  oklch(12% 0 0);
$g900:  oklch(17% 0 0);
$g850:  oklch(20% 0 0);
$g800:  oklch(24% 0 0);
$g700:  oklch(34% 0 0);
$g600:  oklch(44% 0 0);
$g500:  oklch(54% 0 0);
$g400:  oklch(64% 0 0);
$g300:  oklch(76% 0 0);
$g200:  oklch(86% 0 0);
$g100:  oklch(93% 0 0);
$g50:   oklch(97% 0 0);

// Purple Accent
$pri-600: oklch(45% 0.18 270);
$pri-500: oklch(55% 0.20 270);
$pri-400: oklch(65% 0.18 270);
$pri-300: oklch(75% 0.14 270);
$pri-200: oklch(85% 0.08 270);
$pri-100: oklch(92% 0.04 270);
$pri-50:  oklch(96% 0.02 270);

// Spacing
$space-1:  4px;
$space-2:  8px;
$space-3:  12px;
$space-4:  16px;
$space-5:  20px;
$space-6:  24px;
$space-8:  32px;
$space-10: 40px;
$space-12: 48px;

// Typography
$ff-d: 'Instrument Serif', Georgia, serif;
$ff-b: 'Outfit', system-ui, sans-serif;
$ff-m: 'JetBrains Mono', ui-monospace, monospace;

// Radii
$r-s:  6px;
$r-m:  10px;
$r-l:  16px;
$r-xl: 24px;
$r-f:  9999px;

// Animation
$ease:   cubic-bezier(.16, 1, .3, 1);
$spring: cubic-bezier(.34, 1.56, .64, 1);
$dur-f:  120ms;
$dur-n:  200ms;
$dur-s:  350ms;</code></pre>
    </div>
</Preview>

---

## Usage Tips

### Minimal Setup

Only need colors and spacing? Copy those two categories. The tokens are independent — you can mix and match.

```css
:root {
  /* Grab just what you need from the categories above */
  --accent: oklch(55% 0.20 270);
  --space-4: 16px;
  --r-m: 10px;
}
```

### Custom Accent Color

Change the hue to rebrand the entire system. Keep the same lightness and chroma values for consistent contrast:

```css
:root {
  /* Blue accent (hue 240) */
  --pri-600: oklch(45% 0.18 240);
  --pri-500: oklch(55% 0.20 240);
  --pri-400: oklch(65% 0.18 240);
  --pri-300: oklch(75% 0.14 240);
  --pri-200: oklch(85% 0.08 240);
  --pri-100: oklch(92% 0.04 240);
  --pri-50:  oklch(96% 0.02 240);
}
```

### Token Pipeline Integration

The JSON export is compatible with [Style Dictionary](https://amzn.github.io/style-dictionary/) and similar token transformation tools. Import it and generate platform-specific output (iOS, Android, CSS, JS).

---

## Best Practices

### Do

- ✓ **Copy the complete `:root` block** for full system compatibility
- ✓ **Include dark mode overrides** if your project supports themes
- ✓ **Use semantic tokens** (`--fg`, `--bg`, `--accent`) in your CSS — not primitives
- ✓ **Keep the JSON format** for design tool integrations and CI pipelines

### Don't

- ✗ **Cherry-pick individual values** without their dependencies (e.g., `--accent-s` needs `--pri-100`)
- ✗ **Change lightness values** in the grayscale — they're calibrated for WCAG AA contrast
- ✗ **Mix these tokens with a different spacing system** — the 4px grid is interdependent
