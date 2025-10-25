// Test fixtures for reusable test data and utilities

export const testData = {
  users: {
    validUser: {
      name: '{{TEST_USER_NAME}}',
      email: '{{TEST_USER_EMAIL}}',
      password: '{{TEST_PASSWORD}}',
    },
    adminUser: {
      name: '{{ADMIN_USER_NAME}}',
      email: '{{ADMIN_USER_EMAIL}}',
      password: '{{ADMIN_PASSWORD}}',
      role: 'admin',
    },
  },
  
  api: {
    baseUrl: '{{API_BASE_URL}}',
    endpoints: {
      login: '/api/auth/login',
      register: '/api/auth/register',
      users: '/api/users',
      health: '/api/health',
    },
  },
  
  pages: {
    login: '/login',
    register: '/register',
    dashboard: '/dashboard',
    profile: '/profile',
  },
  
  selectors: {
    loginForm: {
      email: 'input[name="email"]',
      password: 'input[name="password"]',
      submit: 'button[type="submit"]',
    },
    navigation: {
      menu: '.nav-menu',
      userMenu: '.user-menu',
      logout: 'button[data-testid="logout"]',
    },
  },
};

// Utility functions for tests
export const testUtils = {
  async loginUser(page: any, email: string, password: string) {
    await page.goto(testData.pages.login);
    await page.fill(testData.selectors.loginForm.email, email);
    await page.fill(testData.selectors.loginForm.password, password);
    await page.click(testData.selectors.loginForm.submit);
    await page.waitForURL(/{{DASHBOARD_URL}}/);
  },
  
  async createTestUser(userData: any) {
    // Implementation for creating test user
    console.log('Creating test user:', userData.email);
  },
  
  async cleanupTestUser(email: string) {
    // Implementation for cleaning up test user
    console.log('Cleaning up test user:', email);
  },
  
  generateRandomEmail() {
    return `test-${Date.now()}@example.com`;
  },
  
  generateRandomString(length: number = 10) {
    return Math.random().toString(36).substring(2, length + 2);
  },
};