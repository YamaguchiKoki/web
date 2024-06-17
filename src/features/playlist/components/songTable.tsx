import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const songs = [
    {
        id: 1,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },
    {
        id: 2,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },
    {
        id: 3,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },
    {
        id: 4,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },
    {
        id: 5,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },
    {
        id: 6,
        title: "交響曲第九番「歓喜によす」",
        created_at: "2024年6月10日",
        href: "http://localhost:3000/playlists/01hza4d8mttvr8ajtndapc52cv",
    },

]

export function SongTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>曲名</TableHead>
                    <TableHead>追加日</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {songs.map((song, index) => (
                    <TableRow key={song.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{song.title}</TableCell>
                        <TableCell>{song.created_at}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
