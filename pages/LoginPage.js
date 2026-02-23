export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async login(url, email, password) {
    await this.page.goto(url);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}