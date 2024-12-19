import { getProducts } from '@/actions/products/actions'
import ProductCard from '@/components/products/productCard'

const Products = async () => {
  const products = await getProducts()
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-5 lg:grid-cols-3 2xl:grid-cols-4 px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          discontedPrice={product.discountedPrice}
          image={product.images[0]}
        />
      ))}
    </div>
  )
}

export default Products
