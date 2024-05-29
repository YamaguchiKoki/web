import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Props {
  children: React.ReactNode
}

export function CarouselContainer({ children }: Props) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
