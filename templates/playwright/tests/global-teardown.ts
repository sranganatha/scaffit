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