# Prettier Configuration Template

This template provides Prettier code formatting setup with framework-specific configurations.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Install CLI globally
npm install -g @scaffit/cli

# Add Prettier scaffold
scaffit add prettier
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/prettier

# Use in your code
import { setupPrettier, previewPrettier } from '@scaffit/prettier';

// Setup Prettier with custom options
const result = await setupPrettier({
  includeTailwindPlugin: true,
  addFormatScripts: true,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewPrettier({
  includeTailwindPlugin: true,
  addFormatScripts: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Usage

After scaffolding, you can immediately format your code:

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check
```

**Note**: Formatting is ready to use immediately after scaffolding.

## Files Generated

### .prettierrc.json
Prettier configuration file with customizable options:
- Semicolons
- Single quotes
- Tab width
- Trailing commas
- Print width
- Line endings

### .prettierignore
Files and directories to ignore during formatting:
- node_modules/
- Build outputs
- Log files
- Environment files
- Coverage reports

## Configuration Options

- **semicolons**: Add semicolons at the end of statements
- **singleQuotes**: Use single quotes instead of double quotes
- **tabWidth**: Number of spaces per indentation level (2 or 4)
- **includeESLint**: Integrate with ESLint configuration

## Package.json Scripts Added

- `format` - Format all files with Prettier
- `format:check` - Check if files are formatted correctly

## Dependencies

- `prettier` - Code formatter
- `eslint-config-prettier` - ESLint integration (optional)

## Usage

```bash
# Format all files
npm run format

# Check formatting
npm run format:check

# Format specific files
npx prettier --write src/**/*.{js,ts,jsx,tsx}
```


