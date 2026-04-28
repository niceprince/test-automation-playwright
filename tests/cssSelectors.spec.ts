import { test, describe, expect, Locator } from "@playwright/test";

const automateSite = "https://demowebshop.tricentis.com/";
describe("Describing css as selectors here", async () => {
  test("Css Selectors", async ({page}) => {
    await page.goto(automateSite);

    const inputForm:locator = page.locator("input#small-searchterms");
    const formButton:locator = page.locator("input[type='submit'].button-1.search-box-button");

    await expect(inputForm).toBeVisible();
    await inputForm.fill("T-shirt");

    await page.waitForTimeout(2000);
    await formButton.click();

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/search?q=T-shirt");
    await page.waitForTimeout(2000);
  })
})
