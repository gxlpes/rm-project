import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { IPaginateContext } from "../types/contexts/IPaginateContext";
import { IChildren } from "../types/default/Children";
import { IPaginate } from "../types/ui/PaginateInterface";

export const PaginateContext = createContext<IPaginate>({} as IPaginate)

export const PaginateContextProvider = ({ children, currentPage }: IPaginateContext) => {
    const router = useRouter();
    const [minPageLimit, setMinPageLimit] = useState<number>(0)
    const [maxPageLimit, setMaxPageLimit] = useState<number>(5)
    const pageNumberLimit = 5;


    const pages = [];
    for (let i = 1; i <= 42; i++) {
        pages.push(i);
    }

    useEffect(() => {
        if (currentPage > maxPageLimit) {
            setMaxPageLimit(currentPage + 4);
            setMinPageLimit(currentPage - 1);
        }
    }, []);

    const handlePageClick = (page: number) => {
        router.push(`/list/${page}`)
    }

    const increaseSectionPaginate = () => {
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);
    }

    const decreaseSectionPaginate = () => {
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
    }

    const nextPage = () => {
        if (currentPage >= maxPageLimit) increaseSectionPaginate();
        router.push(`/list/${currentPage + 1}`)
    }

    const prevPage = () => {
        if ((currentPage) % pageNumberLimit === 0) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        router.push(`/list/${currentPage - 1}`)
    }

    return (
        <PaginateContext.Provider value={{
            prevPage,
            minPageLimit,
            decreaseSectionPaginate,
            increaseSectionPaginate,
            nextPage,
            pages, maxPageLimit,
            handlePageClick,
            currentPage
        }}>{children}</PaginateContext.Provider>
    )
}