'use client'

import { service } from '../../data/index'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
  href: string
  label: string
}

const Footer = () => {
  const pathname = usePathname()
  if (pathname === '/order') {
    return <></>
  }
  return (
    <footer className='w-full flex flex-col gap-3 items-center bg-[#FBFAF8] pt-6 mt-10 px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <div className='w-full flex items-center justify-between'>
        <Image src='/logo.png' alt='logo' width={100} height={100} />
        <FooterColumn title='Service' items={service} />
      </div>

      <FooterBottom />
    </footer>
  )
}

const FooterColumn: React.FC<{ title: string; items: MenuItem[] }> = ({
  title,
  items,
}) => (
  <div className='flex flex-col items-start gap-3'>
    <h2 className='text-lg font-semibold'>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className='underline hover:opacity-80 transition-all duration-100 ease-linear'
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const FooterBottom = () => (
  <div className=''>
    <div className='text-center'>
      <div className='payment-logo py-4 flex flex-wrap items-center justify-center space-x-6 lg:space-x-8'>
        <Image
          className='cmsb99-my-2'
          src={'/ideal-logo.svg'}
          alt='iDEAL'
          width={25}
          height={22}
        />
        <Image
          className='cmsb99-my-2'
          src={'/mastercard-logo.svg'}
          alt='MasterCard'
          width={33}
          height={26}
        />
        <Image
          className='cmsb99-my-2'
          src={'/visa-logo.svg'}
          alt='Visa'
          width={55}
          height={18}
        />
        <Image
          className='cmsb99-my-2'
          src={'/sofort-logo.svg'}
          alt='Immediately'
          width={37}
          height={24}
        />
        <Image
          className='cmsb99-my-2'
          src={'/paypal-logo.svg'}
          alt='Paypal'
          width={90}
          height={22}
        />
        <Image
          className='cmsb99-my-2'
          src={'/apple_pay-logo.svg'}
          alt='Apple Pay'
          width={54}
          height={22}
        />
      </div>
      <div className='text-sm w-full pb-6'>
        Customer rating <strong>9/10 - 1,946</strong> reviews
      </div>
      <div className='text-sm w-full pt-2 mb-4'>Safekit ©2024 </div>
    </div>
  </div>
)

export default Footer
