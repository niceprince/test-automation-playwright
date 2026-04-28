import { test, expect, Locator } from "@playwright/test";
const automateSiteUrl = "https://testautomationpractice.blogspot.com";

test("Multi select options", async ({page}) => {
  await page.goto(automateSiteUrl);

  // await page.locator('#colors').selectOption(["Red", "Blue", "Green"]);
  // await page.locator("#colors").selectOption(['red', 'green', 'white']);
  // await page.locator("#colors").selectOption([{ index: 'Blue' }, { label: 'Green' }, { label: 'Yellow'} ]);
  await page.locator("#colors").selectOption([{ index: 1 }, { index: 3 }, { index: 5} ]);

  const dropdownOptions = page.locator("#colors>option");
  await expect(dropdownOptions).toHaveCount(7);

  // check an option present in options

  const textOptions:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
  // console.log(textOptions)
  expect(textOptions).toContain("Yellow");

  // Printing options from dropdown

  for(const opt of textOptions){
    console.log(opt)
  }


  await page.waitForTimeout(6000)
})