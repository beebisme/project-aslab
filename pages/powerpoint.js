import Navbar from "../components/navbar"
import "tailwindcss/tailwind.css"
import ListMateriPP from "../components/listMateriPP"

export default function PowerPoint() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            {/* materi */}
            <div className="container flex flex-col lg:flex-row">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">TUTORIAL MENGGUNAKAN POWER POINT BAGI PEMULA</h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">PowerPoint tentu sobat-sobat sudah tahu bukan? Powerpoint adalah program atau software  komputer dikembangkan oleh Microsoft yang yang digunakan untuk membuat presentasi, baik itu untuk presentasi pekerjaan kantor, presentasi di sekolah atau perkuliahan dan presentasi lainnya.</p>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Kelebihan pada aplikasi powerpoint yaitu kita bisa menambahkan gambar-gambar, animasi, grafik, suara dan video. Sehingga presentasi yang kita buat akan lebih menarik dan lebih informatif, sehingga mudah untuk dipahami oleh audient.</p>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Walaupun begitu, untuk orang yang tidak pernah mengenal istilah ini ataupun tak pernah memakainya, pastilah bingung bagaimana cara menggunakan PowerPoint tersebut. Nah berikut ini akan dijelaskan bagaimana cara membuat PowerPoint yang baik untuk pemula, mulai dari membuat slide, menghapus slide, menambahkan animasi atupun transisi ke dalam PowerPoint. Yuk simak penjelasan dibawah ini :
                    </p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}