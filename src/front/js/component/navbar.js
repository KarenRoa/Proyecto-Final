import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import { faDog } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-light">
      <FontAwesomeIcon icon={faDog} />
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          MATCHPET
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                QUIENES SOMOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                CONTACTO
              </a>
            </li>
            <p>
              <button type="button" className="btn btn-outline-light">
                INGRESAR
              </button>
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
};
