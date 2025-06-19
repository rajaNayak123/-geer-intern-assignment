import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NotificationProvider } from "@/contexts/notification-context"
import NotificationContainer from "@/components/notification-container"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Product Store - Your One-Stop Shop",
  description:
    "Discover amazing products at great prices. Browse our collection of electronics, appliances, fitness gear, and more.",
  keywords: "products, shopping, electronics, appliances, fitness, footwear",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationProvider>
          <Navigation />
          <main className="min-h-screen bg-gray-50">{children}</main>
          <NotificationContainer />
        </NotificationProvider>
      </body>
    </html>
  )
}
