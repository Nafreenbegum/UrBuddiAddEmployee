import { expect } from "@playwright/test";

export class AddEmployeePage {
  constructor(page) {
    this.page = page;

    // 🔹 Navigation
    this.employeesMenu = page.locator("//p[text()='Employees']");
    this.addEmployeeBtn = page.locator("//button[text()='Add Employee']");
    this.addBtn = page.locator("//button[text()='Add']");

    // 🔹 IMPORT EXCEL
    this.importExcelBtn = page.locator("//button[text()='Import Excel Sheet']");
    this.fileInput = page.locator("#fileInput");
    this.submitBtn = page.locator("//button[text()='Submit']");

    // 🔹 Form Fields
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
    await this.personalEmail.fill(data.personalEmail);
    await this.password.fill(data.password);
    await this.role.selectOption({ label: data.role });
    await this.dob.fill(data.dob);
    await this.joiningDate.fill(data.joiningDate);
    await this.pastExperience.fill(data.pastExperience);
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

  // 🔹 Submit & Validate Creation (RETRY LOGIC)
  async submitAndValidate() {
    await this.addBtn.click();

    await expect(this.statusMessage)
      .toHaveText("Saved Successfully", { timeout: 10000 });

    let found = false;

    // 🔁 Retry search up to 5 times
    for (let i = 0; i < 5; i++) {
      await this.searchEmployee();

      const row = this.page.locator(".ag-cell", {
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

  // 🔹 Search Employee (FIXED)
  async searchEmployee() {
    await this.searchBox.fill(this.newEmployeeId);

    // ✅ Trigger AG-Grid filtering
    await this.searchBox.press("Enter");

    await this.page.waitForTimeout(800);
  }

  // 🔹 Select Employee Checkbox (STABLE)
  async selectEmployeeCheckbox() {

    const cell = this.page.locator(".ag-cell", {
      hasText: this.newEmployeeId
    }).first();

    await expect(cell).toBeVisible({ timeout: 10000 });

    const row = cell.locator("xpath=ancestor::div[@role='row']");
    const checkbox = row.locator("input.ag-checkbox-input");

    await checkbox.check({ force: true });

    await expect(checkbox).toBeChecked();
  }

  // 🔹 Delete Employee
async deleteEmployee() {

  // ✅ Select checkbox
  await this.selectEmployeeCheckbox();

  // ✅ Wait for delete button
  await expect(this.deleteBtn).toBeEnabled({ timeout: 10000 });

  // ✅ Click delete
  await this.deleteBtn.click();

  // ✅ Wait for confirmation modal
  const confirmPopup = this.page.locator("//p[text()='Confirm Delete']");
  await expect(confirmPopup).toBeVisible({ timeout: 5000 });

  // ✅ Click YES button
  const yesBtn = this.page.locator("//button[text()='Yes']");
  await yesBtn.click();

  // ✅ Validate success message
  await expect(this.statusMessage)
    .toHaveText(/Deleted Successfully|Success/i, { timeout: 10000 });
}

  // 🔹 Validate Employee Deleted
  async validateEmployeeDeleted() {
    await this.searchEmployee();

    const row = this.page.locator(".ag-cell", {
      hasText: this.newEmployeeId
    });

    await expect(row).toHaveCount(0);
  }

  // 🔹 Import Excel
  async importEmployeeExcel(filePath) {
    await this.importExcelBtn.click();

    await this.fileInput.waitFor({ state: "attached" });

    await this.fileInput.setInputFiles(filePath);

    const fileName = filePath.split("/").pop();

    await expect(this.page.locator("input[readonly]"))
      .toHaveValue(fileName);

    await this.submitBtn.click();
  }
}