import Link from 'next/link'
import { IconType } from 'react-icons/lib'

interface ServiceCardProps {
  title: string
  description: string
  Icon: IconType
  href: string
}

const ServiceCard = ({ title, description, Icon, href }: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className='py-5 px-10 rounded-[5px] flex flex-col items-start gap-3 justify-center h-[180px] shadow-md hover:shadow-lg transition-all ease-linear w-full'
    >
      <Icon className='text-theme text-xl' />
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='text-sm text-[#868686]'>{description}</p>
    </Link>
  )
}

export default ServiceCard
