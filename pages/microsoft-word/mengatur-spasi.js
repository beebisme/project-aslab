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
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">Mengatur Spasi Antar Kata dan Huruf dengan Spacing</h1>
                    {/* isi materi */}
                    <p className="text-justify mr-10 lg:mr-0 leading-normal">Spacing pada Microsoft Word adalah fitur yang digunakan untuk mengatur jarak spasi antar karakter. Dengan melakukan pengaturan pada fitur ini, spasi huruf dan kata juga otomatis diatur sesuai dengan angka yang ditentukan. Fitur ini terdapat pada pengaturan font di tab Advanced. Ada 3 pilihan spacing yaitu <b>Normal, Expanded dan Condensed</b>
                    </p><br />
                    <p className="text-justify mr-10 lg:mr-0 leading-normal"><b>Normal</b> merupakan pengaturan standar yang tidak merubah apapun. <b>Expanded</b> digunakan untuk merenggangkan atau memperlebar spasi. <b>Condensed</b> digunakan untuk mengecilkan spasi. Untuk lebih jelasnya, simak langkah-langkahnya di bawah ini: </p>
                    <div className="leading-relaxed pr-10 text-left mb-4">
                        <li>Sorot teks atau kalimat yang ingin di atur spasinya.</li>
                        <li>Klik menu <b>Home.</b></li>
                        <li>Klik kotak kecil yang bertanda panah miring ke bawah di sebelah <b>Font</b>. Maka akan tampil kotak dialog font.</li>
                        <li>Setelah itu, klik pada tab <b>Advanced.</b> Maka kita akan melihat beberapa pengaturan termasuk Spacing.</li>
                        <li>Klik pada pilihan di sebelah <b>Spacing.</b> Maka akan tampil opsi <b>Normal, Expanded dan Condensed</b> sesuai dengan penjelasan sebelumnya. Pilih sesuai dengan kebutuhan anda.</li>
                        <li>Atur jarak spasi sesuai kebutuhan dengan cara klik tanda panah atas atau bawah di kolom <b>By.</b></li>
                        <li>Klik tombol <b>OK</b> yang terletak di bawah kotak dialog tersebut jika pengaturan sudah sesuai.</li>
                    </div>

                    <div className="w-10/12 my-10">
                        <video controls>
                            <source src="/assets/video/word/9.mp4" type="video/mp4" />
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