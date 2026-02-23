import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AddEmployeePage } from '../pages/AddEmployeePage.js';
import { generateEmployee } from '../utils/fakerData.js';

const { getLoginData } = require('../utils/excelReader');

test('Login → Add Employee Flow', async ({ page }) => {

  // 📘 Read login details from Excel
  const loginData = getLoginData();

  const loginPage = new LoginPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  // 🔐 Login
  await loginPage.login(
    loginData.url,
    loginData.email,
    loginData.password
  );

  // ➕ Open Add Employee form
  await addEmployeePage.openAddEmployeeForm();

  // 🎲 Generate fake employee data
  const employee = await generateEmployee();

  // 📝 Fill employee form
  await addEmployeePage.addEmployee(employee);

  // 💾 Submit
  await addEmployeePage.submit();

  console.log("Employee Created:", employee.firstName);
});