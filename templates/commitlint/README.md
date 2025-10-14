# Commitlint Configuration Template

This template shows example commitlint configurations for conventional commits.

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
