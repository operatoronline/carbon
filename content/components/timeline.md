---
title: Timeline
---

# Timeline

Timelines display a list of events in chronological order, commonly used for activity feeds, order tracking, or history views.

## Basic Timeline

A simple vertical timeline with events.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Order placed</div>
        <div class="Timeline-time">Today, 2:30 PM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Payment confirmed</div>
        <div class="Timeline-time">Today, 2:32 PM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Order shipped</div>
        <div class="Timeline-time">Today, 4:15 PM</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline">
  <div class="Timeline-item">
    <div class="Timeline-marker"></div>
    <div class="Timeline-content">
      <div class="Timeline-title">Order placed</div>
      <div class="Timeline-time">Today, 2:30 PM</div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

## With Descriptions

Add descriptions for more context.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Application submitted</div>
        <div class="Timeline-description">Your application has been received and is being reviewed by our team.</div>
        <div class="Timeline-time">Jan 15, 2026</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Phone screening scheduled</div>
        <div class="Timeline-description">We'd like to schedule a 30-minute call to discuss your experience.</div>
        <div class="Timeline-time">Jan 18, 2026</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Technical interview</div>
        <div class="Timeline-description">A 1-hour technical discussion with the engineering team.</div>
        <div class="Timeline-time">Jan 22, 2026</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-item">
  <div class="Timeline-marker"></div>
  <div class="Timeline-content">
    <div class="Timeline-title">Application submitted</div>
    <div class="Timeline-description">Your application has been received...</div>
    <div class="Timeline-time">Jan 15, 2026</div>
  </div>
</div>
```

## With Icons

Use icons instead of simple markers.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-package"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Package received at facility</div>
        <div class="Timeline-time">Feb 1, 9:00 AM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-truck"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Out for delivery</div>
        <div class="Timeline-time">Feb 2, 8:30 AM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon Timeline-marker--success">
        <i class="ph ph-check"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Delivered</div>
        <div class="Timeline-description">Signed by: J. Smith</div>
        <div class="Timeline-time">Feb 2, 2:15 PM</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-marker Timeline-marker--icon">
  <i class="ph ph-package"></i>
</div>

<div class="Timeline-marker Timeline-marker--icon Timeline-marker--success">
  <i class="ph ph-check"></i>
</div>
```

## Status Variants

Different colors indicate status.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Build passed</div>
        <div class="Timeline-time">2 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--warning"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Tests have warnings</div>
        <div class="Timeline-time">5 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--error"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Deployment failed</div>
        <div class="Timeline-time">8 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--info"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Pipeline started</div>
        <div class="Timeline-time">10 minutes ago</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-marker Timeline-marker--success"></div>
<div class="Timeline-marker Timeline-marker--warning"></div>
<div class="Timeline-marker Timeline-marker--error"></div>
<div class="Timeline-marker Timeline-marker--info"></div>
```

## Alternating Layout

Events alternate between left and right.

<Preview>
  <div class="Timeline Timeline--alternating">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Company founded</div>
        <div class="Timeline-description">Started in a small garage with big dreams.</div>
        <div class="Timeline-time">2015</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">First product launch</div>
        <div class="Timeline-description">Released our flagship product to market.</div>
        <div class="Timeline-time">2017</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Series A funding</div>
        <div class="Timeline-description">Raised $10M to accelerate growth.</div>
        <div class="Timeline-time">2019</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Global expansion</div>
        <div class="Timeline-description">Opened offices in 5 new countries.</div>
        <div class="Timeline-time">2022</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--alternating">
  <div class="Timeline-item">...</div>
  <div class="Timeline-item">...</div>
</div>
```

## Compact Timeline

A denser layout for activity feeds.

<Preview>
  <div class="Timeline Timeline--compact">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Sarah</span> commented on <span class="Timeline-link">Issue #42</span>
        <span class="Timeline-time">5m ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Mike</span> merged <span class="Timeline-link">PR #128</span>
        <span class="Timeline-time">12m ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Alex</span> closed <span class="Timeline-link">Issue #39</span>
        <span class="Timeline-time">1h ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Jordan</span> opened <span class="Timeline-link">Issue #43</span>
        <span class="Timeline-time">2h ago</span>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--compact">
  <div class="Timeline-item">
    <div class="Timeline-marker"></div>
    <div class="Timeline-content">
      <span class="Timeline-actor">Sarah</span> commented on 
      <span class="Timeline-link">Issue #42</span>
      <span class="Timeline-time">5m ago</span>
    </div>
  </div>
</div>
```

## Horizontal Timeline

Display events horizontally (useful for progress steps).

<Preview>
  <div class="Timeline Timeline--horizontal">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Ordered</div>
        <div class="Timeline-time">Jan 28</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Shipped</div>
        <div class="Timeline-time">Jan 30</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--active"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">In Transit</div>
        <div class="Timeline-time">Feb 1</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Delivered</div>
        <div class="Timeline-time">Est. Feb 3</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--horizontal">
  <div class="Timeline-item">
    <div class="Timeline-marker Timeline-marker--success"></div>
    <div class="Timeline-content">
      <div class="Timeline-title">Ordered</div>
      <div class="Timeline-time">Jan 28</div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

## With Actions

Include actions within timeline items.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-chat-circle"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-header">
          <div class="Timeline-title">New comment from Alex</div>
          <div class="Timeline-time">Just now</div>
        </div>
        <div class="Timeline-body">
          <p>Looks great! Just a few minor suggestions on the styling.</p>
        </div>
        <div class="Timeline-actions">
          <button class="Button Button--ghost Button--sm">Reply</button>
          <button class="Button Button--ghost Button--sm">View</button>
        </div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-git-pull-request"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-header">
          <div class="Timeline-title">Pull request opened</div>
          <div class="Timeline-time">2 hours ago</div>
        </div>
        <div class="Timeline-body">
          <p><strong>#142</strong> — Add new authentication flow</p>
        </div>
        <div class="Timeline-actions">
          <button class="Button Button--primary Button--sm">Review</button>
          <button class="Button Button--ghost Button--sm">View Changes</button>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-content">
  <div class="Timeline-header">
    <div class="Timeline-title">New comment from Alex</div>
    <div class="Timeline-time">Just now</div>
  </div>
  <div class="Timeline-body">
    <p>Looks great! Just a few minor suggestions...</p>
  </div>
  <div class="Timeline-actions">
    <button class="Button Button--ghost Button--sm">Reply</button>
    <button class="Button Button--ghost Button--sm">View</button>
  </div>
</div>
```

## CSS Reference

```css
/* Base timeline */
.Timeline {
  position: relative;
  padding-left: var(--space-6);
}

/* Vertical line */
.Timeline::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-subtle);
}

/* Timeline item */
.Timeline-item {
  position: relative;
  padding-bottom: var(--space-6);
}

.Timeline-item:last-child {
  padding-bottom: 0;
}

/* Marker dot */
.Timeline-marker {
  position: absolute;
  left: calc(-1 * var(--space-6) - 1px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--border-strong);
}

/* Icon markers */
.Timeline-marker--icon {
  width: 28px;
  height: 28px;
  left: calc(-1 * var(--space-6) - 9px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: 2px solid var(--border-subtle);
  font-size: 14px;
  color: var(--text-secondary);
}

/* Status variants */
.Timeline-marker--success {
  background: oklch(55% 0.15 150);
  border-color: oklch(55% 0.15 150);
}
.Timeline-marker--warning {
  background: oklch(70% 0.15 80);
  border-color: oklch(70% 0.15 80);
}
.Timeline-marker--error {
  background: oklch(55% 0.2 25);
  border-color: oklch(55% 0.2 25);
}
.Timeline-marker--info {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}
.Timeline-marker--active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 4px oklch(60% 0.15 250 / 0.2);
}

/* Content */
.Timeline-content {
  padding-top: 0;
}

.Timeline-title {
  font-weight: 500;
  color: var(--text-primary);
}

.Timeline-description {
  margin-top: var(--space-1);
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.Timeline-time {
  margin-top: var(--space-1);
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

/* Compact variant */
.Timeline--compact .Timeline-item {
  padding-bottom: var(--space-3);
}
.Timeline--compact .Timeline-content {
  font-size: var(--text-sm);
}
.Timeline--compact .Timeline-time {
  display: inline;
  margin-left: var(--space-2);
}

/* Horizontal variant */
.Timeline--horizontal {
  display: flex;
  padding-left: 0;
}
.Timeline--horizontal::before {
  top: 5px;
  left: 0;
  right: 0;
  bottom: auto;
  height: 2px;
  width: auto;
}
.Timeline--horizontal .Timeline-item {
  flex: 1;
  padding-bottom: 0;
  padding-top: var(--space-6);
  text-align: center;
}
.Timeline--horizontal .Timeline-marker {
  left: 50%;
  top: calc(-1 * var(--space-6) + 2px);
  transform: translateX(-50%);
}
```

## API Reference

<div class="ApiTable">

| Class | Description |
|-------|-------------|
| `.Timeline` | Base timeline container |
| `.Timeline--compact` | Dense layout for activity feeds |
| `.Timeline--horizontal` | Horizontal layout variant |
| `.Timeline--alternating` | Alternating left/right layout |
| `.Timeline-item` | Individual timeline entry |
| `.Timeline-marker` | Dot/icon marker on the timeline |
| `.Timeline-marker--icon` | Marker with icon inside |
| `.Timeline-marker--success` | Green success marker |
| `.Timeline-marker--warning` | Yellow warning marker |
| `.Timeline-marker--error` | Red error marker |
| `.Timeline-marker--info` | Blue info marker |
| `.Timeline-marker--active` | Active/current marker with glow |
| `.Timeline-content` | Content container for an item |
| `.Timeline-header` | Header with title and time |
| `.Timeline-title` | Event title |
| `.Timeline-description` | Event description |
| `.Timeline-time` | Timestamp |
| `.Timeline-body` | Extended content area |
| `.Timeline-actions` | Action buttons for an item |
| `.Timeline-actor` | Person/entity name (compact) |
| `.Timeline-link` | Linked reference (compact) |

</div>

## Accessibility

- Use semantic list markup (`<ol>` or `<ul>`) for timeline structure
- Include `role="list"` and `role="listitem"` when using divs
- Ensure timestamps are machine-readable with `<time datetime="...">`
- Provide sufficient color contrast for status indicators
- Don't rely solely on color—use icons or text for status meaning
- For interactive timelines, ensure focusable elements are keyboard-accessible
- Use `aria-label` to describe timeline purpose (e.g., "Order history")
- Announce new items with `aria-live` for dynamically updating timelines
