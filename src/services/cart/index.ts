import { CartItemType } from '@/types'
import axios from 'axios'

export const updateProductQty = async (id: number, newQty: number) => {
  try {
    await axios.put('/api/cart', {
      id: id,
      newQty: newQty,
    })
  } catch (err) {
    console.error('Error updating quantity', err)
  }
}

export const removeFromCart = async (id: number) => {
  const { data } = await axios.delete(`/api/cart?id=${id}`)
  return data
}

export const clearCart = async (cartId: number) => {
  const { data } = await axios.delete(`/api/cart/clear?cartId=${cartId}`)
  return data
}

export const createCheckoutSession = async (cartItems: CartItemType[]) => {
  const { data } = await axios.post('/api/cart/checkout', {
    cartItems: cartItems,
  })
  return data
}
