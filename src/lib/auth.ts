import { path } from '@/app/api/_services/common'
import fetchClient from '@/lib/fetchClient'
import { jwt } from '@/lib/utils'
import type { NextAuthOptions, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

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
      console.log('JWT callback - token:', token)
      console.log('JWT callback - user:', user)
      console.log('JWT callback - trigger:', trigger)
      console.log('JWT callback - session:', session)

      if (user) {
        token.accessToken = user.accessToken
      }

      return token
    },

    async session({ session, token }) {
      console.log('Session callback - session:', session)
      console.log('Session callback - token:', token)

      if (token.error) {
        throw new Error('Refresh token has expired')
      }

      session.accessToken = token.accessToken
      session.user = {
        ...session.user,
        name: token.name || '',
        email: token.email || '',
        email_verified_at: token.email_verified_at,
      }

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
