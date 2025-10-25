# Playwright E2E Testing Template

This template provides a comprehensive Playwright E2E testing setup for your project.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Install CLI globally
npm install -g @scaffit/cli

# Add Playwright scaffold
scaffit add playwright
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/playwright

# Use in your code
import { setupPlaywright, previewPlaywright } from '@scaffit/playwright';

// Setup Playwright with custom options
const result = await setupPlaywright({
  includeCI: true,
  includePageObjectModel: true,
  includeFixtures: true,
  includeHelpers: true,
  includeData: true,
  includeGlobalSetupTeardown: false,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewPlaywright({
  includeCI: true,
  includePageObjectModel: true,
  includeFixtures: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Usage

After scaffolding, you can immediately run E2E tests:

```bash
# Run E2E tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug

# Run tests in headed mode
npm run test:e2e:headed

# Show test report
npm run test:e2e:report
```

**Note**: E2E testing is ready to use immediately after scaffolding. Browsers are installed automatically.

## Features

- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **Page Object Model** examples
- **Custom fixtures** for reusable test data
- **Test helpers** for common operations
- **Global setup/teardown** for test environment management
- **CI/CD ready** with GitHub Actions workflow
- **Screenshot and video** capture on failures
- **Trace collection** for debugging

## Template Structure

```
playwright/
├── playwright.config.ts          # Main Playwright configuration
├── tests/
│   ├── example.spec.ts           # Example test file
│   ├── setup.ts                  # Test setup and fixtures
│   ├── fixtures.ts               # Custom test fixtures
│   ├── global-setup.ts           # Global test setup
│   ├── global-teardown.ts        # Global test teardown
│   ├── pages/
│   │   └── example-page.ts       # Page object model example
│   ├── helpers/
│   │   └── test-helpers.ts       # Test helper utilities
│   └── data/
│       └── test-data.ts           # Test data management
├── .github/workflows/
│   └── playwright.yml            # CI/CD configuration
└── playwright-scripts.json       # Package.json scripts to add
```

## Usage

After scaffolding, you can immediately run tests:

```bash
# Run tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Debug tests
npm run test:e2e:debug
```

**Note**: Browsers are automatically installed during scaffold setup.

## Configuration

The template uses placeholders that will be replaced based on your project:

- `{{FRAMEWORK}}` - Your project framework (Next.js, React, Vue, etc.)
- `{{BASE_URL}}` - Your application's base URL
- `{{DEV_SERVER_COMMAND}}` - Command to start your dev server
- `{{BROWSER_PROJECTS}}` - Configured browser projects
- `{{TRACE_CONFIG}}` - Trace collection configuration
- `{{SCREENSHOT_CONFIG}}` - Screenshot configuration
- `{{VIDEO_CONFIG}}` - Video recording configuration

## Customization

You can customize the template by:

1. **Modifying browser projects** in `playwright.config.ts`
2. **Adding custom fixtures** in `tests/fixtures.ts`
3. **Creating page objects** in `tests/pages/`
4. **Adding test helpers** in `tests/helpers/`
5. **Managing test data** in `tests/data/`

## CI/CD Integration

The template includes a GitHub Actions workflow that:

- Installs dependencies
- Installs Playwright browsers
- Runs E2E tests
- Uploads test reports as artifacts

## Best Practices

1. **Use page objects** for complex UI interactions
2. **Create reusable fixtures** for common test scenarios
3. **Organize tests** by feature or user journey
4. **Use data-driven tests** with test data files
5. **Take screenshots** on failures for debugging
6. **Use traces** for complex debugging scenarios
