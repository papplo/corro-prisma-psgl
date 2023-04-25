import React from 'react'
import { PageProps } from '../../renderer/types'
import { ProductsGrid } from './ProductsGrid'
export { Page }

function Page(pageProps: PageProps) {
  const { products } = pageProps;
  return (
    <div className='flex'>
       <ProductsGrid products={products || []} />
    </div>
  )
}
