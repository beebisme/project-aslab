import { useState } from "react";
import "tailwindcss/tailwind.css"

export default function Modal(
    { score, status }
) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className={`${status} bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-10 py-3 rounded-lg hover:bg-sky-700 outline-none focus:outline-none mx-10 lg:mx-20 my-10 ease-linear transition-all duration-150`}
                type="button"
                onClick={() => setShowModal(true)}
            >
                Lihat Nilai
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center mx-10 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex flex-col items-center justify-center p-5 rounded-t">
                                    <img className="w-28 h-28" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-celebration-award-and-success-wanicon-lineal-color-wanicon.png" />
                                    <a target="_blank" href="https://icons8.com/icon/DqxKl8rWkEQ8/celebration" className="text-cyan-500 text-xs">Celebration icon by Icons8</a>
                                </div>
                                {/*body*/}
                                <div className="relative px-40 flex justify-center flex-col text-center">
                                    <h4 className="">Nilai anda adalah</h4>
                                    <p className="my-4 text-slate-500 text-6xl font-bold text-sky-600">
                                        {score * 10}
                                    </p>
                                    <h4>anda menjawab {score} soal dengan benar</h4>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}