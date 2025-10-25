// Global setup for Playwright tests
// Runs once before all tests

export async function globalSetup() {
  console.log('🚀 Starting global test setup...');
  
  // Database setup
  {{#if includeDatabase}}
  console.log('📊 Setting up test database...');
  // await setupTestDatabase();
  {{/if}}
  
  // Authentication setup
  {{#if includeAuth}}
  console.log('🔐 Setting up authentication...');
  // await setupTestUsers();
  {{/if}}
  
  // API setup
  {{#if includeAPIs}}
  console.log('🌐 Setting up API endpoints...');
  // await setupTestAPIs();
  {{/if}}
  
  // File storage setup
  {{#if includeStorage}}
  console.log('📁 Setting up file storage...');
  // await setupTestStorage();
  {{/if}}
  
  // Analytics setup
  {{#if includeAnalytics}}
  console.log('📈 Setting up analytics...');
  // await setupTestAnalytics();
  {{/if}}
  
  console.log('✅ Global setup completed successfully!');
}

// Global teardown for Playwright tests
// Runs once after all tests

export async function globalTeardown() {
  console.log('🧹 Starting global test cleanup...');
  
  // Database cleanup
  {{#if includeDatabase}}
  console.log('📊 Cleaning up test database...');
  // await cleanupTestDatabase();
  {{/if}}
  
  // Authentication cleanup
  {{#if includeAuth}}
  console.log('🔐 Cleaning up test users...');
  // await cleanupTestUsers();
  {{/if}}
  
  // API cleanup
  {{#if includeAPIs}}
  console.log('🌐 Cleaning up API endpoints...');
  // await cleanupTestAPIs();
  {{/if}}
  
  // File storage cleanup
  {{#if includeStorage}}
  console.log('📁 Cleaning up file storage...');
  // await cleanupTestStorage();
  {{/if}}
  
  // Analytics cleanup
  {{#if includeAnalytics}}
  console.log('📈 Cleaning up analytics...');
  // await cleanupTestAnalytics();
  {{/if}}
  
  console.log('✅ Global cleanup completed successfully!');
}