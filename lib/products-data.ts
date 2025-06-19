import type { Product } from "./types";

export let products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 249.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description:
      "Advanced smartwatch with fitness tracking, heart rate monitor, and GPS.",
    createdAt: "2024-01-16T10:00:00Z",
  },
  {
    id: "3",
    name: "Coffee Maker",
    price: 79.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Appliances",
    description:
      "Programmable coffee maker with thermal carafe and auto-brew feature.",
    createdAt: "2024-01-17T10:00:00Z",
  },
  {
    id: "4",
    name: "Yoga Mat",
    price: 29.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Fitness",
    description:
      "Non-slip yoga mat with extra cushioning for comfortable workouts.",
    createdAt: "2024-01-18T10:00:00Z",
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 59.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    createdAt: "2024-01-19T10:00:00Z",
  },
  {
    id: "6",
    name: "Running Shoes",
    price: 129.99,
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
    description:
      "Lightweight running shoes with advanced cushioning and breathable mesh.",
    createdAt: "2024-01-20T10:00:00Z",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id == id);
}

export function addProduct(
  product: Omit<Product, "id" | "createdAt">
): Product {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  products.push(newProduct);
  return newProduct;
}

export function deleteProduct(id: string): boolean {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  return products.length < initialLength;
}
