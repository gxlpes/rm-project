import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Character } from '../../src/types/CharacterInterface';
import styles from "../../styles/List.module.css";

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const actualPage = params!.page;

    const res = await fetch(defaultEndpoint + `/?page=${actualPage}`);
    const data = await res.json();

    if (!data || data === undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            data
        }
    }
}

const List: NextPage = ({ data }: any) => {
    const { info, results: defaultResults } = data;
    const [pageNumber, setPageNumber] = useState(0);
    const router = useRouter();

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
        router.push(`/list/${selected + 1}`);
        console.log(selected);
    }

    return (
        <>
            <main>
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

            </main>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={42}
                onPageChange={changePage}
                containerClassName={"paginationButtons"}
                activeClassName={"paginationActive"} />
        </>)
}

export default List