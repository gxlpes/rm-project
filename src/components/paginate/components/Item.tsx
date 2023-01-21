import React from 'react'
import styles from "../../../../styles/components/paginate/Item.module.css"

const Item = ({ page, currentPage, handlePageClick }: any) => {
    return (
        <li className={`${styles.item} ${currentPage == page ? styles.active : undefined}`} key={page} onClick={() => handlePageClick(page)}>
            {page}
        </li>
    )
}

export default Item