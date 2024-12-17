/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { formatPrice } from '@/lib/utils'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '@/context/contextProvider'
import { removeFromCart, updateProductQty } from '@/services/cart'
import { toast } from 'sonner'

interface CartItemProps {
  id: string
  price: number
  qty: number
  image: string
  title: string
  itemId: number
}

const CartItem = ({ price, qty, image, title, id, itemId }: CartItemProps) => {
  const { cart, setCart } = useContext(AppContext)
  const [quantity, setQuantity] = useState<number>(qty)

  useEffect(() => {
    const updateCartClient = (newQty: number) => {
      if (cart) {
        const cartInstance = { ...cart }
        const targetItem = cartInstance.cartItems.find((product) => {
          return product.productId === id
        })
        if (targetItem) {
          targetItem.quantity = newQty
        }
        setCart(cartInstance)
      }
    }

    updateCartClient(quantity)
  }, [quantity])

  useEffect(() => {
    setQuantity(qty)
  }, [qty])

  const incrementQty = () => {
    if (quantity >= 10) return
    setQuantity((prev) => {
      updateProductQty(itemId, prev + 1)
      return prev + 1
    })
  }

  const decrementQty = () => {
    if (quantity <= 1) return
    setQuantity((prev) => {
      updateProductQty(itemId, prev - 1)
      return prev - 1
    })
  }

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
      <button
        onClick={async () => {
          const data = await removeFromCart(itemId)
          if (!cart) return
          setCart((prev) => ({
            ...prev!,
            cartItems: prev!.cartItems.filter((item) => {
              return item.id !== itemId
            }),
          }))
          if (data.deletedCartItem) {
            toast.success(
              `${data.deletedCartItem.product.title} has been removed from the cart.`
            )
          }
        }}
        className='absolute right-3 top-2'
      >
        <IoIosClose className='text-[21px] text-gray-600' />
      </button>
      <div className='w-full flex items-center justify-between'>
        <span className='text-[15px] font-semibold'>{formatPrice(price)}</span>
        <div className='flex items-center h-[35px]'>
          <button
            onClick={decrementQty}
            className='h-full w-[35px] flex items-center justify-center bg-[#FBFAF8] rounded-l-[5px] border border-r-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'
          >
            <LuMinus />
          </button>
          <input
            type='text'
            value={quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!Number.isInteger(Number(e.target.value))) return
              if (Number(e.target.value) < 1) {
                return
              } else if (Number(e.target.value) > 10) {
                updateProductQty(itemId, 10)
                return setQuantity(10)
              }
              setQuantity(Number(e.target.value))
              updateProductQty(itemId, quantity)
            }}
            className='outline-none bg-transparent text-center transition-all ease-linear h-full border w-[40px] focus:border-theme'
          />
          <button
            onClick={incrementQty}
            className='h-full w-[35px] flex items-center justify-center bg-[#FBFAF8] rounded-r-[5px] border border-l-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'
          >
            <LuPlus />
          </button>
        </div>
        <span className='text-sm font-semibold w-[80px] text-end'>
          {formatPrice(price * qty)}
        </span>
      </div>
    </div>
  )
}

export default CartItem
