import { test } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';

test('Scenario 1: Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateToLogin();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifySuccessfulLogin();
});