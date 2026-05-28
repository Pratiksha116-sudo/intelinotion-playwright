# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addPlaceholders.spec.ts >> Add Placeholder - Componnet set
- Location: tests\addPlaceholders.spec.ts:7:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Info Models')
    - waiting for" https://internalqa.intelinotion.com/app/console/" navigation to finish...
    - navigated to "https://internalqa.intelinotion.com/app/console/"

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class InfoModelPage extends BasePage {
  5  | 
  6  |    constructor(page: Page) {
  7  |     super(page);
  8  |   }
  9  | 
  10 |   async open() {
  11 |     await this.page.goto('/');
  12 |   }
  13 | 
  14 |   async clickInfoModels() {
> 15 |     await this.page.getByText('Info Models').click();
     |                                              ^ Error: locator.click: Target page, context or browser has been closed
  16 |   }
  17 | 
  18 |   async expandClinicalShort() {
  19 |     await this.page.getByText('Clinical Short').click();
  20 |   }
  21 | 
  22 |   async expandPY() {
  23 |     await this.page.getByText('PY').click();
  24 |   }
  25 | 
  26 |   async rightClickPY() {
  27 |     await this.page.getByText('PY').click({ button: 'right' });
  28 |   }
  29 | 
  30 |   async selectAddHS() {
  31 |     await this.page.getByText('Add Hierarchical Set').click();
  32 |   }
  33 | }
```