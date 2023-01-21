import { Dispatch, SetStateAction } from "react";

export interface ISearchContext {
  userInputData: any;
  setInputUserData: Dispatch<SetStateAction<string>>;
}
