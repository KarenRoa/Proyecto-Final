{/*Card - Componente - sin usar*/}
import React from "react";

export const Card = () => {
  return (
  
      <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
        <div className="imagen">
          <img src="..." className="rounded-circle w-75" />
        </div>
        <div className="titulo">
          <hr className="my-2" />
          <h5 className="fw-light">Nombre</h5>
          <hr className="my-2" />
        </div>
        <div className="texto">
          <p className="fw-light">
            <small>
              "Descripción"
            </small>
          </p>
        </div>
        <div className="boton">
          <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
            VER MÁS...
          </button>
        </div>
      </div>
   
  );
};


