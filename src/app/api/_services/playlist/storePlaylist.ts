import { path } from '@/app/api/_services/common'

export type Song = {
  id: string
  url: string
  type: string
}

export type Playlist = {
  id: string
  title: string
  imageUrl: string
  bookshelfCount?: number
  songs: Song[]
  createdAt: string
}

export function storePlaylist(
  payload: {
    userId: string
    title: string
    description: string
    songs: Song[]
    imageUrl: string
  },
  token: string,
): Promise<{ playlist: Playlist }> {
  return fetch(path(`/api/playlist/store`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error()
    })
}
