import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAct } from "../models/Interfaces";
const URL = "https://api.themoviedb.org/3";
const API = process.env.API_KEY;

export const MediaAPI = createApi({
    reducerPath: "MediaAPI",
    tagTypes: ["Actors", "Films"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        act: builder.query<IAct, void>({
            query: () => ({
                url: `/trending/person/day?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["Actors"]
        })
    }),
});

