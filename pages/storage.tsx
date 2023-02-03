import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react'

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${query.page}&name=${query.name}`)
    const result = await response.json();

    return {
        props: {
            data: result,
            query: query
        }
    }
}

const Storage: NextPage = ({ data }: any) => {
    return (
        <div>storage</div>
    )
}

export default Storage