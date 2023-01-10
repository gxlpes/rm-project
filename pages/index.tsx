import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import image from "../public/image.jpg"

const Home: NextPage = ({ data }: any) => {

  return (
    <div className={styles.container}>

      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Coded and designed by Guilherme Lopes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >


        <div className={styles.hero}>

          <div className={styles.info}>

            <h1 className={styles.title}>
              Rick and Morty Wiki
            </h1>

            <h3 className={styles.description}>
              Data about characters and their life
            </h3>

            <Link href="/list/1"><button>Browse characters</button></Link>

          </div>

          <div className={styles.image}>
            <Image src={image} alt="rick-morty" fill={true} />
          </div>
        </div>


      </main>

    </div>
  )
}

export default Home
