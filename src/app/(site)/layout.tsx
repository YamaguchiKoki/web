import { Header } from '@/components/layouts/header'
import SideMenu from '@/components/layouts/sideMenu'
import { SpHeader } from '@/components/layouts/spHeader'
import { Switcher } from '@/components/layouts/switcher'

interface Props {
  children: React.ReactNode
}

export default function SiteLayout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className='md:hidden'>
        <SpHeader />
      </div>
      <div className='flex flex-1'>
        <SideMenu />
        <main className='flex-1'>
          { children }
        </main>
      </div>
    </div>
  )
}
