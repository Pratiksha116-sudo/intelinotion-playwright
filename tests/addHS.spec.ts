import { test, expect }from '../fixtures/pageFixture';

import { generateHSName }from '../utils/commonUtils';

test('Add Hierarchical Set',async ({
   infoModelPage,
   addHSModel}) => {

   const hsName = generateHSName();

   await infoModelPage.open();

   await infoModelPage.clickInfoModels();

   await infoModelPage.expandClinicalShort();

   await infoModelPage.expandPY();

   await infoModelPage.rightClickPY();

   await infoModelPage.selectAddHS();

   await addHSModel.verifyModalVisible();

   await addHSModel.fillName(hsName);

   await addHSModel.selectComponentType(
      'Marketing Component'
   );

   await addHSModel.clickSave();

   await addHSModel.verifyToastermsg();
});