import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getLoginData } from '../Utils/excelReader';

test('Login to UrBuddi', async ({ page }) => {

  const loginData = getLoginData();

  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.url,
    loginData.email,
    loginData.password
  );

});