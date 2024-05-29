import { userRouter } from '@/server/routers/user'
import { createCallerFactory, procedure, router } from './trpc'

/**
 * router of tRPC-backend
 * @link https://trpc.io/docs/quickstart#1-create-a-router-instance
 */
export const appRouter = router({
  hello: procedure.query(() => {
    return { msg: 'Hello World' }
  }),
  user: userRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
