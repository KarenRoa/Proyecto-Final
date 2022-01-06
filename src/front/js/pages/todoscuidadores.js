import React from "react";
import "../../styles/todoscuidadores.css";

const Todosloscuidadores = () => {
  return (
    <div>
      <button className="btn btn-dark btn-sm fas fa-home shadow-lg"> Home</button>

      <h1 className="display-6 fw-light text-center text-uppercase">Todos Nuestros Cuidadores</h1>

      <div className="container">
      <p className="col fs-4 fw-light text-center">Si quieres saber mas sobre nuestros cuidadores haz click en ver mas...
       </p>
      </div>

      <div className="container-fluid">
        <div className="row mb-5 ">

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="h-100 p-5 bg-light rounded-3 shadow-lg">
              <img
                src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/canguros_mascotas_paseador_perros.jpg"
                width="200"
                height="200"
                className="rounded-circle"
              ></img>
              <h3 className="fw-light">Brenda Cuevas</h3>
              <hr className="my-2" />
              <p className="fw-light">
                <small>
                  "Me apasiona la biología y los animales, hice una carrera de ello y en mis tiempos libres me dedico a pasear mascotas"
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
                src="https://www.milenio.com/uploads/media/2020/02/04/peta-dice-que-usar-la.jpg"
                width="200"
                height="200"
                className="rounded-circle"
              ></img>
              <h3 className="fw-light">Enzo Roa</h3>
              <hr className="my-2" />
              <p className="fw-light">
                <small className="bg-light">
                  <strong>"Soy paseador con experiencia, he tenido perros desde siempre y tengo gran conexión con ellos. Amo a los perros de corazón, soy de esos que saluda a los perros por la calle"</strong>
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
                 <strong> "Hola, mi nombre es Gerardo y me gustan mucho los animales, en la foto aparece mi esposa quien me acompaña siempre ya que no es solo pasear perros, sino que una terapia para nosotros y para ellos"</strong>
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
                 <strong> "Me llamo Maite y estoy en cuarto medio, me encantan los animales y me gustaría estudiar veterinaria."</strong>
                </small>
              </p>
              <button className="btn btn-dark btn-sm fw-light shadow-lg">
                VER MÁS...
              </button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Todosloscuidadores;
