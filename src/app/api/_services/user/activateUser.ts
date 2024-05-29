import { path } from '@/app/api/_services/common'
import type { Base } from '@/app/api/_types/user'

export async function activateUser(payload: { pin: number }): Promise<Base> {
  const response = await fetch(path('/api/user/activate'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data
}
