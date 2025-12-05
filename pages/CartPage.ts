import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

// Page object representing the Cart screen.
// Contains all element locators and actions related to cart operations.
export class CartPage extends BasePage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    super(page);
    // All cart items displayed in the cart list
    this.cartItems = page.locator('[data-testid^="cart-item-"]');
    // Button to proceed to checkout
    this.checkoutButton = page.getByTestId('checkout-button');
    this.cartButton = page.getByTestId('cart-button');
  }

  getCartItem(id: string) {
    return this.page.getByTestId(`cart-item-${id}`);
  }

  async openCart() {
    await this.cartButton.click();
    await this.page.waitForURL(/\/cart/);
    await this.page.waitForLoadState('networkidle');
  }
  // Clicks the checkout button and waits for navigation.
  // Ensures smooth transition to the checkout page.
  async proceedToCheckout() {
    await Promise.all([
      this.page.waitForURL(/\/checkout/),
      this.checkoutButton.click()
    ]);
    await this.page.waitForLoadState('networkidle');
  }
}
