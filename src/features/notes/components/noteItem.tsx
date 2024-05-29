import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface Props {
  title: string
  created_at: string
  active: boolean
  href: string
}

export function NoteItem(props: Props) {
  const { active, href, title, created_at } = props
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2 cursor-pointer`,
        active && 'bg-black text-white hover:bg-black',
      )}
    >
      <p className="w-full truncate">{title}</p>
      <p className="w-full truncate">{created_at}</p>
    </Link>
  )
}
