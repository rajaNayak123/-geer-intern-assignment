import Link from "next/link"
import { ArrowRight, ShoppingBag, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Product Store</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing products at great prices. Browse our collection of electronics, appliances, fitness gear, and
          more.
        </p>
        <Link href="/products">
          <Button size="lg" className="text-lg px-8 py-3">
            Browse Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Browse Products</h3>
            <p className="text-gray-600">Explore our wide range of products across multiple categories</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
            <p className="text-gray-600">Find exactly what you're looking for with our search and filter options</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Plus className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Add Products</h3>
            <p className="text-gray-600">Easily add new products to expand our collection</p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start shopping?</h2>
        <p className="text-lg text-gray-600 mb-6">Check out our products page to see what's available</p>
        <Link href="/products">
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
