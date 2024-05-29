'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { MdTimeline } from 'react-icons/md'
import SideMenuItem from '../elements/sideMenuItem'

interface Props {
  children?: React.ReactNode
}

const SpDrawerMenuContent: React.FC<Props> = ({ children }) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname === '/',
        href: '/',
      },
      {
        icon: MdTimeline,
        label: 'Notes',
        active: pathname === '/notes',
        href: '/notes',
      },
      {
        icon: FaRegHeart,
        label: 'Liked',
        active: pathname === '/liked',
        href: '/liked',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
      {
        icon: CgProfile,
        label: 'Profile',
        active: pathname === '/profile',
        href: '/profile',
      },
    ],
    [pathname],
  )

  return (
    <aside className="flex flex-col bg-white">
      {routes.map((item) => (
        <SideMenuItem key={item.label} {...item} />
      ))}
    </aside>
  )
}
export default SpDrawerMenuContent
