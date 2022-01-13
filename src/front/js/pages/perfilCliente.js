import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/user.jpg";

export const PerfilCliente = () => {
    const { store, actions } = useContext(Context);
  
  
  const { id } = useParams();
  
  useEffect(() => {
    
    //actions.detalleCliente(id);
  }, []);
  
  return (
    <div className="container-fluid  bg-light bg-opacity-50 text-dark p-4 rounded-3 shadow-lg">
       <div className="container my-4 bg-light  text-dark text-center w-75 my-4 p-4 rounded-3 shadow">
      <div className="row d-flex justify-content-between align-items-center">
        <div className=" col-12 col-md-8">
          <h2 className="display-5">Nombre</h2>
        </div>
        <div className="col-12 col-md-4">
          <Link to={`/editarCliente/${id}`} 
                className="text-dark">
                <span className="fs-5"><i className="fas fa-edit me-4"></i></span>
          </Link>
          <span className="fs-5"><i className="fas fa-trash-alt"></i></span>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-4">
          <img src={fotoPerfil} className="rounded-3 p-2 img-fluid"/>
        </div>
        <div className="col-12 col-md-8">
          <p></p>
        </div>
      </div>
      <div className="row">
        <div><h3>Contacto</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <span><i className="fas fa-map-marker-alt"></i> Zona de Atención</span>
          <p></p>
        
        </div>
        <div className="col-sm-4">
          <span><i className="fab fa-instagram"></i> Instagram</span>
          <p></p>
        </div>
        <div className="col-sm-4">
          <span><i className="fab fa-whatsapp"></i> WhatsApp</span>
          <p></p>
        </div>
      </div>
    </div>
    </div>
   
  );
};