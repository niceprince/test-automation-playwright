import {test, expect, Locator } from "@playwright/test"

test("XPath Locators tests", async ({page}) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const logoRelativeXPath:Locator = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
  await expect(logoRelativeXPath).toBeVisible();

  const logoAbsoluteXPath:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logoAbsoluteXPath).toBeVisible();

  const logoAbsoluteXPathOpt:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logoAbsoluteXPathOpt).toBeVisible();

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

  await page.waitForTimeout(5000)
})