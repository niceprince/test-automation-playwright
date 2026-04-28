import { test, expect, Locator } from "@playwright/test";
const automateSiteUrl = "https://testautomationpractice.blogspot.com";

test("Verify select dropdown sorted or not", async ({page}) => {
  await page.goto(automateSiteUrl);

  const colorDropdowns = page.locator("#colors>option");
  const colorOptions = (await colorDropdowns.allTextContents()).map(clr => clr.trim());

  const originalColors = [...colorOptions];
  const sortedColors = [...colorOptions].sort();
  console.log(originalColors);
  console.log(sortedColors);

  expect(originalColors).not.toEqual(sortedColors);

  const dropdownOptions:Locator = page.locator("#animals>option");
  const animals:string[] = (await dropdownOptions.allTextContents()).map(ani => ani.trim());

  const originalList:string[] = [...animals];
  const sortedList:string[] = [...animals].sort();

  console.log(originalList);
  console.log(sortedList);

  expect(originalList).toEqual(sortedList);


  await page.waitForTimeout(6000)
})