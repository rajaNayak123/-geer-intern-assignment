import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Product Store</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
