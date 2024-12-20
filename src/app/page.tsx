import { getProducts } from '@/actions/products/actions'
import ProductCard from '@/components/products/productCard'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Home = async () => {
  const products = await getProducts()

  return (
    <div className='min-h-screen w-full flex flex-col items-center mt-12 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-bold'>Safekit</h2>
        <p className='text-lg text-[#969696]'>Our popular products</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full px-5 mt-5 gap-6'>
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
            discontedPrice={product.discountedPrice}
          />
        ))}
      </div>
      <Link
        href='/products'
        className='text-black mt-5 flex items-center gap-2 group'
      >
        <span>View All</span>
        <FiArrowRight className='group-hover:translate-x-1.5 transition-all duration-100 ease-in-out' />{' '}
      </Link>
      <div className='w-full flex flex-col gap-7 mt-20 px-5'>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>
            Allprepare - online shop for Prepping & Emergency supplies
          </h2>
          <p className='text-zinc-600'>
            Allprepare is an online store that focuses on selling products that
            can help in emergency situations and unforeseen circumstances. By
            prepping with our products and tools, you become less dependent on
            third parties in times of disasters, calamities or emergencies. View
            our large assortment of emergency items. In the Netherlands we
            insure almost everything. However, what is hardly thought of are
            situations where our existing basic facilities fail. We assume that
            the supermarkets always have their shelves full, that there is
            running water from the tap, that the roads are always passable and
            that the government will take care of everyone who is having a hard
            time. However, situations can arise where these facilities are not
            available for shorter or longer periods. We are there for people who
            want more certainty for themselves and their family and friends in
            such scenarios. By prepping you create this certainty. Ease your
            mind! We sell, among other things, various sizes of emergency
            rations with long-lasting food with a shelf life of up to 25 years.
            A perfect food insurance. It is also wise to get an emergency
            package at home. We also sell water filters so that you always have
            clean drinking water.
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Filter water</h2>
          <p className='text-zinc-600'>
            Allprepare has a wide range of water filters, available in various
            shapes and sizes to meet your specific needs. Discover the ideal
            filter that suits your preferences. Explore our wide range of water
            filters here
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Emergency rations</h2>
          <p className='text-zinc-600'>
            At Allprepare, you’ll find everything you need in the area of
            ​​emergency rations! Our range, including top brands like MRE-9 ,
            ReadyWise , and Katadyn , offers something for everyone. Whether
            you’re looking for a day’s supply or a year’s supply, we’ve got you
            covered. And with a shelf life of up to 25 years, you can always
            rely on our packages.
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Power supply</h2>
          <p className='text-zinc-600'>
            Finding the right power supply products can be a complex task, given
            the diversity in specifications such as Watt-hour (Wh) capacity.
            Your personal preferences play a crucial role in this choice.
            Discover our power supply solutions, including: - Mobile Solar
            Panels - Solar Generator - Solar Lamps - Generator
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Emergency equipment</h2>
          <p className='text-zinc-600'>
            Allprepare offers a wide selection of emergency gear for survival
            situations. For all your essential survival supplies, Allprepare is
            the right place to go. Discover everything you need for survival
            below Emergency kit - Emergency radio
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
