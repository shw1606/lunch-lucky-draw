import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { authConfig } from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_OAUTH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
