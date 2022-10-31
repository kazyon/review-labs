import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {


  const handleOnBannerBtnClick = () =>{
    console.log('hi banner button');  
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Review Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View Products Nearby" handleOnClick={handleOnBannerBtnClick} /> 
      </main>
    </div>
  )
}

export default Home
