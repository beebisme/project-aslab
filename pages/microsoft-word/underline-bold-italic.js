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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Fungsi Underline, Bold & Italic</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal"><b>Bold</b> adalah salah satu fitur pengeditan tek s yang digunakan untuk mencetak tebal (menebalkan) suatu teks atau huruf pada Microsoft Word. <b>Italic</b> merupakan fitur pada Microsoft Word yang digunakan untuk mengatur huruf agar menjadi miring.  Icon italic dilambangkan dengan huruf I yang miring. <b>Underline</b> adalah fitur di MS Word yang berfungsi untuk membuat garis bawah pada teks. Icon underline dilambangkan dengan huruf U yang bergaris bawah.
                    </p><br />
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Berikut adalah cara membuat teks tebal, teks miring dan garis bawah pada teks di Microsoft Word :</p>
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Blok kata/kalimat pada dokumen yang ingin di ubah teks-nya menjadi huruf tebal.</li>
                        <li>Klik menu <b>Home</b></li>
                        <li>Klik ikon <b>bold</b> yang bertandakan huruf B. kita juga bisa menggunakan tombol cepat kombinasi keyboard dengan menekan tombol <b>Ctrl+B</b>.</li>
                        <li>Klik icon <b>italic</b> yang dilambangkan dengan huruf I miring. Untuk cara cepat di keyboard, kita bisa menggunakan <b>CTRL+I</b></li>
                        <li>Kemudian klik icon <b>underline</b> yang berbentuk huruf U dengan garis bawah. Untuk cara cepatnya bisa menggunakan kombinasi keyboard <b>CTRL+U.</b></li>
                        <li>Kemudian, huruf yang telah kita blok tadi akan berubah.</li>
                    </div>

                    <div className="w-10/12 mt-10">
                        <video controls>
                            <source src="/assets/video/word/8.mp4" type="video/mp4" />
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