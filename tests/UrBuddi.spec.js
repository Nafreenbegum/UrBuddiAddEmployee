import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { generateEmployee } from '../utils/fakerData.js';

test('Login → Add → Delete Employee Complete Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  // 🔐 Login
  await loginPage.login(
    'nafreenbegum123@optimworks.com',
    'Nafreen@123'
  );

  // ➕ Add Employee
  await addEmployeePage.openAddEmployeeForm();

  const employee = await generateEmployee();

  await addEmployeePage.addEmployee(employee);
  await addEmployeePage.submit();

  console.log('Employee Added:', employee.firstName);

  // 🔎 Search Employee
  await addEmployeePage.searchEmployee(employee.firstName);

  // ✅ Select Correct Row Checkbox
  await addEmployeePage.selectEmployeeByName(employee.firstName);

  // ✅ Validate Selection Text
  await addEmployeePage.validateSelectionText();

  // 🗑 Delete Employee
  await addEmployeePage.deleteEmployee();

  // ✅ Validate Success Message
  await addEmployeePage.validateDeleteSuccess();

});