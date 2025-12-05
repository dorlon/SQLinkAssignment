import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { validCheckoutData } from '../fixtures/testData';
import { CartPage } from '../pages/CartPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Checkout Form', () => {
  test.beforeEach(async ({ page }) => {
    const products = new ProductsPage(page);
    await page.goto('/');
    await products.gotoProducts();
    await products.addProductToCart('1');

    const cart = new CartPage(page);
    await cart.openCart();
    // Navigate to the checkout page
    await cart.proceedToCheckout();

    const checkout = new CheckoutPage(page);
    await checkout.waitForPage(); // optional helper: מחכה ל־/checkout
  });

  test('should fill checkout form and place order', async ({ page }) => {
    // Fill the checkout form using predefined test data
    const checkout = new CheckoutPage(page);
    await checkout.fillCheckoutForm(validCheckoutData);
    // Submit the order
    await checkout.placeOrder(); 
    // Validate successful redirect to confirmation page
    await expect(page).toHaveURL(/\/confirmation/);
  });
});
