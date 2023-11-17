import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAct, IFilm, IVideo, ISearch } from "../models/Interfaces";
const URL = "https://api.themoviedb.org/3";
const API = process.env.API_KEY;

export const MediaAPI = createApi({
    reducerPath: "MediaAPI",
    tagTypes: ["Actors", "Films"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        search: builder.query<ISearch, string>({
            query: (info) => ({
                url: `/search/mullti?query=${
                    info}&api_key=${API}`,
                method: "GET"
            })
        }),
        vid: builder.query<IVideo, number>({
            query: (id) => ({
                url: `/movie/${id}/videos?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["Films"]
        }),
        act: builder.query<IAct, void>({
            query: () => ({
                url: `/trending/person/day?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["Actors"]
        }),
        film: builder.query<IFilm, void>({
            query: () => ({
                url: `/trending/movie/day?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["Films"]
        })
    }),
});

