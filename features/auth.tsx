import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    isLoading: false,
    erro: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        emailUpdate: (state, action) => {
            state.email = action.payload
        },
        passwordUpdate: (state, action) => {
            state.password = action.payload
        }
    }
});

export const { emailUpdate, passwordUpdate } = authSlice.actions;
export default authSlice.reducer;