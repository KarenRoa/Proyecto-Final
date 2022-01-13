import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/user.jpg";

export const PerfilCliente = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()
  
  
  const { id } = useParams();

  
  
  useEffect(() => {
    actions.detalleCliente(id);
  }, []);

  const confirmar = () => {
    if(confirm("Esta seguro que eliminar su perfil?"))
	{
	   eliminarCliente(id)
     history.push('/')
	}
	else
	{
	   return false;
	}
  }

  const eliminarCliente = (id) =>{
    actions.deleteCliente(id)
  }
  
  return (
    
    <div className="container bg-dark text-light text-center w-50 my-4 p-4">
      <div className="row d-flex justify-content-between align-items-center">
        <div className=" col-12 col-md-8">
          <h2 className="display-5">{store.detalleCliente.nombre} {store.detalleCliente.apellido}</h2>
        </div>
        <div className="col-12 col-md-4">
          <Link to={`/editarCliente/${id}`} 
                className="text-white">
                <span className="fs-5"><i className="fas fa-edit me-4"></i></span>
          </Link>
          <Link to={'#'} className="text-white">
            <span className="fs-5"><i className="fas fa-trash-alt me-4" onClick={()=> confirmar()}></i></span>
          </Link>

          <Link to={`/`} 
                className="text-white">
                  <span className="fs-5"><i className="fas fa-arrow-left"></i></span>
          </Link>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-4">
          <img src={fotoPerfil} className="rounded-circle p-2 img-fluid"/>
        </div>
        <div className="col-12 col-md-8">
          <p>"{store.detalleCliente.descripcion}"</p>
        </div>
      </div>
      <div className="row">
        <div><h3>Contacto</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <span><i className="fas fa-map-marker-alt"></i> Zona de Atención</span>
          <p>{store.detalleCliente.comuna}</p>
        
        </div>
        <div className="col-sm-4">
          <span><i className="fab fa-whatsapp"></i> WhatsApp</span>
          <p>{store.detalleCliente.telefono}</p>
        </div>
      </div>
    </div>
  );
};