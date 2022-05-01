import { useState } from "react";
import Link from "next/dist/client/link";
import "tailwindcss/tailwind.css"

const hamburgerIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;

export default function TransparentNav() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col lg:flex-row justify-between bg-black">
            <div className="flex flex-row-reverse justify-between my-4">
                <button className="mr-10 my-1 text-white flex lg:hidden" type="button" onClick={() => setOpen(!open)}>{hamburgerIcon}</button>
                <div className="text-sky-300 text-2xl font-bold capitalize ml-10 lg:ml-20"><Link href="/homepage">TIM 13</Link></div>
            </div>
            <div className={`${open ? "flex" : "hidden"} lg:flex justify-end text-right`}>
                <ul className="list-none flex flex-col lg:flex-row mx-10 lg:mx-20 mb-4 lg:my-4">
                    <li className="lg:mr-8 text-neutral-300 font-semibold text-lg hover:text-white"><Link href="/microsoft-word/word">Microsoft word</Link></li>
                    <li className="lg:mr-8 text-neutral-300 font-semibold text-lg hover:text-white"><Link href="/powerpoint">Microsoft powerpoint</Link></li>
                    <li className="text-neutral-300 font-semibold text-lg hover:text-white"><Link href="/quiz">Quiz</Link></li>
                </ul>
            </div>
        </div>
    )
}