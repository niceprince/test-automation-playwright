import {test, expect, Locator} from '@playwright/test';

const automateSite = "https://testautomationpractice.blogspot.com/";

test("Handle dynamic element using xPath", async ({page}) => {
  await page.goto(automateSite);

  for(let i = 1; i <= 5; i++) {
    let button = await page.locator("//button[text()='STOP' or text()='START']");

    await button.click();

    await page.waitForTimeout(2000);
  }
})

test("Handle dynamic element using by role", async ({page}) => {
  await page.goto(automateSite);

  for(let i = 1; i <= 5; i++) {
    let btn = await page.getByRole("button", { name: /START|STOP/ });

    await btn.click();

    await page.waitForTimeout(3000);
  }
})