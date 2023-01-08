import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AiFillGithub } from 'react-icons/ai';
import styles from '../styles/Layout.module.css';
import logo from "../public/logo.png";
import Image from 'next/image';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <header className={styles.header}>
        <div className={styles.content}>

          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="logo-rick-and-morty" />
            </Link>
            <p>Rick and Morty Wiki</p>
          </div>

          <div className={styles.nav}>
            <Link href="/about">About</Link>
          </div>

        </div>
      </header>

      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a href="https://github.com/gxlpes" target="_blank"><AiFillGithub /></a>
        <p>Coded by Guilherme Lopes</p>
      </footer></>
  )

}

export default MyApp
