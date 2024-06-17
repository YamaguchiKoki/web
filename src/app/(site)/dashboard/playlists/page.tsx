import { path } from "@/app/api/_services/common";
import { NoteItem } from "@/features/notes/components/noteItem";
import { authOptions } from "@/lib/auth";
import { createCaller } from "@/server";
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
export default async function Page() {
    return (
        <>
        </>
    )
}