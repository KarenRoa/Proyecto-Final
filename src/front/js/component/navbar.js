import React from "react";
import { Link } from "react-router-dom";
import perro from "../../img/perro2.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand ms-2">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link"  href="#">
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  QUIENES SOMOS
                </Link>
              </li>
            
              <li className="nav-item">
              <Link className="nav-link" href="#">
                  CONTACTO
                </Link>
              </li>
            </ul>
            <Link to={'/registroCliente'}>
                <button className="btn btn-outline-light btn-sm me-2">REGÍSTRATE</button>
              </Link>
            <div>
              <Link to={'/login'}>
                <button className="btn btn-outline-light btn-sm me-2">INGRESA</button>
              </Link>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </nav>
    </>
    // <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
    //   <div>
    //     <a classNameName="navbar-brand" id="logo">
    //       <Link to="/" classNameName="subrayado">
    //         <img
    //           src={perro}
    //           width="35"
    //           height="35"
    //           classNameName="d-inline-block align-top"
    //           alt=""
    //         />

    //         <strong  id="titulo">
    //           WALK-DOGS
    //         </strong>
    //       </Link>
    //     </a>
    //   </div>

    //   <div>
    //     <a classNameName="navbar-text" href="/">INICIO</a>
    //     <a classNameName="navbar-text" href="#" id="mid-mid">QUIENES SOMOS</a>
    //     <a classNameName="navbar-text" href="#">CONTACTO</a>
    //   </div>

    //   <div>
    //     <Link to="/login">
    //       <button type="button" classNameName="btn btn-outline-light" id="btn">
    //         INGRESAR
    //       </button>
    //     </Link>

    //       <button type="button" classNameName="btn btn-outline-light" id="btn">
    //         REGISTRARSE
    //       </button>
    //   </div>
    // </nav>
  );
};
