'use client'

import { useEffect, useContext } from 'react'
import { AppContext } from '@/context/contextProvider'
import { clearCart } from '@/services/cart'

const ClientComponent = ({}) => {
  const { setCart, cart } = useContext(AppContext)
  useEffect(() => {
    if (cart) {
      const cartId = localStorage.getItem('cartId')
      if (!cartId) return
      if (cart.cartItems.length > 0) {
        clearCart(Number(cartId))
        setCart((prev) => ({
          ...prev!,
          cartItems: [],
        }))
      }
    }
  }, [cart, setCart])

  return <></>
}

export default ClientComponent
