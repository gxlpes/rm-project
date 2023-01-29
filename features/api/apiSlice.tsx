import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: `mongodb+srv://guilhermxlopes:${process.env.ADMIN_MONGO_PASSWORD}@cluster0.fnk9jrh.mongodb.net/?retryWrites=true&w=majority`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as any).auth.token
        if (token) headers.set("authorization", `Bearer ${token}`)
        return headers;
    }
})

const baseQueryWithReauth = async ({ args, api, extraOptions }: any) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 403) {
        console.log("sending refresh token")
        const refreshResult = await baseQuery("/refresh", api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut(null))
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: build => ({})
})