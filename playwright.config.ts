import { defineConfig, devices } from '@playwright/test';
import process from 'process';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,
  workers: 1,

  expect: {
    timeout: 100000
  },

  forbidOnly: !!process.env.CI,

  //retries: 2,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: "https://internalqa.intelinotion.com",
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [

    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'auth/user.json'
      },
      dependencies: ['setup']
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
*/
  ]
});