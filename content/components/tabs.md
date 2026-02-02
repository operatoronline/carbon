# Tabs

Tabs organize content into separate views, showing one at a time.

## Basic Tabs

<Preview title="Basic Tabs">
    <div class="Tabs">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab" aria-selected="true">Overview</button>
            <button class="Tabs-tab" role="tab" aria-selected="false">Features</button>
            <button class="Tabs-tab" role="tab" aria-selected="false">Pricing</button>
        </div>
        <div class="Tabs-panel active" role="tabpanel">
            <p>Overview content goes here. This is the first panel.</p>
        </div>
    </div>
</Preview>

```html
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab">Overview</button>
        <button class="Tabs-tab" role="tab">Features</button>
        <button class="Tabs-tab" role="tab">Pricing</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel">
        Content...
    </div>
</div>
```

## Contained Tabs

Tabs with a visible container boundary.

<Preview title="Contained Tabs">
    <div class="Tabs Tabs--contained">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab">HTML</button>
            <button class="Tabs-tab" role="tab">CSS</button>
            <button class="Tabs-tab" role="tab">JS</button>
        </div>
        <div class="Tabs-panel active" role="tabpanel">
            <pre><code>&lt;div class="Button"&gt;Click me&lt;/div&gt;</code></pre>
        </div>
    </div>
</Preview>

```html
<div class="Tabs Tabs--contained">
    <div class="Tabs-list" role="tablist">...</div>
    <div class="Tabs-panel active" role="tabpanel">...</div>
</div>
```

## Pills Variant

Tab items styled as pills, useful for filters or categories.

<Preview title="Pill Tabs">
    <div class="Tabs Tabs--pills">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab">All</button>
            <button class="Tabs-tab" role="tab">Active</button>
            <button class="Tabs-tab" role="tab">Completed</button>
            <button class="Tabs-tab" role="tab">Archived</button>
        </div>
    </div>
</Preview>

```html
<div class="Tabs Tabs--pills">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab">All</button>
        ...
    </div>
</div>
```

## With Icons

Tabs can include icons alongside text.

<Preview title="Tabs with Icons">
    <div class="Tabs">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab">
                <i class="ph ph-house"></i>
                <span>Home</span>
            </button>
            <button class="Tabs-tab" role="tab">
                <i class="ph ph-gear"></i>
                <span>Settings</span>
            </button>
            <button class="Tabs-tab" role="tab">
                <i class="ph ph-user"></i>
                <span>Profile</span>
            </button>
        </div>
    </div>
</Preview>

```html
<button class="Tabs-tab" role="tab">
    <i class="ph ph-house"></i>
    <span>Home</span>
</button>
```

## Disabled Tab

<Preview title="Disabled Tab">
    <div class="Tabs">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab">Active</button>
            <button class="Tabs-tab" role="tab">Normal</button>
            <button class="Tabs-tab" role="tab" disabled>Disabled</button>
        </div>
    </div>
</Preview>

```html
<button class="Tabs-tab" role="tab" disabled>Disabled</button>
```

## JavaScript

Tabs require minimal JavaScript for panel switching:

```js
document.querySelectorAll('.Tabs').forEach(tabs => {
    const tabList = tabs.querySelector('.Tabs-list');
    const panels = tabs.querySelectorAll('.Tabs-panel');
    
    tabList.addEventListener('click', (e) => {
        const tab = e.target.closest('.Tabs-tab');
        if (!tab || tab.disabled) return;
        
        // Update tabs
        tabList.querySelectorAll('.Tabs-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        // Update panels (if using data-tab attributes)
        const index = Array.from(tabList.children).indexOf(tab);
        panels.forEach((p, i) => {
            p.classList.toggle('active', i === index);
        });
    });
});
```
