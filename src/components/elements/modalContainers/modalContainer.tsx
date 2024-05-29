'use client'

import { useModal } from '@/hooks/useModal'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export function ModalContainer({
  children,
  content,
  defaultOpen = false,
  toggleClassName,
}: {
  children: ReactNode
  content: (closeModal: () => void) => ReactNode
  defaultOpen?: boolean
  toggleClassName?: string
}) {
  const { openModal, closeModal, isOpen } = useModal(defaultOpen)
  return (
    <>
      <button onClick={openModal} className={clsx(toggleClassName)}>
        {children}
      </button>
      {isOpen && content(closeModal)}
    </>
  )
}
