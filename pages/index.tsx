import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

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
