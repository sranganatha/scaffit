module.exports = {
  root: true,
  env: {
    browser: {{BROWSER_ENV}},
    es2022: true,
    node: {{NODE_ENV}},
  },
  extends: [
    {{EXTENDS_CONFIG}}
  ],
  parser: '{{PARSER}}',
  parserOptions: {
    ecmaVersion: '{{ECMA_VERSION}}',
    sourceType: 'module',
    {{PARSER_OPTIONS}}
  },
  plugins: [{{PLUGINS}}],
  rules: {
    {{RULES}}
  },
  ignorePatterns: [
    {{IGNORE_PATTERNS}}
  ],
};
