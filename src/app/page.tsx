import { getProducts } from '@/actions/products/actions'
import ProductCard from '@/components/products/productCard'

const Home = async () => {
  const products = await getProducts()

  return (
    <div className='min-h-screen w-full flex flex-col items-center mt-12'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-bold'>Allprepare</h2>
        <p className='text-lg text-[#969696]'>Our popular products</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full px-5 mt-5 gap-6'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
