import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


// Page object that represents the Product Detail page.
// Handles reading product information, selecting quantity, and adding items to cart.
export class ProductDetailPage extends BasePage {
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly quantityInput: Locator;
  readonly increaseButton: Locator;
  readonly decreaseButton: Locator;
  readonly addToCartButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = page.getByTestId('product-detail-name');
    this.productPrice = page.getByTestId('product-detail-price');
    this.quantityInput = page.getByTestId('quantity-input');
    this.increaseButton = page.getByTestId('increase-quantity');
    this.decreaseButton = page.getByTestId('decrease-quantity');
    this.addToCartButton = page.getByTestId('add-to-cart-detail');
    this.backButton = page.getByTestId('back-button');
  }

  async navigateToProduct(id: string | number) {
    await this.navigate(`/products/${id}`);
  }

  // Button that adds the product to the shopping cart
  async addToCart(quantity: number = 1) {
    await this.quantityInput.fill(String(quantity));
    // Clicks the "Add to Cart" button to add the product to the user's cart
    await this.addToCartButton.click();
    await this.page.waitForTimeout(200);
  }

  // Returns to the products listing page by clicking the back button
  async goBack() {
    await this.backButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
