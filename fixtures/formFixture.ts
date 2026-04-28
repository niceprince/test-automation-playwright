import { test as base } from "@playwright/test";
import FormActions from "../pages/FormActions";

type Fixtures = {
  formActions: FormActions;
};

export const test = base.extend<Fixtures>({
  formActions: async ({ page }, use) => {
    const formActions = new FormActions(page);
    await formActions.goto("https://testautomationpractice.blogspot.com/");
    await use(formActions);
  },
});