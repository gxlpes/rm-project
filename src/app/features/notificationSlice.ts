import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "notification",
  initialState: { activeNotification: null, isRendered: false },
  reducers: {
    showNotification: (state, { payload }) => {
      state.activeNotification = payload;
      state.isRendered = true;
      console.log(payload);
    },
    hideNotification: (state) => {
      state.activeNotification = null;
    },
  },
});

export const { showNotification, hideNotification } = slice.actions;
export default slice.reducer;
