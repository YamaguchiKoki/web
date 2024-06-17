import { path } from '@/app/api/_services/common'
import fetchClient from '@/lib/fetchClient'
import { jwt } from '@/lib/utils'
import type { NextAuthOptions, User } from 'next-auth'
import {
  getServerSession as originalGetServerSession,
  type DefaultSession,
} from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cache } from 'react'

declare module 'next-auth' {
  interface User {
    role: string
    accessToken: string
    screenName: string
  }
  interface Session extends DefaultSession {
    accessToken: string
    user: {
      id: string
      role: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: string
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 1209600,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const response = await fetchClient({
            method: 'POST',
            url: path('/api/login'),
            body: JSON.stringify(credentials),
          })

          if (!response.ok) {
            console.log('Response not OK:', response)
            throw response
          }

          const data: { user: User; token: string } = await response.json()

          console.log('Login response data:', data)

          if (!data?.token) {
            console.log('No token found in response')
            throw response
          }

          console.log('to jwt callback' + data.user)
          //このリターン文がjwtコールバックのuserとして渡される
          return { ...data.user, accessToken: data.token }
        } catch (error) {
          if (error instanceof Response) {
            console.log('Response error:', error.status, error.statusText)
            return null
          }

          console.error('Error during login request:', error)
          throw new Error('An error has occurred during login request')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      /**
       * JWT callback - token: {
       * sub: '07ca6a0a-acc1-45d5-92d2-1b640239a865',
       * accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcxNzE0MjAzNSwiZXhwIjoxNzE3MTQ1NjM1LCJuYmYiOjE3MTcxNDIwMzUsImp0aSI6Iml2cFF3OUw3OWdtb1QzUTIiLCJzdWIiOiIwN2NhNmEwYS1hY2MxLTQ1ZDUtOTJkMi0xYjY0MDIzOWE4NjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.hJMLOTWUYXaRDbd--pM9QxaZ6MoVyH7CmmV1rOR1kL0',
       * iat: 1717142035,
       * exp: 1719734035,
       * jti: 'c33c693a-9202-498f-ba60-308cb53bf596'
       * }
       */
      console.log('JWT callback - token:', token)
      //undefined
      console.log('JWT callback - user:', user)
      //undefined
      console.log('JWT callback - trigger:', trigger)
      //undefined
      console.log('JWT callback - session:', session)

      if (user) {
        //TODO APIにscreen_nameを返すように変更し、ここでtokenにつめる
        token.accessToken = user.accessToken
        token.name = user.screenName
        token.id = user.id
      }

      //sessionコールバックのtokenとして渡される
      return token
    },

    async session({ session, token }) {
      /**
       * Session callback - session: {
       * user: { name: undefined, email: undefined, image: undefined },
       * expires: '2024-06-14T07:53:55.900Z'
       * }
       */
      console.log('Session callback - session:', session)
      /**
       * Session callback - token: {
       * sub: '07ca6a0a-acc1-45d5-92d2-1b640239a865',
       * accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcxNzE0MjAzNSwiZXhwIjoxNzE3MTQ1NjM1LCJuYmYiOjE3MTcxNDIwMzUsImp0aSI6Iml2cFF3OUw3OWdtb1QzUTIiLCJzdWIiOiIwN2NhNmEwYS1hY2MxLTQ1ZDUtOTJkMi0xYjY0MDIzOWE4NjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.hJMLOTWUYXaRDbd--pM9QxaZ6MoVyH7CmmV1rOR1kL0',
       * iat: 1717142035,
       * exp: 1719734035,
       * jti: 'c33c693a-9202-498f-ba60-308cb53bf596'
       * }
       */
      console.log('Session callback - token:', token)

      if (token.error) {
        throw new Error('Refresh token has expired')
      }

      session.accessToken = token.accessToken as string
      session.user = {
        ...session.user,
        name: token.name || '',
        id: token.id || '',
      }
      console.log('これはトークンです' + session?.accessToken)

      return session
    },
  },
  events: {
    async signOut({ token }) {
      await fetchClient({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/logout',
        token: token.accessToken,
      })
    },
  },
}

async function refreshAccessToken(token: JWT) {
  try {
    const response = await fetchClient({
      method: 'POST',
      url: path('/api/refresh'),
      token: token.accessToken,
    })

    if (!response.ok) throw response

    const refreshedAccessToken: { access_token: string } = await response.json()
    const { exp } = jwt.decode(refreshedAccessToken.access_token)

    return {
      ...token,
      accessToken: refreshedAccessToken.access_token,
      exp,
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}
export const getServerSession = cache(async () => {
  // ★: リクエストメモ化を忘れないように
  return originalGetServerSession(authOptions)
})
