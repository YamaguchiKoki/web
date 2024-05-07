"use client"

import { NoteCreateForm } from "@/components/elements/forms/noteCreateForm";
import { ModalContainer } from "@/components/elements/modalContainers/modalContainer";
import { NoteCreateModal } from "@/components/elements/modals/noteCreateModal";
import type { ReactNode } from "react"

interface Props {
  children: ReactNode,
  toggleClassName?: string;
}

export function NoteCreateModalContainer({
  children,
  toggleClassName
}: Props) {
  return (
    <ModalContainer
      toggleClassName={toggleClassName}
      content={(closeModal) => (
        <NoteCreateModal close={closeModal}>
          <NoteCreateForm close={closeModal} />
        </NoteCreateModal>
      )}
    >
      {children}
    </ModalContainer>
  )
}