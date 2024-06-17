import PlaylistContainer from "@/features/playlist/components/playlistContainer";
import type { ReactNode } from "react";


interface Props {
    children: ReactNode
}
/**
 * /playlists
 * - 投稿済みplaylistのtitle一覧
 * 
 * /playlists/[id]
 * - このレイアウトのまま、画面右側に詳細表示
 * 
 * /playlists/create
 * - 新規作成画面
 *
 */
export default async function PlaylistLayout({ children }: Props) {

    return (
        <section className="flex h-[90vh] flex-row">
            <PlaylistContainer />
            {children}
        </section>
    );
}