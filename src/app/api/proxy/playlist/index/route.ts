import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const session = await getServerSession(authOptions)
    await console.log(
      'ついにとれた' + session?.accessToken + 'こっちはId' + session?.user?.id,
    )
    const author_id = req.nextUrl.searchParams.get('author_id')
    console.log('from q param' + author_id)

    const response = 'tets'
    console.log(response)
    // return Response.json(response.json())
    return response

    // return new NextResponse(JSON.stringify({ message: '登録が完了しました' }), {
    //   status: 201,
    // })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
