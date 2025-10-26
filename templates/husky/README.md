# Husky Git Hooks Template

This template provides Husky Git hooks configuration for automated code quality.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Add Husky scaffold (no installation needed!)
npx scaffit add husky
```

### Alternative: Global Installation
```bash
# Install CLI globally
npm install -g scaffit

# Add Husky scaffold
scaffit add husky
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/husky

# Use in your code
import { setupHusky, previewHusky } from '@scaffit/husky';

// Setup Husky with custom options
const result = await setupHusky({
  enablePreCommit: true,
  enablePrePush: true,
  enableCommitMsg: false,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewHusky({
  enablePreCommit: true,
  enablePrePush: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

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

Run `npx scaffit add husky` to automatically configure Husky git hooks for your project based on the detected framework.
