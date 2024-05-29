import { getImageElementFromFile } from '@/features/image/getImageElementFromFile'
import { resizeImage } from '@/features/image/resizeImage'
import { clsx } from 'clsx'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {
  className?: string
  areaClassName?: string
  dragActiveClassName?: string
  maxUploadRectSize: number
  maxUploadFileSize: number
  children?: (isDragActive: boolean) => React.ReactNode
  onChange: (file: Blob) => void
}

export function ImageDndUploader({
  className,
  areaClassName,
  dragActiveClassName,
  maxUploadFileSize,
  maxUploadRectSize,
  children,
  onChange,
}: Props) {
  const [imgSrc, setImgSrc] = useState<string>()
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      const image = await getImageElementFromFile(file)
      const resizedFile = await resizeImage({
        image,
        size: maxUploadRectSize,
      })
      setImgSrc(image.src)
      onChange?.(resizedFile)
    },
    [onChange],
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpeg', '.jpg'] },
    maxSize: maxUploadFileSize,
    maxFiles: 1,
  })
  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className={clsx(areaClassName, isDragActive && dragActiveClassName)}
        {...(imgSrc && { style: { backgroundImage: `url(${imgSrc})` } })}
      >
        <input {...getInputProps()} />
        {!imgSrc && <>{children?.(isDragActive)}</>}
      </div>
    </div>
  )
}
