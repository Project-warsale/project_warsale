import prisma from '@/db/prisma'
import { NextResponse } from 'next/server'
import { authMiddleware } from '../../middleware'

export const DELETE = async (req: Request) => {
  const matches = await authMiddleware(req)
  if (!matches) {
    return NextResponse.json({ message: 'Access denied' }, { status: 403 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      const deletedProducts = await prisma.product.deleteMany()
      return NextResponse.json({ deletedProducts }, { status: 200 })
    } else {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: id,
        },
      })

      return NextResponse.json({ deletedProduct }, { status: 200 })
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Couldnt deleted the product.', err: err },
      { status: 500 }
    )
  }
}
