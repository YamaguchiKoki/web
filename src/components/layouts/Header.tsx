'use client'
import { PlayListCreateModalContainer } from '@/components/elements/modalContainers/playListCreateModalContainer';
import { Button } from '@/components/ui/button'
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
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

export function Header() {
  const { data: session } = useSession();
  // console.log('session情報' + JSON.stringify(session));
  return (
    <header className="sticky top-0 mb-10 flex h-[50px] w-full justify-between p-4">
      <p>App Name</p>
      <div className="flex space-x-3">
        {session ? (
          <>
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
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={() => location.href = '/login'}>ログイン</Button>
            <Button onClick={() => location.href = '/signup'} >新規登録</Button>
          </>
        )}
      </div>
    </header>
  )
}
