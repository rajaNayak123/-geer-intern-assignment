"use client"

import { useState, useEffect, useCallback } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"
import SearchFilter from "@/components/search-filter"
import AddProductForm from "@/components/add-product-form"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Debounce search term to avoid too many API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const categories = ["Electronics", "Appliances", "Fitness", "Footwear"]

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()

      if (debouncedSearchTerm.trim()) {
        params.append("search", debouncedSearchTerm.trim())
      }
      if (selectedCategory !== "all") {
        params.append("category", selectedCategory)
      }

      const url = `/api/products${params.toString() ? `?${params.toString()}` : ""}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setProducts(result.data || [])
        setError(null)
      } else {
        setError(result.error || "Failed to fetch products")
        setProducts([])
      }
    } catch (err) {
      console.error("Fetch error:", err)
      setError("Failed to fetch products")
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [debouncedSearchTerm, selectedCategory])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleSearch = (search: string) => {
    setSearchTerm(search)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleProductAdded = () => {
    fetchProducts()
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
          <button onClick={fetchProducts} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-gray-600">Discover our amazing collection of products</p>
        </div>
        <AddProductForm onProductAdded={handleProductAdded} categories={categories} />
      </div>

      <SearchFilter
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        currentSearch={searchTerm}
        currentCategory={selectedCategory}
      />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-600">
            {searchTerm || selectedCategory !== "all"
              ? "Try adjusting your search or filter criteria"
              : "No products available at the moment"}
          </p>
          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing {products.length} product{products.length !== 1 ? "s" : ""}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
