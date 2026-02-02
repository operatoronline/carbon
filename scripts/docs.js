// Carbon Documentation Shell Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Carbon initialized');

    // Theme Toggle
    const themeBtn = document.getElementById('theme-btn');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'ph ph-sun';
        } else {
            icon.className = 'ph ph-moon';
        }
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.className = 'ph ph-x';
            } else {
                icon.className = 'ph ph-list';
            }
        });

        // Close sidebar when clicking a nav link (mobile)
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                    menuToggle.querySelector('i').className = 'ph ph-list';
                }
            });
        });

        // Close sidebar when clicking outside (mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024 && 
                sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                menuToggle.querySelector('i').className = 'ph ph-list';
            }
        });
    }

    // Modal Close on Overlay Click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('Modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchContainer = document.getElementById('search-container');
    let fuse = null;
    let searchIndex = null;

    // Load search index
    async function loadSearchIndex() {
        try {
            // Find the root path from any REL_ROOT in the page
            const relRoot = document.querySelector('link[href*="styles/docs.css"]')
                ?.getAttribute('href')
                ?.replace('styles/docs.css', '') || './';
            
            const response = await fetch(relRoot + 'search-index.json');
            searchIndex = await response.json();
            
            fuse = new Fuse(searchIndex, {
                keys: [
                    { name: 'title', weight: 2 },
                    { name: 'content', weight: 1 }
                ],
                threshold: 0.3,
                includeMatches: true,
                minMatchCharLength: 2
            });
        } catch (err) {
            console.warn('Search index not available:', err);
        }
    }

    loadSearchIndex();

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            
            if (!fuse || query.length < 2) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
                return;
            }

            const results = fuse.search(query).slice(0, 8);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
                searchResults.classList.add('active');
                return;
            }

            searchResults.innerHTML = results.map(result => {
                const item = result.item;
                return `
                    <a href="${item.url}" class="search-result-item">
                        <span class="search-result-title">${item.title}</span>
                        <span class="search-result-section">${item.section}</span>
                    </a>
                `;
            }).join('');
            
            searchResults.classList.add('active');
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const items = searchResults.querySelectorAll('.search-result-item');
            const activeItem = searchResults.querySelector('.search-result-item.active');
            let index = Array.from(items).indexOf(activeItem);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                index = (index + 1) % items.length;
                items[index]?.classList.add('active');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                index = index <= 0 ? items.length - 1 : index - 1;
                items[index]?.classList.add('active');
            } else if (e.key === 'Enter' && activeItem) {
                e.preventDefault();
                window.location.href = activeItem.getAttribute('href');
            } else if (e.key === 'Escape') {
                searchResults.classList.remove('active');
                searchInput.blur();
            }
        });
    }

    // Copy Code Button (only for code blocks NOT in Preview containers)
    document.querySelectorAll('pre[class*="language-"]:not(.Preview-code pre)').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.innerHTML = '<i class="ph ph-copy"></i>';
        copyBtn.setAttribute('aria-label', 'Copy code');
        wrapper.appendChild(copyBtn);

        copyBtn.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.innerHTML = '<i class="ph ph-check"></i>';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="ph ph-copy"></i>';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });

    // TOC Active Highlighting
    const tocLinks = document.querySelectorAll('.toc a');
    const headings = document.querySelectorAll('article h2[id], article h3[id]');

    if (tocLinks.length && headings.length) {
        const observerOptions = {
            rootMargin: '-80px 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    tocLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, observerOptions);

        headings.forEach(heading => observer.observe(heading));
    }
});
