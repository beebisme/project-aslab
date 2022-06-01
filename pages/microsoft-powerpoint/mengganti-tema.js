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
            <div className="flex flex-col lg:flex-row pr-10">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Mengganti Tema Pada PowerPoint</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Klik pada tab menu <b>Design</b> . lalu group Themes . lalu Pilih Tema yang diinginkan, Selanjutnya cara memodifikasi/mengganti warna tema yang ada dengan klik pada icon menu Colors . lalu pilih tema sesuai keinginan anda, contoh : Yellow. Untuk lebih jelasnya anda dapat melihat pada video dibawah ini :</p>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/powerpoint/7.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}