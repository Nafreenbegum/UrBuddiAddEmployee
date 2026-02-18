import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { generateEmployee } from '../utils/fakerData.js';

test('Add Employee with Faker data', async ({ page }) => {

  // Step 1: Login
  const loginPage = new LoginPage(page);
  await loginPage.login('nafreenbegum123@optimworks.com', 'Nafreen@123');

  // Verify login
  await expect(page.locator("//img[@class='company-logo-header']")).toBeVisible();

  // Step 2: Navigate to Employees page
  await page.goto('https://dev.urbuddi.com/allemployees');

  // Step 3: Open Add Employee form
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.openAddEmployeeForm();

  // Step 4: Generate Faker employee data
  const employee = generateEmployee();

  // Step 5: Fill the form with Faker data
  await addEmployeePage.addEmployee(employee);

  // Step 6: Submit the form
  await addEmployeePage.add();

  // Optional: log the generated data
  console.log('Employee added:', employee);
});
