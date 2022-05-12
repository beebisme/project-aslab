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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Menyimpan dan Menampilkan Slide Presentasi Pada PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Simpan presentasi dengan mengklik menu <b>Save</b> di kiri atas aplikasi PowerPoint, atau klik <b>Ctrl + S</b>. lalu, untuk melihat hasil presentasi, anda dapat klik Menu <b>Slide Show</b> pada bar, lalu pilih Sub Menu <b>from Beginning</b>, untuk lebih jelasnya bisa dilihat pada video dibawah ini :</p>
                    <p>Ini video</p>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Layar akan berubah menjadi penuh <i>(fullscreen)</i>. Buka presentasi dengan cara mengklik ESC pada keyboard. </p>
                    <p>Ini video</p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}