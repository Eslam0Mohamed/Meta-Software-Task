import ProductCard from "./ProductCard"
import { useProducts } from "../hooks/useProducts"
import Loading from "./Loading"
import Error from "./Error"
import SerachBar from "./SerachBar"
import CategoryTabs from "./CategoryTabs"
import EmptyState from "./EmptyState"

const Products = () => {
  const { filteredProducts,
     loading, error ,handleChange,
     searchInput,categories
    ,activeCategory,handleCategory} = useProducts()
console.log(categories);
console.log(activeCategory);

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    return <Error message={error.message}></Error>
  }
  return (
    <>
      <div className='my-10 flex flex-col md:flex-row items-center justify-between'>
        <SerachBar handleChange={handleChange} searchInput={searchInput}></SerachBar>
        <CategoryTabs categories={categories} handleCategory={handleCategory} activeCategory={activeCategory}></CategoryTabs>
      </div>
{
  filteredProducts?.length == 0 ? (<EmptyState></EmptyState>):<>
  <div className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          (
          filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          )))
        }

      </div>
  
  </>

}
      
    </>
  )
}

export default Products
