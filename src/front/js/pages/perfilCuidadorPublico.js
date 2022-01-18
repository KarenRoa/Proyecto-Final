import React, {useEffect, useContext}from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/user.jpg";

export const PerfilCuidadorPublico = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate()
  
  
  const { id } = useParams();
  

  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);

  return (
    <div className="bg-light bg-opacity-50 p-4 rounded-3 text-uppercase text-center">
      <div className="container bg-light bg-opacity-75 text-dark text-center my-4 p-4 rounded-3 shadow-lg">
        <div className="row d-flex justify-content-between align-items-center">
          <div className=" col-12 col-md-4">
            <h3>{store.detalleCuidador.nombre} {store.detalleCuidador.apellido}</h3>
          </div>
          <div className="col-md-6"></div>



           {/*Boton Atrás ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <div className="col-4 col-sm-4 col-md-1">
            <Link to={`/todoscuidadores`} className="text-dark">
              <span className="fs-3">
                <i className="fas fa-arrow-left"></i>
              </span>
            </Link>
          </div>
          {/*Boton me GUsta ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <div className="col-4 col-sm-4 col-md-1">
            <span className="fs-3"><i className="far fa-heart"></i></span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4">
            <img src={fotoPerfil} className="img-fluid ratio ratio-1x1 rounded-3" />
          </div>
          <div className="col-12 col-md-8">
            <h3 className="fw-normal m-4">Sobre mí...</h3>
            <p className="fw-lighter">"{store.detalleCuidador.descripcion}"</p>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row">
          <div className="my-4 fw-lighter">
            <h4>Contacto</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <span>
              <i className="fas fa-map-marker-alt"></i> Zona de Atención
            </span>
            <p>{store.detalleCuidador.comuna}</p>
          </div>
          <div className="col-sm-4">
            <span>
              <i className="fab fa-instagram"></i> Instagram
            </span>
            <p>{store.detalleCuidador.rrss}</p>
          </div>
          <div className="col-sm-4">
            <span>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </span>
            <p>{store.detalleCuidador.telefono}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};
