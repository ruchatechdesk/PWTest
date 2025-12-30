import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';

require('dotenv').config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 55000,
  globalTimeout: 150000,
  /* Run tests in files in parallel */
  // fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'http://localhost:4200/pages/iot-dashboard',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    navigationTimeout: 55000,
    video:'on'
    // globalSetup : require.resolve('./globalSetup.ts')
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      fullyParallel: true
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'mobile',
    //   testMatch: 'testmobile.spec.ts',
    //   use: 
    //   { 
    //     ...devices['iPhone 15 Pro Max'] 
    //   }
    // },

    

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  //  webServer: {
  //   //  command: 'npm run start',
  //   //  port: 4200,
  //   //  url: 'http://localhost:4200/pages/iot-dashboard'
  //   //  reuseExistingServer: !process.env.CI,
  //   command: 'cmd /c echo STARTING VIA PLAYWRIGHT && npm start',
  //   cwd: 'D:/PlaywrightProjects/pw-practice-app', 
  //   port: 4200,
  //   reuseExistingServer: true,
  //   timeout: 150 * 1000,
  //  },

  //  use: {
  //   baseURL: 'http://localhost:4200/pages/iot-dashboard',
  //  },


});
