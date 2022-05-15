import Link from "next/link"
import "tailwindcss/tailwind.css"

export default function ListMateriPP() {
    return (
        <div className="ml-2 bg-gray-100 p-5 rounded-lg">
            <h1 className="text-xl font-semibold">Daftar Materi Microsoft Powerpoint</h1>
            <div className="container list-decimal mt-2">
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/cara-menggunakan-pp-di-pc">Cara Menggunakan Powerpoint Di PC/Laptop</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/fungsi-tool-group-font">Fungsi Tools Group Font Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/cara-menambahkan-dan-memformat-teks">Cara Menambahkan dan Memformat Teks Pada Powerpoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/menambahkan-gambar">Cara Menambahkan Gambar Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/memberikan-animasi-pada-slide">Cara Memberikan Animasi Pada Slide PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/menambahkan-transisi">Cara Memberikan Transisi Pada Slide PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/mengganti-tema">Cara Mengganti Tema Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/menambahkan-slide">Cara Menambahkan Slide Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/menghapus-slide">Cara Menghapus Slide Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/menyimpan-dan-menampilkan-presentasi">Cara Menyimpan dan Menampilkan Slide Presentasi Pada PowerPoint</Link></li>
                <li className="text-blue-500 hover:underline text-base md:w-96 mb-2"><Link href="/microsoft-powerpoint/quiz-pp">Quiz Microsoft Powerpoint</Link></li>
            </div>
        </div>


    )
}