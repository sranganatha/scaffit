import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: '{{TEST_ENVIRONMENT}}',
    globals: {{GLOBALS}},
    setupFiles: [{{SETUP_FILES}}],
    {{COVERAGE_CONFIG}}
    {{UI_CONFIG}}
  },
  resolve: {
    alias: {
      {{ALIASES}}
    }
  }
});
