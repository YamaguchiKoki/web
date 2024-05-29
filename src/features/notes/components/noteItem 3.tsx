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
        `flex flex-row items-center gap-x-4 py-1 px-3 w-full h-[40px] font-medium text-md text-black transition cursor-pointer`,
      )}
    >
      <div
        className={twMerge(
          `flex flex-row items-center gap-x-4 w-full h-[40px] font-medium text-md text-black transition cursor-pointer px-3`,
          active && 'rounded-lg bg-black text-white',
          !active && 'hover:bg-slate-50',
        )}
      >
        <p className="w-full truncate">{title}</p>
      </div>
    </Link>
  )
}
