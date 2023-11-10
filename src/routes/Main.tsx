import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotFound } from "../components/NotFound";
import { Films } from "../pages/Films";
import { Actors } from "../pages/Actors";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Films />,
                errorElement: <NotFound />
            },
            {
                path: "/actors",
                element: <Actors />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



