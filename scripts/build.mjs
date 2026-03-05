import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { createHash } from 'crypto';
import { transform } from 'esbuild';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

// Escape HTML for display in code blocks
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Format HTML for display (basic indentation)
function formatHtml(html) {
    return html.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');
}

// Create display title with italic accent word (Library aesthetic)
// Pattern: First word or last word gets the italic treatment
function createDisplayTitle(title) {
    const words = title.split(' ');
    if (words.length === 1) {
        // Single word: italicize the whole word
        return `<em>${title}</em>`;
    }
    // Multiple words: italicize the first word
    words[0] = `<em>${words[0]}</em>`;
    return words.join(' ');
}

// Custom Plugin for <Preview> blocks (v0.2 Enhanced)
const previewPlugin = (md) => {
    const defaultRender = md.renderer.rules.html_block || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const content = tokens[idx].content;
        if (content.trim().startsWith('<Preview')) {
            // Parse attributes
            const titleMatch = content.match(/title="([^"]+)"/);
            const title = titleMatch ? titleMatch[1] : 'Preview';
            const bgMatch = content.match(/background="([^"]+)"/);
            const defaultBg = bgMatch ? bgMatch[1] : 'default';
            const compactMatch = content.match(/compact="true"/);
            const isCompact = !!compactMatch;
            
            // Extract inner HTML content
            const innerContent = content
                .replace(/<Preview[^>]*>/, '')
                .replace(/<\/Preview>/, '')
                .trim();
            
            const formattedCode = formatHtml(innerContent);
            const escapedCode = escapeHtml(formattedCode);
            
            // Generate unique ID for this preview
            const previewId = `preview-${Math.random().toString(36).substr(2, 9)}`;
            
            // Build the enhanced Preview HTML
            return `
<div class="Preview" id="${previewId}">
    <div class="Preview-header">
        <div class="Preview-tabs">
            <button class="Preview-tab active" data-tab="preview" type="button">Preview</button>
            <button class="Preview-tab" data-tab="html" type="button">HTML</button>
        </div>
        <div class="Preview-controls">
            <button class="Preview-control${defaultBg === 'light' ? ' active' : ''}" data-bg="light" title="Light background" type="button" aria-label="Light background">
                <i class="ph ph-sun" aria-hidden="true"></i>
            </button>
            <button class="Preview-control${defaultBg === 'dark' ? ' active' : ''}" data-bg="dark" title="Dark background" type="button" aria-label="Dark background">
                <i class="ph ph-moon" aria-hidden="true"></i>
            </button>
            <button class="Preview-control${defaultBg === 'checkered' ? ' active' : ''}" data-bg="checkered" title="Checkered background" type="button" aria-label="Checkered background">
                <i class="ph ph-grid-four" aria-hidden="true"></i>
            </button>
            <div class="Preview-divider" role="separator" aria-hidden="true"></div>
            <button class="Preview-control active" data-viewport="desktop" title="Desktop viewport" type="button" aria-label="Desktop viewport">
                <i class="ph ph-desktop" aria-hidden="true"></i>
            </button>
            <button class="Preview-control" data-viewport="tablet" title="Tablet viewport" type="button" aria-label="Tablet viewport">
                <i class="ph ph-device-tablet" aria-hidden="true"></i>
            </button>
            <button class="Preview-control" data-viewport="mobile" title="Mobile viewport" type="button" aria-label="Mobile viewport">
                <i class="ph ph-device-mobile" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <div class="Preview-pane active" data-pane="preview">
        <div class="Preview-canvas${defaultBg !== 'default' ? ` Preview-canvas--${defaultBg}` : ''}">${innerContent}</div>
    </div>
    <div class="Preview-pane" data-pane="html" hidden>
        <button class="Preview-code-copy" type="button"><i class="ph ph-copy" aria-hidden="true"></i> Copy</button>
        <pre class="language-html"><code class="language-html">${escapedCode}</code></pre>
    </div>
</div>`;
        }
        return defaultRender(tokens, idx, options, env, self);
    };
};

md.use(previewPlugin);

const CONFIG = {
    contentDir: 'content',
    distDir: 'dist',
    templatePath: 'templates/page.html',
    assets: ['styles', 'scripts', 'assets', 'vendor'],
    version: 'v1.0',
    siteUrl: 'https://standard.operator.onl'
};

async function build() {
    const startTime = Date.now();
    console.log('🚀 Starting Standard v1.0 build...');

    const template = await fs.readFile(CONFIG.templatePath, 'utf-8');

    // 1. Clean dist and copy assets
    await fs.ensureDir(CONFIG.distDir);
    const filesInDist = await fs.readdir(CONFIG.distDir);
    for (const file of filesInDist) {
        await fs.remove(path.join(CONFIG.distDir, file));
    }

    for (const asset of CONFIG.assets) {
        if (await fs.pathExists(asset)) {
            await fs.copy(asset, path.join(CONFIG.distDir, asset));
        }
    }

    // 1b. Minify CSS and JS, generate content-hashed filenames
    const assetMap = {}; // maps original name → hashed name (e.g. 'docs.css' → 'docs.a1b2c3d4.min.css')

    // Minify CSS
    const cssPath = path.join(CONFIG.distDir, 'styles/docs.css');
    if (await fs.pathExists(cssPath)) {
        const cssSource = await fs.readFile(cssPath, 'utf-8');
        const cssResult = await transform(cssSource, {
            loader: 'css',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const cssHash = createHash('md5').update(cssResult.code).digest('hex').slice(0, 8);
        const cssMinName = `docs.${cssHash}.min.css`;
        await fs.writeFile(path.join(CONFIG.distDir, `styles/${cssMinName}`), cssResult.code);
        await fs.remove(cssPath); // remove unminified
        assetMap['docs.css'] = cssMinName;
        const cssOrigSize = Buffer.byteLength(cssSource, 'utf-8');
        const cssMinSize = Buffer.byteLength(cssResult.code, 'utf-8');
        console.log(`  ✓ Minified docs.css → ${cssMinName} (${(cssOrigSize / 1024).toFixed(1)}KB → ${(cssMinSize / 1024).toFixed(1)}KB, ${Math.round((1 - cssMinSize / cssOrigSize) * 100)}% smaller)`);
    }

    // Minify JS
    const jsPath = path.join(CONFIG.distDir, 'scripts/docs.js');
    if (await fs.pathExists(jsPath)) {
        const jsSource = await fs.readFile(jsPath, 'utf-8');
        const jsResult = await transform(jsSource, {
            loader: 'js',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const jsHash = createHash('md5').update(jsResult.code).digest('hex').slice(0, 8);
        const jsMinName = `docs.${jsHash}.min.js`;
        await fs.writeFile(path.join(CONFIG.distDir, `scripts/${jsMinName}`), jsResult.code);
        await fs.remove(jsPath); // remove unminified
        assetMap['docs.js'] = jsMinName;
        const jsOrigSize = Buffer.byteLength(jsSource, 'utf-8');
        const jsMinSize = Buffer.byteLength(jsResult.code, 'utf-8');
        console.log(`  ✓ Minified docs.js → ${jsMinName} (${(jsOrigSize / 1024).toFixed(1)}KB → ${(jsMinSize / 1024).toFixed(1)}KB, ${Math.round((1 - jsMinSize / jsOrigSize) * 100)}% smaller)`);
    }

    // Minify 404 CSS
    const css404Path = path.join(CONFIG.distDir, 'styles/404.css');
    if (await fs.pathExists(css404Path)) {
        const css404Source = await fs.readFile(css404Path, 'utf-8');
        const css404Result = await transform(css404Source, {
            loader: 'css',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const css404Hash = createHash('md5').update(css404Result.code).digest('hex').slice(0, 8);
        const css404MinName = `404.${css404Hash}.min.css`;
        await fs.writeFile(path.join(CONFIG.distDir, `styles/${css404MinName}`), css404Result.code);
        await fs.remove(css404Path);
        assetMap['404.css'] = css404MinName;
        console.log(`  ✓ Minified 404.css → ${css404MinName}`);
    }

    // Minify 404 JS
    const js404Path = path.join(CONFIG.distDir, 'scripts/404.js');
    if (await fs.pathExists(js404Path)) {
        const js404Source = await fs.readFile(js404Path, 'utf-8');
        const js404Result = await transform(js404Source, {
            loader: 'js',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const js404Hash = createHash('md5').update(js404Result.code).digest('hex').slice(0, 8);
        const js404MinName = `404.${js404Hash}.min.js`;
        await fs.writeFile(path.join(CONFIG.distDir, `scripts/${js404MinName}`), js404Result.code);
        await fs.remove(js404Path);
        assetMap['404.js'] = js404MinName;
        console.log(`  ✓ Minified 404.js → ${js404MinName}`);
    }

    // 2. Walk content
    const files = await glob(`${CONFIG.contentDir}/**/*.md`);
    
    // Generate Navigation Tree
    const navTree = {};
    for (const file of files) {
        const relativePath = path.relative(CONFIG.contentDir, file);
        const parts = relativePath.split(path.sep);
        let current = navTree;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === parts.length - 1) {
                current[part] = relativePath.replace('.md', '.html');
            } else {
                current[part] = current[part] || {};
                current = current[part];
            }
        }
    }

    const generateNavHtml = (tree, relRoot, depth = 0) => {
        let html = '<ul>';
        const entries = Object.entries(tree).sort(([a], [b]) => {
            if (a === 'index.md') return -1;
            if (b === 'index.md') return 1;
            return a.localeCompare(b);
        });

        for (const [key, value] of entries) {
            const label = key.replace('.md', '').replace(/-/g, ' ');
            const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
            if (typeof value === 'string') {
                const displayLabel = key === 'index.md' ? 'Introduction' : capitalizedLabel;
                html += `<li><a href="${relRoot}${value}">${displayLabel}</a></li>`;
            } else {
                html += `<li><span class="nav-group">${capitalizedLabel}</span>${generateNavHtml(value, relRoot, depth + 1)}</li>`;
            }
        }
        html += '</ul>';
        return html;
    };

    for (const file of files) {
        const rawContent = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(CONFIG.contentDir, file);
        const targetPath = path.join(CONFIG.distDir, relativePath.replace('.md', '.html'));
        const relRoot = '../'.repeat(relativePath.split(path.sep).length - 1) || './';

        const navHtml = generateNavHtml(navTree, relRoot);

        // Generate Breadcrumbs
        const pathParts = relativePath.replace('.md', '').split(path.sep);
        let breadcrumbsHtml = `<a href="${relRoot}index.html">Standard</a>`;
        let accumulatedPath = relRoot;
        if (pathParts[0] !== 'index') {
            for (let i = 0; i < pathParts.length; i++) {
                const part = pathParts[i];
                const label = part.replace(/-/g, ' ');
                const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
                breadcrumbsHtml += ` <span class="sep" aria-hidden="true">/</span> `;
                if (i === pathParts.length - 1) {
                    breadcrumbsHtml += `<span aria-current="page">${capitalizedLabel}</span>`;
                } else {
                    breadcrumbsHtml += `<span>${capitalizedLabel}</span>`;
                }
            }
        }

        // Extract TOC from headings
        const tocEntries = [];
        const tokens = md.parse(rawContent, {});
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].type === 'heading_open') {
                const level = parseInt(tokens[i].tag.slice(1));
                if (level === 2 || level === 3) {
                    const text = tokens[i + 1].content;
                    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
                    tocEntries.push({ level, text, id });
                    tokens[i].attrPush(['id', id]);
                }
            }
        }
        const tocHtml = `<ul>${tocEntries.map(e => `<li class="toc-l${e.level}"><a href="#${e.id}">${e.text}</a></li>`).join('')}</ul>`;

        let htmlContent = md.renderer.render(tokens, md.options, {});
        // Wrap markdown-rendered <table> (bare, no class attr) in scrollable container with Table class
        // Use a marker to only close wrappers we opened
        htmlContent = htmlContent.replace(/<table>\n/g, '<div class="Table-container"><table class="Table">\n');
        // Close </div> only after tables we wrapped (Table class without further class attrs)
        htmlContent = htmlContent.replace(/<div class="Table-container"><table class="Table">([\s\S]*?)<\/table>/g, 
            '<div class="Table-container"><table class="Table">$1</table></div>');
        const baseName = path.basename(file, '.md');
        const title = baseName === 'index' 
            ? 'Introduction' 
            : baseName.replace(/-/g, ' ').charAt(0).toUpperCase() + baseName.replace(/-/g, ' ').slice(1);
        
        // Create display title with italic accent for hero treatment
        const titleDisplay = createDisplayTitle(title);

        // Generate meta description from first paragraph of content
        const descriptionMatch = rawContent
            .replace(/^#[^\n]+\n+/, '') // Remove first heading
            .replace(/<Preview[\s\S]*?<\/Preview>/g, '') // Remove preview blocks
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/\|[^\n]+\|/g, '') // Remove table rows
            .replace(/---+/g, '') // Remove horizontal rules
            .trim()
            .split(/\n\n/)[0]; // First paragraph
        const metaDescription = descriptionMatch
            ? descriptionMatch
                .replace(/<[^>]+>/g, '') // Strip HTML
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Markdown links → text
                .replace(/\*\*([^*]+)\*\*/g, '$1') // Bold → text
                .replace(/\*([^*]+)\*/g, '$1') // Italic → text
                .replace(/`([^`]+)`/g, '$1') // Inline code → text
                .replace(/#+\s/g, '') // Remove heading markers
                .replace(/\s+/g, ' ') // Collapse whitespace
                .trim()
                .slice(0, 155) // SEO: ~155 char limit
                + (descriptionMatch.length > 155 ? '…' : '')
            : `${title} — Standard Design System documentation.`;

        // Generate canonical URL
        let canonicalPath = relativePath.replace('.md', '');
        if (canonicalPath === 'index') {
            canonicalPath = '';
        }
        const canonicalUrl = `${CONFIG.siteUrl}/${canonicalPath}`;
        const ogUrl = canonicalUrl;

        const finalHtml = template
            .replace(/{{TITLE}}/g, title)
            .replace(/{{TITLE_DISPLAY}}/g, titleDisplay)
            .replace(/{{META_DESCRIPTION}}/g, metaDescription.replace(/"/g, '&quot;'))
            .replace(/{{CANONICAL_URL}}/g, canonicalUrl)
            .replace(/{{OG_URL}}/g, ogUrl)
            .replace(/{{SITE_URL}}/g, CONFIG.siteUrl)
            .replace(/{{NAV_HTML}}/g, navHtml)
            .replace(/{{BREADCRUMBS_HTML}}/g, breadcrumbsHtml)
            .replace(/{{TOC_HTML}}/g, tocHtml)
            .replace(/{{CONTENT_HTML}}/g, htmlContent)
            .replace(/{{REL_ROOT}}/g, relRoot)
            .replace(/{{VERSION}}/g, CONFIG.version)
            .replace(/{{LAST_BUILT}}/g, new Date().toLocaleString())
            .replace(/{{CSS_FILE}}/g, assetMap['docs.css'] || 'docs.css')
            .replace(/{{JS_FILE}}/g, assetMap['docs.js'] || 'docs.js');

        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, finalHtml);
        console.log(`  ✓ Written ${targetPath}`);
    }

    // 3. Generate search index
    const searchIndex = [];
    for (const file of files) {
        const rawContent = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(CONFIG.contentDir, file);
        const url = relativePath.replace('.md', '.html');
        const title = path.basename(file, '.md').replace(/-/g, ' ');
        const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
        
        const plainText = rawContent
            .replace(/<Preview[^>]*>[\s\S]*?<\/Preview>/g, '')
            .replace(/<[^>]+>/g, '')
            .replace(/```[\s\S]*?```/g, '')
            .replace(/#+\s/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/\n+/g, ' ')
            .trim()
            .slice(0, 500);
        
        const section = relativePath.includes(path.sep) 
            ? relativePath.split(path.sep)[0] 
            : 'home';

        searchIndex.push({
            title: capitalizedTitle,
            url,
            section: section.charAt(0).toUpperCase() + section.slice(1),
            content: plainText
        });
    }
    
    await fs.writeFile(
        path.join(CONFIG.distDir, 'search-index.json'),
        JSON.stringify(searchIndex)
    );
    console.log(`  ✓ Generated search-index.json (${searchIndex.length} pages)`);

    // 4. Generate robots.txt
    const robotsTxt = `# Standard Design System
# ${CONFIG.siteUrl}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${CONFIG.siteUrl}/sitemap.xml

# Disallow non-content resources
Disallow: /search-index.json
`;
    await fs.writeFile(path.join(CONFIG.distDir, 'robots.txt'), robotsTxt);
    console.log('  ✓ Generated robots.txt');

    // 5. Generate sitemap.xml
    const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const sitemapEntries = [];

    // Define priority and changefreq by section
    const getSitemapMeta = (url) => {
        if (url === 'index.html') return { priority: '1.0', changefreq: 'weekly' };
        if (url === 'getting-started.html') return { priority: '0.9', changefreq: 'monthly' };
        if (url === 'changelog.html') return { priority: '0.6', changefreq: 'weekly' };
        if (url.startsWith('tokens/')) return { priority: '0.8', changefreq: 'monthly' };
        if (url.startsWith('components/')) return { priority: '0.9', changefreq: 'monthly' };
        if (url.startsWith('patterns/')) return { priority: '0.7', changefreq: 'monthly' };
        return { priority: '0.5', changefreq: 'monthly' };
    };

    for (const file of files) {
        const relativePath = path.relative(CONFIG.contentDir, file);
        const url = relativePath.replace('.md', '.html');
        // Use clean URL (strip .html, strip index.html for root)
        let cleanUrl = url;
        if (cleanUrl === 'index.html') {
            cleanUrl = '';
        } else {
            cleanUrl = cleanUrl.replace(/\.html$/, '');
        }
        const fullUrl = `${CONFIG.siteUrl}/${cleanUrl}`;
        const meta = getSitemapMeta(url);
        sitemapEntries.push({ url: fullUrl, lastmod: now, ...meta });
    }

    // Sort: homepage first, then alphabetically
    sitemapEntries.sort((a, b) => {
        if (a.url === CONFIG.siteUrl + '/') return -1;
        if (b.url === CONFIG.siteUrl + '/') return 1;
        return a.url.localeCompare(b.url);
    });

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
    await fs.writeFile(path.join(CONFIG.distDir, 'sitemap.xml'), sitemapXml);
    console.log(`  ✓ Generated sitemap.xml (${sitemapEntries.length} URLs)`);

    // 5b. Generate web manifest
    const manifest = {
        name: 'Standard Design System',
        short_name: 'Standard',
        description: 'Framework-agnostic design system built on OKLCH colors, 4px grid, and zero dependencies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FBFBFE',
        theme_color: '#7B2FBE',
        icons: [
            { src: '/assets/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/assets/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/assets/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
    };
    await fs.writeFile(
        path.join(CONFIG.distDir, 'manifest.webmanifest'),
        JSON.stringify(manifest, null, 2)
    );
    console.log('  ✓ Generated manifest.webmanifest');

    // 6. Generate 404 page (all CSS/JS external — CSP-safe)
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>404 — Page Not Found | Standard</title>
    <meta name="description" content="The page you're looking for doesn't exist. Search the Standard Design System or navigate to a section.">
    <link rel="canonical" href="${CONFIG.siteUrl}/404">
    <meta property="og:title" content="404 — Page Not Found | Standard">
    <meta property="og:description" content="The page you're looking for doesn't exist. Search the Standard Design System or navigate to a section.">
    <meta property="og:url" content="${CONFIG.siteUrl}/404">
    <meta property="og:image" content="${CONFIG.siteUrl}/assets/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="robots" content="noindex">
    <link rel="icon" href="./assets/favicon.ico" sizes="32x32">
    <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="./assets/apple-touch-icon.png">
    <link rel="manifest" href="./manifest.webmanifest">
    <link rel="preload" href="./assets/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/instrument-serif-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/instrument-serif-italic-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="./vendor/normalize.css">
    <link rel="stylesheet" href="./vendor/phosphor/regular/style.css">
    <link rel="stylesheet" href="./vendor/phosphor/bold/style.css">
    <link rel="stylesheet" href="./vendor/phosphor/fill/style.css">
    <link rel="stylesheet" href="./vendor/phosphor/duotone/style.css">
    <link rel="stylesheet" href="./styles/${assetMap['docs.css'] || 'docs.css'}">
    <link rel="stylesheet" href="./styles/${assetMap['404.css'] || '404.css'}">
</head>
<body>
    <div class="app">
        <!-- Hidden nav — 404 has its own navigation -->
        <nav class="fnav fnav--hidden" id="fnav" role="navigation" aria-label="Main navigation"></nav>

        <!-- 404 Content -->
        <div class="error-page">
            <div class="error-content">
                <h1 class="error-code">4<em>0</em>4</h1>
                <p class="error-title">This page has wandered off</p>
                <p class="error-description">
                    The page you're looking for doesn't exist, has been moved, or perhaps never was.
                    Try searching or pick a section below.
                </p>

                <div class="error-search" role="search">
                    <i class="ph ph-magnifying-glass error-search-icon" aria-hidden="true"></i>
                    <input type="text" id="error-search-input" placeholder="Search the design system..." aria-label="Search the design system" autocomplete="off">
                    <div class="search-results" id="error-search-results" role="listbox"></div>
                </div>

                <div class="error-links">
                    <a href="./index.html" class="error-link">
                        <i class="ph-bold ph-house" aria-hidden="true"></i>
                        Home
                    </a>
                    <a href="./tokens/colors.html" class="error-link">
                        <i class="ph-bold ph-palette" aria-hidden="true"></i>
                        Tokens
                    </a>
                    <a href="./components/buttons.html" class="error-link">
                        <i class="ph-bold ph-stack" aria-hidden="true"></i>
                        Components
                    </a>
                    <a href="./patterns/layouts.html" class="error-link">
                        <i class="ph-bold ph-grid-four" aria-hidden="true"></i>
                        Patterns
                    </a>
                </div>

                <hr class="error-divider">

                <div class="error-footer">
                    <p>Standard ${CONFIG.version} · <a href="./index.html">Back to safety</a></p>
                </div>
            </div>
        </div>
    </div>

    <script src="./scripts/${assetMap['404.js'] || '404.js'}"></script>
</body>
</html>`;

    await fs.writeFile(path.join(CONFIG.distDir, '404.html'), notFoundHtml);
    console.log('  ✓ Generated 404.html');

    console.log(`✨ Build finished in ${Date.now() - startTime}ms`);
}

build().catch(console.error);
