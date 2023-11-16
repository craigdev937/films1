import React from "react";
import { MediaAPI } from "../global/MediaAPI";
import { ActCard } from "../components/ActCard";

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
            {data!.results.map((act) => (
                <ActCard 
                    key={act.id} act={act}
                />
            ))}    
        </React.Fragment>
    );
};

