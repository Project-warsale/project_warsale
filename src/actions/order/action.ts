import stripe from '@/lib/stripe'

export const retrieveSession = async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items'],
  })
  return session
}
