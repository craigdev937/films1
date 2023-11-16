import React from "react";
import { MediaAPI } from "../global/MediaAPI";
import { FilmCard } from "../components/FilmCard";

export const Films = () => {
    const { error, isLoading, data } = MediaAPI.useFilmQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        };
    };

    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <h1>Films</h1>
            {data!.results.map((film) => (
                <FilmCard 
                    key={film.id} film={film} 
                />
            ))}
        </React.Fragment>
    );
};

