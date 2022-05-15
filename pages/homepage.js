import "tailwindcss/tailwind.css"
import Link from "next/dist/client/link";


export default function HomePage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
            <div>
                <div className="flex flex-col">
                    <h1 className="text-[#0A192F] ml-10 sm:ml-16 sm:pr-10 font-sans font-bold text-4xl lg:text-6xl">Learn Microsoft Office Easily</h1>
                    <div className="flex flex-col lg:flex-row mt-10 ml-10 sm:ml-16">
                        <button className=" w-max mb-4 lg:mb-0 text-center bg-sky-500 text-white hover:shadow-lg hover:shadow-sky-500/50 rounded-lg py-2 md:py-4 px-8 md:px-10 font-semibold hover:bg-sky-400 hover:text-white"><Link href="/word">Microsoft Word</Link></button>
                        <button className="w-max lg:ml-4 text-center bg-sky-500 text-white hover:shadow-lg hover:shadow-sky-500/50 rounded-lg py-2 md:py-4 px-4 md:px-10 font-semibold hover:bg-sky-400 hover:text-white"><Link href="/powerpoint">Microsoft Powerpoint</Link></button>
                    </div>
                </div>

            </div>
            <img src="/assets/illustration.svg" alt="ilustrasi" className="sm:mr-6 -mt-6 lg:mt-0" />
        </div>
    )
}