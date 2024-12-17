'use client'

import { CartProductType } from '@/types'
import { createContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios'

interface defaultValue {
  cart: CartProductType[]
  setCart: React.Dispatch<React.SetStateAction<CartProductType[]>>
}

export const AppContext = createContext<defaultValue>({
  cart: [],
  setCart: () => [],
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>([])

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
