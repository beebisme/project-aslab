import Navbar from "../../components/navbar";
import "tailwindcss/tailwind.css"

import { useState } from "react";
import Modal from "../../components/modal";

export default function QuizPP() {
    const [Soal, setSoal] = useState([
        {
            id: 0,
            soal: "1. Format penyimpanan powerpoint adalah...",
            jawaban: "B",
            pilihan_1: " .XLSX",
            pilihan_2: " .PPTX",
            pilihan_3: " .DOCX",
            pilihan_4: " .JPG",
            status: "Salah",
            result: 0
        },
        {
            id: 1,
            soal: "2. Tool pada grup fonts yang digunakan untuk memberikan efek bayangan pada teks adalah ?...",
            jawaban: "B",
            pilihan_1: " Text Line",
            pilihan_2: " Text Shadow",
            pilihan_3: " Text Indent",
            pilihan_4: " Text Align",
            status: "Salah",
            result: 0
        },
        {
            id: 2,
            soal: "3. Icon yang digunakan untuk menambahkan daftar berpoin atau bernomor disebut ?",
            jawaban: "B",
            pilihan_1: " Number atau Circle",
            pilihan_2: " Bullets atau Numbering ",
            pilihan_3: " List atau Table of contens",
            pilihan_4: " Increase atau Decrease ",
            status: "Salah",
            result: 0
        },
        {
            id: 3,
            soal: "4. Hal pertama kali yang dilakukan ketika ingin menambahkan gambar pada slide adalah ?",
            jawaban: "C",
            pilihan_1: " Klik pada tab layout",
            pilihan_2: " Klik pada tab References",
            pilihan_3: " Klik pada tab Insert",
            pilihan_4: " Klik pada tab review",
            status: "Salah",
            result: 0
        },
        {
            id: 4,
            soal: "5. Tab menu yang digunakan untuk menambahkan animasi pada slide adalah ? ",
            jawaban: "D",
            pilihan_1: " Design",
            pilihan_2: " Transitions",
            pilihan_3: " Insert",
            pilihan_4: " Animations",
            status: "Salah",
            result: 0
        },
        {
            id: 5,
            soal: "6. Tab menu apa yang digunakan untuk menambahkan transisi pada slide?",
            jawaban: "C",
            pilihan_1: " Slide",
            pilihan_2: " Template",
            pilihan_3: " Transisions",
            pilihan_4: " Autocontent Wizard",
            status: "Salah",
            result: 0
        },
        {
            id: 6,
            soal: "7. Perintah yang digunakan untuk pengaturan desain slide adalah ?",
            jawaban: "C",
            pilihan_1: " Klik Menu Ribbon “Home” lalu Klik Tema yang diinginkan ",
            pilihan_2: " Klik Menu Ribbon “Insert” lalu Klik Tema yang diinginkan",
            pilihan_3: " Klik Menu Ribbon “Design” lalu Klik Tema yang diinginkan  ",
            pilihan_4: " Klik Menu Ribbon “View” lalu Klik Tema yang diinginkan ",
            status: "Salah",
            result: 0
        },
        {
            id: 7,
            soal: "8. Fungsi dari icon Section adalah ? ",
            jawaban: "C",
            pilihan_1: " Menambahkan slide baru yang akan kita buat.",
            pilihan_2: " Mengganti layout pada slide yang kita pilih.",
            pilihan_3: " Mengelompokkan slide yang memiliki topik sama.",
            pilihan_4: " Menambahkan desain pada powerpoint",
            status: "Salah",
            result: 0
        },
        {
            id: 8,
            soal: "9. Untuk menghapus slide dapat dilakukan dengan perintah ?",
            jawaban: "A",
            pilihan_1: " Klik kanan Slide lalu Klik Detele Slide",
            pilihan_2: " Klik Ribbon “Home” lalu Klik Delete Slide",
            pilihan_3: " Klik Ribbon “Format” lalu Klik Delete Slide ",
            pilihan_4: " Klik New slide lalu Klik Delete Slide ",
            status: "Salah",
            result: 0
        },
        {
            id: 9,
            soal: "10. Cara menyimpan hasil presentasi PowerPoint dapat dilakukan dengan ?",
            jawaban: "C",
            pilihan_1: " Ctrl + C",
            pilihan_2: " Ctrl + P",
            pilihan_3: " Ctrl + S",
            pilihan_4: " Ctrl + V",
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
                window.scrollTo(0, 0)
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

