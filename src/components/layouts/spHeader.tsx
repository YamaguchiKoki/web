'use client'
import SpDrawerMenuContent from '@/components/elements/spDrawerMenuContent'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { signOut, useSession } from 'next-auth/react'
import { BsCommand } from 'react-icons/bs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


export function SpHeader() {
  const { data: session } = useSession();
  return (
    <header className="fixed top-0 flex w-full flex-row justify-between border-b border-slate-500 bg-white p-2">
      <Drawer>
        <DrawerTrigger asChild className="">
          <Button className="">
            <BsCommand />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full bg-white">
          <div className="w-full">
            <DrawerHeader>
              <div className="flex w-full flex-row gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center justify-center">
                  {session?.user ?
                    session.user.name
                    : 'ログインしていません'}
                </div>
              </div>
            </DrawerHeader>
            <div className="w-full p-2 px-4">
              <SpDrawerMenuContent />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      {session ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>投稿する</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>投稿</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href='/new/playlist'>
                    プレイリスト投稿
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  スクラップ投稿
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="secondary" onClick={() => signOut()}>ログアウト</Button>
        </div>
      ) : (
        <>
          <Button variant="secondary" onClick={() => location.href = '/login'}>ログイン</Button>
          <Button onClick={() => location.href = '/signup'} >新規登録</Button>
        </>
      )}
    </header>
  )
}
