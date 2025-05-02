'use server'

import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"

export async function register(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirm-password')
 
  if (!email) {
    return { message: "Missing email address" }
  }

  if (!password) {
    return { message: "Missing password" }
  }

  if (!confirmPassword) {
    return { confirmPassword: "Missing password confirmation" }
  }

  if (password !== confirmPassword) {
    return { message: "Passwords do not match" }
  }

  await db.insert(users).values({
    email: email.toString(),
    password: password.toString()
  });
}