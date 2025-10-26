# Vitest Testing Template

This template provides a complete Vitest testing setup for your project.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Add Vitest scaffold (no installation needed!)
npx scaffit add vitest
```

### Alternative: Global Installation
```bash
# Install CLI globally
npm install -g scaffit

# Add Vitest scaffold
scaffit add vitest
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/vitest

# Use in your code
import { setupVitest, previewVitest } from '@scaffit/vitest';

// Setup Vitest with custom options
const result = await setupVitest({
  addTestScripts: true,
  addCoverage: true,
  addUI: false,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewVitest({
  addTestScripts: true,
  addCoverage: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Files Generated

- `vitest.config.ts` - Vitest configuration with framework-specific settings
- `test/setup.ts` - Test setup file (created if needed)
- Updated `package.json` with test scripts

## Configuration Features

- **Framework Detection**: Automatically configures based on your project type
- **Path Aliases**: Framework-specific import aliases
- **Test Environment**: Node.js, jsdom, or Happy DOM options
- **Coverage Reporting**: Optional V8 coverage with HTML reports
- **Interactive UI**: Optional Vitest UI for better testing experience

## Test Scripts Added

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

## Example Test File

```typescript
// test/example.test.ts
import { describe, it, expect } from 'vitest';

describe('Example', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2);
  });
});
```

## Framework Support

- **Next.js**: Path aliases and React testing utilities
- **React**: Testing Library integration
- **Vue**: Vue Test Utils integration
- **Angular**: Angular testing utilities
- **Svelte**: Svelte testing utilities
- **Express/Fastify/Node.js**: Supertest integration

## Usage

1. Install dependencies: `npm install`
2. Create test files in `test/` directory
3. Run tests: `npm test`
4. Run with coverage: `npm run test:coverage`
5. Open UI: `npm run test:ui`

## License

MIT
