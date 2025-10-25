// Test data management
// Centralized test data for consistent testing

export const testData = {
  // User data
  users: {
    admin: {
      id: '{{ADMIN_USER_ID}}',
      email: '{{ADMIN_EMAIL}}',
      password: '{{ADMIN_PASSWORD}}',
      name: '{{ADMIN_NAME}}',
      role: 'admin',
    },
    regular: {
      id: '{{REGULAR_USER_ID}}',
      email: '{{REGULAR_EMAIL}}',
      password: '{{REGULAR_PASSWORD}}',
      name: '{{REGULAR_NAME}}',
      role: 'user',
    },
    test: {
      id: '{{TEST_USER_ID}}',
      email: 'test@example.com',
      password: 'TestPassword123!',
      name: 'Test User',
      role: 'user',
    },
  },
  
  // API data
  api: {
    baseUrl: '{{API_BASE_URL}}',
    timeout: {{API_TIMEOUT}},
    retries: {{API_RETRIES}},
  },
  
  // Database data
  database: {
    testDb: '{{TEST_DATABASE_NAME}}',
    connectionString: '{{TEST_DATABASE_URL}}',
  },
  
  // Feature flags
  features: {
    {{#if includeAuth}}
    authentication: true,
    {{/if}}
    {{#if includePayments}}
    payments: true,
    {{/if}}
    {{#if includeAnalytics}}
    analytics: true,
    {{/if}}
  },
  
  // Test configuration
  config: {
    timeout: {{TEST_TIMEOUT}},
    retries: {{TEST_RETRIES}},
    parallel: {{PARALLEL_TESTS}},
  },
};

// Data generators
export const dataGenerators = {
  generateUser(overrides: Partial<typeof testData.users.regular> = {}) {
    const timestamp = Date.now();
    return {
      ...testData.users.regular,
      email: `test-${timestamp}@example.com`,
      name: `Test User ${timestamp}`,
      ...overrides,
    };
  },
  
  generateEmail(prefix: string = 'test') {
    return `${prefix}-${Date.now()}@example.com`;
  },
  
  generatePassword(length: number = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  },
  
  generateRandomString(length: number = 10) {
    return Math.random().toString(36).substring(2, length + 2);
  },
};

// Data cleanup utilities
export const dataCleanup = {
  async cleanupTestUsers() {
    // Implementation for cleaning up test users
    console.log('Cleaning up test users...');
  },
  
  async cleanupTestData() {
    // Implementation for cleaning up test data
    console.log('Cleaning up test data...');
  },
  
  async resetDatabase() {
    // Implementation for resetting test database
    console.log('Resetting test database...');
  },
};