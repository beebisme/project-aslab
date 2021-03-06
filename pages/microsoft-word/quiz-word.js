import Navbar from "../../components/navbar";
import "tailwindcss/tailwind.css"

import { useState } from "react";
import { useEffect } from "react";
import Modal from "../../components/modal";

export default function QuizWord() {
    const [Soal, setSoal] = useState([{
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
    }]);

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
                <p className={`${final ? "px-20 pt-2" : "hidden"}`}>Status : <span className={`${status == "Salah" ? "text-red-500 font-bold" : "text-green-700 font-bold"}`}>{status}</span></p>
            </div>
        </>
    )
}

