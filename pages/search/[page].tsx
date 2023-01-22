import { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Character } from "../../src/types/api/CharacterInterface";
import styles from "../../styles/pages/List.module.css"
import Paginate from "../../src/components/paginate/Paginate";
import { PaginateContextProvider } from "../../src/contexts/PaginateContext";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params, query } = context;

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${query.page}&name=${query.name}`)
    const result = await response.json();

    return {
        props: {
            data: result,
            query: query
        }
    }
}

const SearchPage: NextPage = ({ data, query }: any) => {

    return (
        <>
            <PaginateContextProvider currentPage={Number(query.page)} overallPageLimit={data.info.pages}>
                <ul className={styles.grid}>
                    {data.results.map((character: Character) => {
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
                <Paginate />
            </PaginateContextProvider>
        </>
    )
}

export default SearchPage;