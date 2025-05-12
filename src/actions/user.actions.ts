'use server'

import { eq, count } from "drizzle-orm"

import { db } from "@/drizzle/db"

import { signIn, signOut } from "@/auth"

import bcryptjs from "bcryptjs"

import LoginSchema from "@/schemas/login"
import { users } from "@/drizzle/schema"

export async function getUserFromDb(email: string, password: string) {
  try {
    const existedUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (!existedUser) {
      return {
        success: false,
        message: "User not found.",
      }
    }

    if (!existedUser.password) {
      return {
        success: false,
        message: "Password is required.",
      }
    }

    const isPasswordMatches = await bcryptjs.compare(
      password,
      existedUser.password
    )

    if (!isPasswordMatches) {
      return {
        success: false,
        message: "Password is incorrect.",
      }
    }

    return {
      success: true,
      data: existedUser,
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    }
  }
}

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    LoginSchema.parse({
      email,
      password,
    })

    const formData = new FormData()

    formData.append("username", email)
    formData.append("password", password)

    console.log({email, password})

    const res = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    })

    return {
      success: true,
      data: res,
    }
  } catch (error) {
    return {
      success: false,
      message: "Email or password is incorrect.",
      error: JSON.parse(error.message)
    }
  }
}

export async function logout() {
  try {
    await signOut({
      redirect: true,
      redirectTo: "/",
    })
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    }
  }
}

export async function getUserCount() {
  try {
    return (await db.select({count: count()}).from(users))[0].count;
  } catch (error) {
    console.error(error);
    return null;
  }
}