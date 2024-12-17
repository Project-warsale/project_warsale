import stripe from '@/lib/stripe'
import { CartItemType } from '@/types'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const { cartItems }: { cartItems: CartItemType[] } = body

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.product.title,
          images: [item.product.images[0]],
        },
        unit_amount: item.product.price * 100,
      },
      quantity: item.quantity,
    }))

    const origin = req.headers.get('origin')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/order?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      shipping_address_collection: {
        allowed_countries: ['GE', 'DE', 'GB', 'CA', 'US', 'AU'],
      },
    })

    return NextResponse.json({ id: session.id })
  } catch (err) {
    return NextResponse.json(
      { message: 'Couldnt create a checkout session: ', err: err },
      { status: 500 }
    )
  }
}
