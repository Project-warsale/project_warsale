'use client'

import ContactForm from '@/components/contact/form'

const ContactPage = () => {
  return (
    <div className='min-h-screen w-full px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 flex flex-col items-start gap-7 mt-10 max-lg:items-center'>
      <h2 className='text-5xl font-bold'>Neem contact met ons op</h2>
      <div className='w-full flex items-start gap-5 max-lg:flex-col'>
        <div className='h-full w-full p-5 border border-black/50 rounded-[10px] flex flex-col items-start gap-4'>
          <h3 className='text-[26px] font-semibold'>Stuur ons een bericht</h3>
          <p className='text-base text-zinc-700'>
            Heeft u een vraag of opmerking? Wij zijn er voor u! Bel ons of vul
            onderstaand contactformulier in.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
