"use client"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface SearchFilterProps {
  onSearch: (search: string) => void
  onCategoryChange: (category: string) => void
  categories: string[]
  currentSearch: string
  currentCategory: string
}

export default function SearchFilter({
  onSearch,
  onCategoryChange,
  categories,
  currentSearch,
  currentCategory,
}: SearchFilterProps) {
  const handleSearchChange = (value: string) => {
    onSearch(value)
  }

  const handleClearSearch = () => {
    onSearch("")
  }

  const handleCategoryChange = (value: string) => {
    onCategoryChange(value)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products by name or description..."
          value={currentSearch}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {currentSearch && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Select value={currentCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category.toLowerCase()}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
