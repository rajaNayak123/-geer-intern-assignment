"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

interface SafeImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackSrc?: string
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackSrc = "/placeholder.svg?height=300&width=300",
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  // If both original and fallback fail, show a placeholder
  if (hasError && imgSrc === fallbackSrc) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 ${className}`} style={{ width, height }}>
        <div className="text-center text-gray-500">
          <ImageIcon className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      unoptimized={hasError} // Use unoptimized for fallback images
    />
  )
}
