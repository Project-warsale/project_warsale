import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { Contact } from '@/emails/Contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: Request) => {
  try {
    const body = await req.json()

    const { userEmail, username, message, phone } = body

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: userEmail,
      subject: 'hello world',
      react: Contact({
        userFirstName: username,
        message: message,
        phone: phone,
      }),
    })

    return NextResponse.json({ message: 'email sent' }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { messsage: 'Couldnt send a email: ', err: err },
      { status: 500 }
    )
  }
}
