import React from "react";

export const QuienesSomos = () => {
  return (
    <div className="container-fluid py-5 bg-light bg-opacity-75 rounded-3">
      <div className="titulo">
        <h2 className="text-uppercase">Quienes Somos</h2>
      </div>
      <div className="row p-4">
        <div class="card mb-3 border-0 ">
          <div className="row g-0">
            <div className="col-md-4 my-auto">
              <img
                src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                className="img-fluid rounded-start"
              />
            </div>

            <div className="col-md-8 my-auto">
              <div className="card-body">
                <p className="card-text fw-light ">
                  <small>
                    "Somos WalkyDog, una aplicación web que tiene como misión
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
