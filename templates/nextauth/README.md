# NextAuth Scaffold

NextAuth.js authentication setup for Next.js projects with OAuth providers.

## Installation

```bash
npx scaffit add nextauth
```

## Files Created

- `lib/auth.ts` - NextAuth configuration
- `lib/auth-client.ts` - Client-side auth utilities
- `middleware.ts` - Protected routes middleware
- `app/api/auth/[...nextauth]/route.ts` - API route handler

## Features

- OAuth Providers (Google, GitHub, Discord, Twitter)
- Credentials Support (Email/Password)
- Database Support (Prisma, MongoDB, MySQL, PostgreSQL)
- Type-Safe - Full TypeScript support
- Client Utilities - React hooks and helpers
- Middleware - Automatic route protection

## Configuration

Add to `.env.local`:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

## Usage

Server Components:
```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const session = await getServerSession(authOptions);
```

Client Components:
```typescript
import { useAuth } from '@/lib/auth-client';

const { session, isAuthenticated } = useAuth();
```
