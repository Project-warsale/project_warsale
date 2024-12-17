'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios'
import { Cart } from '@/types'
import CartComponent from '@/components/shared/cart'
import OpacityBackground from '@/components/shared/opacityBackground'

interface defaultValue {
  cart: null | Cart
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>
  cartOpen: boolean
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<defaultValue>({
  cart: null,
  setCart: () => null,
  cartOpen: false,
  setCartOpen: () => false,
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  useEffect(() => {
    const getCart = async () => {
      const { data } = await axios.get('/api/cart')
      setCart(data.cart)
    }
    getCart()
  }, [])

  return (
    <AppContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
      }}
    >
      <OpacityBackground onClick={() => setCartOpen(false)} />
      <CartComponent />
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
