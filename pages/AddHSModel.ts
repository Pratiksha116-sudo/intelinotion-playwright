import { Page, expect } from '@playwright/test';

export class AddHSModel {

    constructor(private page: Page) {}

    async verifyModalVisible() {
        await expect(this.page.getByTitle('Add Hierarchical Set')).toBeVisible();
    }

    async fillName(name: string) {
        await this.page.getByLabel('Name:').fill(name);
    }

    async selectComponentType(type: string) {

        await this.page
            .getByPlaceholder('Select Default Component Type')
            .fill(type);

        await this.page.getByText(type).click();
    }

    async clickSave() {
        await this.page.getByRole('button', {
            name: 'Save'
        }).click();
    }

    async verifyToastermsg() {
        await expect (this.page.getByText("added successfully")).toBeVisible();
    }
}