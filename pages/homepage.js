import "tailwindcss/tailwind.css"
import Link from "next/dist/client/link";


export default function HomePage() {
    return (
        <>
            <div className="overflow-hidden bg-black flex flex-col justify-center items-center">
                <div className="relative translate-y-20 md:-translate-y-10 h-screen w-screen opacity-60 -translate-y-10 scale-y-100 -z-1 blur-sm">
                    <video autoPlay loop muted>
                        <source src="/assets/tim13.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute z-3">
                    <div className="text-white px-4 font-sans font-bold text-4xl lg:text-6xl text-center">
                        LEARN MICROSOFT OFFICE EASILY
                    </div>
                    <div className="flex flex-col lg:flex-row mt-10 justify-center items-center">
                        <button className=" w-max mb-4 lg:mb-0 text-center border-2 border-white text-white drop-shadow-lg shadow-[#133C7C] rounded-lg py-2 md:py-4 px-8 md:px-10 font-semibold hover:bg-white hover:text-[#0A192F]"><Link href="/microsoft-word/word">Microsoft Word</Link></button>
                        <button className="w-max lg:ml-4 text-center border-2 border-white text-white rounded-lg py-2 md:py-4 px-4 md:px-10 font-semibold hover:bg-white hover:text-[#0A192F]"><Link href="/powerpoint">Microsoft Powerpoint</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}