'use client'
import { Button } from '@/components/ui/button'
import { ToolMenu } from '@/features/notes/components/toolMenu'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export function Editor() {
  const { handleSubmit, setValue } = useForm()
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState('<p>ここに初期の本文を入力してください。</p>')

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-base m-5 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      setValue('body', json)
      setContent(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && isEditing) {
      editor.commands.setContent(content)
    }
  }, [isEditing, editor, content])

  if (!editor) return null

  const onSubmit = (data: any) => {
    console.log('送信された')
    setIsEditing(false)
  }

  const handleEditClick = (e) => {
    e.preventDefault() // デフォルトのフォーム送信動作を防ぐ
    setIsEditing(true)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-col items-center justify-center px-10"
    >
      {isEditing ? (
        <div className="mx-auto mt-10 border border-zinc-300">
          <ToolMenu editor={editor} />
          <div className="mt-3 overflow-hidden overflow-y-scroll p-3">
            <EditorContent editor={editor} />
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-10 rounded border border-zinc-300 p-3 shadow-md">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}

      <div className="flex items-center pt-6">
        {isEditing ? (
          <Button className="mx-auto w-1/4 items-center" type="submit">
            送信
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleEditClick}
            className="mx-auto w-1/4 items-center"
          >
            編集
          </Button>
        )}
      </div>
    </form>
  )
}
