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
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext<defaultValue>({
  cart: null,
  setCart: () => null,
  cartOpen: false,
  setCartOpen: () => false,
  total: 0,
  setTotal: () => 0,
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    if (!isClient) return
    const getCart = async () => {
      if (!localStorage) return
      const cartId = localStorage.getItem('cartId')
      const { data } = await axios.get(`/api/cart?cartId=${cartId || 99999}`)
      if (data.cart) {
        setCart(data.cart)
        localStorage.setItem('cartId', data.cart.id)
      }
    }
    getCart()
  }, [isClient])

  useEffect(() => {
    const calculateTotal = () => {
      const totalInstance = cart?.cartItems.reduce((acc, item) => {
        return (
          (item.product.discountedPrice || item.product.price) * item.quantity +
          acc
        )
      }, 0)
      if (totalInstance) {
        setTotal(totalInstance)
      }
    }
    if (cart) {
      calculateTotal()
    }
  }, [cart])

  return (
    <AppContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        total: total,
        setTotal: setTotal,
      }}
    >
      <OpacityBackground onClick={() => setCartOpen(false)} />
      <CartComponent />
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
