import { Page, Locator} from '@playwright/test';

export class BasePage {

   constructor(protected page: Page) {}

   async click(locator: { click: () => any; }) {
      await locator.click();
   }

   async fill(locator: string[], value: string) {
      locator.fill(value);
   }
}