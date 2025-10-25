import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Test configuration
  test: {
    // Test environment
    environment: '{{TEST_ENVIRONMENT}}',
    
    // Test file patterns
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    
    // Global setup
    {{#if includeGlobalSetup}}
    globalSetup: ['./test/setup.ts'],
    {{/if}}
    
    // Setup files
    {{#if includeSetupFiles}}
    setupFiles: ['./test/setup.ts'],
    {{/if}}
    
    // Coverage configuration
    {{#if includeCoverage}}
    coverage: {
      provider: '{{COVERAGE_PROVIDER}}',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        '**/dist/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      ],
      thresholds: {
        global: {
          branches: {{COVERAGE_BRANCHES_THRESHOLD}},
          functions: {{COVERAGE_FUNCTIONS_THRESHOLD}},
          lines: {{COVERAGE_LINES_THRESHOLD}},
          statements: {{COVERAGE_STATEMENTS_THRESHOLD}},
        },
      },
    },
    {{/if}}
    
    // Test timeout
    testTimeout: {{TEST_TIMEOUT}},
    
    // Hook timeout
    hookTimeout: {{HOOK_TIMEOUT}},
    
    // Reporter configuration
    reporter: ['{{REPORTER}}'],
    
    // Output configuration
    outputFile: {
      json: './test-results/results.json',
      html: './test-results/index.html',
    },
    
    // Watch mode
    watch: false,
    
    // Parallel execution
    pool: '{{POOL_TYPE}}',
    poolOptions: {
      threads: {
        singleThread: {{SINGLE_THREAD}},
      },
    },
  },
  
  // Vite configuration
  resolve: {
    alias: {
      {{#if isNextJS}}
      '@': '/src',
      '@/components': '/src/components',
      '@/lib': '/src/lib',
      '@/utils': '/src/utils',
      '@/types': '/src/types',
      '@/hooks': '/src/hooks',
      '@/styles': '/src/styles',
      {{/if}}
      {{#if isVue}}
      '@': '/src',
      '@/components': '/src/components',
      '@/views': '/src/views',
      '@/router': '/src/router',
      '@/store': '/src/store',
      '@/utils': '/src/utils',
      {{/if}}
      {{#if isExpress}}
      '@': '/src',
      '@/controllers': '/src/controllers',
      '@/middleware': '/src/middleware',
      '@/routes': '/src/routes',
      '@/models': '/src/models',
      '@/utils': '/src/utils',
      '@/types': '/src/types',
      {{/if}}
      {{#if isVite}}
      '@': '/src',
      '@/components': '/src/components',
      '@/views': '/src/views',
      '@/utils': '/src/utils',
      '@/types': '/src/types',
      {{/if}}
    },
  },
  
  // Define global variables
  define: {
    __TEST__: true,
    {{#if isNextJS}}
    __NEXT_VERSION__: '"{{NEXT_VERSION}}"',
    {{/if}}
    {{#if isVue}}
    __VUE_VERSION__: '"{{VUE_VERSION}}"',
    {{/if}}
  },
});