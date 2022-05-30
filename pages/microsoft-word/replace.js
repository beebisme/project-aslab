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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Mengganti Kata di MS Word dengan Replace secara cepat</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Ketika kita mengetik sesuatu di dokumen ternyata ada kata atau kalimat yang harus direvisi. Jika dokumen yang kita tulis terdiri dari banyak halaman, maka akan sulit mengganti tulisan secara manual. Dengan memanfaatkan fitur replace kita tidak perlu repot untuk mencari dan mengganti kata tersebut satu persatu.
                    </p>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Replace adalah fitur di Microsoft Word yang digunakan untuk mengganti teks atau frasa dalam dokumen secara otomatis. Ada 2 pilihan pada fitur ini, kita bisa mengganti langsung semua kata dengan Replace All atau mengganti satu-persatu dengan Replace. Berikut langkah- langkah mengganti kata di word menggunakan replace :
                    </p>

                    <br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Klik menu <b>Home.</b></li>
                        <li>Klik tombol <b>Replace</b> pada grup Editing. Kita juga bisa menggunakan cara cepat dengan shortcut kombinasi keyboard <b>CTRL+H</b>. Maka akan tampil kotak dialog <i>Find and Replace</i></li>
                        <li>Isi kata yang ingin diganti pada <b>Find what</b>.</li>
                        <li>Isi kata penggantinya pada bagian <b>Replace with.</b></li>
                        <li>Klik <b>Replace All</b> untuk mengganti semua kata atau kalimat sekaligus yang sesuai. Atau, jika kita ingin menggantinya satu-persatu kita juga bisa klik <b>Replace</b> berkali-kali sesuai kebutuhan.</li>
                        <li>Tutup kotak dialog <b>Find and Replace</b> jika sudah selesai.</li>
                    </div>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/5.mp4" type="video/mp4" />
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