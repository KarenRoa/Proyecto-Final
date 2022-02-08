import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Galeria = () => {
  const { store, actions } = useContext(Context);

  const [datosRaza, setDatosRaza] = useState("");
  //console.log("desde galeria", store.Imagenes);

  let raza = Object.entries(store.razas);
  const img = Object.entries(store.Imagenes);

  //const items = img.map((ele)=>console.log(ele[1]))

  //   raza.forEach((ele)=>console.log(ele[0]))
  //   const items = raza.map((ele)=>console.log(ele[0]))
  const handleChange = (e) => {
    setDatosRaza(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.getApiImagen(datosRaza);
  };
  return (
    <>
      <div className="container bg-light bg-opacity-75 rounded-3 p-4 mt-5">
        <div className="container-fluid mt-5">
          <div className="text-center">
            <h1 className="display-6 fw-lighter">
              ¿Alguna raza que quieras conocer?
            </h1>
            <p className="col fs-4 fw-light text-center">
              Encuentra y descubre en esta galería una infinidad de{" "}
              <span className="text-warning fw-bolder">razas perrunas</span> !
            </p>
          </div>
        </div>
        <div className="col-10 bg-light bg-opacity-75 text-dark mt-5 mx-auto p-4 rounded-3 shadow-lg my-5">
          <h2 className="text-center">Galería</h2>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="col-12 col-md-8 col-lg-4 mx-auto">
                <select
                  className="form-select text-uppercase"
                  aria-label="Default select example"
                  onChange={handleChange}
                >
                  <option>Seleccione una raza</option>
                  {raza.map((el, index) => {
                    return (
                      <option value={el[0]} key={index}>
                        {el[0]}
                      </option>
                    );
                  })}
                </select>

                <div className="d-grid gap-2 mt-2">
                  <button className="btn btn-outline-dark btn-sm">
                    Buscar tu Raza
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            {img.map((el, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card m-2">
                    <img
                      src={el[1]}
                      className="img-fluid"
                      width={"100%"}
                      height={"200px"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galeria;
