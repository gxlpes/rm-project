import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export interface User {
  email: string;
  password: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    email: string;
    password: string;
  };
  token: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).auth.token;
    //   if (token !== undefined) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { data: LoginResponse }, meta, arg) => response.data,
    }),
    signup: builder.mutation({
      query(credentials) {
        return {
          url: "signup",
          method: "POST",
          body: credentials,
        };
      },
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useProtectedMutation } = api;
