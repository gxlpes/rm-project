import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.black}>
          <div className={styles.hero}>
            <div className={styles.text}>
              <h1>Rick and Morty Wiki</h1>
              <h4>Data about characters and their life</h4>
            </div>
            <button><Link href={("/browse/1")}>Browse characters</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
