import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../styles/pages/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.black}>
          <div className={styles.hero}>
            <div className={styles.text}>
              <h1>Rick and Morty Wiki</h1>
              <h4>Data about characters and their life</h4>
            </div>
            <button onClick={() => router.push("/browse/1")}>Browse characters</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
