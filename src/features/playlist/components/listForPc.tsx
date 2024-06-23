import { PlaylistItem } from "@/features/playlist/components/playlistItem";
import { fetchPlaylists } from "@/features/playlist/services/fetchPlaylists";



export default async function ListForPc() {
    //ここのデータフェッチ関数を外部から渡す設計にすれば汎用コンポーネントにできる　このコンポーネントをcomponents/organismsにおいて、それをfeature/components/templatesそうで使うとか？
    const data = await fetchPlaylists()
    return (
        <section className="hidden w-full lg:flex lg:h-full lg:w-[400px] lg:flex-col">
            <header className="shrink-0 border-b bg-zinc-50 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-tight">プレイリスト</span>
                </div>
            </header>
            <div className="grow overflow-y-auto rounded-md border bg-zinc-50">
                {data.playlists.map((playlist) => (
                    <PlaylistItem key={playlist.id} {...playlist} />
                ))}
            </div>
        </section>
    )
}