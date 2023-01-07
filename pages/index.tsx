import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import styles from '../styles/Home.module.css';
import { Character } from '../types/CharacterInterface';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

const Home: NextPage = ({ data }: any) => {
  const { results } = data;

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
          Data about characters, locations and episodes
        </p>

        <ul className={styles.grid}>
          {results.map((character: Character) => {

            return (
              <li key={character.id} className={styles.card}>
                <Link href={`/character/${character.id}`}>
                  <img src={character.image} alt={`${character.name}-image`} />
                  <div>
                    <h2>{character.name}</h2>
                    <p>Species - {character.species}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="github.com/gxlpes" target="blank"><AiFillGithub /></a>
        <p>Coded by Guilherme Lopes</p>
      </footer>
    </div>
  )
}

export default Home
