import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="bg-light p-4 rounded-3 text-uppercase text-center">
      <div className="container py-5">
        <h1 className="display-6 fw-lighter">
          ¿Estás Ocupado o con poco tiempo?
        </h1>
        <p className="col fs-4 fw-light text-center">
          Aquí podrás encontrar a tu{" "}
          <span className="text-warning">paseador@</span> de perro ideal
        </p>
        <p className="col fs-4 fw-light text-center">ó</p>
        <button className="btn btn-outline-dark btn-sm fw-light shadow-sm mb-5">
          ¿QUIERES SER PASEADOR@ DE PERRO?
        </button>

        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="h-100 p-5 bg-light rounded-3 shadow-sm">
                <img
                  src="https://images.blush.design/QuHK5J2yl2vqKxCdOHSc?w=920&auto=compress&cs=srgb"
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <h3 className="fw-light">nombre</h3>
                <hr className="my-2" />
                <p className="fw-light">
                  <small>
                    Breve descripcion de el cuidador, para ser visto por las
                    personas que visiten el sitio web
                  </small>
                </p>
                <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                  VER MÁS...
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="h-100 p-5 bg-light rounded-3 shadow-sm">
              <img
                  src="https://images.blush.design/QuHK5J2yl2vqKxCdOHSc?w=920&auto=compress&cs=srgb"
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <h3 className="fw-light">nombre</h3>
                <hr className="my-2" />
                <p className="fw-light">
                  <small>
                    Breve descripcion de el cuidador, para ser visto por las
                    personas que visiten el sitio web
                  </small>
                </p>
                <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                  VER MÁS...
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="h-100 p-5 bg-light rounded-3 shadow-sm">
              <img
                  src="https://images.blush.design/QuHK5J2yl2vqKxCdOHSc?w=920&auto=compress&cs=srgb"
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <h3 className="fw-light">nombre</h3>
                <hr className="my-2" />
                <p className="fw-light">
                  <small>
                    Breve descripcion de el cuidador, para ser visto por las
                    personas que visiten el sitio web
                  </small>
                </p>
                <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                  VER MÁS...
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="h-100 p-5 bg-light rounded-3 shadow-sm">
              <img
                  src="https://images.blush.design/QuHK5J2yl2vqKxCdOHSc?w=920&auto=compress&cs=srgb"
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <h3 className="fw-light">nombre</h3>
                <hr className="my-2" />
                <p className="fw-light">
                  <small>
                    Breve descripcion de el cuidador, para ser visto por las
                    personas que visiten el sitio web
                  </small>
                </p>
                <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                  VER MÁS...
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
          VER TODOS
        </button>
      </div>

      <hr className="my-4" />

      <div className="bg-light">
        <div>
          <h1 className="text-uppercase fst-italic">quienes somos</h1>
        </div>
      </div>
      <div className="col-sm-6 col-md-6">
        <img
          src="https://blush.design/api/download?shareUri=6ERJt5MPgrc3rKqt&w=800&h=800&fm=png"
          className=""
          width="600"
          height="600"
        />
      </div>
    </div>
  );
};
