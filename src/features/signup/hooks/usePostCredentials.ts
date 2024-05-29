import { userFactory, type Credentials } from '@/models/userModel'
import { useState } from 'react'

export const usePostCredentials = () => {
  const [isFetching, setIsFetching] = useState(false)

  const postCredentials = async (params: Credentials) => {
    setIsFetching(true)
    try {
      const response = await userFactory().create(params)

      return response
    } catch (e) {
      console.log(e)
      // トースト通知とかはカスタムフックでやる？
      if (e instanceof Error) {
        //  toast.error(`Error: ${e.message}`)
      } else {
        //  toast.error('An unexpected error occurred')
      }
      throw e
    } finally {
      setIsFetching(false)
    }
  }

  return {
    postCredentials,
    isFetching,
  }
}
