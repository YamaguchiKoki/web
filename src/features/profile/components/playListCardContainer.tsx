import { PlayListCard } from '@/components/elements/cards/playListCard'
import React from 'react'
interface Playlist {
  id: string;
  user_id: string;
  name: string;
  description: string;
  image_url: string | null;
  added_to_bookshelf_count: number;
  created_at: string;
  updated_at: string;
  songs: Song[];
}
interface Song {
  id: number;
  playlist_id: string;
  name: string;
  order: number;
  url: string;
  url_type: string;
  created_at: string;
  updated_at: string;
}
interface Props {
  playlists: Playlist[]
}
export function PlayListCardContainer({ playlists }: Props) {
  return (
    <section className="grid grid-cols-3 gap-4">
      {playlists && playlists.map((playlist, index) => (
        <PlayListCard key={index} playList={playlist} />
      ))
      }
    </section>
  )
}
