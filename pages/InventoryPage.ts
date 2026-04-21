import { Page } from '@playwright/test';

export class InventoryPage{
  constructor(private page: Page){}

  addToBtn = '#add-to-cart-sauce-labs-backpack';
  spLink = '.shopping_cart_link';

  addBackPack = this.page.locator(this.addToBtn);
  cartIcon = this.page.locator(this.spLink);

  async addItemToCart(){
    await this.addBackPack.click();
  }

  async gotoCart() {
    await this.cartIcon.click();
  }
}