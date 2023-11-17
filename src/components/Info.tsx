import React from "react";
import "./Info.css";
import { useParams } from "react-router-dom";
import { MediaAPI } from "../global/MediaAPI";

export const Info = () => {
    const { id } = useParams();
    const medID = id != undefined ? Number(id) : 0;
    const { error, isLoading, data } = 
        MediaAPI.useVidQuery(medID);

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

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            {data && data?.results.map((info) => (
                <section key={info.id}>
                    <a href={`https://www.youtube.com/embed/${info.key}`}
                    target="blank">
                        <button>Trailer: {info.name}</button>
                    </a>
                </section>
            ))}
        </React.Fragment>
    );
};


