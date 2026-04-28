import { test, expect, Locator } from "@playwright/test";
const automateSiteUrl = "https://testautomationpractice.blogspot.com";

test("Verify select dropdown sorted or not", async ({page}) => {
  await page.goto(automateSiteUrl);

  const colorDropdowns = page.locator("#colors>option");
  const dropdownOptions:Locator = page.locator("#animals>option");
  // const checkDuplicates:string[] = (await colorDropdowns.allTextContents()).map(clr => clr.trim());
  const checkDuplicates:string[] = (await dropdownOptions.allTextContents()).map(ani => ani.trim());

  const mySet = new Set<string>();
  const duplicates:string[] = [];

  for(const text of checkDuplicates){
    if(mySet.has(text)){
      duplicates.push(text);
    }else {
      mySet.add(text)
    }
  }

  console.log("Duplicates - ", duplicates);
  console.log("mySet", mySet);

  expect(duplicates.length).toBe(0);


  await page.waitForTimeout(6000)
})