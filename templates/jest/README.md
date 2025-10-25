# Jest Testing Template

This template provides a complete Jest testing setup for your project with framework-specific configurations and utilities.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Install CLI globally
npm install -g @scaffit/cli

# Add Jest scaffold
scaffit add jest
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/jest

# Use in your code
import { setupJest, previewJest } from '@scaffit/jest';

// Setup Jest with custom options
const result = await setupJest({
  includeCoverage: true,
  includeSetupFiles: true,
  features: ['typescript', 'eslint', 'mocks', 'utils'],
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewJest({
  includeCoverage: true,
  features: ['typescript', 'eslint']
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Usage

After scaffolding, you can immediately run tests:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Note**: Testing is ready to use immediately after scaffolding.

## Files Generated

- `jest.config.js` - Jest configuration with framework-specific settings
- `test/setup.ts` - Test setup file with global utilities and matchers
- `test/example.test.ts` - Example test file with various test patterns
- `test/utils.ts` - Test utilities and custom matchers
- Updated `package.json` with test scripts

## Configuration Features

- **Framework Detection**: Automatically configures based on your project type
- **Path Aliases**: Framework-specific import aliases (@/ for most frameworks)
- **Test Environment**: Node.js, jsdom, or Happy DOM options
- **Coverage Reporting**: Optional coverage with HTML, LCOV, and text reports
- **Custom Matchers**: Extended Jest matchers for common validations
- **Test Utilities**: Helper functions for mocking and test data

## Test Scripts Added

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false"
  }
}
```

## Framework Support

### Frontend Frameworks
- **Next.js**: Path aliases (@/), React testing utilities, jsdom environment
- **React (Vite/CRA)**: Testing Library integration, component testing
- **Vue**: Vue Test Utils integration, component mounting
- **Angular**: Angular testing utilities, TestBed configuration
- **Svelte**: Svelte testing utilities, component testing

### Backend Frameworks
- **Express**: Supertest integration, API testing utilities
- **Fastify**: Fastify testing utilities, route testing
- **Node.js**: Pure Node.js testing, utility function testing

## Example Test Files

### Basic Test
```typescript
import { describe, test, expect } from '@jest/globals';

describe('Math Utils', () => {
  test('adds two numbers correctly', () => {
    expect(2 + 3).toBe(5);
  });
});
```

### Component Test (React)
```typescript
import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### API Test (Express/Fastify)
```typescript
import request from 'supertest';
import { expect, test } from '@jest/globals';

test('GET /api/users returns users', async () => {
  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('users');
});
```

## Custom Matchers

The template includes custom Jest matchers:

```typescript
// Email validation
expect('user@example.com').toBeValidEmail();

// URL validation
expect('https://example.com').toBeValidUrl();
```

## Test Utilities

Use the provided test utilities for common testing patterns:

```typescript
import { testUtils } from './test/utils';

// Create mock data
const mockUser = testUtils.createMockUser({ name: 'John' });

// Mock console methods
const restoreConsole = testUtils.mockConsole();
// ... tests ...
restoreConsole();

// Wait for async operations
await testUtils.waitFor(100);
```

## Coverage Configuration

When coverage is enabled, the template generates:

- **HTML Report**: `coverage/index.html`
- **LCOV Report**: `coverage/lcov.info` (for CI/CD)
- **Text Report**: Console output with coverage summary

Coverage includes:
- Source files (`src/**/*.ts`)
- Excludes test files and configuration files
- Thresholds for statements, branches, functions, and lines

## Usage

1. Install dependencies: `npm install`
2. Create test files in `test/` directory
3. Run tests: `npm test`
4. Run with coverage: `npm run test:coverage`
5. Watch mode: `npm run test:watch`
6. CI mode: `npm run test:ci`

## Dependencies Installed

- `jest` - Testing framework
- `ts-jest` - TypeScript support for Jest
- `@types/jest` - TypeScript definitions
- `@testing-library/jest-dom` - Additional matchers (frontend)
- `supertest` - HTTP testing (backend)
- `@types/supertest` - TypeScript definitions for supertest

## License

MIT
