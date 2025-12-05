// tests/helpers/utils.ts
import { Page } from '@playwright/test';

export async function waitForNavigation(page: Page) {
  // Wait until network requests are idle (no more requests being made)
  await page.waitForLoadState('networkidle');
}
