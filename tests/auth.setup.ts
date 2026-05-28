import { test as setup, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const authDir = 'auth';
const authFile = path.join(authDir, 'user.json');

setup('authenticate', async ({ page }) => {

  // create auth folder if missing
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  await page.goto('/');

  await page
    .getByPlaceholder('Email, phone, or Skype')
    .fill('QUALITYASSURANCE@intelinotiondev.onmicrosoft.com');

  await page.locator('#idSIButton9').click();

  await expect(
    page.getByPlaceholder('Password')
  ).toBeVisible();

  await page
    .getByPlaceholder('Password')
    .fill('1h3pXCdwixoWeqzR');

  await page.locator('#idSIButton9').click();

  const staySignedInBtn = page.locator('#idSIButton9');

  await expect(staySignedInBtn).toBeVisible();

  await staySignedInBtn.click();

  // wait until fully logged in
  await page.waitForLoadState('networkidle');

  // save auth state
  await page.context().storageState({
    path: authFile,
  });

});