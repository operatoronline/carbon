---
title: Rating
---

# Rating

Ratings allow users to view or provide feedback using a visual scale, typically stars.

## Basic Rating

A simple star rating display.

<Preview>
  <div class="Rating">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating">
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph ph-star Rating-star"></i>
</div>
```

## Interactive Rating

Allow users to select a rating.

<Preview>
  <div class="Rating Rating--interactive" role="radiogroup" aria-label="Rating">
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="1 star">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="2 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="3 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="4 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="5 stars">
      <i class="ph ph-star"></i>
    </button>
  </div>
</Preview>

```html
<div class="Rating Rating--interactive" role="radiogroup" aria-label="Rating">
  <button class="Rating-star" role="radio" aria-checked="false">
    <i class="ph ph-star"></i>
  </button>
  <!-- Repeat for each star -->
</div>
```

## Sizes

Ratings come in different sizes.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <span class="text-sm text-secondary">Small</span>
      <div class="Rating Rating--sm">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Default</span>
      <div class="Rating">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Large</span>
      <div class="Rating Rating--lg">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Rating Rating--sm">...</div>
<div class="Rating">...</div>
<div class="Rating Rating--lg">...</div>
```

## With Count

Show the number of ratings alongside the stars.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-3);">
    <div class="Rating-display">
      <div class="Rating">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--half"></i>
      </div>
      <span class="Rating-value">4.5</span>
      <span class="Rating-count">(128 reviews)</span>
    </div>
    <div class="Rating-display">
      <div class="Rating Rating--sm">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
      <span class="Rating-value Rating-value--sm">4.0</span>
    </div>
  </div>
</Preview>

```html
<div class="Rating-display">
  <div class="Rating">
    <!-- Stars -->
  </div>
  <span class="Rating-value">4.5</span>
  <span class="Rating-count">(128 reviews)</span>
</div>
```

## Half Stars

Support for half-star precision.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-3);">
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
  </div>
</Preview>

```html
<i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
```

## Different Icons

Use hearts, thumbs, or custom icons.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <span class="text-sm text-secondary">Hearts</span>
      <div class="Rating Rating--hearts">
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph ph-heart Rating-star"></i>
        <i class="ph ph-heart Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Thumbs</span>
      <div class="Rating Rating--thumbs">
        <button class="Rating-thumb Rating-thumb--up">
          <i class="ph ph-thumbs-up"></i>
          <span>42</span>
        </button>
        <button class="Rating-thumb Rating-thumb--down">
          <i class="ph ph-thumbs-down"></i>
          <span>3</span>
        </button>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Emoji</span>
      <div class="Rating Rating--emoji">
        <button class="Rating-emoji">😞</button>
        <button class="Rating-emoji">😐</button>
        <button class="Rating-emoji Rating-emoji--selected">🙂</button>
        <button class="Rating-emoji">😊</button>
        <button class="Rating-emoji">🤩</button>
      </div>
    </div>
  </div>
</Preview>

```html
<!-- Hearts -->
<div class="Rating Rating--hearts">
  <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
  ...
</div>

<!-- Thumbs -->
<div class="Rating Rating--thumbs">
  <button class="Rating-thumb Rating-thumb--up">
    <i class="ph ph-thumbs-up"></i>
    <span>42</span>
  </button>
  <button class="Rating-thumb Rating-thumb--down">
    <i class="ph ph-thumbs-down"></i>
    <span>3</span>
  </button>
</div>

<!-- Emoji -->
<div class="Rating Rating--emoji">
  <button class="Rating-emoji">😞</button>
  <button class="Rating-emoji Rating-emoji--selected">🙂</button>
  ...
</div>
```

## Rating Breakdown

Show distribution of ratings.

<Preview>
  <div class="Rating-breakdown">
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">5 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 65%;"></div>
      </div>
      <span class="Rating-breakdownCount">65%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">4 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 20%;"></div>
      </div>
      <span class="Rating-breakdownCount">20%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">3 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 10%;"></div>
      </div>
      <span class="Rating-breakdownCount">10%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">2 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 3%;"></div>
      </div>
      <span class="Rating-breakdownCount">3%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">1 star</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 2%;"></div>
      </div>
      <span class="Rating-breakdownCount">2%</span>
    </div>
  </div>
</Preview>

```html
<div class="Rating-breakdown">
  <div class="Rating-breakdownRow">
    <span class="Rating-breakdownLabel">5 stars</span>
    <div class="Rating-breakdownBar">
      <div class="Rating-breakdownFill" style="width: 65%;"></div>
    </div>
    <span class="Rating-breakdownCount">65%</span>
  </div>
  <!-- Repeat for each rating level -->
</div>
```

## Readonly

Display-only rating (no interaction).

<Preview>
  <div class="Rating Rating--readonly">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating Rating--readonly">
  <!-- Stars -->
</div>
```

## Disabled

Dimmed, non-interactive state.

<Preview>
  <div class="Rating Rating--disabled">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating Rating--disabled">
  <!-- Stars -->
</div>
```

## With Label

Include a text label.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <label class="Rating-label">How would you rate this product?</label>
      <div class="Rating Rating--interactive" role="radiogroup">
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
      </div>
    </div>
    <div>
      <label class="Rating-label">
        Your rating
        <span class="Rating-required">*</span>
      </label>
      <div class="Rating Rating--interactive" role="radiogroup">
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
      </div>
      <span class="Rating-helper">4 out of 5 stars</span>
    </div>
  </div>
</Preview>

```html
<label class="Rating-label">
  Your rating
  <span class="Rating-required">*</span>
</label>
<div class="Rating Rating--interactive" role="radiogroup">
  <!-- Stars -->
</div>
<span class="Rating-helper">4 out of 5 stars</span>
```

## CSS Reference

```css
/* Base rating container */
.Rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

/* Star element */
.Rating-star {
  color: var(--border-strong);
  font-size: 1.25rem;
  transition: color 0.15s, transform 0.15s;
}

.Rating-star--filled,
.Rating-star--half {
  color: oklch(75% 0.15 80); /* Gold/amber */
}

/* Sizes */
.Rating--sm .Rating-star { font-size: 1rem; }
.Rating--lg .Rating-star { font-size: 1.75rem; }

/* Interactive */
.Rating--interactive .Rating-star {
  cursor: pointer;
  background: none;
  border: none;
  padding: var(--space-1);
}
.Rating--interactive .Rating-star:hover {
  transform: scale(1.1);
}
.Rating--interactive .Rating-star:hover,
.Rating--interactive .Rating-star:hover ~ .Rating-star {
  color: oklch(75% 0.15 80);
}

/* Display with value */
.Rating-display {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.Rating-value {
  font-weight: 600;
  font-size: var(--text-lg);
}
.Rating-value--sm { font-size: var(--text-sm); }
.Rating-count {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

/* Hearts variant */
.Rating--hearts .Rating-star--filled {
  color: oklch(60% 0.25 15); /* Red */
}

/* Thumbs variant */
.Rating--thumbs {
  gap: var(--space-3);
}
.Rating-thumb {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  transition: all 0.15s;
}
.Rating-thumb:hover {
  background: var(--bg-secondary);
}
.Rating-thumb--up:hover { color: oklch(55% 0.15 150); }
.Rating-thumb--down:hover { color: oklch(55% 0.2 25); }

/* Emoji variant */
.Rating--emoji {
  gap: var(--space-2);
}
.Rating-emoji {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.15s;
  padding: var(--space-1);
}
.Rating-emoji:hover,
.Rating-emoji--selected {
  opacity: 1;
  transform: scale(1.2);
}

/* Breakdown */
.Rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 300px;
}
.Rating-breakdownRow {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.Rating-breakdownLabel {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  min-width: 60px;
}
.Rating-breakdownBar {
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.Rating-breakdownFill {
  height: 100%;
  background: oklch(75% 0.15 80);
  border-radius: var(--radius-full);
}
.Rating-breakdownCount {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  min-width: 40px;
  text-align: right;
}

/* States */
.Rating--readonly { pointer-events: none; }
.Rating--disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Labels */
.Rating-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-1);
}
.Rating-required { color: oklch(55% 0.2 25); }
.Rating-helper {
  display: block;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin-top: var(--space-1);
}
```

## JavaScript

```js
// Interactive rating
document.querySelectorAll('.Rating--interactive').forEach(rating => {
  const stars = rating.querySelectorAll('.Rating-star');
  let currentRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      currentRating = index + 1;
      updateStars();
    });

    star.addEventListener('mouseenter', () => {
      highlightStars(index + 1);
    });
  });

  rating.addEventListener('mouseleave', () => {
    highlightStars(currentRating);
  });

  function updateStars() {
    stars.forEach((star, i) => {
      const icon = star.querySelector('i');
      star.setAttribute('aria-checked', i < currentRating);
      star.classList.toggle('Rating-star--filled', i < currentRating);
      icon.className = i < currentRating ? 'ph-fill ph-star' : 'ph ph-star';
    });
  }

  function highlightStars(count) {
    stars.forEach((star, i) => {
      const icon = star.querySelector('i');
      icon.className = i < count ? 'ph-fill ph-star' : 'ph ph-star';
    });
  }
});
```

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Rating` | Base rating container |
| `.Rating--sm` | Small size variant |
| `.Rating--lg` | Large size variant |
| `.Rating--interactive` | Enables click/hover interactions |
| `.Rating--readonly` | Display-only (no pointer events) |
| `.Rating--disabled` | Dimmed, non-interactive state |
| `.Rating--hearts` | Heart icon variant (red) |
| `.Rating--thumbs` | Thumbs up/down variant |
| `.Rating--emoji` | Emoji-based rating variant |
| `.Rating-star` | Individual star element |
| `.Rating-star--filled` | Filled/active star |
| `.Rating-star--half` | Half-filled star |
| `.Rating-display` | Container for rating + value + count |
| `.Rating-value` | Numeric rating value |
| `.Rating-value--sm` | Small value text |
| `.Rating-count` | Review count text |
| `.Rating-thumb` | Thumbs button container |
| `.Rating-thumb--up` | Thumbs up button |
| `.Rating-thumb--down` | Thumbs down button |
| `.Rating-emoji` | Emoji button |
| `.Rating-emoji--selected` | Selected emoji |
| `.Rating-breakdown` | Rating distribution container |
| `.Rating-breakdownRow` | Single breakdown row |
| `.Rating-breakdownBar` | Progress bar track |
| `.Rating-breakdownFill` | Progress bar fill |
| `.Rating-label` | Label for rating input |
| `.Rating-required` | Required field indicator |
| `.Rating-helper` | Helper text below rating |

</div>

## Accessibility

- Use `role="radiogroup"` on interactive rating containers
- Add `role="radio"` and `aria-checked` to each star button
- Include `aria-label` with star count (e.g., "3 stars")
- Use `aria-label` on the container (e.g., "Rating")
- Support keyboard navigation (arrow keys to change, Enter/Space to select)
- Ensure visible focus indicators on interactive elements
- Announce rating changes to screen readers
- For read-only displays, use `aria-label` to convey the rating value
- Provide sufficient color contrast for filled vs empty states
