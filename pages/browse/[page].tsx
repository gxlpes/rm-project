import type { GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState, useContext, useEffect } from 'react';
import Paginate from '../../src/components/paginate/Paginate';
import { PaginateContextProvider } from '../../src/contexts/PaginateContext';
import { SearchContext } from '../../src/contexts/SearchContext';
import { Character } from '../../src/types/api/CharacterInterface';
import styles from "../../styles/pages/List.module.css"

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
    console.log(params);
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
    const { results } = data;
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [clientFetch, setClientFetch] = useState<any>();
    const [userInput, setUserInput] = useState<any>();
    console.log();


    const [isLoading, setLoading] = useState(false)


    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const handleOnSubmit = async (e: any) => {
        setUserInput(e.target[0].value);
        router.push(`/browse/1/name=${e.target0[0].value}`)
    }

    useEffect(() => {
        {
            setLoading(true)
            fetch(`https://rickandmortyapi.com/api/character/?name=${router.asPath.substring(router.asPath.indexOf("=") + 1)}`)
                .then((res) => res.json())
                .then((data) => {
                    setClientFetch(data)
                    setLoading(false)
                })
        }
    }, [])

    return (
        <>
            <PaginateContextProvider currentPage={Number(router.query.page)}>
                <main>
                    <form className={styles.form} action="submit" onSubmit={handleOnSubmit}>
                        <input ref={inputRef} name="query" type="search" />
                        <button>Search</button>
                    </form>

                    {clientFetch && !isLoading ?
                        <ul className={styles.grid}>
                            {clientFetch.results.map((character: Character) => {
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
                <Paginate />
            </PaginateContextProvider >
        </>

    )
}

export default ListCharacter;