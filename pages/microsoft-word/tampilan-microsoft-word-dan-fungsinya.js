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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Bagian-bagian tampilan microsoft word dan fungsinya</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Agar mudah mengoperasikan aplikasi dan belajar Microsoft Word, kita harus terlebih dahulu mengetahui bagian – bagian dari MS word. Berikut bagian- bagian Microsoft Word beserta fungsinya:
                    </p>
                    <br />
                    <div className="flex flex-col pr-10 text-justify">
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl">quick access toolbar</li>
                        <p className="mt-4 mb-2">
                            Toolbar ini memiliki 3 tombol yang berbentuk icon yaitu tombol Save, Undo & Redo serta Customize Quick Access Toolbar.
                            Fungsi toolbar akses cepat:
                        </p>
                        <div className="leading-relaxed text-left mb-4">
                            <li><span className="font-bold">Save</span>, untuk menyimpan setiap perubahan file dokumen</li>
                            <li><span className="font-bold">Undo</span>, untuk membatalkan/mengembalikan perubahan file dokumen yang terakhir. Terlihat tombol panah mengarah ke bawah untuk melihat setiap daftar perubahan file yang dibatalkan.</li>
                            <li><span className="font-bold">Redo</span>, untuk mengembalikan pembatalan apabila kita telah merubah file dokumen yang terakhir.</li>
                            <li><span className="font-bold">Customize Quick Access Toolbar</span>, untuk mengkustomisasi atau kita bebas mengatur tombol yang ada pada toolbar akses cepat sesuai dengan kebutuhan.</li>
                        </div>


                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Title Bar</li>
                        <p className="mt-4 mb-2">
                            Toolbar ini memiliki 3 tombol yang berbentuk icon yaitu tombol Save, Undo & Redo serta Customize Quick Access Toolbar. </p>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Worksheet</li>
                        <p className="mt-4 mb-2">
                            Worksheet biasa juga disebut sebagai lembar kerja, workspace atau teks area pada Microsoft Word.Bagian ini merupakan tempat untuk mengetik, mengedit, menambahkan gambar dan pekerjaan lain sesuai dengan kebutuhan kita. </p>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Kursor</li>
                        <p className="mt-4 mb-2">
                            Kursor berfungsi untuk menunjukkan posisi pengetikan atau posisi interaksi dengan layar saat ini.Ketika mengetikkan sesuatu maka teks akan keluar di lokasu kursor tersebut.Kita bisa memindahkan kursor kita dengan menggerakkan mouse kemanapun yang kita inginkan. </p>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Status Bar</li>
                        <p className="mt-4 mb-2">
                            Status bar terdapat pada bagian kiri paling bawah jendela MS Word.Fungsi status bar adalah untuk menampilkan informasi secara real time mengenai perintah yang sedang aktif pada dokumen yang sedang dibuka </p>
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