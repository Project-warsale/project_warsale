import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const cartId = Number(searchParams.get('cartId'))

    const cartExists = await prisma.cart.findUnique({
      where: {
        id: cartId,
      },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    })

    if (cartExists) {
      return NextResponse.json({ cart: cartExists }, { status: 200 })
    } else {
      const cart = await prisma.cart.create({
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
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
        quantity: quantity > 10 ? 10 : quantity,
      },
      include: {
        product: true,
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

export const PUT = async (req: Request) => {
  try {
    const body = await req.json()

    const { newQty, id } = body

    if (newQty > 10 || newQty < 1) {
      return NextResponse.json(
        { message: 'Invalid qty provided' },
        { status: 400 }
      )
    }

    if (!newQty || !id) {
      return NextResponse.json(
        { message: 'ur missing newQty or id field' },
        { status: 400 }
      )
    }

    const cartItem = await prisma.cartItems.update({
      where: {
        id: id,
      },
      data: {
        quantity: newQty,
      },
    })

    return NextResponse.json({ cartItem }, { status: 201 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error incrementing product', err: err },
      { status: 500 }
    )
  }
}

export const DELETE = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { message: 'Id parameter must be provided' },
        { status: 400 }
      )
    }

    const deletedCartItem = await prisma.cartItems.delete({
      where: {
        id: Number(id),
      },
      include: {
        product: true,
      },
    })

    return NextResponse.json({ deletedCartItem }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error deleting the product', err: err },
      { status: 500 }
    )
  }
}
