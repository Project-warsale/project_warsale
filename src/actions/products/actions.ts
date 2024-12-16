'use server'

import prisma from '@/db/prisma'

export const getProducts = async () => {
  const products = await prisma.product.findMany()
  return products
}
