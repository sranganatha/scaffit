# Commitlint Configuration Template

This template provides commitlint configuration for conventional commits.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Install CLI globally
npm install -g @scaffit/cli

# Add Commitlint scaffold
scaffit add commitlint
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/commitlint

# Use in your code
import { setupCommitlint, previewCommitlint } from '@scaffit/commitlint';

// Setup Commitlint with custom options
const result = await setupCommitlint({
  strictnessLevel: 'recommended',
  includeHuskyIntegration: true,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewCommitlint({
  strictnessLevel: 'recommended',
  includeHuskyIntegration: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Recommended Configuration

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert'
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100]
  }
};
```

## Strict Configuration

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert'
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100]
  }
};
```

## Husky Integration

### Commit-msg Hook
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```

## Package.json Scripts

```json
{
  "scripts": {
    "commitlint": "commitlint --edit",
    "commitlint:edit": "commitlint --edit"
  }
}
```

## Commit Message Examples

```
feat: add user authentication
fix: resolve memory leak in data processing
docs: update API documentation
style: format code with prettier
refactor: extract common utility functions
perf: optimize database queries
test: add unit tests for user service
chore: update dependencies
ci: add automated testing workflow
build: configure webpack optimization
revert: revert "feat: add experimental feature"
```

## Usage

Run `scaffit add commitlint` to automatically configure commitlint for your project with conventional commits validation.
