import type { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Character } from '../../src/types/api/CharacterInterface';
import styles from "../../styles/pages/List.module.css";

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getStaticPaths() {

    const res = await fetch(defaultEndpoint);
    const data = await res.json();

    const pages = Array.from({ length: data.info.pages }, (_, i) => i + 1);


    const pathsWithParams = pages.map((page: any) => ({ params: { page: page.toString() } }));
    return {
        paths: pathsWithParams,
        fallback: true,
    };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const res = await fetch(defaultEndpoint + `/?page=${params!.page}`);
    const data = await res.json();

    if (!data || data === undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            data: data || null
        },
        revalidate: 2_592_000
    }
}

const ListCharacter: NextPage = ({ data }: any) => {
    const { info, results } = data;
    const router = useRouter();
    const [pageNumber, setPageNumber] = useState(0);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
        console.log(selected);
    }

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <main>
                <ul className={styles.grid}>
                    {results.map((character: Character) => {

                        return (
                            <li key={character.id} className={styles.card}>
                                <Link href={`/character/${character.id}`}>
                                    <Image src={character.image} alt={`${character.name}-image`} width={250} height={350} />
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
                pageCount={info.pages}
                onPageChange={changePage}
                containerClassName={styles.paginationButtons}
                activeClassName={styles.paginationActive} />
        </>

    )
}

export default ListCharacter;