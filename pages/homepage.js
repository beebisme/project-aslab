import Navbar from "../components/navbar";
import "tailwindcss/tailwind.css"
import Link from "next/dist/client/link";


export default function HomePage() {
    return (
        <div className="overflow-hidden bg-black flex flex-col justify-center items-center">
            <div className="relative h-screen w-screen opacity-60 -translate-y-10 scale-y-100 -z-2 blur-sm">
                <video autoPlay loop muted>
                    <source src="/assets/tim13.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute top-0 h-screen w-screen z-2 bg-[#0A192F] opacity-50" />

            <div className="absolute z-3">
                <div className=" text-white font-bold text-6xl text-center">
                    LEARN MICROSOFT OFFICE EASILY
                </div>
                <div className="flex flex-row mt-10 justify-center">
                    <div className="mr-4 mb-4 lg:mb-0 w-48 text-center border-2 border-white text-white drop-shadow-lg shadow-[#133C7C] rounded-lg p-4 font-semibold hover:bg-white hover:text-[#0A192F]"><Link href="/microsoft-word/word">Microsoft Word</Link></div>
                    <div className="w-58 ml-4 text-center border-2 border-white text-white rounded-lg p-4 font-semibold hover:bg-white hover:text-[#0A192F]"><Link href="/powerpoint">Microsoft Powerpoint</Link></div>
                </div>

            </div>
        </div>

    )
}