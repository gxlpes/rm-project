import { GetServerSideProps } from 'next';
import React from 'react'
import styles from "../../styles/Character.module.css"

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ query }: any) {
    const { id } = query;
    const res = await fetch(`${defaultEndpoint}${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

const id = ({ data }: any) => {
    return (
        <div className={styles.name}>{data.name}</div>
    )
}

export default id;