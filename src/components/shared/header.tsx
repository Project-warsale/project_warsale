'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { LuHeadset } from 'react-icons/lu'
import Auth from './auth'
import Search from './search'
import BottomHeader from './bottomHeader'
import CartIcon from './cartIcon'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  if (pathname === '/order') {
    return <></>
  }

  return (
    <>
      <header className='w-full flex items-center justify-between gap-5 px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
        <Link href='/' className='min-w-[100px]'>
          <Image
            src='/logo.png'
            alt='logo'
            width={100}
            height={100}
            className='object-contain max-lg:!w-[80px] max-lg:!h-[80px]'
          />
        </Link>
        <div className='max-lg:hidden w-full'>
          <Search />
        </div>
        <div className='flex items-center gap-6'>
          <Link href='/customer-services' className='flex items-center gap-5'>
            <div className='flex items-center gap-3 w-full text-[#0A64B2] font-bold text-[15px] hover:opacity-80 transition duration-300'>
              <span className='whitespace-nowrap max-sm:hidden'>
                Customer Service
              </span>
              <FaArrowRight className='text-lg max-sm:hidden' />
              <LuHeadset className='text-2xl max-lg:text-xl text-[#0c2e4d]' />
            </div>
          </Link>
          <CartIcon />
          <Auth />
        </div>
      </header>
      <div className='max-lg:block hidden px-5 w-full'>
        <Search />
      </div>
      <BottomHeader />
    </>
  )
}

export default Header
