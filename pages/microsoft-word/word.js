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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Microsoft word</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Sebelum memulai tutorial belajar Microsoft Word sebaiknya kita memahami terlebih dulu apasih Microsoft Word itu?
                        Microsoft Word adalah sebuah program atau aplikasi perangkat lunak (software) pengolahan kata yang dikembangkan oleh Microsoft untuk membuat, mengedit dan mencetak sebuah tulisan dalam bentuk softcopy (file) maupun hardcopy (hasil print). Microsoft Word memiliki 3 fungsi utama yaitu untuk membuat dokumen, mengedit dokumen dan mencetak dokumen. Keunggulan dari Microsoft Word, software ini cukup efektif dalam menyelesaikan pekerjaan, efisien dalam menyelesaikan pekerjaan, bisa menekan biaya dan mendukung era paperless.
                        Saat ini menggunakan Microsoft Word sudah menjadi skill dasar yang harus dimiliki setiap orang terutama pelajar. Aplikasi Microsoft Word adalah salah satu aplikasi pengolah kata yang paling banyak diminati dan paling mudah digunakan (User Friendly)..
                        Oleh karena itu, kami membuat tutorial belajar menggunakan Microsoft Word untuk pemula. Pada tutorial ini kami menggunakan tampilan Microsoft Word 2019. Namun semua materi bisa digunakan pada versi word 2007, 2010, 2016 dan 2019.
                    </p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateri namaMateri="Microsoft Word" quiz="Quiz Microsoft Word" link="quiz-word" />
                </div>
            </div>
        </>

    )
}