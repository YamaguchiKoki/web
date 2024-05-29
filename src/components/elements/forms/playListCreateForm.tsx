'use client'

import { ImageDndUploader } from '@/components/elements/imageDndUploader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { MAX_UPLOAD_PHOTO_SIZE, MAX_UPLOAD_PHOTO_WIDTH } from '@/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectLabel } from '@radix-ui/react-select'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

interface Props {
  close: () => void
}
// TODO: uploadfile機能の実装、s3sdkインストール、コンポーネント切り分け

function ImageUploader({ onChange }: { onChange: (file: Blob) => void }) {
  return (
    <ImageDndUploader
      className="aspect-[3/2] bg-center bg-cover"
      areaClassName="flex min-h-[480px] aspect-[3/2] flex-col items-center justify-center text-center border-2 border-dashed border-gray-200 rounded-[var(--border-radius)] bg-no-repeat bg-center bg-gray-100 bg-contain transition-duration-200"
      dragActiveClassName="text-white bg-gray-900"
      maxUploadFileSize={MAX_UPLOAD_PHOTO_SIZE}
      maxUploadRectSize={MAX_UPLOAD_PHOTO_WIDTH}
      onChange={onChange}
    >
      {(isDragActive) => (
        <>
          <p>ここに写真をドロップするか</p>
          <p>クリックしてファイルを選択</p>
        </>
      )}
    </ImageDndUploader>
  )
}

export function PlayListCreateForm({ close }: Props) {
  enum urlType {
    YouTube = 'YouTube',
    Spotify = 'Spotify',
    AppleMusic = 'AppleMusic',
    LineMusic = 'LineMusic',
    SoundCloud = 'SoundCloud',
    BandCamp = 'BandCamp',
  }
  const options = Object.values(urlType).map((value) => (
    <SelectItem key={value} value={value}>
      {value}
    </SelectItem>
  ))

  const schema = z.object({
    description: z.string(),
    songs: z.array(
      z.object({
        name: z.string(),
        url: z.string().url().nullable(),
        type: z.nativeEnum(urlType),
      }),
    ),
  })

  type FormData = z.infer<typeof schema>
  const defaultValue = { name: '', url: '', type: urlType.YouTube }

  const { control, handleSubmit } = useForm<FormData>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      description: '',
      songs: [defaultValue],
    },
  })

  const { fields, insert, remove, move } = useFieldArray({
    control,
    name: 'songs',
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    try {
      // TODO
    } catch (err) {}
  }

  const [imageData, setImageData] = useState<Blob>()

  const handleChangeFile = (file: Blob) => {
    setImageData(file)
  }

  const router = useRouter()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row bg-white">
      <section className="left flex flex-col">
        <ImageUploader onChange={handleChangeFile} />
        <div>
          <Textarea placeholder="description" name="description" />
        </div>
      </section>
      <section className="flex flex-col p-3">
        <div className="h-[500px] overflow-y-auto">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex flex-row space-x-4 mt-5">
                {/* 曲名 */}
                <Controller
                  name={`songs.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="name"
                      name={`songs[${index + 1}][name]`}
                    />
                  )}
                />
                {/* url */}
                <Controller
                  name={`songs.${index}.url`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      placeholder="url"
                      name={`songs[${index + 1}][url]`}
                    />
                  )}
                />
                {/* type  enumから生成する汎用的なコンポーネントに変える*/}
                <Controller
                  name={`songs.${index}.type`}
                  control={control}
                  render={({ field }) => (
                    <Select name={`songs[${index + 1}][type]`}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>url type</SelectLabel>
                          {options}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {/* add button */}
                <Button onClick={() => insert(index + 1, defaultValue)}>
                  add
                </Button>
                {/* delete button */}
                <Button
                  onClick={() => remove(index)}
                  variant="outline"
                  disabled={fields.length === 1}
                >
                  delete
                </Button>
                {/* 一つ下に移動 */}
                <Button onClick={() => move(index, index + 1)}>↓</Button>
                {/* 一つ上に移動 */}
                <Button onClick={() => move(index, index - 1)}>↑</Button>
              </div>
            )
          })}
        </div>
        <div className="flex w-full justify-end my-5">
          <Button onClick={handleSubmit(onSubmit)} className="w-1/5">
            送信
          </Button>
        </div>
      </section>
    </form>
  )
}
