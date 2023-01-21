import { useContext } from 'react';
import styles from "../../../styles/components/paginate/List.module.css";
import { PaginateContext } from '../../contexts/PaginateContext';
import Item from './components/Item';

const Paginate = () => {
    const { prevPage, minPageLimit, currentPage, decreaseSectionPaginate, increaseSectionPaginate, nextPage, pages, maxPageLimit, handlePageClick } = useContext(PaginateContext)

    return (
        <ul className={styles.list}>
            <button onClick={prevPage}>Prev</button>
            {minPageLimit >= 1 && <li className={styles.ellipses} onClick={decreaseSectionPaginate}>&hellip;</li>}
            {pages && pages.map(page => {
                if (page <= maxPageLimit && page > minPageLimit)
                    return <Item key={page} page={page} currentPage={currentPage} handlePageClick={handlePageClick} />
            })}
            {pages.length > maxPageLimit && <li className={styles.ellipses} onClick={increaseSectionPaginate}>&hellip;</li>}
            <button onClick={nextPage}>Next</button>
        </ul>
    )

}
export default Paginate