import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Number of workers
  workers: 1,

  // Retry failed tests
  retries: 1,

  // Reporters
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  // Common settings
  use: {

    // Base URL
    baseURL: 'https://dev.urbuddi.com/',

    // Browser Mode
    headless: false,

    // Capture screenshot only on failure
    screenshot: 'only-on-failure',

    // Save trace on failure
    trace: 'retain-on-failure',

    // Save video on failure
    video: 'retain-on-failure',

    // Maximum action timeout
    actionTimeout: 15000,

    // Maximum navigation timeout
    navigationTimeout: 30000

  },

  // Browser Configuration
  projects: [

    {
      name: 'chrome',

      use: {

        ...devices['Desktop Chrome'],

        channel: 'chrome'

      }

    }

    // Uncomment if required

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // }

  ]

});