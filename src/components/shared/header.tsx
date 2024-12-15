import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { LuHeadset } from 'react-icons/lu'
import { FiShoppingCart } from 'react-icons/fi'
import Auth from './auth'
import Search from './search'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between gap-5 px-3 md:px-5 lg:px-20 xl:px-32 2xl:px-56'>
      <Link href='/' className='min-w-[100px]'>
        <Image
          src='/logo.jpg'
          alt='logo'
          width={100}
          height={100}
          className='object-contain'
        />
      </Link>
      <Search />
      <div className='flex items-center gap-6'>
        <Link href='/customer-services' className='flex items-center gap-5'>
          <div className='flex items-center gap-1.5 w-full text-[#0A64B2] font-bold text-[15px] hover:opacity-80 transition duration-300'>
            <span className='whitespace-nowrap'>Customer Service</span>
            <FaArrowRight className='text-lg' />
          </div>
          <LuHeadset className='text-3xl text-[#0c2e4d]' />
        </Link>
        <FiShoppingCart className='text-[22px] cursor-pointer' />
        <Auth />
      </div>
    </header>
  )
}

export default Header
