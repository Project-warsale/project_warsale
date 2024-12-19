import { customerServices } from '@/data'
import ServiceCard from '@/components/customer-services/serviceCard'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Services',
  openGraph: {
    title: 'Customer Services',
    description:
      'On this page you will be able to preview customer services we offer.',
  },
}

const CustomerServices = () => {
  return (
    <div className='w-full flex flex-col items-start gap-5 px-3 md:px-5 lg:px-20 xl:px-32 2xl:px-56 mt-7'>
      <h1 className='text-4xl font-bold'>Customer Service</h1>
      <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7'>
        {customerServices.map((service) => (
          <ServiceCard
            title={service.title}
            description={service.description}
            Icon={service.icon}
            href={service.href}
            key={service.href}
          />
        ))}
      </section>
    </div>
  )
}

export default CustomerServices
