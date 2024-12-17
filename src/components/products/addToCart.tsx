'use client'
import { ChangeEvent, useState, useContext } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { LuPlus, LuMinus } from 'react-icons/lu'
import { FiShoppingCart } from 'react-icons/fi'
import { PiPackageLight } from 'react-icons/pi'
import { TbBus } from 'react-icons/tb'
import { SlTrophy } from 'react-icons/sl'
import { TbWallet } from 'react-icons/tb'
import { AppContext } from '@/context/contextProvider'
import axios from 'axios'
import { Product } from '@prisma/client'
import { toast } from 'sonner'
import { updateProductQty } from '@/services/cart'

const AddToCart = ({ product }: { product: Product }) => {
  const { cart, setCart, setCartOpen } = useContext(AppContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [qty, setQty] = useState(1)

  const updateCartClient = (newQty: number) => {
    if (cart) {
      const updatedCartItems = cart.cartItems.map((productItem) => {
        if (productItem.productId === product.id) {
          return { ...productItem, quantity: newQty }
        }
        return productItem
      })

      setCart({
        ...cart,
        cartItems: updatedCartItems,
      })
    }
  }

  const incrementQty = () => {
    if (qty >= 10) {
      return
    }
    setQty((prev) => prev + 1)
  }

  const decrementQty = () => {
    if (qty <= 1) {
      return
    }
    setQty((prev) => prev - 1)
  }

  const addToCart = async (productId: string) => {
    if (!cart) {
      return toast.error('There was an error on our end')
    }
    setLoading(true)
    const alreadyInCart = cart?.cartItems.find((cartItem) => {
      return cartItem.productId === productId
    })
    if (alreadyInCart) {
      if (alreadyInCart.quantity + qty > 10) {
        setLoading(false)
        return toast.error(
          'The requested qty exceeds the maximum qty allowed in shopping cart.'
        )
      } else {
        const targetCartItem = cart.cartItems.find(
          (item) => item.productId === product.id
        )
        if (targetCartItem) {
          await updateProductQty(
            targetCartItem.id,
            qty + targetCartItem.quantity
          )
          updateCartClient(qty + targetCartItem.quantity)
          setLoading(false)
          setCartOpen(true)
        }
        return
      }
    }

    const { data } = await axios.post('/api/cart', {
      productId: productId,
      cartId: cart.id,
      quantity: qty,
    })
    setLoading(false)
    setCartOpen(true)

    if (data.cartItem) {
      setCart((prev) => ({
        ...prev!,
        cartItems: [...cart.cartItems, data.cartItem],
      }))
    }
  }

  return (
    <div className='rounded-xl p-4 flex flex-col items-start gap-3.5 border w-full'>
      <span className='flex items-center gap-2 text-[#657E16]'>
        <FaCheckCircle />
        Delivery time: 5-7 working days
      </span>
      <div className='flex items-center gap-5'>
        <div className='flex items-center h-[45px]'>
          <button
            onClick={decrementQty}
            className='h-full w-[50px] flex items-center justify-center bg-[#FBFAF8] rounded-l-[5px] border border-r-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'
          >
            <LuMinus />
          </button>
          <input
            type='text'
            value={qty}
            className='outline-none bg-transparent text-center transition-all ease-linear h-full border w-[60px] focus:border-theme'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (!Number.isInteger(Number(e.target.value))) return
              if (Number(e.target.value) > 5) {
                return setQty(10)
              } else if (Number(e.target.value) < 1) {
                return setQty(1)
              }
              setQty(Number(e.target.value))
            }}
          />
          <button
            onClick={incrementQty}
            className='h-full w-[50px] flex items-center justify-center bg-[#FBFAF8] rounded-r-[5px] border border-l-0 hover:bg-[#e9e9e9] transition-all duration-200 ease-linear'
          >
            <LuPlus />
          </button>
        </div>
        <button
          disabled={loading || !cart}
          onClick={() => addToCart(product.id)}
          className='rounded-full px-5 py-1 bg-theme h-[42px] disabled:opacity-60 text-white flex items-center gap-2 hover:bg-theme/80 transition-all duration-200 ease-linear'
        >
          {!loading ? (
            <div className='flex items-center'>
              <span>In shopping cart</span>
              <FiShoppingCart className='text-xl' />
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              Loading <span className='loader scale-[35%]'></span>
            </div>
          )}
        </button>
      </div>

      <div className='w-full flex flex-col items-start gap-5'>
        <div className='flex items-center gap-4'>
          <PiPackageLight className='text-xl' />
          <span className='text-sm text-zinc-700'>Fast Delivery</span>
        </div>
        <div className='flex items-center gap-4'>
          <TbBus className='text-xl' />
          <span className='text-sm text-zinc-700'>
            Free returns within 14 days
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <SlTrophy className='text-xl' />
          <span className='text-sm text-zinc-700 flex items-center gap-3'>
            Customer rating <span className='font-bold'>9/10 - 1,946 </span>
            reviews
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <TbWallet className='text-xl' />
          <span className='text-sm text-zinc-700'>
            More than 10,000 customers
          </span>
        </div>
      </div>
    </div>
  )
}

export default AddToCart
