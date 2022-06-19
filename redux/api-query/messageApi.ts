import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddMessageFormIF } from "../../models/message.model";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  tagTypes: ["message"],
  endpoints: (builder) => ({
    addmessage: builder.mutation<{}, AddMessageFormIF>({
      query: (message) => ({
        url: "/message",
        method: "POST",
        body: message,
      }),
      // invalidatesTags: ["message"],
    }),
  }),
});

export const { useAddmessageMutation } = messagesApi;
