import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page', () => {

  test('should load home page', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');

    // Validate that the page is rendered by checking the main heading
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Use the HomePage page-object for navigation
    const home = new HomePage(page);

    // Navigate to the products page
    await home.goToProducts();

    // Ensure the browser redirected correctly
    await expect(page).toHaveURL(/\/products/);
  });

  test('header navigation works', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');

    // Navigate to products using the header link test-id (stable selector)
    await page.getByTestId('products-nav-link').click();
    await expect(page).toHaveURL(/\/products/);

    // Navigate back to the home page using the site logo
    await page.getByTestId('logo').click();
    await expect(page).toHaveURL('/');
  });

});
