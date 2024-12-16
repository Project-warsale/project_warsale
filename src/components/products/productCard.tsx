import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

interface ProductCardProps {
  title: string
  price: number
  image: string
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div className='h-[280px] w-full p-5 flex flex-col items-start gap-1 py-4 rounded-[5px] hover:shadow-lg transition-all duration-200 ease-linear'>
      <div className='relative w-full h-full'>
        <Image
          src={image}
          fill
          className='object-contain'
          alt='product image'
        />
      </div>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <span>{formatPrice(price)}</span>
      <span className='flex items-center gap-2 text-[#3A8323] text-sm font-medium mt-1'>
        <FaCheckCircle />
        Delivery time: 5-7 working days
      </span>
    </div>
  )
}

export default ProductCard
