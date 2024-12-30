'use client'

import { AppContext } from '@/context/contextProvider'
import { cn } from '@/lib/utils'
import { IoClose } from 'react-icons/io5'
import { useContext, useState } from 'react'
import CartItem from '../products/cartItem'
import { formatPrice } from '@/lib/utils'
import { clearCart, createCheckoutSession } from '@/services/cart'
import { toast } from 'sonner'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!)

const Cart = () => {
  const { cartOpen, cart, setCart, setCartOpen, total } = useContext(AppContext)
  const [stripeLoading, setStripeLoading] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'w-[450px] fixed right-0 bottom-0 max-md:w-full transition-all duration-500 h-screen shadow-lg bg-white z-[999]',
        cartOpen
          ? 'translate-x-0'
          : 'translate-x-[500px] max-md:translate-x-[700px]'
      )}
    >
      {!cart || cart.cartItems.length === 0 ? (
        <div className='w-full flex flex-col items-center gap-5'>
          <div className='w-full flex items-center justify-between py-4 px-5 border-b'>
            <h2 className='text-2xl font-bold'>Winkelwagen</h2>
            <button
              onClick={() => {
                setCartOpen(false)
              }}
            >
              <IoClose className='text-2xl text-gray-600' />
            </button>
          </div>
          <MdOutlineRemoveShoppingCart className='text-[100px] text-[#dddcdc]' />
          <p className='text-black/80'>Uw winkelwagen is momenteel leeg.</p>
          <Link
            onClick={() => {
              setCartOpen(false)
            }}
            href='/products'
            className='bg-theme text-white px-5 py-2 hover:bg-theme/80 transition-all duration-200 ease-linear'
          >
            Terug naar de winkel
          </Link>
        </div>
      ) : (
        <div className='flex flex-col items-start gap-5 h-full'>
          <div className='w-full flex items-center justify-between py-4 px-5 border-b'>
            <h2 className='text-2xl font-bold'>Winkelwagen</h2>
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
                  discountedPrice={item.product.discountedPrice}
                  qty={item.quantity}
                />
              )
            })}
          </div>
          <div className='w-full flex flex-col items-start gap-3'>
            <div className='w-full flex items-center justify-between max-sm:flex-col max-xl:justify-start px-5 border-b py-3'>
              <h4 className='text-2xl font-semibold'>Subtotaal :</h4>
              <h4>
                {formatPrice(total + total * 0.21)}
                <span className='text-[15px] text-gray-700'>
                  (inclusief B.T.W. {formatPrice(total * 0.21)})
                </span>
              </h4>
            </div>
            <div className='w-full flex flex-col gap-2 items-start px-5'>
              <button
                disabled={stripeLoading}
                onClick={async () => {
                  setStripeLoading(true)
                  const response = await createCheckoutSession(cart.cartItems)
                  setStripeLoading(false)
                  if (response.id) {
                    const stripe = await stripePromise
                    await stripe?.redirectToCheckout({
                      sessionId: response.id,
                    })
                  } else {
                    toast.error('Something went wrong proccessing the payment')
                  }
                }}
                className='w-full text-center py-3.5 group bg-theme text-white hover:bg-white border border-theme hover:text-theme transition-all duration-300 ease-linear'
              >
                {stripeLoading ? (
                  <span className='flex items-center gap-4 justify-center text-white group-hover:text-theme duration-300 transition-all ease-linear'>
                    Verwerken <span className='loader scale-[40%]'></span>
                  </span>
                ) : (
                  'Uitchecken'
                )}
              </button>

              <button
                onClick={async () => {
                  const response = await clearCart(cart.id)

                  if (response.status) {
                    setCart((prev) => ({
                      ...prev!,
                      cartItems: [],
                    }))
                    toast('Winkelwagen is leeggemaakt.')
                  }
                }}
                className='w-full text-center py-3.5 text-theme hover:bg-theme bg-transparent transition-all border-theme border hover:text-white duration-200 ease-linear'
              >
                Winkelwagen leegmaken
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
