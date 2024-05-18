'use client'
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useForm } from "react-hook-form";
import { ToolMenu } from "@/app/_components/notes/toolMenu";
import { Button } from "@/components/ui/button";

export function Editor() {
  const { handleSubmit, setValue } = useForm();

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-base m-5 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      //JSONに変換
      const json = editor.getJSON();
      setValue("body", json);
    },
  });

  if(!editor) return null;

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col justify-center items-center px-10 w-2/3 lg:w-1/3">
      <div className=" mt-10 mx-auto border-zinc-300 border">
        <ToolMenu editor={editor} />
        <div className="p-3 overflow-y-scroll overflow-hidden mt-3">
          <EditorContent editor={editor} />
        </div>
      </div>
      <div className="flex items-center pt-6">
        <Button className="w-1/4 mx-auto items-center">
          送信
        </Button>
      </div>
    </form>
  )

}