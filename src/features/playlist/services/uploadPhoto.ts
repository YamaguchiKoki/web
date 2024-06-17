import mime from 'mime-types'
import { v4 as uuid } from 'uuid'

type Props = {
  imageData: Blob
}

export async function uploadPhoto({ imageData }: Props) {
  const name = uuid()
  const ext = mime.extension(imageData.type)
  const filename = encodeURIComponent(`${name}.${ext}`)
  const fileType = encodeURIComponent(imageData.type)

  // Get presigned URL
  const {
    presignedPost: { url, fields },
  } = await fetch('/api/images/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, fileType }),
  }).then((res) => res.json())

  // Upload to S3
  const formData = new FormData()
  Object.entries({ ...fields, file: imageData }).forEach(([key, value]) => {
    formData.append(key, value as string)
  })
  console.log('FormData', formData)
  await fetch(url, {
    method: 'POST',
    body: formData,
  }).then(() => ({ url, filename, fields }))
  return `${url}/${filename}`
}
