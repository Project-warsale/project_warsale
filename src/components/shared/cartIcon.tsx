'use client'

import { FiShoppingCart } from 'react-icons/fi'
import { useContext } from 'react'
import { AppContext } from '@/context/contextProvider'

const CartIcon = () => {
  const { setCartOpen } = useContext(AppContext)

  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        setCartOpen(true)
      }}
      className='relative z-[100]'
    >
      <FiShoppingCart className='text-[22px]' />
    </button>
  )
}

export default CartIcon
