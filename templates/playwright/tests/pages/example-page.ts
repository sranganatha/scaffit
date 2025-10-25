// Page Object Model for {{PAGE_NAME}}
// Encapsulates page-specific logic and selectors

import { Page, Locator } from '@playwright/test';

export class {{PAGE_CLASS_NAME}} {
  readonly page: Page;
  
  // Page elements
  readonly {{ELEMENT_NAME}}: Locator;
  readonly {{BUTTON_NAME}}: Locator;
  readonly {{FORM_NAME}}: Locator;
  
  constructor(page: Page) {
    this.page = page;
    
    // Initialize locators
    this.{{ELEMENT_NAME}} = page.locator('{{ELEMENT_SELECTOR}}');
    this.{{BUTTON_NAME}} = page.locator('{{BUTTON_SELECTOR}}');
    this.{{FORM_NAME}} = page.locator('{{FORM_SELECTOR}}');
  }
  
  // Navigation methods
  async goto() {
    await this.page.goto('{{PAGE_URL}}');
  }
  
  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }
  
  // Action methods
  async click{{BUTTON_NAME}}() {
    await this.{{BUTTON_NAME}}.click();
  }
  
  async fill{{FORM_NAME}}(data: { {{FORM_FIELDS}} }) {
    {{#each FORM_FIELDS}}
    await this.page.fill('{{FIELD_SELECTOR}}', data.{{FIELD_NAME}});
    {{/each}}
  }
  
  async submit{{FORM_NAME}}() {
    await this.{{FORM_NAME}}.locator('button[type="submit"]').click();
  }
  
  // Verification methods
  async isLoaded() {
    return await this.{{ELEMENT_NAME}}.isVisible();
  }
  
  async get{{ELEMENT_NAME}}Text() {
    return await this.{{ELEMENT_NAME}}.textContent();
  }
  
  async has{{SUCCESS_MESSAGE}}() {
    return await this.page.locator('{{SUCCESS_SELECTOR}}').isVisible();
  }
  
  async has{{ERROR_MESSAGE}}() {
    return await this.page.locator('{{ERROR_SELECTOR}}').isVisible();
  }
  
  // Complex interactions
  async perform{{COMPLEX_ACTION}}() {
    await this.goto();
    await this.waitForLoad();
    await this.click{{BUTTON_NAME}}();
    await this.page.waitForTimeout({{WAIT_TIME}});
  }
}