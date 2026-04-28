import { test, expect, Locator } from "@playwright/test";

test("compare the test methods", async ({page}) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products:Locator = page.locator('.product-title');

  const count:Number = products.count();

  for(let i = 0; i < count; i++) {
    const productName:String = await products.nth(i).innerText();
  }

  await page.waitForTimeout(3000);
});
