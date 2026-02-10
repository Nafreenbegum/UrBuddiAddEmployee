export class AddEmployeePage {
  constructor(page) {
    this.page = page;

    // Buttons
    this.addEmployeeBtn = page.getByRole('button', { name: /add employee/i });
    this.saveBtn = page.getByRole('button', { name: /save/i });

    // Input fields
    this.firstName = page.locator("//input[@name='firstName']");
    this.lastName = page.locator("//input[@name='lastName']");
    this.employeeId = page.locator("//input[@name='id']");
    this.email = page.locator("//input[@name='email']");
    this.password = page.locator("//input[@name='password']");
    this.dob = page.locator("//input[@name='dob']");
    this.joiningDate= page.locator("//input[@name='joiningDate']");
    this.qualification = page.locator("//select[@name='qualifications']");
    this.Department=page.locator("//input[@name='department']");
    this.Gender=page.locator("//select[@name='gender']");
    //this.MobileNum=
    this.bloodGroup=page.locator("//select[@name='bloodGroup']");
    this.Designation=page.locator("//input[@name='designation']");
    this.salary=page.locator("//input[@name='salary']");
    this.Location=page.locator("//input[@name='location']");
    this.reportingTo=page.locator("//select[@name='reportingTo']");
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
    await this.qualification.selectOption(data.qualification );
    await this.Department.fill(data.Department);
    await this.Gender.selectOption({label: data.Gender});
    //await this.bloodGroup.selectOption(data.bloodGroup);



  }

  async save() {
    //await this.saveBtn.click();
  }
}


