import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.email = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginButton = page.getByRole('button', { name: 'Login' });

  }

  async login(
    url: string,
    email: string,
    password: string
  ): Promise<void> {

    await this.page.goto(url);

    await this.email.fill(email);

    await this.password.fill(password);

    await this.loginButton.click();

    await this.page.waitForLoadState('networkidle');

  }

}