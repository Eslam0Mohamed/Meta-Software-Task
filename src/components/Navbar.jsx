import React from 'react'
import Logo from './Logo'
const Navbar = () => {
  return (
    <>
      <nav className='py-2 px-14 flex justify-between items-center bg-white shadow-md'>
        <h1 className='text-3xl font-bold '>Shop Now</h1>
        <Logo size={40}></Logo>
      </nav>
    </>
  )
}

export default Navbar
