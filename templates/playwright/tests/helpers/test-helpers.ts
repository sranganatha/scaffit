// Test helper utilities
// Reusable functions for common test operations

import { Page, expect } from '@playwright/test';

export class TestHelpers {
  constructor(private page: Page) {}
  
  // Screenshot utilities
  async takeScreenshot(name: string) {
    await this.page.screenshot({ 
      path: `test-results/screenshots/${name}-${Date.now()}.png`,
      fullPage: true 
    });
  }
  
  // Wait utilities
  async waitForElement(selector: string, timeout: number = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }
  
  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }
  
  // Form utilities
  async fillForm(formData: Record<string, string>) {
    for (const [field, value] of Object.entries(formData)) {
      await this.page.fill(`[name="${field}"]`, value);
    }
  }
  
  async submitForm(formSelector: string = 'form') {
    await this.page.click(`${formSelector} button[type="submit"]`);
  }
  
  // Navigation utilities
  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.waitForNetworkIdle();
  }
  
  async clickAndWaitForNavigation(selector: string) {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click(selector)
    ]);
  }
  
  // Assertion utilities
  async assertElementVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }
  
  async assertElementText(selector: string, expectedText: string) {
    await expect(this.page.locator(selector)).toContainText(expectedText);
  }
  
  async assertUrlContains(expectedUrl: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedUrl));
  }
  
  // Authentication utilities
  async login(email: string, password: string) {
    await this.navigateTo('/login');
    await this.fillForm({ email, password });
    await this.submitForm();
    await this.assertUrlContains('/dashboard');
  }
  
  async logout() {
    await this.page.click('[data-testid="user-menu"]');
    await this.page.click('[data-testid="logout"]');
    await this.assertUrlContains('/login');
  }
  
  // Data utilities
  generateTestData() {
    return {
      email: `test-${Date.now()}@example.com`,
      name: `Test User ${Date.now()}`,
      password: 'TestPassword123!',
    };
  }
  
  // Cleanup utilities
  async clearStorage() {
    await this.page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }
  
  // Debug utilities
  async debugPage() {
    console.log('Current URL:', this.page.url());
    console.log('Page title:', await this.page.title());
    await this.takeScreenshot('debug');
  }
}