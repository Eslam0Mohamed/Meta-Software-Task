import React from 'react'
import Navbar from './Navbar' 
import Footer from './Footer'
import Products from './Products'

const Layout = () => {
  return (
    <>
          <div className='bg-gray-100 min-h-screen'>
      <Navbar></Navbar>
      <div className="container mx-auto w-10/12">
  
<Products></Products>
     </div>
<Footer></Footer> 
    </div>
    </>
  )
}

export default Layout
