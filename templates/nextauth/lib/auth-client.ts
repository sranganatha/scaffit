'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';

// Custom hook for authentication
export function useAuth() {
  const { data: session, status } = useSession();
  
  return {
    session,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    isUnauthenticated: status === 'unauthenticated',
  };
}

// Sign in helper
export async function signInWithProvider(provider: string, callbackUrl?: string) {
  return await signIn(provider, {
    callbackUrl: callbackUrl || '/dashboard',
  });
}

// Sign out helper
export async function signOutUser(callbackUrl?: string) {
  return await signOut({
    callbackUrl: callbackUrl || '/',
  });
}

// Session Provider wrapper
export { SessionProvider };

