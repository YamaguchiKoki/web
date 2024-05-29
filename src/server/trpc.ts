/**
 * Initialization of tRPC backend
 * @link https://trpc.io/docs/server/routers
 */
import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

/**
 * Create router
 * @link https://trpc.io/docs/v11/router
 */
export const router = t.router

/**
 * Create public procedure
 * @link https://trpc.io/docs/v11/procedures
 **/
export const procedure = t.procedure

/**
 * Create createCallerFactory
 * @link https://trpc.io/docs/v11/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory
