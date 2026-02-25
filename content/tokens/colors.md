# Colors

Standard's palette is built on **OKLCH** — a perceptually uniform color space where equal lightness values produce equal perceived brightness. The accent hue is **270° purple**.

---

## Grayscale

14 neutral steps from black to near-white. Every step is a pure OKLCH lightness value with zero chroma.

<Preview title="Grayscale">
    <div style="display: flex; width: 100%; border-radius: var(--r-m); overflow: hidden; height: 64px;">
        <div style="flex: 1; background: var(--black);" title="black · 0%"></div>
        <div style="flex: 1; background: var(--g950);" title="g950 · 12%"></div>
        <div style="flex: 1; background: var(--g900);" title="g900 · 17%"></div>
        <div style="flex: 1; background: var(--g850);" title="g850 · 20%"></div>
        <div style="flex: 1; background: var(--g800);" title="g800 · 24%"></div>
        <div style="flex: 1; background: var(--g700);" title="g700 · 34%"></div>
        <div style="flex: 1; background: var(--g600);" title="g600 · 44%"></div>
        <div style="flex: 1; background: var(--g500);" title="g500 · 54%"></div>
        <div style="flex: 1; background: var(--g400);" title="g400 · 64%"></div>
        <div style="flex: 1; background: var(--g300);" title="g300 · 76%"></div>
        <div style="flex: 1; background: var(--g200);" title="g200 · 86%"></div>
        <div style="flex: 1; background: var(--g100);" title="g100 · 93%"></div>
        <div style="flex: 1; background: var(--g50);" title="g50 · 97%"></div>
        <div style="flex: 1; background: var(--white); border: 1px solid var(--bd-w);" title="white · 100%"></div>
    </div>
    <div style="display: flex; width: 100%; margin-top: var(--space-2);">
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4); letter-spacing: .02em;">0</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">950</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">900</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">850</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">800</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">700</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">600</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">500</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">400</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">300</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">200</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">100</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">50</div>
        <div style="flex: 1; text-align: center; font-size: .5rem; font-family: var(--ff-m); color: var(--fg-4);">W</div>
    </div>
</Preview>

```css
--black: oklch(0% 0 0);
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
--white: oklch(100% 0 0);
```

---

## Purple Accent

The primary brand color at **270° hue**. Seven stops from deep (600) to barely-there (50).

<Preview title="Purple 270°">
    <div style="display: flex; width: 100%; border-radius: var(--r-m); overflow: hidden; height: 64px;">
        <div style="flex: 1; background: var(--pri-600);" title="pri-600"></div>
        <div style="flex: 1; background: var(--pri-500);" title="pri-500"></div>
        <div style="flex: 1; background: var(--pri-400);" title="pri-400"></div>
        <div style="flex: 1; background: var(--pri-300);" title="pri-300"></div>
        <div style="flex: 1; background: var(--pri-200);" title="pri-200"></div>
        <div style="flex: 1; background: var(--pri-100);" title="pri-100"></div>
        <div style="flex: 1; background: var(--pri-50); border: 1px solid var(--bd-w);" title="pri-50"></div>
    </div>
    <div style="display: flex; width: 100%; margin-top: var(--space-2);">
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">600</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">500</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">400</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">300</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">200</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">100</div>
        <div style="flex: 1; text-align: center; font-size: .5625rem; font-family: var(--ff-m); color: var(--fg-4);">50</div>
    </div>
</Preview>

```css
--pri-600: oklch(45% 0.18 270);
--pri-500: oklch(55% 0.20 270);  /* --accent */
--pri-400: oklch(65% 0.18 270);
--pri-300: oklch(75% 0.14 270);
--pri-200: oklch(85% 0.08 270);
--pri-100: oklch(92% 0.04 270);  /* --accent-s */
--pri-50:  oklch(96% 0.02 270);
```

---

## Status Colors

Feedback colors for success, warning, and error. Each has a full-strength and soft variant.

<Preview title="Status">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); width: 100%;">
        <div style="border-radius: var(--r-m); overflow: hidden;">
            <div style="background: var(--ok); padding: var(--space-3) var(--space-4); color: white;">
                <strong style="font-size: .8rem;">Success</strong>
                <div style="font-size: .65rem; opacity: .8; font-family: var(--ff-m);">oklch(65% 0.18 145)</div>
            </div>
            <div style="background: var(--ok-soft); padding: var(--space-3) var(--space-4); border: 1px solid oklch(from var(--ok) l c h / .15); border-top: 0;">
                <div style="font-size: .7rem; color: var(--ok); font-family: var(--ff-m);">--ok-soft</div>
            </div>
        </div>
        <div style="border-radius: var(--r-m); overflow: hidden;">
            <div style="background: var(--warn); padding: var(--space-3) var(--space-4); color: black;">
                <strong style="font-size: .8rem;">Warning</strong>
                <div style="font-size: .65rem; opacity: .7; font-family: var(--ff-m);">oklch(75% 0.15 85)</div>
            </div>
            <div style="background: var(--warn-soft); padding: var(--space-3) var(--space-4); border: 1px solid oklch(from var(--warn) l c h / .15); border-top: 0;">
                <div style="font-size: .7rem; color: oklch(55% 0.15 85); font-family: var(--ff-m);">--warn-soft</div>
            </div>
        </div>
        <div style="border-radius: var(--r-m); overflow: hidden;">
            <div style="background: var(--err); padding: var(--space-3) var(--space-4); color: white;">
                <strong style="font-size: .8rem;">Error</strong>
                <div style="font-size: .65rem; opacity: .8; font-family: var(--ff-m);">oklch(60% 0.20 25)</div>
            </div>
            <div style="background: var(--err-soft); padding: var(--space-3) var(--space-4); border: 1px solid oklch(from var(--err) l c h / .15); border-top: 0;">
                <div style="font-size: .7rem; color: var(--err); font-family: var(--ff-m);">--err-soft</div>
            </div>
        </div>
    </div>
</Preview>

---

## Semantic Mapping

Tokens are aliased to semantic roles. The same token name resolves to different values per theme.

### Surfaces & Text

<Preview title="Semantic Tokens">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); width: 100%;">
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); padding-left: var(--space-2);">Surfaces</div>
            <div style="background: var(--bg); padding: var(--space-3); border: 1px solid var(--bd); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <code style="font-size: .75rem;">--bg</code>
                <span style="font-size: .65rem; color: var(--fg-3);">Primary</span>
            </div>
            <div style="background: var(--bg-s); padding: var(--space-3); border: 1px solid var(--bd-w); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <code style="font-size: .75rem;">--bg-s</code>
                <span style="font-size: .65rem; color: var(--fg-3);">Subtle</span>
            </div>
            <div style="background: var(--bg-m); padding: var(--space-3); border: 1px solid var(--bd-w); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <code style="font-size: .75rem;">--bg-m</code>
                <span style="font-size: .65rem; color: var(--fg-3);">Muted</span>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); padding-left: var(--space-2);">Text</div>
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--fg); font-weight: 600; font-size: .85rem;">--fg</span>
                <span style="font-size: .65rem; color: var(--fg-3);">Primary</span>
            </div>
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--fg-2); font-size: .85rem;">--fg-2</span>
                <span style="font-size: .65rem; color: var(--fg-3);">Secondary</span>
            </div>
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--fg-3); font-size: .85rem;">--fg-3</span>
                <span style="font-size: .65rem; color: var(--fg-4);">Tertiary</span>
            </div>
        </div>
    </div>
</Preview>

### Light ↔ Dark

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | white | g950 |
| `--bg-s` | g50 | g900 |
| `--bg-m` | g100 | g800 |
| `--fg` | g950 | g50 |
| `--fg-2` | g700 | g300 |
| `--fg-3` | g500 | g400 |
| `--fg-4` | g400 | g600 |
| `--bd` | g200 | g800 |
| `--bd-s` | g300 | g700 |
| `--bd-w` | g100 | g900 |
| `--accent` | pri-500 | pri-500 |
| `--accent-s` | pri-100 | oklch(25% .08 270) |

---

## Why OKLCH?

Traditional HSL has a fundamental problem: two colors with the same "lightness" don't actually look equally bright.

<Preview title="HSL vs OKLCH">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">HSL — Same L (50%), different perceived brightness</div>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: hsl(60, 100%, 50%); padding: var(--space-3); border-radius: var(--r-s); flex: 1; text-align: center; color: black; font-size: .8rem; font-weight: 600;">Yellow</div>
                <div style="background: hsl(240, 100%, 50%); padding: var(--space-3); border-radius: var(--r-s); flex: 1; text-align: center; color: white; font-size: .8rem; font-weight: 600;">Blue</div>
            </div>
        </div>
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">OKLCH — Same L (70%), consistent brightness ✓</div>
            <div style="display: flex; gap: var(--space-2);">
                <div style="background: oklch(70% 0.15 90); padding: var(--space-3); border-radius: var(--r-s); flex: 1; text-align: center; color: black; font-size: .8rem; font-weight: 600;">Yellow</div>
                <div style="background: oklch(70% 0.15 250); padding: var(--space-3); border-radius: var(--r-s); flex: 1; text-align: center; color: black; font-size: .8rem; font-weight: 600;">Blue</div>
            </div>
        </div>
    </div>
</Preview>

OKLCH values:

```
oklch(L  C  H)
       │  │  └─ Hue: 0–360° color wheel
       │  └──── Chroma: 0–~0.4 saturation
       └─────── Lightness: 0–100% perceived brightness
```

---

## Extending

To add custom hues that harmonize with the palette:

```css
:root {
  --teal-500: oklch(60% 0.15 180);
  --teal-100: oklch(92% 0.04 180);
  --teal-soft: oklch(95% 0.02 180);
}
```

Keep the same lightness values as the accent scale for visual consistency. The chroma and hue change — the lightness stays the same.

---

## Best Practices

### Do

- ✓ **Use semantic tokens, not primitives** — `var(--fg)` not `var(--g950)`
- ✓ **Maintain OKLCH lightness consistency** — Match lightness values when extending the palette
- ✓ **Use soft variants for backgrounds** — `var(--ok-soft)` behind success messages, not `var(--ok)`
- ✓ **Test both themes** — Verify colors work in light and dark mode
- ✓ **Use status colors for meaning** — Green for success, red for errors, yellow for warnings

### Don't

- ✗ **Hardcode hex/rgb values** — Always use CSS custom properties
- ✗ **Use pure black for text** — Use `var(--fg)` (OKLCH-based, softer)
- ✗ **Invent new grays** — Stick to the 14-step grayscale
- ✗ **Mix color spaces** — Stay in OKLCH for custom colors
- ✗ **Ignore contrast** — Ensure text meets WCAG AA (4.5:1 for body, 3:1 for large text)

---

## Quick Reference

```css
/* Surfaces */
var(--bg)        var(--bg-s)      var(--bg-m)

/* Text */
var(--fg)        var(--fg-2)      var(--fg-3)      var(--fg-4)

/* Borders */
var(--bd-w)      var(--bd)        var(--bd-s)

/* Accent */
var(--accent)    var(--accent-h)  var(--accent-s)  var(--accent-fg)

/* Status */
var(--ok)        var(--ok-soft)
var(--warn)      var(--warn-soft)
var(--err)       var(--err-soft)
```
