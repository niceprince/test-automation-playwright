import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe("Checkout Flow", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);
  });

  test("Login behaviour", async ({ page }) => {
    await expect(page.locator(".inventory_list")).toBeVisible();
  });

  test("Complete Purchase", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addItemToCart();
    await inventoryPage.gotoCart();

    await cartPage.proceedToCheckout();

    await page.waitForTimeout(3000);
    await checkoutPage.fillDetails("John", "Doe", "201301");
    await checkoutPage.finishOrder();
    await page.waitForTimeout(3000);

    await expect(checkoutPage.successMsg).toHaveText(
      "Thank you for your order!"
    );
    await page.waitForTimeout(3000);
  });

  test("Back to home", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addItemToCart();
    await inventoryPage.gotoCart();
    await cartPage.proceedToCheckout();

    await page.waitForTimeout(3000);

    await checkoutPage.fillDetails("John", "Doe", "201301");
    await checkoutPage.finishOrder();

    await page.locator("#back-to-products").click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/inventory/);
    await page.waitForTimeout(3000);
  });
});
