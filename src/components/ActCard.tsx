import React from "react";
import "./ActCard.css";
import { IActData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type ACT = {
    act: IActData
};

export const ActCard = ({ act }: ACT) => {
    return (
        <React.Fragment>
            <section>
                <h1>{act.name}</h1>
                <img 
                    alt={act.name}
                    src={`${IMG}/${act.profile_path}`} 
                />
            </section>
        </React.Fragment>
    );
};


