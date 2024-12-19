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
import { Metadata } from 'next'

interface MetaDataProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const id = (await params).id

  const product = await getProductById(id)

  if (!product) return {}

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [...product.images],
    },
  }
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const product: any | null = await getProductById(id)

  if (!product) return notFound()

  return (
    <div className='min-h-screen px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-6 w-full flex flex-col items-start gap-10'>
      <div className='w-full flex items-center gap-3 max-lg:flex-col'>
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
        <div className='w-full flex flex-col items-start gap-2.5 ml-16 max-lg:ml-0'>
          <h2 className='text-3xl font-semibold'>{product.title}</h2>
          <div className='text-lg font-semibold'>
            {product.discountedPrice ? (
              <div className='w-full flex items-center gap-5'>
                <div className='relative w-fit'>
                  {formatPrice(product.price)}
                  <div className='absolute w-full h-[2px] bg-zinc-600 top-3' />
                </div>
                {formatPrice(product.discountedPrice)}
              </div>
            ) : (
              formatPrice(product.price)
            )}
          </div>
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
