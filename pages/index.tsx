import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Coded and designed by Guilherme Lopes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.black}>
          <div className={styles.hero}>
            <div className={styles.text}>
              <h1 className={styles.title}>Rick and Morty Wiki</h1>
              <h3 className={styles.description}>Data about characters and their life</h3>
            </div>
            <Link href="/list/1"><button>Browse characters</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
