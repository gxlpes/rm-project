import { addCharacter } from "../app/features/storeSlice";
import { api } from "../app/services/save";
import { store } from "../app/store/store";

export const saveCharacter = (characterId: number) => {
  if (store.getState().auth.isAuthenticated) {
    const email = store.getState().auth.user?.email;
    store.dispatch(addCharacter(characterId));
    store.dispatch(api.endpoints.saveCharacters.initiate({ characterId, email }));
  }
};
