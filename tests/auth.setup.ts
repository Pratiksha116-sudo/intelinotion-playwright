import { test as setup, expect } from '@playwright/test';
import dotenv from 'dotenv';

import path from 'path';
//console.log(path.resolve('.env'));

const result = dotenv.config();
/*
console.log('dotenv result:', result);
console.log('EMAIL =', process.env.EMAIL);
console.log('PASSWORD loaded =', !!process.env.PASSWORD);
*/
setup('authenticate', async ({ page }) => {

  await page.goto('/');

  await page
    .getByPlaceholder('Email, phone, or Skype')
    .fill(process.env.EMAIL!);

  await page.locator('#idSIButton9').click();

  await expect(
    page.getByPlaceholder('Password')
  ).toBeVisible();

  await page
    .getByPlaceholder('Password')
    .fill(process.env.PASSWORD!);

  await page.locator('#idSIButton9').click();

  const staySignedInBtn = page.locator('#idSIButton9');

  if (await staySignedInBtn.isVisible().catch(() => false)) {
    await staySignedInBtn.click();
  }

  await page.waitForLoadState('networkidle');

  await page.context().storageState({
    path: 'auth/user.json',
  });

});