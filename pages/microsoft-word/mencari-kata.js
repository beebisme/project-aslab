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
            <div className="flex flex-col lg:flex-row pr-10">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Mencari Kata di Word dengan Find</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Find digunakan untuk mencari kata atau kalimat pada dokumen secara cepat. Untuk menggunakannya kita hanya perlu klik pada icon Find yang berbentuk kaca pembesar di menu Home pada grup Editing. Selain itu kita juga bisa menggunakan shortcut tombol kombinasi keyboard CTRL+F untuk mengaktifkan submenu find. Lebih jelasnya silahkan simak langkah-langkahnya di bawah ini.
                    </p>
                    <br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Klik menu <b>Home.</b></li>
                        <li>Klik tombol <b>Find </b> yang memiliki icon kaca pembesar. Letaknya berada di grup Editing. Kita juga bisa menggunakan tombol cepat keyboard <b>CTRL+F.</b></li>
                        <li>Letakkan kursor pada kolom search atau kotak putih di jendela navigasi dengan cara klik kolom tersebut.</li>
                        <li>Ketik kata atau kalimat yang ingin di cari, contoh kata word. Maka kata tersebut akan langung dicari oleh MS Word dan ditampilkan dengan tanda stabilo <i>(highlight)</i> warna kuning.</li>
                        <li>Klik arah bawah atau arah atas untuk melihat semua kata yang ditemukan.</li>
                    </div>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/4.mp4" type="video/mp4" />
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