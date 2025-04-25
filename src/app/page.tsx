import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema/users";
import { count } from "drizzle-orm";

import RegisterForm from "../components/RegisterForm";

export default async function Home() {
  const userCount = (await db.select({count: count()}).from(users))[0].count;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        { !userCount ? <RegisterForm firstUser={true}/> : null }
      </main>
    </div>
  );
}
