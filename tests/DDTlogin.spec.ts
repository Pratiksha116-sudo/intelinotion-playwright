import { test, expect, Locator } from '@playwright/test';
import fs from "fs";

// reading data from json
const jsonPath = "testdata/logindata.json";

const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

test.describe("login data driven test", () => {
  test.setTimeout(900000);

  for (const {email, password, userName} of loginData) {

test(`Verify login ${userName}`, async ({ page }) => {

  await page.goto('https://internalqa.intelinotion.com/');

  // Fill email
  await page.getByRole('textbox').fill(email);
  await page.locator('#idSIButton9').click();

  // Wait for password screen
  await expect(page.getByPlaceholder('Password')).toBeVisible();

  // Fill password
  await page.getByPlaceholder('Password').fill(password);
  await page.locator('#idSIButton9').click();

  // Stay signed in
  const staySignedInBtn = page.locator('#idSIButton9');
  await expect(staySignedInBtn).toBeVisible();
  await staySignedInBtn.click();

 //wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Verify user settings after navigation
  const userSettings = page.locator("//i[@class='nav-link-icons fa-regular fa-user']");
  await expect(userSettings).toBeVisible({ timeout: 70000 });
  await userSettings.hover();

  // Validate logged-in user
  const text = await page.locator("[class='currentUser-icon']").textContent();
  console.log(text);
  expect(text).toContain(userName);
  })
 }
});
