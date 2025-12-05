import { test, expect } from '@playwright/test';
import { ProductDetailPage } from '../pages/ProductDetailPage';

test.describe('Product Detail Page', () => {
  test.beforeEach(async ({ page }) => {
    const detail = new ProductDetailPage(page);
    await detail.navigateToProduct('1');
  });

  test('display product info', async ({ page }) => {
    // Open a specific product detail page
    const detail = new ProductDetailPage(page);
    // Validate the product title is visible
    await expect(detail.productName).toBeVisible();
    await expect(detail.productPrice).toBeVisible();
  });

  test('add product with quantity to cart', async ({ page }) => {
    const detail = new ProductDetailPage(page);
     // Add the product to cart
    await detail.addToCart(2);
    const cartBtn = page.getByTestId('cart-button');
    if (await cartBtn.count() > 0) await cartBtn.click();
    // Validate redirection to cart
    await expect(page).toHaveURL(/\/cart/);
  });

  test('back button navigates to products', async ({ page }) => {
    const detail = new ProductDetailPage(page);
    // Navigate back to products list
    await detail.goBack();
    // Verify the URL
    await expect(page).toHaveURL(/\/products/);
  });
});
