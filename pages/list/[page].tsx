import type { GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Paginate from '../../src/components/paginate/Paginate';
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

export async function getStaticProps(context: GetStaticPropsContext) {
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
    const inputRef = useRef<HTMLInputElement>(null);
    const [clientFetch, setClientFetch] = useState<any>();

    const changePage = async ({ selected }: { selected: number }) => {
        setPageNumber(selected);
        if (clientFetch != undefined) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${selected + 1}&name=${inputRef}`);
            const { results: testx, info } = await response.json();
            setClientFetch(testx);
        }

    }

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${e.target[0].value}`);
        const { results: testx, info } = await response.json();
        console.log(info)
        setClientFetch(testx);
    }

    return (
        <>
            <main>
                <form className={styles.form} action="submit" onSubmit={handleOnSubmit}>
                    <input ref={inputRef} name="query" type="search" />
                    <button>Search</button>
                </form>
                {clientFetch ?
                    <ul className={styles.grid}>
                        {clientFetch.map((character: Character) => {
                            return (
                                <li key={character.id} className={styles.card}>
                                    <Link href={`/character/${character.id}`}>
                                        <Image src={character.image} alt={`${character.name}-image`} width={250} height={350} />
                                        <div>
                                            <h4>{character.name}</h4>
                                            <p>Species - {character.species}</p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    : <ul className={styles.grid}>
                        {results.map((character: Character) => {
                            return (
                                <li key={character.id} className={styles.card}>
                                    <Link href={`/character/${character.id}`}>
                                        <Image src={character.image} alt={`${character.name}-image`} width={250} height={350} />
                                        <div>
                                            <h4>{character.name}</h4>
                                            <p>Species - {character.species}</p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>}


            </main>

            <Paginate currentPage={Number(router.query.page)} />
        </>

    )
}

export default ListCharacter;