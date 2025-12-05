import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('E2E Flow', () => {
  let homePage: HomePage;
  let cartPage: CartPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    productsPage = new ProductsPage(page);
  });

  test('should add item to cart', async ({ page }) => {
    // Navigate directly to the products page
    await homePage.goToProducts(); 
    await productsPage.gotoProducts();
    // Add the first product in the list to the cart
    await productsPage.addProductToCart('1'); 
    await cartPage.openCart();
    const item = cartPage.getCartItem('1');
    // Validate that the cart contains at least one product
    await expect(item).toBeVisible();
  });

  test('should proceed to checkout', async ({ page }) => {
    await productsPage.gotoProducts();
    await productsPage.addProductToCart('1');
    // Navigate to the cart page
    await cartPage.openCart();
    // Proceed to the checkout page
    await cartPage.proceedToCheckout();
    // Validate that the URL changed correctly
    await expect(page).toHaveURL(/\/checkout/);
  });
});
