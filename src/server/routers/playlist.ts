import { procedure, router } from '@/server/trpc'
import { headers } from 'next/headers'
import { z } from 'zod'

interface Playlist {
  id: string
  name: string
  created_at: Date
}

interface PlaylistCollection {
  amount: number
  playlists: Playlist[]
}
export const playlistRouter = router({
  getPlaylists: procedure
    .input(z.object({ author_id: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:3000/api/proxy/playlist/index?author_id=${input.author_id}`,
        {
          method: 'GET',
          headers: headers(),
        },
      )
      const data: PlaylistCollection = await res.json()
      return data
    }),
})
