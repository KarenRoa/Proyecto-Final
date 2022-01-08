import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import foto from "../../img/perfil01.jpg";
import foto1 from "../../img/perfil02.jpg";
import foto2 from "../../img/perfil03.png";
import foto3 from "../../img/perfil04.png";
import { Link, useParams } from "react-router-dom";
import { FormularioContacto } from "../component/fomularioContacto";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="bg-light bg-opacity-50 p-4 rounded-3 text-uppercase text-center">
      <div className="container-fluid py-5 bg-light bg-opacity-75 rounded-3">
        <h1 className="display-6 fw-lighter">
          ¿Estás Ocupado o con poco tiempo?
        </h1>
        <p className="col fs-4 fw-light text-center">
          Aquí podrás encontrar a tu{" "}
          <span className="text-warning fw-bolder">paseador@</span> de perro
          ideal
        </p>
        <p className="col fs-4 fw-light text-center">ó</p>
        <button className="btn btn-outline-dark btn-sm fw-light shadow-sm mb-5">
          ¿QUIERES SER <span className="text-warning fw-bolder">PASEADOR@</span>{" "}
          DE PERRO?
        </button>

        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm">
                <img src={foto} className="rounded-circle w-75" />
                <hr className="my-2" />
                <h5 className="fw-light">Javier Mella</h5>
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
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm">
                <img src={foto1} className="rounded-circle w-75" />
                <hr className="my-2" />
                <h5 className="fw-light">Luisa Goméz</h5>
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
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm">
                <img src={foto2} className="rounded-circle w-75" />
                <hr className="my-2" />
                <h5 className="fw-light">Manuel Rojas</h5>
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
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm">
                <img src={foto3} className="rounded-circle w-75" />
                <hr className="my-2" />
                <h5 className="fw-light">Lola Ramirez</h5>
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

        <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
          VER TODOS
        </button>
      </div>

      <hr className="my-4" />
      <div>
        <h2 className="text-uppercase fst-italic">Quienes Somos</h2>
      </div>

      <div className="container-fluid py-5 bg-light bg-opacity-75 rounded-3">
        <div className="row p-4">
          <div class="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                  class="img-fluid rounded-start"
                />
              </div>
              
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title fw-light">Nombre de app</h4>
                  <p className="card-text fw-light mt-5">
                    <small>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in.
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <h2 className="text-uppercase fst-italic">Contacto</h2>
      </div>
      <div className="box-contacto">
        
      </div>
    </div>
  </div>
  );
};
