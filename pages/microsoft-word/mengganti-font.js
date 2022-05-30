import Navbar from "../../components/navbar"
import "tailwindcss/tailwind.css"
import ListMateriWord from "../../components/listMateriWord"

export default function Word() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            {/* materi */}
            <div className="container flex flex-col lg:flex-row">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Mengubah Jenis Font</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Di menu Home tepatnya di sebelah font size terdapat pengaturan jenis font yang bisa digunakan secara cepat. Cara ini merupakan cara yang hampir selalu digunakan pengguna Microsoft Word karena mudah can cepat.
                    </p>
                    <br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Sorot atau blok teks yang ingin diganti font jika ingin mengubah jenis font pada tulisan yang sudah diketik.</li>
                        <li>Klik menu <b>Home</b></li>
                        <li>Klik pada tanda panah ke bawah di pengaturan font. Maka akan tampil banyak font yang dapat digunakan.</li>
                        <li>Cari nama font sesuai kebutuhan. Misalnya <b>Times New Roman.</b></li>
                        <li>Pilih font tersebut. Maka secara otomatis font akan berubah menjadi Times New Roman.</li>
                    </div>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/7.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriWord />
                </div>
            </div>
        </>

    )
}