import { path } from '@/app/api/_services/common'
import IconDisplay from '@/components/atoms/iconDisplay'
import { Typography } from '@/components/elements/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlayListCardContainer } from '@/features/profile/components/playListCardContainer'
import { getProfile } from '@/features/profile/services/getProfile'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaBandcamp, FaSpotify } from 'react-icons/fa'
import { ImSoundcloud2 } from 'react-icons/im'
import { SiApplemusic } from 'react-icons/si'

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Page({ searchParams }: Props) {

  const tabValue = (searchParams.value as string) || 'playList'
  const data = await getProfile()
  console.log(data)

  //データ取得 Suspenseも
  return (
    <section className="w-full mx-10 h-full overflow-y-scroll">
      <div className="flex">
        <div className="flex flex-col">
          <Avatar className="h-[100px] w-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Typography bold size="x-large">
            {data.screen_name}
          </Typography>
          <Typography className="pt-3">
            {data.bio}
          </Typography>
          <Typography className="pt-2">Follows 42</Typography>
          <div className="flex space-x-4 pt-3">
            {data.sns_links &&
              data.sns_links.map((sns, index) => (
                <Link href={sns.url} key={index}>
                  <IconDisplay type={sns.provider.provider_name} size={20} />
                </Link>
              ))
            }
          </div>
        </div>
        <Button variant="outline" className='mt-5'>編集</Button>
      </div>

      <Tabs
        defaultValue={tabValue}
        className="flex flex-col justify-start items-start mt-10"
      >
        <TabsList>
          <Link href="?value=playList">
            <TabsTrigger value="playList">playlist</TabsTrigger>
          </Link>
          <Link href="?value=liked">
            <TabsTrigger value="note">liked</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="playList">
          <PlayListCardContainer playlists={data.playlists} />
        </TabsContent>
        <TabsContent value="note">Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}
