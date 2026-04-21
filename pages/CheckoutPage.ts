import {Page } from '@playwright/test';

export class CheckoutPage{

  constructor(private page: Page){};

  firstname = this.page.locator('#first-name');
  lastname = this.page.locator('#last-name');
  postcode = this.page.locator('#postal-code');
  continueBtn = this.page.locator('#continue');
  finishBtn = this.page.locator('#finish');
  successMsg = this.page.locator('.complete-header');

  async fillDetails(fname: string, lname: string, zip: string){
    await this.firstname.fill(fname);
    await this.lastname.fill(lname);
    await this.postcode.fill(zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }
}