import Navbar from "../components/navbar";
import Link from "next/dist/client/link";


export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="container flex flex-col-reverse md:flex-row justify-center my-20 md:my-20">
                <div className="flex flex-col self-center">
                    <div className="mx-10 md:mx-20 text-5xl font-bold text-[#0A192F] leading-tight">Learn Microsoft Office Easily</div>
                    <div className="flex flex-row mx-10 md:mx-20 my-10">
                        <div className="mr-4 border-2 border-[#133C7C] hover:bg-[#133C7C] rounded p-2 font-semibold hover:text-white"><Link href="/microsoft-word/word">Microsoft Word</Link></div>
                        <div className="border-2 border-[#133C7C] hover:bg-[#133C7C] rounded p-2 font-semibold hover:text-white"><Link href="/powerpoint">Microsoft Powerpoint</Link></div>
                    </div>
                </div>
                <div className="flex mx-2 flex justify-center">
                    <img src="/assets/developer.svg" alt="powerpoint" className="w-3/4 mb-10" />
                </div>
            </div>
        </>
    )
}