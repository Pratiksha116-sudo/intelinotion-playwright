# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DDTlogin.spec.ts >> login data driven test >> Verify login QUALITY ASSURANCE 
- Location: tests\DDTlogin.spec.ts:14:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox')
    - waiting for" https://internalqa.intelinotion.com/app/console/" navigation to finish...
    - navigated to "https://internalqa.intelinotion.com/app/console/"

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import fs from "fs";
  3  | 
  4  | // reading data from json
  5  | const jsonPath = "testdata/logindata.json";
  6  | 
  7  | const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  8  | 
  9  | test.describe("login data driven test", () => {
  10 |   test.setTimeout(900000);
  11 | 
  12 |   for (const {email, password, userName} of loginData) {
  13 | 
  14 | test(`Verify login ${userName}`, async ({ page }) => {
  15 | 
  16 |   await page.goto('https://internalqa.intelinotion.com/');
  17 | 
  18 |   // Fill email
> 19 |   await page.getByRole('textbox').fill(email);
     |                                   ^ Error: locator.fill: Target page, context or browser has been closed
  20 |   await page.locator('#idSIButton9').click();
  21 | 
  22 |   // Wait for password screen
  23 |   await expect(page.getByPlaceholder('Password')).toBeVisible();
  24 | 
  25 |   // Fill password
  26 |   await page.getByPlaceholder('Password').fill(password);
  27 |   await page.locator('#idSIButton9').click();
  28 | 
  29 |   // Stay signed in
  30 |   const staySignedInBtn = page.locator('#idSIButton9');
  31 |   await expect(staySignedInBtn).toBeVisible();
  32 |   await staySignedInBtn.click();
  33 | 
  34 |  //wait for page load
  35 |   await page.waitForLoadState('domcontentloaded');
  36 | 
  37 |   // Verify user settings after navigation
  38 |   const userSettings = page.locator("//i[@class='nav-link-icons fa-regular fa-user']");
  39 |   await expect(userSettings).toBeVisible({ timeout: 70000 });
  40 |   await userSettings.hover();
  41 | 
  42 |   // Validate logged-in user
  43 |   const text = await page.locator("[class='currentUser-icon']").textContent();
  44 |   console.log(text);
  45 |   expect(text).toContain(userName);
  46 |   })
  47 |  }
  48 | });
  49 | 
```