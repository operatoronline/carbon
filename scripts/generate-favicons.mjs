/**
 * Generate complete favicon set for Standard Design System
 * Uses sharp to render SVG → PNG at multiple sizes, then packages ICO.
 * 
 * Output:
 *   assets/favicon.svg          — vector favicon (modern browsers)
 *   assets/favicon.ico           — multi-size ICO (16+32, legacy)
 *   assets/favicon-16x16.png     — 16px PNG
 *   assets/favicon-32x32.png     — 32px PNG
 *   assets/apple-touch-icon.png  — 180px (iOS home screen)
 *   assets/android-chrome-192x192.png
 *   assets/android-chrome-512x512.png
 */

import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';

// Standard Design System brand colors (OKLCH → approximate hex for SVG)
// --accent: oklch(55% .25 290) ≈ #7B2FBE (purple)
// --bg: oklch(99% .003 264) ≈ #FBFBFE (near-white)
const ACCENT = '#7B2FBE';
const ACCENT_LIGHT = '#A855F7'; // lighter for gradient
const BG_DARK = '#1A1625'; // dark variant for contrast

/**
 * SVG source for the favicon — an abstract intersect mark
 * Two overlapping rounded squares rotated, creating the "intersect" motif
 * This mirrors the Phosphor ph-intersect icon but as a custom brand mark
 */
function createFaviconSvg(size = 512) {
  const pad = size * 0.08;
  const s = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;
  const r = s * 0.12; // corner radius
  const boxSize = s * 0.52;
  const offset = s * 0.14;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${ACCENT}"/>
      <stop offset="100%" stop-color="${ACCENT_LIGHT}"/>
    </linearGradient>
    <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${ACCENT}"/>
      <stop offset="100%" stop-color="${ACCENT_LIGHT}"/>
    </linearGradient>
  </defs>
  <!-- Background circle -->
  <circle cx="${cx}" cy="${cy}" r="${size * 0.46}" fill="${BG_DARK}"/>
  <!-- Two overlapping rounded rectangles — the "intersect" -->
  <rect x="${cx - boxSize / 2 - offset}" y="${cx - boxSize / 2 - offset}" 
        width="${boxSize}" height="${boxSize}" rx="${r}" 
        fill="none" stroke="url(#g1)" stroke-width="${s * 0.06}" opacity="0.85"
        transform="rotate(-12, ${cx}, ${cy})"/>
  <rect x="${cx - boxSize / 2 + offset}" y="${cx - boxSize / 2 + offset}" 
        width="${boxSize}" height="${boxSize}" rx="${r}" 
        fill="none" stroke="url(#g2)" stroke-width="${s * 0.06}" opacity="0.85"
        transform="rotate(12, ${cx}, ${cy})"/>
  <!-- Intersection fill — the overlap area -->
  <circle cx="${cx}" cy="${cy}" r="${s * 0.13}" fill="url(#g1)" opacity="0.9"/>
</svg>`;
}

/**
 * Simple SVG favicon (for <link rel="icon" type="image/svg+xml">)
 * Slightly different — no circle bg, just the mark on transparent
 */
function createSvgFavicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${ACCENT}"/>
      <stop offset="100%" stop-color="${ACCENT_LIGHT}"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="url(#fg)" stroke-width="2.5" transform="rotate(-10, 16, 16)"/>
  <rect x="12" y="12" width="16" height="16" rx="3" fill="none" stroke="url(#fg)" stroke-width="2.5" transform="rotate(10, 16, 16)"/>
  <circle cx="16" cy="16" r="3.5" fill="url(#fg)"/>
</svg>`;
}

/**
 * Create ICO file from multiple PNG buffers
 * ICO format: header + directory entries + image data
 */
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);       // reserved
  header.writeUInt16LE(1, 2);       // type: 1 = ICO
  header.writeUInt16LE(pngBuffers.length, 4); // number of images

  // Directory entries: 16 bytes each
  const dirSize = pngBuffers.length * 16;
  const directory = Buffer.alloc(dirSize);
  let dataOffset = 6 + dirSize;

  const sizes = [16, 32]; // corresponding sizes
  for (let i = 0; i < pngBuffers.length; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i];
    const off = i * 16;
    directory.writeUInt8(size === 256 ? 0 : size, off);     // width
    directory.writeUInt8(size === 256 ? 0 : size, off + 1); // height
    directory.writeUInt8(0, off + 2);   // color palette
    directory.writeUInt8(0, off + 3);   // reserved
    directory.writeUInt16LE(1, off + 4); // color planes
    directory.writeUInt16LE(32, off + 6); // bits per pixel
    directory.writeUInt32LE(buf.length, off + 8); // image size
    directory.writeUInt32LE(dataOffset, off + 12); // offset
    dataOffset += buf.length;
  }

  return Buffer.concat([header, directory, ...pngBuffers]);
}

async function generate() {
  const outDir = 'assets';
  await fs.ensureDir(outDir);

  // 1. Write SVG favicon
  const svgContent = createSvgFavicon();
  await fs.writeFile(path.join(outDir, 'favicon.svg'), svgContent);
  console.log('  ✓ favicon.svg');

  // 2. Generate source SVG at high resolution for rasterization
  const masterSvg = createFaviconSvg(512);

  // 3. Generate all PNG sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  const pngBuffers = {};

  for (const { name, size } of sizes) {
    const buf = await sharp(Buffer.from(masterSvg))
      .resize(size, size)
      .png()
      .toBuffer();
    await fs.writeFile(path.join(outDir, name), buf);
    pngBuffers[size] = buf;
    console.log(`  ✓ ${name} (${(buf.length / 1024).toFixed(1)}KB)`);
  }

  // 4. Generate ICO (16 + 32)
  const icoBuffer = createIco([pngBuffers[16], pngBuffers[32]]);
  await fs.writeFile(path.join(outDir, 'favicon.ico'), icoBuffer);
  console.log(`  ✓ favicon.ico (${(icoBuffer.length / 1024).toFixed(1)}KB)`);

  console.log('\n✨ Favicon set complete!');
}

generate().catch(console.error);
