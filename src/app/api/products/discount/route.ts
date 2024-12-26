import prisma from '@/db/prisma'
import { NextResponse } from 'next/server'
import { authMiddleware } from '../../middleware'

export const PUT = async (req: Request) => {
  try {
    const matches = await authMiddleware(req)
    if (!matches) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 })
    }
    const body = await req.json()

    const { productId, discountedPrice } = body

    const discountedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        discountedPrice: discountedPrice,
      },
    })

    return NextResponse.json(
      { discountedProduct: discountedProduct },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed discounting the product', err: err },
      { status: 500 }
    )
  }
}
