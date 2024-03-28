import { createUser, getUserByOauth } from '@/lib/userDB';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      if (nextUrl.pathname === '/my-coupons') {
        if (!!auth?.user) {
          return true;
        } else {
          return Response.redirect(
            new URL(`/login?callbackUrl=${nextUrl.toString()}`, nextUrl.origin)
          );
        }
      }
      return true;
    },
    async jwt({ token, user, trigger, session, account }) {
      if (trigger === 'signIn' && account?.provider === 'kakao') {
        // 카카오 로그인 시 유저 id 를 DB users 테이블에서 조회 후 있으면 그걸로 로그인, 없으면 회원가입 로직 태움.
        const dbUser = await getUserByOauth(account.providerAccountId);
        if (dbUser) {
          token.id = dbUser.id;
          token.name = dbUser.name;
          token.email = dbUser.email;
          return token;
        } else {
          // signUp
          const insertedUser = await createUser(
            account.providerAccountId,
            user.name || 'No Name',
            user.email || undefined
          );
          token.id = insertedUser.id;
          token.name = insertedUser.name;
          token.email = insertedUser.email;
          return token;
        }
      }
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
      };
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
