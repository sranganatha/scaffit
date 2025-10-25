module.exports = {
  // Base configuration
  root: true,
  env: {
    {{#if isNextJS}}
    browser: true,
    es2021: true,
    node: true,
    {{/if}}
    {{#if isVue}}
    browser: true,
    es2021: true,
    node: true,
    {{/if}}
    {{#if isExpress}}
    node: true,
    es2021: true,
    {{/if}}
    {{#if isVite}}
    browser: true,
    es2021: true,
    node: true,
    {{/if}}
  },
  
  // Parser configuration
  {{#if includeTypeScript}}
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    {{#if isNextJS}}
    ecmaFeatures: {
      jsx: true,
    },
    {{/if}}
    {{#if isVue}}
    ecmaFeatures: {
      jsx: true,
    },
    {{/if}}
  },
  {{else}}
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    {{#if isNextJS}}
    ecmaFeatures: {
      jsx: true,
    },
    {{/if}}
    {{#if isVue}}
    ecmaFeatures: {
      jsx: true,
    },
    {{/if}}
  },
  {{/if}}
  
  // Plugin configuration
  plugins: [
    {{#if includeTypeScript}}
    '@typescript-eslint',
    {{/if}}
    {{#if isNextJS}}
    'react',
    'react-hooks',
    'jsx-a11y',
    {{/if}}
    {{#if isVue}}
    'vue',
    {{/if}}
    {{#if includeJest}}
    'jest',
    {{/if}}
    {{#if includePlaywright}}
    'playwright',
    {{/if}}
  ],
  
  // Rule configuration
  rules: {
    // Base rules
    'no-console': '{{CONSOLE_RULE}}',
    'no-debugger': '{{DEBUGGER_RULE}}',
    'no-unused-vars': '{{UNUSED_VARS_RULE}}',
    
    {{#if includeTypeScript}}
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': '{{TS_UNUSED_VARS_RULE}}',
    '@typescript-eslint/no-explicit-any': '{{TS_ANY_RULE}}',
    '@typescript-eslint/explicit-function-return-type': '{{TS_RETURN_TYPE_RULE}}',
    '@typescript-eslint/no-non-null-assertion': '{{TS_NON_NULL_RULE}}',
    {{/if}}
    
    {{#if isNextJS}}
    // React rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    {{/if}}
    
    {{#if isVue}}
    // Vue rules
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'vue/no-multiple-template-root': 'off',
    {{/if}}
    
    {{#if includeJest}}
    // Jest rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    {{/if}}
    
    {{#if includePlaywright}}
    // Playwright rules
    'playwright/expect-expect': 'error',
    'playwright/no-page-pause': 'error',
    {{/if}}
  },
  
  // Extends configuration
  extends: [
    'eslint:recommended',
    {{#if includeTypeScript}}
    '@typescript-eslint/recommended',
    {{/if}}
    {{#if isNextJS}}
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    {{/if}}
    {{#if isVue}}
    'plugin:vue/vue3-recommended',
    {{/if}}
    {{#if includeJest}}
    'plugin:jest/recommended',
    {{/if}}
    {{#if includePlaywright}}
    'plugin:playwright/recommended',
    {{/if}}
  ],
  
  // Override configurations
  overrides: [
    {{#if includeTypeScript}}
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {{/if}}
    {
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
  
  // Settings
  settings: {
    {{#if isNextJS}}
    react: {
      version: 'detect',
    },
    {{/if}}
    {{#if isVue}}
    vue: {
      version: 'detect',
    },
    {{/if}}
  },
};