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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Copy Paste dan Cut di MS Word</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Salah satu fitur yang memudahkan kita dalam membuat dokumen adalah fitur Copy, Cut dan Paste. Jika kita ingin ada kalimat atau paragraph pada halaman pertama untuk diletakkan juga pada halaman ketiga, kita bisa memanfaatkan fitur ini.
                    </p>
                    <br />
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Copy adalah perintah yang memiliki fungsi untuk menyalin teks atau obyek lain dengan tetap mempertahankan objek aslinya. Jika kita ingin mendapatkan salinan suatu bagian teks dokumen ke posisi yang lain, kita bisa memanfaatkan fitur Copy yang ada pada MS Word. Paste adalah perintah yang digunakan setelah melakukan perintah copy atau cut. Fungsi paste adalah untuk menampilkan bagian teks dokumen yang telah di copy atau di cut.
                    </p>
                    <br />
                    <div className="leading-relaxed pr-10 text-justify mb-4">
                        <li>Pilih teks dokumen yang ingin disalin dengan cara menyorot atau blok teks dokumen tersebut.</li>
                        <li>Klik menu <b>Home</b> lalu klik icon <b>Copy</b> yang berada di grup Clipboard. Untuk cara yang lebih cepat, perintah copy dapat dilakukan dengan tombol kombinasi keyboard <b>CTRL+C</b></li>
                        <li>Sedangkan untuk Cut, Klik tombol <b>Cut</b> yang juga terdapat pada grup Clipboard. Selain dengan melakukan klik dari mouse kita juga bisa menggunakan cara cepat dengan menekan tombol <b>CTRL+X.</b></li>
                        <li>Tempatkan kursor pada posisi di mana teks tersebut akan dipaste sesuai dengan yang diinginkan.</li>
                        <li>Kemudian klik icon <b>Paste</b> yang berada tepat di sebelah icon Copy. Kita juga bisa menggunakan cara cepat dengan tombol shortcut kombinasi keyboard <b>CTRL+V.</b></li>
                        <li>Setelah itu, teks atau objek yang sudah disalin akan muncul di posisi yang sudah kita kehendaki.</li>
                    </div>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Perbedaan perintah cut paste dan copy paste adalah cut paste digunakan untuk memindahkan teks atau objek. Jadi teks atau objek tersebut akan hilang dari tempat awal lalu ditampilkan di lokasi baru sesuai keinginan. Sedangkan copy paste digunakan untuk menyalin teks atau objek. Jadi teks atau objek tersebut tetap ada di lokasi awalnya dan juga akan tampil di lokasi baru sesuai perintah.
                    </p>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/3.mp4" type="video/mp4" />
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