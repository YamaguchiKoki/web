import { createUser } from '@/app/api/_services/user/createUser'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    console.log(body)

    const res = await createUser({
      email: body.email,
      password: body.password,
      screen_name: body.screen_name,
    })

    if (!res.success) throw Error

    await console.log(res)

    return new NextResponse(JSON.stringify({ message: '登録が完了しました' }), {
      status: 201,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
