'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { MdTimeline } from 'react-icons/md'
import { PiPlaylist } from "react-icons/pi";
import { GiBookshelf } from "react-icons/gi";

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
        active: pathname === '/dashboard',
        href: '/dashboard',
      },
      {
        icon: PiPlaylist,
        label: 'Playlists',
        active: pathname === '/dashboard/playlists',
        href: '/dashboard/playlists',
      },
      {
        icon: FaRegHeart,
        label: 'Liked',
        active: pathname === '/dashboard/liked',
        href: '/dashboard/liked',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/dashboard/search',
        href: '/dashboard/search',
      },
      {
        icon: CgProfile,
        label: 'Profile',
        active: pathname === '/dashboard/profile',
        href: '/dashboard/profile',
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
