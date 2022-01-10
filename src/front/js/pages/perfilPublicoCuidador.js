import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/user.jpg";

export const PerfilPublicoCuidador = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);

  const confirmar = () => {
    if (confirm("Esta seguro que eliminar su perfil?")) {
      eliminarCuidador(id);
      history.push("/");
    } else {
      return false;
    }
  };

  const eliminarCuidador = (id) => {
    actions.deleteCuidador(id);
  };

  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-12 col-md-8 col-lg-5 mx-auto">
            <div className="p-3 bg-light rounded-3 shadow-lg mb-3">
              <img
                src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/canguros_mascotas_paseador_perros.jpg"
                className="img-fluid"
              ></img>
              <div className="row my-3">
                <div className="col-12 d-flex align-items-center d-flex justify-content-between">
                  <h3 className="">
                    {store.detalleCuidador.nombre}{" "}
                    {store.detalleCuidador.apellido}
                  </h3>
                  <div>
                  <span className="">
                    <i className="far fa-heart me-3 fs-3"></i>
                  </span>
                  <Link to={`/todoscuidadores`} 
                      className="text-black">
                  <span className="fs-3"><i className="fas fa-arrow-left"></i></span>
                </Link>
                  </div>
                </div>
              </div>
              <p className="fw-light">
                <span className="fw-bold">Sobre Mi:</span> {store.detalleCuidador.descripcion}
              </p>
              <div className=" row d-flex">
                <div className="col-12 col-sm-4 text-center">
                  <span>
                    <i className="fas fa-map-marker-alt"></i> Zona de Atención
                  </span>
                  <p>{store.detalleCuidador.comuna}</p>
                </div>
                <div className="col-12 col-sm-4 text-center">
                  <span>
                    <i className="fab fa-instagram"></i> Instagram
                  </span>
                  <p>{store.detalleCuidador.rrss}</p>
                </div>
                <div className="col-12 col-sm-4 text-center">
                  <span>
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </span>
                  <p>{store.detalleCuidador.telefono}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="container bg-dark text-light text-center w-50 my-4 p-4">
    //   <div className="row d-flex justify-content-between align-items-center">
    //     <div className=" col-12 col-md-8">
    //       <h2 className="display-5">{store.detalleCuidador.nombre} {store.detalleCuidador.apellido}</h2>
    //     </div>
    //     <div className="col-12 col-md-4">

    //       <Link to={'#'} className="text-white">
    //         <span className="fs-5"><i className="fas fa-trash-alt me-4" onClick={()=> confirmar()}></i></span>
    //       </Link>

    //       <Link to={`/todoscuidadores`}
    //             className="text-white">
    //               <span className="fs-5"><i className="fas fa-arrow-left"></i></span>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="row d-flex align-items-center">
    //     <div className="col-12 col-md-4">
    //       <img src={fotoPerfil} className="rounded-circle p-2 img-fluid"/>
    //     </div>
    //     <div className="col-12 col-md-8">
    //       <p>"{store.detalleCuidador.descripcion}"</p>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div><h3>Contacto</h3></div>
    //   </div>
    //   <div className="row">
    //     <div className="col-sm-4">
    //       <span><i className="fas fa-map-marker-alt"></i> Zona de Atención</span>
    //       <p>{store.detalleCuidador.comuna}</p>

    //     </div>
    //     <div className="col-sm-4">
    //       <span><i className="fab fa-instagram"></i> Instagram</span>
    //       <p>{store.detalleCuidador.rrss}</p>
    //     </div>
    //     <div className="col-sm-4">
    //       <span><i className="fab fa-whatsapp"></i> WhatsApp</span>
    //       <p>{store.detalleCuidador.telefono}</p>
    //     </div>
    //   </div>
    // </div>
  );
};
