import { test, expect, Locator } from "@playwright/test";

test("Open source orange hrm live login flow", async ({page}) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Login steps
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL(/dashboard/);

  await page.locator("li.oxd-main-menu-item-wrapper > a.oxd-main-menu-item").getByText("PIM").click();
  //console.log(pimLink.getByText());
  // const pimLink = page.getByText("PIM").click();

  await page.locator("form i").nth(2).click();

  const options = await page.locator("div[role='listbox'] span");

  await expect(options.first()).toBeVisible();

  const count:Number = await options.count();
  console.log("Dropdown items number count", await count);
  
  for(let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if(text === ("Automaton Tester" || "Automation Tester")){
      await options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(2000);
})
