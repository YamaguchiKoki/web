'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { MdTimeline } from 'react-icons/md'
import { PiPlaylist } from "react-icons/pi";
import SideMenuItem from '../elements/sideMenuItem'

interface SideMenuProps {
  children?: React.ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
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
        icon: PiPlaylist,
        label: 'Playlists',
        active: pathname === '/playlists',
        href: '/dashboard/playlists',
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
    <aside className="sticky hidden h-[90vh] w-[350px] flex-col bg-zinc-50 lg:flex">
      {routes.map((item) => (
        <SideMenuItem key={item.label} {...item} />
      ))}
    </aside>
  )
}
export default SideMenu
