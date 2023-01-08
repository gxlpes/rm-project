import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = ({ data }: any) => {

  return (
    <div className={styles.container}>

      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Coded and designed by Guilherme Lopes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Rick and Morty Wiki
        </h1>

        <p className={styles.description}>
          Data about characters and their life
        </p>

        <Link href="/list/1"><button>Browse characters</button></Link>

      </main>

    </div>
  )
}

export default Home
