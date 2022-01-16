import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import fotoPerfil from "../../img/avatarstandar.png";

const Todosloscuidadores = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    actions.obtenerCuidadores();
  }, []);

  return (
    <div className="container bg-light bg-opacity-50 p-4 text-uppercase">
      <div className="container bg-light bg-opacity-75 my-4 pt-4 shadow rounded-3">
        <div className="row mt-4">
          <div className="col">
            <h2 className="display-6 fw-light text-center ">
              Todos Nuestros Cuidadores
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="col fs-5 fw-light text-center">
              Si quieres saber más sobre nuestros <span className="text-warning">cuidadores</span> haz click en Ver
              más...
            </p>
          </div>
        </div>
      </div>
      {/*Cards------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div className="row">
        {store.cuidadores.map((el, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-6 col-lg-3 mb-4 text-center text-uppercase">
              <div className="h-100 p-3 bg-light rounded-3 shadow d-flex flex-column justify-content-between">
                <div className="imagen">
                  <img src={fotoPerfil} className="img-fluid rounded-3 w-100" />
                </div>
                <div className="titulo mt-3">
                  {/* <hr size="2" className="my-2" /> */}
                  <h5 className="fw-normal">
                    {el.nombre} {el.apellido}
                  </h5>
                  {/* <hr size="2" className="my-2" /> */}
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <p className="my-3 fw-light">
                    <small>"{el.descripcion}"</small>
                  </p>
                </div>
                <div className="d-flex justify-content-center text-muted">
                  <span className="my-2 fs-5">
                    <i className="fas fa-map-marker-alt pt-2"></i>
                  </span>

                  <p className="my-2 pt-2 px-2">
                    <small>{el.comuna}</small>
                  </p>
                </div>
                <Link to={`/perfilCuidadorPublico/${el.id}`}>
                  <button className="btn btn-dark btn-sm fw-light shadow-lg">
                    VER MÁS...
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /* <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="h-100 p-5 bg-light rounded-3 shadow-lg">
              <img
                src="https://www.milenio.com/uploads/media/2020/02/04/peta-dice-que-usar-la.jpg"
                width="200"
                height="200"
                className="rounded-circle"
              ></img>
              <h3 className="fw-light">Enzo Roa</h3>
              <hr className="my-2" />
              <p className="fw-light">
                <small className="bg-light">
                  <strong>
                    "Soy paseador con experiencia, he tenido perros desde
                    siempre y tengo gran conexión con ellos. Amo a los perros de
                    corazón, soy de esos que saluda a los perros por la calle"
                  </strong>
                </small>
              </p>
              <button className="btn btn-dark btn-sm fw-light shadow-lg">
                VER MÁS...
              </button>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="h-100 p-5 bg-light rounded-3 shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQIKMi6XBnvYCvYH5c__OW5KPcRq7HAacFomoOwKWuw4LRu8--iO5S-8l15oLzc49WhM&usqp=CAU"
                width="200"
                height="200"
                className="rounded-circle"
              ></img>
              <h3 className="fw-light">Gerardo Reyes</h3>
              <hr className="my-2" />
              <p className="fw-light">
                <small className="bg-light">
                  <strong>
                    {" "}
                    "Hola, mi nombre es Gerardo y me gustan mucho los animales,
                    en la foto aparece mi esposa quien me acompaña siempre ya
                    que no es solo pasear perros, sino que una terapia para
                    nosotros y para ellos"
                  </strong>
                </small>
              </p>
              <button className="btn btn-dark btn-sm fw-light shadow-lg">
                VER MÁS...
              </button>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="h-100 p-5 bg-light rounded-3 shadow-lg">
              <img
                src="http://www.escuelacaninamaya.com/images/ninos/puber-met-hond.jpg"
                width="200"
                height="200"
                className="rounded-circle"
              ></img>
              <h3 className="fw-light">Maite Benitez</h3>
              <hr className="my-2" />
              <p className="fw-light">
                <small className="bg-light">
                  <strong>
                    {" "}
                    "Me llamo Maite y estoy en cuarto medio, me encantan los
                    animales y me gustaría estudiar veterinaria."
                  </strong>
                </small>
              </p>
              <button className="btn btn-dark btn-sm fw-light shadow-lg">
                VER MÁS...
              </button>
            </div>
          </div> */
}
export default Todosloscuidadores;
