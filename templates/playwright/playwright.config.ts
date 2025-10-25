import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like \`await page.goto('/')\`. */
    baseURL: '{{BASE_URL}}',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: '{{TRACE_CONFIG}}',
    
    /* Take screenshot on failure */
    screenshot: '{{SCREENSHOT_CONFIG}}',
    
    /* Record video */
    video: '{{VIDEO_CONFIG}}',
  },

  /* Configure projects for major browsers */
  projects: [
    {{#if includeChromium}}
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {{/if}}

    {{#if includeFirefox}}
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {{/if}}

    {{#if includeWebkit}}
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {{/if}}

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
  webServer: {
    command: '{{DEV_SERVER_COMMAND}}',
    url: '{{BASE_URL}}',
    reuseExistingServer: !process.env.CI,
  },
});