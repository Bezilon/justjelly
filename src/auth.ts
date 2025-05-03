import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/drizzle/db"

import authConfig from "./auth.config"
import { getUserFromDb } from "./actions/user.actions"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: "Email", type: "email", placeholder: "your@email.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const { username: email, password } = credentials

        const res = await getUserFromDb(email as string, password as string)
        
        if (res.success) {
          return res.data as User
        }

        return null
      }
    })
  ],
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
})