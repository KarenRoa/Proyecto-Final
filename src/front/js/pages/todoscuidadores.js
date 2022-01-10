import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";

const Todosloscuidadores = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  

  useEffect(() => {
    actions.obtenerCuidadores();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <h1 className="display-6 fw-light text-center text-uppercase">
            Todos Nuestros Cuidadores
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="col fs-4 fw-light text-center">
            Si quieres saber mas sobre nuestros cuidadores haz click en ver
            más...
          </p>
        </div>
      </div>

      <div className="row">
        {store.cuidadores.map((el, index) => {
          return (
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
              <div className="p-3 bg-light rounded-3 shadow-lg mb-3">
                <img
                  src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/canguros_mascotas_paseador_perros.jpg"
                  className="img-fluid"
                ></img>
                <h3 className="fw-light mt-3">
                  {el.nombre} {el.apellido}
                </h3>
                <hr className="my-2" />
                <p className="fw-light">
                  <small>{el.descripcion}</small>
                </p>
                <Link to={`/perfilPrivado/${el.id}`}>
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
