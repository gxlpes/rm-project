import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "store",
  initialState: { characters: [] as number[] },
  reducers: {
    addCharacter: (state, { payload }) => {
      state.characters.push(payload);
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((character: any) => character.id !== action.payload.id);
    },
  },
});

export const { addCharacter, deleteCharacter } = slice.actions;
export default slice.reducer;
