import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getWordPressData, LOGIN_USER } from "@/lib/wordpress";

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
          // fetch data from WP
          const data = await getWordPressData(LOGIN_USER, {
            username: credentials.username,
            password: credentials.password
          });

          if (data?.login?.authToken) {
            const user = data.login.user;
            return {
              id: user.id || data.login.authToken, // Fallback ID
              name: user.name || `${user.firstName} ${user.lastName}`,
              email: user.email,
              accessToken: data.login.authToken, // Important for authenticated requests
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
