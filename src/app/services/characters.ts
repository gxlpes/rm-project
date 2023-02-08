import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    saveCharacters: builder.mutation({
      query: (data) => ({
        url: "characters",
        method: "POST",
        body: data,
      }),
    }),
    getCharacters: builder.query({
      query: (token) => ({ url: `storage/${token}` }),
    }),
  }),
});

export const { useSaveCharactersMutation, useGetCharactersQuery } = api;
