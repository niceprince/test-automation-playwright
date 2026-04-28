import { test, expect, Locator } from "@playwright/test";

test("compare the test methods", async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.setInputFiles('input[type="file"]#singleFileInput', './pages/file-sample.pdf');

  await page.waitForTimeout(2000);
  await expect(await page.locator('input#singleFileInput')).toHaveValue(/file-sample.pdf/);

  await page.waitForTimeout(3000);
});
