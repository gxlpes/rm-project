import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import styles from "../../styles/Home.module.css";
import { Character } from '../../types/CharacterInterface';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const actualPage = params!.page;

    const res = await fetch(defaultEndpoint + `/?page=${actualPage}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

const List: NextPage = ({ data }: any) => {
    const { info, results: defaultResults } = data;

    return (
        <>
            <ul className={styles.grid}>
                {defaultResults.map((character: Character) => {

                    return (
                        <li key={character.id} className={styles.card}>
                            <Link href={`/character/${character.id}`}>
                                <img src={character.image} alt={`${character.name}-image`} />
                                <div>
                                    <h2>{character.name}</h2>
                                    <p>Species - {character.species}</p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div>
                <Link href={"/list/2"}>2</Link>
            </div>
        </>)
}

export default List