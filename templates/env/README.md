# Environment Variables Template

This template provides a complete, framework-agnostic environment variable setup with type-safe validation using Zod.

## Features

- **Framework Detection**: Automatically detects Next.js, React, Express, Vite, or Node.js projects
- **Feature Selection**: Choose which features to include (database, auth, APIs, email, storage, analytics)
- **Type-Safe Validation**: Runtime validation with TypeScript types
- **Framework-Specific Variables**: Appropriate environment variables for each framework

## Files Generated

### .env.example
Template file with example environment variables that users can copy to `.env.local` and fill in. Content varies based on:
- **Project Type**: Next.js, React, Express, Vite, or Node.js
- **Selected Features**: Database, authentication, API keys, email, storage, analytics

### env.ts / env.js
Type-safe environment validation using Zod. Provides:
- Runtime validation of environment variables
- TypeScript types for environment variables
- Framework-specific configuration
- Feature-specific validation rules

## Configuration Options

- **includeExamples**: Include example environment variables (default: true)
- **useZod**: Enable Zod schema validation (default: true)
- **features**: Select features to include:
  - Database (PostgreSQL)
  - Authentication (NextAuth for Next.js, JWT/Session for others)
  - API Keys (OpenAI, Stripe)
  - Email Service (SMTP)
  - File Storage (AWS S3)
  - Analytics (Google Analytics, PostHog)

## Framework-Specific Variables

### Next.js
```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### Express
```env
PORT=3000
NODE_ENV="development"
```

### React/Vite
```env
VITE_API_URL="http://localhost:3000"
```

### Node.js
```env
NODE_ENV="development"
PORT=3000
```

## Example Usage

```typescript
import { env } from './env';

// Type-safe access to environment variables
const dbUrl = env.DATABASE_URL;
const port = env.PORT;
const apiUrl = env.VITE_API_URL; // For Vite projects
```

## Dependencies

- `zod` - Schema validation and type inference

## Framework Detection

The scaffold automatically detects your project type by checking for:
- `next.config.js/ts` → Next.js
- `vite.config.js/ts` → Vite
- `express` in package.json → Express
- `react` in package.json → React
- Default → Node.js


