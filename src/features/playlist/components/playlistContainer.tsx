import { path } from "@/app/api/_services/common";
import { PlaylistItem } from "@/features/playlist/components/playlistItem";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


interface Playlist {
    id: string
    name: string
    created_at: Date
}

interface PlaylistCollection {
    amount: number
    playlists: Playlist[]
}
export default async function PlaylistContainer() {
    const session = await getServerSession(authOptions)
    const author_id = session?.user?.id
    const token = session?.accessToken
    const response = await fetch(
        path(`/api/playlist/index?author_id=${author_id}`),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        },
    )
    const data: PlaylistCollection = await response.json()
    if (author_id == null) return <div>ログインして</div>
    return (
        <>
            <section className="hidden w-full lg:flex lg:h-full lg:w-[400px] lg:flex-col">
                <div className="shrink-0 border-b bg-zinc-50 p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold tracking-tight">プレイリスト</span>
                    </div>
                </div>
                <div className="grow overflow-y-auto rounded-md border bg-zinc-50">
                    {data.playlists.map((playlist) => (
                        <PlaylistItem key={playlist.id} {...playlist} />
                    ))}
                </div>
            </section>
            <section className="block h-screen w-full lg:hidden">
                <div className="flex h-full flex-col">
                    <div className="shrink-0 border-b bg-zinc-50 p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold tracking-tight">プレイリスト</span>
                        </div>
                    </div>
                    <div className="grow overflow-y-auto rounded-md border bg-zinc-50">
                        {data.playlists.map((playlist) => (
                            <PlaylistItem key={playlist.id} {...playlist} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}