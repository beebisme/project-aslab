import Navbar from "../../components/navbar"
import "tailwindcss/tailwind.css"
import ListMateri from "../../components/listmateri"

export default function Word() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            {/* materi */}
            <div className="container flex flex-col lg:flex-row">
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
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Window Management</li>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Worksheet</li>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Kursor</li>
                        <li className="capitalize text-left list-decimal font-bold text-2xl lg:text-3xl"> Status Bar</li>
                    </div>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateri namaMateri="Microsoft Word" />
                </div>
            </div>
        </>

    )
}