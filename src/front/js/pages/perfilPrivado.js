import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import fotoPerfil from "../../img/user.jpg";

export const PerfilPrivado = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()
  
  
  const { id } = useParams();

  
  
  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);

  const confirmar = () => {
    if(confirm("Esta seguro que eliminar su perfil?"))
	{
	   eliminarCuidador(id)
     history.push('/')
	}
	else
	{
	   return false;
	}
  }

  const eliminarCuidador = (id) =>{
    actions.deleteCuidador(id)
  }
  
  return (
    
    <div className="container bg-dark text-light text-center w-50 my-4 p-4">
      <div className="row d-flex justify-content-between align-items-center">
        <div className=" col-12 col-md-8">
          <h2 className="display-5">{store.detalleCuidador.nombre} {store.detalleCuidador.apellido}</h2>
        </div>
        <div className="col-12 col-md-4">
          <Link to={`/editarCuidador/${id}`} 
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
          <p>"{store.detalleCuidador.descripcion}"</p>
        </div>
      </div>
      <div className="row">
        <div><h3>Contacto</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <span><i className="fas fa-map-marker-alt"></i> Zona de Atenci??n</span>
          <p>{store.detalleCuidador.comuna}</p>
        
        </div>
        <div className="col-sm-4">
          <span><i className="fab fa-instagram"></i> Instagram</span>
          <p>{store.detalleCuidador.rrss}</p>
        </div>
        <div className="col-sm-4">
          <span><i className="fab fa-whatsapp"></i> WhatsApp</span>
          <p>{store.detalleCuidador.telefono}</p>
        </div>
      </div>
    </div>
  );
};
