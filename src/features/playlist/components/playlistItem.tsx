'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface Props {
    id: string
    name: string
    created_at: Date
}

export function PlaylistItem(props: Props) {
    const { id, name, created_at } = props
    const dateObject = new Date(created_at);
    const formattedDate = dateObject.toDateString();
    const pathname = usePathname()
    return (
        <Link
            href={`/dashboard/playlists/${id}`}
            className={twMerge(
                `flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2 cursor-pointer`,
                (pathname == `/dashboard/playlists/${id}`) && 'bg-black text-white hover:bg-black',
            )}
        >
            <p className="w-full truncate">{name}</p>
            <p className="w-full truncate">{formattedDate}</p>
        </Link>
    )
}
