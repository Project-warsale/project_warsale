import { CartItems, Product } from '@prisma/client'

export interface CartProductType extends Product {
  qty: number
}

export interface Cart {
  id: number
  userId: string
  cartItems: CartItems[]
}
