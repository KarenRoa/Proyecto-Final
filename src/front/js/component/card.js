{
  /*-> Card - Componente -*/
}
import React from "react";
import foto1 from "../../img/perfil07.png";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-4 text-center">
      <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
        <div className="imagen">
          <img src={foto1} className="rounded-circle w-75" />
        </div>
        <div className="titulo">
          <hr className="my-2" />
          <h5 className="fw-light">Javier Goméz</h5>
          <hr className="my-2" />
        </div>
        <div className="texto">
          <p className="fw-light">
            <small>
              "Estar rodeado de perros, ir al parque y compartir con ellos,
              siempre será una experiencia que me encanta!"
            </small>
          </p>
        </div>

        <Link to={"/perfilCuidadorPublico"}>
          <div className="boton">
            <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
              VER MÁS...
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
