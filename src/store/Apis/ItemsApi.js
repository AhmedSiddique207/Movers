import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'products',
    }),

  }),
});

export const { useGetProductsQuery } = api; 
