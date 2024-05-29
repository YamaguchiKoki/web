'use client'

import { trpc } from '@/app/_trpc/client'
import { Typography } from '@/components/elements/typography'
import { ErrorMessage } from '@/features/signup/components/errorMessage'
import { Loader } from '@/features/signup/components/loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

//TODO

export function RegisterForm() {
  const [isProceeding, setIsProceeding] = useState(false)
  const router = useRouter()
  const mutation = trpc.user.registerUser.useMutation()

  const schema = z.object({
    email: z.string().email({
      message: '正しい形式で入力してください',
    }),
    password: z
      .string()
      .min(8, {
        message: '8文字以上で入力してください',
      })
      .max(32, {
        message: '32文字以下で入力してください',
      }),
    screen_name: z.string(),
  })

  type FormData = z.infer<typeof schema>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      screen_name: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsProceeding(true)
      const credentials = {
        email: data.email,
        password: data.password,
      }
      mutation.mutate(data, {
        onSuccess: async () => {
          await signIn('credentials', {
            ...credentials,
            redirect: false,
          })
          await router.push('/')
        },
        onError: (error) => {
          //Toastに
          alert(error.message)
        },
      })
    } catch (e) {
      console.log(e)
    } finally {
      setIsProceeding(false)
    }
  }

  return (
    <div className="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
      <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          xxxに会員登録
        </h2>
        <form
          className="mt-8 w-[300px]"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-5">
            <div>
              <label className="text-base font-medium text-gray-900">
                <Typography bold>メールアドレス</Typography>
              </label>
              <div className="mt-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      {errors.email && (
                        <ErrorMessage message={errors.email.message} />
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  <Typography bold>パスワード</Typography>
                </label>
              </div>
              <div className="mt-2">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      {errors.password && (
                        <ErrorMessage message={errors.password.message} />
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                <Typography bold>表示名</Typography>
              </label>
              <div className="mt-2">
                <Controller
                  name="screen_name"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        placeholder="kokiさん"
                        type="text"
                        name="screen_name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      {errors.screen_name && (
                        <ErrorMessage message={errors.screen_name.message} />
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit"
                disabled={isProceeding}
              >
                {isProceeding ? <Loader /> : '登録する'}
              </button>
            </div>
          </div>
        </form>
        <div className="mt-3 space-y-3">
          <button
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            type="button"
          >
            <span className="mr-2 inline-block">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-rose-500"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
