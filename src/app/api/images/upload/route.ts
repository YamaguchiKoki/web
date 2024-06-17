import { MAX_UPLOAD_PHOTO_SIZE } from '@/constants'
import { getServerSession } from '@/lib/auth'
import S3 from 'aws-sdk/clients/s3'
import type { NextRequest } from 'next/server'

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: process.env.AWS_S3_ENDPOINT,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})

export async function POST(req: NextRequest) {
  try {
    await getServerSession()
    const data = await req.json()
    const presignedPost = await s3.createPresignedPost({
      Bucket: process.env.AWS_S3_PHOTO_BUCKET_NAME,
      Fields: {
        key: data.filename,
        'Content-Type': data.fileType,
      },
      Expires: 60, // seconds
      Conditions: [['content-length-range', 0, MAX_UPLOAD_PHOTO_SIZE]],
    })
    console.log('PresignedPost:', presignedPost)
    return Response.json({ presignedPost })
  } catch (error) {
    console.error('Error creating presigned post:', error)
    return Response.json(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
