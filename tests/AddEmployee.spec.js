import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AddEmployeePage } from '../pages/AddEmployeePage.js';
import { generateEmployee } from '../utils/fakerData.js';
import { getLoginData } from '../Utils/excelReader.js';

let loginData;
let loginPage;
let addEmployeePage;

// 🔹 Runs once before all tests
test.beforeAll(() => {
  loginData = getLoginData();
});

// 🔹 Runs before EACH test
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  addEmployeePage = new AddEmployeePage(page);

  // ✅ Login moved here
  await test.step('Login to application', async () => {
    await loginPage.login(
      loginData.url,
      loginData.email,
      loginData.password
    );
  });
});

// 🔹 Your actual test
test('Login → Add → Delete Employee Flow', async ({ page }) => {

  // Generate employee
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

  // Import Excel
  await test.step('Import employee via Excel', async () => {
    await addEmployeePage.importEmployeeExcel('testdata/sample_employee_details_T001.xlsx');
  });
});

// 🔹 Optional hook
test.afterEach(async () => {
  console.log('Test completed');
});