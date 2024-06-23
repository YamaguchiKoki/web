import ListForPc from "@/features/playlist/components/listForPc";
import type { ReactNode } from "react";


interface Props {
    children: ReactNode
}

export default async function LikedLayout({ children }: Props) {

    return (
        <section className="flex h-[90vh] flex-row">
            <ListForPc />
            {children}
        </section>
    );
}