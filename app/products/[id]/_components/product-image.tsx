'use client'

import { Button } from '@/app/_components/ui/button'
import { Product } from '@prisma/client'
import { ChevronLeftIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductImageProps {
  product: Pick<Product, 'imageUrl' | 'name'>
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter()

  const handleBackClick = () => router.back()

  return (
    <div className="relative h-[356px] w-full">
      <Image
        src={product?.imageUrl}
        alt={product.name}
        className="object-cover"
        fill
      />

      <Button
        className="absolute left-2 top-2 rounded-full bg-white text-foreground hover:text-white"
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  )
}

export default ProductImage
