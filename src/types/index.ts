import { Product } from '@prisma/client'

export interface CartProductType extends Product {
  qty: number
}
