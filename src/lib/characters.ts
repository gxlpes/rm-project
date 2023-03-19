import { addCharacter } from "../app/features/charactersSlice";
import { extendedApi } from "../app/services/extendedApi";
import { store } from "../app/store/store";

export const saveCharacter = (characterId: number) => {
  if (store.getState().auth.isAuthenticated) {
    const email = store.getState().auth.user?.email;
    store.dispatch(addCharacter(characterId));
    store.dispatch(extendedApi.endpoints.saveCharacter.initiate({ characterId, email }));
  }
};

export const getCharactersFromUser = async (userEmail: string) => {
  let a = await store.dispatch(extendedApi.endpoints.getCharacters.initiate(userEmail));
  console.log(a.data.characters, "a");
};
