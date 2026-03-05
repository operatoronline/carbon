# *Tokens*

The foundation layer. Design tokens define colors, typography, spacing, elevation, and animation — every component inherits from these primitives.

---

<div class="section-category"><i class="ph-bold ph-cube" aria-hidden="true"></i> Foundation <span class="section-category-count">3 pages</span></div>

<div class="section-grid">
<a href="./tokens/colors.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-palette" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Colors</p>
    <p class="section-card-desc">OKLCH palette, grayscale, accent, status, semantic mapping</p>
  </div>
</a>
<a href="./tokens/typography.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-text-aa" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Typography</p>
    <p class="section-card-desc">Font stacks, modular scale, weights, line heights</p>
  </div>
</a>
<a href="./tokens/spacing.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-arrows-out" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Spacing</p>
    <p class="section-card-desc">4px base grid, 8 spacing tokens</p>
  </div>
</a>
</div>

<div class="section-category"><i class="ph-bold ph-wrench" aria-hidden="true"></i> Systems <span class="section-category-count">3 pages</span></div>

<div class="section-grid">
<a href="./tokens/elevation.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-stack" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Elevation</p>
    <p class="section-card-desc">Shadow system, multi-layer composites, focus rings</p>
  </div>
</a>
<a href="./tokens/export.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-export" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Export</p>
    <p class="section-card-desc">Copy all tokens as CSS, JSON, or SCSS</p>
  </div>
</a>
<a href="./tokens/playground.html" class="section-card">
  <div class="section-card-icon"><i class="ph ph-paint-brush" aria-hidden="true"></i></div>
  <div class="section-card-text">
    <p class="section-card-title">Playground</p>
    <p class="section-card-desc">Interactive OKLCH explorer, contrast checker, scale generator</p>
  </div>
</a>
</div>

---

## Quick Reference

| Category | Token Pattern | Example |
|----------|--------------|---------|
| Colors | `--fg`, `--bg`, `--accent`, `--ok`, `--warn`, `--err` | `color: var(--fg-2)` |
| Spacing | `--space-1` through `--space-12` | `padding: var(--space-4)` |
| Typography | `--ff-b`, `--ff-d`, `--ff-m`, `--fs-*` | `font-size: var(--fs-xl)` |
| Radii | `--r-s`, `--r-m`, `--r-l`, `--r-xl`, `--r-f` | `border-radius: var(--r-m)` |
| Shadows | `--sh-s`, `--sh-m`, `--sh-l`, `--sh-xl` | `box-shadow: var(--sh-m)` |
| Animation | `--ease`, `--dur-f`, `--dur-n`, `--dur-s` | `transition: color var(--dur-n)` |
