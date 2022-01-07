import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import foto from "../../img/perfil01.jpg";
import foto1 from "../../img/perfil02.jpg";
import foto2 from "../../img/perfil03.png";
import foto3 from "../../img/perfil04.png";
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
              <div className="h-100 p-2 bg-light rounded-3 shadow-sm">
                <img
                  src={foto}
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <hr className="my-2" />
                <h4 className="fw-light">nombre</h4>
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
              <div className="h-100 p-2 bg-light rounded-3 shadow-sm">
                <img
                  src={foto1}
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <hr className="my-2" />
                <h4 className="fw-light">nombre</h4>
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
              <div className="h-100 p-2 bg-light rounded-3 shadow-sm">
                <img
                  src={foto2}
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <hr className="my-2" />
                <h4 className="fw-light">nombre</h4>
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
              <div className="h-100 p-2 bg-light rounded-3 shadow-sm">
                <img
                  src={foto3}
                  width="200"
                  height="200"
                  className="rounded-circle"
                ></img>
                <hr className="my-2" />
                <h4 className="fw-light">nombre</h4>
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
      <div className="container-fluid">
        <div className="row">
          <div className="boxed1 col-md-6">
            <img
              className="mujer"
              src="https://blush.design/api/download?shareUri=6ERJt5MPgrc3rKqt&w=800&h=800&fm=png"
            />
            <img
              className="arbusto"
              src="https://blush.design/api/download?shareUri=-V5lYT3tcwHM1ms4&w=800&h=800&fm=png"
            />
          </div>
          <div className="boxed2 col-md-6">
            <h1 className="display-1">"</h1>
            <span className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              vitae sapien faucibus et vitae velit aenean purus. Fermentum cras
              facilisi habitant elementum diam dignissim pellentesque nibh
              molestie. Phasellus mattis pharetra enim non.
            </span>
            <h1 className="display-1">"</h1>
          </div>
        </div>
      </div>

      <hr className="my-4" />
    </div>
  );
};
