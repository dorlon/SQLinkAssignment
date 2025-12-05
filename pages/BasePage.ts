import { Page } from '@playwright/test';

// BasePage serves as a shared foundation for all page objects in the project.
// It provides commonly-used helpers and ensures consistent behavior across tests.
export class BasePage {
  constructor(protected page: Page) {}

   // Navigates to a given URL path (e.g. "/", "/products").
  // Keeps navigation logic centralized.
  async navigate(path = '/') {
    await this.page.goto(path);
    await this.page.waitForLoadState('networkidle');
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}