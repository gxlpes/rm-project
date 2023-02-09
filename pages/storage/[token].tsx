import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../src/app/services/extendedApi';

const Storage: NextPage = () => {
    const { token } = useSelector((state: any) => state.auth)
    const data = useGetCharactersQuery(token)
    console.log(data)


    return (
        <div>storage</div>
    )
}

export default Storage