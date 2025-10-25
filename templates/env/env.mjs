import { z } from "zod";

// Framework-agnostic environment validation
// Automatically detects project type and includes appropriate variables

const envSchema = z.object({
  // Base configuration (all frameworks)
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Framework-specific variables (detected automatically)
  {{#if isNextJS}}
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  {{/if}}
  {{#if isExpress}}
  PORT: z.string().default('3000'),
  {{/if}}
  {{#if isVite}}
  VITE_API_URL: z.string().url(),
  {{/if}}
  {{#if isNode}}
  PORT: z.string().default('3000'),
  {{/if}}
  
  // Feature-specific variables (selected by user)
  {{#if includeDatabase}}
  DATABASE_URL: z.string().url(),
  {{/if}}
  
  {{#if includeAuth}}
  {{#if isNextJS}}
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  {{else}}
  JWT_SECRET: z.string().min(32),
  SESSION_SECRET: z.string().min(32),
  {{/if}}
  {{/if}}
  
  {{#if includeAPIs}}
  OPENAI_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  {{/if}}
  
  {{#if includeEmail}}
  SMTP_HOST: z.string(),
  SMTP_PORT: z.string(),
  SMTP_USER: z.string().email(),
  SMTP_PASS: z.string(),
  {{/if}}
  
  {{#if includeStorage}}
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_BUCKET_NAME: z.string().optional(),
  {{/if}}
  
  {{#if includeAnalytics}}
  GOOGLE_ANALYTICS_ID: z.string().optional(),
  POSTHOG_KEY: z.string().optional(),
  {{/if}}
});

export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;