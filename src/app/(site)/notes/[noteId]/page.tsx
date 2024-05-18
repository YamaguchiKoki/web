import { Editor } from "@/app/_components/notes/editor";

interface Props {
  params: { noteId: string };
}
export default async function Page({ params }: Props) {
  const noteId = params.noteId;
  console.log(noteId);
  // これを渡しててデータ取得

  return (
    <section className="flex flex-col w-full items-center">
      <Editor />
    </section>
  )
}