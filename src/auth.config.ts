import type { NextAuthConfig } from "next-auth"
 
export default {
  pages: {
    signIn: "/log-in",
    signOut: "/log-out",
    // error: "/log-out?error=CredentialsSignin",
  },
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session }) {
      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig