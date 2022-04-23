import Navbar from "../components/navbar";

import { useState } from "react";
import Modal from "../components/modal";

export default function Quiz() {
    const answerKey = [
        {
            id: "0",
            jawaban: "A"
        },
        {
            id: "1",
            jawaban: "B"
        },
        {
            id: "2",
            jawaban: "C"
        }
    ]

    const [active, setActive] = useState(false);
    const [final, setfinal] = useState(false);
    const [nilai, setNilai] = useState(0);

    const handleNilai = (e) => {
        if (e.target.value === answerKey[e.target.id].jawaban) {
            setNilai(nilai + 1)
        }
    }


    return (
        <>
            <Navbar />
            <PilihanGanda soal=" ini soal" pilihan1=" pilihan pertama" pilihan2=" pilihan kedua" pilihan3=" pilihan ketiga" pilihan4=" pilihan keempat
            " number="1" fungsi={handleNilai} nomorSoal={answerKey[0].id} />

            <PilihanGanda soal=" ini soal" pilihan1=" pilihan pertama" pilihan2=" pilihan kedua" pilihan3=" pilihan ketiga" pilihan4=" pilihan keempat
            " number="2" fungsi={handleNilai} nomorSoal={answerKey[1].id} />

            <PilihanGanda soal=" ini soal" pilihan1=" pilihan pertama" pilihan2=" pilihan kedua" pilihan3=" pilihan ketiga" pilihan4=" pilihan keempat
            " number='3' fungsi={handleNilai} nomorSoal={answerKey[2].id} />

            <button className={`${final ? "hidden" : " "} bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm ml-10 lg:ml-20 my-16 lg:my-10 px-10 py-3 rounded-lg hover:bg-green-700 outline-none focus:outline-none mr-1 mb-1`} onClick={() => {
                setActive(!active)
                setfinal(!final)
            }}>Submit</button>
            <Modal score={nilai} status={active ? "" : "hidden"} />
        </>
    )
}


function PilihanGanda({
    soal, pilihan1, pilihan2, pilihan3, pilihan4, number, fungsi, nomorSoal
}) {

    return (
        <>
            <h1 className="px-10 lg:px-20 py-4 font-semibold text-lg">{soal}</h1>
            <div className="container px-10 lg:px-20 capitalize">
                <input type="radio" id={nomorSoal} name={number} value="A" onChange={fungsi} />{pilihan1}<br />
                <input type="radio" id={nomorSoal} name={number} value="B" onChange={fungsi} />{pilihan2}<br />
                <input type="radio" id={nomorSoal} name={number} value="C" onChange={fungsi} />{pilihan3}<br />
                <input type="radio" id={nomorSoal} name={number} value="D" onChange={fungsi} />{pilihan4}<br />
            </div>
        </>
    )
}

