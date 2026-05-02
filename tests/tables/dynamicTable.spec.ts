import { test, expect, Locator } from "@playwright/test";

test("Dynamic web table", async ({page}) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');

  const table: Locator = page.locator("table.table tbody");

  const rows:Locator = await table.locator("tr").all();
  console.log("Number of rows in a table", rows.length)
  expect(rows).toHaveLength(4);

  // Step 1: For chrome process get value  of CPU load.
  // Reach each row o check Chrome presence
  let cpuLoad = ""
  for(const row of rows){
    const processName:string = await row.locator('td').nth(0).innerText();
    if(processName === "Chrome"){
      // cpuLoad = await row.locator("td:has-text('%')").innerText();
      cpuLoad = await row.locator("td", {hasText: '%'}).innerText();
      console.log("CPU load of Chrome", cpuLoad)
      break;
    }
  }
  const chromeCpu:Locator = await page.locator("#chrome-cpu")
  const chromeCpuValue = await chromeCpu.innerText();

  expect(chromeCpu).toContainText(cpuLoad);


  await page.waitForTimeout(4000);
})