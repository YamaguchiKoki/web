'use client'

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  close: () => void;
}

export function NoteCreateForm({ close }: Props) {
  const router = useRouter();
  const schema = z.object({
    title: z.string().max(100),
  });

  type FormData = z.infer<typeof schema>;

  const { control, handleSubmit } = useForm<FormData>({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      // TODO
    } catch (err) {

    }
  }

  return (
    // TODOデザインまともに　イラストとか入れて
    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
      <h1>Note新規作成</h1>
      <Textarea />
      <Button>
        作成
      </Button>
    </form>
  )

}