import Navbar from "../components/navbar"
import "tailwindcss/tailwind.css"

export default function PowerPoint() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            {/* materi */}
            <div className="container flex flex-col lg:flex-row">
                <div className="text-center w-11/12 lg:w-8/12 ml-10 lg:ml-20 my-6">
                    <h1 className="font-bold text-2xl mb-4 mr-10 lg:mr-0 capitalize">ini judul</h1>
                    <p className="text-justify mr-10 lg:mr-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus mollitia ipsum pariatur aspernatur nulla reiciendis optio non porro velit deserunt quis maiores tempore soluta tempora quae, exercitationem amet explicabo omnis enim tenetur voluptate sunt saepe. Repudiandae tenetur odit doloribus autem quasi cum eligendi! Laudantium tenetur incidunt perspiciatis, omnis totam non ab voluptate iusto maiores deleniti impedit fugiat delectus dolores! Voluptatem est nihil dolore obcaecati commodi sequi facilis aliquid culpa ex dolores, suscipit esse. Facere repudiandae minima repellat, delectus sunt nobis aut veniam tempore qui officia similique, minus veritatis? Labore a exercitationem nemo velit consequuntur voluptatibus iste vero totam adipisci!</p>
                </div>

                {/* list materi */}
                <div className="mr-10 lg:mr-20 ml-10 my-8">

                </div>
            </div>

            {/* soal */}
            <div>
                <div className="ml-10 lg:ml-20 font-bold text-2xl capitalize">soal</div>
                <div className="mx-10 lg:mx-20 capitalize my-2 md:w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui, dicta doloribus mollitia ad quam molestias officiis nemo eos assumenda!</div>
            </div>
        </>

    )
}