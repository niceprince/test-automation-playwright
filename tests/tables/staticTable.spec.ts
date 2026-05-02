import { test, expect, Locator } from "@playwright/test";

test("Static web table", async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  const table:Locator = page.locator("table[name='BookTable'] tbody");
  await expect(table).toBeVisible();

  const rows:Locator = page.locator("table[name='BookTable'] tbody tr");
  await expect(rows).toHaveCount(7);

  const rowCount:number = await rows.count()
  console.log("number of rows in a table: ", rowCount);
  expect(rowCount).toBe(7);

  const columns:Locator = page.locator("table[name='BookTable'] tbody tr th");
  await expect(columns).toHaveCount(4)

  const columnCount:number = await columns.count();
  console.log("Number of columns/Header ", columnCount);
  expect(columnCount).toBe(4);

  
  const secondRowCells:Locator = await rows.nth(2).locator('td');
  const secondRowTexts:string[] = await secondRowCells.allInnerTexts();

  console.log("2nd Row data: ", secondRowTexts);

  await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

  for(const txt of secondRowTexts){
    console.log(txt)
  }

  const allRowData:Locator[] = await rows.all();
  console.log(allRowData);
  const mukeshBooks:string[] = [];

  for(const aRd of allRowData.slice(1)) {
    const cells = await aRd.locator('td').allInnerTexts();
    const author = cells[1];
    const book = cells[0];

    if(author === "Mukesh"){
      console.log(`${author} \t ${book}`);
      mukeshBooks.push(book);
    }
  }

  expect(mukeshBooks).toHaveLength(2);


  // calculate the price 
  let totalPrice:number = 0;
  for(const row of allRowData.slice(1)){
    const cells = await row.locator('td').allInnerTexts();
    const price = cells[3];
    totalPrice = (totalPrice + parseInt(price));
  }

  console.log("Total Price", totalPrice);
  expect(totalPrice).toBe(7100);
}) 