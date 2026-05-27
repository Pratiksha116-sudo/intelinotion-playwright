import { test as base } from '@playwright/test';

import { InfoModelPage } from '../pages/InfoModelPage';
import { AddHSModel } from '../pages/AddHSModel';

type PageFixtures = {

  infoModelPage: InfoModelPage;
  addHSModel: AddHSModel;
};

export const test = base.extend<PageFixtures>({

  infoModelPage: async ({ page }, use) => {

    await use(new InfoModelPage(page));
  },

  addHSModel: async ({ page }, use) => {

    await use(new AddHSModel(page));
  }
});

export { expect } from '@playwright/test';