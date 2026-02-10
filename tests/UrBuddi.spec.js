import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';

test('Add employee – simple test', async ({ page }) => {

  // Step 1: Login using existing LoginPage
  const loginPage = new LoginPage(page);
  await loginPage.login(
    'nafreenbegum.mohammed+1@optimworks.com',
    '12345678'
  );

  // Optimworks logo assertion (post-login)
  await expect(page.locator("//img[@class='company-logo-header']")).toBeVisible();

  // Step 2: Navigate to Employees page
  await page.goto('https://dev.urbuddi.com/allemployees');

  // Step 3: Add employee
  const addEmployeePage = new AddEmployeePage(page);

await addEmployeePage.openAddEmployeeForm();

await addEmployeePage.addEmployee({
  firstName: 'Test',
  lastName: 'User',
  employeeId: 'EMP001',
  email: 'test@gmail.com',
  password: 'Test@123',
  dob: '2002-06-05',
  joiningDate: '2024-01-15',
  qualification: 'Degree',
  Department: 'QA',
  Gender: 'Female',
  

});

await addEmployeePage.save();
});
