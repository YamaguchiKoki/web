import { NoteContainer } from "@/app/_components/notes/noteContainer";
import type React from "react";

interface Props {
  children: React.ReactNode;
}
export default function NotesLayout({ children }: Props) {
  return (
    <div className="flex">
      <NoteContainer />
      { children }
    </div>
  )
}