import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { UserCredentials } from "../../types/api/backend/User";
import { Auth } from "../../types/api/backend/Auth";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isAuthenticated: false } as Auth,
  reducers: {
    setCredentials: (state, { payload: { user, token } }: PayloadAction<{ user: UserCredentials; token: string }>) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
