import Link from "next/link"
import "tailwindcss/tailwind.css"

export default function ListMateriWord() {
    return (
        <div className="ml-2 bg-gray-100 p-5 rounded-lg drop-shadow-xl">
            <h1 className="text-xl font-semibold">Daftar Materi Microsoft Word</h1>
            <div className="list-decimal mt-2">
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2 capitalize"><Link href="/microsoft-word/tampilan-microsoft-word-dan-fungsinya">Bagian-bagian tampilan microsoft word dan fungsinya</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mengubah-huruf-menjadi-kecil-atau-besar">Mengubah Huruf Menjadi Kecil/ Besar di MS Word</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/copy-paste-dan-cut">Copy Paste dan Cut di MS Word</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mencari-kata">Mencari Kata di Word dengan Find</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/replace">Mengganti Kata di MS Word dengan Replace secara cepat</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/undo-redo">Cara membatalkan perintah di microsoft word menggunakan Undo dan Redo</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mengganti-font">Mengubah Jenis Font</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/underline-bold-italic">Fungsi Underline, Bold & Italic </Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/mengatur-spasi">Mengatur Spasi Antar Kata dan Huruf dengan Spacing</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/membuat-pangkat">Membuat Pangkat</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-word/quiz-word">Quiz Microsoft Word</Link></li>
            </div>
        </div>


    )
}