import { test, expect } from "@playwright/test";
import { LeftMenu } from "../pages/LeftMenu";
import { LoginPage } from "../pages/LoginPage.ts";

test.describe("Open left menu", () => {
  test("Click on burger menu", async ({page}) => {

    const loginPage = new LoginPage(page);
    const leftMenu = new LeftMenu(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);
    await leftMenu.openMenu();
    await page.waitForTimeout(3000);
    await expect(page.locator("#about_sidebar_link")).toBeVisible();
    await page.locator("#about_sidebar_link").click();

    await expect(page).toHaveURL("https://saucelabs.com/")
  })
})