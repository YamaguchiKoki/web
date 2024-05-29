import { PlayListCard } from '@/components/elements/cards/playListCard'
import React from 'react'

interface Props {
  children: React.ReactNode
}
export function PlayListCardContainer() {
  return (
    <section className="grid grid-cols-3 gap-4 h-[500px] overflow-y-scroll fixed z-1">
      <PlayListCard />
      <PlayListCard />
      <PlayListCard />
      <PlayListCard />
      <PlayListCard />
      <PlayListCard />
      <PlayListCard />
    </section>
  )
}
