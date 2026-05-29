import { test as base, Page } from '@playwright/test';

import { InfoModelPage } from '../pages/InfoModelPage';
import { AddHSModelPage } from '../pages/AddHSModelPage';
import { AddPlaceholder } from '../pages/AddPlaceholdersPage';

type PageFixtures = {

  infoModelPage: InfoModelPage;
  addHSModelPage: AddHSModelPage;
  addPlaceholderPage: AddPlaceholder;
};

export const test = base.extend<PageFixtures>({

  infoModelPage: async ({ page }: { page: Page }, use: (value: InfoModelPage) => Promise<void>) => {

    await use(new InfoModelPage(page));
  },

  addHSModelPage: async ({ page }: { page: Page }, use: (value: AddHSModelPage) => Promise<void>) => {

    await use(new AddHSModelPage(page));
  },

  addPlaceholderPage: async ({ page }: { page: Page }, use: (value: AddPlaceholder) => Promise<void>) => {
    await use(new AddPlaceholder(page));
  }
});

export { expect } from '@playwright/test';