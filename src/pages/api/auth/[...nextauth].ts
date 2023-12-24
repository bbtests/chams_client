import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },
  providers: [
    FacebookProvider({
      clientId: `${process.env.FACEBOOK_CLIENT_ID}`,
      clientSecret: `${process.env.FACEBOOK_CLIENT_ID}`,
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        return { ...credentials };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, accessToken: token.accessToken };
    },
  },
  events: {
    async signOut({ token }) {},
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
