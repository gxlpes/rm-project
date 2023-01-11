import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image"
import styles from "../../styles/Layout.module.css"
import logo from "../../public/logo.png"

const Header = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false);

    return (
        <header className={styles.header}>

            <nav className={styles.content}>

                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={logo} alt="logo-rick-and-morty" />
                    </Link>
                    <p>Rick and Morty Wiki</p>
                </div>

                <div className={hiddenMenu ? styles.mobile : styles.desktop}>
                    <Link href="/list/1">Browse</Link>
                    <Link href="/about">About</Link>
                </div>

                <span className={styles.toggle} onClick={() => setHiddenMenu(!hiddenMenu)}>X</span>


            </nav>
        </header>
    )
}

export default Header;