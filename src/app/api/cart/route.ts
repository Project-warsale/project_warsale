import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export const GET = async () => {
  try {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) {
      return NextResponse.json(
        { message: 'unauthorized request' },
        { status: 401 }
      )
    }

    const cartExists = await prisma.cart.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        cartItems: true,
      },
    })

    if (cartExists) {
      return NextResponse.json({ cart: cartExists }, { status: 200 })
    } else {
      const cart = await prisma.cart.create({
        data: {
          userId: user.id,
        },
        include: {
          cartItems: true,
        },
      })

      return NextResponse.json({ cart: cart }, { status: 200 })
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Erorr creating user cart', err: err },
      { status: 500 }
    )
  }
}

export const POST = async (req: Request) => {
  try {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user) {
      return NextResponse.json(
        { message: 'Unauthorized request' },
        { status: 401 }
      )
    }

    const body = await req.json()

    const { productId, quantity, cartId } = body

    if (!productId || !quantity || !cartId) {
      return NextResponse.json(
        { message: 'Missing required fields: productId, quantity, or cartId' },
        { status: 400 }
      )
    }

    const cartItem = await prisma.cartItems.create({
      data: {
        cartId: cartId,
        productId: productId,
        quantity: quantity,
      },
    })

    return NextResponse.json({ cartItem: cartItem }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error adding the product', err: err },
      { status: 500 }
    )
  }
}
