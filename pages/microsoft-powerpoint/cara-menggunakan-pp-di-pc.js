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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Cara Menggunakan PowerPoint di PC/Laptop </h1>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Pertama kali yang harus anda lakukan adalah membuka aplikasi Microsoft PowerPoint. Selanjutnya, pilih template yang akan anda gunakan didalam slide. Jika tidak ingin memakai template, anda bisa memilih <b>Blank Presentation.</b> Dan untuk format penyimpanan PowerPoint yaitu <b>.pptx</b></p>
                    <p>(video)</p>
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Setelah itu, tampilannya akan seperti diatas. Sebelum itu anda harus mengenal beberapa bagian yang ada di powerpoint untuk mengerti konsep dasarnya, salah satunya seperti Ribbon ( merupakan daftar menu yang bisa anda klik untuk memunculkan menu-menu lainnya. Misalnya saja anda klik menu Ribbon “Home”, maka PowerPoint memunculkan beberapa menu yang sering kita gunakan selama membuat presentasi seperti menebalkan huruf dengan tombol <b>Bold</b> dan berbagai pengaturan teks lainnya ).</p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">
                    <ListMateriPP />
                </div>
            </div>
        </>

    )
}