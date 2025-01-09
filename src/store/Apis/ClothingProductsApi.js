import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'products',
      providesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: `products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    // updateData: build.mutation({
    //   query: ({ id, data }) => ({
    //     url: `products/${id}`,
    //     method: 'PATCH',
    //     body: data,
    //   }),
    //   invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    // }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    putUpdatePost: build.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useLazyGetProductsQuery,
  useUpdateDataMutation,
  useDeleteProductMutation, 
  usePutUpdatePostMutation
} = api;
