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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Membuat Pangkat di Microsoft Word</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Saat membuat sebuah dokumen, terkadang kita perlu menulis pangkat di dalam dokumen tersebut. Khususnya ketika kita membuat file matematika, fisika atau kimia. Ada 2 macam penulisan pangkat pada dokumen yaitu pangkat di atas dan pangkat di bawah. Berikut cara membuat pangkat di atas dan di bawah:
                    </p><br />
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Sorot huruf atau angka yang akan dijadikan pangkat</li>
                        <li>Klik menu <b>Home.</b></li>
                        <li>Untuk membuat pangkat atas, klik icon superscript yang berlambangkan icon x2 di toolbar Font. Kita juga bisa menggunakan tombol cepat keyboard dengan menekan <b>CTRL SHIFT dan +</b> secara bersamaan.</li>
                        <li>Untuk membuat pangkat bawah, klik pada icon subscript yang dilambangkan dengan icon x2. Untuk cara cepatnya tekan tombol <b>CTRL dan =</b> secara bersamaan. Maka huruf akan menjadi pangkat di bawah.</li>
                        <li>Huruf atau angka akan menjadi pangkat yang berada di atas.</li>
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