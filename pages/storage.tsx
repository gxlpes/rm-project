import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react'
import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../src/app/services/characters';

const Storage: NextPage = () => {
    // const email = useSelector((state: any) => state.auth.user.email)
    const data = useGetCharactersQuery("guillhermxlopes@gmail.com");
    console.log(data)

    return (
        <div>storage</div>
    )
}

export default Storage