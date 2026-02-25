# Spacing

Standard uses a **4px base unit** for all spacing. This isn't arbitrary — it's the smallest value that remains visible at 1x density, divides evenly at 2x and 3x screen densities, and aligns to the pixel grid at every common resolution. Every spacing decision in the system is a multiple of 4.

The result: components breathe consistently, layouts feel unified, and the invisible grid that holds everything together stays invisible — which is exactly how you know it's working.

---

## Why 4px?

Four pixels sits at the intersection of three constraints:

<Preview title="Why 4px">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); width: 100%;">
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Pixel Grids</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">4 divides cleanly into every common screen density. At 1x: 4px. At 1.5x: 6px. At 2x: 8px. At 3x: 12px. No sub-pixel rendering, no blurry edges.</div>
        </div>
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Touch Targets</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">The minimum touch target (44–48px) is exactly 11–12 base units. Comfortable targets build naturally from the scale without awkward math.</div>
        </div>
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Optical Alignment</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">4px is small enough for fine optical adjustments (icon-to-text gaps) yet large enough that each step creates a <em>visible</em> difference.</div>
        </div>
    </div>
</Preview>

---

## The Scale

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `--space-1` | 0.25rem | 4px | Icon gaps, tight padding |
| `--space-2` | 0.5rem | 8px | Button padding, small gaps |
| `--space-3` | 0.75rem | 12px | Input padding, list spacing |
| `--space-4` | 1rem | 16px | Card padding, standard gaps |
| `--space-5` | 1.25rem | 20px | Section spacing |
| `--space-6` | 1.5rem | 24px | Component margins |
| `--space-8` | 2rem | 32px | Large gaps, section breaks |
| `--space-12` | 3rem | 48px | Page sections, hero spacing |

<Preview title="Visual Scale">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-1</code>
            <div style="width: 4px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">4px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-2</code>
            <div style="width: 8px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">8px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-3</code>
            <div style="width: 12px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">12px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-4</code>
            <div style="width: 16px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">16px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-5</code>
            <div style="width: 20px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">20px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-6</code>
            <div style="width: 24px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">24px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-8</code>
            <div style="width: 32px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">32px</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <code style="width: 100px; font-size: .8rem;">--space-12</code>
            <div style="width: 48px; height: 24px; background: var(--accent);"></div>
            <span style="color: var(--fg-3); font-family: var(--ff-m); font-size: .75rem;">48px</span>
        </div>
    </div>
</Preview>

### The Math — Why These Steps?

The scale isn't a linear progression (1, 2, 3, 4, 5, 6, 7, 8…). It's **curated** — some steps are skipped deliberately:

<Preview title="Scale Progression">
    <div style="width: 100%;">
        <div style="display: flex; align-items: flex-end; gap: 2px; height: 120px; margin-bottom: var(--space-3);">
            <div style="flex: 1; background: var(--accent); height: 10%;"></div>
            <div style="flex: 1; background: var(--accent); height: 17%;"></div>
            <div style="flex: 1; background: var(--accent); height: 25%;"></div>
            <div style="flex: 1; background: var(--accent); height: 33%;"></div>
            <div style="flex: 1; background: var(--accent); height: 42%;"></div>
            <div style="flex: 1; background: var(--accent); height: 50%;"></div>
            <div style="flex: 1; background: var(--bg-m); height: 58%; opacity: .4;"></div>
            <div style="flex: 1; background: var(--accent); height: 67%;"></div>
            <div style="flex: 1; background: var(--bg-m); height: 75%; opacity: .4;"></div>
            <div style="flex: 1; background: var(--bg-m); height: 83%; opacity: .4;"></div>
            <div style="flex: 1; background: var(--bg-m); height: 92%; opacity: .4;"></div>
            <div style="flex: 1; background: var(--accent); height: 100%;"></div>
        </div>
        <div style="display: flex; gap: 2px;">
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">1</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">2</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">3</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">4</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">5</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">6</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4);">7</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">8</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4);">9</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4);">10</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4);">11</div>
            <div style="flex: 1; text-align: center; font-family: var(--ff-m); font-size: .5rem; color: var(--fg-3);">12</div>
        </div>
    </div>
</Preview>

The faded bars are **skipped steps** (7, 9, 10, 11). Why?

- **Steps 1–6** cover micro to meso spacing. At small sizes, every 4px matters — the difference between 16px and 20px padding is meaningful.
- **Steps 7, 9, 10, 11** are skipped because at larger sizes the perceptual difference between adjacent steps shrinks. 28px vs 32px? Barely noticeable. The eye groups them together.
- **Steps 8 and 12** are kept as landmark values — doubling points that create clear jumps for section-level spacing.

This follows **Weber's Law**: the just-noticeable difference in spacing is proportional to the base size. At small sizes you need fine control; at large sizes you need bigger jumps.

---

## Spatial Hierarchy

Spacing isn't just "how much room" — it communicates *relationships*. Closer things are related; farther things are separate. Standard's scale maps to three spatial levels:

<Preview title="Spatial Relationships">
    <div style="width: 100%; border: 1px solid var(--bd); border-radius: var(--r-l); padding: var(--space-8); background: var(--bg);">
        <div style="font-family: var(--ff-m); font-size: .5rem; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-1);">Macro · space-8 to space-12</div>
        <div style="font-family: var(--ff-d); font-size: 1.5rem; letter-spacing: -0.02em; margin-bottom: var(--space-8);">Page Section</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4);">
                <div style="font-family: var(--ff-m); font-size: .5rem; text-transform: uppercase; letter-spacing: .06em; color: var(--ok); margin-bottom: var(--space-1);">Meso · space-4 to space-6</div>
                <div style="font-weight: 600; margin-bottom: var(--space-2);">Card Title</div>
                <div style="font-size: .85rem; color: var(--fg-2); margin-bottom: var(--space-3);">Description text with comfortable spacing between elements.</div>
                <div style="display: flex; gap: var(--space-2); align-items: center;">
                    <div style="font-family: var(--ff-m); font-size: .5rem; text-transform: uppercase; letter-spacing: .06em; color: var(--warn); margin-right: var(--space-1);">Micro · space-1 to space-3</div>
                    <div style="width: 16px; height: 16px; border-radius: 50%; background: var(--accent);"></div>
                    <span style="font-size: .8rem;">Icon + text</span>
                </div>
            </div>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4);">
                <div style="font-weight: 600; margin-bottom: var(--space-2);">Another Card</div>
                <div style="font-size: .85rem; color: var(--fg-2); margin-bottom: var(--space-3);">The gap between cards (space-6) is larger than the gap within cards (space-2 to space-4).</div>
                <div style="display: flex; gap: var(--space-2);">
                    <span style="padding: var(--space-1) var(--space-3); background: var(--accent-s); color: var(--accent); border-radius: var(--r-s); font-size: .75rem;">Tag</span>
                    <span style="padding: var(--space-1) var(--space-3); background: var(--accent-s); color: var(--accent); border-radius: var(--r-s); font-size: .75rem;">Tag</span>
                </div>
            </div>
        </div>
    </div>
</Preview>

| Level | Tokens | Purpose |
|-------|--------|---------|
| **Micro** | space-1, space-2, space-3 | Within components: icon gaps, text-to-icon, internal padding |
| **Meso** | space-4, space-5, space-6 | Between components: card padding, form rows, button groups |
| **Macro** | space-8, space-12 | Page structure: section breaks, hero areas, major separations |

---

## Anatomy of a Component

Every well-spaced component is built from the same tokens. Here's a card with its spacing made visible:

<Preview title="Card Spacing Anatomy">
    <div style="max-width: 360px; position: relative;">
        <div style="border: 1px solid var(--bd); border-radius: var(--r-l); overflow: hidden;">
            <div style="padding: var(--space-5); position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: var(--space-5); background: oklch(from var(--accent) l c h / .06); border-bottom: 1px dashed oklch(from var(--accent) l c h / .2);"></div>
                <div style="position: absolute; top: 0; left: 0; bottom: 0; width: var(--space-5); background: oklch(from var(--accent) l c h / .06); border-right: 1px dashed oklch(from var(--accent) l c h / .2);"></div>
                <div style="position: relative;">
                    <div style="font-family: var(--ff-m); font-size: .5625rem; color: var(--accent); text-transform: uppercase; letter-spacing: .06em; margin-bottom: var(--space-2);">Category</div>
                    <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1);">
                        <div style="font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4); background: oklch(from var(--ok) l c h / .1); padding: 1px 4px; border-radius: 2px;">space-2</div>
                    </div>
                    <div style="font-family: var(--ff-d); font-size: 1.25rem; letter-spacing: -0.02em; margin-bottom: var(--space-3);">Component Title</div>
                    <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1);">
                        <div style="font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4); background: oklch(from var(--ok) l c h / .1); padding: 1px 4px; border-radius: 2px;">space-3</div>
                    </div>
                    <div style="font-size: .875rem; color: var(--fg-2); line-height: 1.6; margin-bottom: var(--space-4);">Body text with enough room to breathe. The spacing between title and body is smaller than body to actions.</div>
                    <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1);">
                        <div style="font-family: var(--ff-m); font-size: .5rem; color: var(--fg-4); background: oklch(from var(--ok) l c h / .1); padding: 1px 4px; border-radius: 2px;">space-4</div>
                    </div>
                    <div style="display: flex; gap: var(--space-3);">
                        <button class="Button Button--primary" style="font-size: .85rem;">Primary</button>
                        <button class="Button" style="font-size: .85rem;">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
        <div style="font-family: var(--ff-m); font-size: .6rem; color: var(--fg-3); margin-top: var(--space-2); text-align: center;">Padding: space-5 (20px) · Internal gaps: space-2 to space-4</div>
    </div>
</Preview>

The principle: **proximity encodes relationship**. Title-to-body (space-3) is tighter than body-to-actions (space-4), because the title *describes* the body, while the actions are a separate concern.

---

## Density Modes

The same component structure at different spacing densities. Same tokens, different context.

<Preview title="Density Comparison">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); width: 100%;">
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">Compact</div>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-2);">
                <div style="font-weight: 600; font-size: .85rem; margin-bottom: var(--space-1);">Card Title</div>
                <div style="font-size: .75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Dense data UI</div>
                <button class="Button Button--primary" style="padding: var(--space-1) var(--space-2); font-size: .75rem; width: 100%;">Action</button>
            </div>
        </div>
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Comfortable ✓</div>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4);">
                <div style="font-weight: 600; margin-bottom: var(--space-2);">Card Title</div>
                <div style="font-size: .875rem; color: var(--fg-3); margin-bottom: var(--space-3);">Default density</div>
                <button class="Button Button--primary" style="width: 100%;">Action</button>
            </div>
        </div>
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">Spacious</div>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-6);">
                <div style="font-weight: 600; font-size: 1.1rem; margin-bottom: var(--space-3);">Card Title</div>
                <div style="color: var(--fg-3); margin-bottom: var(--space-5);">Marketing layout</div>
                <button class="Button Button--primary" style="padding: var(--space-3) var(--space-6); width: 100%;">Action</button>
            </div>
        </div>
    </div>
</Preview>

**Compact** (space-1 to space-3): Data tables, admin panels, dashboards — where information density matters more than breathing room.

**Comfortable** (space-3 to space-5): The default. Product UIs, documentation, forms — the right balance of density and clarity.

**Spacious** (space-5 to space-8): Marketing pages, landing pages, editorial layouts — where every element gets room to be appreciated.

---

## Touch Targets

Mobile interfaces need minimum tap areas of **44×44px** (Apple HIG) or **48×48px** (Material). Here's how spacing tokens build compliant touch targets:

<Preview title="Touch Target Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <div style="width: 44px; height: 44px; border: 2px dashed var(--warn); border-radius: var(--r-s); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <div style="font-family: var(--ff-m); font-size: .5rem; color: var(--warn);">44px</div>
            </div>
            <div>
                <div style="font-size: .85rem; font-weight: 600;">Apple minimum</div>
                <div style="font-size: .75rem; color: var(--fg-3); font-family: var(--ff-m);">space-2 padding + ~28px content = 44px</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <div style="width: 48px; height: 48px; border: 2px dashed var(--accent); border-radius: var(--r-s); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <div style="font-family: var(--ff-m); font-size: .5rem; color: var(--accent);">48px</div>
            </div>
            <div>
                <div style="font-size: .85rem; font-weight: 600;">Material minimum (space-12)</div>
                <div style="font-size: .75rem; color: var(--fg-3); font-family: var(--ff-m);">space-3 padding + ~24px content = 48px</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-4);">
            <button class="Button Button--primary" style="height: 48px; display: flex; align-items: center; flex-shrink: 0;">Tap Target</button>
            <div>
                <div style="font-size: .85rem; font-weight: 600;">Standard default button</div>
                <div style="font-size: .75rem; color: var(--fg-3); font-family: var(--ff-m);">padding: space-2 space-4 → 40×48px ✓</div>
            </div>
        </div>
    </div>
</Preview>

The key insight: you don't need a special "touch target" token. Standard button padding (`space-2` vertical, `space-4` horizontal) with 1rem font size naturally produces targets that meet accessibility guidelines.

---

## Usage Guidelines

### Component Internal Spacing

Use smaller values (1-4) for padding and gaps within components.

<Preview title="Button Padding">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <button class="Button Button--primary">
                Standard Button
            </button>
            <code style="margin-left: var(--space-3); font-size: 0.85em;">padding: var(--space-2) var(--space-4)</code>
        </div>
        <div>
            <button class="Button Button--primary" style="padding: var(--space-1) var(--space-2); font-size: 0.85rem;">
                Small Button
            </button>
            <code style="margin-left: var(--space-3); font-size: 0.85em;">padding: var(--space-1) var(--space-2)</code>
        </div>
    </div>
</Preview>

```css
/* Buttons */
.Button { padding: var(--space-2) var(--space-4); }
.Button--small { padding: var(--space-1) var(--space-2); }
.Button--large { padding: var(--space-3) var(--space-6); }

/* Inputs */
.Input { padding: var(--space-2) var(--space-3); }

/* Cards */
.Card-body { padding: var(--space-4); }
```

### Component Gaps

Use consistent gaps between related elements.

<Preview title="Gap Spacing">
    <div style="display: flex; flex-direction: column; gap: var(--space-6); width: 100%;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Tight (--space-2)</small>
            <div style="display: flex; gap: var(--space-2);">
                <span class="Badge">Tag</span>
                <span class="Badge">Tag</span>
                <span class="Badge">Tag</span>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Standard (--space-4)</small>
            <div style="display: flex; gap: var(--space-4);">
                <button class="Button Button--primary">Save</button>
                <button class="Button">Cancel</button>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Loose (--space-6)</small>
            <div style="display: flex; gap: var(--space-6);">
                <div style="padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m);">Card A</div>
                <div style="padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m);">Card B</div>
            </div>
        </div>
    </div>
</Preview>

```css
/* Tight - inline elements */
gap: var(--space-2);

/* Standard - buttons, form rows */
gap: var(--space-4);

/* Loose - cards, sections */
gap: var(--space-6);
```

### Layout Spacing

Use larger values (6-12) for page-level spacing.

<Preview title="Section Spacing">
    <div style="display: flex; flex-direction: column; width: 100%; border: 1px solid var(--bd); border-radius: var(--r-m); overflow: hidden;">
        <div style="padding: var(--space-6); background: var(--bg-s); border-bottom: 1px solid var(--bd);">
            <strong>Header</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-6)</code>
        </div>
        <div style="padding: var(--space-8);">
            <strong>Main Content</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-8)</code>
            <div style="margin-top: var(--space-6); padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-s);">
                <small>Nested section with margin-top: var(--space-6)</small>
            </div>
        </div>
        <div style="padding: var(--space-4); background: var(--bg-s); border-top: 1px solid var(--bd);">
            <strong>Footer</strong>
            <code style="float: right; font-size: 0.8em;">padding: var(--space-4)</code>
        </div>
    </div>
</Preview>

```css
/* Page container */
.container { padding: 0 var(--space-6); }

/* Section margins */
.section { margin-bottom: var(--space-12); }

/* Content blocks */
.content > * + * { margin-top: var(--space-6); }
```

---

## Spacing Patterns

### Stack Pattern

Vertical spacing between block elements.

<Preview title="Stack Spacing">
    <div class="Layout-stack" style="max-width: 300px;">
        <div style="padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-s);">First item</div>
        <div style="padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-s);">Second item</div>
        <div style="padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-s);">Third item</div>
    </div>
</Preview>

```css
.Layout-stack { gap: var(--space-4); }
.Layout-stack--tight { gap: var(--space-2); }
.Layout-stack--loose { gap: var(--space-8); }
```

### Inset Pattern

Equal padding on all sides.

<Preview title="Inset Variations">
    <div style="display: flex; gap: var(--space-4);">
        <div style="padding: var(--space-2); background: var(--bg-s); border: 1px dashed var(--bd-s); border-radius: var(--r-s);">
            <div style="background: var(--accent); color: white; padding: var(--space-2); border-radius: var(--r-s); font-size: 0.8em;">space-2</div>
        </div>
        <div style="padding: var(--space-4); background: var(--bg-s); border: 1px dashed var(--bd-s); border-radius: var(--r-s);">
            <div style="background: var(--accent); color: white; padding: var(--space-2); border-radius: var(--r-s); font-size: 0.8em;">space-4</div>
        </div>
        <div style="padding: var(--space-6); background: var(--bg-s); border: 1px dashed var(--bd-s); border-radius: var(--r-s);">
            <div style="background: var(--accent); color: white; padding: var(--space-2); border-radius: var(--r-s); font-size: 0.8em;">space-6</div>
        </div>
    </div>
</Preview>

### Squish Pattern

Reduced vertical padding (common for buttons and pills).

<Preview title="Squish Inset">
    <div style="display: flex; gap: var(--space-4); align-items: center;">
        <div style="padding: var(--space-1) var(--space-3); background: var(--accent); color: white; border-radius: var(--r-s); font-size: 0.85em;">
            Squish: 1 × 3
        </div>
        <div style="padding: var(--space-2) var(--space-4); background: var(--accent); color: white; border-radius: var(--r-s);">
            Squish: 2 × 4
        </div>
        <div style="padding: var(--space-3) var(--space-6); background: var(--accent); color: white; border-radius: var(--r-s);">
            Squish: 3 × 6
        </div>
    </div>
</Preview>

```css
/* Squish ratios (vertical × horizontal) */
padding: var(--space-1) var(--space-3); /* 1:3 - pills, small tags */
padding: var(--space-2) var(--space-4); /* 1:2 - buttons */
padding: var(--space-3) var(--space-6); /* 1:2 - large buttons */
```

---

## Responsive Spacing

Adjust spacing at different breakpoints for optimal density.

```css
/* Base mobile spacing */
.container {
  padding: 0 var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### Spacing Scale by Context

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Page padding | space-4 | space-6 | space-8 |
| Section gap | space-6 | space-8 | space-12 |
| Card padding | space-3 | space-4 | space-4 |
| Component gap | space-2 | space-3 | space-4 |

---

## Best Practices

### Do

- ✓ **Use tokens, not arbitrary values** — `var(--space-4)` not `15px`
- ✓ **Be consistent** — Same spacing for same relationships
- ✓ **Create hierarchy** — More space = more separation
- ✓ **Use the scale** — Jump by meaningful increments (2→4→6, not 2→3→4)

### Don't

- ✗ **Mix units** — Don't combine px and rem arbitrarily
- ✗ **Invent values** — Stick to the scale
- ✗ **Overspace** — Dense UIs can feel more professional
- ✗ **Underspace** — Cramped layouts hurt readability

<Preview title="Spacing Hierarchy">
    <div style="display: flex; gap: var(--space-8); width: 100%;">
        <div style="flex: 1;">
            <small style="color: oklch(55% 0.2 25); font-weight: 600; display: block; margin-bottom: var(--space-2);">❌ Inconsistent</small>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: 15px;">
                <div style="margin-bottom: 10px; font-weight: 600;">Title</div>
                <div style="margin-bottom: 18px; color: var(--fg-3);">Description text</div>
                <button class="Button Button--primary" style="margin-top: 12px;">Action</button>
            </div>
        </div>
        <div style="flex: 1;">
            <small style="color: oklch(55% 0.15 150); font-weight: 600; display: block; margin-bottom: var(--space-2);">✓ Consistent</small>
            <div style="border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4);">
                <div style="margin-bottom: var(--space-2); font-weight: 600;">Title</div>
                <div style="margin-bottom: var(--space-4); color: var(--fg-3);">Description text</div>
                <button class="Button Button--primary">Action</button>
            </div>
        </div>
    </div>
</Preview>

---

## Quick Reference

```css
/* Micro */
var(--space-1)  /* 4px  - Icon gaps, borders */
var(--space-2)  /* 8px  - Button padding, small gaps */

/* Standard */
var(--space-3)  /* 12px - Input padding */
var(--space-4)  /* 16px - Card padding, default gap */

/* Comfortable */
var(--space-5)  /* 20px - Section spacing */
var(--space-6)  /* 24px - Component margins */

/* Spacious */
var(--space-8)  /* 32px - Section breaks */
var(--space-12) /* 48px - Page sections */
```
