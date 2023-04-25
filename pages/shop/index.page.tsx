import React from 'react'
import { PageProps } from '../../renderer/types'
import { ProductsGrid, ProductsTitle } from './ProductsGrid'
export { Page }

function Page(pageProps: PageProps) {
  const { products } = pageProps;
  return (
    <>
       <ProductsGrid products={products || []} />
    </>
  )
}
