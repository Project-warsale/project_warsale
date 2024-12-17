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
    })

    if (cartExists) {
      return NextResponse.json({ cart: cartExists }, { status: 200 })
    } else {
      const cart = await prisma.cart.create({
        data: {
          userId: user.id,
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
