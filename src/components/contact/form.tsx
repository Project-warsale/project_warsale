'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [question, setQuestion] = useState<string>('')

  return (
    <form className='w-full flex flex-col items-start gap-7 mt-2'>
      <div className='flex w-full flex-col items-start gap-1'>
        <label htmlFor='name' className='font-semibold text-[15px]'>
          Name <span className='text-red-700'>*</span>
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder='Name'
          className='w-full py-2.5 text-[15px] outline-none border border-black/60 rounded-[5px] px-4 text-zinc-700 placeholder:text-zinc-700'
        />
      </div>
      <div className='flex w-full flex-col items-start gap-1'>
        <label htmlFor='email' className='font-semibold text-[15px]'>
          Email <span className='text-red-700'>*</span>
        </label>
        <input
          id='email'
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder='Email'
          className='w-full py-2.5 text-[15px] outline-none border border-black/60 rounded-[5px] px-4 text-zinc-700 placeholder:text-zinc-700'
        />
      </div>
      <div className='flex w-full flex-col items-start gap-1'>
        <label htmlFor='phone' className='font-semibold text-[15px]'>
          Phone number <span className='text-red-700'>*</span>
        </label>
        <input
          id='phone'
          type='text'
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
          placeholder='Phone number'
          className='w-full py-2.5 outline-none text-[15px] border border-black/60 rounded-[5px] px-4 text-zinc-700 placeholder:text-zinc-700'
        />
      </div>
      <div className='flex w-full flex-col items-start gap-1'>
        <label htmlFor='question' className='font-semibold text-[15px]'>
          What is your question?
        </label>
        <textarea
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value)
          }}
          id='question'
          className='w-full py-2.5 outline-none text-[15px] border border-black/60 rounded-[5px] h-[100px] px-4 text-zinc-700 placeholder:text-zinc-700'
        />
      </div>
      <button className='px-7 py-2.5 rounded-full bg-theme text-white shadow-lg shadow-theme/50 hover:bg-theme/80 hover:shadow-none transition-all duration-200 ease-linear'>
        Send
      </button>
    </form>
  )
}

export default ContactForm
