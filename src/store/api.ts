import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MovieDetailResult,
  PopularMoviesListQueryOptions,
  PopularMoviesListResult
} from "@/types";

const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_ROOT_URL,
    prepareHeaders: (headers) => {
      const token = "6CJF6TG-A054KEP-M3MSQZV-VXTEKSY";

      headers.set("X-API-KEY", token);
      headers.set("Accept", "application/json");

      return headers;
    }
  }),
  tagTypes: ["Article"],
  refetchOnMountOrArgChange: true,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    popularMoves: builder.query<
      PopularMoviesListResult,
      PopularMoviesListQueryOptions
    >({
      query(listOptions) {
        const queryString = Object.entries(listOptions)
          .map((entry) => {
            return `${entry[0]}=${entry[1]}`;
          })
          .join("&");

        return {
          url: `/movie?${queryString}`
        };
      }
    }),
    detailMovie: builder.query<MovieDetailResult, number>({
      query(movieId) {
        return {
          url: `/movie/${movieId}`
        };
      }
    })
  })
});

export { Api };
