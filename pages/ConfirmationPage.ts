import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
// Displays the generated order ID for tracking purposes
  async getOrderNumber(): Promise<string | null> {
    try {
      const locator = this.page.getByTestId('order-number');
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      const txt = await locator.textContent();
      return txt ? txt.trim() : null;
    } catch {
      return null;
    }
  }
}
