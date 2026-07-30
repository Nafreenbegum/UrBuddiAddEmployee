import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test Folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Retry failed tests
  retries: 1,

  // Number of workers
  workers: 1,

  // Reporters
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {

    // Application URL
    baseURL: 'https://dev.urbuddi.com/',

    // Run browser in headed mode
    headless: false,

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Trace on failure
    trace: 'retain-on-failure',

    // Video on failure
    video: 'retain-on-failure',

    // Action timeout
    actionTimeout: 15000,

    // Navigation timeout
    navigationTimeout: 30000

  },

  projects: [

    {
      name: 'chrome',

      use: {

        ...devices['Desktop Chrome'],

        channel: 'chrome'

      }

    }

    // Uncomment if you want Firefox

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // }

  ]

});