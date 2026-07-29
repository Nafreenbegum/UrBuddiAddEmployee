import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.email = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(): Promise<void> {

    await this.page.goto('https://dev.urbuddi.com/');
    await this.email.fill('sunandabattinaa@gmail.com');
    await this.password.fill('123456');
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}