'use client'

import { AppContext } from '@/context/contextProvider'
import { cn } from '@/lib/utils'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'
import CartItem from '../products/cartItem'
import { formatPrice } from '@/lib/utils'
import { clearCart } from '@/services/cart'
import { toast } from 'sonner'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import Link from 'next/link'

const Cart = () => {
  const { cartOpen, cart, setCart, setCartOpen, total } = useContext(AppContext)
  return (
    <div
      className={cn(
        'w-[450px] fixed right-0 top-0 transition-all duration-500 h-screen shadow-lg bg-white z-[999]',
        cartOpen ? 'translate-x-0' : 'translate-x-[500px]'
      )}
    >
      {!cart || cart.cartItems.length === 0 ? (
        <div className='w-full flex flex-col items-center gap-5'>
          <div className='w-full flex items-center justify-between py-4 px-5 border-b'>
            <h2 className='text-2xl font-bold'>Shopping cart</h2>
            <button
              onClick={() => {
                setCartOpen(false)
              }}
            >
              <IoClose className='text-2xl text-gray-600' />
            </button>
          </div>
          <MdOutlineRemoveShoppingCart className='text-[100px] text-[#dddcdc]' />
          <p className='text-black/80'>Your cart is currently empty.</p>
          <Link
            onClick={() => {
              setCartOpen(false)
            }}
            href='/'
            className='bg-theme text-white px-5 py-2 hover:bg-theme/80 transition-all duration-200 ease-linear'
          >
            Return to shop
          </Link>
        </div>
      ) : (
        <div className='flex flex-col items-start gap-5 h-full'>
          <div className='w-full flex items-center justify-between py-4 px-5 border-b'>
            <h2 className='text-2xl font-bold'>Shopping cart</h2>
            <button
              onClick={() => {
                setCartOpen(false)
              }}
            >
              <IoClose className='text-2xl text-gray-600' />
            </button>
          </div>
          <div className='flex flex-col items-start w-full h-[68vh] overflow-auto'>
            {cart.cartItems.map((item) => {
              return (
                <CartItem
                  id={item.product.id}
                  itemId={item.id}
                  key={item.id}
                  title={item.product.title}
                  image={item.product.images[0]}
                  price={item.product.price}
                  qty={item.quantity}
                />
              )
            })}
          </div>
          <div className='w-full flex flex-col items-start gap-3'>
            <div className='w-full flex items-center justify-between px-5 border-b py-3'>
              <h4 className='text-2xl font-semibold'>Subtotal :</h4>
              <h4>{formatPrice(total)}</h4>
            </div>
            <div className='w-full flex flex-col gap-2 items-start px-5'>
              <button className='w-full text-center py-3.5 bg-theme text-white hover:bg-white border border-theme hover:text-theme transition-all duration-300 ease-linear'>
                Checkout
              </button>

              <button
                onClick={async () => {
                  const response = await clearCart(cart.id)
                  if (response.status) {
                    setCart(null)
                    toast('Cart has been cleared.')
                  }
                }}
                className='w-full text-center py-3.5 text-theme hover:bg-theme bg-transparent transition-all border-theme border hover:text-white duration-200 ease-linear'
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
