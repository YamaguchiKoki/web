import { CarouselItem } from '@/components/ui/carousel'

interface Props {
  children?: React.ReactNode
}
export function CarouselItemCard({ children }: Props) {
  return (
    <CarouselItem className="pl-5 md:basis-1/2 lg:basis-1/5">
      {children}
    </CarouselItem>
  )
}
