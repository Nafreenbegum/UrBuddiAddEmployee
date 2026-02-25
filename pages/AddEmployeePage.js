import { expect } from "@playwright/test";

export class AddEmployeePage {
  constructor(page) {
    this.page = page;

    // 🔹 Navigation
    this.employeesMenu = page.locator("//p[text()='Employees']");
    this.addEmployeeBtn = page.locator("//button[text()='Add Employee']");
    this.addBtn = page.locator("//button[text()='Add']");

    // 🔹 IMPORT EXCEL LOCATORS 
  this.importExcelBtn = page.locator("//button[text()='Import Excel Sheet']");
  this.uploadLabelBtn = page.locator("#uploadBtn"); 
  this.fileInput = page.locator("#fileInput");
  this.submitBtn = page.locator("//button[text()='Submit']");

    // 🔹 Form Fields
    this.firstName = page.locator("[name='firstName']");
    this.lastName = page.locator("[name='lastName']");
    this.employeeId = page.locator("[name='id']");
    this.email = page.locator("[name='email']");
    this.password = page.locator("[name='password']");
    this.role = page.locator("[name='role']");
    this.dob = page.locator("[name='dob']");
    this.joiningDate = page.locator("[name='joiningDate']");
    this.qualification = page.locator("[name='qualifications']");
    this.Department = page.locator("[name='department']");
    this.Gender = page.locator("[name='gender']");
    this.MobileNum = page.locator("[name='mobileNumber']");
    this.bloodGroup = page.locator("[name='bloodGroup']");
    this.Designation = page.locator("[name='designation']");
    this.salary = page.locator("[name='salary']");
    this.Location = page.locator("[name='location']");
    this.reportingTo = page.locator("[name='reportingTo']");
    this.searchBox = page.locator("//input[@aria-label='EMP ID Filter Input']");

    // 🔹 Grid + Delete
    this.statusMessage = page.locator("div[role='status']").first();
    this.deleteBtn = page.locator("button.deleteIcon");
    this.selectedText = page.locator("//p[contains(.,'Employees Selected')]");
  }
  

  // 🔹 Open Add Employee Form
  async openAddEmployeeForm() {
    await this.employeesMenu.click();
    await this.addEmployeeBtn.click();
  }

  // 🔹 Fill Employee Form
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

    this.newEmployeeId = data.employeeId;
  }

  // Submit & Validate Creation
  async submitAndValidate() {
    await this.addBtn.click();
    await expect(this.statusMessage).toHaveText("Saved Successfully", { timeout: 10000 });

    await this.searchEmployee();

    const rowLocator = this.page.locator(
      `.ag-center-cols-container .ag-cell[col-id="empId"]`,
      { hasText: this.newEmployeeId }
    );
  }

  // Search Employee
  async searchEmployee() {
    await this.searchBox.fill(this.newEmployeeId);
    await this.page.waitForTimeout(800); // small wait for AG-Grid filtering
  }

  //  Select Employee Checkbox (AG-Grid Safe Version)
  async selectEmployeeCheckbox() {

    const row = this.page.locator(
      `//div[@role='row' and .//div[text()='${this.newEmployeeId}']]`
    );

    await expect(row).toBeVisible({ timeout: 10000 });

    const checkbox = row.locator("input.ag-checkbox-input");

    await checkbox.scrollIntoViewIfNeeded();
    await checkbox.click({ force: true });

    // Confirm checkbox is actually selected
    await expect(checkbox).toBeChecked();
  }

  //  Delete Employee (With Validation Before Delete)
  async deleteEmployee() {

    // Select checkbox first
    await this.selectEmployeeCheckbox();

    // Validate selection message appears
    await expect(this.selectedText).toBeVisible({ timeout: 5000 });
    await expect(this.selectedText).toHaveText(/\d+\s+Employees Selected/);

    // Click delete
    await this.deleteBtn.click();

    // Optional: Validate success message
    await expect(this.statusMessage)
      .toHaveText(/Deleted Successfully|Success/i, { timeout: 10000 });
  }

  //  Validate Employee Removed
  async validateEmployeeDeleted() {

    await this.searchEmployee();

    const row = this.page.locator(
      `//div[@role='row' and .//div[text()='${this.newEmployeeId}']]`
    );

    await expect(row).toHaveCount(0);
  }

  async importEmployeeExcel(filePath) {
  //Click Import Excel Sheet
  await this.importExcelBtn.click();
  // Wait for file input to be attached
  await this.fileInput.waitFor({ state: 'attached' });
  //  Upload file
  await this.fileInput.setInputFiles(filePath);
  //  Validate file name appears in textbox (optional but good practice)
  const fileName = filePath.split('/').pop();
  await expect(this.page.locator("input[readonly]"))
        .toHaveValue(fileName);
  // Click Submit
  await expect(this.submitBtn).toBeEnabled();
  await this.submitBtn.click();

}
}