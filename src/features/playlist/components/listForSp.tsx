import { PlaylistItem } from "@/features/playlist/components/playlistItem"
import { fetchPlaylists } from "@/features/playlist/services/fetchPlaylists"

export default async function ListForSp() {
    const data = await fetchPlaylists()
    return (
        <div className="flex h-full flex-col lg:hidden">
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
    )
}