import { procedure, router } from '@/server/trpc'
import { z } from 'zod'

export const userRouter = router({
  registerUser: procedure
    .input(
      z.object({
        screen_name: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(8),
      }),
    )
    .mutation(async ({ input }) => {
      const response = await fetch(
        'http://localhost:3000/api/proxy/user/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input),
        },
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'ユーザー登録に失敗しました')
      }

      return response.json()
    }),
})
