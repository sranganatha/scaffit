module.exports = {
  // Test environment based on framework
  testEnvironment: '{{TEST_ENVIRONMENT}}',
  
  // Test file patterns
  roots: ['<rootDir>/test', '<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  
  // TypeScript transformation
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  
  // Setup files (if enabled)
  {{#if includeSetupFiles}}
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  {{/if}}
  
  // Module name mapping (framework-specific)
  {{#if isNextJS}}
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  {{/if}}
  {{#if isVite}}
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  {{/if}}
  
  // Coverage configuration (if enabled)
  {{#if includeCoverage}}
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
  ],
  {{/if}}
  
  // Extended matchers (if enabled)
  {{#if includeMatchers}}
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  {{/if}}
  
  // Global configuration
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};