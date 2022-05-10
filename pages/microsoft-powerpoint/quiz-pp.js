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
        },
        {
            id: 1,
            soal: "2. Fasilitas yang membantu dalam pengaturan ukuran tampilan slide adalah...",
            jawaban: "A",
            pilihan_1: " Zoom Level",
            pilihan_2: " Tab Outline",
            pilihan_3: " Tab View",
            pilihan_4: " Status Bar"
        },
        {
            id: 2,
            soal: "3. Bagaimana cara menambahkan teks pada power point?",
            jawaban: "C",
            pilihan_1: " Pilih insert lalu klik shapes dan ketikan teks",
            pilihan_2: " Pilih home lalu klik new slide dan ketikan teks",
            pilihan_3: " Klik pada kolom slide lalu ketikkan teks",
            pilihan_4: " Klik pada kolom slide lalu ketikkan teks "
        },
        {
            id: 3,
            soal: "4. Apa yang pertama kali dilakukan ketika ingin menambahkan gambar pada slide:",
            jawaban: "D",
            pilihan_1: " Klik pada tab layout",
            pilihan_2: " Klik pada tab References",
            pilihan_3: " Klik pada tab Insert",
            pilihan_4: " Klik pada tab review"
        },
        {
            id: 4,
            soal: "5. Menu apa yang digunakan untuk menambahkan animasi pada slide : ",
            jawaban: "A",
            pilihan_1: " Design",
            pilihan_2: " Transitions",
            pilihan_3: " Insert",
            pilihan_4: " Animations"
        },
        {
            id: 5,
            soal: "6. Sebagai efek Visualisasi dari pergantian Slide adalah fungsi dari...",
            jawaban: "C",
            pilihan_1: " Insert Image",
            pilihan_2: " Paragpraph",
            pilihan_3: " Page Setup Margins",
            pilihan_4: " Columns"
        },
        {
            id: 6,
            soal: "7. Perintah untuk pengaturan desain slide, adalah...",
            jawaban: "B",
            pilihan_1: " Delete Cell",
            pilihan_2: " Merge Cell",
            pilihan_3: " Insert Cell",
            pilihan_4: " Insert Table"
        },
        {
            id: 7,
            soal: "8. tool pada grup fonts yang digunakan untuk memberikan efek bayangan adalah... ",
            jawaban: "A",
            pilihan_1: " Insert Picture",
            pilihan_2: " Insert Column",
            pilihan_3: " Insert Table",
            pilihan_4: " Insert"
        },
        {
            id: 8,
            soal: "9. Untuk menghapus slide dapat dilakukan dengan perintah ?",
            jawaban: "B",
            pilihan_1: " Table",
            pilihan_2: " Ruler",
            pilihan_3: " Image",
            pilihan_4: " Reference"
        },
        {
            id: 9,
            soal: "10. Untuk menyimpan powerpoint dapat dilakukan dengan ?",
            jawaban: "D",
            pilihan_1: " Find",
            pilihan_2: " Paste",
            pilihan_3: " Cut",
            pilihan_4: " Replace"
        }
    ]);

    const [active, setActive] = useState(false);
    const [final, setfinal] = useState(false);
    const [nilai, setNilai] = useState(0);

    const handleNilai = (e) => {
        if (e.target.value === Soal[e.target.id].jawaban) {
            if (nilai === 0) {
                setNilai(nilai + 1)
            } else {
                setNilai(nilai)
            }
        }
    }


    return (
        <>
            <Navbar />

            <div>
                {Soal.map(data => (
                    <PilihanGanda soal={data.soal} id={data.id} pilihan_1={data.pilihan_1} pilihan_2={data.pilihan_2} pilihan_3={data.pilihan_3} pilihan_4={data.pilihan_4} fungsi={handleNilai} />
                ))}
            </div>

            <button className={`${final ? "hidden" : " "} bg-sky-600 drop-shadow-2xl text-white active:bg-green-600 font-bold uppercase text-sm ml-10 lg:ml-20 my-16 lg:my-10 px-10 py-3 rounded-lg hover:bg-green-700 outline-none focus:outline-none mr-1 mb-1`} onClick={() => {
                setActive(!active)
                setfinal(!final)
            }}>Submit</button>
            <Modal score={nilai} status={active ? "" : "hidden"} />
        </>
    )
}


function PilihanGanda({
    soal, id, pilihan_1, pilihan_2, pilihan_3, pilihan_4, fungsi
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
            </div>
        </>
    )
}

