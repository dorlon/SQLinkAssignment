import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

// Page object representing the Products Listing page.
// Allows interaction with the products grid, selecting individual items,
// and navigating to the product details page.
export class ProductsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly searchInput: Locator;
  readonly categoryFilter: Locator;
  readonly sortSelect: Locator;
  readonly cartCount: Locator;

  // Container holding all product cards
  // Each individual product card element
  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByTestId('page-title');
    this.searchInput = page.getByTestId('search-input');
    this.categoryFilter = page.getByTestId('category-filter');
    this.sortSelect = page.getByTestId('sort-select');
    this.cartCount = page.getByTestId('cart-count');
  }

  async gotoProducts() {
    await this.navigate('/products');
    await expect(this.pageTitle).toBeVisible({ timeout: 5000 });
  }

  async searchProducts(query: string) {
    await this.searchInput.fill(query);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async selectCategory(categoryValue: string) {
    await this.categoryFilter.selectOption(categoryValue);
    await this.page.waitForLoadState('networkidle');
  }

  // Adds a product directly to the cart from the products listing page
  async addProductToCart(id: string | number) {
    const numeric = typeof id === 'number' ? id : parseInt(id, 10);
    const card = this.page.getByTestId(`product-card-${numeric}`);
    const addBtn = this.page.getByTestId(`add-to-cart-${numeric}`);
    await expect(card).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await this.page.waitForTimeout(300);
  }

  // Clicks the "View Details" button inside a specific product card
  async openProductDetails(id: number) {
    await this.page.getByTestId(`view-details-${id}`).click();
    await this.page.waitForLoadState('networkidle');
  }

  async getCartCount(): Promise<string | null> {
    try {
      await this.cartCount.waitFor({ state: 'visible', timeout: 2000 });
      return (await this.cartCount.textContent())?.trim() ?? null;
    } catch {
      return null;
    }
  }
}
