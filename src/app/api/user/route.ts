import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import { z } from "zod"

export const userSchema = z.object({
  email: z.string().min(1, 'Username is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long')
})

export async function GET(req: Request) {
  try {
    const body = await req.json();

    const { id } = body;

    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id.toString())
    });
    
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    
    return NextResponse.json({ user: null, message: error }, { status: 401 })
  }

}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = userSchema.parse(body);

    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email.toString())
    });

    if (user) {
      return NextResponse.json({ user: null, message: "User with the same email address already exists!" }, { status: 409 })
    }

    const hashedPassword = await hash(password.toString(), 10)
  
    const newUser = await db.insert(users).values({
      email: email.toString(),
      password: hashedPassword
    });

    return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 })

  } catch (error) {
    return NextResponse.json({ user:null,  message: error }, { status: 400 })
  }
}