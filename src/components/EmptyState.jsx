import React from 'react'

const EmptyState = () => {
  return (
    <div className="text-center py-12 min-h-120 flex justify-center items-center w-full">
      <div>
        <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    </div>
  )
}

export default EmptyState
