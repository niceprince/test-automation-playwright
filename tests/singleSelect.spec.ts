import {test, Locator, expect } from "@playwright/test";
// import { test } from "../fixtures/formFixture";

const automateSiteUrl = "https://testautomationpractice.blogspot.com"; // process.env.automateSiteUrl;


test("Single select dropdown", async ({ page }) => {
  await page.goto(automateSiteUrl);
  await page.locator("#country").selectOption("India");
  await page.locator("#country").selectOption({value: 'uk'});
  await page.locator("#country").selectOption({label: 'India'});
  await page.locator("#country").selectOption({index: 4});
  await expect(page.locator("#country")).toBeVisible();

  const dropdownOptions = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);

  // check an option present in options

  const textOptions:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
  // console.log(textOptions)
  expect(textOptions).toContain("Japan");

  // Printing options from dropdown

  for(const opt of textOptions){
    console.log(opt)
  }


  await page.waitForTimeout(5000)
})