'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

import LogInForm from '@/components/form/LogInForm'
import { useEffect } from 'react'

import Loading from '@/components/Loading'

const LogInPage = () => {
  const router = useRouter();

  const { status } = useSession();

  const searchParams = useSearchParams();

  const newUser = searchParams.get('new-user');

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  

  return <>
    { status === "loading" ? <Loading/> : null }
    { status === "unauthenticated" ? <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <LogInForm newUser={newUser} />
      </main>
    </div> : null }
  </>
}

export default LogInPage;
