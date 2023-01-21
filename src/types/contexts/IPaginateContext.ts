import { ReactNode } from "react";

export interface IPaginateContext {
  children: ReactNode;
  currentPage: number;
}
