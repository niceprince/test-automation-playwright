import {test, expect, Locator } from "@playwright/test"

test("XPath Locators tests", async ({page}) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // xPath 
  const logoRelativeXPath:Locator = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
  await expect(logoRelativeXPath).toBeVisible();

  // xpath
  const logoAbsoluteXPath:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logoAbsoluteXPath).toBeVisible();

  // xpath 
  const logoAbsoluteXPathOpt:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logoAbsoluteXPathOpt).toBeVisible();

  // css selector
  const logoAbsoluteXPathOptCss:Locator = page.locator("div.header .header-logo a img");
  await expect(logoAbsoluteXPathOptCss).toBeVisible();


  const productsXpath:Locator = page.locator("//h2/a[contains(@href, 'computer')]");

  const productCount = await productsXpath.count();
  await expect(productCount).toBeGreaterThan(0);

  console.log("This is product item :>>>>: ", await productsXpath.first().textContent());
  console.log("This is product item :>>>>: ", await productsXpath.last().textContent());
  console.log("This is product item :>>>>: ", await productsXpath.nth(2).textContent())

  let productTitles:string[] = await productsXpath.allTextContents();

  console.log("All computer related product titles", productTitles)
  for(let pt of productTitles){
    console.log("product Titles >>>>> ", pt)
  }


  // start-with 
  const productStartWith = await page.locator("//h2/a[starts-with(@href, '/build')]");

  const count: number = await productStartWith.count();
  expect(count).toBeGreaterThan(0);

  let productTitlesBuild:string[] = await productStartWith.allTextContents();
  console.log("Printing start with build text contents", productTitlesBuild);


  // text and . function
  const registerEleCheck:Locator = await page.locator("//a[text()='Register']");
  await expect(registerEleCheck).toBeVisible();

  // last() xPath
  const footerFlollowLast:Locator = await page.locator("//div[@class='column follow-us']//li[last()]");
  await expect(footerFlollowLast).toBeVisible();
  console.log("last content content text is... ", await footerFlollowLast.textContent());

  // position
  const footerFollowPosition:Locator = await page.locator("//div[@class='column follow-us']//li[position()=3]");
  await expect(footerFollowPosition).toBeVisible();
  console.log("last content content text is... ", await footerFollowPosition.textContent());

  await page.waitForTimeout(5000)
})