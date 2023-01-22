import type { GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState, useContext, useEffect, FormEvent, SyntheticEvent } from 'react';
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
    const { results, info } = data;
    const router = useRouter();

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/1?&name=${(event.currentTarget.elements[0] as HTMLInputElement).value}`)
    }

    return (
        <>
            <PaginateContextProvider currentPage={Number(router.query.page)} overallPageLimit={info.pages}>
                <main>
                    <form className={styles.form} action="submit" onSubmit={handleOnSubmit}>
                        <input name="query" type="search" />
                        <button>Search</button>
                    </form>

                    <ul className={styles.grid}>
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
                    </ul>
                </main>
                <Paginate />
            </PaginateContextProvider >
        </>

    )
}

export default ListCharacter;