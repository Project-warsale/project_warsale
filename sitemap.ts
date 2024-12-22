import { getProducts } from '@/actions/products/actions'
import { pages } from '@/data/index'

export default async function sitemap() {
  const url = process.env.NEXT_PUBLIC_URL
  const products = await getProducts()
  const sitemapProducts = products.map((product) => {
    return {
      url: `${url}/products/${product.id}`,
      lastModified: new Date(),
    }
  })
  const sitemapPages = pages.map((page) => {
    return {
      url: `${url}${page.href}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: url,
      lastModified: new Date(),
    },
    ...sitemapProducts,
    ...sitemapPages,
  ]
}
