export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image<｜place▁holder▁no▁543｜>vicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

