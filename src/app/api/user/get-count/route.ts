import { NextResponse } from "next/server";
import { count } from "drizzle-orm";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";

import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ user: null, message: "Unauthorized" }, { status: 401 })
  }

  try {
    return NextResponse.json({count: (await db.select({count: count()}).from(users))[0].count }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ count: null, message: error }, { status: 401 })
  }

}