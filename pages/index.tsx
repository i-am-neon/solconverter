import type { NextPage } from 'next'
import Head from 'next/head'
import Converter from '../components/Converter'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sol Converter</title>
        <meta name="description" content="Convert Sol to Lamports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='min-h-full bg-gray-800 selection:bg-solana-green selection:text-gray-800'>
        <Header />
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-solid border-gray-700 rounded-lg shadow px-5 py-6 sm:px-6">
              <Converter />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
