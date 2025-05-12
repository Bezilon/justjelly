'use client'

import { useEffect, useState } from "react";

// import { useSession } from "next-auth/react";

import RegisterForm from "@/components/form/RegisterForm";

export default function Home() {
  const [ userCount, setUserCount ] = useState(null);

  useEffect(() => {
    fetch("/api/user/get-count", {
      method: "GET",
      cache: "no-store",
    }).then((res) => res.json()).then((data) => setUserCount(data.count ?? 0)).catch(() => null);
  }, []);

  useEffect(() => {
    if ((userCount ?? 0) > 0) {
      
    }
  }, [ userCount ]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        { userCount === 0 ? <RegisterForm firstUser={true}/> : null }
      </main>
    </div>
  );
}
