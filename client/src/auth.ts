import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginUser } from "@/lib/mockData";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "WordPress",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        try {
          const data = await loginUser(
            credentials.username as string, 
            credentials.password as string
          );

          if (data?.login?.authToken) {
            return {
              id: data.login.user.id,
              name: data.login.user.name,
              email: data.login.user.email,
              accessToken: data.login.authToken, // Persist this to session
            };
          }
          return null;
        } catch (e) {
          console.error("Auth Error:", e);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: '/login',
  }
});
