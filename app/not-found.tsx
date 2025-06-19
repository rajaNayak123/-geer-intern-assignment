import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Not Found</h2>
      <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
      <Link href="/products">
        <Button>
          <Home className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </Link>
    </div>
  )
}
