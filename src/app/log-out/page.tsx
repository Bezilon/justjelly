'use client'

import { useEffect } from 'react';

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

// import { logout } from '@/actions/user.actions';

const LogOutPage = () => {
  const router = useRouter();
  
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });

  useEffect(() => {
    console.log('logout page', status);
    if (status === "authenticated") {
      
    }
  }, [status]);

  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    You have successfully logged out
  </div>;
}

export default LogOutPage