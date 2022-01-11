import React from "react";
import { Link } from "react-router-dom";

export const AnchorInicio = () => {
    return(
        <li className="nav-item">
            <Link to={"/"} className="nav-link">
                INICIO
            </Link>
        </li>
    );
};