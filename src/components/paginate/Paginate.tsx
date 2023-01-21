import { useRouter } from 'next/router';
import Item from './components/Item';
import styles from "../../../styles/components/paginate/List.module.css"
import { useState } from 'react';

interface PaginateProps {
    currentPage: number;
}

const Paginate = ({ currentPage }: PaginateProps) => {
    const router = useRouter();
    const [minPageLimit, setMinPageLimit] = useState<number>(0)
    const [maxPageLimit, setMaxPageLimit] = useState<number>(5)
    const pageNumberLimit = 5;


    const pages = [];
    for (let i = 1; i <= 42; i++) {
        pages.push(i);
    }

    const handlePageClick = (page: number) => {
        router.push(`/list/${page}`)
    }

    const increaseEllipse = () => {
        router.push(`/list/${currentPage + maxPageLimit}`);
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);

    }

    let pageIncrementEllipses = null;
    if (pages.length > maxPageLimit) {
        pageIncrementEllipses = <li className={styles.ellipses} onClick={increaseEllipse}>&hellip;</li>
    }
    let pageDecremenEllipses = null;
    if (minPageLimit >= 1) {
        pageDecremenEllipses = <li className={styles.ellipses} onClick={() => setMinPageLimit((prev) => prev - 5)}>&hellip;</li>
    }


    const pageNumbers = pages.map(page => {
        if (page <= maxPageLimit && page > minPageLimit) {
            return (
                <Item page={page} currentPage={currentPage} handlePageClick={handlePageClick} />
            );
        } else {
            return null;
        }
    }

    );

    return (
        <ul className={styles.list}>
            <button>Prev</button>
            {pageDecremenEllipses}
            {pageNumbers}
            {pageIncrementEllipses}
            <button>Next</button>
        </ul>
    )

}
export default Paginate