import React from 'react'
import styles from "../../../styles/ui/Button.module.css"
import { Button } from '../../types/ui/ButtonInterface'

const Button = ({ title }: Button) => {
    return (
        <button className={styles.button}>
            {title}
        </button>
    )
}

export default Button