import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "characters",
  initialState: { characters: [] as number[] },
  reducers: {
    addCharacter: (state, { payload }) => {
      state.characters.push(payload);
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((character: any) => character.id !== action.payload.id);
    },
    addCharactersFromUser: (state, { payload }) => {
      state.characters.push(payload);
    },
  },
});

export const { addCharacter, deleteCharacter, addCharactersFromUser } = slice.actions;
export default slice.reducer;
