import type { Editor } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatStrikethrough,
  MdRedo,
  MdUndo,
} from 'react-icons/md';

export function ToolMenu ({ editor }: { editor: Editor }) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 border-b border-zinc-300 p-4 text-2xl">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={!editor.isActive('bold') ? 'opacity-20' : ''}
      >
        <MdFormatBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={!editor.isActive('strike') ? 'opacity-20' : ''}
      >
        <MdFormatStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
      >
        <MdUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
      >
        <MdRedo />
      </button>
    </div>
  )
}

