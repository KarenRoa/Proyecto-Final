import React from "react";
import { Link } from "react-router-dom";
import perro from "../../img/perro2.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <div>
          <a className="navbar-brand" id="logo">
            <Link to="/" className="subrayado">
              <img
                src={perro}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt=""
              />
              
              <strong  id="titulo">
                WALK-DOGS
              </strong>
            </Link>
          </a>
        </div>

        <div>
          <a className="navbar-text" href="/">INICIO</a>
          <a className="navbar-text" href="#" id="mid-mid">QUIENES SOMOS</a>
          <a className="navbar-text" href="#">CONTACTO</a>
        </div>

        <div>
          <Link to="/login">
            <button type="button" className="btn btn-outline-light" id="btn">
              INGRESAR
            </button>
          </Link>

            <button type="button" className="btn btn-outline-light" id="btn">
              REGISTRARSE
            </button>
        </div>
      </nav>


    /*<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navb">
        <a className="navbar-brand" id="logo">
          <Link to="/" className="subrayado">
            <img
              src={perro}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt=""
            />
            <strong  id="titulo">
              WALK-DOGS
            </strong>
          </Link>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                INICIO
              </a>
            </li>
            <li className="nav-item" id="nav-mid-text">
              <Link className="nav-link" to="#">
                QUIENES SOMOS
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>

        <div id="f-r">
          <Link to="/login">
            <button type="button" className="btn btn-outline-light">
              INGRESAR
            </button>
          </Link>
        </div>
      </nav>
    </div>*/
  );
};
