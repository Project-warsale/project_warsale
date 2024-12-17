'use client'

import { AppContext } from '@/context/contextProvider'
import { cn } from '@/lib/utils'
import { useContext } from 'react'

const Cart = () => {
  const { cartOpen } = useContext(AppContext)
  return (
    <div
      className={cn(
        'w-[400px] fixed right-0 top-0 transition-all duration-500 h-screen shadow-lg bg-white z-[999]',
        cartOpen ? 'translate-x-0' : 'translate-x-[450px]'
      )}
    ></div>
  )
}

export default Cart
