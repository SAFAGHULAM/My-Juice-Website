import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, addToCart }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product: any) => {
        return <ProductCard key={product.id} product={product} addToCart={addToCart}/>;  // Add return here
      })}
    </div>
  );
};

export default ProductList