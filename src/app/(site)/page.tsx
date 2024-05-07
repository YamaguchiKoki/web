import { CarouselItemCard } from "@/components/elements/cards/carouselItemCard";
import { PlayListCard } from "@/components/elements/cards/playListCard";
import { CarouselContainer } from "@/components/layouts/carouselContainer";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-start w-full p-10">
      <h1 className="text-left mb-10">注目プレイリスト</h1>
      <CarouselContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItemCard key={index}>
            <PlayListCard />
          </CarouselItemCard>
        ))}
      </CarouselContainer>
      <h1 className="text-left mb-10">注目プレイリスト</h1>
    </div>
  )
}
