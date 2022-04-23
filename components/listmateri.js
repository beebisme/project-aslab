import Link from "next/link"
import "tailwindcss/tailwind.css"

export default function ListMateri({ namaMateri }) {
    return (
        <div className="border-0 lg:border-2 border-slate-300 p-4 rounded">
            <h1 className="text-xl font-semibold">Daftar Materi {namaMateri}</h1>
            <div className="container list-decimal mt-2">
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2 capitalize"><Link href="/microsoft-word/tampilan-microsoft-word-dan-fungsinya">Bagian-bagian tampilan microsoft word dan fungsinya</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Mengubah Huruf Menjadi Kecil/ Besar di MS Word</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Copy Paste dan Cut di MS Word</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Mencari Kata di Word dengan Find</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Mengganti Kata di MS Word dengan Replace secara cepat</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Cara membatalkan perintah di microsoft word menggunakan Undo dan Redo</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Mengubah Jenis Font</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Fungsi Underline, Bold & Italic </Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Mengatur Spasi Antar Kata dan Huruf dengan Spacing</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="#">Membuat Pangkat</Link></li>
            </div>
        </div>


    )
}