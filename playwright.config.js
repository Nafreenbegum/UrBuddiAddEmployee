// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  workers: 1, // keep safe for your leave tests
  retries: 1,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://dev.urbuddi.com/',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    // Chrome (real Chrome browser)
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // important for real Chrome
      },
    },

    // //  Firefox
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // }
  ],
});