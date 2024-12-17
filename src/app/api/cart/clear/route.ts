import prisma from '@/db/prisma'
import { NextResponse } from 'next/server'

export const DELETE = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const cartId = searchParams.get('cartId')

    if (!cartId) {
      return NextResponse.json(
        { message: 'cartId must be provided.' },
        { status: 400 }
      )
    }

    await prisma.cartItems.deleteMany({
      where: {
        cartId: Number(cartId),
      },
    })

    return NextResponse.json({ status: 'success' }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error clearing the cart', err: err },
      { status: 500 }
    )
  }
}
