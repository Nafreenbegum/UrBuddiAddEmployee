import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to UrBuddi', async ({ page }) => {
  await new LoginPage(page).login();
});