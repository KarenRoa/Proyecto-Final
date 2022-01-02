import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/fotoPerfil.jpg";

export const PerfilPrivado = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [editar, setEditar] = useState(false);

  return (
    <div className="container bg-dark text-light text-center w-50 mt-5 p-4">
      <div className="row">
        <div className="h1 col-sm-12 col-md-12">
          {store.demo[params.theid].nombre} {store.demo[params.theid].apellido}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img src={fotoPerfil} className="card-img-top p-2" />
        </div>
        <div className="col-sm-6">
          <p>"Aqui va una descripcion del cuidado"</p>
        </div>
      </div>
      <div className="row">
        <div className="h4 col-sm-12 col-md-12">Contacto</div>
      </div>
      <div className="row">
        <div className="col-sm-4"><i class="fas fa-map-marker-alt"></i> Ubicacion</div>
        <div className="col-sm-4"><i class="fab fa-instagram"></i> Instagram</div>
        <div className="col-sm-4"><i class="fab fa-whatsapp"></i> Whatsapp</div>
      </div>
    </div>
  );
};
