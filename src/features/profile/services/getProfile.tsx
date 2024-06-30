import { path } from "@/app/api/_services/common";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

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

interface Like {
    id: number;
    user_id: string;
    playlist_id: string;
    created_at: string;
    updated_at: string;
}

interface Follower {
    id: string;
    screen_name: string;
    email: string;
    status: number;
    bio: string | null;
    image_url: string | null;
    created_at: string;
    updated_at: string;
}

interface SNSLink {
    id: string;
    user_id: string;
    provider_id: string;
    platform: string;
    url: string;
    provider: Provider;
}

interface Provider {
    id: string;
    provider_name: string;
}

interface Profile {
    id: string;
    screen_name: string;
    email: string;
    status: number;
    bio: string | null;
    image_url: string | null;
    created_at: string;
    updated_at: string;
    playlists: Playlist[];
    likes: Like[];
    followers: Follower[];
    sns_links: SNSLink[];
}


export async function getProfile(): Promise<Profile> {
    const session = await getServerSession(authOptions)
    const author_id = session?.user?.id
    console.log('idでしょ', author_id)
    const token = session?.accessToken
    console.log('path 結果', path(`/api/profile/${author_id}`))
    const response = await fetch(
        path(`/api/profile/?user_id=${author_id}`),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        },
    )
    const data: Profile = await response.json()
    return data
}