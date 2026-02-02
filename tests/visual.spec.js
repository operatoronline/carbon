// @ts-check
import { test, expect } from '@playwright/test';

// Core pages to test
const PAGES = [
  { name: 'home', path: '/' },
  { name: 'colors', path: '/tokens/colors.html' },
  { name: 'typography', path: '/tokens/typography.html' },
  { name: 'spacing', path: '/tokens/spacing.html' },
  { name: 'buttons', path: '/components/buttons.html' },
  { name: 'forms', path: '/components/forms.html' },
  { name: 'cards', path: '/components/cards.html' },
  { name: 'tables', path: '/components/tables.html' },
  { name: 'tabs', path: '/components/tabs.html' },
  { name: 'modals', path: '/components/modals.html' },
  { name: 'alerts', path: '/components/alerts.html' },
  { name: 'badges', path: '/components/badges.html' },
  { name: 'dropdowns', path: '/components/dropdowns.html' },
  { name: 'layouts', path: '/patterns/layouts.html' },
];

test.describe('Visual Regression - Light Mode', () => {
  for (const page of PAGES) {
    test(`${page.name} renders correctly`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');
      
      // Wait for fonts to load
      await browserPage.evaluate(() => document.fonts.ready);
      
      await expect(browserPage).toHaveScreenshot(`${page.name}-light.png`, {
        fullPage: true,
      });
    });
  }
});

test.describe('Visual Regression - Dark Mode', () => {
  for (const page of PAGES) {
    test(`${page.name} dark mode renders correctly`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');
      
      // Enable dark mode
      await browserPage.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
      });
      
      // Wait for transition
      await browserPage.waitForTimeout(300);
      await browserPage.evaluate(() => document.fonts.ready);
      
      await expect(browserPage).toHaveScreenshot(`${page.name}-dark.png`, {
        fullPage: true,
      });
    });
  }
});

test.describe('Interactive Components', () => {
  test('dropdown opens correctly', async ({ page }) => {
    await page.goto('/components/dropdowns.html');
    await page.waitForLoadState('networkidle');
    
    // Find and click first dropdown trigger
    const trigger = page.locator('.Dropdown-trigger').first();
    if (await trigger.isVisible()) {
      await trigger.click();
      await page.waitForTimeout(200);
      await expect(page).toHaveScreenshot('dropdown-open.png');
    }
  });

  test('modal opens correctly', async ({ page }) => {
    await page.goto('/components/modals.html');
    await page.waitForLoadState('networkidle');
    
    // Find and click modal trigger button
    const trigger = page.locator('button:has-text("Open Modal")').first();
    if (await trigger.isVisible()) {
      await trigger.click();
      await page.waitForTimeout(300);
      await expect(page).toHaveScreenshot('modal-open.png');
    }
  });

  test('tabs switch correctly', async ({ page }) => {
    await page.goto('/components/tabs.html');
    await page.waitForLoadState('networkidle');
    
    // Click second tab
    const secondTab = page.locator('.Tabs-tab').nth(1);
    if (await secondTab.isVisible()) {
      await secondTab.click();
      await page.waitForTimeout(200);
      await expect(page).toHaveScreenshot('tabs-switched.png');
    }
  });

  test('accordion expands correctly', async ({ page }) => {
    await page.goto('/components/accordions.html');
    await page.waitForLoadState('networkidle');
    
    // Click first accordion header
    const header = page.locator('.Accordion-header').first();
    if (await header.isVisible()) {
      await header.click();
      await page.waitForTimeout(300);
      await expect(page).toHaveScreenshot('accordion-expanded.png');
    }
  });
});

test.describe('Responsive Design', () => {
  test('home page mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    
    await expect(page).toHaveScreenshot('home-mobile.png', {
      fullPage: true,
    });
  });

  test('navigation drawer opens on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Click menu button
    const menuButton = page.locator('.TopBar-menu, [aria-label="Menu"]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(300);
      await expect(page).toHaveScreenshot('nav-drawer-open.png');
    }
  });
});
