import { useRouter } from 'next/router';
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import styles from "../../../styles/components/layout/Footer.module.css"

const Footer = () => {
    const { asPath } = useRouter();

    return (
        <footer className={`${styles.footer} ${(asPath == "/") ? styles.home : undefined}`}>
            <a href="https://github.com/gxlpes" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <p>Coded by Guilherme Lopes</p>
        </footer>
    )
}

export default Footer