import { test, expect, Locator } from "@playwright/test";

test("compare the test methods", async ({page}) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products:Locator = page.locator('.product-title');

  // console.log(await products.nth(1).innerText());
  // console.log(await products.nth(1).textContent());

  const count:Number = await products.count();

  // for(let i = 0; i < count; i++) {
    
  //   const productName:String = await products.nth(i).innerText();
  //   console.log(productName)
  //   const productNamet:string | null = await products.nth(i).textContent();
  //   console.log(productNamet?.trim())
  // }

  // const productData:string[] = await products.allInnerTexts();
  // console.log(productData) 
  // const productData:string[] = await products.allTextContents();
  // const trimedPro = productData.map((itm) => itm.trim())
  // console.log(trimedPro) 

  const productsLocators:Locator[] = await products.all();
  console.log(productsLocators)
  console.log(await productsLocators[1].innerText());

  for(let prod of productsLocators){
    console.log(await prod.innerText())
  }

  await page.waitForTimeout(3000);
});
