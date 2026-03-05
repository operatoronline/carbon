# Token Playground

Explore OKLCH in real time. Adjust lightness, chroma, and hue to understand how the color space works — then copy the values into your project.

---

## OKLCH Explorer

Drag the sliders to see how each OKLCH channel affects the resulting color. The preview updates live.

<div class="playground" id="oklch-explorer">
    <div class="playground-canvas">
        <div class="playground-swatch" id="pg-swatch">
            <div class="playground-swatch-inner" id="pg-swatch-inner">
                <span class="playground-swatch-label" id="pg-swatch-label">oklch(65% 0.20 270)</span>
            </div>
        </div>
        <div class="playground-value-row">
            <button class="playground-copy-btn" id="pg-copy-oklch" type="button" data-copy-value="oklch(65% 0.20 270)">
                <i class="ph ph-copy" aria-hidden="true"></i> Copy OKLCH
            </button>
            <button class="playground-copy-btn" id="pg-copy-hex" type="button" data-copy-value="">
                <i class="ph ph-hash" aria-hidden="true"></i> <span id="pg-hex-label">Copy Hex</span>
            </button>
        </div>
    </div>

    <div class="playground-controls">
        <div class="playground-slider-group">
            <div class="playground-slider-header">
                <label for="pg-lightness">Lightness</label>
                <output id="pg-lightness-val" class="playground-output">65%</output>
            </div>
            <input type="range" id="pg-lightness" min="0" max="100" value="65" step="1" class="playground-range playground-range--l">
            <div class="playground-slider-meta">
                <span>0% black</span>
                <span>100% white</span>
            </div>
        </div>

        <div class="playground-slider-group">
            <div class="playground-slider-header">
                <label for="pg-chroma">Chroma</label>
                <output id="pg-chroma-val" class="playground-output">0.20</output>
            </div>
            <input type="range" id="pg-chroma" min="0" max="40" value="20" step="1" class="playground-range playground-range--c">
            <div class="playground-slider-meta">
                <span>0.00 gray</span>
                <span>0.40 vivid</span>
            </div>
        </div>

        <div class="playground-slider-group">
            <div class="playground-slider-header">
                <label for="pg-hue">Hue</label>
                <output id="pg-hue-val" class="playground-output">270°</output>
            </div>
            <input type="range" id="pg-hue" min="0" max="360" value="270" step="1" class="playground-range playground-range--h">
            <div class="playground-slider-meta">
                <span>0° red</span>
                <span>90° yellow</span>
                <span>180° cyan</span>
                <span>270° purple</span>
            </div>
        </div>
    </div>
</div>

---

## Contrast Checker

Pick a foreground and background color to check their WCAG contrast ratio. The tool shows whether your pair passes AA and AAA requirements.

<div class="playground" id="contrast-checker">
    <div class="playground-contrast-preview" id="cc-preview">
        <div class="playground-contrast-sample" id="cc-sample">
            <p class="playground-contrast-large">Large Text (18px+)</p>
            <p class="playground-contrast-normal">Normal body text at default size needs higher contrast to remain readable.</p>
        </div>
        <div class="playground-contrast-badges" id="cc-badges">
            <span class="playground-badge" id="cc-aa-normal">AA Normal —</span>
            <span class="playground-badge" id="cc-aa-large">AA Large —</span>
            <span class="playground-badge" id="cc-aaa">AAA —</span>
        </div>
        <div class="playground-contrast-ratio" id="cc-ratio">—:1</div>
    </div>

    <div class="playground-contrast-controls">
        <fieldset class="playground-fieldset">
            <legend>Foreground</legend>
            <div class="playground-inline-sliders">
                <div class="playground-mini-slider">
                    <label for="cc-fg-l">L</label>
                    <input type="range" id="cc-fg-l" min="0" max="100" value="12" step="1" class="playground-range playground-range--l">
                    <output id="cc-fg-l-val">12%</output>
                </div>
                <div class="playground-mini-slider">
                    <label for="cc-fg-c">C</label>
                    <input type="range" id="cc-fg-c" min="0" max="40" value="0" step="1" class="playground-range">
                    <output id="cc-fg-c-val">0.00</output>
                </div>
                <div class="playground-mini-slider">
                    <label for="cc-fg-h">H</label>
                    <input type="range" id="cc-fg-h" min="0" max="360" value="0" step="1" class="playground-range playground-range--h">
                    <output id="cc-fg-h-val">0°</output>
                </div>
            </div>
            <div class="playground-color-chip" id="cc-fg-chip"></div>
        </fieldset>

        <fieldset class="playground-fieldset">
            <legend>Background</legend>
            <div class="playground-inline-sliders">
                <div class="playground-mini-slider">
                    <label for="cc-bg-l">L</label>
                    <input type="range" id="cc-bg-l" min="0" max="100" value="100" step="1" class="playground-range playground-range--l">
                    <output id="cc-bg-l-val">100%</output>
                </div>
                <div class="playground-mini-slider">
                    <label for="cc-bg-c">C</label>
                    <input type="range" id="cc-bg-c" min="0" max="40" value="0" step="1" class="playground-range">
                    <output id="cc-bg-c-val">0.00</output>
                </div>
                <div class="playground-mini-slider">
                    <label for="cc-bg-h">H</label>
                    <input type="range" id="cc-bg-h" min="0" max="360" value="0" step="1" class="playground-range playground-range--h">
                    <output id="cc-bg-h-val">0°</output>
                </div>
            </div>
            <div class="playground-color-chip" id="cc-bg-chip"></div>
        </fieldset>
    </div>

    <div class="playground-contrast-output">
        <button class="playground-copy-btn" id="cc-copy" type="button">
            <i class="ph ph-copy" aria-hidden="true"></i> Copy CSS Pair
        </button>
    </div>
</div>

---

## Hue Wheel

See the entire hue spectrum at your chosen lightness and chroma. Click any segment to load it into the explorer above.

<div class="playground" id="hue-wheel-container">
    <div class="playground-wheel-controls">
        <div class="playground-mini-slider">
            <label for="hw-lightness">L</label>
            <input type="range" id="hw-lightness" min="0" max="100" value="65" step="1" class="playground-range playground-range--l">
            <output id="hw-lightness-val">65%</output>
        </div>
        <div class="playground-mini-slider">
            <label for="hw-chroma">C</label>
            <input type="range" id="hw-chroma" min="0" max="40" value="20" step="1" class="playground-range">
            <output id="hw-chroma-val">0.20</output>
        </div>
    </div>
    <div class="playground-wheel" id="hue-wheel" role="img" aria-label="OKLCH hue wheel showing 72 hue segments">
        <!-- Generated by JS: 72 segments (5° each) -->
    </div>
    <div class="playground-wheel-label" id="hw-label">Hover or click a segment</div>
</div>

---

## Scale Generator

Build a complete lightness scale from a single hue — like Standard's purple accent or grayscale. Adjust the hue and chroma, and the tool generates 7 harmonized stops.

<div class="playground" id="scale-generator">
    <div class="playground-scale-controls">
        <div class="playground-mini-slider">
            <label for="sg-hue">Hue</label>
            <input type="range" id="sg-hue" min="0" max="360" value="270" step="1" class="playground-range playground-range--h">
            <output id="sg-hue-val">270°</output>
        </div>
        <div class="playground-mini-slider">
            <label for="sg-chroma">Peak Chroma</label>
            <input type="range" id="sg-chroma" min="0" max="40" value="20" step="1" class="playground-range">
            <output id="sg-chroma-val">0.20</output>
        </div>
    </div>
    <div class="playground-scale" id="sg-scale">
        <!-- Generated by JS: 7 stops (600-50) -->
    </div>
    <div class="playground-scale-output">
        <button class="playground-copy-btn" id="sg-copy" type="button">
            <i class="ph ph-copy" aria-hidden="true"></i> Copy Scale CSS
        </button>
    </div>
</div>

---

## Token Presets

Click any preset to load Standard's actual token values into the explorer.

<div class="playground" id="presets">
    <div class="playground-presets-grid">
        <button class="playground-preset" type="button" data-l="55" data-c="20" data-h="270">
            <span class="playground-preset-swatch" style="background: oklch(55% 0.20 270)"></span>
            <span class="playground-preset-info">
                <strong>--accent</strong>
                <code>oklch(55% 0.20 270)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="45" data-c="18" data-h="270">
            <span class="playground-preset-swatch" style="background: oklch(45% 0.18 270)"></span>
            <span class="playground-preset-info">
                <strong>--accent-h</strong>
                <code>oklch(45% 0.18 270)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="65" data-c="18" data-h="145">
            <span class="playground-preset-swatch" style="background: oklch(65% 0.18 145)"></span>
            <span class="playground-preset-info">
                <strong>--ok</strong>
                <code>oklch(65% 0.18 145)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="75" data-c="15" data-h="85">
            <span class="playground-preset-swatch" style="background: oklch(75% 0.15 85)"></span>
            <span class="playground-preset-info">
                <strong>--warn</strong>
                <code>oklch(75% 0.15 85)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="50" data-c="20" data-h="25">
            <span class="playground-preset-swatch" style="background: oklch(50% 0.20 25)"></span>
            <span class="playground-preset-info">
                <strong>--err</strong>
                <code>oklch(50% 0.20 25)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="12" data-c="0" data-h="0">
            <span class="playground-preset-swatch" style="background: oklch(12% 0 0)"></span>
            <span class="playground-preset-info">
                <strong>--g950</strong>
                <code>oklch(12% 0 0)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="54" data-c="0" data-h="0">
            <span class="playground-preset-swatch" style="background: oklch(54% 0 0)"></span>
            <span class="playground-preset-info">
                <strong>--g500</strong>
                <code>oklch(54% 0 0)</code>
            </span>
        </button>
        <button class="playground-preset" type="button" data-l="97" data-c="0" data-h="0">
            <span class="playground-preset-swatch" style="background: oklch(97% 0 0)"></span>
            <span class="playground-preset-info">
                <strong>--g50</strong>
                <code>oklch(97% 0 0)</code>
            </span>
        </button>
    </div>
</div>

---

## How OKLCH Works

OKLCH is a **perceptually uniform** color space with three channels:

| Channel | Range | Meaning |
|---------|-------|---------|
| **L** (Lightness) | 0–100% | Perceived brightness — 50% always looks "medium" regardless of hue |
| **C** (Chroma) | 0–~0.4 | Color intensity — 0 is pure gray, higher values are more vivid |
| **H** (Hue) | 0–360° | Position on the color wheel — 0° red, 90° yellow, 180° cyan, 270° purple |

The key insight: unlike HSL, **equal lightness values produce equal perceived brightness**. A yellow at `L=70%` looks as bright as a blue at `L=70%`. This makes it possible to build harmonious palettes by varying hue while keeping lightness consistent.

### Gamut Boundaries

Not all OKLCH values map to displayable sRGB colors. High chroma at extreme lightness values may be out of gamut — the browser will clamp to the nearest displayable color. The explorer above shows a ⚠ indicator when your chosen values are near the gamut edge.

### Further Reading

- **[Colors page](../tokens/colors.html)** — Standard's full color token reference
- **[Export page](../tokens/export.html)** — Copy all tokens at once
- **[OKLCH.com](https://oklch.com/)** — The canonical OKLCH reference
