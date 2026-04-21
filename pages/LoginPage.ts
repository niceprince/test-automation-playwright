import { Page } from "@playwright/test";

export class LoginPage {
  constructor(public page: Page) {}

  usernameInput = "#user-name";
  passwordInput = "#password";
  loginButton = "#login-button";

  async goto() {
    await this.page.goto("https://saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
