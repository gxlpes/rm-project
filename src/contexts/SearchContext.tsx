import { createContext, useState } from "react";
import { ISearchContext } from "../types/contexts/ISearchContext";
import { IChildren } from "../types/default/Children";

export const SearchContext = createContext<ISearchContext>({} as ISearchContext)

export const SearchContextProvider = ({ children }: IChildren) => {
    const [userInputData, setInputUserData] = useState<any>();

    return (
        <SearchContext.Provider value={{
            userInputData,
            setInputUserData
        }}>{children}</SearchContext.Provider>
    )
}