import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../services/auth";
import type { RootState } from "../store/store";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isAuthenticated: false } as AuthState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }: PayloadAction<{ user: User; token: string }>) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
