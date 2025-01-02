import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PostApi = createApi({
  reducerPath: 'PostApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    // getPosts: build.query({
    //   query: () => 'posts',
    //   providesTags: (result) =>
    //     result
    //       ? result.map(({ id }) => ({ type: 'Posts', id }))
    //       : [{ type: 'Posts', id: 'LIST' }],
    // }),
    addPost: build.mutation({
      query: (body) => ({
        url: `products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = PostApi;
export default PostApi; 