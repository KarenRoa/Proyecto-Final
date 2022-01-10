import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import foto0 from "../../img/perfil08.png";
import foto1 from "../../img/perfil07.png";
import foto2 from "../../img/perfil06.png";
import foto3 from "../../img/perfil05.png";
import { Link, useParams } from "react-router-dom";
import { FormularioContacto } from "../component/fomularioContacto";
import { QuienesSomos } from "../component/quienesSomos";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="bg-light bg-opacity-50 p-4 rounded-3 text-uppercase text-center">
      <div className="container-fluid py-5 bg-light bg-opacity-75 rounded-3 mt-4">
        <h1 className="display-6 fw-lighter">
          ¿Estás Ocupado o con poco tiempo?
        </h1>
        <p className="col fs-4 fw-light text-center">
          Aquí podrás encontrar a tu{" "}
          <span className="text-warning fw-bolder">paseador@</span> de perro
          ideal
        </p>
        <p className="col fs-4 fw-light text-center">ó</p>
        <Link to={"/registroCuidador"}>
          <div className="boton-paseador">
            <button className="btn btn-outline-dark btn-sm fw-light shadow-sm mb-5">
              ¿QUIERES SER{" "}
              <span className="text-warning fw-bolder">PASEADOR@</span> DE
              PERRO?
            </button>
          </div>
        </Link>

        {/*CARDS ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <div className="container-fluid">
          <div className="row mb-5">
            {/*Card - 01 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={foto0} className="rounded-circle w-75" />
                </div>
                <div className="titulo">
                  <hr className="my-2" />
                  <h5 className="fw-light">Luisa Mella</h5>
                  <hr className="my-2" />
                </div>
                <div className="texto">
                  <p className="fw-light">
                    <small>
                      "Me considero doglovers 100%, los paseos además de ser
                      relajantes para las mascotas, tambien ayudan nuestra
                      mente."
                    </small>
                  </p>
                </div>
                <Link to={"/perfilCuidadorPublico"}>
                  <div className="boton">
                    <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                      VER MÁS...
                    </button>
                  </div>
                </Link>
             
              </div>
            </div>
            {/*Card - 02 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={foto1} className="rounded-circle w-75" />
                </div>
                <div className="titulo">
                  <hr className="my-2" />
                  <h5 className="fw-light">Javier Goméz</h5>
                  <hr className="my-2" />
                </div>
                <div className="texto">
                  <p className="fw-light">
                    <small>
                      "Estar rodeado de perros, ir al parque y compartir con
                      ellos, siempre será una experiencia que me encanta!"
                    </small>
                  </p>
                </div>

                <div className="boton">
                  <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                    VER MÁS...
                  </button>
                </div>
              </div>
            </div>
            {/*Card - 03 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={foto2} className="rounded-circle w-75" />
                </div>
                <div className="titulo">
                  <hr className="my-2" />
                  <h5 className="fw-light">Manuel Rojas</h5>
                  <hr className="my-2" />
                </div>
                <div className="texto">
                  <p className="fw-light">
                    <small>
                      "WalkyDog para mi es una oportunidad de hacer dinero extra
                      a traves de algo hermoso que es el mundo perruno"
                    </small>
                  </p>
                </div>
                <div className="boton">
                  <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                    VER MÁS...
                  </button>
                </div>
              </div>
            </div>
            {/*Card - 04 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="h-100 p-3 bg-light rounded-3 shadow-dm d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={foto3} className="rounded-circle w-75" />
                </div>
                <div className="titulo">
                  <hr className="my-2" />
                  <h5 className="fw-light">Lola Ramirez</h5>
                  <hr className="my-2" />
                </div>
                <div className="texto">
                  <p className="fw-light">
                    <small>
                      "Desde niña tengo un amor incondicional por los perros,
                      creo que son animales muy inteligentes y sensitivos"
                    </small>
                  </p>
                </div>
                <div className="boton">
                  <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
                    VER MÁS...
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Link to={`/todoscuidadores`}>
          <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
            VER TODOS
          </button>
          </Link>
        </div>

        <hr className="my-4" />

        <QuienesSomos />

        <hr className="my-4" />

        <div className="contacto">
          <FormularioContacto />
        </div>
      </div>
    </div>
  );
};
