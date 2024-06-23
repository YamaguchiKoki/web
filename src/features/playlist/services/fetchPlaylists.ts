import { path } from '@/app/api/_services/common'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

interface Playlist {
  id: string
  name: string
  created_at: Date
}

export interface PlaylistCollection {
  amount: number
  playlists: Playlist[]
}
export async function fetchPlaylists(): Promise<PlaylistCollection> {
  const session = await getServerSession(authOptions)
  const author_id = session?.user?.id
  const token = session?.accessToken
  const response = await fetch(
    path(`/api/playlist/index?author_id=${author_id}`),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  const data: PlaylistCollection = await response.json()
  return data
}
