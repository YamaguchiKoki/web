import { NoteContainer } from '@/features/notes/components/noteContainer'
import type React from 'react'

interface Props {
  children: React.ReactNode
}
export default function NotesLayout({ children }: Props) {
  return (
    <div className="flex">
      <NoteContainer />
      {children}
    </div>
  )
}
