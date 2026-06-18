import React from 'react'
import { useProducts } from '../hooks/useProducts'
const SerachBar = ({searchInput,handleChange}) => {

  return (
    <div className='flex flex-col gap-5 items-center md:flex-row '>
      <p className='text-blue-600 text-lg' >Search About Product</p>
      <input type="search" onChange={handleChange}
      value={searchInput}
      name='search'
      className='block px-4 py-1 border border-blue-500 rounded-xl focus:border-none ring-0 outline-blue-600 ' 
      placeholder='Search Here'/>
    </div>
    
  )
}

export default SerachBar
