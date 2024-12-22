import stripe from '@/lib/stripe'
import { formatPrice } from '@/lib/utils'
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
          description: `(Includes ${formatPrice(
            (item.product.discountedPrice ?? item.product.price) *
              0.21 *
              item.quantity
          )} VAT)`,
        },
        unit_amount: (item.product.discountedPrice ?? item.product.price) * 121,
      },
      quantity: item.quantity,
    }))

    const origin = req.headers.get('origin')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal', 'sofort', 'paypal'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/order?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      shipping_address_collection: {
        allowed_countries: ['NL', 'BE'],
      },
      custom_fields: [
        {
          key: 'house_number',
          label: {
            type: 'custom',
            custom: 'House Number',
          },
          type: 'text',
          optional: false,
        },
      ],
    })

    return NextResponse.json({ id: session.id })
  } catch (err) {
    return NextResponse.json(
      { message: 'Couldnt create a checkout session: ', err: err },
      { status: 500 }
    )
  }
}
