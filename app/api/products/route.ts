import { type NextRequest, NextResponse } from "next/server"
import { getAllProducts, addProduct } from "@/lib/products-data"
import type { ApiResponse, Product } from "@/lib/types"

// GET /api/products - Return list of products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")?.trim()
    const category = searchParams.get("category")?.trim()

    let products = getAllProducts()

    // Filter by search term (case-insensitive)
    if (search && search.length > 0) {
      const searchLower = search.toLowerCase()
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower),
      )
    }

    // Filter by category
    if (category && category !== "all" && category.length > 0) {
      products = products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    // Sort by creation date (newest first)
    products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    const response: ApiResponse<Product[]> = {
      success: true,
      data: products,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("API Error:", error)
    const response: ApiResponse<Product[]> = {
      success: false,
      error: "Failed to fetch products",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

// POST /api/products - Add a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, price, imageUrl, category, description } = body

    // Validate required fields
    if (!name || !price || !imageUrl) {
      const response: ApiResponse<Product> = {
        success: false,
        error: "Missing required fields: name, price, imageUrl",
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Validate price is a valid number
    const parsedPrice = Number.parseFloat(price)
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      const response: ApiResponse<Product> = {
        success: false,
        error: "Price must be a valid positive number",
      }
      return NextResponse.json(response, { status: 400 })
    }

    const newProduct = addProduct({
      name: name.trim(),
      price: parsedPrice,
      imageUrl: imageUrl.trim(),
      category: category?.trim() || "Uncategorized",
      description: description?.trim() || "",
    })

    const response: ApiResponse<Product> = {
      success: true,
      data: newProduct,
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("API Error:", error)
    const response: ApiResponse<Product> = {
      success: false,
      error: "Failed to create product",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
