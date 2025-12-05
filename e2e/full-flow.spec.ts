import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { validCheckoutData } from '../fixtures/testData';

test('complete purchase flow', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate('/');
  await home.goToProducts();

  const products = new ProductsPage(page);
  await products.gotoProducts();
  await products.addProductToCart('1'); // add product 1
  await products.openProductDetails(2); // open details for product 2

  const detail = new ProductDetailPage(page);
  await detail.addToCart(1);

  const cart = new CartPage(page);
  await cart.openCart();
  await cart.proceedToCheckout();

  const checkout = new CheckoutPage(page);
  await checkout.fillCheckoutForm(validCheckoutData);
  await checkout.placeOrder();

  const confirmation = new ConfirmationPage(page);
  const orderNumber = await confirmation.getOrderNumber();
  expect(orderNumber).not.toBeNull();
  expect(orderNumber?.trim().length).toBeGreaterThan(0);
});
