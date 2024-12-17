'use server'

import prisma from '@/db/prisma'

export const getProducts = async () => {
  const products = await prisma.product.findMany()
  return products
}

export const getProductById = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      specifications: true,
    },
  })

  return product
}
