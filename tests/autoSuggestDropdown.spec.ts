import { test, expect, Locator } from "@playwright/test";
// const automateSiteUrl = "https://www.flipkart.com/";

test("Auto Suggest Dropdown Handling", async ({page}) => {
  await page.goto("https://www.flipkart.com/");

  await page.waitForTimeout(1000);
  const loginPopupClose:Locator = await page.locator("div[tabindex='-1'] span[role='button']");
  await loginPopupClose.click();

  await page.locator("input[name='q']").first().fill('smart');

  await page.waitForTimeout(2000);

  const options:Locator = page.locator('ul>li');
  const count:Number = await options.count();

  console.log('checking search count', await options.allTextContents());

  for(let i = 0; i < count; i++){
    const searchText:string = await options.nth(i).textContent();
    console.log("Options datas.... => ", searchText)
    if(searchText?.trim()  === 'smartphone'){
      await options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(2000);
});
