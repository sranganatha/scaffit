import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add code coverage if enabled
      {{#if addCoverage}}
      if (require('@cypress/code-coverage')) {
        require('@cypress/code-coverage/task')(on, config);
      }
      {{/if}}
      
      return config;
    },
    baseUrl: 'http://localhost:{{PORT}}',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    chromeWebSecurity: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    {{#if addVisualTesting}}
    env: {
      visualRegression: true
    },
    {{/if}}
  },
  {{#if addComponentTesting}}
  component: {
    devServer: {
      framework: '{{COMPONENT_FRAMEWORK}}',
      bundler: '{{BUNDLER}}'
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts'
  },
  {{/if}}
});

