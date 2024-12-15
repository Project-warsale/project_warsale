'use client'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'

const Auth = () => {
  const { isAuthenticated } = useKindeBrowserClient()
  return (
    <>
      {isAuthenticated ? (
        <Link
          href='/api/auth/logout'
          className='px-3 py-1 rounded-[5px] bg-transparent hover:bg-zinc-100 transition-all duration-200 ease-linear text-[15px] text-zinc-900 whitespace-nowrap'
        >
          Sign out
        </Link>
      ) : (
        <Link
          href='/api/auth/register'
          className='px-3 py-1 rounded-[5px] bg-transparent hover:bg-zinc-100 transition-all duration-200 ease-linear text-[15px] text-zinc-900 whitespace-nowrap'
        >
          Sign in
        </Link>
      )}
    </>
  )
}

export default Auth
