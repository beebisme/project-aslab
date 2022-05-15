import Head from 'next/head'
import "tailwindcss/tailwind.css"
import HomePage from './homepage'
import ClipLoader from "react-spinners/PropagateLoader";
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Belajar Microsoft Office</title>
        <link rel="icon" href="/office.ico" />
      </Head>

      <main>
        {
          loading ?

            <ClipLoader
              size={20}
              color={"#21B7DE"}
              loading={loading}
            />

            :

            setTimeout(() => {
              <HomePage />
            }, 500)
        }
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
