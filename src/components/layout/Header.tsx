import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "../../../styles/components/layout/Header.module.css"

const Header = () => {
    const router = useRouter();
    const [verticalNav, setVerticalNav] = useState(false);

    return (
        <header className={`${styles.header} ${(router.asPath == "/") ? styles.home : styles.blur}`}>
            <nav className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/">
                        <svg viewBox="0 0 388.000000 500.000000">
                            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                                fill={router.asPath == '/' ? "white" : undefined}>
                                <path d="M1107 4843 c-6 -9 -3 -41 18 -178 8 -55 35 -239 60 -410 24 -170 55
                                                -377 69 -460 13 -82 28 -179 32 -214 l7 -63 -54 6 c-30 3 -117 14 -194 25
                                                -397 56 -721 102 -818 117 -59 9 -109 15 -112 13 -2 -3 34 -54 81 -114 47 -61
                                                118 -153 158 -205 125 -164 224 -292 287 -374 33 -43 101 -131 150 -196 49
                                                -65 94 -122 100 -126 13 -8 -103 -39 -311 -83 -80 -17 -190 -42 -245 -56 -55
                                                -14 -113 -28 -130 -31 -63 -12 -60 -17 116 -165 94 -79 185 -155 203 -169 184
                                                -146 376 -310 376 -320 0 -6 -108 -78 -133 -89 -11 -4 -227 -144 -301 -195
                                                -31 -21 -55 -43 -53 -49 2 -6 34 -21 71 -33 37 -13 90 -34 119 -47 29 -13 121
                                                -50 205 -82 83 -32 152 -61 152 -65 0 -18 -42 -208 -79 -359 -23 -91 -39 -166
                                                -38 -168 4 -3 220 27 397 56 60 10 74 2 66 -34 -11 -47 -38 -317 -32 -322 3
                                                -3 52 18 110 48 l104 53 72 -77 c40 -43 102 -99 137 -124 167 -119 488 -209
                                                676 -189 l67 8 2 175 c3 144 6 177 18 183 8 4 60 18 115 30 392 87 654 244
                                                813 487 l54 81 59 11 c62 13 137 63 177 118 62 87 66 214 11 312 -30 53 -31
                                                59 -25 136 3 44 15 111 26 150 28 97 26 135 -14 224 -33 74 -34 80 -39 241 -8
                                                236 -31 309 -151 465 -34 44 -79 111 -101 150 -74 133 -162 202 -310 243 -83
                                                23 -174 67 -230 112 -100 80 -233 140 -328 147 -37 3 -69 8 -71 12 -3 5 -15
                                                579 -17 822 -1 98 -7 107 -46 66 -26 -27 -200 -249 -268 -342 l-21 -28 -49 43
                                                c-28 24 -93 82 -145 131 -253 233 -749 681 -770 697 -10 7 -20 10 -23 5z"/>
                            </g>
                        </svg>
                    </Link>
                    <p>Rick and Morty Wiki</p>
                </div>
                <div className={verticalNav ? styles.mobile : styles.desktop}>
                    <Link href="/browse/1" onClick={verticalNav ? () => setVerticalNav(false) : undefined}>Browse</Link>
                    <Link href="/about">About</Link>
                    <button onClick={() => router.push("/auth")}>Login</button>
                </div>
                <span className={`${styles.toggle} ${(router.asPath != "/") || verticalNav ? styles.dark : undefined}`} onClick={() => setVerticalNav(!verticalNav)}><GiHamburgerMenu /></span>
            </nav>
        </header >
    )
}

export default Header;