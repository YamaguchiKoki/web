import { Typography } from "@/components/elements/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaBandcamp } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { PlayListCardContainer } from "@/app/_components/profile/playListCardContainer";

interface Props {
  params: { userId: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Page({ params, searchParams }: Props) {
  const userId = params.userId;

  const tabValue = (searchParams.value as string) || 'playList';
  //データ取得 Suspenseも
  return (
    <section className="flex flex-col justify-center items-center w-full mx-auto">
      <div className="flex w-3/5 space-x-10">
        <Avatar className="h-[150px] w-[150px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <Typography bold size="x-large">島田紳助</Typography>
          <Typography className="pt-3">りょたといいます！ Software Developer | DevCan#2 hostedBy Classmethod | React.js | Next.js | AWS SAA / DVA / SOA</Typography>
          <Typography className="pt-2">Follows  42</Typography>
          <div className="flex space-x-4 pt-3">
            <BsTwitterX size={25} />
            <FaSpotify size={25} />
            <SiApplemusic size={25} />
            <FaBandcamp size={25} />
            <ImSoundcloud2 size={25} />
          </div>
        </div>
        {/* session.user.id == userIdでフォローボタンと出し分け */}
        <Button variant="outline">
          編集
        </Button>
      </div>
      
      <Tabs defaultValue={tabValue} className="flex flex-col w-3/5 justify-start items-start mt-10">
        <TabsList>
          <Link href='?value=playList'>
            <TabsTrigger value="playList">playlist</TabsTrigger>
          </Link>
          <Link href='?value=note'>
            <TabsTrigger value="note">note</TabsTrigger>
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