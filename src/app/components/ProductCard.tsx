import React from 'react'

export const ProductCard = ({product, addToCart}:any) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-cover sm:h-60 md:h-72' />
        <div className='p-4'>
            <h1 className='text-xl font-semibold text-gray-800 sm:text-2xl'>{product.name}</h1>
            <p className='text-gray-600 sm:text-lg'>{product.description}</p>
            <div className='mt-4 flex justify-between items-center'>
                <span className='texr-lg font-bold text-green-500 sm:text-xl'>${product.price}</span>
                <button 
                onClick={()=> addToCart(product)}
                className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 sm:px-6 sm:py-3'>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard