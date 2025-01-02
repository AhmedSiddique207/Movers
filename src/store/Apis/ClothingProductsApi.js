import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Get'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'products',
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: `products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

  }),
});

export const { useGetProductsQuery,useAddProductMutation,useLazyGetProductsQuery } = api; 