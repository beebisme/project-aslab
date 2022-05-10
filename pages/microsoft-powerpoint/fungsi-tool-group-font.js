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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Fungsi Tools Group Font Pada PowerPoint</h1>
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li><b>Font</b> digunakan untuk memilih jenis huruf.</li>
                        <li><b>Font Size</b> digunakan untuk memilih ukuran dari huruf.</li>
                        <li><b>Increase Font Size</b> digunakan untuk memperbesar ukuran huruf. </li>
                        <li><b>Decrease Font Size</b> digunakan untuk memperkecil ukuran huruf.</li>
                        <li><b>Clear All Formating</b> digunakan untuk mengembalikan format seperti semula.</li>
                        <li><b>Bold</b> digunakan untuk memberikan format cetak tebal.</li>
                        <li><b>Italic</b> digunakan untuk memberikan format cetak miring.</li>
                        <li><b>Underline</b> digunakan untuk memberikan format garis bawah.</li>
                        <li><b>Strikethrought</b> digunakan untuk memberikan garis pada tengah tulisan.</li>
                        <li><b>Text Shadow</b> digunakan untuk memberikan efek bayangan.</li>
                        <li><b>Character Spacing</b> digunakan untuk menambahkan jarak spasi antar huruf.</li>
                        <li><b>Change Chase</b> digunakan untuk mengganti huruf kapital sesuai kebutuhan.</li>
                        <li><b>Font Colour</b> digunakan untuk memberi warna pada teks.</li>
                        <li><b>Text Highlight Color</b> digunakan untuk memberikan warna pada latar belakang pada teks.</li>
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