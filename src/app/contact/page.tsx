'use client'

import ContactForm from '@/components/contact/form'

const ContactPage = () => {
  return (
    <div className='min-h-screen w-full px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 flex flex-col items-start gap-7 mt-10'>
      <h2 className='text-5xl font-bold'>Contact Us</h2>
      <div className='w-full flex items-start gap-5 max-lg:flex-col'>
        <div className='h-full w-full p-5 border border-black/50 rounded-[10px] flex flex-col items-start gap-4'>
          <h3 className='text-[26px] font-semibold'>Send us a message</h3>
          <p className='text-base text-zinc-700'>
            Do you have a question or comment? We are here for you! Call us or
            fill in the contact form below.
          </p>
          <ContactForm />
        </div>
        <div className='w-full p-5 rounded-[10px] border border-black/50 flex flex-col items-start gap-3'>
          <h3>Address details</h3>
          <span className=''>
            <strong>Allprepare BV</strong> Laan Corpus Den Hoorn 108 9728 JR
            Groningen the Netherlands
          </span>
          <div className='w-full flex flex-col items-start mt-14 gap-4'>
            <div className='flex flex-col items-start gap-1'>
              <span>
                T: +31 85 016 3024 <span className='text-sm'>09:00-17:00</span>
              </span>
              <span>
                E: info{' '}
                <span className='text-[15px] text-zinc-700'>
                  @all prepare.com
                </span>
              </span>
            </div>
            <div className='flex flex-col items-start gap-1'>
              <span>Chamber of Commerce: 87537346</span>
              <span>VAT: NL864323001B01</span>
              <span>IBAN: NL14INGB0709616945</span>
              <span>BIC: INGBNL2A</span>
            </div>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <span className='font-semibold'>EPR</span>
            <span>DE1890045666417</span>
            <span>FR263854_01UVLF</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
