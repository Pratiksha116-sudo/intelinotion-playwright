import { test, expect }from '../fixtures/pageFixture';
import fs from 'fs';
import { generateHSName }from '../utils/commonUtils';

test('Add Hierarchical Set',async ({
   infoModelPage,
   addHSModelPage}) => {

   const hsName = generateHSName();

   await infoModelPage.open();

   await infoModelPage.clickInfoModels();

   await infoModelPage.expandClinicalShort();

   await infoModelPage.expandPY();

   await infoModelPage.rightClickPY();

   await infoModelPage.selectAddHS();

   await addHSModelPage.verifyModalVisible();

   await addHSModelPage.fillName(hsName);

   await addHSModelPage.selectComponentType(
      'Marketing Component'
   );

   await addHSModelPage.clickSave();

   //save hs name to a text file for future use
   fs.writeFileSync('test-data/hsName.txt', hsName);

   await addHSModelPage.verifyToastermsg();

   await addHSModelPage.verifyHScreated(hsName);

});