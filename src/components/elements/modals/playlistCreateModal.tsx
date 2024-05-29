'use client'

import type { ReactNode } from 'react'

interface Props {
  close: () => void
  children: ReactNode
}

export function PlayListCreateModal({ children, close }: Props) {
  return (
    <div className="flex items-center justify-center size-full fixed inset-0 z-50">
      <div
        className="fixed inset-0 size-full bg-black bg-opacity-85 z-10"
        onClick={close}
      />
      <div role="dialog" aria-modal="true" className="z-30">
        {children}
      </div>
    </div>
  )
}
