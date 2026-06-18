import React from 'react'

const Error = ({ message }) => {
  return (
    <div>
        <div className='min-h-screen flex items-center justify-center flex-col'>
          <h2 className='text-xl font-semibold text-gray-700'>Something went wrong</h2>
          <h2 className='text-xl font-semibold text-red-500'>{message}</h2>
        </div>
    </div>
  )
}

export default Error
