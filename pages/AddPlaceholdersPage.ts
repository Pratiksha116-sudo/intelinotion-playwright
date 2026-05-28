import {Page, expect} from "@playwright/test";

export class AddPlaceholder {


    constructor (private page:Page) {}

    async rightClickHS(hsName: string) {
        await this.page.getByText(hsName).click({ button: 'right' });
    }

    async selectAddHS() {
        await this.page.getByText('Add Element').click();
    }
    
    async verifyAddElementForm(){
        await expect(this.page.getByRole('heading', { name: 'Add Element' })).toBeVisible();
    }
    
    async fillElementName(elementName: string) {
        await this.page.getByPlaceholder('Enter Name').fill(elementName);
    }

    async fillAlias(elementName: string) {
        await this.page.getByLabel('Alias:').fill(elementName);
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