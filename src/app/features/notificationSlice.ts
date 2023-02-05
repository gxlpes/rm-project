import { createSlice } from "@reduxjs/toolkit";

const emptyNotificationToast = { title: "", message: "", status: "" };

const slice = createSlice({
  name: "notification",
  initialState: {
    activeNotification: emptyNotificationToast,
    isRendered: false,
  },
  reducers: {
    showNotification: (state, { payload }) => {
      state.activeNotification = payload;
      state.isRendered = true;
    },
    hideNotification: (state) => {
      state.activeNotification = emptyNotificationToast;
      state.isRendered = false;
    },
  },
});

export const { showNotification, hideNotification } = slice.actions;
export default slice.reducer;
