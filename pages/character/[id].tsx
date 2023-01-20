import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { CHARACTER_RESOURCE_ENDPOINT, DEFAULT_API_ENDPOINT } from '../../src/common/constants';
import styles from "../../styles/pages/Character.module.css";


export async function getStaticPaths() {
    const res = await fetch(DEFAULT_API_ENDPOINT + CHARACTER_RESOURCE_ENDPOINT);
    const data = await res.json();

    const characters = Array.from({ length: data.info.count }, (_, i) => i + 1)

    const pathsWithParams = characters.map((id: any) => ({ params: { id: id.toString() } }));
    return {
        paths: pathsWithParams,
        fallback: true,
    };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const res = await fetch(DEFAULT_API_ENDPOINT + CHARACTER_RESOURCE_ENDPOINT + `/${params!.id}`);
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
        }
    }
}

const PageCharacter: NextPage = ({ data }: any) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className={styles.name}>{data!.name}</div>
        </>
    )
}

export default PageCharacter;