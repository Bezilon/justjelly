import { db } from '@/db/index'
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function Home() {
  const adminUser = await (await db.select().from(users).where(eq(users.username, 'admin'))).pop()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Just Jelly</h1>

        <h2>{adminUser?.username}</h2>

        <div>
          <input type="text"/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
