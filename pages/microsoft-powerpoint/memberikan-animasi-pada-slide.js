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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Memberikan Animasi Pada Slide PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Pilih teks atau gambar yang akan diberi animasi, lalu pilih menu <i>animations</i> pada menu bar. Lalu, akan muncul beberapa animasi. Jika Anda ingin melihat lebih banyak animasi silahkan klik tanda panah kebawah seperti yang ditunjukkan pada video dibawah ini.  </p>
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