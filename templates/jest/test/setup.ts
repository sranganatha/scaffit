// Test setup file
// This file runs before each test file

{{#if isNextJS}}
// Next.js specific setup
import '@testing-library/jest-dom';
{{/if}}

{{#if isVue}}
// Vue specific setup
import { config } from '@vue/test-utils';
{{/if}}

// Global test utilities
{{#if includeMatchers}}
// Custom matchers
expect.extend({
  toBeValidEmail(received) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass = emailRegex.test(received);
    return {
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be a valid email`,
      pass,
    };
  },
});
{{/if}}

// Mock console methods in test environment
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
};

// Global test timeout
jest.setTimeout({{TEST_TIMEOUT}});