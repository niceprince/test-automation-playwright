import { test, Locator, expect} from "@playwright/test";
import FormActions from "../pages/FormActions";

const automateSite = "https://testautomationpractice.blogspot.com/";

test.describe("Handle the form actions", () => {
  let testActions: FormActions;
  test.beforeEach(async ({ page }) => {
    testActions = new FormActions(page);
    await testActions.goto(automateSite);
  })
    
  test("checking the page title", async ({ page }) => {
    await testActions.pageTitle();
  })

  test("Handling input name field", async ({ page }) => {
    await testActions.nameInput();
  })

  test("Radio Button Field Actions", async ({page}) => {
    await testActions.radioButton();
  })

  test("Checkbox Actions Field Actions", async ({page}) => {
    await testActions.checkboxActions();
  })


})