# Husky Git Hooks Template

This template shows example Husky configurations for different frameworks.

## Pre-commit Hook

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

## Pre-push Hook

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run test
```

## Lint-staged Configuration

### Next.js/React
```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

### Vue
```json
{
  "*.{js,jsx,ts,tsx,vue}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

### Node.js
```json
{
  "*.{js,ts}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

## Package.json Scripts

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## Usage

Run `scaffit add husky` to automatically configure Husky git hooks for your project based on the detected framework.
