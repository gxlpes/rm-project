import { GetServerSidePropsContext, NextPage } from "next";
import CharacterCard from "../../src/components/character/CharacterCard";
import Paginate from "../../src/components/paginate/Paginate";
import { PaginateContextProvider } from "../../src/contexts/PaginateContext";
import { Character } from "../../src/types/api/CharacterInterface";
import styles from "../../styles/pages/List.module.css";

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

const SearchPage: NextPage = ({ data, query }: any) => {
    return (
        <>
            <PaginateContextProvider currentPage={Number(query.page)} overallPageLimit={data.info.pages}>
                <ul className={styles.grid}>
                    {data.results.map((character: Character) => {
                        return (<CharacterCard key={character.id} character={character} />)
                    })}
                </ul>
                <Paginate />
            </PaginateContextProvider>
        </>
    )
}

export default SearchPage;