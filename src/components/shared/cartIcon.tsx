'use client'

import { FiShoppingCart } from 'react-icons/fi'
import { useContext } from 'react'
import { AppContext } from '@/context/contextProvider'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'

const CartIcon = () => {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useKindeBrowserClient()
  const { setCartOpen } = useContext(AppContext)

  return (
    <button
      onClick={() => {
        if (!isAuthenticated && !isLoading) {
          return router.push('/api/auth/register')
        }
        setCartOpen(true)
      }}
      className='relative z-[100]'
    >
      <FiShoppingCart className='text-[22px]' />
    </button>
  )
}

export default CartIcon
