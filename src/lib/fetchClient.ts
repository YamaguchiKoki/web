//クライアント層のエラーハンドリング：　トースト表示、リダイレクトなど
//BFF層：　laraから受け取ったエラーを通知
interface fetchClientProps {
  method?: string
  url: string
  body?: string
  token?: string
}

async function fetchClient({
  method = 'GET',
  url,
  body = '',
  token,
}: fetchClientProps) {
  try {
    // const session = await getSession();
    // const accessToken = token || session?.accessToken;

    //factoryをラップしたカスタムフックなど上位に知らせるエラーの整形？
    const response = await fetch(url.toString(), {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer',
      },
      body: body || undefined,
    })

    if (!response.ok) {
      const errorText = await response.text()
      const error = new Error(errorText)
      ;(error as any).status = response.status
      throw error
    }

    return response
  } catch (error) {
    // if (error instanceof Error && (error as any).status) {
    //   const status = (error as any).status
    //   if (status === 401) {
    //     signOut()
    //   } else if (status === 409) {
    //     window.location.href = '/request-email-verification'
    //   }
    // }

    throw new Error('Failed to fetch data', { cause: error })
  }
}

export default fetchClient
