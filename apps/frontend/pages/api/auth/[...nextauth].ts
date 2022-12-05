import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma';

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
    newUser: '/register',
    signOut: '/',
  },
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);
