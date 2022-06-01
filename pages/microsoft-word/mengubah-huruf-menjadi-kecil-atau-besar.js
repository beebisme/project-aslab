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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Mengubah Huruf Menjadi Kecil/Besar di MS Word</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Kali kita akan belajar mengenai cara mengubah huruf kecil menjadi huruf besar di MS Word atau sebaliknya menggunakan Change case di Toolbar. Untuk lebih jelasnya silahkan simak langkah-langkahnya di bawah ini:
                    </p>
                    <br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Sorot atau blok teks yang diinginkan. Sesuai penjelasan di atas kita bisa menyorot 1 kata, 1 kalimat hingga 1 dokumen.</li>
                        <li>Klik menu <b>Home</b></li>
                        <li>Klik tombol <b>Change Case</b> yang dilambangkan dengan icon <b>Aa</b>. Maka akan tampil pilihan <b>Sentence case, lowercase, UPPERCASE, Capitalize Each Word dan tOGGLE cASE.</b></li>
                    </div>


                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/2.mp4" type="video/mp4" />
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