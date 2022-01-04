import React from "react";
import fotoPerfil from "../../img/user.jpg";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card border-0 ">
          <div className="col-sm-12">
            <img src={fotoPerfil} className="card-img-top" />
          </div>

          <div className="card-body">
            <h5 className="card-title">Nombre Apellido</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/">
              <a href="#" className="btn btn-dark">
                Ver más...
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
