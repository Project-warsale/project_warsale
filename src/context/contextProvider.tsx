'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios'
import { Cart } from '@/types'

interface defaultValue {
  cart: null | Cart
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>
}

export const AppContext = createContext<defaultValue>({
  cart: null,
  setCart: () => null,
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null)

  useEffect(() => {
    const getCart = async () => {
      const { data } = await axios.get('/api/cart')
      setCart(data.cart)
    }
    getCart()
  }, [])

  console.log(cart)

  return (
    <AppContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
