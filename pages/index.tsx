import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styles from '../styles/Home.module.css';
import { Character } from '../types/CharacterInterface';



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

        <Link href="/list"><button>Browse characters</button></Link>

      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/gxlpes" target="_blank"><AiFillGithub /></a>
        <p>Coded by Guilherme Lopes</p>
      </footer>
    </div>
  )
}

export default Home
