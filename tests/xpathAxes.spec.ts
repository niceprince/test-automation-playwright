import {test, expect, Locator } from "@playwright/test";

const automateSite = "https://www.w3schools.com/html/html_tables.asp";

test("xPath Axes examples with use cases", async ({page}) => {
  await page.goto(automateSite);

  // self
  const tdElement = page.locator("//td[text()='Germany']/self::td");
  expect(tdElement).toHaveText("Germany");

  // parent
  const parentEle: Locator = await page.locator("//td[text()='Mexico']/parent::tr");
  await expect(parentEle).toContainText("Francisco Chang");
  await expect(parentEle).toContainText("Centro comercial Moctezuma	Francisco Chang	Mexico");
  // console.log("checking element = ", parentEle);
  // console.log("checking element = ", await parentEle.textContent());

  //Child => Targeting the child element of the table through child index to childs
  const parentTable: Locator = await page.locator("//table[@id='customers']//tr[3]/child::td");
  console.log("checking element = ", await parentTable.allTextContents());
  await expect(parentTable).toHaveCount(3); //Ernst Handel	Roland Mendel	Austria

  const parentContents = await parentTable.allTextContents();
  
  for(let item in parentContents) {
    console.log('text content of td item ---', await parentTable.nth(item).textContent())
  }

  // Ancestors check
  const ancestorsEle: Locator = await page.locator("//td[text()='Germany']/ancestor::table");
  await expect(ancestorsEle).toHaveAttribute('id', 'customers');

  // descendent children text
  const descendantEle:Locator = await page.locator("//table[@id='customers']/descendant::td");
  await expect(descendantEle).toHaveCount(18);

  // following and sibligs
  const following = await page.locator("//td[normalize-space()='Germany']/following::td[1]");
  await expect(following).toHaveText("Centro comercial Moctezuma");

  const followSibs = await page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td[1]");
  await expect(followSibs).toHaveText("Germany");

  const followingSiblings = await page.locator("//td[normalize-space()='Germany']/following-sibling::td");
  await expect(followingSiblings).toHaveCount(0);

  const followingSibling = await page.locator("//td[normalize-space()='Francisco Chang']/following-sibling::td");
  await expect(followingSibling).toHaveCount(1);

  // Preceding elements
  const precedingEle:Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
  await expect(precedingEle).toHaveText("Maria Anders");

  // Preceding siblings

  const preSiblings:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
  await expect(preSiblings).toHaveCount(2);

  await expect(preSiblings.first()).toHaveText('Alfreds Futterkiste');
  await expect(preSiblings.last()).toHaveText('Maria Anders');


})