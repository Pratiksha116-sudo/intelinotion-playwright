import { test as setup, expect } from '@playwright/test';

setup('authunticate', async ({ page }) => {

  await page.goto('/');

  // Fill email
  await page.getByPlaceholder('Email, phone, or Skype').fill("QUALITYASSURANCE@intelinotiondev.onmicrosoft.com");
  await page.locator('#idSIButton9').click();
 
  // Wait for password screen
  await expect(page.getByPlaceholder('Password')).toBeVisible();

  // Fill password
  await page.getByPlaceholder('Password').fill("1h3pXCdwixoWeqzR");
  await page.locator('#idSIButton9').click();

  // Stay signed in
  const staySignedInBtn = page.locator('#idSIButton9');

  await expect(staySignedInBtn).toBeVisible();
  await staySignedInBtn.click();

  // wait for page load
  await page.waitForLoadState('domcontentloaded');

  await page.waitForTimeout(7000);

  // login session save
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });

});