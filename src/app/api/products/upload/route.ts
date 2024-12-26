import { NextResponse } from 'next/server'
import { Product as ProductType, Specifications } from '@prisma/client'
import prisma from '@/db/prisma'
import { validateProductsArray } from '../../validators/products'
import { authMiddleware } from '../../middleware'

interface Product {
  product: ProductType
  specifications: Specifications
}

export const POST = async (req: Request) => {
  try {
    const matches = await authMiddleware(req)
    if (!matches) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 })
    }
    const body = JSON.parse(await req.text())

    const { products }: { products: Product[] } = body

    const { error } = validateProductsArray(products)

    if (error) {
      return NextResponse.json({ error: error }, { status: 400 })
    }

    products.forEach(async (product) => {
      const { title, description, brand, price, images } = product.product
      await prisma.product.create({
        data: {
          title: title,
          description: description,
          brand: brand,
          price: price,
          images: images,
          specifications: {
            create: {
              ...product.specifications,
            },
          },
        },
      })
    })

    return NextResponse.json(
      { message: 'products has been successfully uploaded' },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
