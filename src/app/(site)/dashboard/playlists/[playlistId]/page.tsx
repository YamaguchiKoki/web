import { Typography } from '@/components/elements/typography'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Editor } from '@/features/notes/components/editor'
import { SongTable } from '@/features/playlist/components/songTable'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    params: { playlistId: string }
}
export default async function Page({ params }: Props) {
    const playlistId = params.playlistId
    console.log('kokkokikoi' + playlistId)
    // これを渡しててデータ取得

    return (
        <ScrollArea className="h-full space-y-3 px-[100px]">
            <div className='justify-start pb-10'>
                <Typography size='x-large' bold>
                    Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple Studio Display
                </Typography>
            </div>
            <Image
                className='mb-8 w-full'
                src="https://via.placeholder.com/150"
                alt="プレイリスト画像"
                width={100}
                height={100}
            />
            {/* songs渡す */}
            <SongTable />
            <div className='mt-8 flex flex-col'>
                <Typography size='large' bold>
                    内容
                </Typography>
                <div className='mt-4'>
                    In today's digital era, websites have become the face of any business or organization.
                    They not only represent your brand but also serve as a platform for your customers to interact
                    with you. Therefore, it's essential to ensure that your website is fast, responsive, and provides a seamless user experience.
                    Website speed is a crucial factor that can make or break your online presence. Slow-loading websites can lead to high bounce
                    rates, reduced engagement, and ultimately, loss of revenue. Fortunately, there are several techniques available that can help you
                    optimize your website speed. In this article, I will walk through you these techniques - Preload, Prefetch, Preconnect, and DNS Prefetch
                    with providing examples and best practices for using them to optimize the performance of a website.
                </div>
            </div>
            <Editor />
        </ScrollArea>
    )
}
