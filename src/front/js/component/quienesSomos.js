import React from "react";

export const QuienesSomos = () => {
  return (
    <div id="quienes-somos" className="container-fluid py-5 bg-light bg-opacity-75 rounded-3 shadow-lg text-center">
      <div className="titulo">
        <h2 className="text-uppercase">Quienes Somos</h2>
      </div>
      <div className="row p-4">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-12 col-md-4 col-lg-5 my-auto">
              <img
                src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                className="img-fluid rounded-start"
              />
            </div>

            <div className="col-12 col-md-8 col-lg-7 my-auto">
              <div className="card-body">
                <h2 className="mb-5 fw-bold">Walk-Dogs</h2>
                <p className="card-text fw-light ">
                  <small>
                    "Somos Walk-Dogs, una aplicación web que tiene como misión
                    crear el puente entre aquellos que necesitan encontrar a la
                    persona idónea para pasear a su perro y aquellas personas
                    que necesitan generar algún ingreso extra como paseadores."
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
