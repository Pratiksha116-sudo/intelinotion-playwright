import { test, expect }from '../fixtures/pageFixture';
import { generateHSName }from '../utils/commonUtils';
import fs from 'fs';


const elementNames = ['De novo', 'Metadata Sourced variable', 'Varibles', 'Componnet set'];

elementNames.forEach((elementName) => {
    test(`Add Placeholder - ${elementName}`, async ({
        infoModelPage,
        addHSModelPage,
        addPlaceholderPage
    }) => {
   const hsName = fs.readFileSync(
  'test-data/hsName.txt',
  'utf-8'
);

   await infoModelPage.open();

   await infoModelPage.clickInfoModels();

   await infoModelPage.expandClinicalShort();

   await infoModelPage.expandPY();

   await addPlaceholderPage.rightClickHS(hsName);

   await addPlaceholderPage.verifyAddElementForm();

   await addPlaceholderPage.fillElementName(elementNames[0]);

   await addPlaceholderPage.fillAlias(elementNames[0]);

   await addPlaceholderPage.clickSave();

   await addPlaceholderPage.verifyToastermsg();

})});