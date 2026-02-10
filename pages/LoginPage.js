export class LoginPage {
  constructor(page) {
    this.page = page;

    // Simple locators
    this.email = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async login(email, password) {
    await this.page.goto('https://dev.urbuddi.com/login');
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}