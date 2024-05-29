import { NoteCreateModalContainer } from '@/components/elements/modalContainers/noteCreateModalContainer'
import { NoteItem } from '@/features/notes/components/noteItem'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const notes = [
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'notes/name',
    active: true,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
  {
    title: 'title1',
    created_at: '2024-04-14',
    href: 'name',
    active: false,
  },
]

export function NoteContainer() {
  return (
    <section className="w-full hidden lg:block lg:w-[400px]">
      <div className="top-[50px] border-b bg-zinc-50 px-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">Notes</span>
          <NoteCreateModalContainer>新規作成</NoteCreateModalContainer>
        </div>
      </div>
      <div className="overflow-y-auto h-[830px] rounded-md border bg-zinc-50">
        {notes.map((note) => (
          <NoteItem key={note.title} {...note} />
        ))}
      </div>
    </section>
  )
}
