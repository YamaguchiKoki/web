import { Typography } from '@/components/elements/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlayListCardContainer } from '@/features/profile/components/playListCardContainer'
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

export default function Page({ searchParams }: Props) {

  const tabValue = (searchParams.value as string) || 'playList'
  //データ取得 Suspenseも
  return (
    <section className="w-full mx-10">
      <div className="flex">
        <div className="flex flex-col">
          <Avatar className="h-[100px] w-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Typography bold size="x-large">
            島田紳助
          </Typography>
          <Typography className="pt-3">
            りょたといいます！ Software Developer | DevCan#2 hostedBy
            Classmethod | React.js | Next.js | AWS SAA / DVA / SOA
          </Typography>
          <Typography className="pt-2">Follows 42</Typography>
          <div className="flex space-x-4 pt-3">
            <BsTwitterX size={20} />
            <FaSpotify size={20} />
            <SiApplemusic size={20} />
            <FaBandcamp size={20} />
            <ImSoundcloud2 size={20} />
          </div>
        </div>
        <Button variant="outline" className='mt-5'>編集</Button>
      </div>

      <Tabs
        defaultValue={tabValue}
        className="flex flex-col w-3/5 justify-start items-start mt-10"
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
          <PlayListCardContainer />
        </TabsContent>
        <TabsContent value="note">Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}
