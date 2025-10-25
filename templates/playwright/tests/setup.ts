// Test setup file
// This file runs before each test file

import { test as base } from '@playwright/test';

{{#if includeFixtures}}
// Custom fixtures
export const test = base.extend({
  // Custom page fixture with authentication
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Perform authentication
    await page.goto('/login');
    await page.fill('input[name="email"]', '{{TEST_USER_EMAIL}}');
    await page.fill('input[name="password"]', '{{TEST_PASSWORD}}');
    await page.click('button[type="submit"]');
    
    await use(page);
    await context.close();
  },
  
  // API context fixture
  apiContext: async ({ request }, use) => {
    // Set up API authentication headers
    const headers = {
      'Authorization': 'Bearer {{API_TOKEN}}',
      'Content-Type': 'application/json',
    };
    
    await use({ ...request, headers });
  },
});
{{/if}}

{{#if includeGlobalSetup}}
// Global setup (runs once before all tests)
export async function globalSetup() {
  // Setup database, create test data, etc.
  console.log('Setting up test environment...');
  
  // Example: Create test user
  // await createTestUser('{{TEST_USER_EMAIL}}', '{{TEST_PASSWORD}}');
}

// Global teardown (runs once after all tests)
export async function globalTeardown() {
  // Cleanup database, remove test data, etc.
  console.log('Cleaning up test environment...');
  
  // Example: Remove test user
  // await removeTestUser('{{TEST_USER_EMAIL}}');
}
{{/if}}

// Test timeout configuration
test.setTimeout({{TEST_TIMEOUT}});

// Before each test
test.beforeEach(async ({ page }) => {
  // Common setup for each test
  console.log('Starting test...');
});

// After each test
test.afterEach(async ({ page }) => {
  // Common cleanup for each test
  console.log('Test completed');
});