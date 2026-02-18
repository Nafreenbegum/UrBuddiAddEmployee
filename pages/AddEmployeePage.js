import { expect } from "@playwright/test";

export class AddEmployeePage {
  constructor(page) {
    this.page = page;

    this.addEmployeeBtn = page.locator("//button[text()='Add Employee']");
    this.addBtn = page.locator("//button[text()='Add']");

    this.firstName = page.locator("//input[@name='firstName']");
    this.lastName = page.locator("//input[@name='lastName']");
    this.employeeId = page.locator("//input[@name='id']");
    this.email = page.locator("//input[@name='email']");
    this.password = page.locator("//input[@name='password']");
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
    this.CheckBox=page.locator("//input[@id='ag-905-input']");
    const delteText = this.page.locator("//p[@class='pt-3']");
    this.deleteBtn =this.page.locator("//button[@class='deleteIcon']");
  }

  async openAddEmployeeForm() {
    await this.addEmployeeBtn.click();
  }

  async addEmployee(data) {

    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.employeeId.fill(data.employeeId);
    await this.email.fill(data.email);
    await this.password.fill(data.password);
    await this.dob.fill(data.dob);
    await this.joiningDate.fill(data.joiningDate);
    await this.qualification.selectOption(data.qualification);
    await this.Department.fill(data.Department);
    await this.Gender.selectOption(data.Gender);
    await this.MobileNum.fill(data.MobileNum);
    await this.bloodGroup.selectOption(data.bloodGroup);
    await this.Designation.fill(data.Designation);
    await this.salary.fill(data.salary);
    await this.Location.fill(data.Location);
    await this.reportingTo.selectOption(data.reportingTo);
  }

  async add() {
    await this.addBtn.click();
  await this.CheckBox.check();
  await this.deleteBtn.click(data.deleteBtn);
}
}


