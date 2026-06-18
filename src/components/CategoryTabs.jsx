import React from 'react'

const CategoryTabs = ({ categories, handleCategory, activeCategory }) => {
  const CATEGORIES = {
    all: 'All',
    "men's clothing": "Men's",
    "women's clothing": "Women's",
    electronics: 'Electronics',
    jewelery: 'Jewellery',
  }
  const allCategories = ["all", ...categories]
  return (
    <div className='flex items-center justify-center gap-3 my-5 md:my-0 w-full md:w-auto flex-wrap md:flex-nowrap'>
      {
        allCategories.map((cat) => {
          return <button key={cat} onClick={() => { handleCategory(cat) }}
            className={`bg-blue-400  rounded-md
     text-white px-3 font-semibold cursor-pointer 
     ${cat === activeCategory ? "bg-blue-700" : ""}`}>
            {CATEGORIES[cat]}
          </button>
        })
      }
    </div>
  )
}

export default CategoryTabs
