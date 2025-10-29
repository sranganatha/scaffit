import { NextAuthOptions } from 'next-auth';
{{#if database}}
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
{{/if}}

export const authOptions: NextAuthOptions = {
  {{#if database}}
  adapter: PrismaAdapter(prisma),
  {{/if}}
  providers: [
    {{#if providers.google}}
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    {{/if}}
    {{#if providers.github}}
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    {{/if}}
    {{#if providers.discord}}
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    {{/if}}
    {{#if providers.credentials}}
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Add your authentication logic here
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        
        // TODO: Implement actual authentication
        const user = { id: '1', email: credentials.email, name: 'User' };
        
        if (user) {
          return user;
        }
        
        return null;
      }
    }),
    {{/if}}
  ],
  session: {
    strategy: '{{SESSION_STRATEGY}}',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

// Helper to get session in server components
export async function getServerSession() {
  return await getServerSession(authOptions);
}

