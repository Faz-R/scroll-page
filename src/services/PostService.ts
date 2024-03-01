import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../Pages/MainPage/interface";

export const postApi = createApi({
  reducerPath: 'postAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (currentPage) => ({
        url: `posts`,
        params: {
          _limit: 25,
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