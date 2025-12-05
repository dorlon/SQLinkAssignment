import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heroSection: Locator;
  readonly shopNowButton: Locator;
  readonly productsNavLink: Locator;

  constructor(page: Page) {
    super(page);
     // Main hero section container at the top of the homepage
    this.heroSection = page.getByTestId('hero-section');
    this.shopNowButton = page.getByTestId('shop-now-button');
    // Navigation link that leads to the Products page (header)
    this.productsNavLink = page.getByTestId('products-nav-link');
  }

  // Navigates to the Products page.
  async goToProducts() {
    if (await this.shopNowButton.count() > 0) {
      await Promise.all([
        this.page.waitForURL(/\/products/),
        this.shopNowButton.click()
      ]);
      // Otherwise fallback to header Products link
    } else {
      await Promise.all([
        this.page.waitForURL(/\/products/),
        this.productsNavLink.click()
      ]);
    }
  }
}