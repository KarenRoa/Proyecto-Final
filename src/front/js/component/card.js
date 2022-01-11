import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import {Link, useParams,useHistory } from "react-router-dom";
import fotoPerfil from "../../img/user.jpg";

export const Card = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()
  
  
  const { id } = useParams();

  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);


  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-4 text-center">
      <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
        <div className="imagen">
          <img src={fotoPerfil} className="rounded-circle w-75" />
        </div>
        <div className="titulo">
          <hr className="my-2" />
          <h5 className="fw-light">"{store.detalleCuidador.nombre} {store.detalleCuidador.apellido}"</h5>
          <hr className="my-2" />
        </div>
        <div className="texto">
          <p className="fw-light">
            <small>"{store.detalleCuidador.descripcion}"</small>
          </p>
        </div>

        <Link to={`/perfilCuidadorPublico/${id}`}>
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
