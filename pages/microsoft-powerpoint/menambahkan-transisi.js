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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Memberikan Transisi Pada Slide PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Pilih teks atau gambar yang akan diberi transisi, lalu pilih menu <i>Transisions</i> pada menu bar. Lalu, akan muncul beberapa pilihan transisi. Jika Anda ingin melihat lebih banyak transisi silahkan klik tanda panah kebawah seperti yang ditunjukkan pada video dibawah ini.  </p>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/powerpoint/6.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}