import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InfoModelPage extends BasePage {

   constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.goto('/');
  }

  async clickInfoModels() {
    await this.page.getByText('Info Models').click();
  }

  async expandClinicalShort() {
    await this.page.getByText('Clinical Short').click();
  }

  async expandPY() {
    await this.page.getByText('PY').click();
  }

  async rightClickPY() {
    await this.page.getByText('PY').click({ button: 'right' });
  }

  async selectAddHS() {
    await this.page.getByText('Add Hierarchical Set').click();
  }
}