import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeaveManagementPage } from '../pages/leaveManagementPage';

const { generateLeaveData } = require('../Utils/leaveFaker');
const { getLoginData } = require('../Utils/excelReader');

test('Login → Apply Leave', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const leavePage = new LeaveManagementPage(page);

  const leaveData = generateLeaveData();

  // 🔹 Get Excel Data
  const { url, email, password } = getLoginData();

  console.log(url, email, password); // debug

  // 🔹 Login
  await loginPage.login(url, email, password);

  await page.waitForLoadState('networkidle');

  // 🔹 Apply Leave
  await leavePage.applyLeave(leaveData);

});