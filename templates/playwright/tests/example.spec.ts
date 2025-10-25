import { test, expect } from '@playwright/test';

{{#if isNextJS}}
// Example Next.js page test
test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/{{APP_TITLE}}/);
  await expect(page.locator('h1')).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text={{NAVIGATION_LINK}}');
  await expect(page).toHaveURL(/{{NAVIGATION_URL}}/);
});
{{/if}}

{{#if isExpress}}
// Example API test
test('API health check', async ({ request }) => {
  const response = await request.get('/api/health');
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(data.status).toBe('ok');
});

test('API endpoint returns data', async ({ request }) => {
  const response = await request.get('/api/users');
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(Array.isArray(data)).toBe(true);
});
{{/if}}

{{#if isVue}}
// Example Vue app test
test('app loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#app')).toBeVisible();
  await expect(page.locator('h1')).toContainText('{{APP_TITLE}}');
});

test('component interaction', async ({ page }) => {
  await page.goto('/');
  await page.click('button');
  await expect(page.locator('.result')).toBeVisible();
});
{{/if}}

// Example form test
test('form submission', async ({ page }) => {
  await page.goto('/{{FORM_PAGE}}');
  
  await page.fill('input[name="name"]', '{{TEST_NAME}}');
  await page.fill('input[name="email"]', '{{TEST_EMAIL}}');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.success-message')).toBeVisible();
});

// Example authentication test
{{#if includeAuth}}
test('user login flow', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('input[name="email"]', '{{TEST_USER_EMAIL}}');
  await page.fill('input[name="password"]', '{{TEST_PASSWORD}}');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL(/{{DASHBOARD_URL}}/);
  await expect(page.locator('.user-menu')).toBeVisible();
});
{{/if}}