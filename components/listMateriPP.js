import Link from "next/link"
import "tailwindcss/tailwind.css"

export default function ListMateriPP() {
    return (
        <div className="ml-2 bg-gray-100 p-5 rounded-lg">
            <h1 className="text-xl font-semibold">Daftar Materi Microsoft Powerpoint</h1>
            <div className="container list-decimal mt-2">
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2 capitalize"><Link href="/microsoft-powerpoint/cara-menggunakan-pp-di-pc">Cara Menggunakan Powerpoint Di PC/Laptop</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/fungsi-tool-">Fungsi Tools Group Font Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/cara-menambahkan-dan-memformat-teks">Cara Menambahkan dan Memformat Teks Pada Powerpoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mencari-kata">Mencari Kata di Word dengan Find</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/replace">Mengganti Kata di MS Word dengan Replace secara cepat</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/undo-redo">Cara membatalkan perintah di microsoft word menggunakan Undo dan Redo</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mengganti-font">Mengubah Jenis Font</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/underline-bold-italic">Fungsi Underline, Bold & Italic </Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mengatur-spasi">Mengatur Spasi Antar Kata dan Huruf dengan Spacing</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/membuat-pangkat">Membuat Pangkat</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/quiz-pp">Quiz Microsoft Powerpoint</Link></li>
            </div>
        </div>


    )
}