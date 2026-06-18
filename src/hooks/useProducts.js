import { useCallback, useEffect, useMemo, useState } from "react"
import { getProducts } from "../services/api"

export function useProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchInput, setSearchInput] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")

    const handleChange = useCallback((e) => {
        setSearchInput(e.target.value)
    })
    const handleCategory= useCallback((cat)=> {
        setActiveCategory(cat)
    })
  const categories = useMemo(()=>{
   const cats= [...new Set(products.map((p) => p.category))]
   return cats
  },[products])

    const filteredProducts =useMemo(()=>{
       return  products?.filter((product) => {
        const searchResult = product.title.toLowerCase()
            .includes(searchInput.toLowerCase())
        const categoryResult = activeCategory == "all" || product.category == activeCategory
return searchResult && categoryResult
    })
  
    },[products,activeCategory,searchInput])


    async function fetchProducts() {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            setError(error)
            console.log(error);

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return {
        filteredProducts, loading, error,
        handleChange, searchInput,
        categories, handleCategory,
        activeCategory
    }
}