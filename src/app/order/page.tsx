import { retrieveSession } from '@/actions/order/action'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IoIosClose } from 'react-icons/io'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import prisma from '@/db/prisma'

const OrderPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>
}) => {
  const { session_id } = await searchParams

  if (!session_id) return notFound()

  let session = null

  session = await retrieveSession(session_id)

  if (!session) return notFound()

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    return notFound()
  }

  const cart = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      cartItems: true,
    },
  })

  if (!cart) {
    return notFound()
  }

  if (cart.cartItems.length > 0) {
    await prisma.cartItems.deleteMany({
      where: {
        cartId: cart.id,
      },
    })
  }

  const { amount_total, payment_intent, customer_details, line_items } = session

  return (
    <div className='w-full flex items-center justify-center flex-col gap-5 mt-32'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-semibold'>Your Order</h2>
        {payment_intent && (
          <span className='flex items-center gap-3'>
            Order id:{' '}
            <span className='text-zinc-700 font-semibold'>
              {payment_intent?.toString()}
            </span>
          </span>
        )}
      </div>
      <div className='flex flex-col items-start rounded-[5px] border w-[500px] max-md:w-[400px] max-sm:w-[375px]'>
        <div className='flex flex-col items-start w-full'>
          {line_items?.data &&
            line_items.data.map((item) => {
              return (
                <div
                  key={item.id}
                  className='flex items-center justify-between py-3 border-b px-4 w-full'
                >
                  <h3 className='text-sm text-zinc-700'>{item.description}</h3>
                  <span className='flex items-center gap-2'>
                    <IoIosClose className='text-lg text-zinc-700' />
                    <span className='text-sm text-zinc-700'>
                      {item.quantity}
                    </span>
                  </span>
                  <h3>{formatPrice(item.amount_total / 100)}</h3>
                </div>
              )
            })}
        </div>
        <div className='flex flex-col items-start gap-3 px-4 py-3 border-b w-full'>
          <h3 className='font-medium'>Billing address</h3>
          <div className='flex flex-col items-start gap-2.5'>
            <span className='flex items-center gap-2 text-sm'>
              Country code:
              <span className='text-zinc-700'>
                {' '}
                {customer_details?.address?.country}
              </span>
            </span>
            <span className='flex items-center gap-2 text-sm'>
              City:
              <span className='text-zinc-700'>
                {' '}
                {customer_details?.address?.city}
              </span>
            </span>
            <span className='flex items-center gap-2 text-sm'>
              Street:
              <span className='text-zinc-700'>
                {' '}
                {customer_details?.address?.line1}
              </span>
            </span>
            <span className='flex items-center gap-2 text-sm'>
              Postal code:
              <span className='text-zinc-700'>
                {' '}
                {customer_details?.address?.postal_code}
              </span>
            </span>
          </div>
        </div>
        <div className='w-full flex items-center justify-between px-4 py-3'>
          <h3 className='text-2xl font-semibold'>Total:</h3>
          <h3>
            {formatPrice(amount_total! / 100)}{' '}
            <span className='text-sm text-zinc-700'>(VAT included)</span>
          </h3>
        </div>
        <div className='w-full py-3 flex items-center justify-center px-4'>
          <Link
            href='/'
            className='w-full text-center py-3 text-zinc-700 border border-zinc-700'
          >
            To Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
