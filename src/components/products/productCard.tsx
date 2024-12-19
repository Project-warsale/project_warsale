import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  discontedPrice: number | null
}

const ProductCard = ({
  title,
  price,
  image,
  id,
  discontedPrice,
}: ProductCardProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className='h-[280px] w-full p-5 flex flex-col items-start gap-1 py-4 rounded-[5px] hover:shadow-lg transition-all duration-200 ease-linear'
    >
      <div className='relative w-full h-full'>
        <Image
          src={image}
          fill
          className='object-contain'
          alt='product image'
        />
      </div>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='w-full'>
        {discontedPrice ? (
          <div className='w-full flex justify-between'>
            <div className='relative w-fit'>
              {formatPrice(price)}
              <div className='absolute w-full h-[2px] bg-zinc-600 top-2.5' />
            </div>
            {formatPrice(discontedPrice)}
          </div>
        ) : (
          formatPrice(price)
        )}
      </div>
      <span className='flex items-center gap-2 text-[#3A8323] text-sm font-medium mt-1'>
        <FaCheckCircle />
        Delivery time: 5-7 working days
      </span>
    </Link>
  )
}

export default ProductCard
