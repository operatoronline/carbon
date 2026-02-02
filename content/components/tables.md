# Tables

Tables organize and display data in rows and columns, making it easy to scan, compare, and analyze information.

---

## Basic Table

A standard table with header and body rows.

<Preview title="Basic Table">
    <table class="Table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Aiden</td>
                <td>Design Engineer</td>
                <td><span class="Badge Badge--success">Active</span></td>
            </tr>
            <tr>
                <td>Sarah</td>
                <td>Product Manager</td>
                <td><span class="Badge Badge--success">Active</span></td>
            </tr>
            <tr>
                <td>Marcus</td>
                <td>Developer</td>
                <td><span class="Badge">Inactive</span></td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<table class="Table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Aiden</td>
            <td>Design Engineer</td>
            <td><span class="Badge Badge--success">Active</span></td>
        </tr>
    </tbody>
</table>
```

---

## Bordered Table

Add borders between all cells.

<Preview title="Bordered Table">
    <table class="Table Table--bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>--space-4</code></td>
                <td>16px</td>
                <td>Base spacing unit</td>
            </tr>
            <tr>
                <td><code>--accent-primary</code></td>
                <td>oklch(60% 0.15 250)</td>
                <td>Primary brand color</td>
            </tr>
            <tr>
                <td><code>--font-sans</code></td>
                <td>DM Sans</td>
                <td>Primary typeface</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<table class="Table Table--bordered">...</table>
```

---

## Striped Rows

Alternate row backgrounds for easier scanning.

<Preview title="Striped Table">
    <table class="Table Table--striped">
        <thead>
            <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Feb 15</td>
                <td>Design Review</td>
                <td>Room A</td>
            </tr>
            <tr>
                <td>Feb 18</td>
                <td>Sprint Planning</td>
                <td>Room B</td>
            </tr>
            <tr>
                <td>Feb 20</td>
                <td>Team Standup</td>
                <td>Virtual</td>
            </tr>
            <tr>
                <td>Feb 22</td>
                <td>Retrospective</td>
                <td>Room A</td>
            </tr>
            <tr>
                <td>Feb 25</td>
                <td>Demo Day</td>
                <td>Auditorium</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<table class="Table Table--striped">...</table>
```

---

## Hoverable Rows

Highlight rows on hover for better tracking.

<Preview title="Hoverable Table">
    <table class="Table Table--hoverable">
        <thead>
            <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Widget Pro</td>
                <td>WP-001</td>
                <td>$29.99</td>
                <td>142</td>
            </tr>
            <tr>
                <td>Gadget Plus</td>
                <td>GP-002</td>
                <td>$49.99</td>
                <td>89</td>
            </tr>
            <tr>
                <td>Tool Basic</td>
                <td>TB-003</td>
                <td>$19.99</td>
                <td>256</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<table class="Table Table--hoverable">...</table>
```

---

## Compact Table

Reduced padding for dense data displays.

<Preview title="Compact Table">
    <table class="Table Table--compact Table--bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Value</th>
                <th>Change</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Alpha</td>
                <td>1,234</td>
                <td style="color: oklch(55% 0.15 150);">+5.2%</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Beta</td>
                <td>987</td>
                <td style="color: oklch(55% 0.2 25);">-2.1%</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Gamma</td>
                <td>2,456</td>
                <td style="color: oklch(55% 0.15 150);">+12.8%</td>
            </tr>
            <tr>
                <td>004</td>
                <td>Delta</td>
                <td>543</td>
                <td style="color: var(--text-secondary);">0.0%</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<table class="Table Table--compact">...</table>
```

---

## Sortable Columns

Indicate sortable columns with icons.

<Preview title="Sortable Table">
    <table class="Table Table--hoverable">
        <thead>
            <tr>
                <th class="Table-sortable Table-sortable--asc">
                    Name
                    <i class="ph ph-caret-up"></i>
                </th>
                <th class="Table-sortable">
                    Email
                    <i class="ph ph-caret-up-down"></i>
                </th>
                <th class="Table-sortable">
                    Joined
                    <i class="ph ph-caret-up-down"></i>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice Chen</td>
                <td>alice@example.com</td>
                <td>Jan 15, 2026</td>
            </tr>
            <tr>
                <td>Bob Martinez</td>
                <td>bob@example.com</td>
                <td>Feb 2, 2026</td>
            </tr>
            <tr>
                <td>Carol Kim</td>
                <td>carol@example.com</td>
                <td>Dec 8, 2025</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<th class="Table-sortable Table-sortable--asc">
    Name
    <i class="ph ph-caret-up"></i>
</th>
<th class="Table-sortable">
    Email
    <i class="ph ph-caret-up-down"></i>
</th>
```

---

## Selectable Rows

Add checkboxes for row selection.

<Preview title="Selectable Table">
    <table class="Table Table--hoverable">
        <thead>
            <tr>
                <th style="width: 40px;">
                    <label class="Checkbox" style="margin: 0;">
                        <input type="checkbox" class="Checkbox-input">
                        <span class="Checkbox-box"></span>
                    </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr class="Table-row--selected">
                <td>
                    <label class="Checkbox" style="margin: 0;">
                        <input type="checkbox" class="Checkbox-input" checked>
                        <span class="Checkbox-box"></span>
                    </label>
                </td>
                <td>Alice Chen</td>
                <td>alice@example.com</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>
                    <label class="Checkbox" style="margin: 0;">
                        <input type="checkbox" class="Checkbox-input">
                        <span class="Checkbox-box"></span>
                    </label>
                </td>
                <td>Bob Martinez</td>
                <td>bob@example.com</td>
                <td>Editor</td>
            </tr>
            <tr class="Table-row--selected">
                <td>
                    <label class="Checkbox" style="margin: 0;">
                        <input type="checkbox" class="Checkbox-input" checked>
                        <span class="Checkbox-box"></span>
                    </label>
                </td>
                <td>Carol Kim</td>
                <td>carol@example.com</td>
                <td>Viewer</td>
            </tr>
        </tbody>
    </table>
</Preview>

```html
<tr class="Table-row--selected">
    <td>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" checked>
            <span class="Checkbox-box"></span>
        </label>
    </td>
    <td>Alice Chen</td>
    ...
</tr>
```

---

## Table with Actions

Add action buttons to each row.

<Preview title="Table with Actions">
    <table class="Table Table--hoverable">
        <thead>
            <tr>
                <th>Project</th>
                <th>Owner</th>
                <th>Status</th>
                <th style="width: 100px;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div style="font-weight: 500;">Carbon Design</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">Design system</div>
                </td>
                <td>Aiden</td>
                <td><span class="Badge Badge--success">Active</span></td>
                <td>
                    <div style="display: flex; gap: var(--space-1);">
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="Edit">
                            <i class="ph ph-pencil"></i>
                        </button>
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="Delete">
                            <i class="ph ph-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="font-weight: 500;">Marketing Site</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">Website</div>
                </td>
                <td>Sarah</td>
                <td><span class="Badge Badge--warning">Review</span></td>
                <td>
                    <div style="display: flex; gap: var(--space-1);">
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="Edit">
                            <i class="ph ph-pencil"></i>
                        </button>
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="Delete">
                            <i class="ph ph-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</Preview>

---

## Responsive Table

Horizontal scroll for tables on small screens.

<Preview title="Responsive Table">
    <div class="Table-responsive">
        <table class="Table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Last Updated</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>P001</td>
                    <td>Wireless Headphones Pro</td>
                    <td>Electronics</td>
                    <td>$149.99</td>
                    <td>234</td>
                    <td>Feb 2, 2026</td>
                    <td><span class="Badge Badge--success">In Stock</span></td>
                </tr>
                <tr>
                    <td>P002</td>
                    <td>Mechanical Keyboard RGB</td>
                    <td>Electronics</td>
                    <td>$89.99</td>
                    <td>56</td>
                    <td>Feb 1, 2026</td>
                    <td><span class="Badge Badge--warning">Low Stock</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</Preview>

```html
<div class="Table-responsive">
    <table class="Table">...</table>
</div>
```

---

## Sticky Header

Keep header visible while scrolling.

<Preview title="Sticky Header Table">
    <div class="Table-container" style="max-height: 200px; overflow-y: auto;">
        <table class="Table Table--stickyHeader Table--striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Alice Chen</td><td>Engineering</td><td>SF</td></tr>
                <tr><td>Bob Martinez</td><td>Design</td><td>NYC</td></tr>
                <tr><td>Carol Kim</td><td>Product</td><td>LA</td></tr>
                <tr><td>David Lee</td><td>Engineering</td><td>SF</td></tr>
                <tr><td>Emma Wilson</td><td>Marketing</td><td>NYC</td></tr>
                <tr><td>Frank Brown</td><td>Sales</td><td>Chicago</td></tr>
                <tr><td>Grace Taylor</td><td>Engineering</td><td>Remote</td></tr>
                <tr><td>Henry Davis</td><td>Design</td><td>SF</td></tr>
            </tbody>
        </table>
    </div>
</Preview>

```html
<div class="Table-container" style="max-height: 200px; overflow-y: auto;">
    <table class="Table Table--stickyHeader">...</table>
</div>
```

---

## Pagination

Add pagination below tables for large data sets.

<Preview title="Table with Pagination">
    <div class="Table-wrapper">
        <table class="Table Table--hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alice Chen</td>
                    <td>alice@example.com</td>
                    <td>Admin</td>
                    <td><span class="Badge Badge--success">Active</span></td>
                </tr>
                <tr>
                    <td>Bob Martinez</td>
                    <td>bob@example.com</td>
                    <td>Editor</td>
                    <td><span class="Badge Badge--success">Active</span></td>
                </tr>
                <tr>
                    <td>Carol Kim</td>
                    <td>carol@example.com</td>
                    <td>Viewer</td>
                    <td><span class="Badge">Inactive</span></td>
                </tr>
                <tr>
                    <td>David Lee</td>
                    <td>david@example.com</td>
                    <td>Editor</td>
                    <td><span class="Badge Badge--success">Active</span></td>
                </tr>
                <tr>
                    <td>Emma Wilson</td>
                    <td>emma@example.com</td>
                    <td>Viewer</td>
                    <td><span class="Badge Badge--warning">Pending</span></td>
                </tr>
            </tbody>
        </table>
        <div class="Table-pagination">
            <span class="Table-pagination-info">Showing 1-5 of 24 results</span>
            <div class="Table-pagination-controls">
                <button class="Button Button--icon Button--secondary Button--small" disabled aria-label="Previous page">
                    <i class="ph ph-caret-left"></i>
                </button>
                <button class="Button Button--secondary Button--small Table-pagination-page Table-pagination-page--active">1</button>
                <button class="Button Button--secondary Button--small Table-pagination-page">2</button>
                <button class="Button Button--secondary Button--small Table-pagination-page">3</button>
                <span class="Table-pagination-ellipsis">...</span>
                <button class="Button Button--secondary Button--small Table-pagination-page">5</button>
                <button class="Button Button--icon Button--secondary Button--small" aria-label="Next page">
                    <i class="ph ph-caret-right"></i>
                </button>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Table-wrapper">
    <table class="Table">...</table>
    <div class="Table-pagination">
        <span class="Table-pagination-info">Showing 1-10 of 100 results</span>
        <div class="Table-pagination-controls">
            <button class="Button Button--icon Button--secondary Button--small" aria-label="Previous">
                <i class="ph ph-caret-left"></i>
            </button>
            <button class="Button Button--secondary Button--small Table-pagination-page--active">1</button>
            <button class="Button Button--secondary Button--small">2</button>
            <button class="Button Button--secondary Button--small">3</button>
            <button class="Button Button--icon Button--secondary Button--small" aria-label="Next">
                <i class="ph ph-caret-right"></i>
            </button>
        </div>
    </div>
</div>
```

<Preview title="Pagination with Rows Per Page">
    <div class="Table-pagination" style="border-top: none;">
        <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span style="font-size: 0.875rem; color: var(--text-secondary);">Rows per page:</span>
            <select class="Select" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-2); font-size: 0.875rem;">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>
        <span class="Table-pagination-info">1-10 of 156</span>
        <div class="Table-pagination-controls">
            <button class="Button Button--icon Button--ghost Button--small" disabled aria-label="First page">
                <i class="ph ph-caret-double-left"></i>
            </button>
            <button class="Button Button--icon Button--ghost Button--small" disabled aria-label="Previous page">
                <i class="ph ph-caret-left"></i>
            </button>
            <button class="Button Button--icon Button--ghost Button--small" aria-label="Next page">
                <i class="ph ph-caret-right"></i>
            </button>
            <button class="Button Button--icon Button--ghost Button--small" aria-label="Last page">
                <i class="ph ph-caret-double-right"></i>
            </button>
        </div>
    </div>
</Preview>

---

## Empty State

Show a message when no data is available.

<Preview title="Empty Table">
    <table class="Table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3" class="Table-empty">
                    <div style="text-align: center; padding: var(--space-8);">
                        <i class="ph ph-folder-open" style="font-size: 2.5rem; color: var(--text-secondary); margin-bottom: var(--space-3);"></i>
                        <p style="margin: 0; color: var(--text-secondary);">No data available</p>
                        <button class="Button Button--primary Button--small" style="margin-top: var(--space-4);">Add First Entry</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</Preview>

---

## Loading State

Skeleton rows while data loads.

<Preview title="Loading Table">
    <table class="Table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="Skeleton Skeleton--text" style="width: 120px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 180px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 80px;"></div></td>
            </tr>
            <tr>
                <td><div class="Skeleton Skeleton--text" style="width: 100px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 160px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 60px;"></div></td>
            </tr>
            <tr>
                <td><div class="Skeleton Skeleton--text" style="width: 140px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 200px;"></div></td>
                <td><div class="Skeleton Skeleton--text" style="width: 70px;"></div></td>
            </tr>
        </tbody>
    </table>
</Preview>

---

## Column Alignment

Align content by type.

<Preview title="Column Alignment">
    <table class="Table Table--bordered">
        <thead>
            <tr>
                <th>Item</th>
                <th class="Table-cell--right">Quantity</th>
                <th class="Table-cell--right">Price</th>
                <th class="Table-cell--right">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Widget A</td>
                <td class="Table-cell--right">5</td>
                <td class="Table-cell--right">$10.00</td>
                <td class="Table-cell--right">$50.00</td>
            </tr>
            <tr>
                <td>Widget B</td>
                <td class="Table-cell--right">3</td>
                <td class="Table-cell--right">$25.00</td>
                <td class="Table-cell--right">$75.00</td>
            </tr>
            <tr>
                <td>Widget C</td>
                <td class="Table-cell--right">10</td>
                <td class="Table-cell--right">$5.00</td>
                <td class="Table-cell--right">$50.00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3" class="Table-cell--right" style="font-weight: 600;">Subtotal</td>
                <td class="Table-cell--right" style="font-weight: 600;">$175.00</td>
            </tr>
        </tfoot>
    </table>
</Preview>

```html
<th class="Table-cell--right">Price</th>
<td class="Table-cell--right">$10.00</td>
```

---

## Real-World Examples

### User Management Table

<Preview title="User Management Table">
    <div class="Table-wrapper">
        <div class="Table-toolbar">
            <div class="Input-wrapper" style="max-width: 240px;">
                <i class="ph ph-magnifying-glass Input-icon"></i>
                <input type="text" class="Input Input--small Input--withIcon" placeholder="Search users...">
            </div>
            <div style="display: flex; gap: var(--space-2);">
                <select class="Select" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-2); font-size: 0.875rem;">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                </select>
                <button class="Button Button--primary Button--small">
                    <i class="ph ph-plus Button-icon"></i>
                    Add User
                </button>
            </div>
        </div>
        <table class="Table Table--hoverable">
            <thead>
                <tr>
                    <th style="width: 40px;">
                        <label class="Checkbox" style="margin: 0;">
                            <input type="checkbox" class="Checkbox-input">
                            <span class="Checkbox-box"></span>
                        </label>
                    </th>
                    <th class="Table-sortable Table-sortable--asc">User <i class="ph ph-caret-up"></i></th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th class="Table-sortable">Last Active <i class="ph ph-caret-up-down"></i></th>
                    <th style="width: 80px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label class="Checkbox" style="margin: 0;"><input type="checkbox" class="Checkbox-input"><span class="Checkbox-box"></span></label></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: var(--space-3);">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" class="Avatar Avatar--small" alt="Alice">
                            <span style="font-weight: 500;">Alice Chen</span>
                        </div>
                    </td>
                    <td>alice@example.com</td>
                    <td><span class="Badge Badge--primary Badge--small">Admin</span></td>
                    <td><span class="Badge Badge--success Badge--small">Active</span></td>
                    <td style="color: var(--text-secondary);">2 min ago</td>
                    <td>
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="More actions">
                            <i class="ph ph-dots-three"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td><label class="Checkbox" style="margin: 0;"><input type="checkbox" class="Checkbox-input"><span class="Checkbox-box"></span></label></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: var(--space-3);">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" class="Avatar Avatar--small" alt="Bob">
                            <span style="font-weight: 500;">Bob Martinez</span>
                        </div>
                    </td>
                    <td>bob@example.com</td>
                    <td><span class="Badge Badge--secondary Badge--small">Editor</span></td>
                    <td><span class="Badge Badge--success Badge--small">Active</span></td>
                    <td style="color: var(--text-secondary);">1 hour ago</td>
                    <td>
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="More actions">
                            <i class="ph ph-dots-three"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td><label class="Checkbox" style="margin: 0;"><input type="checkbox" class="Checkbox-input"><span class="Checkbox-box"></span></label></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: var(--space-3);">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" class="Avatar Avatar--small" alt="Carol">
                            <span style="font-weight: 500;">Carol Kim</span>
                        </div>
                    </td>
                    <td>carol@example.com</td>
                    <td><span class="Badge Badge--secondary Badge--small">Viewer</span></td>
                    <td><span class="Badge Badge--warning Badge--small">Pending</span></td>
                    <td style="color: var(--text-secondary);">—</td>
                    <td>
                        <button class="Button Button--icon Button--ghost Button--small" aria-label="More actions">
                            <i class="ph ph-dots-three"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="Table-pagination">
            <span class="Table-pagination-info">Showing 1-3 of 24 users</span>
            <div class="Table-pagination-controls">
                <button class="Button Button--icon Button--secondary Button--small" disabled><i class="ph ph-caret-left"></i></button>
                <button class="Button Button--secondary Button--small Table-pagination-page--active">1</button>
                <button class="Button Button--secondary Button--small">2</button>
                <button class="Button Button--secondary Button--small">3</button>
                <button class="Button Button--icon Button--secondary Button--small"><i class="ph ph-caret-right"></i></button>
            </div>
        </div>
    </div>
</Preview>

### Pricing Comparison Table

<Preview title="Pricing Table">
    <table class="Table Table--bordered" style="text-align: center;">
        <thead>
            <tr>
                <th style="text-align: left;">Feature</th>
                <th style="width: 140px;">
                    <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 400;">STARTER</div>
                    <div style="font-size: 1.25rem; margin-top: var(--space-1);">$9<span style="font-size: 0.75rem; font-weight: 400;">/mo</span></div>
                </th>
                <th style="width: 140px; background: oklch(60% 0.15 250 / 0.05);">
                    <div style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 400;">POPULAR</div>
                    <div style="font-size: 1.25rem; margin-top: var(--space-1);">$29<span style="font-size: 0.75rem; font-weight: 400;">/mo</span></div>
                </th>
                <th style="width: 140px;">
                    <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 400;">ENTERPRISE</div>
                    <div style="font-size: 1.25rem; margin-top: var(--space-1);">$99<span style="font-size: 0.75rem; font-weight: 400;">/mo</span></div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: left;">Users</td>
                <td>1</td>
                <td style="background: oklch(60% 0.15 250 / 0.05);">5</td>
                <td>Unlimited</td>
            </tr>
            <tr>
                <td style="text-align: left;">Storage</td>
                <td>5 GB</td>
                <td style="background: oklch(60% 0.15 250 / 0.05);">50 GB</td>
                <td>500 GB</td>
            </tr>
            <tr>
                <td style="text-align: left;">API Access</td>
                <td><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td style="background: oklch(60% 0.15 250 / 0.05);"><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
                <td><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
            </tr>
            <tr>
                <td style="text-align: left;">Priority Support</td>
                <td><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td style="background: oklch(60% 0.15 250 / 0.05);"><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
                <td><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
            </tr>
            <tr>
                <td style="text-align: left;">Custom Branding</td>
                <td><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td style="background: oklch(60% 0.15 250 / 0.05);"><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
            </tr>
            <tr>
                <td style="text-align: left;">SSO</td>
                <td><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td style="background: oklch(60% 0.15 250 / 0.05);"><i class="ph ph-x" style="color: var(--text-secondary);"></i></td>
                <td><i class="ph ph-check" style="color: oklch(55% 0.15 150);"></i></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td><button class="Button Button--secondary Button--small">Choose</button></td>
                <td style="background: oklch(60% 0.15 250 / 0.05);"><button class="Button Button--primary Button--small">Choose</button></td>
                <td><button class="Button Button--secondary Button--small">Contact Us</button></td>
            </tr>
        </tfoot>
    </table>
</Preview>

### Order History Table

<Preview title="Order History">
    <div class="Table-responsive">
        <table class="Table Table--striped Table--hoverable">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th class="Table-cell--right">Total</th>
                    <th>Status</th>
                    <th style="width: 100px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span style="font-family: monospace; font-size: 0.85rem;">#ORD-2024-001</span></td>
                    <td>Feb 2, 2026</td>
                    <td>3 items</td>
                    <td class="Table-cell--right" style="font-weight: 500;">$149.99</td>
                    <td><span class="Badge Badge--success">Delivered</span></td>
                    <td>
                        <button class="Button Button--secondary Button--small">View</button>
                    </td>
                </tr>
                <tr>
                    <td><span style="font-family: monospace; font-size: 0.85rem;">#ORD-2024-002</span></td>
                    <td>Feb 1, 2026</td>
                    <td>1 item</td>
                    <td class="Table-cell--right" style="font-weight: 500;">$59.99</td>
                    <td><span class="Badge Badge--warning">In Transit</span></td>
                    <td>
                        <button class="Button Button--secondary Button--small">Track</button>
                    </td>
                </tr>
                <tr>
                    <td><span style="font-family: monospace; font-size: 0.85rem;">#ORD-2024-003</span></td>
                    <td>Jan 28, 2026</td>
                    <td>2 items</td>
                    <td class="Table-cell--right" style="font-weight: 500;">$89.99</td>
                    <td><span class="Badge Badge--success">Delivered</span></td>
                    <td>
                        <button class="Button Button--secondary Button--small">View</button>
                    </td>
                </tr>
                <tr>
                    <td><span style="font-family: monospace; font-size: 0.85rem;">#ORD-2024-004</span></td>
                    <td>Jan 25, 2026</td>
                    <td>5 items</td>
                    <td class="Table-cell--right" style="font-weight: 500;">$234.50</td>
                    <td><span class="Badge Badge--error">Cancelled</span></td>
                    <td>
                        <button class="Button Button--secondary Button--small">Details</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Preview>

---

## Accessibility

Tables require proper structure for screen readers.

### Headers
```html
<!-- Always use th for headers -->
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
    </tr>
</thead>

<!-- For row headers -->
<tbody>
    <tr>
        <th scope="row">Total</th>
        <td>$175.00</td>
    </tr>
</tbody>
```

### Caption
```html
<!-- Describe the table -->
<table class="Table">
    <caption>Q1 2026 Sales Report</caption>
    ...
</table>
```

### Sortable Columns
```html
<th scope="col" aria-sort="ascending">
    Name
    <i class="ph ph-caret-up" aria-hidden="true"></i>
</th>
<th scope="col" aria-sort="none">
    Email
    <i class="ph ph-caret-up-down" aria-hidden="true"></i>
</th>
```

### Selectable Rows
```html
<tr aria-selected="true">
    <td>
        <input type="checkbox" aria-label="Select Alice Chen" checked>
    </td>
    <td>Alice Chen</td>
</tr>
```

---

## CSS Reference

```css
/* Base Table */
.Table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.Table th,
.Table td {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
}

.Table th {
  font-weight: 600;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
}

.Table td {
  color: var(--text-primary);
}

/* Bordered */
.Table--bordered th,
.Table--bordered td {
  border: 1px solid var(--border-subtle);
}

/* Striped */
.Table--striped tbody tr:nth-child(even) {
  background-color: var(--bg-secondary);
}

/* Hoverable */
.Table--hoverable tbody tr {
  transition: background-color 0.15s;
}

.Table--hoverable tbody tr:hover {
  background-color: oklch(60% 0.15 250 / 0.05);
}

/* Compact */
.Table--compact th,
.Table--compact td {
  padding: var(--space-2) var(--space-3);
  font-size: 0.85rem;
}

/* Sortable */
.Table-sortable {
  cursor: pointer;
  user-select: none;
}

.Table-sortable i {
  margin-left: var(--space-1);
  opacity: 0.5;
}

.Table-sortable:hover i {
  opacity: 1;
}

.Table-sortable--asc i,
.Table-sortable--desc i {
  opacity: 1;
  color: var(--accent-primary);
}

/* Selectable */
.Table-row--selected {
  background-color: oklch(60% 0.15 250 / 0.08) !important;
}

/* Alignment */
.Table-cell--right {
  text-align: right;
}

.Table-cell--center {
  text-align: center;
}

/* Responsive */
.Table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Sticky Header */
.Table--stickyHeader thead th {
  position: sticky;
  top: 0;
  background-color: var(--bg-secondary);
  z-index: 1;
}

/* Container */
.Table-container {
  overflow: auto;
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
}

.Table-container .Table {
  margin: 0;
}

.Table-container .Table th:first-child,
.Table-container .Table td:first-child {
  border-left: none;
}

.Table-container .Table th:last-child,
.Table-container .Table td:last-child {
  border-right: none;
}

/* Empty */
.Table-empty {
  background-color: var(--bg-primary) !important;
}

/* Footer */
.Table tfoot td {
  border-top: 2px solid var(--border-strong);
  background-color: var(--bg-secondary);
}

/* Wrapper */
.Table-wrapper {
  border: 1px solid var(--border-subtle);
  border-radius: var(--space-2);
  overflow: hidden;
}

.Table-wrapper .Table {
  border-radius: 0;
}

.Table-wrapper .Table th:first-child,
.Table-wrapper .Table td:first-child {
  border-left: none;
}

.Table-wrapper .Table th:last-child,
.Table-wrapper .Table td:last-child {
  border-right: none;
}

/* Toolbar */
.Table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--border-subtle);
  background-color: var(--bg-primary);
}

/* Pagination */
.Table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--border-subtle);
  background-color: var(--bg-primary);
}

.Table-pagination-info {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.Table-pagination-controls {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.Table-pagination-page--active {
  background-color: var(--accent-primary) !important;
  color: white !important;
  border-color: var(--accent-primary) !important;
}

.Table-pagination-ellipsis {
  padding: 0 var(--space-2);
  color: var(--text-secondary);
}
```

---

## Best Practices

### Do

- ✓ **Use semantic markup** — `<thead>`, `<tbody>`, `<tfoot>`, `<th>`
- ✓ **Align numbers right** — Easier to compare values
- ✓ **Keep rows scannable** — Limit columns, use truncation
- ✓ **Add empty states** — Don't show blank tables
- ✓ **Consider mobile** — Use responsive wrapper or alternative layouts

### Don't

- ✗ **Overcrowd cells** — Too much data hurts readability
- ✗ **Skip headers** — Always label columns
- ✗ **Use tables for layout** — Tables are for data only
- ✗ **Hide horizontal scroll** — Indicate scrollable content
- ✗ **Forget keyboard navigation** — Sortable/selectable tables need focus states
