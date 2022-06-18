import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogIF } from "../../models/blog.model";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
  endpoints: (builder) => ({
    blogs: builder.query<BlogIF[], void>({
      query: () => "/api/blogs",
    }),
    blog: builder.query<BlogIF, string>({
      query: (id) => `/api/blog/${id}`,
    }),
  }),
});

export const { useBlogsQuery, useBlogQuery } = blogsApi;
