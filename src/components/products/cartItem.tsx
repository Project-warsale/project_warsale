'use client'

import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { formatPrice } from '@/lib/utils'
import { LuMinus, LuPlus } from 'react-icons/lu'

interface CartItemProps {
  id: string
  price: number
  qty: number
  image: string
  title: string
}

const CartItem = ({ price, qty, image, title, id }: CartItemProps) => {
  return (
    <div className='flex flex-col items-start gap-4 py-5 px-5 border-b w-full last:border-none relative'>
      <div className='w-full flex items-start gap-5'>
        <div className='h-[90px] w-[90px] relative'>
          <Image src={image} fill alt='product image' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='font-medium'>{title}</h3>
          <span className='text-sm text-gray-600'>{id}</span>
        </div>
      </div>
      <button className='absolute right-3 top-2'>
        <IoIosClose className='text-[21px] text-gray-600' />
      </button>
      <div className='w-full flex items-center justify-between'>
        <span className='text-[15px] font-semibold'>{formatPrice(price)}</span>
        <div className='flex items-center h-[35px]'>
          <button className='h-full w-[35px] flex items-center justify-center bg-[#FBFAF8] rounded-l-[5px] border border-r-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'>
            <LuMinus />
          </button>
          <input
            type='text'
            value={qty}
            className='outline-none bg-transparent text-center transition-all ease-linear h-full border w-[40px] focus:border-theme'
          />
          <button className='h-full w-[35px] flex items-center justify-center bg-[#FBFAF8] rounded-r-[5px] border border-l-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'>
            <LuPlus />
          </button>
        </div>
        <span className='text-sm font-semibold'>
          {formatPrice(price * qty)}
        </span>
      </div>
    </div>
  )
}

export default CartItem
