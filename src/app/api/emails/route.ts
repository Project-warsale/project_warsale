import { Resend } from 'resend'
import Welcome from '@/emails/Welcome'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async () => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lashagiorgi420@gmail.com',
    subject: 'hello world',
    react: Welcome(),
  })

  return NextResponse.json({ message: 'email sent' }, { status: 200 })
}
