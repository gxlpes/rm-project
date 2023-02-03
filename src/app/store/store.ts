import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/auth";
import authReducer from "../features/authSlice";
import charactersReducer from "../features/storeSlice";
import notificationReducer from "../features/notificationSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    store: charactersReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
