import { type NextRequest, NextResponse } from "next/server"
import { getProductById, deleteProduct } from "@/lib/products-data"
import type { ApiResponse, Product } from "@/lib/types"

// GET /api/products/[id] - Get single product
export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const product = getProductById(id)

    if (!product) {
      const response: ApiResponse<Product> = {
        success: false,
        error: "Product not found",
      }
      return NextResponse.json(response, { status: 404 })
    }

    const response: ApiResponse<Product> = {
      success: true,
      data: product,
    }

    return NextResponse.json(response)
  } catch (error) {
    const response: ApiResponse<Product> = {
      success: false,
      error: "Failed to fetch product",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

// DELETE /api/products/[id] - Delete product by ID
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const deleted = deleteProduct(id)

    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Product not found",
      }
      return NextResponse.json(response, { status: 404 })
    }

    const response: ApiResponse<null> = {
      success: true,
      data: null,
    }

    return NextResponse.json(response)
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to delete product",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
