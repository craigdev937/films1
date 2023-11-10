import React from "react";
import "./Navbar.css";
import Camera from "@public/camera.png";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to={"/"} 
                    className="navbar__logo"
                >
                    <img 
                        src={Camera} 
                        alt="camera" 
                        className="navbar__img"
                    />
                </Link>
                <aside 
                    className="navbar__icon"
                    onClick={handleClick}
                >
                    {open ? <FiX /> : <FiMenu />}
                </aside>
                <ul className={open ? 
                    "navbar__links active" : 
                    "navbar__links"}
                    >
                        <li className="navbar__item">
                            <Link 
                                to="/" 
                                className="navbar__link" 
                                onClick={handleClick}
                                >Films
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link 
                                to="/actors" 
                                className="navbar__link" 
                                onClick={handleClick}
                                >Actors
                            </Link>
                        </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

