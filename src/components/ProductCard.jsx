import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-sm rounded-md border border-gray-300 h-full flex flex-col">
      <div className='image'>
        <img src={product.image} alt={product.name} loading='lazy' className='h-72 object-cover'/>
      </div>
      <div className='details p-4'>
        <h2 className='text-lg font-semibold h-16 line-clamp-2'>{product.title}</h2>
        <p className='text-gray-500 line-clamp-2'>{product.description}</p>
        <div className='flex justify-between items-center mt-6'>
          <p className='text-md text-blue-600 font-bold'>{product.price}</p>
          <p className="category bg-blue-400 py-1 px-3 text-white font-semibold rounded-md">{product.category}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-yellow-800'>{product.rating.rate}</p>
          <p className='text-gray-500'>{product.rating.count} Review</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
