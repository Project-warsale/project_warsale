'use client'

import { AppContext } from '@/context/contextProvider'
import { cn } from '@/lib/utils'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'
import CartItem from '../products/cartItem'

const Cart = () => {
  const { cartOpen, cart, setCartOpen } = useContext(AppContext)
  return (
    <div
      className={cn(
        'w-[450px] fixed right-0 top-0 transition-all duration-500 h-screen shadow-lg bg-white z-[999]',
        cartOpen ? 'translate-x-0' : 'translate-x-[500px]'
      )}
    >
      {!cart || cart.cartItems.length === 0 ? (
        <div>empty</div>
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
          <div className='flex flex-col items-start w-full h-[70vh] overflow-auto'>
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
        </div>
      )}
    </div>
  )
}

export default Cart
