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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara membatalkan perintah di microsoft word menggunakan Undo dan Redo</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Undo adalah fitur yang berfungsi untuk membatalkan perintah di Microsoft Word. Kita bisa menggunakannya saat melakukan kesalahan di MS Word sehingga ingin mengembalikan ke kondisi sebelum melakukan kesalahan. Jika tombol undo digunakan untuk membatalkan perintah sebelumnya, maka redo berfungsi untuk membatalkan perintah undo yang telah dilakukan.
                    </p>

                    <br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Klik tombol <b>Undo</b> pada quick access toolbar tepatnya di atas jendela sebelah kiri. Maka dokumen akan dikembalikan ke 1 langkah pengeditan sebelumnya. Kita juga bisa menggunakan tombol kombinasi keyboard <b>CTRL+Z</b> untuk melakukan Undo.</li>
                        <li>Jika belum sesuai keinginan klik tombol Undo lagi hingga kita berada di kondisi yang diinginkan.</li>
                        <li>Jika ingin membatalkan perintah undo, klik tombol <b>Redo</b> yang ada pada quick access toolbar di sebelah kiri atas ms word. Atau kita bisa menggunakan shortcut tombol kombinasi keyboard <b>Ctrl+Y</b>. Maka aplikasi akan membatalkan 1 langkah undo.</li>
                        <li>Klik <b>Redo</b> kembali untuk membatalkan undo lainnya.</li>
                        <li>Apabila kita ingin kembali kepada pengeditan sebelumnya yang lebih spesifik, kita bisa klik tombol tanda panah kecil yang mengarah ke bawah di samping tombol undo. Maka akan terbuka semua pengeditan yang telah kita lakukan.</li>
                        <li>Setelah itu klik salah satu langkah yang kita inginkan maka kita akan dibawa kembali ke langkah pengeditan yang kita pilih.</li>
                    </div>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/6.mp4" type="video/mp4" />
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