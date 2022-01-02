import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";

export const DetalleCuidador = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    actions.detalleCuidador(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 m-auto mt-5">
          <div className="card text-center">
            <div className="card-header">{store.detalleCuidador.nombre} {store.detalleCuidador.apellido}</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};
