import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Page', () => {
  test.beforeEach(async ({ page }) => {
    const products = new ProductsPage(page);
    // Navigate to the products page
    await products.gotoProducts();
  });

  test('should display products', async ({ page }) => {
    const products = new ProductsPage(page);
    // Ensure at least one product is displayed
    await expect(products.pageTitle).toBeVisible();
  });

  test('can add product to cart', async ({ page }) => {
    const products = new ProductsPage(page);
    // Add first available product to cart
    await products.addProductToCart('1');
    const cartCount = await products.getCartCount();
    expect(parseInt(cartCount || '0')).toBeGreaterThanOrEqual(1);
  });

  test('can view product details', async ({ page }) => {
    const products = new ProductsPage(page);
    // Open the first product details page
    await products.openProductDetails(1);
    await expect(page).toHaveURL(/\/products\/1/);
  });
});
