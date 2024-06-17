import { storePlaylist } from '@/app/api/_services/playlist/storePlaylist'
import { getServerSession } from '@/lib/auth'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const token = session?.accessToken
  try {
    // 【6】投稿者 ID と情報をまとめて Web API サーバーに送信
    const body = await req.json()
    console.log('ボディー', body)
    const { playlist } = await storePlaylist(
      {
        userId: session.user.id,
        imageUrl: body.imageUrl,
        title: body.title,
        description: body.description,
        songs: body.songs,
      },
      token,
    )
    // 【9】保存結果を Client Component に返す
    return Response.json({ playlist }, { status: 201 })
  } catch (err) {
    // 【9】保存結果を Client Component に返す
    return Response.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
