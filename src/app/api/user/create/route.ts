import { createUser } from "@/features/api/user/createUser";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    //リクエスト疎通まで確認　レスポンス整形から
    try {
        const body = await req.json();
        const { user } = await createUser({
            email: body.email,
            password: body.password,
            screen_name: body.screen_name
        });
        console.log(user);
        return Response.json({ user }, { status: 201 });
    } catch(err) {
        console.log(err);
        return Response.json(
          { message: 'Internal Server Error' },
          { status: 500 },
        )
    }
}