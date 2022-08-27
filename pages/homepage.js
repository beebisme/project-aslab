import "tailwindcss/tailwind.css";
import Link from "next/dist/client/link";

export default function HomePage() {
  return (
    <>
      <div className="overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-400 w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-[#0A192F] px-4 font-sans font-bold text-4xl lg:text-6xl text-center">
          LEARN MICROSOFT OFFICE EASILY
        </div>
        <div className="flex flex-row mt-10 justify-center items-center">
          <button className="w-40 mr-4 text-center bg-[#00A4EF] text-white drop-shadow-lg rounded-lg py-4 px-8 font-semibold hover:bg-[#214479] hover:text-white">
            <Link href="/word">Word</Link>
          </button>
          <button className="w-40 text-center bg-[#ED6C47] text-white drop-shadow-lg rounded-lg py-4 px-8 font-semibold hover:bg-[#C13B1B] hover:text-white">
            <Link href="/powerpoint">Powerpoint</Link>
          </button>
        </div>
      </div>
    </>
  );
}
