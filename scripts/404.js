// Standard Design System — 404 Page Logic
// Theme detection + search (standalone, no dependency on docs.js)

// Theme
const html = document.documentElement;
const saved = localStorage.getItem('standard-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', saved);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('standard-theme')) {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

// Search (standalone — loads Fuse.js and search index)
(async () => {
    const input = document.getElementById('error-search-input');
    const resultsEl = document.getElementById('error-search-results');
    if (!input || !resultsEl) return;

    // Load Fuse.js dynamically
    await new Promise((resolve, reject) => {
        const fuseScript = document.createElement('script');
        fuseScript.src = './vendor/fuse.min.js';
        fuseScript.onload = resolve;
        fuseScript.onerror = reject;
        document.head.appendChild(fuseScript);
    });

    // Load search index
    let searchData = [];
    try {
        const res = await fetch('./search-index.json');
        searchData = await res.json();
    } catch (e) { return; }

    const fuse = new Fuse(searchData, {
        keys: [
            { name: 'title', weight: 3 },
            { name: 'content', weight: 1 },
            { name: 'section', weight: 2 }
        ],
        threshold: 0.35,
        includeScore: true,
        minMatchCharLength: 2
    });

    let activeIndex = -1;

    input.addEventListener('input', () => {
        const query = input.value.trim();
        if (query.length < 2) {
            resultsEl.classList.remove('active');
            resultsEl.innerHTML = '';
            activeIndex = -1;
            return;
        }

        const results = fuse.search(query).slice(0, 8);
        if (results.length === 0) {
            resultsEl.classList.remove('active');
            resultsEl.innerHTML = '';
            activeIndex = -1;
            return;
        }

        activeIndex = -1;
        resultsEl.innerHTML = results.map((r, i) =>
            '<a class="search-result-item" href="./' + r.item.url + '">' +
                '<span class="search-result-section">' + r.item.section + '</span> ' +
                r.item.title +
            '</a>'
        ).join('');
        resultsEl.classList.add('active');
    });

    input.addEventListener('keydown', (e) => {
        const items = resultsEl.querySelectorAll('.search-result-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            e.preventDefault();
            items[activeIndex].click();
        } else if (e.key === 'Escape') {
            resultsEl.classList.remove('active');
            resultsEl.innerHTML = '';
            activeIndex = -1;
            input.blur();
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.error-search')) {
            resultsEl.classList.remove('active');
            activeIndex = -1;
        }
    });
})();
