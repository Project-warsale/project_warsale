import { CartItems, Product } from '@prisma/client'

export interface CartProductType extends Product {
  qty: number
}

interface CartItemType extends CartItems {
  product: Product
}

export interface Cart {
  id: number
  userId: string
  cartItems: CartItemType[]
}
