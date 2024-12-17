/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductById } from '@/actions/products/actions'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatPrice } from '@/lib/utils'
import AddToCart from '@/components/products/addToCart'
import ProductInformation from '@/components/products/productInformation'

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const product: any | null = await getProductById(id)

  if (!product) return notFound()

  return (
    <div className='min-h-screen px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-6 w-full flex flex-col items-start gap-10'>
      <div className='w-full flex items-center gap-3'>
        <Carousel className='w-full'>
          <CarouselContent className='w-full h-full'>
            {product.images.map((src: string, idx: number) => (
              <CarouselItem key={idx} className='w-full h-[400px]'>
                <div className='w-full h-full relative'>
                  <Image
                    src={src}
                    alt='product slider image'
                    className='object-contain'
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
        <div className='w-full flex flex-col items-start gap-2.5 ml-16'>
          <h2 className='text-3xl font-semibold'>{product.title}</h2>
          <span className='text-lg font-semibold'>
            {formatPrice(product.price)}
          </span>
          <AddToCart product={product} />
        </div>
      </div>
      <ProductInformation
        description={product.description}
        specifications={product.specifications}
        brand={product.brand}
      />
    </div>
  )
}

export default ProductPage
