import Head from 'next/head'
import "tailwindcss/tailwind.css"
import HomePage from './homepage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Belajar Microsoft Office</title>
        <link rel="icon" href="/office.ico" />
      </Head>

      <main>
        <HomePage />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #eaeaea
        }
      `}</style>
    </div>
  )
}
