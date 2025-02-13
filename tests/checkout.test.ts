import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';
import { ProductPage } from '../Pages/Product.page';

test('Scenario 2: Complete Checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Login
  await loginPage.navigateToLogin();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add product to cart
  await productPage.addToCart('Sauce Labs Backpack');
  await productPage.navigateToCart();

  // Checkout process
  await page.click('#checkout');
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');
  await page.click('#finish');
  
  // Assertions
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});