import React from "react";
import { Link } from "react-router-dom";


export const Banner = ()=>{

    return (
        <div className="container-fluid">
            <div className="text-center">
          <h1 className="display-6 fw-lighter">
            ¿Estás Ocupado o con poco tiempo?
          </h1>
          <p className="col fs-4 fw-light text-center">
            Aquí podrás encontrar a tu{" "}
            <span className="text-warning fw-bolder">paseador@</span> de perro
            ideal
          </p>
          <p className="col fs-4 fw-light text-center">ó</p>
          <Link to={"/registroCuidador"}>
            <div className="boton-paseador">
              <button className="btn btn-outline-dark btn-sm fw-light shadow-sm mb-5">
                ¿QUIERES SER{" "}
                <span className="text-warning fw-bolder">PASEADOR@</span> DE
                PERRO?
              </button>
            </div>
          </Link>
        </div>
        </div>
    )
}