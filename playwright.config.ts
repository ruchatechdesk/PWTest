import { defineConfig, devices } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";
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
  //reporter: 'html',
  
    reporter: [
    // Use "dot" reporter on CI, "list" otherwise (Playwright default).
    process.env.CI ? ["dot"] : ["list"],
    // Add Argos reporter.
    [
      "@argos-ci/playwright/reporter",
      {
        // Upload to Argos on CI only.
        uploadToArgos: !!process.env.CI,

        // Set your Argos token (required if not using GitHub Actions).
        // token: "<YOUR-ARGOS-TOKEN>",
      },
    ]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'http://localhost:4200/pages/iot-dashboard',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    navigationTimeout: 55000,
    video:'on',
    screenshot: "only-on-failure",
    // globalSetup : require.resolve('./globalSetup.ts')
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      fullyParallel: true
    },

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
