'use client'

import { CartProductType } from '@/types'
import { createContext, useState } from 'react'
import { ReactNode } from 'react'

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
