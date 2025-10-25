# TypeScript Configuration Template

This template provides TypeScript configuration for different frameworks.

## Installation

### Option 1: Using Scaffit CLI (Recommended)
```bash
# Install CLI globally
npm install -g @scaffit/cli

# Add TypeScript scaffold
scaffit add typescript
```

### Option 2: Direct npm package usage
```bash
# Install scaffold directly
npm install @scaffit/typescript

# Use in your code
import { setupTypeScript, previewTypeScript } from '@scaffit/typescript';

// Setup TypeScript with custom options
const result = await setupTypeScript({
  strictnessLevel: 'recommended',
  includePathMapping: true,
  includeBuildScripts: true,
  projectRoot: './my-project'
});

// Preview changes before applying
const preview = await previewTypeScript({
  strictnessLevel: 'recommended',
  includePathMapping: true
});
```

**Note**: Both approaches require `@scaffit/core` to be installed (automatically handled).

## Next.js Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## React Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "build"]
}
```

## Node.js Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["es2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": false,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Usage

Run `scaffit add typescript` to automatically configure TypeScript for your project based on the detected framework.
