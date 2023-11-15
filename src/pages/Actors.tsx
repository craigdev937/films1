import React from "react";
import { MediaAPI } from "../global/MediaAPI";

export const Actors = () => {
    const { error, isLoading, data } = MediaAPI.useActQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error : 
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <h1>Actors</h1>
            {data!.results.map((actor) => (
                <section key={actor.id}>
                    <h1>{actor.name}</h1>
                </section>
            ))}    
        </React.Fragment>
    );
};

