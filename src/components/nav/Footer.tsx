import { useRouter } from 'next/router';
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import styles from "../../../styles/Layout.module.css"

const Footer = () => {
    const { asPath } = useRouter();

    return (
        <footer style={{ color: asPath == '/' ? "white" : undefined }} className={styles.footer}>
            <a href="https://github.com/gxlpes" target="_blank" rel="noreferrer">
                <AiFillGithub />
            </a>
            <p>Coded by Guilherme Lopes</p>
        </footer>)
}

export default Footer