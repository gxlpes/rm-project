import { ReactNode } from "react";

export interface IPaginateContext {
  prevPage: () => void;
  minPageLimit: number;
  decreaseSectionPaginate: () => void;
  increaseSectionPaginate: () => void;
  nextPage: () => void;
  pages: number[];
  maxPageLimit: number;
  handlePageClick: (page: number) => void;
  currentPage: number;
}
