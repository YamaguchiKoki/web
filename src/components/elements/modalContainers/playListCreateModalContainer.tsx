"use client"

import { PlayListCreateForm } from "@/components/elements/forms/playListCreateForm";
import { ModalContainer } from "@/components/elements/modalContainers/modalContainer";
import { PlayListCreateModal } from "@/components/elements/modals/playlistCreateModal";
import type { ReactNode } from "react"

interface Props {
  children: ReactNode,
  toggleClassName?: string;
}

export function PlayListCreateModalContainer({
  children,
  toggleClassName
}: Props) {
  return (
    <ModalContainer
      toggleClassName={toggleClassName}
      content={(closeModal) => (
        <PlayListCreateModal close={closeModal}>
          <PlayListCreateForm close={closeModal} />
        </PlayListCreateModal>
      )}
    >
      {children}
    </ModalContainer>
  )
}