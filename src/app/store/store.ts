import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import charactersReducer from "../features/charactersSlice";
import notificationReducer from "../features/notificationSlice";
import { extendedApi } from "../../app/services/extendedApi";

export const store = configureStore({
  reducer: {
    [extendedApi.reducerPath]: extendedApi.reducer,
    auth: authReducer,
    characters: charactersReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(extendedApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
