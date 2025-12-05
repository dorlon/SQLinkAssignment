import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async waitForPage() {
    await this.page.waitForURL(/\/checkout/, { timeout: 5000 });
    await this.page.waitForLoadState('networkidle');
  }

  async fillCheckoutForm(data: any) {
    await this.page.getByTestId('first-name-input').fill(data.firstName);
    await this.page.getByTestId('last-name-input').fill(data.lastName);
    await this.page.getByTestId('email-input').fill(data.email);
    await this.page.getByTestId('phone-input').fill(data.phone);
    await this.page.getByTestId('address-input').fill(data.address);
    await this.page.getByTestId('city-input').fill(data.city);
    await this.page.getByTestId('state-input').fill(data.state);
    await this.page.getByTestId('zip-input').fill(data.zip);
    await this.page.getByTestId('card-number-input').fill(data.cardNumber);
    await this.page.getByTestId('card-name-input').fill(data.cardName);
    await this.page.getByTestId('expiry-input').fill(data.expiry);
    await this.page.getByTestId('cvv-input').fill(data.cvv);
  }

  // Clicks the "Place Order" button and waits for navigation
  // to ensure the order confirmation page loads.
  async placeOrder() {
    await Promise.all([
      this.page.waitForURL(/\/confirmation/, { timeout: 10000 }),
      this.page.getByTestId('place-order-button').click()
    ]);
    await this.page.waitForLoadState('networkidle');
  }
}
