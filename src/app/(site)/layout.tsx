import { Header } from '@/components/layouts/header'
import SideMenu from '@/components/layouts/sideMenu'
import { SpHeader } from '@/components/layouts/spHeader'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextAuthProvider } from '@/providers/nextAuthProvider'

interface Props {
  children: React.ReactNode
}

export default function SiteLayout({ children }: Props) {
  const session = getServerSession(authOptions)
  return (
    <div className="flex min-h-screen flex-col">
      <NextAuthProvider session={session} refetchOnWindowFocus={false}>
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="lg:hidden">
          <SpHeader />
        </div>
      </NextAuthProvider>
      <div className="flex flex-1">
        <SideMenu />
        <main className="h-[90vh] flex-1">{children}</main>
      </div>
    </div>
  )
}
