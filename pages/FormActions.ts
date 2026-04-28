import {expect, Page, Locator} from "@playwright/test";

const automateSiteUrl = "https://testautomationpractice.blogspot.com/";

class FormActions {
  constructor(public page: Page){}

  async goto(url:string){
    await this.page.goto(url);
  }

  async pageTitle() {
    await expect(this.page).toHaveTitle(/Automation Testing Practice/)
  }

  async nameInput() {
    const nameTextBox:Locator = this.page.locator("#name");
    await expect(nameTextBox).toBeVisible();
    await expect(nameTextBox).toBeEnabled();

    const maxLength: string | null = await nameTextBox.getAttribute('maxlength');
    expect(maxLength).toBe('15');
    await nameTextBox.fill('John Doe');

    const inputVal:string = await nameTextBox.inputValue();
    console.log("Some thing return as name >> ", await nameTextBox.textContent());
    console.log("Some thing return as name >> ", inputVal);

    expect(inputVal).toBe('John Doe');

    await this.page.waitForTimeout(4000);
  }

  async radioButton() {
    const maleRadio = await this.page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();
  }

  async checkboxActions() {
    const sundayCheckbox = await this.page.getByLabel('Sunday');
    // await sundayCheckbox.check();
    // await expect(sundayCheckbox).toBeChecked();

    const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes = days.map(day => this.page.getByLabel(day));

    for(const checkbox of checkboxes){
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }

    for(const checkbox of checkboxes.slice(-3)){
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    }

    for(const checkbox of checkboxes){
      if(await checkbox.isChecked()){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
      }else {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
      }
    }

    const indexes:number = [1, 3, 5];
    for(const i of indexes){
      await checkboxes[i].check();
      await expect(checkboxes[i]).toBeChecked();
    }

    const weekname:string = "Friday";

    for(const label of days){
      if(label.toLowerCase() === weekname.toLowerCase()){
        const checkbox:locator = this.page.getByLabel(label)
        await checkbox.check();
        await expect(checkbox).toBeChecked();
      }
    }

    await this.page.waitForTimeout(10000);
    
  }
}

export default FormActions;