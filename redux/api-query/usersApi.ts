import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginFormIF } from "../../models/user.model";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    loginUser: builder.mutation<{}, LoginFormIF>({
      query: (user) => ({
        url: "/sessions",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginUserMutation } = usersApi;
