import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import styles from "../../styles/Layout.module.css"
import logo from "../../public/logo.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>

                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={logo} alt="logo-rick-and-morty" />
                    </Link>
                    <p>Rick and Morty Wiki</p>
                </div>

                <nav className={styles.nav}>
                    <Link href="/list/1">Browse</Link>
                    <Link href="/about">About</Link>
                </nav>

            </div>
        </header>
    )
}

export default Header;