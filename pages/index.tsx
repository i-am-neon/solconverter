import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
      <>
        <Head>
          <title>Sol Converter</title>
          <meta name="description" content="Convert Sol to Lamports" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Main />
      </>
  )
}

export default Home
