import Navbar from "../../components/navbar";
import "tailwindcss/tailwind.css"

import { useState } from "react";
import Modal from "../../components/modal";

export default function QuizWord() {
    const [Soal, setSoal] = useState([
        {
            id: 0,
            soal: "1. Pada bagian kiri paling bawah jendela MS Word terdapat bagian yang berfungsi untuk menampilkan informasi secara real time mengenai perintah yang sedang aktif pada dokumen yang sedang dibuka adalah…",
            jawaban: "A",
            pilihan_1: " Status Bar",
            pilihan_2: " Title Bar",
            pilihan_3: " Window Management",
            pilihan_4: " Worksheet",
            status: "Salah",
            result: 0
        },
        {
            id: 1,
            soal: "2. Untuk mencari kata atau kalimat pada dokumen secara cepat pada Microsoft Word menggunakan fitur…",
            jawaban: "B",
            pilihan_1: " Replace",
            pilihan_2: " Find",
            pilihan_3: " Cut",
            pilihan_4: " Copy",
            status: "Salah",
            result: 0
        },
        {
            id: 2,
            soal: "3. Untuk menggunakan fitur undo dan redo bisa menggunakan tombol kombinasi keyboard…",
            jawaban: "C",
            pilihan_1: " CTRL+V dan CTRL+H",
            pilihan_2: " CTRL+S dan CRTL+B",
            pilihan_3: " CTRL+Z dan CRTL+Y",
            pilihan_4: " CRTL+F dan CRTL+X",
            status: "Salah",
            result: 0
        },
        {
            id: 3,
            soal: "4. Fitur yang digunakan untuk mengatur jarak spasi antar karakter pada Microsoft Word adalah…",
            jawaban: "D",
            pilihan_1: " Replace",
            pilihan_2: " Insert",
            pilihan_3: " Justify",
            pilihan_4: " Spacing",
            status: "Salah",
            result: 0
        },
        {
            id: 4,
            soal: "5. Pada grup pengaturan paragraf yang berfungsi untuk membuat teks atau paragraf rata di kedua sisi kanan dan kiri, bisa menggunakan tombol… ",
            jawaban: "A",
            pilihan_1: " Justify",
            pilihan_2: " Center",
            pilihan_3: " Align Left",
            pilihan_4: " Align Right",
            status: "Salah",
            result: 0
        },
        {
            id: 5,
            soal: "6. Jika anda ingin mengatur margin kiri, atas, kanan dan bawah sesuai keinginan pada dokumen, Microsoft Word telah menyediakan opsi yang berada pada menu Layout, yaitu…",
            jawaban: "C",
            pilihan_1: " Insert Image",
            pilihan_2: " Paragpraph",
            pilihan_3: " Page Setup Margins",
            pilihan_4: " Columns",
            status: "Salah",
            result: 0
        },
        {
            id: 6,
            soal: "7. Untuk menggabungkan sel table bisa menggunakan…",
            jawaban: "B",
            pilihan_1: " Delete Cell",
            pilihan_2: " Merge Cell",
            pilihan_3: " Insert Cell",
            pilihan_4: " Insert Table",
            status: "Salah",
            result: 0
        },
        {
            id: 7,
            soal: "8. Untuk menyisipkan gambar pada dokumen dapat menggunakan fitur…",
            jawaban: "A",
            pilihan_1: " Insert Picture",
            pilihan_2: " Insert Column",
            pilihan_3: " Insert Table",
            pilihan_4: " Insert",
            status: "Salah",
            result: 0
        },
        {
            id: 8,
            soal: "9. Mengatur indentasi pada Word dapat menggunakan…",
            jawaban: "B",
            pilihan_1: " Table",
            pilihan_2: " Ruler",
            pilihan_3: " Image",
            pilihan_4: " Reference",
            status: "Salah",
            result: 0
        },
        {
            id: 9,
            soal: "10. Kombinasi keyboard CTRL+H, digunakan untuk fitur…",
            jawaban: "D",
            pilihan_1: " Find",
            pilihan_2: " Paste",
            pilihan_3: " Cut",
            pilihan_4: " Replace",
            status: "Salah",
            result: 0
        },
        {
            id: 10,
            soal: " 11. Jika kita menggunakan pilihan ini maka sel yang baru akan dimasukkan ke tempat di mana kita mengklik sel ini. Lalu sel yang lama akan dipindah ke sebelah kanan table. Merupakan fungsi dari… ",
            jawaban: "B",
            pilihan_1: " Shift cells down ",
            pilihan_2: " Shift cells right ",
            pilihan_3: " Insert entire row ",
            pilihan_4: " Insert entire column ",
            status: "Salah",
            result: 0
        },
        {
            id: 11,
            soal: " 12. CTRL+J dan Ctrl+E berfungsi untuk… ",
            jawaban: "A",
            pilihan_1: " Membuat teks atau paragraf akan rata di kedua sisi dan rata tengah",
            pilihan_2: " Membuat teks atau paragraph rata di kanan dan kiri",
            pilihan_3: " Membuat teks atau paragraph rata di kiri dan kedua sisi",
            pilihan_4: " Membuat teks atau paragraph rata di tengah dan di sisi kanan",
            status: "Salah",
            result: 0
        },
        {
            id: 12,
            soal: "13.  Pilihan spacing yang digunakan untuk merenggangkan atau memperlebar spasi…. ",
            jawaban: "B",
            pilihan_1: " Normal ",
            pilihan_2: " Expanded  ",
            pilihan_3: " Condensed  ",
            pilihan_4: " Insert",
            status: "Salah",
            result: 0
        },
        {
            id: 13,
            soal: "14. Window Management terletak di sudut kanan atas jendela dan terdiri atas 4 tombol. Fungsi pada masing-masing tombol tersebut antara lain, kecuali… ",
            jawaban: "A",
            pilihan_1: " Tombol Close berfungsi untuk membuka jendela ms word",
            pilihan_2: " Tombol Restore Down digunakan untuk memperkecil jendela.",
            pilihan_3: " Tombol Maximize digunakan untuk menampilkan dan memperbesar jendela secara full.",
            pilihan_4: " Tombol Minimize, jika tombol ini diklik maka jendela word memperkecil dirinya dan menjadi icon aktif pada taskbar.",
            status: "Salah",
            result: 0
        },
        {
            id: 14,
            soal: "15. Lembar kerja, workspace atau teks area pada Microsoft Word disebut…",
            jawaban: "C",
            pilihan_1: " Status bar",
            pilihan_2: " Kursor",
            pilihan_3: " Worksheet",
            pilihan_4: " Quick accsess toolbar",
            status: "Salah",
            result: 0
        },
        {
            id: 15,
            soal: "16. Untuk mengahapus table menggunakan fitur",
            jawaban: "D",
            pilihan_1: " Insert picture",
            pilihan_2: " Insert table",
            pilihan_3: " Shift cell",
            pilihan_4: " Delete table",
            status: "Salah",
            result: 0
        },
        {
            id: 16,
            soal: "17. Untuk mengganti kata atau kalimat pada dokumen secara cepat menggunakan fitur…",
            jawaban: "A",
            pilihan_1: " Replace",
            pilihan_2: " Insert",
            pilihan_3: " Find",
            pilihan_4: " Column ",
            status: "Salah",
            result: 0
        },
        {
            id: 17,
            soal: "18. Ctrl+B dan Ctrl+I berfungsi untuk…",
            jawaban: "A",
            pilihan_1: " Menebalkan huruf dan memiringkan huruf.",
            pilihan_2: " Menghilangkan huruf dan menambahkan huruf",
            pilihan_3: " Menggaris bawahi huruf dan menebalkan huruf",
            pilihan_4: " Memiringkan huruf dan menggaris bawahi huruf",
            status: "Salah",
            result: 0
        },
        {
            id: 18,
            soal: "19. Jika ingin custom kertas bisa menggunakan fitur yang ada pada layout yaitu…",
            jawaban: "D",
            pilihan_1: " Margin",
            pilihan_2: " Picture",
            pilihan_3: " Orientation",
            pilihan_4: " More Paper Sizes. ",
            status: "Salah",
            result: 0
        },
        {
            id: 19,
            soal: "20. Berikut adalah menu wrap text dan fungsinya, kecuali",
            jawaban: "B",
            pilihan_1: " In Line With Text: Berfungsi untuk mensejajarkan posisi gambar dengan teks.",
            pilihan_2: " Square: Berfungsi untuk memposisikan gambar dengan teks membentuk pola lingkaran",
            pilihan_3: " Tight: Berfungsi untuk menempatkan gambar dengan teks sesuai dengan bentuk gambar.",
            pilihan_4: " Through: Berfungsi untuk menempatkan gambar dengan teks sesuai dengan bentuk gambar, jika terdapat celah maka teks akan mengisi celah atau ruang tersebut.",
            status: "Salah",
            result: 0
        }
    ]);

    const [active, setActive] = useState(false);
    const [final, setfinal] = useState(false);
    const [nilai, setNilai] = useState(0);

    const handleNilai = (e) => {
        if (e.target.value === Soal[e.target.id].jawaban) {
            Soal[e.target.id].status = "Benar"
            if (Soal[e.target.id].result === 0) {
                setNilai(nilai + 1)
                Soal[e.target.id].result = 1
            } else {
                setNilai(nilai)
            }
        } else {
            Soal[e.target.id].status = "Salah"
        }
    }

    let x = 2


    return (
        <>
            <Navbar />

            <div>
                {Soal.map(data => (
                    <PilihanGanda soal={data.soal} id={data.id} pilihan_1={data.pilihan_1} pilihan_2={data.pilihan_2} pilihan_3={data.pilihan_3} pilihan_4={data.pilihan_4} fungsi={handleNilai} status={data.status} final={final} />
                ))}
            </div>

            <button className={`${final ? "hidden" : " "} bg-sky-600 drop-shadow-2xl text-white active:bg-green-600 font-bold uppercase text-sm ml-10 lg:ml-20 my-16 lg:my-10 px-10 py-3 rounded-lg hover:bg-green-700 outline-none focus:outline-none mr-1 mb-1`} onClick={() => {
                setActive(!active)
                setfinal(!final)
            }}>Submit</button>

            <button className={`${!final ? "hidden" : ""} bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-10 py-3 rounded-lg hover:bg-sky-700 outline-none focus:outline-none ml-20 my-10 ease-linear transition-all duration-150`} onClick={function () {
                location.reload()
            }}>Mulai Ulang</button>

            <Modal score={nilai} status={active ? "" : "hidden"} />
        </>
    )
}


function PilihanGanda({
    soal, id, pilihan_1, pilihan_2, pilihan_3, pilihan_4, fungsi, status, final
}) {

    return (
        <>
            <div className="lg:w-3/4">
                <h1 className="px-10 lg:px-20 pt-6 font-semibold text-lg">{soal}</h1>
                <div className="container px-10 lg:px-20 capitalize text-red">
                    <input type="radio" id={id} name={id} value="A" onChange={fungsi} />{pilihan_1}<br />
                    <input type="radio" id={id} name={id} value="B" onChange={fungsi} />{pilihan_2}<br />
                    <input type="radio" id={id} name={id} value="C" onChange={fungsi} />{pilihan_3}<br />
                    <input type="radio" id={id} name={id} value="D" onChange={fungsi} />{pilihan_4}<br />
                </div>
                <p className={`${final ? "px-20 pt-2" : "hidden"}`}>Status : <span className={`${status == "Salah" ? "text-red-500 font-bold" : "text-green-500 font-bold"}`}>{status}</span></p>
            </div>
        </>
    )
}

