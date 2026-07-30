import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { generateEmployee } from '../Utils/fakerData';
import { getLoginData } from '../Utils/excelReader';

test.beforeEach(async ({ page }) => {

  const loginData = getLoginData();

  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.url,
    loginData.email,
    loginData.password
  );

});

test('Add and Delete Employee', async ({ page }) => {

  const addEmployeePage = new AddEmployeePage(page);

  const employee = generateEmployee();

  await test.step('Open Add Employee Form', async () => {

    await addEmployeePage.openAddEmployeeForm();

  });

  await test.step('Add Employee', async () => {

    await addEmployeePage.addEmployee(employee);

    await addEmployeePage.submitAndValidate();

  });

  await test.step('Delete Employee', async () => {

    await addEmployeePage.deleteEmployee();

    await addEmployeePage.validateEmployeeDeleted();

  });

  await test.step('Import Employee Excel', async () => {

    await addEmployeePage.importEmployeeExcel(
      'testData/employee_details_T001.xlsx'
    );

  });

});

test.afterEach(async () => {

  console.log('Test Completed');

});
