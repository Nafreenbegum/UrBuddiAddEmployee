import { expect } from "@playwright/test";

export class AddEmployeePage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.employeesMenu = page.locator("//p[text()='Employees']");
    this.addEmployeeBtn = page.locator("//button[text()='Add Employee']");
    this.addBtn = page.locator("//button[text()='Add']");

    // Form Fields
    this.firstName = page.locator("//input[@name='firstName']");
    this.lastName = page.locator("//input[@name='lastName']");
    this.employeeId = page.locator("//input[@name='id']");
    this.email = page.locator("//input[@name='email']");
    this.password = page.locator("//input[@name='password']");
    this.role = page.locator("//select[@name='role']");
    this.dob = page.locator("//input[@name='dob']");
    this.joiningDate = page.locator("//input[@name='joiningDate']");
    this.qualification = page.locator("//select[@name='qualifications']");
    this.Department = page.locator("//input[@name='department']");
    this.Gender = page.locator("//select[@name='gender']");
    this.MobileNum = page.locator("//input[@name='mobileNumber']");
    this.bloodGroup = page.locator("//select[@name='bloodGroup']");
    this.Designation = page.locator("//input[@name='designation']");
    this.salary = page.locator("//input[@name='salary']");
    this.Location = page.locator("//input[@name='location']");
    this.reportingTo = page.locator("//select[@name='reportingTo']");

    // ✅ STABLE AG-GRID SEARCH LOCATOR
    this.searchBox = page.locator('input[aria-label="NAME Filter Input"]');

    // Grid & Delete
    this.selectedText = page.locator("text=Employees Selected");
    this.deleteIcon = page.locator("//button[contains(@class,'delete')]");
    this.successMessage = page.locator("text=success");
  }

  async openAddEmployeeForm() {
    await this.employeesMenu.click();
    await this.addEmployeeBtn.click();
  }

  async addEmployee(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.employeeId.fill(data.employeeId);
    await this.email.fill(data.email);
    await this.password.fill(data.password);

    await this.role.selectOption({ label: data.role });

    await this.dob.fill(data.dob);
    await this.joiningDate.fill(data.joiningDate);

    await this.qualification.selectOption({ label: data.qualification });

    await this.Department.fill(data.Department);
    await this.Gender.selectOption({ label: data.Gender });
    await this.MobileNum.fill(data.MobileNum);
    await this.bloodGroup.selectOption({ label: data.bloodGroup });

    await this.Designation.fill(data.Designation);
    await this.salary.fill(data.salary);
    await this.Location.fill(data.Location);

    await this.reportingTo.selectOption({ label: data.reportingTo });
  }

  async submit() {
    await this.addBtn.click();
  }

  // ✅ FIXED SEARCH METHOD
  async searchEmployee(name) {
    await this.searchBox.waitFor({ state: "visible" });
    await this.searchBox.fill("");
    await this.searchBox.fill(name);

    // Wait for grid to refresh
    await this.page.waitForTimeout(1500);
  }

  // ✅ Dynamic Row Selection
  async selectEmployeeByName(employeeName) {
    const row = this.page.locator(
      `//div[@role='row' and .//div[contains(text(),'${employeeName}')]]`
    );
    await row.locator("input[type='checkbox']").check();
  }

  async validateSelectionText() {
    await expect(this.selectedText).toContainText("1");
  }

  async deleteEmployee() {
    await this.deleteIcon.click();
  }

  async validateDeleteSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}