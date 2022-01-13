import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";
import fotoPerfil from "../../img/avatarstandar.png";

export const Card = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);

  const cuidador = store.cuidadores.splice(0, 4);

  return (
    <>
      {cuidador.map((item, key) => {
        return (
          <div
            className="col-sm-6 col-md-6 col-lg-3 mb-4 text-center"
            key={key}
          >
            {" "}
            {
              <div className="h-100 p-3 bg-light rounded-3 shadow d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={fotoPerfil} className="rounded-circle w-75" />
                </div>
                <div className="titulo">
                  <hr size="3" className="my-3" />
                  <h5 className="fw-normal">
                    {item.nombre} {item.apellido}
                  </h5>
                  <hr className="my-2" />
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <p className="my-4 fw-light">
                    <small>"{item.descripcion}"</small>
                  </p>
                </div>
                {/*Terminar comuna------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                <div className="comuna">
                  <i className="fas fa-map-marker-alt"></i>

                  <p className="my-4 fw-bold">
                    <small>{item.comuna}</small>
                  </p>
                </div>
               

                <Link to={`/perfilCuidadorPublico/${item.id}`}>
                  <div className="boton">
                    <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                      VER MÁS...
                    </button>
                  </div>
                </Link>
              </div>
            }
          </div>
        );
      })}
    </>
  );
};
