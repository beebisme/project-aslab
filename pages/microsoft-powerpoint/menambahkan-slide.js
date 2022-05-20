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
                <div className="text-center w-11/12 lg:w-8/12 ml-10 my-6 px-10">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-auto capitalize">Cara Menambahkan Slide Pada PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Setelah memilih lembar kerja presentasi, anda bisa membuat slide baru dengan memilih bagian New Slide pada menu seperti video di atas. Kemudian, akan muncul berbagai macam tipe slide. Pilih slide sesuai kebutuhan presentasi anda.  Untuk lebih jelasnya berikut akan dibahas satu-persatu fungsi pada menu - menunya :</p>
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li><b> New Slide</b> digunakan untuk menambahkan slide baru yang akan kita buat.</li>
                        <li><b> Layout</b> digunakan untuk menganti layout pada slide yang kita pilih.</li>
                        <li><b> Reset</b> digunakan untuk mengembalikan format kesemula atau default.</li>
                        <li><b> Section</b> digunakan mengelompokkan slide - slide yang memiliki topik yang sama.</li>
                    </div>
                </div>

                {/* list materi */}
                <div className="my-8 flex justify-center px-10">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}