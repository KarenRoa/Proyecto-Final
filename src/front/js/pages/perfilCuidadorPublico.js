import React from "react";
import { Link } from "react-router-dom";
import foto0 from "../../img/perfil08.png";

export const PerfilCuidadorPublico = () => {
  return (
    <div className="bg-light bg-opacity-50 p-4 rounded-3 text-uppercase text-center">
      <div className="container bg-light bg-opacity-75 text-dark text-center my-4 p-4 rounded-3 shadow-lg">
        <div className="row d-flex justify-content-between align-items-center">
          <div className=" col-12 col-md-4">
            <h3 className="display-5">Luisa Mella</h3>
          </div>
          <div className="col-md-6"></div>

          <div className="col-4 col-sm-4 col-md-1">
            <Link to={`/`} className="text-dark">
              <span className="fs-2">
                <i className="fas fa-arrow-left"></i>
              </span>
            </Link>
          </div>
          {/*Boton me GUsta ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <div className="col-4 col-sm-4 col-md-1">
            <span className="fs-2">
              <i class="far fa-heart"></i>
            </span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4">
            <img src={foto0} className="p-2 img-fluid ratio ratio-1x1" />
          </div>
          <div className="col-12 col-md-8">
            <h3 className="fw-lighter m-4">Sobre mí...</h3>
            <p className="fw-lighter">
              "Me considero doglovers 100%, los paseos además de ser relajantes
              para las mascotas, tambien ayudan a nuestra mente. Tengo 3 perros,
              uno es cachorro y los otros dos son adultos. Todos los días
              acostumbro a ir al parque con ellos. Con el tele-trabajo he podido
              flexibilizar mis tiempos y además me queda para utilizar WalkyDog
              y ganar algo extra."
            </p>
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
            <p></p>
          </div>
          <div className="col-sm-4">
            <span>
              <i className="fab fa-instagram"></i> Instagram
            </span>
            <p></p>
          </div>
          <div className="col-sm-4">
            <span>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
