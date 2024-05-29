import Link from 'next/link'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SideMenuItemProps {
  icon: IconType
  label: string
  active: boolean
  href: string
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
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
        <Icon size={26} />
        <p className="w-full truncate">{label}</p>
      </div>
    </Link>
  )
}
export default SideMenuItem
