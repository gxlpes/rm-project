import { emptySplitApi } from "./emptyApi";

export const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "signup",
        method: "POST",
        body: credentials,
      }),
    }),
    saveCharacter: builder.mutation({
      query: (data) => ({
        url: "characters",
        method: "POST",
        body: data,
      }),
    }),
    getCharacters: builder.query({
      query: (token) => ({ url: `characters/${token}` }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useSignupMutation, useSaveCharacterMutation, useGetCharactersQuery } = extendedApi;
