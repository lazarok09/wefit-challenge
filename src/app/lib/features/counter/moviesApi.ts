import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
type MovieResponse = { products: Movie[] };
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => `/movies`,
      transformResponse: (rawResult: MovieResponse, meta) => {
        return rawResult.products;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = moviesApi;
