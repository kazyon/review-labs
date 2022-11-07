import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import Banner from '../components/banner';
import styles from '../styles/Home.module.css';

import stores  from '../data/review-labs.json';

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
        <Banner 
          buttonText="View Products Nearby" 
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={400} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {stores.map((stores) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Card 
              name={stores.name} 
              imgUrl={stores.imgUrl}
              href={'/review-labs/${stores.id}'}
              className={styles.card}
              />
          );
          })}
        </div>
      </main>
    </div>
  )
}

export default Home
