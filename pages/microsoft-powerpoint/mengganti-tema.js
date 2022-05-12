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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Mengganti Tema Pada PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Klik pada tab menu <b>Design</b> . lalu group Themes . lalu Pilih Tema yang diinginkan, Selanjutnya cara memodifikasi/mengganti warna tema yang ada dengan klik pada icon menu Colors . lalu pilih tema sesuai keinginan anda, contoh : Yellow. Untuk lebih jelasnya anda dapat melihat pada video dibawah ini :</p>
                    <p>(video)</p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}