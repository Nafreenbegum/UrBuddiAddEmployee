import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AddEmployeePage } from '../pages/AddEmployeePage.js';
import { generateEmployee } from '../utils/fakerData.js';

const { getLoginData } = require('../utils/excelReader');

test('Login → Add → Delete Employee Flow', async ({ page }) => {

  const loginData = getLoginData();

  const loginPage = new LoginPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  // Login
  await test.step('Login to application', async () => {
    await loginPage.login(
      loginData.url,
      loginData.email,
      loginData.password
    );
  });

  //  Generate employee (no await needed)
  const employee = generateEmployee();

  // Add Employee
  await test.step('Add new employee', async () => {
    await addEmployeePage.openAddEmployeeForm();
    await addEmployeePage.addEmployee(employee);
    await addEmployeePage.submitAndValidate();
  });

  // Delete Employee
  await test.step('Delete created employee', async () => {
    await addEmployeePage.deleteEmployee();
    await addEmployeePage.validateEmployeeDeleted();
  });
await addEmployeePage.importEmployeeExcel('testdata/sample_employee_details_T001.xlsx');
});