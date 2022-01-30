import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v2",
  }),
  tagTypes: ["Countries"],
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => ({ url: "all" }),
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
