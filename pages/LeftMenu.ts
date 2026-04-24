import { Page } from "@playwright/test";

export class LeftMenu {
  constructor(private page: Page) {}

  burgerMenu = this.page.locator("#react-burger-menu-btn");

  async openMenu() {
    await this.burgerMenu.click();
  }
  
}