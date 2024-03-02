import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../Pages/MainPage/interface";

export const postApi = createApi({
  reducerPath: 'postAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], { limit: number, currentPage: number }>({
      query: ({ limit, currentPage }: { limit: number, currentPage: number }) => ({
        url: `posts`,
        params: {
          _limit: limit,
          _page: currentPage
        }
      })
    }),
    getPost: build.query<IPost, string>({
      query: (id) => ({
        url: `posts/${id}`
      })
    })
  })
})