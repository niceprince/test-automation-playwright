import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";

test("user can login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  // await page.waitForTimeout(3000);
  await loginPage.login("standard_user", "secret_sauce");

  // await page.waitForTimeout(3000);

  // Assert that the user is redirected to the dashboard after successful login
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
