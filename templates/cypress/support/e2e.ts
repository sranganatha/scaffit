// Cypress E2E Support File

// Import custom commands
import './commands';

// ***********************************************************
// This file is processed and loaded automatically before
// your test files. This is a great place to put global
// configuration and behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Example: Prevent uncaught errors from failing tests
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Example: Log all requests (for debugging)
{{#if includeDebugLogging}}
Cypress.on('test:after:run', (attributes) => {
  console.log('Test:', attributes.title, 'Duration:', attributes.duration);
});
{{/if}}

// Framework-specific setup
{{#if isNextJS}}
// Next.js specific helpers
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      visitAuthRoute(route: string): Chainable<void>;
    }
  }
}
{{/if}}

{{#if isReact}}
// React specific helpers
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
    }
  }
}
{{/if}}

{{#if isVue}}
// Vue specific helpers
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
    }
  }
}
{{/if}}

{{#if isExpress}}
// Express API testing helpers
declare global {
  namespace Cypress {
    interface Chainable {
      apiRequest(method: string, path: string, body?: any): Chainable<Response>;
    }
  }
}
{{/if}}

