import { Page, Locator, expect } from '@playwright/test';

export class AddEmployeePage {

  readonly page: Page;

  // Navigation
  readonly employeesMenu: Locator;
  readonly addEmployeeBtn: Locator;
  readonly addBtn: Locator;

  // Import Excel
  readonly importExcelBtn: Locator;
  readonly fileInput: Locator;
  readonly submitBtn: Locator;

  // Form Fields
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly employeeId: Locator;
  readonly email: Locator;
  readonly personalEmail: Locator;
  readonly password: Locator;
  readonly role: Locator;
  readonly dob: Locator;
  readonly joiningDate: Locator;
  readonly pastExperience: Locator;
  readonly qualification: Locator;
  readonly department: Locator;
  readonly gender: Locator;
  readonly mobileNum: Locator;
  readonly bloodGroup: Locator;
  readonly designation: Locator;
  readonly salary: Locator;
  readonly location: Locator;
  readonly reportingTo: Locator;

  readonly searchBox: Locator;

  // Grid
  readonly statusMessage: Locator;
  readonly deleteBtn: Locator;
  readonly selectedText: Locator;

  newEmployeeId!: string;

  constructor(page: Page) {

    this.page = page;

    // Navigation
    this.employeesMenu = page.locator("//p[text()='Employees']");
    this.addEmployeeBtn = page.locator("//button[text()='Add Employee']");
    this.addBtn = page.locator("//button[text()='Add']");

    // Import
    this.importExcelBtn = page.locator("//button[text()='Import Excel Sheet']");
    this.fileInput = page.locator('#fileInput');
    this.submitBtn = page.locator("//button[text()='Submit']");

    // Employee Form
    this.firstName = page.locator("[name='firstName']");
    this.lastName = page.locator("[name='lastName']");
    this.employeeId = page.locator("[name='id']");
    this.email = page.locator("[name='email']");
    this.personalEmail = page.locator("[name='personalEmail']");
    this.password = page.locator("[name='password']");
    this.role = page.locator("[name='role']");
    this.dob = page.locator("[name='dob']");
    this.joiningDate = page.locator("[name='joiningDate']");
    this.pastExperience = page.locator("[name='pastExperience']");
    this.qualification = page.locator("[name='qualifications']");
    this.department = page.locator("[name='department']");
    this.gender = page.locator("[name='gender']");
    this.mobileNum = page.locator("[name='mobileNumber']");
    this.bloodGroup = page.locator("[name='bloodGroup']");
    this.designation = page.locator("[name='designation']");
    this.salary = page.locator("[name='salary']");
    this.location = page.locator("[name='location']");
    this.reportingTo = page.locator("[name='reportingTo']");

    this.searchBox = page.locator("//input[@aria-label='EMP ID Filter Input']");

    this.statusMessage = page.locator("div[role='status']").first();
    this.deleteBtn = page.locator("button.deleteIcon");
    this.selectedText = page.locator("//p[contains(.,'Employees Selected')]");
  }

  async openAddEmployeeForm(): Promise<void> {

    await this.employeesMenu.click();
    await this.addEmployeeBtn.click();

  }

  async addEmployee(data: any): Promise<void> {

    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.employeeId.fill(data.employeeId);
    await this.email.fill(data.email);
    await this.personalEmail.fill(data.personalEmail);
    await this.password.fill(data.password);
    await this.role.selectOption({ label: data.role });
    await this.dob.fill(data.dob);
    await this.joiningDate.fill(data.joiningDate);
    await this.pastExperience.fill(data.pastExperience);
    await this.qualification.selectOption({ label: data.qualification });
    await this.department.fill(data.Department);
    await this.gender.selectOption({ label: data.Gender });
    await this.mobileNum.fill(data.MobileNum);
    await this.bloodGroup.selectOption({ label: data.bloodGroup });
    await this.designation.fill(data.Designation);
    await this.salary.fill(data.salary);
    await this.location.fill(data.Location);
    await this.reportingTo.selectOption({ label: data.reportingTo });

    this.newEmployeeId = data.employeeId;

  }

  async submitAndValidate(): Promise<void> {

    await this.addBtn.click();

    await expect(this.statusMessage)
      .toHaveText('Saved Successfully', { timeout: 10000 });

    let found = false;

    for (let i = 0; i < 5; i++) {

      await this.searchEmployee();

      const row = this.page.locator('.ag-cell', {
        hasText: this.newEmployeeId
      });

      if (await row.count() > 0) {

        found = true;
        break;

      }

      await this.page.waitForTimeout(1000);

    }

    expect(found).toBeTruthy();

  }

  async searchEmployee(): Promise<void> {

    await this.searchBox.fill(this.newEmployeeId);
    await this.searchBox.press('Enter');
    await this.page.waitForTimeout(800);

  }

  async selectEmployeeCheckbox(): Promise<void> {

    const cell = this.page.locator('.ag-cell', {
      hasText: this.newEmployeeId
    }).first();

    await expect(cell).toBeVisible({ timeout: 10000 });

    const row = cell.locator("xpath=ancestor::div[@role='row']");
    const checkbox = row.locator('input.ag-checkbox-input');

    await checkbox.check({ force: true });

    await expect(checkbox).toBeChecked();

  }

  async deleteEmployee(): Promise<void> {

    await this.selectEmployeeCheckbox();

    await expect(this.deleteBtn)
      .toBeEnabled({ timeout: 10000 });

    await this.deleteBtn.click();

    const confirmPopup = this.page.locator("//p[text()='Confirm Delete']");

    await expect(confirmPopup)
      .toBeVisible({ timeout: 5000 });

    const yesBtn = this.page.locator("//button[text()='Yes']");

    await yesBtn.click();

    await expect(this.statusMessage)
      .toHaveText(/Deleted Successfully|Success/i, { timeout: 10000 });

  }

  async validateEmployeeDeleted(): Promise<void> {

    await this.searchEmployee();

    const row = this.page.locator('.ag-cell', {
      hasText: this.newEmployeeId
    });

    await expect(row).toHaveCount(0);

  }

  async importEmployeeExcel(filePath: string): Promise<void> {

    await this.importExcelBtn.click();

    await this.fileInput.waitFor({
      state: 'attached'
    });

    await this.fileInput.setInputFiles(filePath);

    const fileName = filePath.split('/').pop()!;

    await expect(this.page.locator('input[readonly]'))
      .toHaveValue(fileName);

    await this.submitBtn.click();

  }

}
