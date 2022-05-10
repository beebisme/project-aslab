import Navbar from "../../components/navbar"
import "tailwindcss/tailwind.css"
import ListMateriPP from "../../components/listMateriPP"

export default function Word() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            {/* materi */}
            <div className="container flex flex-col lg:flex-row">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Menambahkan dan Memformat Teks Pada PowerPoint</h1>
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Letakkan kursor di dalam kotak teks, lalu ketikkan sesuatu.</li>
                        <li>Pilih teks, lalu pilih satu atau beberapa opsi dari bagian <b>Home</b>, seperti <b>Font</b>, <b>Font Size</b>, <b>Bold</b>, <b>Italic</b>, <b>Underline</b>, dan lain - lain.</li>
                        <li>Untuk membuat daftar berpoin atau bernomor, pilih teks, lalu pilih <b>Bullets</b> atau <b>Numbering </b>( Selengkapnya bisa dilihat pada video di bawah ini ).</li>
                        <p>(ini video)</p>
                    </div>
                    <p>Ini video</p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}